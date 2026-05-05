import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

// Device categories that link to detail pages
const deviceCategories = [
  {
    slug: "صيانة-غسالة-اطباق-البا",
    category: "washer",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop",
    nameAr: "غسالات اطباق البا",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-غسالة-اطباق-البا-بلت-ان",
    category: "washer",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop",
    nameAr: "غسالات اطباق الباب بلت ان ",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-بوتاجاز-البا",
    category: "بوتاجاز",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    nameAr: "بوتاجاز إلبا",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-بوتاجاز-البا-بلت-ان",
    category: "بوتاجاز",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    nameAr: "بوتاجاز إلبا بلت ان",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-فرن-البا",
    category: "فرن",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    nameAr: "فرن إلبا المدمج",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-فرن-البا-بلت-ان",
    category: "شفاط",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop",
    nameAr: "فرن إلبا بلت ان",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-شفاط-البا",
    category: "شفاط",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop",
    nameAr: "شفاط إلبا",
    modelAr: "جميع الموديلات",
  },

  {
    slug: "صيانة-شفاط-البا-بلت-ان",
    category: "شفاط",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop",
    nameAr: "شفاط إلبا بلت ان",
    modelAr: "جميع الموديلات",
  },
];

const sliderImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
  "https://images.unsplash.com/photo-1585515320310-259814833e62?w=1920&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1920&h=600&fit=crop",
];

const Devices = () => {
  const { t, isRTL, language, localePath } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState("all");
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );

  const filteredDevices =
    filter === "all"
      ? deviceCategories
      : deviceCategories.filter((d) => d.category === filter);

  const categories = [
    { value: "all", label: t("devices.all") },
    { value: "cooker", label: t("devices.cookers") },
    { value: "oven", label: t("devices.ovens") },
    { value: "hood", label: t("devices.hoods") },
  ];

  return (
    <Layout>
      <SEOHead
        title={
          language === "ar"
            ? "أجهزة إلبا - صيانة إلبا"
            : "Elba Devices - Elba Maintenance"
        }
        description={
          language === "ar"
            ? "تصفح جميع أجهزة إلبا - البوتاجازات والأفران والشفاطات. اطلب خدمة صيانة متخصصة."
            : "Browse all Elba devices - Cookers, Ovens, and Hoods. Request specialized maintenance service."
        }
      />

      {/* Hero Slider */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up",
                isRTL ? "font-cairo" : "font-sans",
              )}
            >
              {t("devices.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
              {t("devices.subtitle")}
            </p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2
              className={cn(
                "text-2xl md:text-3xl font-bold text-foreground",
                isRTL ? "font-cairo" : "font-sans",
              )}
            >
              {categories.find((c) => c.value === filter)?.label}
            </h2>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  {isRTL ? "تصفية" : "Filter"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={isRTL ? "start" : "end"}
                className="bg-popover z-50"
              >
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={cn(
                      "cursor-pointer",
                      filter === category.value &&
                        "bg-primary text-primary-foreground",
                    )}
                  >
                    {category.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevices.map((device, index) => (
              <Link key={device.slug} to={localePath(`${device.slug}`)}>
                <Card
                  className="group overflow-hidden hover-lift border-none shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={device.image}
                      alt={device.nameAr}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3
                      className={cn(
                        "font-bold text-lg mb-1 text-foreground group-hover:text-primary transition-colors",
                        isRTL ? "font-cairo" : "font-sans",
                      )}
                    >
                      {device.nameAr}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {device.modelAr}
                    </p>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {t("devices.request")}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceRequestPopup
        isOpen={isServicePopupOpen}
        onClose={() => setIsServicePopupOpen(false)}
        domain="https://elba-eg.com"
      />
    </Layout>
  );
};

export default Devices;
