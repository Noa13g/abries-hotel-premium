import type { HotelSection } from "./types";
import { asset } from "../asset";

export const bienEtreSection: HotelSection = {
  id: "bien-etre",
  navLabel: "Bien-être",
  eyebrow: "Espace forme & détente",
  title: "Sauna, bain norvégien, massages et récupération alpine.",
  subtitle:
    "Un espace pour relâcher le corps après la neige, les sentiers ou les cols.",
  description:
    "Les contenus publics décrivent un espace forme et détente avec bain norvégien extérieur, sauna, massages aux plantes et salle de musculation. Le positionnement est celui d’une pause détente en montagne après l’effort.",
  sourceUrls: ["https://www.abrieshotel.fr/espace-forme-w1"],
  images: [
    {
      src: asset("/content/abries/espace-forme.webp"),
      alt: "Espace forme et détente à Abriès Hôtel",
      sourceUrl:
        "https://media.jalis.pro/images/ffb84895-8739-42e5-9464-21e9851009a3/large.webp",
    },
  ],
  highlights: [
    "Bain norvégien extérieur",
    "Sauna",
    "Massages aux plantes",
    "Salle de musculation",
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_WELLNESS_ACCESS",
      note: "Confirmer conditions d’accès, réservation, capacité et saisonnalité.",
    },
    {
      key: "TODO_PUBLIC_DATA_MASSAGE_PRICES",
      note: "Tarifs, durées et praticiens des massages à compléter.",
    },
  ],
};
