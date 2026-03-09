import { useMemo, useState } from "react";
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

const PAGE_URL = "https://alba-eg.com/en/elba-hood-maintenance";
const SITE_URL = "https://alba-eg.com/";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const device = {
  nameEn: "Elba Range Hood",
  heroImage:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=700&fit=crop",
  deviceImage: hoodImg,
  metaTitle: `Elba Hood Maintenance | In-Home Repair with Genuine Parts | Call ${PHONE_DISPLAY}`,
  metaDescription: `Looking for certified Elba hood maintenance? American Group provides fast in-home hood repair with genuine spare parts and a certified warranty. Call ${PHONE_DISPLAY} now.`,
  h1: "Best Authorized Elba Hood Maintenance Center in Egypt",
};

const HoodEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const faq = useMemo(
    () => [
      {
        q: "1) What is the authorized Elba hood maintenance number in Egypt?",
        aText: `Call ${PHONE_DISPLAY} to book fast in-home Elba hood service with genuine parts and certified warranty.`,
        aJSX: (
          <>
            Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to book fast in-home Elba hood service with genuine parts and
            certified warranty.{" "}
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
        q: "2) How can I get genuine Elba hood spare parts?",
        aText: `American Group provides genuine spare parts (motor, filters, capacitor). Call ${PHONE_DISPLAY} to order parts and book installation.`,
        aJSX: (
          <>
            American Group provides genuine spare parts (motor, filters,
            capacitor). Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to order parts and book installation. Visit{" "}
            <a
              href={BRAND_URL}
              target="_blank"
              rel="noreferrer"
              className={LINK_CLASS}
            >
              American Group
            </a>
            .
          </>
        ),
      },
      {
        q: "3) Do you cover Cairo and Giza?",
        aText: `Yes. We provide in-home service across Cairo and Giza. Call ${PHONE_DISPLAY} and we’ll dispatch the nearest technician.`,
        aJSX: (
          <>
            Yes. We provide in-home service across Cairo and Giza. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            and we’ll dispatch the nearest technician.
          </>
        ),
      },
      {
        q: "4) What should I do if the hood motor stops?",
        aText: `We inspect power, capacitor, wiring, then test the motor. Call ${PHONE_DISPLAY} for safe diagnosis and repair with genuine parts.`,
        aJSX: (
          <>
            We inspect power, capacitor, wiring, then test the motor. Call{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            for safe diagnosis and repair with genuine parts.
          </>
        ),
      },
      {
        q: "5) How can I book an urgent visit?",
        aText: `Call ${PHONE_DISPLAY} or message us on WhatsApp to schedule the fastest appointment.`,
        aJSX: (
          <>
            Call{" "}
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
            </a>{" "}
            to schedule the fastest appointment.
          </>
        ),
      },
    ],
    []
  );

  const tips = useMemo(
    () => [
      "Clean or replace grease filters regularly (based on your model).",
      "Run the hood for 3–5 minutes after cooking to clear residual odors.",
      "If the hood gets noisy or suction drops, check filters and duct path.",
      "Avoid harsh chemicals on the control panel to protect switches.",
    ],
    []
  );

  // ✅ 4 Sections (نفس المحتوى بدون تغيير)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Fast Elba hood maintenance at home with certified warranty",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              A faulty hood causes grease buildup and unpleasant odors. We
              provide certified Elba hood maintenance at home—no need to move
              the appliance. We diagnose suction weakness, motor issues,
              lighting faults, and switch/control problems with high accuracy.
              Every repair includes genuine parts and certified warranty for
              long-lasting performance. Call{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
              .
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://alba-eg.com/en/elba-egypt"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Elba Service Center
              </a>

              <a
                href="https://alba-eg.com/en/elba-appliances-service"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Elba Appliances Service
              </a>
            </div>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Elba hood maintenance at home",
          label: "Hood Repairs",
        },
      },
      {
        title: "Elba hood customer support: direct technical help",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Our support team helps you book the fastest appointment and
              answers technical questions. Whether the hood is noisy, suction is
              weak, or filters need replacement, we guide you to the right
              solution and dispatch a specialized technician based on your Elba
              model. Call{" "}
              <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
              .
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://alba-eg.com/en/elba-hotline"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Elba Hotline
              </a>
            </div>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "Customer support and booking",
          label: "Support",
        },
      },
      {
        title: "Elba hood maintenance number for Cairo and Giza",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            Call the unified service number{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            to request in-home hood maintenance across Cairo and Giza. We
            dispatch the nearest technician equipped with genuine parts to
            repair most faults in the same visit when possible.
          </p>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Technician visit Cairo and Giza",
          label: "Cairo & Giza",
        },
      },
      {
        title: "Expert Elba hood technician near you",
        body: (
          <p className="text-muted-foreground leading-relaxed">
            We provide trained Elba specialists for motor repair, capacitor
            replacement, carbon/grease filters replacement, lighting repair, and
            safe cleaning of ducts—so your hood returns to factory-level suction
            and stability. Message us on{" "}
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
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Expert hood technician",
          label: "Expert Tech",
        },
      },
    ],
    []
  );

  const schemas = useMemo(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${PAGE_URL}#localbusiness`,
      name: "Authorized Elba Hood Maintenance Center in Egypt",
      url: PAGE_URL,
      telephone: PHONE_TEL,
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
      sameAs: [`https://wa.me/${WHATSAPP_WA}`, BRAND_URL],
      description: device.metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Elba Hood Maintenance at Home",
      serviceType: "Elba Range Hood Repair",
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
        { "@type": "ServiceChannel", serviceUrl: `https://wa.me/${WHATSAPP_WA}` },
      ],
      description:
        "Elba hood maintenance includes suction issues, motor repair, capacitor replacement, filter replacement, lighting repair, and safe duct cleaning with genuine parts and certified warranty.",
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

    return [localBusiness, service, faqPage];
  }, [faq]);

  return (
    <Layout>
      <SEOHead title={device.metaTitle} description={device.metaDescription} />

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
                "font-sans"
              )}
            >
              {device.h1}
            </h1>

            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Book now — certified service with genuine parts and warranty.
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
                  className="border-white text-white hover:bg-white hover:text-foreground gap-2 text-lg px-8 w-full"
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

      {/* ✅ Content split into 4 sections (Text + Image Card) */}
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
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2 font-sans">
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-sans">
                FAQs — Elba Hood Maintenance
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
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline font-sans">
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

export default HoodEn;