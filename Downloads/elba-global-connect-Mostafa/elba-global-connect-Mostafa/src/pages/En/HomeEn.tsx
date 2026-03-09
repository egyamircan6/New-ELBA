import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  Shield,
  Clock,
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Headphones,
  BadgeCheck,
  Truck,
  Timer,
} from "lucide-react";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

// Sample blog articles
const blogArticles = [
  {
    id: 1,
    slug: "cooker-maintenance-tips",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    titleEn: "Essential Cooker Maintenance Tips",
    excerptEn:
      "Learn how to keep your Elba cooker in perfect condition with these simple maintenance tips.",
  },
  {
    id: 2,
    slug: "oven-cleaning-guide",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop",
    titleEn: "Complete Oven Cleaning Guide",
    excerptEn:
      "A step-by-step guide to deep clean your oven and maintain its performance.",
  },
  {
    id: 3,
    slug: "hood-filter-replacement",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop",
    titleEn: "When to Replace Your Hood Filter",
    excerptEn:
      "Signs that indicate its time to replace your range hood filter for optimal performance.",
  },
];

const HomeEN = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  // IMPORTANT: wa.me must use country code (Egypt) without "+"
  const whatsappNumber = "201211114528";
  const phoneNumber = "+201211114528";

  const services = [
    {
      icon: Wrench,
      title: "Appliance Repair",
      desc: "Professional repair for all Elba appliances with accurate diagnosis.",
    },
    {
      icon: Settings,
      title: "Installation",
      desc: "Safe installation and setup for Elba ovens, cookers, hoods, and dishwashers.",
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      desc: "Regular maintenance to protect performance and extend appliance lifespan.",
    },
    {
      icon: Clock,
      title: "Emergency Service",
      desc: "Fast response for urgent issues and critical breakdowns.",
    },
  ];

  const features = [
    { icon: BadgeCheck, label: "Certified Technicians" },
    { icon: Truck, label: "Original Spare Parts" },
    { icon: Timer, label: "Fast Service" },
    { icon: Headphones, label: "24/7 Support" },
  ];

  const stats = [
    { icon: Star, value: "15+", label: "Years of Experience" },
    { icon: Users, value: "50+", label: "Expert Technicians" },
    { icon: Award, value: "100%", label: "Warranty Coverage" },
    { icon: CheckCircle, value: "100%", label: "Genuine Parts" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Elba Egypt Service Center | Certified Elba Egypt Home Maintenance</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Elba Egypt Maintenance: Certified repair services for Elba appliances with genuine spare parts & warranty. Fast response in Cairo & Giza. Call now for service!"
        />
        <link rel="canonical" href="https://elba-eg.com/en" />
      </Helmet>

      {/* If your SEOHead supports props, better to pass title/description here instead of empty */}
      <SEOHead />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-primary/90 to-foreground">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/40" />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Elba Egypt Service Center
            </h1>

            <p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Certified Home Maintenance with Genuine Spare Parts
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white gap-2 text-lg px-8 py-6 shadow-lg hover-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Request Service
              </Button>

              <a href={`tel:${phoneNumber}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green-500 hover:bg-white hover:text-foreground gap-2 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Maintenance Center <span className="text-primary">Elba</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span>🔥</span> 3+1
                </div>

                <div className="bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] rounded-xl p-6">
                  <div className="text-center mb-4">
                    <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">
                      Elba Appliance Service Center
                    </span>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                    alt="Elba Appliances"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Why Are We the Best Elba Egypt Service Center?
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                At Elba Maintenance, we pay attention to every detail to ensure you have a
                distinguished experience and maintenance service that returns your appliance
                to optimal performance. We provide 100% original spare parts with an official
                warranty that maintains the efficiency of your appliance and extends its lifespan.
                Our team consists of certified technicians trained on the latest technologies,
                capable of accurately diagnosing faults and implementing repairs quickly and professionally.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We also strive to provide fast and responsive customer service for all your inquiries,
                with continuous follow-up after maintenance to ensure your appliance is working at full
                efficiency without any problems.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  Request Service
                </Button>

                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Service Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white animate-fade-in-up order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Elba Maintenance Center Services in Egypt
              </h3>

              <p className="text-white/90 leading-relaxed mb-6">
                At Elba Maintenance, we pay attention to every detail to ensure you have a distinguished
                experience and maintenance service that returns your appliance to optimal performance.
              </p>

              <p className="text-white/90 leading-relaxed mb-8">
                We also strive to provide fast and responsive customer service for all your inquiries.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-foreground hover:bg-foreground/90 text-white gap-2"
                >
                  Request Service
                </Button>

                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -top-4 z-10 bg-accent text-white px-6 py-3 rounded-xl shadow-lg -left-4 md:left-8">
                  <span className="text-xl md:text-2xl font-bold">
                    24/7 Instant Maintenance Service
                  </span>
                </div>

                <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-2xl p-8 pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=600&fit=crop"
                    alt="Professional Technician"
                    className="w-full max-w-sm mx-auto h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Repair, maintenance, and support for all Elba home appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift border-none shadow-lg bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted Elba service with certified technicians and genuine spare parts.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-md hover-lift">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Latest Articles</h2>
              <p className="text-muted-foreground">Helpful tips to keep your Elba appliances performing well.</p>
            </div>

            <Link to="/en/blog">
              <Button variant="outline" className="gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Link key={article.id} to={`/en/blog/${article.slug}`}>
                <Card className="group overflow-hidden hover-lift border-none shadow-lg h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.titleEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{article.excerptEn}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Need Maintenance Service?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us now for fast and professional service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 text-lg px-8 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>

            <a href={`tel:${phoneNumber}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary gap-2 text-lg px-8 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">{phoneNumber}</span>
              </Button>
            </a>
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

export default HomeEN;