import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome, FaTools, FaPhone,
  FaMapMarkerAlt, FaBook, FaGlobe
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo (2).png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const navigate = useNavigate();
  const location = useLocation();

  const base = isEn ? "/en" : "/ar";

  /* ───── Route Map ───── */
  const routeMap = {
    "من-نحن": "bosch-hotline-egypt",
    "صيانة-غسالات-ملابس-بوش": "bosch-washing-machine-repair",
    "صيانة-دراير-بوش": "bosch-dryer-repair",
    "صيانة-ثلاجات-بوش": "bosch-refrigerator-repair",
    "صيانةديب-فريزر-بوش": "bosch-deep-freezer-repair",
    "صيانة-غسالات-أطباق-بوش": "bosch-dishwasher-repair",
    "صيانة-بوتاجازات-بوش": "bosch-cooker-repair",
    "صيانة-مسطحات-بوش": "bosch-hob-repair",
    "صيانة-ميكروويف-بوش": "bosch-microwave-repair",
    "صيانة-شفاطات-بوش": "bosch-hood-repair",
    "صيانة-مكنة-قهوة-بوش": "bosch-coffee-machine-repair",
    "صيانة-مكانس-بوش": "bosch-vacuum-cleaner-repair",
    "صيانة-تكييف-بوش": "bosch-air-conditioner-repair",
    "صيانة-سخانات-بوش": "bosch-water-heater-repair",
    "صيانةغسالات-أطباق-بوش-بلت-ان": "bosch-built-in-dishwasher-repair",
    "صيانة-افران-بلت-ان-بوش": "bosch-built-in-hood-repair",
    "صيانة-افران-بلت-ان-بوش": "bosch-built-in-oven-repair",
    "صيانة-ثلاجات-بلت-ان-بوش": "bosch-built-in-refrigerator-repair",
    "صيانة-بوش-المقطم": "mokattam-branch",
    "صيانة-بوش-حلوان": "helwan-branch",
    "صيانة-بوش-وسط-البلد": "downtown-branch",
    "صيانة-بوش-مدينة-نصر": "nasr-city-branch",
    "صيانة-بوش-شروق": "shorouk-branch",
    "صيانة-بوش-الشيخ-زايد": "sheikh-zayed-branch",
    "صيانة-بوش-6-اكتوبر": "october-branch",
    "صيانة-بوش-الدقي": "dokki-branch",
    "صيانة-بوش-المهندسين": "mohandessin-branch",
    "صيانة-بوش-فيصل": "faisal-branch",
    "صيانة-بوش-الهرم": "haram-branch",
    "صيانة-بوش-حدائق-الاهرام": "hadayek-al-ahram-branch",
    "صيانة-بوش-الاسكندرية": "alexandria-branch",
    "صيانة-بوش-الساحل-الشمالي": "north-coast-branch",
  };

  const reverseRouteMap = Object.fromEntries(
    Object.entries(routeMap).map(([ar, en]) => [en, ar])
  );

