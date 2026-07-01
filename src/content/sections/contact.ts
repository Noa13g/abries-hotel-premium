import type { HotelSection } from "./types";
import { asset } from "../asset";

export const contactSection: HotelSection & {
  phone: string;
  phoneHref: string;
  address: string;
  mapUrl: string;
  social: { facebook: string; instagram: string };
} = {
  id: "contact",
  navLabel: "Contact",
  eyebrow: "Réservation",
  title: "Préparer votre séjour à Abriès Hôtel.",
  subtitle:
    "Chambre double, familiale, refuge, table, bien-être ou privatisation: le premier contact reste simple et humain.",
  description:
    "La page contact invite à réserver une expérience à Abriès Hôtel dans le Queyras. Les informations publiques fournissent téléphone, adresse, liens sociaux et carte.",
  sourceUrls: ["https://www.abrieshotel.fr/contact"],
  images: [
    {
      src: asset("/content/abries/paysage-montagne.webp"),
      alt: "Montagnes autour d’Abriès-Ristolas",
      sourceUrl:
        "https://media.jalis.pro/images/914bec41-d44b-4e80-9849-0e4265307ecf/large.webp",
    },
  ],
  highlights: [
    "Téléphone: 04 12 16 07 51",
    "12-14 avenue des Eaux Douces",
    "05460 Abriès-Ristolas",
    "Formulaire de demande de réservation",
  ],
  phone: "04 12 16 07 51",
  phoneHref: "tel:+33412160751",
  address: "12-14 avenue des Eaux Douces, 05460 Abriès-Ristolas",
  mapUrl: "https://maps.app.goo.gl/vdagjVLXvoMma6u57",
  social: {
    facebook: "https://www.facebook.com/share/18dAj6PKU7/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/hotelabries?igsh=bXE4dnFweHAydnhv",
  },
  todos: [
    {
      key: "TODO_PUBLIC_DATA_BOOKING_ENGINE",
      note: "Confirmer le lien officiel de réservation si différent du contact.",
    },
    {
      key: "TODO_PUBLIC_DATA_EMAIL",
      note: "Confirmer l’adresse email officielle avant affichage en clair.",
    },
  ],
};
