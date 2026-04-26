import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        branches: "Branches",
        blog: "Blog",
      },
    },
    ar: {
      translation: {
        home: "الرئيسية",
        services: "خدمات الصيانة",
        contact: "تواصل معنا",
        branches: "الفروع",
        blog: "المدونة",
      },
    },
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

export default i18n;