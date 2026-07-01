import Image from "next/image";
import {
  Bath,
  BedDouble,
  CalendarDays,
  ChevronRight,
  Flame,
  MapPin,
  Menu,
  Mountain,
  Snowflake,
  Trees,
  Utensils,
  Wine,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2400&q=90";
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/abries-hotel-premium" : "";
const brandSign = `${basePath}/brand/enseigne-abries-hotel.png`;

const atmospheres = [
  {
    icon: BedDouble,
    title: "Chambres de chalet",
    text: "Bois patiné, linge clair, calme épais et réveils face aux reliefs du Queyras.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Utensils,
    title: "Restaurant Le Refuge",
    text: "Une table généreuse, de saison, pensée pour les grandes faims d’après montagne.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Wine,
    title: "Bar Lounge La Lauze",
    text: "Boiseries, pierre, lumières basses et verres tranquilles à l’heure du retour.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85",
  },
];

const gallery = [
  {
    title: "Bâtisse ancienne",
    image:
      "https://images.unsplash.com/photo-1517320964276-a002fa203177?auto=format&fit=crop&w=1300&q=85",
  },
  {
    title: "Feu et bois",
    image:
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Table alpine",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Neige du Queyras",
    image:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1200&q=85",
  },
];

const experiences = [
  ["Hiver", "Ski, raquettes, neige silencieuse et retours près du feu."],
  ["Été", "Alpages, torrents, cols et longues soirées en altitude."],
  ["Bien-être", "Espace forme, massages et récupération après l’effort."],
  ["Privatisation", "Une maison alpine pour rassembler famille, équipe ou amis."],
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#25190f] text-[#f8eddc]">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.055] mix-blend-soft-light grain-layer" />

      <section className="relative min-h-screen overflow-hidden border-b border-[#6f5636]/50">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center motion-safe:animate-[slow-zoom_22s_ease-out_forwards]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,20,10,0.86),rgba(34,20,10,0.52)_42%,rgba(34,20,10,0.2)),linear-gradient(180deg,rgba(18,15,10,0.28),rgba(18,15,10,0.78))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#25190f] to-transparent" />

        <nav className="fixed left-1/2 top-4 z-40 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 border border-[#e6d1ad]/25 bg-[#2a1a0f]/72 shadow-2xl shadow-black/25 backdrop-blur-md sm:top-6">
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            <a href="#" className="flex items-center gap-3">
              <Image
                src={brandSign}
                alt="Abriès Hôtel, chalet de montagne"
                width={240}
                height={120}
                priority
                className="h-12 w-auto object-contain sm:h-14"
              />
              <span className="hidden border-l border-[#e6d1ad]/28 pl-4 text-[0.65rem] uppercase tracking-[0.28em] text-[#dec8a2] xl:block">
                Maison de montagne
              </span>
            </a>

            <div className="hidden items-center gap-7 text-sm text-[#f4e3c4]/82 lg:flex">
              <a href="#maison" className="transition hover:text-white">
                La maison
              </a>
              <a href="#chambres" className="transition hover:text-white">
                Chambres
              </a>
              <a href="#table" className="transition hover:text-white">
                Table
              </a>
              <a href="#experiences" className="transition hover:text-white">
                Queyras
              </a>
            </div>

            <a
              href="#reservation"
              className="hidden border border-[#f3ddb6]/40 bg-[#f0d39a] px-5 py-3 text-sm font-semibold text-[#2a1a0f] shadow-lg shadow-black/20 transition hover:bg-[#fff1d5] md:inline-flex"
            >
              Réserver
            </a>
            <button
              className="grid size-11 place-items-center border border-[#e6d1ad]/30 bg-[#f1dfbd]/10 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pb-6 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-3xl pb-10 sm:pb-14">
            <Image
              src={brandSign}
              alt="Enseigne Abriès Hôtel"
              width={640}
              height={320}
              priority
              className="mb-7 h-auto w-full max-w-[25rem] drop-shadow-2xl sm:max-w-[34rem]"
            />
            <div className="mb-6 inline-flex items-center gap-2 border border-[#e6d1ad]/30 bg-[#2b1b10]/58 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#f3ddb6] backdrop-blur-sm">
              <MapPin className="size-4" />
              Abriès-Ristolas · Queyras
            </div>
            <h1 className="font-serif text-5xl leading-[0.95] text-[#fff6e6] drop-shadow-2xl sm:text-7xl lg:text-8xl">
              L’âme d’un chalet, le confort d’un hôtel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f6e5c9]/88 sm:text-xl">
              À Abriès-Ristolas, une adresse de montagne où l’on vient dormir,
              dîner, respirer et retrouver le goût des choses simples.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center gap-2 border border-[#f5dfb8]/35 bg-[#f0d39a] px-7 py-4 font-semibold text-[#26170c] shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#fff1d5]"
              >
                Réserver mon séjour
                <CalendarDays className="size-5" />
              </a>
              <a
                href="#maison"
                className="inline-flex items-center justify-center gap-2 border border-[#f5dfb8]/30 bg-[#2b1b10]/52 px-7 py-4 font-semibold text-[#fff4dd] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#3a2516]/70"
              >
                Découvrir l’hôtel
                <ChevronRight className="size-5" />
              </a>
            </div>
          </div>

          <div
            id="reservation"
            className="grid gap-0 border border-[#e6d1ad]/30 bg-[#f6ead4] p-2 text-[#2b1a0e] shadow-2xl shadow-black/35 md:grid-cols-[1fr_1fr_1fr_auto]"
          >
            {["Arrivée", "Départ", "Voyageurs"].map((label, index) => (
              <div
                key={label}
                className="border-b border-[#cab38c] px-5 py-4 last:border-b-0 md:border-b-0 md:border-r"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#806746]">
                  {label}
                </p>
                <p className="mt-2 font-serif text-xl">
                  {index === 2 ? "2 adultes" : "Choisir"}
                </p>
              </div>
            ))}
            <a
              href="mailto:contact@abrieshotel.fr?subject=Demande%20de%20séjour%20-%20Abriès%20Hôtel"
              className="inline-flex min-h-16 items-center justify-center bg-[#29402d] px-7 font-semibold text-[#fff4dd] transition hover:bg-[#3b583f]"
            >
              Voir les disponibilités
            </a>
          </div>
        </div>
      </section>

      <section
        id="maison"
        className="relative border-b border-[#d7c3a0] bg-[#f4ead8] px-5 py-20 text-[#2a1b10] sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="absolute inset-0 opacity-[0.18] paper-layer" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="border-l border-[#8d704a] pl-6">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#7b5d37]">
              Chalet ancien rénové
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Une bâtisse de montagne avec des murs qui semblent déjà connaître
              vos retours de balade.
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-lg leading-8 text-[#66533d]">
              Ici, le premium ne cherche pas à impressionner. Il se devine dans
              l’accueil, la chaleur des matières, la table du soir, le calme des
              chambres et cette façon très alpine de prendre soin sans en faire
              trop.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Bois ancien", "Matières vraies"],
                ["Pierre & lauze", "Ancrage local"],
                ["Feu doux", "Après-ski chaleureux"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="border border-[#d2bb94] bg-[#fbf4e8]/68 p-5 shadow-sm"
                >
                  <p className="font-serif text-2xl text-[#2b1a0e]">{value}</p>
                  <p className="mt-1 text-sm text-[#756148]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="chambres" className="bg-[#2a1b10] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 border-b border-[#8b6b43]/70 pb-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#d7b476]">
                Séjourner
              </p>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight text-[#fff4dd] sm:text-6xl">
                Des espaces simples, beaux, solides, faits pour dormir vraiment.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#d9c6a8]/76">
              Pas d’effet de scène inutile: des chambres de montagne, des
              matières naturelles, une sensation de refuge et juste ce qu’il
              faut de raffinement.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {atmospheres.map((card) => (
              <article
                key={card.title}
                className="group border border-[#8b6b43]/60 bg-[#321f12] shadow-2xl shadow-black/25"
              >
                <div
                  className="h-80 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="p-6">
                  <card.icon className="mb-6 size-8 text-[#d7b476]" />
                  <h3 className="font-serif text-3xl text-[#fff4dd]">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#d9c6a8]/72">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="table"
        className="grid border-y border-[#d0b98d] bg-[#efe0c8] text-[#2a1b10] lg:grid-cols-2"
      >
        <div className="min-h-[34rem] bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center" />
        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <Flame className="mb-6 size-10 text-[#8a5d2d]" />
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#7b5d37]">
              Restaurant Le Refuge
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Une table de montagne, généreuse et sincère.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#66533d]">
              Après la neige, les sentiers ou la route des cols, on retrouve le
              plaisir d’une salle chaude, d’une assiette réconfortante et d’une
              hospitalité sans manières.
            </p>
          </div>
        </div>
      </section>

      <section
        id="experiences"
        className="relative bg-[#213224] px-5 py-20 text-[#f8eddc] sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="absolute inset-0 opacity-[0.08] paper-layer" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#d7b476]">
              Saisons du Queyras
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Neige, sapins, alpages et longues soirées au calme.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {experiences.map(([title, text]) => (
              <div
                key={title}
                className="border border-[#d7b476]/28 bg-[#f8eddc]/8 p-6"
              >
                {title === "Hiver" ? (
                  <Snowflake className="mb-6 size-7 text-[#d7b476]" />
                ) : title === "Été" ? (
                  <Trees className="mb-6 size-7 text-[#d7b476]" />
                ) : title === "Bien-être" ? (
                  <Bath className="mb-6 size-7 text-[#d7b476]" />
                ) : (
                  <Mountain className="mb-6 size-7 text-[#d7b476]" />
                )}
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-3 leading-7 text-[#e3d1b5]/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead8] px-5 py-20 text-[#2a1b10] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-[#c8ae80] pb-7">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#7b5d37]">
                Galerie
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl">
                Matières, lumière, montagne
              </h2>
            </div>
            <Trees className="hidden size-12 text-[#29402d] sm:block" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <figure
                key={item.title}
                className={`group border border-[#d0b98d] bg-[#fbf4e8] p-2 shadow-sm ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-cover bg-center sepia-[0.12] transition duration-700 group-hover:sepia-0 ${
                    index === 0 ? "h-[31rem]" : "h-60"
                  }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <figcaption className="px-2 py-3 text-xs uppercase tracking-[0.22em] text-[#7b5d37]">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#2a1b10] px-5 py-20 text-[#f8eddc] sm:px-8 lg:px-10"
      >
        <div className="mx-auto border border-[#d7b476]/35 bg-[#321f12] shadow-2xl shadow-black/20 lg:grid lg:max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#d7b476]">
              Préparer l’échappée
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Votre maison de montagne vous attend.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e3d1b5]/72">
              Chambres, restaurant, bien-être, privatisation ou séjour sportif:
              l’équipe vous aide à composer une parenthèse simple, belle et
              chaleureuse.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:contact@abrieshotel.fr?subject=Réservation%20-%20Abriès%20Hôtel"
                className="border border-[#f5dfb8]/35 bg-[#f0d39a] px-7 py-4 text-center font-semibold text-[#26170c] transition hover:bg-[#fff1d5]"
              >
                Réserver mon séjour
              </a>
              <a
                href="tel:+33400000000"
                className="border border-[#d7b476]/35 px-7 py-4 text-center font-semibold text-[#fff4dd] transition hover:bg-[#f8eddc]/8"
              >
                Appeler l’hôtel
              </a>
            </div>
          </div>
          <div className="min-h-80 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=85')] bg-cover bg-center" />
        </div>
      </section>
    </main>
  );
}
