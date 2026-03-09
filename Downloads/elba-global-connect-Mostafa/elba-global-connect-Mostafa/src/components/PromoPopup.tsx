import { useState, useEffect } from "react";
import { X, Gift, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PromoPopup = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const whatsappNumber = "01211114528";

  useEffect(() => {
    const hasDismissed = localStorage.getItem("promoDismissed");
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = (dontShowAgain = false) => {
    setIsVisible(false);
    if (dontShowAgain) {
      localStorage.setItem("promoDismissed", "true");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div
        className={cn(
          "relative w-full max-w-md bg-gradient-to-br from-primary to-accent rounded-2xl p-6 md:p-8 text-white shadow-2xl animate-scale-in",
          isRTL ? "font-cairo" : "font-sans",
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => handleDismiss(false)}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-float">
            <Gift className="w-8 h-8" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold">{t("popup.promo.title")}</h2>

          <p className="text-white/90 text-lg">{t("popup.promo.desc")}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(isRTL ? "مرحباً، أريد الاستفادة من عرض الخصم 20%" : "Hello, I want to claim the 20% discount offer")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-white text-primary hover:bg-white/90 gap-2 font-bold">
                <MessageCircle className="w-5 h-5" />
                {t("popup.promo.cta")}
              </Button>
            </a>
          </div>

          <button
            onClick={() => handleDismiss(true)}
            className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-2"
          >
            {isRTL ? "لا تظهر هذا مرة أخرى" : "Don't show this again"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
