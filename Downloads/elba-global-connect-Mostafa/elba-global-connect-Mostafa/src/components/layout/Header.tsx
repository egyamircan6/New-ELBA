import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Globe, ChevronDown, MessageCircle } from "lucide-react";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Route pairs: AR <-> EN
 * لازم مسارات EN هنا تطابق اللي عندك في App.tsx
 */
const routePairs = [
  // ✅ Home (بدون trailing slash)
  { ar: "/:lang", en: "/:lang" },

  // Devices list
  { ar: "/:lang/صيانة-اجهزة-البا", en: "/:lang/device" },

  // Hood
  { ar: "/:lang/صيانة-شفاط-البا", en: "/:lang/hood" },
  { ar: "/:lang/صيانة-شفاط-البا-بلت-ان", en: "/:lang/hood-builtin" },

  // Cooker
  { ar: "/:lang/صيانة-بوتاجاز-البا", en: "/:lang/cooker" },
  { ar: "/:lang/صيانة-بوتاجاز-البا-بلت-ان", en: "/:lang/cooker-builtin" },

  // Oven
  { ar: "/:lang/صيانة-فرن-البا", en: "/:lang/oven" },
  // ✅ FIX typo: oven-builtin (مش buitlin)
  { ar: "/:lang/صيانة-فرن-البا-بلت-ان", en: "/:lang/oven-builtin" },

  // Dishwasher
  { ar: "/:lang/صيانة-غسالة-اطباق-البا", en: "/:lang/dishwasher" },
  { ar: "/:lang/صيانة-غسالة-اطباق-البا-بلت-ان", en: "/:lang/dishwasher-builtin" },

  // Blog + Contact
  { ar: "/:lang/blog", en: "/:lang/blog" },
  { ar: "/:lang/contact", en: "/:lang/contact" },
] as const;

type Lang = "ar" | "en";

/** ✅ Normalize paths (decode arabic + remove trailing slashes) */
const normalizePath = (path: string) => {
  const decoded = decodeURIComponent(path);
  const cleaned = decoded.replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
};

/** Replace ":lang" placeholder with current lang */
const withLang = (path: string, lang: Lang) => path.replace("/:lang", `/${lang}`);

/**
 * Find equivalent path between AR and EN,
 * preserving target lang prefix in the final output.
 */
const getEquivalentPath = (pathname: string, targetLang: Lang) => {
  const normalized = normalizePath(pathname);

  // detect current lang from url
  const parts = normalized.split("/");
  const currentLang: Lang = parts[1] === "en" ? "en" : "ar";

  // remove current lang prefix to compare with pair templates
  const withoutLang = normalizePath(normalized.replace(`/${currentLang}`, "") || "/");

  const pair = routePairs.find((p) => {
    const arNoLang = normalizePath(p.ar.replace("/:lang", "") || "/");
    const enNoLang = normalizePath(p.en.replace("/:lang", "") || "/");
    return arNoLang === withoutLang || enNoLang === withoutLang;
  });

  // ✅ fallback to target home
  if (!pair) return `/${targetLang}`;

  // build target using template
  const template = targetLang === "en" ? pair.en : pair.ar;
  const target = withLang(template, targetLang);

  return normalizePath(target);
};

