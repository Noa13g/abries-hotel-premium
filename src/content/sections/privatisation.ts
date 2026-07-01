import type { HotelSection } from "./types";
import { asset } from "../asset";

export const privatisationSection: HotelSection = {
  id: "privatisation",
  navLabel: "Privatisation",
  eyebrow: "Événements & traiteur",
  title: "Une maison de montagne pour mariages, séminaires et retrouvailles.",
  subtitle:
    "Privatisation, traiteur, chapelle sur place, hébergement complet et événements professionnels.",
  description:
    "Les contenus publics évoquent la privatisation de l’hôtel pour mariages, baptêmes, anniversaires, séminaires d’entreprise, team building, EVG/EVJF et prestations traiteur sur mesure. Une chapelle sur place est mentionnée dans les contenus de mariage.",
  sourceUrls: ["https://www.abrieshotel.fr/traiteur-privatisation-w1"],
  images: [
    {
      src: asset("/content/abries/privatisation.webp"),
      alt: "Privatisation et événements à Abriès Hôtel",
      sourceUrl:
        "https://media.jalis.pro/images/f7b6194b-be3a-4310-aba0-2b2526b6448b/large.webp",
    },
  ],
  highlights: [
    "Mariages et fêtes de famille",
    "Séminaires et team building",
    "Service traiteur",
    "Chapelle mentionnée publiquement",
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_EVENT_CAPACITY",
      note: "Capacités exactes salle, restaurant, hôtel et configuration à confirmer.",
    },
    {
      key: "TODO_PUBLIC_DATA_CATERING_MENUS",
      note: "Menus traiteur et tarifs événementiels à compléter.",
    },
  ],
};
