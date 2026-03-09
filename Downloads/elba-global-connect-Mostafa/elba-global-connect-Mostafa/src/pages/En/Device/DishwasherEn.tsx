import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";
import dish from "@/assest/elba-dishwasher-ar.jpeg";

// =====================
// Constants
// =====================
const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA_ME = "201211114528";

// =====================
// Device data (EN)
// =====================
const devicesDetailData: Record<
  string,
  {
    nameEn: string;
    category: string;
    heroImage: string;
    deviceImage: string;
    descEn: string;
    tipsEn: string[];
  }
> = {
  Dishwasher: {
    nameEn: "Elba Dishwasher",
    category: "dishwasher",
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
    deviceImage: dish,
    descEn:
      "We provide complete repair and maintenance for all Elba dishwashers (Built-in & Free-standing). Our certified technicians diagnose issues precisely and fix water inlet problems, leaks, weak drying, and error codes using genuine spare parts with a certified warranty.",
    tipsEn: [
      "Clean the filters weekly to prevent pump blockage and weak water intake.",
      "Use dishwasher salt and rinse aid regularly to improve drying and reduce limescale buildup.",
      "Check the inlet hose and inlet valve periodically to avoid leaks or low water flow.",
      "Clean the spray arms from deposits for stronger water distribution and better cleaning.",
    ],
  },
};

// =====================
// SEO Meta (EN)
// =====================
const SEO_META_TITLE = "Best Elba Dishwasher Repair in Egypt | Book Now";
const SEO_META_DESCRIPTION =
  "Having issues with your Elba dishwasher? American Group provides fast in-home Elba dishwasher repair with certified warranty and genuine Italian spare parts. Book now: 01211114528.";

const SEO_H1 = "Elba Dishwasher Repair in Egypt | Fast In-Home Service";

// =====================
// JSON-LD (Service + FAQPage) (EN)
// =====================
const buildJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Elba Dishwasher Repair",
      serviceType: "Dishwasher Repair Service",
      description:
        "Best Elba dishwasher repair in Egypt. Fast in-home service with genuine spare parts and certified warranty for all Elba models.",
      provider: {
        "@type": "LocalBusiness",
        name: "American Group",
        telephone: PHONE_DISPLAY,
        areaServed: { "@type": "Country", name: "Egypt" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "210",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the official Elba dishwasher repair number in Egypt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official Elba dishwasher repair number is 01211114528. American Group provides specialized in-home service for all Italian models with genuine spare parts and certified warranty.",
          },
        },
        {
          "@type": "Question",
          name: "How to fix an Elba dishwasher that won’t fill with water?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This usually requires checking the inlet valve and the inlet hose connections. Call 01211114528 for a technician to inspect the pump, sensors, and restore operation quickly.",
          },
        },
        {
          "@type": "Question",
          name: "What does error code E4 mean on an Elba dishwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "E4 typically indicates a water leak or overflow in the base tray. A technician should locate the leak source and fix it—book a visit via 01211114528.",
          },
        },
        {
          "@type": "Question",
          name: "Can you repair a built-in Elba dishwasher without removing kitchen cabinets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We specialize in repairing built-in Elba dishwashers at home without damaging the kitchen unit or countertop. Call 01211114528.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Elba dishwasher not drying well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Weak drying is often caused by low rinse aid or an issue with the heater. Contact 01211114528 to check the electrical circuit and install genuine parts if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find genuine Elba dishwasher spare parts in Cairo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Genuine Elba dishwasher spare parts (pumps, spray arms, boards) are available at American Group. Call 01211114528 or message via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the warranty for Elba dishwasher repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide a certified warranty up to 12 months on repair work and replaced parts. For details call 01211114528.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Elba dishwasher noisy during operation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noise is commonly caused by worn motor bearings or clogged spray arms. Call 01211114528 for diagnosis and on-site repair.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a periodic maintenance appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call the unified service number 01211114528 to schedule preventive maintenance and avoid sudden breakdowns.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Elba dishwasher repair cost in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing starts with a technical inspection fee (deducted from the final repair cost). For an estimate call 01211114528.",
          },
        },
      ],
    },
  ],
});

