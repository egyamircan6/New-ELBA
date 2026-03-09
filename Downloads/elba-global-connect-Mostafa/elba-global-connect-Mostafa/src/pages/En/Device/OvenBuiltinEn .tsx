import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

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

import ovenImg from "@/assest/elba-oven.png.png";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";

const PAGE_URL = "https://alba-eg.com/en/elba-built-in-oven-maintenance";
const SITE_URL = "https://alba-eg.com/";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const OvenBuiltinEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Built-in Oven Maintenance | Home Repair with Genuine Spare Parts | Call ${PHONE_DISPLAY}`;
  const metaDescription = `Looking for certified elba built-in oven maintenance? American Group provides expert technicians with genuine spare parts and a full-year warranty. Call ${PHONE_DISPLAY} now for immediate home service.`;

  const h1 = "Welcome to the Authorized Elba Built-in Oven Maintenance Center";

  // ✅ Tips (same content)
  const tips = useMemo(
    () => [
      "Clean the oven interior regularly to prevent grease buildup.",
      "Avoid slamming the oven door to protect hinges and glass.",
      "If heating becomes weak, the thermostat or heater may need inspection.",
      "Do not block ventilation openings to keep the cooling fan stable.",
    ],
    []
  );

  // ✅ FAQ (same content) + aText/aJSX like Hood
  const faq = useMemo(
    () => [
      {
        q: "What is the authorized Elba built-in oven maintenance number in Egypt?",
        aText: `Call ${PHONE_DISPLAY} to contact American Group and book immediate in-home service for built-in Elba ovens with genuine parts and warranty.`,
        aJSX: (
          <>
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to contact American Group and book immediate in-home service for
            built-in Elba ovens with genuine parts and warranty.{" "}
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
        q: "How can I repair an Elba oven that is not heating?",
        aText: `Heating issues are usually caused by a faulty heater or thermostat. Call ${PHONE_DISPLAY} for inspection and same-visit replacement using genuine parts.`,
        aJSX: (
          <>
            Heating issues are usually caused by a faulty heater or thermostat.
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for inspection and same-visit replacement using genuine parts.
          </>
        ),
      },
      {
        q: "Where can I find genuine Elba oven spare parts?",
        aText: `Genuine Elba spare parts (hinges, heat-resistant glass, ignition parts) are available through American Group. Call ${PHONE_DISPLAY} to order parts or book installation.`,
        aJSX: (
          <>
            Genuine Elba spare parts (hinges, heat-resistant glass, ignition
            parts) are available through{" "}
            <a
              href={BRAND_URL}
              target="_blank"
              rel="noreferrer"
              className={LINK_CLASS}
            >
              American Group
            </a>
            . Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to order parts or book installation.
          </>
        ),
      },
      {
        q: "What causes the Elba gas oven flame to go out suddenly?",
        aText: `A faulty safety sensor or clogged burners are common reasons. Call ${PHONE_DISPLAY} to send a technician for safe cleaning and sensor replacement.`,
        aJSX: (
          <>
            A faulty safety sensor or clogged burners are common reasons. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to send a technician for safe cleaning and sensor replacement.
          </>
        ),
      },
      {
        q: "Do you provide a specialized technician for built-in ovens?",
        aText: `Yes. We provide specialists for built-in appliances to ensure safe removal and re-installation without damaging cabinets. Call ${PHONE_DISPLAY}.`,
        aJSX: (
          <>
            Yes. We provide specialists for built-in appliances to ensure safe
            removal and re-installation without damaging cabinets. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </>
        ),
      },
      {
        q: "How is broken Elba oven glass replaced?",
        aText: `We replace it with genuine heat-resistant glass in the correct size. Call ${PHONE_DISPLAY} for fast home installation.`,
        aJSX: (
          <>
            We replace it with genuine heat-resistant glass in the correct size.
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for fast home installation.
          </>
        ),
      },
      {
        q: "Why do error codes appear on the Elba digital oven display?",
        aText: `Error codes usually indicate a board or sensor issue. Call ${PHONE_DISPLAY} for diagnostics, reset, and repair.`,
        aJSX: (
          <>
            Error codes usually indicate a board or sensor issue. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for diagnostics, reset, and repair.
          </>
        ),
      },
      {
        q: "Do repairs include a warranty?",
        aText: "Yes. All repairs include a certified written warranty for parts and labor.",
        aJSX: (
          <>
            Yes. All repairs include a certified written warranty for parts and
            labor.
          </>
        ),
      },
      {
        q: "How can I protect Elba oven hinges from damage?",
        aText: `Avoid slamming the door and clean grease regularly. If the door doesn’t close smoothly, call ${PHONE_DISPLAY} to replace hinges with genuine parts.`,
        aJSX: (
          <>
            Avoid slamming the door and clean grease regularly. If the door
            doesn’t close smoothly, call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to replace hinges with genuine parts.
          </>
        ),
      },
      {
        q: "Is there an Elba built-in oven service near me?",
        aText: `We cover most areas through a mobile service fleet. Call ${PHONE_DISPLAY} and we’ll reach you at home without transporting the appliance.`,
        aJSX: (
          <>
            We cover most areas through a mobile service fleet. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            and we’ll reach you at home without transporting the appliance.
          </>
        ),
      },
    ],
    []
  );

  // ✅ Sections (same content) but as SectionItem[] like Hood (title + body + image)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Why choose us for Elba built-in oven maintenance?",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Elba is an Italian brand known for premium kitchen quality, but even
            top appliances need regular care. We provide trusted elba built-in
            oven maintenance in Egypt through specialized engineers trained to
            handle complex Italian technology, using genuine spare parts and fast
            response through American Group. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to book a safe in-home repair.
          </p>
        ),
        image: {
          src: ovenImg,
          alt: "Elba built-in oven maintenance",
          label: "Built-in Oven Repairs",
        },
      },
      {
        title: "Need a built-in Elba oven technician near you in Cairo?",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            If you live in Cairo and need speed and accuracy, we can dispatch a
            specialized technician the same day. We provide immediate home
            service without moving the appliance or damaging cabinets. Our team
            uses advanced digital inspection tools to detect sensor and
            thermostat faults accurately. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            or message us on{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              WhatsApp
            </a>
            .
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "Technician support and booking",
          label: "Support",
        },
      },
      {
        title: "Most common built-in Elba oven faults and how we fix them",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Many people ask: Why is the Elba oven not heating? Or what causes the
            flame to go out? The cause is often a faulty thermal sensor,
            thermostat, heater, ignition issue, or blocked burners. We
            recalibrate temperature, repair fan faults, fix hinges, and perform
            a complete safety circuit check to prevent gas leaks and keep your
            home safe. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            now.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Diagnostics and repair",
          label: "Diagnostics",
        },
      },
      {
        title: "Genuine spare parts with certified warranty",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Yes. We stock genuine spare parts imported for Elba ovens:
            heat-resistant oven glass, hinges, ignition parts, heaters,
            thermostats, and more. Every installed part comes with an official
            warranty certificate. If you need a part or installation at home,
            call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Genuine spare parts and warranty",
          label: "Genuine Parts",
        },
      },
    ],
    []
  );

  // ✅ JSON-LD (FAQ uses aText)
  const schemas = useMemo(() => {
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "American Group - Elba Service in Egypt",
      url: BRAND_URL,
      sameAs: [`https://wa.me/${WHATSAPP_WA}`],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          contactType: "customer service",
          areaServed: "EG",
          availableLanguage: ["en"],
        },
      ],
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: "Authorized Elba Built-in Oven Maintenance Center in Egypt",
      url: PAGE_URL,
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
      sameAs: [`https://wa.me/${WHATSAPP_WA}`, BRAND_URL],
      description: metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Elba Built-in Oven Maintenance in Egypt",
      serviceType: "Built-in Oven Repair Service",
      provider: { "@id": `${SITE_URL}#localbusiness` },
      areaServed: { "@type": "Country", name: "Egypt" },
      availableChannel: [
        {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: PHONE_TEL,
            contactType: "customer service",
          },
        },
        { "@type": "ServiceChannel", serviceUrl: `https://wa.me/${WHATSAPP_WA}` },
      ],
      description:
        "Elba built-in oven maintenance includes heating issues, thermostat faults, ignition problems, safety sensor repair, oven glass replacement, hinge replacement, fan troubleshooting, and error code diagnostics with genuine spare parts and certified warranty.",
    };

    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.aText },
      })),
    };

    return [organization, localBusiness, service, faqPage];
  }, [faq, metaDescription]);

  // ✅ Steps (same)
  const steps = useMemo(
    () => [
      {
        num: "01",
        title: "Request Service",
        desc: "Submit your request and choose the best time for the visit.",
      },
      {
        num: "02",
        title: "Technician Visit",
        desc: "A technician arrives with the required tools and spare parts.",
      },
      {
        num: "03",
        title: "Repair & Warranty",
        desc: "Your device is repaired and covered with service warranty.",
      },
    ],
    []
  );

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
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&h=600&fit=crop"
          alt="Elba built-in oven service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            <p className="text-sm md:text-base text-white/70 mb-2">
              In-Home Service
            </p>

            <h1
              className={cn(
                "text-3xl md:text-5xl lg:text-6xl font-bold mb-4",
                "font-sans"
              )}
            >
              {h1}
            </h1>

            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Fast home repair — genuine spare parts and certified warranty with
              advanced diagnostics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8"
              >
                Request Service
              </Button>

              <a
                href={`https://wa.me/${WHATSAPP_WA}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green-500 hover:bg-white hover:text-foreground gap-2 text-lg px-8 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>

              <a href={`tel:${PHONE_TEL}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-foreground gap-2 text-lg px-8 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </Button>
              </a>
            </div>

            <div className="mt-4 text-sm text-white/80">
              Service number:{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2
            className={cn(
              "text-2xl md:text-3xl font-bold text-center mb-12 text-foreground",
              "font-sans"
            )}
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-md hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {step.num}
                  </span>
                </div>
                <h3
                  className={cn(
                    "font-bold text-lg mb-2 text-foreground",
                    "font-sans"
                  )}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Content split into sections (same style as Hood) */}
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
                        Service number:{" "}
                        <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                          {PHONE_DISPLAY}
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
                    <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-sm text-muted-foreground">
                            Elba Built-in Oven
                          </p>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {s.image.label ?? "In-Home"}
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
                          <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                            {PHONE_DISPLAY}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground text-center">
                      <a
                        href={SITE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={LINK_CLASS}
                      >
                        {SITE_URL}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-foreground to-foreground/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-xl">
            <h2
              className={cn(
                "text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2",
                "font-sans"
              )}
            >
              💡 Maintenance Tips
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
              Need help? Request service now.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                Request Service
              </Button>

              <a
                href={`https://wa.me/${WHATSAPP_WA}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>

              <a href={`tel:${PHONE_TEL}`}>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call
                </Button>
              </a>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Service number:{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className={cn(
                  "text-2xl md:text-3xl font-bold text-foreground mb-2",
                  "font-sans"
                )}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((f, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border-none shadow-sm px-6"
                >
                  <AccordionTrigger
                    className={cn(
                      "text-foreground font-medium hover:no-underline",
                      "font-sans"
                    )}
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.aJSX}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center">
              <Link to="/en/device">
                <Button variant="outline">Back to Devices</Button>
              </Link>
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

export default OvenBuiltinEn;