const Header: React.FC = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop dropdown
  const [devicesOpen, setDevicesOpen] = useState(false);
  const devicesRef = useRef<HTMLDivElement | null>(null);

  // Mobile accordion
  const [mobileDevicesOpen, setMobileDevicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /**
   * ✅ Sync language with URL (/ar/... or /en/...)
   */
  useEffect(() => {
    const path = normalizePath(location.pathname);
    const parts = path.split("/");
    const urlLang: Lang = parts[1] === "en" ? "en" : "ar";
    if (urlLang !== language) setLanguage(urlLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setMobileDevicesOpen(false);
    setDevicesOpen(false);
  };

  /**
   * ✅ Toggle language + go to equivalent page
   */
  const toggleLanguage = () => {
    const nextLang: Lang = language === "ar" ? "en" : "ar";
    const target = getEquivalentPath(location.pathname, nextLang);

    setLanguage(nextLang);
    closeMenus();
    navigate(target);
  };

  /**
   * ✅ Build link according to current language
   * (تكتب AR path بس وهو يطلع EN تلقائي)
   */
  const hrefByLang = (arPathWithLangPrefix: string) => {
    // arPathWithLangPrefix المفروض يكون بالشكل: "/:lang/...."
    const template = arPathWithLangPrefix.startsWith("/:lang")
      ? arPathWithLangPrefix
      : arPathWithLangPrefix.replace(`/${language}`, "/:lang");

    const current = withLang(template, language);
    return getEquivalentPath(current, language);
  };

  const isActive = (templateArPath: string) => {
    const current = normalizePath(location.pathname);
    const target = normalizePath(hrefByLang(templateArPath));
    return current === target;
  };

  const deviceLinks = useMemo(
    () => [
      {
        key: "dishwasher",
        label: language === "ar" ? "غسالة أطباق" : "Dishwasher",
        arHref: "/:lang/صيانة-غسالة-اطباق-البا",
      },
      {
        key: "dishwasherBuiltin",
        label: language === "ar" ? "غسالة أطباق بلت إن" : "Built-in Dishwasher",
        arHref: "/:lang/صيانة-غسالة-اطباق-البا-بلت-ان",
      },
      { key: "cooker", label: language === "ar" ? "بوتاجاز" : "Cooker", arHref: "/:lang/صيانة-بوتاجاز-البا" },
      {
        key: "cookerBuiltin",
        label: language === "ar" ? "بوتاجاز بلت إن" : "Built-in Cooker",
        arHref: "/:lang/صيانة-بوتاجاز-البا-بلت-ان",
      },
      { key: "oven", label: language === "ar" ? "فرن" : "Oven", arHref: "/:lang/صيانة-فرن-البا" },
      {
        key: "ovenBuiltin",
        label: language === "ar" ? "فرن بلت إن" : "Built-in Oven",
        arHref: "/:lang/صيانة-فرن-البا-بلت-ان",
      },
      { key: "hood", label: language === "ar" ? "شفاط" : "Hood", arHref: "/:lang/صيانة-شفاط-البا" },
      {
        key: "hoodBuiltin",
        label: language === "ar" ? "شفاط بلت إن" : "Built-in Hood",
        arHref: "/:lang/صيانة-شفاط-البا-بلت-ان",
      },
    ],
    [language]
  );

  // Close dropdown on outside click / ESC
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!devicesRef.current) return;
      if (!devicesRef.current.contains(e.target as Node)) setDevicesOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDevicesOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const whatsappNumber = "201211114528"; // ✅ wa.me يحتاج كود الدولة بدون +
  const phoneNumber = "+201211114528";

  const homePath = `/${language}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={homePath} className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">E</span>
            </div>
            <span className={cn("font-bold text-lg md:text-xl text-foreground", isRTL ? "font-cairo" : "font-sans")}>
              {language === "ar" ? "صيانة إلبا" : "Elba Service"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6">
              <Link
                to={homePath}
                className={`text-sm font-medium transition-colors duration-300 ${
                  normalizePath(location.pathname) === normalizePath(homePath)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("nav.home")}
              </Link>

              <Link
                to={hrefByLang("/:lang/صيانة-اجهزة-البا")}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/:lang/صيانة-اجهزة-البا") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("nav.devices")}
              </Link>

              <Link
                to={hrefByLang("/:lang/blog")}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/:lang/blog") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("nav.blog")}
              </Link>

              <Link
                to={hrefByLang("/:lang/contact")}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/:lang/contact") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* Devices Dropdown */}
            <div className="relative" ref={devicesRef}>
              <button
                type="button"
                onClick={() => setDevicesOpen((v) => !v)}
                onMouseEnter={() => setDevicesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                  devicesOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-haspopup="menu"
                aria-expanded={devicesOpen}
              >
                {t("nav.devices")}
                <ChevronDown className={`h-4 w-4 transition-transform ${devicesOpen ? "rotate-180" : ""}`} />
              </button>

              {devicesOpen && (
                <div
                  onMouseLeave={() => setDevicesOpen(false)}
                  className={`absolute mt-3 min-w-64 rounded-xl border border-border bg-background/95 backdrop-blur shadow-lg p-2 ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                  role="menu"
                >
                  <div className="px-3 py-2 text-xs text-muted-foreground">
                    {language === "ar" ? "صيانة" : "Maintenance"}
                  </div>
                  <div className="h-px bg-border my-1" />

                  {deviceLinks.map((item) => {
                    const to = hrefByLang(item.arHref);
                    return (
                      <Link
                        key={item.key}
                        to={to}
                        onClick={() => setDevicesOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          normalizePath(location.pathname) === normalizePath(to)
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-muted"
                        }`}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </Button>

            {/* WhatsApp */}
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hidden md:flex">
              <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">{t("contact.whatsapp")}</span>
              </Button>
            </a>

            {/* Call */}
            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">{phoneNumber}</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link to={homePath} onClick={closeMenus} className="py-2 font-medium text-muted-foreground hover:text-foreground">
                {t("nav.home")}
              </Link>

              <Link
                to={hrefByLang("/:lang/صيانة-اجهزة-البا")}
                onClick={closeMenus}
                className="py-2 font-medium text-muted-foreground hover:text-foreground"
              >
                {t("nav.devices")}
              </Link>

              <button
                type="button"
                onClick={() => setMobileDevicesOpen((v) => !v)}
                className="flex items-center justify-between py-2 font-medium text-muted-foreground hover:text-foreground"
                aria-expanded={mobileDevicesOpen}
              >
                <span>{language === "ar" ? "الأجهزة" : "Devices"}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileDevicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileDevicesOpen && (
                <div className="ps-3 flex flex-col gap-2">
                  <div className="text-xs text-muted-foreground py-1">{language === "ar" ? "صيانة" : "Maintenance"}</div>
                  {deviceLinks.map((item) => {
                    const to = hrefByLang(item.arHref);
                    return (
                      <Link key={item.key} to={to} onClick={closeMenus} className="py-2 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}

              <Link to={hrefByLang("/:lang/blog")} onClick={closeMenus} className="py-2 font-medium text-muted-foreground hover:text-foreground">
                {t("nav.blog")}
              </Link>

              <Link
                to={hrefByLang("/:lang/contact")}
                onClick={closeMenus}
                className="py-2 font-medium text-muted-foreground hover:text-foreground"
              >
                {t("nav.contact")}
              </Link>

              <div className="flex gap-2 mt-2">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
                <a href={`tel:${phoneNumber}`} className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    {t("hero.cta.call")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;