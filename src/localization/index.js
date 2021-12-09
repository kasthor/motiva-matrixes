import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        cover: {
          title: "Breast Aesthetic <strong>Solutions</strong>",
          description: 
          [
            "Created with patient safety in mind, through state-of-the-art technologies and the world’s most comprehensive advanced smooth implant range. Explore Motiva® Implant Matrixes and find over 600 options for tailored results.",
            "Use Motiva implant matrixes to find over 600 options for tailored results."
          ],
          action: "Tap to explore Motiva® Implant Matrixes"
        },
        menu: {
          title: "Menu",
          instructions: "Select one implant to see its matrixes."
        },
        brand: { 
          ergonomix: "Ergonomix®",
          ergonomix_oval: "Ergonomix® Oval",
          ergonomix2: "Ergonomix2®",
          flora: "Flora®",
          gluteal_armonic: "GlutealArmonic®",
          mia: "Motiva MIA®",
          round: "Motiva® Round",
          true_fixation: "TrueFixation®",
          sizers: "Sizers",
        }
      }
    }
  }
});

export default i18n;
