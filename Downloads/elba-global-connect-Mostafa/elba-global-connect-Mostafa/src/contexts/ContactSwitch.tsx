import Contact from "@/pages/Ar/ContactAr";
import ContactEn from "@/pages/En/ContactEn";
import { useParams } from "react-router-dom";
;

export default function ContactSwitch() {
  const { lang } = useParams();

  return lang === "en" ? <ContactEn /> : <Contact />;
}