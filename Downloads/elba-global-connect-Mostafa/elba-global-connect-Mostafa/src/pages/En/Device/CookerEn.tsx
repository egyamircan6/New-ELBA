import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import cooker1 from "@/assest/elba-cooker.png.png";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";

const PAGE_URL = "https://alba-eg.com/elba-cooker-service";
const SITE_URL = "https://alba-eg.com/";
const BRAND_URL = "https://americangroup-eg.com/";
const DOMAIN = "https://elba-eg.com";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

type FaqItem = {
  q: string;
  aText: string; // ✅ schema text
  aJSX: React.ReactNode; // ✅ UI
};

const CookerEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Main Elba Cooker Service Center in Egypt | Call ${PHONE_DISPLAY}`;
  const metaDescription =
    `The main Elba cooker service center in Egypt provides certified home repairs for built-in cookers, 5-burner models, and Elba hobs. Call ${PHONE_DISPLAY} to book a fast home visit.`;

  // ✅ Sections (6 blocks) + image card
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Direct Elba Cooker Hotline — No Waiting",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            For a fast response, call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to book immediate home service in Egypt. Your request is registered
            during the same call, and we assign a specialized technician with
            modern diagnostic tools to identify the fault accurately from the
            first visit.
          </p>
        ),
        image: {
          src: cooker1,
          alt: "Elba cooker service at home",
          label: "Hotline",
        },
      },
      {
        title: "Genuine Parts + Written Warranty",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            We use genuine spare parts that match manufacturer specifications to
            ensure stable performance and longer lifespan. Before starting the
            repair, we clarify service details and cost for full transparency —
            plus a written warranty on parts and labor.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Genuine parts and warranty",
          label: "Warranty",
        },
      },
      {
        title: "Common Elba Cooker Faults & Fast Fixes",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Common issues include weak flame, ignition problems, gas leakage, or
            low oven performance. Our team uses precise detection tools to
            ensure safety and restore full efficiency quickly. For urgent help,
            call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Cooker repair and diagnostics",
          label: "Diagnostics",
        },
      },
      {
        title: "Built-in Elba Cooker Service — Maximum Safety",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Built-in Elba cookers require special expertise to avoid affecting
            cabinets or gas connections. We send built-in specialists prepared
            with the right tools and spare parts to finish the job in one visit
            whenever possible.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "Built-in cooker service",
          label: "Built-in",
        },
      },
      {
        title: "Elba 5-Burner Cooker Calibration & Heat Balance",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            5-burner models often need accurate regulator calibration and heat
            balance between burners. We fix clogged burners, ignition issues,
            and low flame using modern calibration tools — improving performance
            and reducing gas consumption.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
          alt: "5-burner cooker service",
          label: "5-Burner",
        },
      },
      {
        title: "Fast Customer Support Across Egypt",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            We quickly schedule home visits in Cairo, Giza, Alexandria, and more.
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            and we’ll register your request instantly and follow up until the
            repair is completed.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
          alt: "Customer support for Elba service",
          label: "Support",
        },
      },
    ],
    []
  );

  // ✅ FAQ with links (aText + aJSX)
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "How can I contact Elba cooker service to book an urgent repair?",
        aText: `Call ${PHONE_DISPLAY} to book a fast home service in Egypt, or message us on WhatsApp.`,
        aJSX: (
          <>
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to book a fast home service in Egypt, or message us on{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              WhatsApp
            </a>
            .
          </>
        ),
      },
      {
        q: "How do I book service through the Elba cooker agent number?",
        aText: `Contact ${PHONE_DISPLAY} and explain the issue (weak burner, oven problem, ignition failure). We assign a specialized technician to diagnose accurately and repair safely using genuine spare parts with a written warranty.`,
        aJSX: (
          <>
            Contact{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            and explain the issue (weak burner, oven problem, ignition failure).
            We assign a specialized technician to diagnose accurately and repair
            safely using genuine spare parts with a written warranty.
          </>
        ),
      },
      {
        q: "What is the Elba cooker customer service number for fast support?",
        aText: `Use ${PHONE_DISPLAY} as soon as you notice any issue such as gas leakage, low heat, or oven stopping. Customer service registers your request immediately and schedules a home visit with follow-up until completion.`,
        aJSX: (
          <>
            Use{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            as soon as you notice any issue such as gas leakage, low heat, or
            oven stopping. Customer service registers your request immediately
            and schedules a home visit with follow-up until completion.
          </>
        ),
      },
      {
        q: "What is the Elba cooker hotline in Cairo?",
        aText: `The Cairo hotline is ${PHONE_DISPLAY}. We send a trained technician with modern diagnostic tools to locate the fault and repair it safely at home without moving the appliance.`,
        aJSX: (
          <>
            The Cairo hotline is{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . We send a trained technician with modern diagnostic tools to
            locate the fault and repair it safely at home without moving the
            appliance.
          </>
        ),
      },
      {
        q: "How do I request Elba cooker service in Egypt based on my area?",
        aText: `Call ${PHONE_DISPLAY} and share your location (Cairo, Giza, Alexandria, etc.). We arrange the earliest possible home visit with warranty on replaced parts and service.`,
        aJSX: (
          <>
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            and share your location (Cairo, Giza, Alexandria, etc.). We arrange
            the earliest possible home visit with warranty on replaced parts and
            service.
          </>
        ),
      },
      {
        q: "When do I need Elba built-in cooker maintenance?",
        aText: `If you have ignition issues, weak flame, or electrical switch problems, call ${PHONE_DISPLAY}. A built-in specialist will handle removal/reinstallation safely without affecting cabinets or gas connections.`,
        aJSX: (
          <>
            If you have ignition issues, weak flame, or electrical switch
            problems, call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . A built-in specialist will handle removal/reinstallation safely
            without affecting cabinets or gas connections.
          </>
        ),
      },
      {
        q: "When is urgent service needed for an Elba 5-burner cooker?",
        aText: `If heat distribution is uneven, a burner is clogged, or the gas regulator is faulty, call ${PHONE_DISPLAY}. We send a technician experienced with 5-burner models to restore balance and performance.`,
        aJSX: (
          <>
            If heat distribution is uneven, a burner is clogged, or the gas
            regulator is faulty, call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . We send a technician experienced with 5-burner models to restore
            balance and performance.
          </>
        ),
      },
      {
        q: "How can I book Elba hob (cooktop) service at home?",
        aText: `Call ${PHONE_DISPLAY} and describe the fault (weak ignition, clogged burner, sensor issues). A specialist will inspect, clean internal parts, and calibrate performance for safe operation.`,
        aJSX: (
          <>
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            and describe the fault (weak ignition, clogged burner, sensor
            issues). A specialist will inspect, clean internal parts, and
            calibrate performance for safe operation.
          </>
        ),
      },
    ],
    []
  );

  // ✅ Schemas (FAQ uses aText)
  const schemas = useMemo(() => {
    const logo =
      "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png";

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Main Elba Cooker Service Center in Egypt",
      url: PAGE_URL,
      image: logo,
      logo,
      telephone: PHONE_TEL,
      areaServed: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "City", name: "Cairo" },
        { "@type": "City", name: "Giza" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          contactType: "customer service",
          areaServed: "EG",
          availableLanguage: ["en"],
        },
      ],
      sameAs: [`https://wa.me/${WHATSAPP_WA}`],
      description: metaDescription,
    };

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Main Elba Cooker Service Center in Egypt",
      url: SITE_URL,
      logo,
      telephone: PHONE_TEL,
      sameAs: [`https://wa.me/${WHATSAPP_WA}`, BRAND_URL],
    };

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ELBA EGYPT - Elba Service in Egypt",
      url: SITE_URL,
      inLanguage: "en",
    };

    const webpage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Elba Cooker Service in Egypt | Hotline ${PHONE_DISPLAY}`,
      url: PAGE_URL,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", url: SITE_URL },
      about: { "@type": "Thing", name: "Elba Cooker Service" },
      description: metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Elba Cooker Service in Egypt",
      serviceType: "Elba Cooker Repair & Maintenance",
      provider: {
        "@type": "LocalBusiness",
        name: "Main Elba Cooker Service Center in Egypt",
        telephone: PHONE_TEL,
      },
      areaServed: { "@type": "Country", name: "Egypt" },
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          contactType: "customer service",
        },
      },
      description:
        "Certified Elba cooker service in Egypt for built-in cookers, 5-burner models, and Elba hobs with 24/7 support.",
    };

    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.aText },
      })),
    };

    return [localBusiness, organization, website, webpage, service, faqPage];
  }, [faqs, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      {schemas.map((obj, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop"
          alt="Elba Cooker Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Welcome to the Authorized Elba Cooker Service Center in Egypt
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Certified home service, genuine spare parts, and written warranty
                — call <strong>{PHONE_DISPLAY}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto"
                >
                  Request Service
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_WA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
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
                    Call
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70">
                Hotline:{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content split into sections (Text + Image Card) */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {sections.map((s, i) => {
              const reverse = i % 2 === 1;

              return (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
                >
                  {/* Text */}
                  <div
                    className={cn(
                      "lg:col-span-7",
                      reverse ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="max-w-none space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {s.title}
                      </h2>

                      <div className="space-y-3">{s.body}</div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                          onClick={() => setIsServicePopupOpen(true)}
                          className="gap-2 w-full sm:w-auto"
                        >
                          Request Service
                        </Button>

                        <a
                          href={`https://wa.me/${WHATSAPP_WA}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button variant="outline" className="gap-2 w-full">
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                          </Button>
                        </a>

                        <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                          <Button variant="outline" className="gap-2 w-full">
                            <Phone className="w-4 h-4" />
                            Call
                          </Button>
                        </a>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Hotline:{" "}
                        <span className="font-semibold text-foreground">
                          {PHONE_DISPLAY}
                        </span>
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
                    <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-sm text-muted-foreground">
                            Elba Cooker
                          </p>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {s.image.label ?? "Home Service"}
                          </span>
                        </div>

                        <img
                          src={s.image.src}
                          alt={s.image.alt}
                          className="w-full rounded-xl shadow-sm object-cover"
                        />

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Button
                            onClick={() => setIsServicePopupOpen(true)}
                            className="w-full"
                          >
                            Request
                          </Button>

                          <a
                            href={`https://wa.me/${WHATSAPP_WA}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button variant="outline" className="w-full gap-2">
                              <MessageCircle className="w-4 h-4" />
                              WhatsApp
                            </Button>
                          </a>

                          <a href={`tel:${PHONE_TEL}`} className="w-full">
                            <Button variant="outline" className="w-full gap-2">
                              <Phone className="w-4 h-4" />
                              Call
                            </Button>
                          </a>
                        </div>

                        <div className="mt-4 text-sm text-muted-foreground">
                          Hotline:{" "}
                          <span className="font-semibold text-foreground">
                            {PHONE_DISPLAY}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground text-center">
                      {DOMAIN}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.aJSX}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ServiceRequestPopup
        isOpen={isServicePopupOpen}
        onClose={() => setIsServicePopupOpen(false)}
        domain={DOMAIN}
      />
    </Layout>
  );
};

export default CookerEn;