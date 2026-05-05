import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { t, isRTL, localePath } = useLanguage();

  const whatsappNumber = "01211114528";
  const phoneNumber = "+201211114528";
  const email = "info@elba-maintenance.com";

  const quickLinks = [
    { path: localePath("/"), label: t("nav.home") },
    { path: localePath("/devices"), label: t("nav.devices") },
    { path: localePath("/blog"), label: t("nav.blog") },
    { path: localePath("/elba-hotline"), label: t("nav.contact") },
  ];

  const legalLinks = [
    { path: localePath("/privacy-policy"), label: t("nav.privacy") },
    { path: localePath("/copyright"), label: t("nav.copyright") },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to={localePath("/")} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className={cn("font-bold text-xl text-background", isRTL ? "font-cairo" : "font-sans")}>
                {isRTL ? "صيانة إلبا" : "Elba Service"}
              </span>
            </Link>
            <p className={cn("text-background/70 text-sm leading-relaxed", isRTL ? "font-cairo" : "font-sans")}>
              {isRTL
                ? "خدمات صيانة وإصلاح متخصصة لجميع أجهزة إلبا. فنيون معتمدون وقطع غيار أصلية."
                : "Professional maintenance and repair services for all Elba appliances. Certified technicians and original spare parts."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={cn("font-bold text-lg mb-4", isRTL ? "font-cairo" : "font-sans")}>
              {isRTL ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className={cn("font-bold text-lg mb-4", isRTL ? "font-cairo" : "font-sans")}>
              {isRTL ? "الشروط والسياسات" : "Legal"}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={cn("font-bold text-lg mb-4", isRTL ? "font-cairo" : "font-sans")}>{t("nav.contact")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span dir="ltr">{phoneNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-[#25D366] transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{t("contact.whatsapp")}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{t("contact.areasValue")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} {t("footer.brand")}. {t("footer.rights")}.
            </p>
            <p className="text-xs">{isRTL ? "كل الحقوق مملوكة لشركة الامريكية جروب " : "Made with ❤️ in Egypt"}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
