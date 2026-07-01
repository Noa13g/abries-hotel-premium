export type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
  note: string;
};

export const redirects: RedirectRule[] = [
  { source: "/", destination: "/", permanent: true, note: "Home premium" },
  { source: "/hebergements-w1", destination: "/chambres", permanent: true, note: "Hub chambres" },
  { source: "/hebergements-w0", destination: "/chambres", permanent: true, note: "Doublon hub chambres" },
  {
    source: "/chambres-doubles-et-twin-w1",
    destination: "/chambres/doubles-twin",
    permanent: true,
    note: "Chambres doubles et twin",
  },
  {
    source: "/chambres-doubles-et-twin-w0",
    destination: "/chambres/doubles-twin",
    permanent: true,
    note: "Doublon chambres doubles et twin",
  },
  {
    source: "/chambres-familiales-w1",
    destination: "/chambres/familiales",
    permanent: true,
    note: "Chambres familiales",
  },
  {
    source: "/chambres-familiales-w0",
    destination: "/chambres/familiales",
    permanent: true,
    note: "Doublon chambres familiales",
  },
  {
    source: "/chambres-refuge-w1",
    destination: "/chambres/refuge",
    permanent: true,
    note: "Chambres refuge",
  },
  {
    source: "/chambres-refuge-w0",
    destination: "/chambres/refuge",
    permanent: true,
    note: "Doublon chambres refuge",
  },
  {
    source: "/restaurant-le-refuge-w1",
    destination: "/restaurant",
    permanent: true,
    note: "Restaurant Le Refuge",
  },
  {
    source: "/restaurant-le-refuge-w0",
    destination: "/restaurant",
    permanent: true,
    note: "Doublon restaurant",
  },
  {
    source: "/bar-lounge-la-lauze-w1",
    destination: "/bar-lounge",
    permanent: true,
    note: "Bar Lounge La Lauze",
  },
  {
    source: "/bar-lounge-la-lauze-w0",
    destination: "/bar-lounge",
    permanent: true,
    note: "Doublon bar lounge",
  },
  { source: "/espace-forme-w1", destination: "/bien-etre", permanent: true, note: "Espace forme" },
  { source: "/espace-forme-w0", destination: "/bien-etre", permanent: true, note: "Doublon espace forme" },
  {
    source: "/activites-montagne-w1",
    destination: "/experiences",
    permanent: true,
    note: "Activités hiver/été",
  },
  {
    source: "/activites-montagne-w0",
    destination: "/experiences",
    permanent: true,
    note: "Doublon activités",
  },
  {
    source: "/traiteur-privatisation-w1",
    destination: "/privatisation",
    permanent: true,
    note: "Événements et traiteur",
  },
  {
    source: "/traiteur-privatisation-w0",
    destination: "/privatisation",
    permanent: true,
    note: "Doublon privatisation",
  },
  { source: "/contact", destination: "/contact", permanent: true, note: "Contact et réservation" },
  {
    source: "/details-:slug*",
    destination: "/",
    permanent: false,
    note: "TODO_REDIRECT_MAPPING: router vers la page canonique selon le thème détecté.",
  },
  {
    source: "/:slug*-z:id",
    destination: "/",
    permanent: false,
    note: "TODO_REDIRECT_MAPPING: pages SEO locales à trier, conserver seulement si trafic prouvé.",
  },
];
