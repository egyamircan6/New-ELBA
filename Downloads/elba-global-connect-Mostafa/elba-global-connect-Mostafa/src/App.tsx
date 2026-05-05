import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Ar/HomeAr";
import Devices from "./pages/Ar/DevicePageAr";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Blog/Article";
import Contact from "./pages/Ar/ContactAr";
import PrivacyPolicy from "./pages/Ar/PrivacyPolicyAr";
import Copyright from "./pages/Ar/CopyrightAr";
import NotFound from "./pages/Ar/NotFoundAr";
import HoodElbaAr from "./pages/Ar/Devices/HoodElbaAr";
import HoodBuiltinElbaAr from "./pages/Ar/Devices/HoodBuiltinElbaAr";
import CookerElbaAr from "./pages/Ar/Devices/CookerElbaAr";
import CookerBuilltinElbaAr from "./pages/Ar/Devices/CookerBuilltinElbaAr";
import OvenElbaAr from "./pages/Ar/Devices/OvenElbaAr";
import OvenBuiltinElbaAr from "./pages/Ar/Devices/OvenBuiltinElbaAr";
import { WashingMachine } from "lucide-react";
import DishwasherBuiltinElbaAr from "./pages/Ar/Devices/DishwasherBuiltinElbaAr";
import DishwasherElbaAr from "./pages/Ar/Devices/DishwasherElbaAr";
import DevicesEn from "./pages/En/DevicesEn";
import CookerEn from "./pages/En/Device/CookerEn";
import CookerBuiltinEn from "./pages/En/Device/CookerBuiltinEn";
import OvenEn from "./pages/En/Device/OvenEn";
import OvenBuiltinEn from "./pages/En/Device/OvenBuiltinEn ";
import DishwasherEn from "./pages/En/Device/DishwasherEn";
import DishwasherBuiltinEn from "./pages/En/Device/DishwasherBuiltinEn";
import BranchDetail from "./pages/BranchDetail";
import HomeEN from "./pages/En/HomeEn";
import HomeSwitch from "./contexts/HomeSwitch";
import HoodEn from "./pages/En/Device/HoodEn";
import HoodBuiltinElbaEn from "./pages/En/Device/HoodBuiltinElbaEn";
import ContactEn from "./pages/En/ContactEn";
import ContactSwitch from "./contexts/ContactSwitch";
import DokkiPageAr from "./pages/Ar/Branches/DokkiPageAr";
import FifthSettlementPageAr from "./pages/Ar/Branches/FifthSettlementPageAr";
import HeliopolisPageAr from "./pages/Ar/Branches/HeliopolisPageAr";
import MaadiPageAr from "./pages/Ar/Branches/MaadiPageAr";
import MadinatyPageAr from "./pages/Ar/Branches/MadinatyPageAr";
import MohandessinPageAr from "./pages/Ar/Branches/MohandessinPageAr";
import MokattamPageAr from "./pages/Ar/Branches/MokattamPageAr";
import NasrCityPageAr from "./pages/Ar/Branches/NasrCityPageAr";
import NewCapitalPageAr from "./pages/Ar/Branches/NewCapitalPageAr";
import OctoberPageAr from "./pages/Ar/Branches/OctoberPageAr";
import RehabPageAr from "./pages/Ar/Branches/RehabPageAr";
import SheikhZayedPageAr from "./pages/Ar/Branches/SheikhZayedPageAr";
import SheratonPageAr from "./pages/Ar/Branches/SheratonPageAr";
import FifthSettlementPageEn from "./pages/En/Branches/FifthSettlementPageEn";
import SheikhZayedPageEn from "./pages/En/Branches/SheikhZayedPageEn";
import HeliopolisPageEn from "./pages/En/Branches/HeliopolisPageEn";
import MaadiPageEn from "./pages/En/Branches/MaadiPageEn";
import NasrCityPageEn from "./pages/En/Branches/NasrCityPageEn";
import OctoberPageEn from "./pages/En/Branches/OctoberPageEn";
import MohandessinPageEn from "./pages/En/Branches/MohandessinPageEn";
import DokkiPageEn from "./pages/En/Branches/DokkiPageEn";
import MokattamPageEn from "./pages/En/Branches/MokattamPageEn";
import MadinatyPageEn from "./pages/En/Branches/MadinatyPageEn";
import RehabPageEn from "./pages/En/Branches/RehabPageEn";
import SheratonPageEn from "./pages/En/Branches/SheratonPageEn";
import NewCapitalPageEn from "./pages/En/Branches/NewCapitalPageEn";

const queryClient = new QueryClient();

