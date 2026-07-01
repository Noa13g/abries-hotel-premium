import fs from "node:fs/promises";

const origin = "https://www.abrieshotel.fr";
const corePaths = [
  "/",
  "/hebergements-w1",
  "/chambres-doubles-et-twin-w1",
  "/chambres-familiales-w1",
  "/chambres-refuge-w1",
  "/restaurant-le-refuge-w1",
  "/bar-lounge-la-lauze-w1",
  "/espace-forme-w1",
  "/activites-montagne-w1",
  "/traiteur-privatisation-w1",
  "/contact",
];

function absoluteUrl(pathOrUrl) {
  return new URL(pathOrUrl, origin).href;
}

function decodeEntities(input = "") {
  return input
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(html = "") {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function getMeta(html, name) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    const attrs = Object.fromEntries(
      [...tag.matchAll(/\s([a-zA-Z:-]+)=(["'])(.*?)\2/g)].map((attr) => [
        attr[1].toLowerCase(),
        decodeEntities(attr[3].trim()),
      ]),
    );
    if (attrs.name === name || attrs.property === name) {
      return attrs.content || "";
    }
  }
  return "";
}

function getTagTexts(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi"))]
    .map((match) => stripTags(match[1]))
    .filter(Boolean);
}

function getImages(html, pageUrl) {
  const images = [];
  const ogImage = getMeta(html, "og:image");
  if (ogImage) images.push({ src: absoluteUrl(ogImage), alt: "Open Graph image", source: "og:image" });

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\s(?:src|data-src)=["']([^"']+)["']/i)?.[1];
    if (!src) continue;
    const alt = tag.match(/\salt=["']([^"']*)["']/i)?.[1] ?? "";
    images.push({
      src: new URL(src, pageUrl).href,
      alt: decodeEntities(alt.trim()),
      source: "img",
    });
  }

  return [...new Map(images.map((image) => [image.src, image])).values()];
}

function getInternalLinks(html, pageUrl) {
  const links = [];
  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const href = match[1];
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
    const url = new URL(href, pageUrl);
    if (url.hostname !== "www.abrieshotel.fr") continue;
    links.push({ url: url.href.replace(/\/$/, ""), text: stripTags(match[2]).slice(0, 120) });
  }
  return [...new Map(links.map((link) => [link.url, link])).values()];
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Codex audit bot (public content extraction)",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });
  return { status: response.status, text: await response.text() };
}

