import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import dishwasherImg from "@/assest/elba-dishwasher.jpeg";

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
const DOMAIN = "https://elba-eg.com";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type FaqItem = {
  q: string;
  aText: string; // schema
  aJSX: React.ReactNode; // UI
};

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const DishwasherBuiltinElbaEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Best Elba Built-in Dishwasher Service in Egypt | Call ${PHONE_DISPLAY}`;
  const metaDescription =
    `Having issues with your Elba dishwasher? We provide fast home service for Elba built-in dishwashers with a certified warranty and genuine Italian spare parts. Book now: ${PHONE_DISPLAY}.`;

  // ✅ Sections (each one has image + content)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "1. Why are we the leading experts for Elba built-in dishwasher service in Egypt?",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              With built-in appliances, experience is the key difference between
              successful repair and damage to your kitchen finish. At American
              Group, we specialize in Italian Elba technology and use advanced
              diagnostic methods to identify faults quickly and safely.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Call{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>{" "}
              to put your appliance in trusted hands.
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&h=900&fit=crop",
          alt: "Elba built-in dishwasher service",
          label: "Certified",
        },
      },
      {
        title: "2. Fast home service (no kitchen dismantling)",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              The biggest worry for built-in owners is scratching countertops or
              loosening cabinets. Our technicians use professional pull/slide
              tools designed for built-in units.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We remove and reinstall the dishwasher precisely without
              disturbing the kitchen setup. Call{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>{" "}
              for a fully equipped mobile workshop visit.
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "In-home built-in dishwasher repair",
          label: "In-Home",
        },
      },
      {
        title: "3. Genuine Italian spare parts with certified warranty",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Our golden rule: no substitutes for genuine parts. We install 100%
              genuine Italian parts for the drain pump, spray system, and
              control board.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We provide a certified warranty covering both parts and labor.
              Contact us on{" "}
              <a
                href={`https://wa.me/${WHATSAPP_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS}
              >
                WhatsApp
              </a>{" "}
              or call{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Genuine spare parts and warranty",
          label: "Genuine Parts",
        },
      },
      {
        title: "4. Service for 10 & 14 place settings — all Elba models",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Whether your unit is 10 or 14 place settings, we run full
              diagnostics: heating circuit, water-level sensors, and drying
              performance to restore factory efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Don’t wait—call{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>{" "}
              to book.
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
          alt: "Dishwasher diagnostics and calibration",
          label: "Diagnostics",
        },
      },
    ],
    []
  );

  // ✅ FAQ with links (UI) + plain text (schema)
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "What is the certified service number for Elba built-in dishwashers?",
        aText: `The certified service number is ${PHONE_DISPLAY}. American Group provides instant fault reports and specialized built-in support, sending an expert technician to repair your unit at home without moving it.`,
        aJSX: (
          <>
            The certified service number is{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . American Group provides instant fault reports and specialized
            built-in support, sending an expert technician to repair your unit
            at home without moving it.
          </>
        ),
      },
      {
        q: "How can I contact the authorized Elba dishwasher service center?",
        aText: `You can contact the authorized service center in Egypt by calling the unified number ${PHONE_DISPLAY} or sending a WhatsApp message to book a home visit.`,
        aJSX: (
          <>
            You can contact the authorized service center in Egypt by calling{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            or sending a{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              WhatsApp
            </a>{" "}
            message to book a home visit.
          </>
        ),
      },
      {
        q: "What is the customer service number to report a dishwasher fault?",
        aText: `Customer service number is ${PHONE_DISPLAY}. You can also message us on WhatsApp to report issues and schedule a fast home visit.`,
        aJSX: (
          <>
            Customer service number is{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . You can also message us on{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              WhatsApp
            </a>{" "}
            to report issues and schedule a fast home visit.
          </>
        ),
      },
      {
        q: "Do you provide genuine spare parts?",
        aText:
          "Yes. We provide genuine spare parts including the motor, drain pump, heater, and control board—each covered by a certified warranty.",
        aJSX: (
          <>
            Yes. We provide <strong>genuine spare parts</strong> including the
            motor, drain pump, heater, and control board—each covered by a
            certified warranty. To book, call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </>
        ),
      },
      {
        q: "What should I do if my Elba dishwasher won’t fill with water?",
        aText: `It could be a clogged filter or a faulty inlet valve. Call ${PHONE_DISPLAY} for a technician to inspect connections and restore operation.`,
        aJSX: (
          <>
            It could be a clogged filter or a faulty inlet valve. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for a technician to inspect connections and restore operation.
          </>
        ),
      },
      {
        q: "What if the dishwasher doesn’t drain water?",
        aText:
          "Most commonly this is caused by a clogged filter or a faulty drain pump. Contact us and we’ll fix it at your home.",
        aJSX: (
          <>
            Most commonly this is caused by a clogged filter or a faulty drain
            pump. Contact us and we’ll fix it at your home. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            or message{" "}
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
        q: "Why doesn’t the dishwasher heat water or dry dishes well?",
        aText:
          "This often indicates a heater or temperature sensor problem. Our technicians will inspect the electrical circuit and replace faulty parts with genuine ones.",
        aJSX: (
          <>
            This often indicates a heater or temperature sensor problem. Our
            technicians will inspect the electrical circuit and replace faulty
            parts with genuine ones. Book now via{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </>
        ),
      },
      {
        q: "What should I do if there is water leakage?",
        aText: `Disconnect power immediately and call ${PHONE_DISPLAY}. Leakage may be caused by worn seals or internal hose issues.`,
        aJSX: (
          <>
            Disconnect power immediately and call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . Leakage may be caused by worn seals or internal hose issues.
          </>
        ),
      },
      {
        q: "What does an error code on the screen mean?",
        aText:
          "Each error code (such as E1 or E4) points to a specific fault like overflow or weak water intake. Contact support to confirm the meaning and the proper fix.",
        aJSX: (
          <>
            Each error code (such as E1 or E4) points to a specific fault like
            overflow or weak water intake. Contact support via{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to confirm the meaning and the proper fix.
          </>
        ),
      },
    ],
    []
  );

  // ✅ JSON-LD (FAQ uses aText)
  const schemas = useMemo(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "American Group - Elba Dishwasher Service in Egypt",
      url: "https://elba-eg.com/",
      telephone: PHONE_TEL,
      areaServed: [{ "@type": "Country", name: "Egypt" }],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: [`https://wa.me/${WHATSAPP_WA}`],
      description: metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Elba Built-in Dishwasher Service",
      serviceType: "Dishwasher Repair Service",
      description:
        "Fast home service for Elba built-in dishwashers in Egypt with certified warranty and genuine Italian spare parts.",
      provider: {
        "@type": "LocalBusiness",
        name: "American Group",
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

    return [localBusiness, service, faqPage];
  }, [faqs, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      {/* ✅ JSON-LD Schemas */}
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
          src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&h=600&fit=crop"
          alt="Elba Built-in Dishwasher Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2">
                Home Service
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Elba Built-in Dishwasher Service in Egypt
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Fast home repair — no kitchen dismantling. Certified warranty and
                genuine Italian spare parts.
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
                Service number:{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Sections: Image + Content per section */}
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
                  {/* Content */}
                  <div
                    className={cn(
                      "lg:col-span-7",
                      reverse ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="max-w-none space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {s.title}
                      </h2>

                      <div className="space-y-3">{s.body}</div>

                      {/* CTA */}
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
                        Service number:{" "}
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
                            Elba Dishwasher (Built-in)
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
                          Service number:{" "}
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
            FAQs — Elba Dishwasher Service
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-left">
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

export default DishwasherBuiltinElbaEn;