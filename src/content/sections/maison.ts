import type { HotelSection } from "./types";
import { asset } from "../asset";

export const maisonSection: HotelSection = {
  id: "maison",
  navLabel: "La maison",
  eyebrow: "Chalet ancien rénové",
  title:
    "Une bâtisse de montagne au cœur du parc naturel régional du Queyras.",
  subtitle:
    "Hôtel 3 étoiles à Abriès-Ristolas, au pied ou à proximité des pistes, pensé pour dormir, dîner, respirer et se retrouver.",
  description:
    "Abriès Hôtel accueille les voyageurs dans une atmosphère de chalet de montagne: chambres confortables, cuisine du terroir, bar lounge et espace détente. L’adresse revendique un séjour chaleureux, simple et authentique dans le village-station d’Abriès-Ristolas.",
  sourceUrls: ["https://www.abrieshotel.fr/"],
  images: [
    {
      src: asset("/content/abries/hotel-exterieur.webp"),
      alt: "Abriès Hôtel, maison de montagne dans le Queyras",
      sourceUrl:
        "https://media.jalis.pro/images/576126a7-a58e-47a0-88e4-6352e6946653/large.webp",
    },
    {
      src: asset("/content/abries/paysage-montagne.webp"),
      alt: "Paysage de montagne autour d’Abriès-Ristolas",
      sourceUrl:
        "https://media.jalis.pro/images/914bec41-d44b-4e80-9849-0e4265307ecf/large.webp",
    },
  ],
  highlights: [
    "Hôtel 3 étoiles",
    "Abriès-Ristolas, Queyras",
    "Au pied ou à proximité des pistes",
    "Restaurant, bar lounge et espace détente",
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_HISTORY",
      note: "Confirmer l’histoire exacte de la bâtisse et les éléments patrimoniaux réutilisables.",
    },
    {
      key: "TODO_PUBLIC_DATA_BRAND_TONE",
      note: "Valider le niveau de langage: familial, premium discret, refuge chaleureux.",
    },
  ],
};
