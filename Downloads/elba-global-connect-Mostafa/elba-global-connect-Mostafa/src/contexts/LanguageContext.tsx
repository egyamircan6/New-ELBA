import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
  localePath: (path: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.devices": "Devices",
    "nav.blog": "Blog",
    "nav.contact": "Contact Us",
    "nav.privacy": "Privacy Policy",
    "nav.copyright": "Copyright",

    // Hero Section
    "hero.title": "Professional Elba Appliance Maintenance",
    "hero.subtitle":
      "Expert repair and maintenance services for all Elba cookers, ovens, and hoods",
    "hero.cta.request": "Request Service",
    "hero.cta.call": "Call Now",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "Comprehensive maintenance solutions for your Elba appliances",
    "services.repair.title": "Repair Services",
    "services.repair.desc":
      "Fast and reliable repairs for all Elba appliance issues",
    "services.installation.title": "Installation",
    "services.installation.desc":
      "Professional installation of new Elba appliances",
    "services.maintenance.title": "Maintenance",
    "services.maintenance.desc":
      "Regular maintenance to keep your appliances running smoothly",
    "services.emergency.title": "Emergency Support",
    "services.emergency.desc": "24/7 emergency repair services available",

    // Why Choose Us
    "why.title": "Why Choose Us",
    "why.subtitle": "Trusted by thousands of customers across Egypt",
    "why.experience": "Years of Experience",
    "why.technicians": "Certified Technicians",
    "why.warranty": "Service Warranty",
    "why.parts": "Original Parts",

    // Devices
    "devices.title": "Elba Devices",
    "devices.subtitle": "Select your device type for specialized service",
    "devices.cookers": "Cookers",
    "devices.ovens": "Ovens",
    "devices.hoods": "Hoods",
    "devices.all": "All Devices",
    "devices.request": "Request Service",

    // Blog
    "blog.title": "Maintenance Tips & Articles",
    "blog.subtitle": "Expert advice to keep your appliances in top condition",
    "blog.readMore": "Read More",
    "blog.latestArticles": "Latest Articles",
    "blog.relatedArticles": "Related Articles",
    "blog.share": "Share Article",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our expert team",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.hours": "Working Hours",
    "contact.hoursValue": "Saturday - Thursday: 9AM - 9PM",
    "contact.areas": "Service Areas",
    "contact.areasValue": "All areas in Egypt",

    // Form
    "form.name": "Your Name",
    "form.phone": "Phone Number",
    "form.device": "Device Type",
    "form.issue": "Describe the Issue",
    "form.submit": "Submit Request",
    "form.selectDevice": "Select device type",

    // Popup
    "popup.title": "Request Maintenance Service",
    "popup.promo.title": "Special Offer!",
    "popup.promo.desc": "Get 20% off on all maintenance services this month",
    "popup.promo.cta": "Claim Offer",

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.brand": "Elba Maintenance Services",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.intro":
      "Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.",
    "privacy.collection.title": "Information Collection",
    "privacy.collection.desc":
      "We collect information you provide directly to us, such as when you request a service, contact us, or sign up for our newsletter. This may include your name, phone number, email address, and details about your appliance.",
    "privacy.use.title": "How We Use Your Information",
    "privacy.use.desc":
      "We use the information we collect to provide, maintain, and improve our services, to process your service requests, to communicate with you about our services, and to send you technical notices and support messages.",
    "privacy.protection.title": "Data Protection",
    "privacy.protection.desc":
      "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    "privacy.sharing.title": "Information Sharing",
    "privacy.sharing.desc":
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services.",
    "privacy.cookies.title": "Cookies",
    "privacy.cookies.desc":
      "We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and personalize content.",
    "privacy.contact.title": "Contact Us",
    "privacy.contact.desc":
      "If you have any questions about this Privacy Policy, please contact us through our contact page.",

    // Copyright
    "copyright.title": "Copyright Policy",
    "copyright.intro":
      "This Copyright Policy outlines the intellectual property rights associated with this website and its content.",
    "copyright.ownership.title": "Ownership of Content",
    "copyright.ownership.desc":
      "All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Elba Maintenance Services or its content suppliers and is protected by Egyptian and international copyright laws.",
    "copyright.permitted.title": "Permitted Use",
    "copyright.permitted.desc":
      "You may view, download, and print pages from this website for your personal, non-commercial use, subject to the restrictions set out in this policy.",
    "copyright.restrictions.title": "Restrictions",
    "copyright.restrictions.desc":
      "You must not republish, sell, rent, sub-license, reproduce, duplicate, copy, or otherwise exploit material on this website for commercial purposes without our express written consent.",
    "copyright.trademarks.title": "Trademarks",
    "copyright.trademarks.desc":
      "Elba and related logos are registered trademarks. You may not use these marks without the prior written permission of the trademark owner.",
    "copyright.infringement.title": "Copyright Infringement",
    "copyright.infringement.desc":
      "If you believe that any content on this website infringes your copyright, please contact us with details of the alleged infringement.",

    // Device Detail
    "device.steps.title": "Service Request Steps",
    "device.steps.1.title": "Contact Us",
    "device.steps.1.desc": "Call us or send via WhatsApp/website form",
    "device.steps.2.title": "Schedule Visit",
    "device.steps.2.desc":
      "We coordinate the nearest time and send a technician with tools and spare parts",
    "device.steps.3.title": "Repair & Test",
    "device.steps.3.desc":
      "We perform maintenance and test the device with a service warranty",
    "device.tips.title": "Tips to Maintain Your",
    "device.tips.cta":
      "If you face any problem, contact us and our team will help you right away.",
    "device.faq.title": "Frequently Asked Questions",
    "device.faq.subtitle":
      "Here are the most common questions from our customers",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.devices": "الأجهزة",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.privacy": "سياسة الخصوصية",
    "nav.copyright": "حقوق الطبع والنشر",

    // Hero Section
    "hero.title": "صيانة أجهزة إلبا المحترفة",
    "hero.subtitle":
      "خدمات إصلاح وصيانة متخصصة لجميع بوتاجازات وأفران وشفاطات إلبا",
    "hero.cta.request": "اطلب الخدمة",
    "hero.cta.call": "اتصل الآن",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول صيانة شاملة لأجهزة إلبا الخاصة بك",
    "services.repair.title": "خدمات الإصلاح",
    "services.repair.desc": "إصلاحات سريعة وموثوقة لجميع مشاكل أجهزة إلبا",
    "services.installation.title": "التركيب",
    "services.installation.desc": "تركيب احترافي لأجهزة إلبا الجديدة",
    "services.maintenance.title": "الصيانة",
    "services.maintenance.desc": "صيانة دورية للحفاظ على عمل أجهزتك بسلاسة",
    "services.emergency.title": "الدعم الطارئ",
    "services.emergency.desc": "خدمات إصلاح طارئة متاحة على مدار الساعة",

    // Why Choose Us
    "why.title": "لماذا تختارنا",
    "why.subtitle": "موثوق من آلاف العملاء في جميع أنحاء مصر",
    "why.experience": "سنوات من الخبرة",
    "why.technicians": "فنيون معتمدون",
    "why.warranty": "ضمان الخدمة",
    "why.parts": "قطع غيار أصلية",

    // Devices
    "devices.title": "أجهزة إلبا",
    "devices.subtitle": "اختر نوع جهازك للحصول على خدمة متخصصة",
    "devices.cookers": "البوتاجازات",
    "devices.ovens": "الأفران",
    "devices.hoods": "الشفاطات",
    "devices.all": "جميع الأجهزة",
    "devices.request": "اطلب الخدمة",

    // Blog
    "blog.title": "نصائح ومقالات الصيانة",
    "blog.subtitle": "نصائح الخبراء للحفاظ على أجهزتك في أفضل حالة",
    "blog.readMore": "اقرأ المزيد",
    "blog.latestArticles": "أحدث المقالات",
    "blog.relatedArticles": "مقالات ذات صلة",
    "blog.share": "شارك المقال",

    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "تواصل مع فريق الخبراء لدينا",
    "contact.phone": "الهاتف",
    "contact.whatsapp": "واتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.hours": "ساعات العمل",
    "contact.hoursValue": "السبت - الخميس: 9 صباحاً - 9 مساءً",
    "contact.areas": "مناطق الخدمة",
    "contact.areasValue": "جميع المناطق في مصر",

    // Form
    "form.name": "الاسم",
    "form.phone": "رقم الهاتف",
    "form.device": "نوع الجهاز",
    "form.issue": "وصف المشكلة",
    "form.submit": "إرسال الطلب",
    "form.selectDevice": "اختر نوع الجهاز",

    // Popup
    "popup.title": "اطلب خدمة الصيانة",
    "popup.promo.title": "عرض خاص!",
    "popup.promo.desc": "احصل على خصم 20% على جميع خدمات الصيانة هذا الشهر",
    "popup.promo.cta": "احصل على العرض",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة لشركة الأمريكية جروب ",
    "footer.brand": "خدمة صيانة إلبا",

    // Device Detail
    "device.steps.title": "خطوات طلب الخدمة",
    "device.steps.1.title": "اتصل بنا أو أرسل طلبك",
    "device.steps.1.desc": "على الرقم أو عبر الواتساب/نموذج الموقع",
    "device.steps.2.title": "تحديد الموعد والزيارة",
    "device.steps.2.desc":
      "ننسق أقرب وقت ونرسل فني متنقل مكون من الأدوات وقطع الغيار",
    "device.steps.3.title": "إصلاح واختبار الجهاز",
    "device.steps.3.desc": "نعمل صيانة وتسلمات ضمان الخدمة مكتوب على الجهاز",
    "device.tips.title": "نصائح للحفاظ على",
    "device.tips.cta":
      "لو واجهتك أي مشكلة متواجدين نتكلمها، و فريقنا هيجيلك عالطول.",
    "device.faq.title": "الأسئلة الشائعة",
    "device.faq.subtitle": "هنا جمعنالك أكتر الأسئلة اللي بيكررها عملائنا",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

/**
 * Map AR route slugs <-> EN route slugs
 * IMPORTANT: only the SECOND segment after /:lang is mapped
 * Example: /ar/صيانة-فرن-البا <-> /en/oven
 */
const ROUTE_MAP_AR_TO_EN: Record<string, string> = {
  "صيانة-اجهزة-البا": "device",

  "صيانة-شفاط-البا": "elba-hood-maintenance",
  "صيانة-شفاط-البا-بلت-ان": "elba-built-in-hood-repair",

  "صيانة-بوتاجاز-البا": "elba-cooker-maintenance",
  "صيانة-بوتاجاز-البا-بلت-ان": "elba-built-in-cooker-repair",

  "صيانة-افران-البا": "elba-oven-maintenance",
  "صيانة-فرن-البا-بلت-ان": "elba-built-in-oven-repair",

  "صيانة-غسالات-اطباق-البا": "elba-dishwasher-repair",
  "صيانة-غسالات-اطباق-البا-بلت-ان": "elba-built-in-dishwasher-repair",
};

const ROUTE_MAP_EN_TO_AR: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP_AR_TO_EN).map(([ar, en]) => [en, ar]),
);

