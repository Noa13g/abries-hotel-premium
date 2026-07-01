import type { HotelSection } from "./types";
import { asset } from "../asset";

export const experiencesSection: HotelSection & {
  activities: string[];
} = {
  id: "experiences",
  navLabel: "Queyras",
  eyebrow: "Expériences hiver / été",
  title: "Ski, randonnée, eau vive, via ferrata et soirées sous les étoiles.",
  subtitle:
    "Depuis Abriès-Ristolas, le Queyras devient un terrain de jeu nature, sportif et contemplatif.",
  description:
    "La page activités de montagne mentionne ski alpin, randonnée pédestre, escalade, rafting, bivouac, ski de randonnée, via ferrata, marche d’observation des animaux sauvages, ateliers autour des plantes comestibles, soirées trappeur et observation du ciel étoilé.",
  sourceUrls: ["https://www.abrieshotel.fr/activites-montagne-w1"],
  images: [
    {
      src: asset("/content/abries/activites-montagne.webp"),
      alt: "Activités de montagne dans le Queyras",
      sourceUrl:
        "https://media.jalis.pro/images/1a1a9af4-6e13-47c5-8eb1-ac0e1dd9ac0c/large.webp",
    },
    {
      src: asset("/content/abries/paysage-montagne.webp"),
      alt: "Paysage du Queyras",
      sourceUrl:
        "https://media.jalis.pro/images/914bec41-d44b-4e80-9849-0e4265307ecf/large.webp",
    },
  ],
  highlights: [
    "Ski alpin et ski de randonnée",
    "Randonnée pédestre",
    "Via ferrata, escalade, rafting",
    "Bivouac, faune sauvage, botanique",
  ],
  activities: [
    "Soirée trappeur autour du feu",
    "Cours de cuisine avec plantes comestibles",
    "Via ferrata avec guide",
    "Observation des animaux sauvages",
    "Randonnée transfrontalière",
    "Rafting et eaux vives",
    "Bivouac et étoiles filantes",
    "VTT sur sentiers de montagne",
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_ACTIVITY_PROVIDER",
      note: "Identifier les partenaires/guides et les modalités de réservation.",
    },
    {
      key: "TODO_PUBLIC_DATA_SEASONAL_CALENDAR",
      note: "Construire un calendrier hiver/été fiable.",
    },
  ],
};
