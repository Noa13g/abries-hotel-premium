import {
  CalendarDays,
  ChevronRight,
  Flame,
  MapPin,
  Menu,
  Mountain,
  Sparkles,
  Trees,
  Utensils,
  Waves,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=90";

const gallery = [
  {
    title: "Chambres boisées",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Table de montagne",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Neige et sapins",
    image:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Lumière du soir",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  },
];

const cards = [
  {
    eyebrow: "Chambres",
    title: "Des cocons alpins pour ralentir",
    text: "Matières naturelles, lignes contemporaines et silence de montagne pour retrouver le plaisir simple d'une nuit au calme.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85",
  },
  {
    eyebrow: "Restaurant Le Refuge",
    title: "Une table chaleureuse, ancrée dans les Alpes",
    text: "Cuisine de saison, esprit de partage et saveurs de montagne dans une salle pensée comme un retour près du feu.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    eyebrow: "Bar Lounge La Lauze",
    title: "Le verre d'après-ski, la lumière en plus",
    text: "Un salon feutré pour prolonger la journée, parler itinéraires, regarder tomber la neige ou préparer le lendemain.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Home() {
  return (
    <main className="bg-[#11130f] text-[#fbf6ea]">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center motion-safe:animate-[slow-zoom_18s_ease-out_forwards]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,11,0.56),rgba(7,12,11,0.22)_42%,rgba(7,12,11,0.84))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(255,238,205,0.16),transparent_34%)]" />

        <nav className="fixed left-1/2 top-4 z-30 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/12 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:top-6 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/15 font-serif text-lg">
              AH
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg">Abriès Hôtel</span>
              <span className="hidden text-xs uppercase tracking-[0.28em] text-white/64 sm:block">
                Queyras
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-white/78 lg:flex">
            <a href="#hotel" className="transition hover:text-white">
              Hôtel
            </a>
            <a href="#chambres" className="transition hover:text-white">
              Chambres
            </a>
            <a href="#restaurant" className="transition hover:text-white">
              Restaurant
            </a>
            <a href="#experiences" className="transition hover:text-white">
              Expériences
            </a>
          </div>

          <a
            href="#reservation"
            className="hidden rounded-full bg-[#f5d7a1] px-5 py-3 text-sm font-semibold text-[#1a1710] shadow-lg shadow-black/20 transition hover:bg-white md:inline-flex"
          >
            Réserver
          </a>
          <button
            className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="size-5" />
          </button>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-end px-5 pb-7 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl pb-8 sm:pb-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/78 backdrop-blur-xl">
              <MapPin className="size-4 text-[#f5d7a1]" />
              Abriès-Ristolas, Hautes-Alpes
            </div>
            <h1 className="font-serif text-5xl leading-[0.98] text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
              Un refuge contemporain au cœur du Queyras
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
              Hôtel 3 étoiles à Abriès-Ristolas, entre pistes, nature sauvage,
              table de montagne et bien-être alpin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5d7a1] px-7 py-4 font-semibold text-[#1a1710] shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Réserver mon séjour
                <CalendarDays className="size-5" />
              </a>
              <a
                href="#hotel"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/12 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Découvrir l’hôtel
                <ChevronRight className="size-5" />
              </a>
            </div>
          </div>

          <div
            id="reservation"
            className="grid gap-3 rounded-[2rem] border border-white/20 bg-white/14 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:grid-cols-[1fr_1fr_1fr_auto]"
          >
            {["Arrivée", "Départ", "Voyageurs"].map((label, index) => (
              <div
                key={label}
                className="rounded-[1.4rem] border border-white/12 bg-white/12 px-5 py-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/58">
                  {label}
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {index === 2 ? "2 adultes" : "Choisir une date"}
                </p>
              </div>
            ))}
            <a
              href="mailto:contact@abrieshotel.fr?subject=Demande%20de%20séjour%20-%20Abriès%20Hôtel"
              className="inline-flex min-h-16 items-center justify-center rounded-[1.4rem] bg-white px-7 font-semibold text-[#17140f] transition hover:bg-[#f5d7a1]"
            >
              Voir les disponibilités
            </a>
          </div>
        </div>
      </section>

      <section
        id="hotel"
        className="relative bg-[#f7efe1] px-5 py-20 text-[#211b13] sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#8a6c43]">
              Refuge contemporain
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Bois blond, pierre, lauze et lumière chaude après les grands
              dehors.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[#5f5548]">
            <p>
              Au cœur du Queyras, Abriès Hôtel imagine une halte alpine où
              l’on vient respirer, skier, marcher, dîner, dormir profondément
              et repartir plus léger.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["3 étoiles", "Adresse de montagne"],
                ["Le Refuge", "Restaurant convivial"],
                ["La Lauze", "Bar lounge chaleureux"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-[#d8c7a9] bg-white/55 p-5 shadow-sm"
                >
                  <p className="font-serif text-2xl text-[#2c2116]">{value}</p>
                  <p className="mt-1 text-sm text-[#776b5c]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="chambres" className="bg-[#17160f] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#d6b06f]">
                Séjourner
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-6xl">
                Une maison de montagne pensée pour les retours de pistes et les
                réveils lents.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/86 transition hover:bg-white/10 md:self-auto"
            >
              Demander un séjour
              <ChevronRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/25"
              >
                <div
                  className="h-80 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d6b06f]">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/68">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="restaurant"
        className="grid bg-[#f7efe1] text-[#211b13] lg:grid-cols-2"
      >
        <div className="min-h-[34rem] bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center" />
        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <Utensils className="mb-6 size-10 text-[#8a6c43]" />
            <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#8a6c43]">
              Restaurant Le Refuge
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Une cuisine de montagne pour rassembler les tablées.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5548]">
              Après la neige, les sentiers ou la route des cols, la table
              devient le cœur vivant de l’hôtel: généreuse, alpine, simple et
              soignée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#11130f] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            {
              icon: Flame,
              title: "Bar Lounge La Lauze",
              text: "Canapés profonds, reflets minéraux et conversations douces autour d'un verre.",
            },
            {
              icon: Waves,
              title: "Espace forme & massages",
              text: "Un temps pour délier le corps, récupérer et retrouver une respiration alpine.",
            },
            {
              icon: Sparkles,
              title: "Privatisation",
              text: "Un écrin de montagne pour réunions confidentielles, fêtes de famille et séjours de groupe.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-black/20"
            >
              <item.icon className="mb-8 size-9 text-[#f5d7a1]" />
              <h3 className="font-serif text-3xl text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/66">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experiences"
        className="relative overflow-hidden bg-[#e8dcc8] px-5 py-20 text-[#211b13] sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#8a6c43]">
              Hiver / Été
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Le Queyras en version neige, forêt, torrents et soleil haut.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["Hiver", "Pistes, poudreuse, raquettes et retours au chaud."],
              ["Été", "Randonnées, cols, villages, alpages et ciel immense."],
              ["Bien-être", "Massages, récupération et lenteur retrouvée."],
            ].map(([season, text]) => (
              <div
                key={season}
                className="flex gap-4 rounded-3xl border border-[#cdbb9d] bg-white/45 p-5"
              >
                <Mountain className="mt-1 size-6 text-[#8a6c43]" />
                <div>
                  <h3 className="font-serif text-2xl">{season}</h3>
                  <p className="mt-1 text-[#5f5548]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11130f] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#d6b06f]">
                Galerie
              </p>
              <h2 className="font-serif text-4xl text-white sm:text-6xl">
                Instants alpins
              </h2>
            </div>
            <Trees className="hidden size-12 text-[#f5d7a1] sm:block" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <figure
                key={item.title}
                className={`group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-cover bg-center transition duration-700 group-hover:scale-105 ${
                    index === 0 ? "h-[31rem]" : "h-60"
                  }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <figcaption className="p-4 text-sm uppercase tracking-[0.2em] text-white/62">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#f7efe1] px-5 py-20 text-[#211b13] sm:px-8 lg:px-10"
      >
        <div className="mx-auto overflow-hidden rounded-[2rem] bg-[#211b13] text-white shadow-2xl shadow-black/20 lg:grid lg:max-w-6xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="mb-4 text-sm uppercase tracking-[0.26em] text-[#f5d7a1]">
              Préparer l’échappée
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Votre séjour au cœur du Queyras commence ici.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Chambres, restaurant, bien-être, privatisation ou expérience
              sportive: l’équipe vous aide à composer une parenthèse juste.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:contact@abrieshotel.fr?subject=Réservation%20-%20Abriès%20Hôtel"
                className="rounded-full bg-[#f5d7a1] px-7 py-4 text-center font-semibold text-[#1a1710] transition hover:bg-white"
              >
                Réserver mon séjour
              </a>
              <a
                href="tel:+33400000000"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Appeler l’hôtel
              </a>
            </div>
          </div>
          <div className="min-h-80 bg-[url('https://images.unsplash.com/photo-1517320964276-a002fa203177?auto=format&fit=crop&w=1300&q=85')] bg-cover bg-center" />
        </div>
      </section>
    </main>
  );
}
