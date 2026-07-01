import type { HotelSection } from "./types";
import { asset } from "../asset";

export const restaurantSection: HotelSection & {
  specialties: string[];
} = {
  id: "restaurant",
  navLabel: "Restaurant",
  eyebrow: "Restaurant Le Refuge",
  title: "Une table de montagne, généreuse et sincère.",
  subtitle:
    "Raclette, fondue, tartiflette, produits du terroir, petit-déjeuner buffet, brunch et demi-pension selon les contenus publics.",
  description:
    "Le restaurant Le Refuge met en avant les spécialités montagnardes et les produits du terroir de saison. Les contenus publics citent notamment raclette, fondue, tartiflette, fromages du Queyras, petit-déjeuner buffet avec confitures artisanales, brunch dominical, menu enfant, cave de Bourgogne et d’Italie, ainsi qu’une formule de demi-pension.",
  sourceUrls: ["https://www.abrieshotel.fr/restaurant-le-refuge-w1"],
  images: [
    {
      src: asset("/content/abries/restaurant-refuge.webp"),
      alt: "Salle de restaurant Le Refuge à Abriès Hôtel",
      sourceUrl:
        "https://media.jalis.pro/images/dd47d836-e8e6-4f90-8699-d9feeee16d45/large.webp",
    },
  ],
  highlights: [
    "Spécialités montagnardes",
    "Produits frais et locaux",
    "Petit-déjeuner buffet",
    "Cave Bourgogne et Italie",
  ],
  specialties: [
    "Raclette",
    "Fondue savoyarde",
    "Tartiflette",
    "Fromages authentiques du Queyras",
    "Brunch détente dominical",
    "Demi-pension mentionnée publiquement",
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_CURRENT_MENU",
      note: "Récupérer ou valider la carte actuelle et les menus saisonniers.",
    },
    {
      key: "TODO_PUBLIC_DATA_RESTAURANT_HOURS",
      note: "Confirmer jours et horaires d’ouverture.",
    },
    {
      key: "TODO_PUBLIC_DATA_HALF_BOARD_PRICE",
      note: "La meta publique mentionne une demi-pension à 35 euros; à valider avant affichage final.",
    },
  ],
};
