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
import { siteContent } from "@/content/site";

const {
  hero,
  hotelName,
  sections: {
    maison,
    chambres,
    restaurant,
    barLounge,
    bienEtre,
    experiences,
    privatisation,
    contact,
  },
  gallery,
} = siteContent;

const stayCards = [
  ...chambres.roomTypes.map((room) => ({
    icon: BedDouble,
    title: room.title,
    text: room.summary,
    image: room.slug === "familiales" ? chambres.images[0].src : chambres.images[1].src,
    meta: `${room.count} chambres · ${room.capacity}`,
  })),
  {
    icon: Utensils,
    title: restaurant.eyebrow,
    text: restaurant.subtitle,
    image: restaurant.images[0].src,
    meta: restaurant.highlights[0],
  },
  {
    icon: Wine,
    title: barLounge.eyebrow,
    text: barLounge.subtitle,
    image: barLounge.images[0].src,
    meta: barLounge.highlights[0],
  },
];

const experienceCards = [
  {
    icon: Snowflake,
    title: "Hiver",
    text: "Ski alpin, ski de randonnée, neige silencieuse et retours près du feu.",
  },
  {
    icon: Trees,
    title: "Été",
    text: "Randonnée, alpages, via ferrata, rafting, botanique et longues soirées en altitude.",
  },
  {
    icon: Bath,
    title: "Bien-être",
    text: bienEtre.subtitle,
  },
  {
    icon: Mountain,
    title: "Privatisation",
    text: privatisation.subtitle,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#25190f] text-[#f8eddc]">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.055] mix-blend-soft-light grain-layer" />

      <section className="relative min-h-screen overflow-hidden border-b border-[#6f5636]/50">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center motion-safe:animate-[slow-zoom_22s_ease-out_forwards]"
          style={{ backgroundImage: `url(${hero.image.src})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,20,10,0.88),rgba(34,20,10,0.58)_45%,rgba(34,20,10,0.24)),linear-gradient(180deg,rgba(18,15,10,0.28),rgba(18,15,10,0.8))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#25190f] to-transparent" />

        <nav className="fixed left-1/2 top-4 z-40 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 border border-[#e6d1ad]/25 bg-[#2a1a0f]/72 shadow-2xl shadow-black/25 backdrop-blur-md sm:top-6">
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            <a href="#" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center border border-[#e8d3ad]/45 bg-[#f1dfbd]/12 font-serif text-xl tracking-wide text-[#f8e8c9]">
                AH
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-xl text-[#fff4dd]">
                  {hotelName}
                </span>
                <span className="hidden text-[0.65rem] uppercase tracking-[0.28em] text-[#dec8a2] sm:block">
                  Maison de montagne
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-7 text-sm text-[#f4e3c4]/82 lg:flex">
              <a href="#maison" className="transition hover:text-white">
                {maison.navLabel}
              </a>
              <a href="#chambres" className="transition hover:text-white">
                {chambres.navLabel}
              </a>
              <a href="#table" className="transition hover:text-white">
                Table
              </a>
              <a href="#experiences" className="transition hover:text-white">
                {experiences.navLabel}
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
            <div className="mb-6 inline-flex items-center gap-2 border border-[#e6d1ad]/30 bg-[#2b1b10]/58 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#f3ddb6] backdrop-blur-sm">
              <MapPin className="size-4" />
              {hero.eyebrow}
            </div>
            <h1 className="font-serif text-5xl leading-[0.95] text-[#fff6e6] drop-shadow-2xl sm:text-7xl lg:text-8xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f6e5c9]/88 sm:text-xl">
              {hero.subtitle}
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
              href="#contact"
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
              {maison.eyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              {maison.title}
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-lg leading-8 text-[#66533d]">
              {maison.description}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {maison.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-[#d2bb94] bg-[#fbf4e8]/68 p-5 shadow-sm"
                >
                  <p className="font-serif text-2xl text-[#2b1a0e]">
                    {highlight}
                  </p>
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
                {chambres.eyebrow}
              </p>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight text-[#fff4dd] sm:text-6xl">
                {chambres.title}
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#d9c6a8]/76">
              {chambres.subtitle}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {stayCards.map((card) => (
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
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#d7b476]/76">
                    {card.meta}
                  </p>
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
        <div
          className="min-h-[34rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant.images[0].src})` }}
        />
        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <Flame className="mb-6 size-10 text-[#8a5d2d]" />
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#7b5d37]">
              {restaurant.eyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              {restaurant.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#66533d]">
              {restaurant.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {restaurant.specialties.slice(0, 4).map((specialty) => (
                <span
                  key={specialty}
                  className="border border-[#b89761] px-3 py-2 text-sm text-[#5a4125]"
                >
                  {specialty}
                </span>
              ))}
            </div>
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
              {experiences.eyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              {experiences.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#e3d1b5]/72">
              {experiences.subtitle}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {experienceCards.map((item) => (
              <div
                key={item.title}
                className="border border-[#d7b476]/28 bg-[#f8eddc]/8 p-6"
              >
                <item.icon className="mb-6 size-7 text-[#d7b476]" />
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#e3d1b5]/72">{item.text}</p>
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
            {gallery.slice(0, 6).map((item, index) => (
              <figure
                key={item.src}
                className={`group border border-[#d0b98d] bg-[#fbf4e8] p-2 shadow-sm ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-cover bg-center sepia-[0.12] transition duration-700 group-hover:sepia-0 ${
                    index === 0 ? "h-[31rem]" : "h-60"
                  }`}
                  style={{ backgroundImage: `url(${item.src})` }}
                />
                <figcaption className="px-2 py-3 text-xs uppercase tracking-[0.22em] text-[#7b5d37]">
                  {item.alt}
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
              {contact.eyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e3d1b5]/72">
              {contact.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.phoneHref}
                className="border border-[#f5dfb8]/35 bg-[#f0d39a] px-7 py-4 text-center font-semibold text-[#26170c] transition hover:bg-[#fff1d5]"
              >
                Appeler {contact.phone}
              </a>
              <a
                href={contact.mapUrl}
                className="border border-[#d7b476]/35 px-7 py-4 text-center font-semibold text-[#fff4dd] transition hover:bg-[#f8eddc]/8"
              >
                Voir l’itinéraire
              </a>
            </div>
          </div>
          <div
            className="min-h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${contact.images[0].src})` }}
          />
        </div>
      </section>
    </main>
  );
}
