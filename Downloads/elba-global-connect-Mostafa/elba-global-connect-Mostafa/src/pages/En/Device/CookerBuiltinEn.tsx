import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import cookerImg from "@/assest/elba-cookerbuiltin.jpeg"; // عدّل لو الاسم مختلف

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
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/elba-built-in-cooker-service"; // ✅ عدّل للـ URL الحقيقي عندك
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

type FaqItem = {
  q: string;
  a: React.ReactNode; // UI
  aText: string; // Schema text
};

const CookerBuiltinElbaEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Built-in Cooker Service in Egypt | In-Home Repair | Call ${PHONE_DISPLAY}`;
  const metaDescription = `Need Elba built-in cooker repair in Egypt? American Group provides fast in-home service with genuine spare parts and a certified warranty. Call now: ${PHONE_DISPLAY}.`;

  const introH1 = "Welcome to Elba Built-in Cooker Certified Service in Egypt";

  // ✅ Sections (Text + Image per section like Hood)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Why choose us for Elba built-in cooker service?",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Elba built-in cookers require expert handling to protect your kitchen
            finish and ensure safe gas operation. We provide certified in-home
            service, accurate diagnostics, and genuine spare parts. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        image: {
          src: cookerImg,
          alt: "Elba built-in cooker service",
          label: "Certified",
        },
      },
      {
        title: "Fast in-home repair — safe built-in handling",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Our technicians service built-in units without damaging cabinets or
            countertops. We inspect ignition, burners, oven performance, safety
            sensors, and wiring using professional tools. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "In-home repair service",
          label: "In-Home",
        },
      },
      {
        title: "Genuine spare parts + certified warranty",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            We install <strong>100% genuine imported spare parts</strong> that
            match Elba specifications (thermocouple, ignition parts, switches,
            burner jets, oven components). Every repair includes a certified
            warranty. WhatsApp us or call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Genuine spare parts and warranty",
          label: "Genuine Parts",
        },
      },
      {
        title: "Burner, ignition, oven shut-off & gas smell solutions",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            We fix weak flame, ignition failure, oven shutting off mid-use, and
            gas smell issues — with full safety checks and calibration. If you
            smell gas, turn off the supply, ventilate the area, and call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            urgently.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Cooker safety inspection",
          label: "Safety Check",
        },
      },
    ],
    []
  );

  // ✅ FAQ (UI JSX + aText للـ Schema)
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "What is the certified service number for Elba built-in cookers in Egypt?",
        a: (
          <p>
            The certified service number is{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . We book fast in-home visits for Elba built-in cookers and handle
            fault reports and genuine spare parts replacement.
          </p>
        ),
        aText: `The certified service number is ${PHONE_DISPLAY}. We book fast in-home visits for Elba built-in cookers and handle fault reports and genuine spare parts replacement.`,
      },
      {
        q: "Can you repair a built-in Elba cooker at home without damaging the kitchen?",
        a: (
          <p>
            Yes. Our technicians use safe built-in procedures and professional
            tools to service units without harming cabinets or countertops. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `Yes. Our technicians use safe built-in procedures and professional tools to service units without harming cabinets or countertops. Call ${PHONE_DISPLAY}.`,
      },
      {
        q: "Why is the burner flame weak and how do you fix it?",
        a: (
          <p>
            Weak flame is often caused by clogged jets, grease buildup, or gas
            regulator issues. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for safe cleaning and gas pressure calibration.
          </p>
        ),
        aText: `Weak flame is often caused by clogged jets, grease buildup, or gas regulator issues. Call ${PHONE_DISPLAY} for safe cleaning and gas pressure calibration.`,
      },
      {
        q: "What should I do if I smell gas near the cooker?",
        a: (
          <p>
            Turn off the gas supply immediately, ventilate the area, and avoid
            flames or electrical switches. Then call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for urgent inspection.
          </p>
        ),
        aText: `Turn off the gas supply immediately, ventilate the area, and avoid flames or electrical switches. Then call ${PHONE_DISPLAY} for urgent inspection.`,
      },
      {
        q: "Why does the oven shut off during operation?",
        a: (
          <p>
            This is commonly related to a safety sensor (thermocouple) issue or
            a blocked gas outlet. Book a visit via{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for proper diagnosis.
          </p>
        ),
        aText: `This is commonly related to a safety sensor (thermocouple) issue or a blocked gas outlet. Call ${PHONE_DISPLAY} for diagnosis.`,
      },
      {
        q: "Do you provide genuine spare parts?",
        a: (
          <p>
            Yes. We use genuine imported parts to match Elba specifications for
            safety and performance. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to book.
          </p>
        ),
        aText: `Yes. We use genuine imported parts to match Elba specifications for safety and performance. Call ${PHONE_DISPLAY} to book.`,
      },
      {
        q: "How long is the warranty for Elba built-in cooker repairs?",
        a: (
          <p>
            We provide a certified warranty on repair work and replaced parts
            (up to 12 months depending on the part and fault). Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `We provide a certified warranty on repair work and replaced parts (up to 12 months depending on the part and fault). Call ${PHONE_DISPLAY}.`,
      },
      {
        q: "What’s the difference between genuine and non-genuine spare parts?",
        a: (
          <p>
            Genuine parts ensure safe gas operation, stable performance, and
            longer lifespan. Non-genuine parts may cause electrical faults and
            safety risks. We use genuine parts only — call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `Genuine parts ensure safe gas operation, stable performance, and longer lifespan. Non-genuine parts may cause faults and safety risks. We use genuine parts only. Call ${PHONE_DISPLAY}.`,
      },
      {
        q: "How much does Elba built-in cooker repair cost in 2026?",
        a: (
          <p>
            Pricing starts with a technical inspection fee (often deducted from
            the final repair cost). For an estimate based on your model and
            issue, call{" "}
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
        aText: `Pricing starts with a technical inspection fee (often deducted from the final repair cost). For an estimate based on your model and issue, call ${PHONE_DISPLAY} or message on WhatsApp.`,
      },
    ],
    []
  );

  // ✅ JSON-LD @graph واحد
  const schemaGraph = useMemo(() => {
    const logo =
      "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png";

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "American Group - Elba Service in Egypt",
          url: BRAND_URL,
          logo: { "@type": "ImageObject", url: logo },
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
        },
        {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}#localbusiness`,
          name: "Certified Elba Built-in Cooker Service Center in Egypt",
          url: PAGE_URL,
          image: logo,
          telephone: PHONE_TEL,
          areaServed: [{ "@type": "Country", name: "Egypt" }],
          address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
          },
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
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          url: SITE_URL,
          name: "Elba Service in Egypt",
          inLanguage: "en",
          publisher: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: metaTitle,
          description: metaDescription,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_URL}#website` },
          publisher: { "@id": `${SITE_URL}#organization` },
          about: [
            { "@type": "Thing", name: "Elba built-in cooker service" },
            { "@type": "Thing", name: "Elba cooker repair" },
            { "@type": "Thing", name: "Genuine Elba spare parts" },
          ],
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "Elba Built-in Cooker Service in Egypt",
          serviceType: "Cooker Repair Service",
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
            "Fast in-home Elba built-in cooker service in Egypt with genuine spare parts and certified warranty. Covers weak flame, ignition faults, oven shut-off, gas smell inspection, and safety calibration.",
        },
        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.aText },
          })),
        },
      ],
    };
  }, [faqs, metaTitle, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ✅ Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=700&fit=crop"
          alt="Elba Built-in Cooker Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2">
                In-Home Service
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {introH1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Fast in-home repair — genuine spare parts and certified warranty
                for safe gas operation and stable performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className={cn(
                    "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                    "text-base md:text-lg px-7 md:px-8 w-full sm:w-auto"
                  )}
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
                    className={cn(
                      "border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2",
                      "text-base md:text-lg px-7 md:px-8 w-full"
                    )}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className={cn(
                      "border-white/80 text-white hover:bg-white hover:text-foreground gap-2",
                      "text-base md:text-lg px-7 md:px-8 w-full"
                    )}
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

      {/* ✅ Content split into sections (Text + Image Card) like Hood */}
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
                            Elba Cooker (Built-in)
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

      {/* ✅ FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            FAQs — Elba Built-in Cooker Service
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
                  {f.a}
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

export default CookerBuiltinElbaEn;