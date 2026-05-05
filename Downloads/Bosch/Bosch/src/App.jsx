import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

/* ================= AR ================= */

import HomeAr from "./Components/home/Ar/HomeAr";
import ContactAr from "./Components/contactus/Ar/ContactAr";
import Nasrcityar from "./Components/Branches/AR/Nasrcityar";
import MokattamAr from "./Components/Branches/AR/MokattamAr";
import HelwanAr from "./Components/Branches/AR/HelwanAr";
import DowntownAr from "./Components/Branches/AR/DowntownAr";
import ShoroukAr from "./Components/Branches/AR/ShoroukAr";
import SheikhZayedAr from "./Components/Branches/AR/SheikhZayedAr";
import OctoberAr from "./Components/Branches/AR/OctoberAr";
import DokkiAr from "./Components/Branches/AR/DokkiAr";
import MohandessinAr from "./Components/Branches/AR/MohandessinAr";
import FaisalAr from "./Components/Branches/AR/FaisalAr";
import HaramAr from "./Components/Branches/AR/HaramAr";
import HadayekAhramAr from "./Components/Branches/AR/HadayekAhramAr";
import AlexAr from "./Components/Branches/AR/AlexAr";
import NorthCoastAr from "./Components/Branches/AR/NorthCoastAr";
import DishwasherAr from "./Components/devices/AR/DishwasherAr";
import DryerAr from "./Components/devices/AR/DryerAr";
import RefrigeratorAR from "./Components/devices/AR/RefrigeratorAR";
import DeepfreezerAr from "./Components/devices/AR/DeepfreezerAr";
import WashingAR from "./Components/devices/AR/WashingAR";
import CookerAR from "./Components/devices/AR/CookerAR";
import FlatsAR from "./Components/devices/AR/FlatsAR";
import MicrowaveAR from "./Components/devices/AR/MicrowaveAR";
import HoodsAR from "./Components/devices/AR/HoodsAR";
import CoffeemachineAR from "./Components/devices/AR/CoffeemachineAR";
import VacuumcleanersAr from "./Components/devices/AR/VacuumcleanersAr";
import HeatersAR from "./Components/devices/AR/HeatersAR";
import BuiltinDishwashersAR from "./Components/devices/AR/BuiltinDishwashersAR";
import BuiltinHoodsAR from "./Components/devices/AR/BuiltinOvensAR";
import BuiltinRefrigeratorAR from "./Components/devices/AR/BuiltinRefrigeratorAR";


/* ================= EN ================= */

import HomeEn from "./Components/home/EN/HomeEn";
import ContactEn from "./Components/contactus/EN/ContactEn";
import NasrcityEn from "./Components/Branches/EN/NasrcityEn";
import MokattamEn from "./Components/Branches/EN/MokattamEn";
import HelwanEn from "./Components/Branches/EN/HelwanEn";
import DowntownEn from "./Components/Branches/EN/DowntownEn";
import ShoroukEn from "./Components/Branches/EN/ShoroukEn";
import SheikhZayedEn from "./Components/Branches/EN/SheikhZayedEn";
import OctoberEn from "./Components/Branches/EN/OctoberEn";
import DokkiEn from "./Components/Branches/EN/DokkiEn";
import MohandessinEn from "./Components/Branches/EN/MohandessinEn";
import FaisalEn from "./Components/Branches/EN/FaisalEn";
import HaramEn from "./Components/Branches/EN/HaramEn";
import HadayekAhramEn from "./Components/Branches/EN/HadayekAhramEn";
import NorthCoastEn from "./Components/Branches/EN/NorthCoastEn";
import WashingEN from "./Components/devices/EN/WashingEN";
import DryerEn from "./Components/devices/EN/DryerEn";
import RefrigeratorEN from "./Components/devices/EN/RefrigeratorEN";
import DeepfreezerEN from "./Components/devices/EN/DeepfreezerEN";
import DishwasherEn from "./Components/devices/EN/DishwasherEn";
import CookerEN from "./Components/devices/EN/CookerEN";
import FlatsEN from "./Components/devices/EN/FlatsEN";
import MicrowaveEn from "./Components/devices/EN/MicrowaveEn";
import HoodsEN from "./Components/devices/EN/HoodsEN";
import CoffeemachineEN from "./Components/devices/EN/CoffeemachineEN";
import VacuumcleanersEN from "./Components/devices/EN/VacuumcleanersEN";
import HeatersEN from "./Components/devices/EN/HeatersEN";
import BuiltinDishwashersEN from "./Components/devices/EN/BuiltinDishwashersEN";
import BuiltinHoodsEn from "./Components/devices/EN/BuiltinHoodsEn";
import BuiltinRefrigeratorEN from "./Components/devices/EN/BuiltinRefrigeratorEN";
import AlexEn from "./Components/Branches/EN/AlexEn";
import BuiltinOvensAR from "./Components/devices/AR/BuiltinOvensAR";
import BuiltinOvenEn from "./Components/devices/EN/BuiltinOvenEn";
import HeliopolisEn from "./Components/Branches/EN/HeliopolisEn";
import TagamoaEn from "./Components/Branches/EN/TagamoaEn";
import NewCairoEn from "./Components/Branches/EN/NewCairoEn";
import MadinatyEn from "./Components/faq/EN/branches/MadinatyEn";
import SheratonEn from "./Components/Branches/EN/SheratonEn";
import GesrElSuezEn from "./Components/Branches/EN/GesrElSuezEn";
import MaadiEn from "./Components/Branches/EN/MaadiEn";
import ShubraEn from "./Components/Branches/EN/ShubraEn";
import RehabCityEn from "./Components/Branches/EN/RehabCityEn";
import HeliopolisAr from "./Components/Branches/AR/HeliopolisAr";
import TagamoaAr from "./Components/Branches/AR/TagamoaAr";
import NewCairoAr from "./Components/Branches/AR/NewCairoAr";
import RehabCityAr from "./Components/Branches/AR/RehabCityAr";
import MadinatyAr from "./Components/Branches/AR/MadinatyAr";
import SheratonAr from "./Components/Branches/AR/SheratonAr";
import GesrElSuezAr from "./Components/Branches/AR/GesrElSuezAr";
import MaadiAr from "./Components/Branches/AR/MaadiAr";
import ShubraAr from "./Components/Branches/AR/ShubraAr";


