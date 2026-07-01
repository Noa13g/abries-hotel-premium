import type { HotelSection } from "./types";
import { asset } from "../asset";

export const barLoungeSection: HotelSection = {
  id: "bar-lounge",
  navLabel: "Bar lounge",
  eyebrow: "Bar Lounge La Lauze",
  title: "Un après-ski cosy au salon La Lauze.",
  subtitle:
    "Terrasse plein sud, cocktails, vins, fromages, concerts live et ambiance chaleureuse.",
  description:
    "La page publique présente La Lauze comme un bar lounge chaleureux à Abriès-Ristolas, avec terrasse plein sud, cocktails, vins, fromages, soirées concerts et esprit après-ski.",
  sourceUrls: ["https://www.abrieshotel.fr/bar-lounge-la-lauze-w1"],
  images: [
    {
      src: asset("/content/abries/bar-lauze.webp"),
      alt: "Salon La Lauze à Abriès Hôtel",
      sourceUrl:
        "https://media.jalis.pro/images/75e79e1d-f81a-4d00-9fb6-bf718e36084e/large.webp",
    },
  ],
  highlights: [
    "Terrasse plein sud",
    "Cocktails et vins",
    "Fromages et planches du terroir",
    "Soirées concerts mentionnées publiquement",
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_BAR_HOURS",
      note: "Confirmer horaires, jours d’ouverture et programmation concerts.",
    },
    {
      key: "TODO_PUBLIC_DATA_DRINKS_MENU",
      note: "Récupérer la carte cocktails/vins si disponible.",
    },
  ],
};