// Inner provider that has access to router
const LanguageProviderInner: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ lang?: string }>();

  const getLangFromUrl = (): Language => {
    const urlLang = params.lang || location.pathname.split("/")[1];
    if (urlLang === "ar" || urlLang === "en") return urlLang;
    const saved = localStorage.getItem("language");
    return saved === "ar" || saved === "en" ? saved : "ar";
  };

  const [language, setLanguageState] = useState<Language>(getLangFromUrl);

  // Sync language from URL when params change
  useEffect(() => {
    const urlLang = params.lang;
    if (urlLang === "ar" || urlLang === "en") {
      if (urlLang !== language) {
        setLanguageState(urlLang);
        localStorage.setItem("language", urlLang);
      }
    }
  }, [params.lang, language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang: Language = language === "ar" ? "en" : "ar";
    setLanguageState(newLang);
    localStorage.setItem("language", newLang);

    // split pathname (remove empty)
    const parts = location.pathname.split("/").filter(Boolean);

    // parts example: ["ar", "صيانة-فرن-البا"] or ["en", "oven"]
    const currentLang = parts[0];
    const currentSlug = parts[1] || "";

    // If URL doesn't start with ar/en, fallback to /newLang
    if (currentLang !== "ar" && currentLang !== "en") {
      navigate(`/${newLang}`, { replace: true });
      return;
    }

    // Map slug between languages
    let mappedSlug = currentSlug;

    if (language === "ar") {
      // going to EN
      mappedSlug = ROUTE_MAP_AR_TO_EN[currentSlug] || currentSlug;
    } else {
      // going to AR
      mappedSlug = ROUTE_MAP_EN_TO_AR[currentSlug] || currentSlug;
    }

    // Keep remaining segments (like /blog/:slug)
    // Example: /ar/blog/something -> /en/blog/something (no mapping)
    const rest = parts.slice(2).join("/");
    const restPath = rest ? `/${rest}` : "";

    const newPath = `/${newLang}/${mappedSlug}${restPath}`;
    navigate(newPath, { replace: true });
  }, [language, location.pathname, navigate]);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language],
  );

  const localePath = useCallback(
    (path: string): string => {
      const cleanPath = path.startsWith("/") ? path : `/${path}`;
      return `/${language}${cleanPath}`;
    },
    [language],
  );

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t, isRTL, localePath }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Outer provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <LanguageProviderInner>{children}</LanguageProviderInner>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