async function main() {
  await fs.mkdir("content/audit", { recursive: true });
  await fs.mkdir("content/source", { recursive: true });

  const sitemapXml = (await fetchText(`${origin}/sitemap.xml`)).text;
  const sitemapImageXml = (await fetchText(`${origin}/sitemapimage.xml`)).text;
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeEntities(match[1]));
  const sitemapImages = [...sitemapImageXml.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map((match) =>
    decodeEntities(match[1]),
  );

  const pages = [];
  let businessSchema = null;
  for (const path of corePaths) {
    const url = absoluteUrl(path);
    const { status, text: html } = await fetchText(url);
    if (path === "/") {
      const schemaText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
      if (schemaText) {
        try {
          businessSchema = JSON.parse(schemaText);
        } catch {
          businessSchema = null;
        }
      }
    }
    const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    const description = getMeta(html, "description");
    const h1 = getTagTexts(html, "h1");
    const h2 = getTagTexts(html, "h2");
    const images = getImages(html, url);
    const links = getInternalLinks(html, url);
    const mainText = stripTags(html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html).slice(0, 2200);

    pages.push({
      url,
      status,
      title,
      description,
      h1,
      h2,
      images,
      links,
      excerpt: mainText,
    });
  }

  const pageMd = [
    "# Pages importantes",
    "",
    `Audit public lance depuis ${origin}.`,
    "",
    "## Noyau editorial",
    "",
    ...pages.flatMap((page) => [
      `### ${page.title || page.url}`,
      "",
      `- URL: ${page.url}`,
      `- Statut HTTP: ${page.status}`,
      `- Meta description: ${page.description || "TODO_PUBLIC_DATA: description absente"}`,
      `- H1: ${page.h1.join(" | ") || "TODO_PUBLIC_DATA: H1 absent"}`,
      `- H2 reperes: ${page.h2.slice(0, 8).join(" | ") || "TODO_PUBLIC_DATA: H2 absents"}`,
      "",
    ]),
    "## Sitemap brut",
    "",
    `- URLs detectees: ${sitemapUrls.length}`,
    `- Images detectees via sitemap image: ${sitemapImages.length}`,
    "",
    ...sitemapUrls.slice(0, 160).map((url) => `- ${url}`),
    "",
  ].join("\n");

  const contentMd = [
    "# Inventaire de contenu",
    "",
    ...pages.flatMap((page) => [
      `## ${page.title || page.url}`,
      "",
      `Source: ${page.url}`,
      "",
      "```txt",
      page.excerpt || "TODO_PUBLIC_DATA: contenu principal non extrait",
      "```",
      "",
    ]),
  ].join("\n");

  const imagesMd = [
    "# Images publiques",
    "",
    "Images extraites des pages publiques et du sitemap image. Les droits d'usage devront etre confirmes avant reutilisation definitive.",
    "",
    ...pages.flatMap((page) => [
      `## ${page.url}`,
      "",
      ...page.images.slice(0, 30).map((image) => `- ${image.src}${image.alt ? ` — alt: ${image.alt}` : ""}`),
      "",
    ]),
    "## Sitemap image",
    "",
    ...sitemapImages.slice(0, 180).map((url) => `- ${url}`),
    "",
  ].join("\n");

  const oldUrlsMd = [
    "# Anciennes URLs",
    "",
    "Inventaire issu du sitemap public. Les pages `-w1` semblent correspondre aux pages prioritaires; les `-w0`, `details-*`, `*-z*` et archives SEO seront a rationaliser.",
    "",
    ...sitemapUrls.map((url) => `- ${url}`),
    "",
  ].join("\n");

  const redirectsMd = [
    "# Redirections proposees",
    "",
    "| Ancienne URL | Nouvelle URL cible | Note |",
    "|---|---|---|",
    "| / | / | Home premium |",
    "| /hebergements-w1 | /chambres | Hub chambres |",
    "| /chambres-doubles-et-twin-w1 | /chambres/doubles-twin | Detail chambres doubles/twin |",
    "| /chambres-familiales-w1 | /chambres/familiales | Detail chambres familiales |",
    "| /chambres-refuge-w1 | /chambres/refuge | Detail chambre refuge/groupe |",
    "| /restaurant-le-refuge-w1 | /restaurant | Restaurant Le Refuge |",
    "| /bar-lounge-la-lauze-w1 | /bar-lounge | Bar Lounge La Lauze |",
    "| /espace-forme-w1 | /bien-etre | Espace forme, spa, massages |",
    "| /activites-montagne-w1 | /experiences | Activites hiver/ete |",
    "| /traiteur-privatisation-w1 | /privatisation | Evenements, mariages, seminaires, traiteur |",
    "| /contact | /contact | Contact/reservation |",
    "| /details-* | Page canonique correspondante | A mapper selon theme detecte: chambres, restaurant, bar, bien-etre, privatisation, activites |",
    "| /*-z* | Page canonique correspondante ou 410 | Pages SEO locales a trier: conserver uniquement si trafic/SEO prouve |",
    "",
  ].join("\n");

  const unknownsMd = [
    "# Inconnues",
    "",
    "- PDF `codex_info.pdf`: chemin temporaire non accessible au moment de l'audit; a redeposer si son contenu doit etre integre.",
    "- TODO_PUBLIC_DATA: tarifs exacts et conditions de reservation.",
    "- TODO_PUBLIC_DATA: surfaces exactes des chambres.",
    "- TODO_PUBLIC_DATA: horaires exacts restaurant/bar/espace forme.",
    "- TODO_PUBLIC_DATA: capacites exactes hotel, restaurant, privatisation et seminaires.",
    "- TODO_PUBLIC_DATA: menu actuel, carte des vins, brunch, demi-pension.",
    "- TODO_PUBLIC_DATA: details spa/massages: equipements, durees, prix, disponibilites.",
    "- TODO_PUBLIC_DATA: droits d'utilisation des images publiques Jalis/media.",
    "- TODO_PUBLIC_DATA: lien de reservation officiel si different du formulaire contact.",
    "",
  ].join("\n");

  const structureMd = [
    "# Structure proposee du nouveau site",
    "",
    "## Navigation principale",
    "",
    "- Accueil",
    "- Chambres",
    "- Restaurant Le Refuge",
    "- Bar Lounge La Lauze",
    "- Bien-etre",
    "- Experiences Queyras",
    "- Privatisation",
    "- Contact / Reservation",
    "",
    "## Pages",
    "",
    "### /",
    "Hero immersif, promesse chalet ancien premium, reservation, introduction, preuves, univers principaux, galerie, contact.",
    "",
    "### /chambres",
    "Hub des hebergements: doubles/twin, familiales, refuge/groupe, PMR si confirme.",
    "",
    "### /chambres/doubles-twin",
    "Chambres 2 personnes, confort, petit-dejeuner, demi-pension si confirme.",
    "",
    "### /chambres/familiales",
    "Chambres famille, enfants, acces pistes, espace enfant si confirme.",
    "",
    "### /chambres/refuge",
    "Grande capacite/groupes sportifs/randonneurs.",
    "",
    "### /restaurant",
    "Restaurant Le Refuge, cuisine locale, petit-dejeuner, demi-pension, specialites.",
    "",
    "### /bar-lounge",
    "La Lauze, apres-ski, cave, concerts/planches si confirme.",
    "",
    "### /bien-etre",
    "Espace forme, spa, sauna/bain nordique/massages si confirme publiquement.",
    "",
    "### /experiences",
    "Hiver, ete, ski, randonnee, guides, faune, frontiere italienne.",
    "",
    "### /privatisation",
    "Mariages, seminaires, team building, traiteur, groupes.",
    "",
    "### /contact",
    "Formulaire, telephone, adresse, carte, reservation.",
    "",
  ].join("\n");

  const factsMd = [
    "# Faits publics extraits",
    "",
    "Ces informations proviennent du site public et ne doivent pas etre extrapolees au-dela de ce qui est indique.",
    "",
    `- Nom: ${businessSchema?.name ?? "ABRIES HOTEL"}`,
    `- Description schema.org: ${businessSchema?.description ?? "TODO_PUBLIC_DATA"}`,
    `- Telephone: ${businessSchema?.telephone ?? "TODO_PUBLIC_DATA"}`,
    `- Adresse: ${businessSchema?.address?.streetAddress ?? "TODO_PUBLIC_DATA"}, ${businessSchema?.address?.postalCode ?? ""} ${businessSchema?.address?.addressLocality ?? ""}`,
    `- Carte: ${businessSchema?.hasMap ?? "TODO_PUBLIC_DATA"}`,
    `- Facebook: ${businessSchema?.sameAs?.find((url) => url.includes("facebook")) ?? "TODO_PUBLIC_DATA"}`,
    `- Instagram: ${businessSchema?.sameAs?.find((url) => url.includes("instagram")) ?? "TODO_PUBLIC_DATA"}`,
    "- Capacite chambres publique: 11 chambres doubles, 5 chambres familiales, 4 chambres refuge selon meta description hebergements.",
    "- Positionnement public: hotel 3 etoiles, Abriès-Ristolas, Queyras, au pied/proximite des pistes, restaurant Le Refuge, bar lounge La Lauze, espace forme/detente.",
    "",
  ].join("\n");

  await fs.writeFile("content/audit/pages.md", pageMd);
  await fs.writeFile("content/audit/content-inventory.md", contentMd);
  await fs.writeFile("content/audit/images.md", imagesMd);
  await fs.writeFile("content/audit/old-urls.md", oldUrlsMd);
  await fs.writeFile("content/audit/redirects.md", redirectsMd);
  await fs.writeFile("content/audit/unknowns.md", unknownsMd);
  await fs.writeFile("content/audit/public-facts.md", factsMd);
  await fs.writeFile("content/site-structure.md", structureMd);
  await fs.writeFile("content/source/crawl-summary.json", JSON.stringify({ sitemapUrls, sitemapImages, pages }, null, 2));

  console.log(JSON.stringify({ pages: pages.length, sitemapUrls: sitemapUrls.length, sitemapImages: sitemapImages.length }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
