import type { HotelSection } from "./types";
import { asset } from "../asset";

export const chambresSection: HotelSection & {
  roomTypes: Array<{
    slug: string;
    title: string;
    count: number;
    capacity: string;
    summary: string;
    characteristics: string[];
    todos: string[];
  }>;
} = {
  id: "chambres",
  navLabel: "Chambres",
  eyebrow: "Séjourner",
  title: "Des chambres de style chalet pour 2 à 6 personnes.",
  subtitle:
    "11 chambres doubles, 5 chambres familiales et 4 chambres refuge, avec une ambiance bois, montagne et retour au calme.",
  description:
    "Les hébergements publics d’Abriès Hôtel mettent en avant des chambres doubles et twin tout confort, des chambres familiales pour 4 personnes et des chambres refuge pouvant accueillir des groupes jusqu’à 6 personnes. Les contenus parlent de literie douillette, petit-déjeuner inclus, wifi, télévision, esprit chalet, vue montagne, proximité des pistes et formules de demi-pension.",
  sourceUrls: [
    "https://www.abrieshotel.fr/hebergements-w1",
    "https://www.abrieshotel.fr/chambres-doubles-et-twin-w1",
    "https://www.abrieshotel.fr/chambres-familiales-w1",
    "https://www.abrieshotel.fr/chambres-refuge-w1",
  ],
  images: [
    {
      src: asset("/content/abries/hebergements.webp"),
      alt: "Ambiance hébergements de montagne à Abriès Hôtel",
      sourceUrl:
        "https://media.jalis.pro/images/bbd8919d-d554-404f-8209-860489c058b5/large.webp",
    },
    {
      src: asset("/content/abries/chambre.webp"),
      alt: "Chambre en bois à Abriès Hôtel",
      sourceUrl:
        "https://media.jalis.pro/images/2dc2017b-85ae-4edc-be54-5964d0558180/medium.webp",
    },
  ],
  highlights: [
    "11 chambres doubles et twin",
    "5 chambres familiales",
    "4 chambres refuge",
    "Petit-déjeuner inclus selon contenu public",
  ],
  roomTypes: [
    {
      slug: "doubles-twin",
      title: "Chambres doubles et twin",
      count: 11,
      capacity: "2 personnes",
      summary:
        "Chambres tout confort pour séjour en couple ou entre amis, avec grand lit ou lits séparés selon configuration publique.",
      characteristics: [
        "Style chalet de montagne",
        "Literie confortable",
        "Wifi mentionné sur la page hébergements",
        "Petit-déjeuner inclus selon meta description",
        "Demi-pension mentionnée sur certaines pages détail",
      ],
      todos: [
        "TODO_PUBLIC_DATA_SURFACE_DOUBLES",
        "TODO_PUBLIC_DATA_BED_SIZES",
        "TODO_PUBLIC_DATA_PHOTOS_BY_ROOM",
      ],
    },
    {
      slug: "familiales",
      title: "Chambres familiales",
      count: 5,
      capacity: "4 personnes",
      summary:
        "Chambres pensées pour les vacances en famille dans les Hautes-Alpes, avec accès facile aux pistes et esprit chalet.",
      characteristics: [
        "Capacité 4 personnes mentionnée publiquement",
        "Ambiance familiale et montagne",
        "Télévision mentionnée sur page détail",
        "Espace enfant mentionné dans des contenus SEO",
      ],
      todos: [
        "TODO_PUBLIC_DATA_FAMILY_LAYOUTS",
        "TODO_PUBLIC_DATA_CHILD_EQUIPMENT",
        "TODO_PUBLIC_DATA_CONNECTING_ROOMS",
      ],
    },
    {
      slug: "refuge",
      title: "Chambres refuge",
      count: 4,
      capacity: "4 à 6 personnes",
      summary:
        "Grandes chambres conviviales pour groupes d’amis, sportifs et randonneurs, avec salle de bain privée mentionnée publiquement.",
      characteristics: [
        "Jusqu’à 6 personnes selon contenu public",
        "Groupes d’amis et sportifs",
        "Salle de bain privée mentionnée",
        "Grande capacité pour séjours ski/randonnée",
      ],
      todos: [
        "TODO_PUBLIC_DATA_REFUGE_BEDS",
        "TODO_PUBLIC_DATA_GROUP_RATES",
        "TODO_PUBLIC_DATA_SPORT_STORAGE",
      ],
    },
  ],
  todos: [
    {
      key: "TODO_PUBLIC_DATA_RATES",
      note: "Tarifs exacts par type de chambre et saison à confirmer.",
    },
    {
      key: "TODO_PUBLIC_DATA_ACCESSIBILITY",
      note: "Confirmer l’existence et les caractéristiques des chambres PMR.",
    },
  ],
};
