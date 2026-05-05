import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

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

import hoodImg from "@/assest/elba-hood-ar.jpeg";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";

const DOMAIN = "https://elba-eg.com";
const PAGE_URL = "https://alba-eg.com/en/elba-built-in-hood-maintenance";
const LOGO_URL =
  "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

type FaqUIItem = {
  q: string;
  aJSX: React.ReactNode; // UI JSX
  aText: string; // Schema text only
};

const cleanForSchema = (text: string) =>
  String(text).replace(/\s+/g, " ").trim();

const device = {
  nameEn: "Elba Built-in Hood",
  heroImage:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=700&fit=crop",
  deviceImage: hoodImg,

  metaTitle: `Built-in Hood Repair Near You | Elba Built-in Hood Maintenance | Call ${PHONE_DISPLAY}`,
  metaDescription: `Looking for a built-in hood technician? We provide Elba built-in hood maintenance at home, touch panel repair, and Italian motor replacement. Service across Cairo & Sheikh Zayed within 24 hours. Call ${PHONE_DISPLAY}.`,
  h1: "Elba Built-in Hood Maintenance Services in Egypt",

  tips: [
    "Clean or wash grease filters regularly based on usage.",
    "Run the hood for 3–5 minutes after cooking to clear residual odors.",
    "If suction drops or noise increases, request a motor/capacitor inspection early.",
    "Do not spray harsh chemicals directly onto the touch panel.",
  ],

  faq: [
    {
      q: "What is the official Elba built-in hood maintenance number?",
      aText: `Call ${PHONE_DISPLAY} for in-home service (90cm/60cm) with full motor and electrical inspection.`,
    },
    {
      q: "The hood runs but does not extract smoke — what should I do?",
      aText: `Usually clogged filters or grease buildup. We offer deep filter cleaning and airflow path detailing. If it continues, we test motor suction power—call ${PHONE_DISPLAY}.`,
    },
    {
      q: "Can you repair Elba built-in hood touch panel at home?",
      aText: `Yes. We repair digital control boards and touch panels using precise measuring tools to avoid unnecessary full board replacement. Book via ${PHONE_DISPLAY}.`,
    },
    {
      q: "Is 90cm maintenance different from 60cm?",
      aText:
        "Technically yes. 90cm often requires deeper checks for higher suction and larger ducts, while 60cm focuses on compact airflow and fan efficiency. We provide model-matched parts for each size.",
    },
    {
      q: "Do you provide genuine parts for old and new models?",
      aText: `Yes. Motors, filters, LED lamps, and control panels are available based on model. Call ${PHONE_DISPLAY} to request a part or technician.`,
    },
  ],
};

const HoodBuiltinElbaEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  // ✅ 4 Sections (each has content + image card)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "1) Specialized in 90cm and 60cm models",
        body: (
          <>
            Elba built-in hoods are integrated into the kitchen design, so
            maintenance requires precision. We service <strong>90cm</strong>{" "}
            models for higher suction and larger ducting, and{" "}
            <strong>60cm</strong> models that need careful electrical tuning in
            compact spaces. We inspect the motor, fan, filters, and airflow path
            to restore factory-level performance. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </>
        ),
        image: {
          src: hoodImg,
          alt: "Elba built-in hood 90cm and 60cm service",
          label: "90cm / 60cm",
        },
      },
      {
        title: "2) A technician near you — careful handling of your kitchen",
        body: (
          <>
            The biggest concern with built-in appliances is avoiding scratches
            or damage to cabinet finishing. Our technicians remove and reinstall
            built-in hoods safely in wooden/acrylic units. We cover Cairo & Giza
            areas including New Cairo, Maadi, Heliopolis, and Sheikh Zayed. Book
            now via{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "Technician handling built-in hood safely",
          label: "In-Home",
        },
      },
      {
        title: "3) Original Italian motor replacement with warranty",
        body: (
          <>
            If the hood stops working or becomes unusually noisy, it may require
            motor/capacitor intervention. We avoid temporary fixes and provide
            original Italian motor replacement matched to your model. After
            installation, we test suction power, noise level, and speed
            stability—then provide a certified warranty. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Italian motor replacement for Elba hood",
          label: "Genuine Motor",
        },
      },
      {
        title: "4) Deep internal cleaning & carbon filter replacement",
        body: (
          <>
            Carbon filters are a common cause of poor suction and cooking odors.
            We provide deep internal detailing—cleaning the motor housing and
            airflow channels using safe degreasing materials. If the filter has
            reached end-of-life, we replace it with original parts to reduce
            motor load and extend lifespan. WhatsApp us or call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            — or{" "}
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
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Deep cleaning and carbon filter replacement",
          label: "Deep Cleaning",
        },
      },
    ],
    [],
  );

  // ✅ FAQ UI (links blue) + Schema text
  const faqsUI: FaqUIItem[] = useMemo(() => {
    return device.faq.map((f) => ({
      q: f.q,
      aJSX: (
        <div className="space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            {f.aText} {/* ✅ always show phone as blue link */}
            <span>
              {" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
            </span>
          </p>
        </div>
      ),
      aText: cleanForSchema(f.aText),
    }));
  }, []);

  const schemas = useMemo(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${PAGE_URL}#localbusiness`,
      name: "Authorized Elba Built-in Hood Service Center in Egypt",
      url: PAGE_URL,
      image: LOGO_URL,
      telephone: PHONE_TEL,
      priceRange: "$$",
      areaServed: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "City", name: "Cairo" },
        { "@type": "City", name: "Giza" },
      ],
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
      description: device.metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Elba Built-in Hood Maintenance at Home",
      serviceType: "Elba Built-in Hood Repair",
      provider: { "@id": `${PAGE_URL}#localbusiness` },
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
        {
          "@type": "ServiceChannel",
          serviceUrl: `https://wa.me/${WHATSAPP_WA}`,
        },
      ],
      description:
        "Elba built-in hood service includes touch panel repair, motor replacement, deep internal detailing, and genuine parts installation with certified warranty.",
    };

    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqsUI.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.aText },
      })),
    };

    return [localBusiness, service, faqPage];
  }, [faqsUI]);

  return (
    <Layout>
      <SEOHead title={device.metaTitle} description={device.metaDescription} />

      {/* JSON-LD */}
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
          src={device.heroImage}
          alt={device.nameEn}
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
                "font-sans",
              )}
            >
              {device.h1}
            </h1>

            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Touch panel repair, Italian motor replacement, deep cleaning —
              delivered to your home.
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

              <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/80 text-black hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full font-cairo"
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

      {/* ✅ 4 Sections — each section has content + image card */}
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
                      reverse ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <div className="max-w-none space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {s.title}
                      </h2>
                      <div className="text-muted-foreground leading-relaxed">
                        {s.body}
                      </div>

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

                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="w-full sm:w-auto"
                        >
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
                      reverse ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-sm text-muted-foreground">
                            {device.nameEn}
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
                      {DOMAIN}
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
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2 font-sans">
              💡 Maintenance Tips
            </h2>

            <ul className="space-y-4 mb-8">
              {device.tips.map((tip, index) => (
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

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-sans">
                FAQs — Elba Built-in Hood Maintenance
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqsUI.map((f, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border-none shadow-sm px-6"
                >
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline font-sans">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed space-y-3">
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
        domain={DOMAIN}
      />
    </Layout>
  );
};

export default HoodBuiltinElbaEn;
