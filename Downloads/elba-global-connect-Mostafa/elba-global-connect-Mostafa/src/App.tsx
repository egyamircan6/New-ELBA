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

const queryClient = new QueryClient();

const getDefaultLang = () => {
  const saved = localStorage.getItem('language');
  return (saved === 'ar' || saved === 'en') ? saved : 'ar';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to={`/${getDefaultLang()}`} replace />} />
    
<Route path="/:lang" element={<LanguageProvider><HomeSwitch /></LanguageProvider>} />
          <Route path="/:lang/صيانة-اجهزة-البا" element={<LanguageProvider><Devices /></LanguageProvider>} />

          <Route path="/:lang/صيانة-شفاط-البا" element={<LanguageProvider><HoodElbaAr /></LanguageProvider>} />
          <Route path="/:lang/صيانة-شفاط-البا-بلت-ان" element={<LanguageProvider><HoodBuiltinElbaAr /></LanguageProvider>} />

          <Route path="/:lang/صيانة-بوتاجاز-البا" element={<LanguageProvider><CookerElbaAr /></LanguageProvider>} />
          <Route path="/:lang/صيانة-بوتاجاز-البا-بلت-ان" element={<LanguageProvider><CookerBuilltinElbaAr /></LanguageProvider>} />

          <Route path="/:lang/صيانة-فرن-البا" element={<LanguageProvider><OvenElbaAr/></LanguageProvider>} />
          <Route path="/:lang/صيانة-فرن-البا-بلت-ان" element={<LanguageProvider><OvenBuiltinElbaAr /></LanguageProvider>} />

          <Route path="/:lang/صيانة-غسالة-اطباق-البا" element={<LanguageProvider><DishwasherElbaAr/></LanguageProvider>} />
          <Route path="/:lang/صيانة-غسالة-اطباق-البا-بلت-ان" element={<LanguageProvider><DishwasherBuiltinElbaAr/></LanguageProvider>} />




          <Route path="/:lang/blog" element={<LanguageProvider><Blog /></LanguageProvider>} />

          <Route path="/:lang/blog/:slug" element={<LanguageProvider><Article /></LanguageProvider>} />
          {/* <Route path="/:lang/contact" element={<LanguageProvider><Contact /></LanguageProvider>} /> */}
          <Route path="/:lang/privacy-policy" element={<LanguageProvider><PrivacyPolicy /></LanguageProvider>} />
          <Route path="/:lang/copyright" element={<LanguageProvider><Copyright /></LanguageProvider>} />
          <Route path="/:lang/branches/:slug" element={<LanguageProvider><BranchDetail /></LanguageProvider>} />
          <Route path="/:lang/device" element={<LanguageProvider><DevicesEn/></LanguageProvider>} />

          <Route path="/:lang/hood" element={<LanguageProvider><HoodEn /></LanguageProvider>} />
          <Route path="/:lang/hood-builtin" element={<LanguageProvider><HoodBuiltinElbaEn /></LanguageProvider>} />

          <Route path="/:lang/cooker" element={<LanguageProvider><CookerEn /></LanguageProvider>} />
          <Route path="/:lang/cooker-builtin" element={<LanguageProvider><CookerBuiltinEn /></LanguageProvider>} />

          <Route path="/:lang/oven" element={<LanguageProvider><OvenEn/></LanguageProvider>} />
          <Route path="/:lang/oven-builtin" element={<LanguageProvider><OvenBuiltinEn /></LanguageProvider>} />

          <Route path="/:lang/dishwasher" element={<LanguageProvider><DishwasherEn/></LanguageProvider>} />
          <Route path="/:lang/dishwasher-builtin" element={<LanguageProvider><DishwasherBuiltinEn/></LanguageProvider>} />

          <Route path="/:lang/blog" element={<LanguageProvider><Blog /></LanguageProvider>} />
          <Route path="/:lang/blog/:slug" element={<LanguageProvider><Article /></LanguageProvider>} />
<Route
  path="/:lang/contact"
  element={
    <LanguageProvider>
      <ContactSwitch />
    </LanguageProvider>
  }
/>          <Route path="/:lang/privacy-policy" element={<LanguageProvider><PrivacyPolicy /></LanguageProvider>} />
          <Route path="/:lang/copyright" element={<LanguageProvider><Copyright /></LanguageProvider>} />
          <Route path="/:lang/branches/:slug" element={<LanguageProvider><BranchDetail /></LanguageProvider>} />

          



          {/* Catch-all */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
