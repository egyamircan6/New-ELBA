import { useParams } from "react-router-dom";
import HomeEN from './../pages/En/HomeEn';
import HomeAr from './../pages/Ar/HomeAr';


const HomeSwitch = () => {
  const { lang } = useParams<{ lang: "ar" | "en" }>();
  return lang === "en" ? <HomeEN /> : <HomeAr />;
};

export default HomeSwitch;