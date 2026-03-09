import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const deviceCategories = [
  {
    slug: "/en/dishwasher",
    category: "washer",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop",
    name: "Elba Dishwasher",
    model: "All Models",
  },
  {
    slug: "/en/dishwasher-builtin",
    category: "washer",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop",
    name: "Elba Built-in Dishwasher",
    model: "All Models",
  },
  {
    slug: "/en/cooker",
    category: "cooker",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    name: "Elba Cooker",
    model: "All Models",
  },
  {
    slug: "/en/cooker-builtin",
    category: "cooker",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    name: "Elba Built-in Cooker",
    model: "All Models",
  },
  {
    slug: "/en/oven",
    category: "oven",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    name: "Elba Oven",
    model: "All Models",
  },
  {
    slug: "/en/oven-builtin",
    category: "oven",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    name: "Elba Built-in Oven",
    model: "All Models",
  },
  {
    slug: "/en/hood",
    category: "hood",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop",
    name: "Elba Hood",
    model: "All Models",
  },
  {
    slug: "/en/hood-builtin",
    category: "hood",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop",
    name: "Elba Built-in Hood",
    model: "All Models",
  },
];

const sliderImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
  "https://images.unsplash.com/photo-1585515320310-259814833e62?w=1920&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1920&h=600&fit=crop",
];

const DevicesEn = () => {
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
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );

  const filteredDevices =
    filter === "all"
      ? deviceCategories
      : deviceCategories.filter((d) => d.category === filter);

  const categories = [
    { value: "all", label: "All Devices" },
    { value: "cooker", label: "Cookers" },
    { value: "oven", label: "Ovens" },
    { value: "hood", label: "Hoods" },
    { value: "washer", label: "Dishwashers" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Elba Devices - Elba Maintenance"
        description="Browse all Elba devices - Cookers, Ovens, Hoods, and Dishwashers. Request specialized maintenance service."
      />

      {/* Hero Slider */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
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

        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Elba Appliances
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Explore all Elba appliances and request professional maintenance service.
            </p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* Devices Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {categories.find((c) => c.value === filter)?.label}
            </h2>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={cn(
                      filter === category.value &&
                        "bg-primary text-primary-foreground"
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
              <Link key={device.slug} to={device.slug}>
                <Card
                  className="group overflow-hidden hover-lift border-none shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {device.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {device.model}
                    </p>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Request Service
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
      />
    </Layout>
  );
};

export default DevicesEn;