function App(){

const router = createBrowserRouter([

  { path: "/", element: <Navigate to="/ar" replace /> },

  /* ===== AR ===== */
  {
    path: "/ar",
    element: <Layout />,
    children: [
      { index: true, element: <HomeAr /> }, /////done
      { path: "صيانة-بوش-مصر", element: <HomeAr /> },/////done
      { path: "من-نحن", element: <ContactAr /> }, //////done 
      // devices
      { path: "صيانة-غسالات-أطباق-بوش", element: <DishwasherAr /> },////done
      { path: "صيانة-دراير-بوش", element: <DryerAr /> },////////done
      { path: "صيانة-ثلاجات-بوش", element: <RefrigeratorAR /> },///////////done
      { path: "صيانةديب-فريزر-بوش", element: <DeepfreezerAr /> },/// done 
      { path: "صيانة-غسالات-ملابس-بوش", element: <WashingAR /> },/////////////done 
      { path: "صيانة-بوتاجازات-بوش", element: <CookerAR /> },/////////////done
      { path: "صيانة-مسطحات-بوش", element: <FlatsAR /> },////////done
      { path: "صيانة-ميكروويف-بوش", element: <MicrowaveAR /> },////done
      { path: "صيانة-شفاطات-بوش", element: <HoodsAR /> },///done
      { path: "صيانة-مكنة-قهوة-بوش", element: <CoffeemachineAR /> },////done
      { path: "صيانة-مكانس-بوش", element: <VacuumcleanersAr /> },//////////done
      { path: "صيانة-تكييف-بوش", element: <RefrigeratorAR /> },///////////done
      { path: "صيانة-سخانات-بوش", element: <HeatersAR /> },//////////////done
      // built in
      { path: "صيانةغسالات-أطباق-بوش-بلت-ان", element: <BuiltinDishwashersAR /> },////done
      { path: "صيانة-افران-بوش-بلت-ان", element: <BuiltinOvensAR /> },///////////done
      { path: "صيانة-ثلاجات-بوش-بلت-ان", element: <BuiltinRefrigeratorAR /> },////////done
      // branches
      { path: "صيانة-بوش-المقطم", element: <MokattamAr /> },///////////////done
      { path: "صيانة-بوش-حلوان", element: <HelwanAr /> },///////done
      { path: "صيانة-بوش-وسط-البلد", element: <DowntownAr /> },////////done
      { path: "صيانة-بوش-مدينة-نصر", element: <Nasrcityar /> },/////////////////done
      { path: "صيانة-بوش-شروق", element: <ShoroukAr /> },///////////////done
      { path: "صيانة-بوش-الشيخ-زايد", element: <SheikhZayedAr /> },///////////////done
      { path: "صيانة-بوش-6-اكتوبر", element: <OctoberAr /> },//////////////done
      { path: "صيانة-بوش-الدقي", element: <DokkiAr /> },//////////////done
      { path: "صيانة-بوش-المهندسين", element: <MohandessinAr /> },///////////done
      { path: "صيانة-بوش-فيصل", element: <FaisalAr /> },///////////////done
      { path: "صيانة-بوش-الهرم", element: <HaramAr /> },/////////////done
      { path: "صيانة-بوش-حدائق-الاهرام", element: <HadayekAhramAr /> },////////done
      { path: "صيانة-بوش-الاسكندرية", element: <AlexAr /> },//////////////done
      { path: "صيانة-بوش-الساحل-الشمالي", element: <NorthCoastAr /> },////done





     { path: "صيانة-بوش-مصر-الجديدة", element: <HeliopolisAr /> },
     { path: "صيانة-بوش-التجمع", element: <TagamoaAr /> },
     { path: "صيانة-بوش-القاهرة-الجديدة", element: <NewCairoAr /> },
     { path: "صيانة-بوش-الرحاب", element: <RehabCityAr /> },
     { path: "صيانة-بوش-مدينتي", element: <MadinatyAr /> },
     { path: "صيانة-بوش-شيراتون", element: <SheratonAr /> },
     { path: "صيانة-بوش-جسر-السويس", element: <GesrElSuezAr /> },
     { path: "صيانة-بوش-المعادي", element: <MaadiAr /> },
     { path: "صيانة-بوش-شبرا", element: <ShubraAr /> },
    ],
  },

  /* ===== EN ===== */
  {
    path: "/en",
    element: <Layout />,
    children: [
      { index: true, element: <HomeEn /> },/////////////done
      { path: "bosch-egypt-maintenance", element: <HomeEn /> },///////////////done
      { path: "bosch-hotline-egypt", element: <ContactEn /> },/////////////////done exp ques
      // devices
      { path: "bosch-washing-machine-repair", element: <WashingEN /> },/////////done
      { path: "bosch-dryer-repair", element: <DryerEn /> },////////////////done
      { path: "bosch-refrigerator-repair", element: <RefrigeratorEN /> },///////////done
      { path: "bosch-deep-freezer-repair", element: <DeepfreezerEN /> },/////////////done
      { path: "bosch-dishwasher-repair", element: <DishwasherEn /> },////////////done
      { path: "bosch-cooker-repair", element: <CookerEN /> },/////////////////done
      { path: "bosch-hob-repair", element: <FlatsEN /> },//////////done
      { path: "bosch-microwave-repair", element: <MicrowaveEn /> },////////done
      { path: "bosch-hood-repair", element: <HoodsEN /> },//////////done
      { path: "bosch-coffee-machine-repair", element: <CoffeemachineEN /> },////////////done
      { path: "bosch-vacuum-cleaner-repair", element: <VacuumcleanersEN /> },////////done
      { path: "bosch-air-conditioner-repair", element: <RefrigeratorEN /> },/////////////done
      { path: "bosch-water-heater-repair", element: <HeatersEN /> },//////done
      // built in
  
      { path: "bosch-built-in-dishwasher-repair", element: <BuiltinDishwashersEN /> },////////done
      { path: "bosch-built-in-hood-repair", element: <BuiltinHoodsEn /> },/////////done
      { path: "bosch-built-in-refrigerator-repair", element: <BuiltinRefrigeratorEN /> },///////done
      { path: "bosch-built-in-oven-repair", element: <BuiltinOvenEn /> },////////////done
      // branches
      { path: "mokattam-branch", element: <MokattamEn /> },/////////done
      { path: "helwan-branch", element: <HelwanEn /> },/////////////done
      { path: "downtown-branch", element: <DowntownEn /> },//////done
      { path: "nasr-city-branch", element: <NasrcityEn /> },////////done
      { path: "shorouk-branch", element: <ShoroukEn /> },//////////done
      { path: "sheikh-zayed-branch", element: <SheikhZayedEn /> },////////////done
      { path: "october-branch", element: <OctoberEn /> },////////////done
      { path: "dokki-branch", element: <DokkiEn /> },////////////done
      { path: "mohandessin-branch", element: <MohandessinEn /> },/////////done
      { path: "faisal-branch", element: <FaisalEn /> },/////////done
      { path: "haram-branch", element: <HaramEn /> },//////////////done
      { path: "hadayek-al-ahram-branch", element: <HadayekAhramEn /> },///////////done
      { path: "alexandria-branch", element: <AlexEn /> },////////done
      { path: "north-coast-branch", element: <NorthCoastEn /> },
      
      { path: "heliopolis-branch", element: <HeliopolisEn /> },
      { path: "tagamoa-branch", element: <TagamoaEn /> },
      { path: "new-cairo-branch", element: <NewCairoEn /> },
      { path: "rehab-city-branch", element: <RehabCityEn /> },
      { path: "madinaty-branch", element: <MadinatyEn /> },
      { path: "sheraton-branch", element: <SheratonEn /> },
      { path: "gesr-el-suez-branch", element: <GesrElSuezEn /> },
      { path: "maadi-branch", element: <MaadiEn /> },
      { path: "shubra-branch", element: <ShubraEn /> },
    ],
  },
]);

return <RouterProvider router={router}/>

}

export default App;




//////till 6 octobar