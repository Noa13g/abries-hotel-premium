import { barLoungeSection } from "./sections/bar-lounge";
import { bienEtreSection } from "./sections/bien-etre";
import { chambresSection } from "./sections/chambres";
import { contactSection } from "./sections/contact";
import { experiencesSection } from "./sections/experiences";
import { maisonSection } from "./sections/maison";
import { privatisationSection } from "./sections/privatisation";
import { restaurantSection } from "./sections/restaurant";

export const siteContent = {
  hotelName: "Abriès Hôtel",
  hero: {
    eyebrow: "Abriès-Ristolas · Queyras",
    title: "L’âme d’un chalet, le confort d’un hôtel.",
    subtitle:
      "À Abriès-Ristolas, une adresse de montagne où l’on vient dormir, dîner, respirer et retrouver le goût des choses simples.",
    image: maisonSection.images[0],
  },
  sections: {
    maison: maisonSection,
    chambres: chambresSection,
    restaurant: restaurantSection,
    barLounge: barLoungeSection,
    bienEtre: bienEtreSection,
    experiences: experiencesSection,
    privatisation: privatisationSection,
    contact: contactSection,
  },
  gallery: [
    maisonSection.images[0],
    restaurantSection.images[0],
    barLoungeSection.images[0],
    bienEtreSection.images[0],
    experiencesSection.images[0],
    privatisationSection.images[0],
    contactSection.images[0],
  ],
};

export type SiteContent = typeof siteContent;