const toggleLanguage = () => {
  const newLang = isEn ? "ar" : "en";
  i18n.changeLanguage(newLang);

  const currentPath = location.pathname;
  const parts = currentPath.split("/");
  const slug = decodeURIComponent(parts.slice(2).join("/")); // ✅ decode هنا

  if (newLang === "en") {
    const newSlug = routeMap[slug] || "";
    navigate(`/en/${newSlug}`);
  } else {
    const newSlug = reverseRouteMap[slug] || "";
    navigate(`/ar/${newSlug}`);
  }
};
  /* ───── SERVICES ───── */
  const services = isEn
    ? [
        { name: "Washing Machines",    path: "bosch-washing-machine-repair" },
        { name: "Dryers",              path: "bosch-dryer-repair" },
        { name: "Refrigerators",       path: "bosch-refrigerator-repair" },
        { name: "Deep Freezers",       path: "bosch-deep-freezer-repair" },
        { name: "Dishwashers",         path: "bosch-dishwasher-repair" },
        { name: "Cookers",             path: "bosch-cooker-repair" },
        { name: "Hobs",                path: "bosch-hob-repair" },
        { name: "Microwaves",          path: "bosch-microwave-repair" },
        { name: "Hoods",               path: "bosch-hood-repair" },
        { name: "Coffee Machines",     path: "bosch-coffee-machine-repair" },
        { name: "Vacuum Cleaners",     path: "bosch-vacuum-cleaner-repair" },
        { name: "Air Conditioners",    path: "bosch-air-conditioner-repair" },
        { name: "Water Heaters",       path: "bosch-water-heater-repair" },
        { name: "Bosch Built-in Dishwasher Repair", path: "bosch-built-in-dishwasher-repair" },
        { name: "Bosch Built-in Oven Repair", path: "bosch-built-in-oven-repair" },
        { name: "Bosch Built-in Oven Maintenance", path: "bosch Built-in Oven Maintenance" },
        { name: "Bosch Built-in Refrigerator Repair", path: "bosch-built-in-refrigerator-repair" },
      ]
    : [
        { name: "صيانة الغسالات",       path: "صيانة-غسالات-ملابس-بوش" },
        { name: "صيانة الدراير",         path: "صيانة-دراير-بوش" },
        { name: "صيانة الثلاجات",        path: "صيانة-ثلاجات-بوش" },
        { name: "صيانة الديب فريزر",     path: "صيانةديب-فريزر-بوش" },
        { name: "صيانة غسالات الأطباق",  path: "صيانة-غسالات-أطباق-بوش" },
        { name: "صيانة البوتاجازات",      path: "صيانة-بوتاجازات-بوش" },
        { name: "صيانة المسطحات",        path: "صيانة-مسطحات-بوش" },
        { name: "صيانة الميكروويف",       path: "صيانة-ميكروويف-بوش" },
        { name: "صيانة الشفاطات",        path: "صيانة-شفاطات-بوش" },
        { name: "صيانة ماكينات القهوة",   path: "صيانة-مكنة-قهوة-بوش" },
        { name: "صيانة المكانس",         path: "صيانة-مكانس-بوش" },
        { name: "صيانة التكييف",         path: "صيانة-تكييف-بوش" },
        { name: "صيانة السخانات",        path: "صيانة-سخانات-بوش" },
        { name: "صيانة غسالات بوش بلت إن",          path: "صيانةغسالات-أطباق-بوش-بلت-ان" },
        { name: "صيانة افران بوش بلت إن",       path: "صيانة-افران-بوش-بلت-ان"},
        { name: "صيانة تلاجات بلت إن",         path: "صيانة-ثلاجات-بوش-بلت-ان" },
      ];

  /* ───── BRANCHES ───── */
  const branches = isEn
    ? [
        { name: "Nasr City Branch",        path: "nasr-city-branch" },
        { name: "Mokattam Branch",         path: "mokattam-branch" },
        { name: "Helwan Branch",           path: "helwan-branch" },
        { name: "Downtown Branch",         path: "downtown-branch" },
        { name: "Shorouk Branch",          path: "shorouk-branch" },
        { name: "Sheikh Zayed Branch",     path: "sheikh-zayed-branch" },
        { name: "6 October Branch",        path: "october-branch" },
        { name: "Dokki Branch",            path: "dokki-branch" },
        { name: "Mohandessin Branch",      path: "mohandessin-branch" },
        { name: "Faisal Branch",           path: "faisal-branch" },
        { name: "Haram Branch",            path: "haram-branch" },
        { name: "Hadayek Al Ahram Branch", path: "hadayek-al-ahram-branch" },
        { name: "Alexandria Branch",       path: "alexandria-branch" },
        { name: "North Coast Branch",      path: "north-coast-branch" },
        { name: "Heliopolis Branch", path: "heliopolis-branch" },
{ name: "New Cairo Branch", path: "new-cairo-branch" },
{ name: "Tagamoa Branch", path: "tagamoa-branch" },
{ name: "Rehab City Branch", path: "rehab-city-branch" },
{ name: "Madinaty Branch", path: "madinaty-branch" },
{ name: "Sheraton Branch", path: "sheraton-branch" },
{ name: "Gesr El Suez Branch", path: "gesr-el-suez-branch" },
{ name: "Maadi Branch", path: "maadi-branch" },
{ name: "Shubra Branch", path: "shubra-branch" },
      ]
    : [
        { name: "فرع المقطم",         path: "صيانة-بوش-المقطم" },
        { name: "فرع حلوان",          path: "صيانة-بوش-حلوان" },
        { name: "فرع وسط البلد",      path: "صيانة-بوش-وسط-البلد" },
        { name: "فرع مدينة نصر",      path: "صيانة-بوش-مدينة-نصر" },
        { name: "فرع الشروق",         path: "صيانة-بوش-شروق" },
        { name: "فرع الشيخ زايد",     path: "صيانة-بوش-الشيخ-زايد" },
        { name: "فرع 6 أكتوبر",       path: "صيانة-بوش-6-اكتوبر" },
        { name: "فرع الدقي",          path: "صيانة-بوش-الدقي" },
        { name: "فرع المهندسين",       path: "صيانة-بوش-المهندسين" },
        { name: "فرع فيصل",           path: "صيانة-بوش-فيصل" },
        { name: "فرع الهرم",          path: "صيانة-بوش-الهرم" },
        { name: "فرع حدائق الاهرام",  path: "صيانة-بوش-حدائق-الاهرام" },
        { name: "فرع الاسكندرية",     path: "صيانة-بوش-الاسكندرية" },
        { name: "فرع الساحل الشمالي", path: "صيانة-بوش-الساحل-الشمالي" },
        { name: "فرع مصر الجديدة", path: "صيانة-بوش-مصر-الجديدة" },
{ name: "فرع التجمع", path: "صيانة-بوش-التجمع" },
{ name: "فرع القاهرة الجديدة", path: "صيانة-بوش-القاهرة-الجديدة" },
{ name: "فرع الرحاب", path: "صيانة-بوش-الرحاب" },
{ name: "فرع مدينتي", path: "صيانة-بوش-مدينتي" },
{ name: "فرع شيراتون", path: "صيانة-بوش-شيراتون" },
{ name: "فرع جسر السويس", path: "صيانة-بوش-جسر-السويس" },
{ name: "فرع المعادي", path: "صيانة-بوش-المعادي" },
{ name: "فرع شبرا", path: "صيانة-بوش-شبرا" },
      ];

  return (
    <nav dir={isEn ? "ltr" : "rtl"} className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <Link to={base}>
          <img src={logo} alt="logo" className="h-12 object-contain" />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-400 font-medium">

          {/* HOME */}
          <li>
            <Link to={base} className="flex items-center gap-2 hover:text-red-500">
              <FaHome />
              <span>{t("home")}</span>
            </Link>
          </li>

          {/* SERVICES */}
          <li className="relative group">
            <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <FaTools />
              <span>{t("services")}</span>
            </div>
            <ul className="absolute top-full right-0 mt-2 w-64 max-h-[400px] overflow-y-auto bg-white text-black rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {services.map((item, i) => (
                <li key={i} className="px-4 py-2 hover:bg-gray-100">
                  <Link to={`${base}/${item.path}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* CONTACT */}
          <li>
            <Link
              to={isEn ? `${base}/bosch-hotline-egypt` : `${base}/من-نحن`}
              className="flex items-center gap-2 hover:text-red-500"
            >
              <FaPhone />
              <span>{t("contact")}</span>
            </Link>
          </li>

          {/* BRANCHES */}
          <li className="relative group">
            <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <FaMapMarkerAlt />
              <span>{t("branches")}</span>
            </div>
<ul className="absolute top-full right-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg z-50 
opacity-0 invisible group-hover:opacity-100 group-hover:visible 
transition-all duration-300 
max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100">              {branches.map((item, i) => (
                <li key={i} className="px-4 py-2 hover:bg-gray-100">
                  <Link to={`${base}/${item.path}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* BLOG */}
          <li>
            <Link to={`${base}/blog`} className="flex items-center gap-2 hover:text-red-500">
              <FaBook />
              <span>{t("blog")}</span>
            </Link>
          </li>

        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-gray-300">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:text-red-500"
          >
            <FaGlobe />
            {isEn ? "العربية" : "English"}
          </button>

          <a href="tel:01211114528" className="flex items-center gap-2">
            <FaPhone />
            01211114528
          </a>
        </div>

      </div>
    </nav>
  );
}