// =====================
// FAQ Item (same UI)
// =====================
const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-lg font-bold text-foreground">{question}</span>
        <span
          className={`text-2xl font-bold text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-muted-foreground text-lg leading-relaxed space-y-3 text-left">
          {answer}
        </div>
      )}
    </div>
  );
};

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const DishwasherElbaEn = () => {
  const device = devicesDetailData["Dishwasher"];
  const { t, isRTL, localePath } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const jsonLd = useMemo(() => buildJsonLd(), []);

  const faqs = useMemo(
    () => [
      {
        q: "What is the official Elba dishwasher repair number in Egypt?",
        a: (
          <p>
            The official{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA_ME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              Elba Dishwasher Repair
            </a>{" "}
            number is <strong>{PHONE_DISPLAY}</strong>.{" "}
            <a
              href="https://americangroup-eg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              <strong>American Group</strong>
            </a>{" "}
            provides specialized in-home service for Italian dishwashers with
            genuine spare parts and certified warranty.
          </p>
        ),
      },
      {
        q: "How to fix an Elba dishwasher that won’t fill with water?",
        a: (
          <p>
            This usually requires checking the <strong>Inlet Valve</strong> and
            the inlet hose connections. Call <strong>{PHONE_DISPLAY}</strong> to
            have a technician inspect the pump and sensors and restore operation
            quickly.
          </p>
        ),
      },
      {
        q: "What does error code E4 mean on an Elba dishwasher?",
        a: (
          <p>
            <strong>E4</strong> typically indicates a{" "}
            <strong>water leak</strong> or overflow in the base tray. A
            technician should locate the leak source and fix it—book a visit via{" "}
            <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
      },
      {
        q: "Can you repair a built-in Elba dishwasher without removing kitchen cabinets?",
        a: (
          <p>
            Yes. We specialize in repairing <strong>Built-in</strong> Elba
            dishwashers at home without damaging the kitchen unit or countertop.
            Call <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
      },
      {
        q: "Why is my Elba dishwasher not drying well?",
        a: (
          <p>
            Weak drying is often caused by low <strong>rinse aid</strong> or an
            issue with the <strong>heater</strong>. Contact{" "}
            <strong>{PHONE_DISPLAY}</strong> to check the electrical circuit and
            install genuine parts if needed.
          </p>
        ),
      },
      {
        q: "Where can I find genuine Elba dishwasher spare parts in Cairo?",
        a: (
          <p>
            Genuine spare parts (pumps, spray arms, control boards) are
            available through <strong>American Group</strong>. Call{" "}
            <strong>{PHONE_DISPLAY}</strong> or message us via{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA_ME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              <strong>WhatsApp</strong>
            </a>
            .
          </p>
        ),
      },
      {
        q: "How long is the warranty for Elba dishwasher repair?",
        a: (
          <p>
            We provide a certified warranty up to <strong>12 months</strong> on
            repair work and replaced parts. For details call{" "}
            <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
      },
      {
        q: "Why is my Elba dishwasher noisy during operation?",
        a: (
          <p>
            Noise is commonly caused by worn <strong>motor bearings</strong> or
            clogged spray arms. Call <strong>{PHONE_DISPLAY}</strong> for
            diagnosis and on-site repair.
          </p>
        ),
      },
      {
        q: "How do I book a periodic maintenance appointment?",
        a: (
          <p>
            Call the unified service number <strong>{PHONE_DISPLAY}</strong> to
            schedule preventive maintenance and avoid sudden breakdowns.
          </p>
        ),
      },
      {
        q: "How much does Elba dishwasher repair cost in 2026?",
        a: (
          <p>
            Pricing starts with a technical inspection fee (deducted from the
            final repair cost). For an estimate call{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA_ME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
      },
    ],
    []
  );

  if (!device) {
    return (
      <Layout>
        <SEOHead title="Device Not Found" />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Device Not Found</h1>
          <Link to={localePath("/device")}>
            <Button>Back to Devices</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const name = device.nameEn;
  const desc = device.descEn;
  const tips = device.tipsEn;

  const steps = [
    { num: "01", title: t("device.steps.1.title"), desc: t("device.steps.1.desc") },
    { num: "02", title: t("device.steps.2.title"), desc: t("device.steps.2.desc") },
    { num: "03", title: t("device.steps.3.title"), desc: t("device.steps.3.desc") },
  ];

  // ✅ NEW: Sections = image + content (Cooker-like)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: `${name} Repair & Maintenance in Egypt`,
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              {desc}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Book now via{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-primary underline font-semibold">
                {PHONE_DISPLAY}
              </a>{" "}
              or WhatsApp.
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: `${name} service and maintenance`,
          label: "Home Service",
        },
      },
      {
        title: "Common Dishwasher Problems We Fix",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              We repair water inlet faults, drainage problems, leakage, weak drying,
              heater faults, and error codes (E1 / E4) using professional diagnostics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For urgent issues, call{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-primary underline font-semibold">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Elba dishwasher common faults and repairs",
          label: "Diagnostics",
        },
      },
      {
        title: "Genuine Spare Parts + Certified Warranty",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              We use genuine Italian spare parts (pump, heater, inlet valve, control board)
              to ensure stable performance and safe operation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Warranty up to <strong>12 months</strong> depending on the part and fault.
              Message us on{" "}
              <a
                href={`https://wa.me/${WHATSAPP_WA_ME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-semibold"
              >
                WhatsApp
              </a>{" "}
              or call{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-primary underline font-semibold">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Genuine spare parts and warranty for Elba dishwasher",
          label: "Genuine Parts",
        },
      },
      {
        title: "Fast In-Home Visit Across Egypt",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              We schedule home visits in Cairo, Giza, Alexandria and more.
              The technician arrives with the right tools and parts to reduce repeat visits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Service number: <strong>{PHONE_DISPLAY}</strong>.
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Fast in-home Elba dishwasher repair across Egypt",
          label: "Fast Visit",
        },
      },
    ],
    [desc, device.deviceImage, name]
  );

  return (
    <Layout>
      <Helmet>
        <title>{SEO_META_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={SEO_META_DESCRIPTION} />
        <link rel="canonical" href="https://alba-eg.com/en/dishwasher" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <SEOHead title={SEO_META_TITLE} description={SEO_META_DESCRIPTION} />

      {/* Hero (Cooker-like) */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={device.heroImage} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2">In-Home Service</p>

              <h1
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight",
                  isRTL ? "font-cairo" : "font-sans"
                )}
              >
                {SEO_H1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Book {name} service now — professional in-home repair with genuine parts and certified warranty.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto"
                >
                  {t("hero.cta.request")}
                </Button>

                <a href={`https://wa.me/${WHATSAPP_WA_ME}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-white hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    {PHONE_DISPLAY}
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70">
                Service number: <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps (unchanged) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            {t("device.steps.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-md hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">{step.num}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ NEW: Sections (each = content + image card) */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            {name} Repair Service
          </h2>

          <div className="space-y-12">
            {sections.map((s, i) => {
              const reverse = i % 2 === 1;

              return (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
                >
                  {/* Content */}
                  <div
                    className={cn(
                      "lg:col-span-7",
                      reverse ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {s.title}
                      </h3>

                      <div className="space-y-3">{s.body}</div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button
                          size="lg"
                          onClick={() => setIsServicePopupOpen(true)}
                          className="gap-2 w-full sm:w-auto"
                        >
                          {t("hero.cta.request")}
                        </Button>

                        <a
                          href={`https://wa.me/${WHATSAPP_WA_ME}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button size="lg" variant="outline" className="gap-2 w-full">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                          </Button>
                        </a>

                        <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                          <Button size="lg" variant="outline" className="gap-2 w-full">
                            <Phone className="w-5 h-5" />
                            {PHONE_DISPLAY}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div
                    className={cn(
                      "lg:col-span-5",
                      reverse ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <div className="lg:sticky lg:top-24">
                      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                        <div className="p-4 md:p-5">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <p className="text-sm text-muted-foreground">{name}</p>
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                              {s.image.label ?? "Home Service"}
                            </span>
                          </div>

                          <img
                            src={s.image.src}
                            alt={s.image.alt}
                            className="w-full rounded-xl shadow-sm object-cover"
                          />

                          <div className="flex gap-1 mt-4 justify-center">
                            {[1, 2, 3, 4, 5].map((k) => (
                              <span key={k} className="text-yellow-500 text-xl">
                                ★
                              </span>
                            ))}
                          </div>

                          <p className="text-center text-sm text-muted-foreground mt-2">
                            https://www.elba-eg.com
                          </p>

                          <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <Button onClick={() => setIsServicePopupOpen(true)} className="w-full">
                              {t("hero.cta.request")}
                            </Button>

                            <a
                              href={`https://wa.me/${WHATSAPP_WA_ME}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full"
                            >
                              <Button variant="outline" className="w-full gap-2">
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                              </Button>
                            </a>
                          </div>

                          <div className="mt-4 text-sm text-muted-foreground">
                            Service number:{" "}
                            <span className="font-semibold text-foreground">{PHONE_DISPLAY}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-xs text-muted-foreground text-center">
                        https://www.elba-eg.com
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips (unchanged) */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-foreground to-foreground/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              💡 Tips for {name}
            </h2>

            <ul className="space-y-4 mb-8">
              {tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <p className="text-muted-foreground leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-6 font-medium">
              Need help now? Contact us for fast in-home service.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                {t("hero.cta.request")}
              </Button>

              <a href={`https://wa.me/${WHATSAPP_WA_ME}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (unchanged UI) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8 text-left">
              FAQs about Elba Dishwasher Repair (Issues & Fixes)
            </h2>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <FaqItem key={i} question={f.q} answer={f.a} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a href={`tel:${PHONE_TEL}`}>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </Button>
              </a>

              <a href={`https://wa.me/${WHATSAPP_WA_ME}`} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>

              <Button onClick={() => setIsServicePopupOpen(true)} className="w-full sm:w-auto">
                {t("hero.cta.request")}
              </Button>
            </div>
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

export default DishwasherElbaEn;