const getDefaultLang = () => {
  const saved = localStorage.getItem("language");
  return saved === "ar" || saved === "en" ? saved : "ar";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to default language */}
          <Route
            path="/"
            element={<Navigate to={`/${getDefaultLang()}`} replace />}
          />
          <Route
            path="/:lang"
            element={
              <LanguageProvider>
                <HomeSwitch />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-اجهزة-البا"
            element={
              <LanguageProvider>
                <Devices />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-شفاط-البا"
            element={
              <LanguageProvider>
                <HoodElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-شفاط-البا-بلت-ان"
            element={
              <LanguageProvider>
                <HoodBuiltinElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-بوتاجاز-البا"
            element={
              <LanguageProvider>
                <CookerElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-بوتاجاز-البا-بلت-ان"
            element={
              <LanguageProvider>
                <CookerBuilltinElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-فرن-البا"
            element={
              <LanguageProvider>
                <OvenElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-فرن-البا-بلت-ان"
            element={
              <LanguageProvider>
                <OvenBuiltinElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-غسالة-اطباق-البا"
            element={
              <LanguageProvider>
                <DishwasherElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-غسالة-اطباق-البا-بلت-ان"
            element={
              <LanguageProvider>
                <DishwasherBuiltinElbaAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/blog"
            element={
              <LanguageProvider>
                <Blog />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/blog/:slug"
            element={
              <LanguageProvider>
                <Article />
              </LanguageProvider>
            }
          />
          <Route
            path="/المدونة/:slug"
            element={
              <LanguageProvider>
                <Article />
              </LanguageProvider>
            }
          />
          {/* <Route path="/:lang/contact" element={<LanguageProvider><Contact /></LanguageProvider>} /> */}
          <Route
            path="/:lang/privacy-policy"
            element={
              <LanguageProvider>
                <PrivacyPolicy />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/copyright"
            element={
              <LanguageProvider>
                <Copyright />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/device"
            element={
              <LanguageProvider>
                <DevicesEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-hood-maintenance"
            element={
              <LanguageProvider>
                <HoodEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-built-in-hood-repair"
            element={
              <LanguageProvider>
                <HoodBuiltinElbaEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-cooker-maintenance"
            element={
              <LanguageProvider>
                <CookerEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-built-in-cooker-repair"
            element={
              <LanguageProvider>
                <CookerBuiltinEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-oven-maintenance"
            element={
              <LanguageProvider>
                <OvenEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-built-in-oven-repair"
            element={
              <LanguageProvider>
                <OvenBuiltinEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-dishwasher-repair"
            element={
              <LanguageProvider>
                <DishwasherEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-built-in-dishwasher-repair"
            element={
              <LanguageProvider>
                <DishwasherBuiltinEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/blog"
            element={
              <LanguageProvider>
                <Blog />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/blog/:slug"
            element={
              <LanguageProvider>
                <Article />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-hotline"
            element={
              <LanguageProvider>
                <ContactSwitch />
              </LanguageProvider>
            }
          />{" "}
          <Route
            path="/:lang/privacy-policy"
            element={
              <LanguageProvider>
                <PrivacyPolicy />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/copyright"
            element={
              <LanguageProvider>
                <Copyright />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/branches/:slug"
            element={
              <LanguageProvider>
                <BranchDetail />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-fifth-settlement"
            element={
              <LanguageProvider>
                <FifthSettlementPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-التجمع-الخامس"
            element={
              <LanguageProvider>
                <FifthSettlementPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-sheikh-zayed"
            element={
              <LanguageProvider>
                <SheikhZayedPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-الشيخ-زايد"
            element={
              <LanguageProvider>
                <SheikhZayedPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-heliopolis"
            element={
              <LanguageProvider>
                <HeliopolisPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-مصر-الجديدة"
            element={
              <LanguageProvider>
                <HeliopolisPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-maadi"
            element={
              <LanguageProvider>
                <MaadiPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-المعادي"
            element={
              <LanguageProvider>
                <MaadiPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-nasr-city"
            element={
              <LanguageProvider>
                <NasrCityPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-مدينة-نصر"
            element={
              <LanguageProvider>
                <NasrCityPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-6th-october"
            element={
              <LanguageProvider>
                <OctoberPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-6-اكتوبر"
            element={
              <LanguageProvider>
                <OctoberPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-mohandessin"
            element={
              <LanguageProvider>
                <MohandessinPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-المهندسين"
            element={
              <LanguageProvider>
                <MohandessinPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-dokki"
            element={
              <LanguageProvider>
                <DokkiPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-الدقي"
            element={
              <LanguageProvider>
                <DokkiPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-mokattam"
            element={
              <LanguageProvider>
                <MokattamPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-المقطم"
            element={
              <LanguageProvider>
                <MokattamPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-madinaty"
            element={
              <LanguageProvider>
                <MadinatyPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-مدينتي"
            element={
              <LanguageProvider>
                <MadinatyPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-rehab-city"
            element={
              <LanguageProvider>
                <RehabPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-الرحاب"
            element={
              <LanguageProvider>
                <RehabPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-sheraton-airport"
            element={
              <LanguageProvider>
                <SheratonPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-شيراتون-المطار"
            element={
              <LanguageProvider>
                <SheratonPageAr />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/elba-maintenance-in-new-administrative-capital"
            element={
              <LanguageProvider>
                <NewCapitalPageEn />
              </LanguageProvider>
            }
          />
          <Route
            path="/:lang/صيانة-البا-في-العاصمة-الادارية-الجديدة"
            element={
              <LanguageProvider>
                <NewCapitalPageAr />
              </LanguageProvider>
            }
          />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
