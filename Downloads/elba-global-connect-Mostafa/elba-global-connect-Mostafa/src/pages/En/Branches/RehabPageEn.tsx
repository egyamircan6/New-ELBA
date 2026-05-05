import React, { useMemo, useState } from "react";
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

import cooker1 from "@/assest/elba-cooker.png.png";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";
const DOMAIN = "https://elba-eg.com";

const LINK_CLASS =
  "text-primary hover:text-primary/80 font-bold hover:underline";
type FaqItemType = {
  q: string;
  a: React.ReactNode;
};
type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};
const RehabPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance in Rehab City | American Group Authorized Service`;
  const metaDescription = `Official Elba Maintenance in Rehab City. We provide expert home repair for Elba hobs and ovens with original parts. Call 01211114528 for a certified service today.`;
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Elite Elba Maintenance in Rehab City by American Group",
        body: (
          <>
            <p>
              <span>In the heart of New Cairo, </span>
              <strong>Elba Maintenance in Rehab City</strong>
              <span>
                {" "}
                provides the most reliable technical care for high-end Italian
                appliances.{" "}
              </span>
              <a
                href="https://americangroup-eg.com/"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>American Group</strong>
              </a>
              <span>
                {" "}
                has a localized team dedicated to Rehab City, ensuring a rapid
                response for all{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>Elba hotline</strong>
              </a>
              <span> requests. Our </span>
              <strong>Elba Maintenance in Rehab City</strong>
              <span>
                {" "}
                focuses on maintaining the durability of your built-in systems,
                using{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-egypt"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>Elba Egypt</strong>
              </a>
              <span>
                {" "}
                certified techniques to solve ignition or heating issues
                instantly. We serve all phases of Rehab City with professional
                mastery and original spare parts.
              </span>
            </p>
          </>
        ),
        image: {
          src: cooker1,
          alt: "Elite Elba Maintenance in Rehab City by American Group",
          label: "Elba Maintenance in Rehab City",
        },
      },
      {
        title:
          "Authorized Repair for Elba Built-in Cookers & Ovens in Rehab City",
        body: (
          <>
            <p>
              <span>When seeking </span>
              <strong>Elba Maintenance in Rehab City</strong>
              <span>
                , homeowners trust American Group for our attention to detail
                and authentic Italian components. We specialize in the
                intricate{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>Elba cooker maintenance</strong>
              </a>
              <span>
                , ensuring every unit functions like new without needing to
                transport the appliance. As a premier{" "}
              </span>
              <strong>Elba repair provider</strong>
              <span>
                , we bring all necessary diagnostic tools to your Rehab City
                residence to ensure a clean and professional service. Choosing
                our{" "}
              </span>
              <strong>Elba Maintenance in Rehab City</strong>
              <span>
                {" "}
                ensures that your kitchen remains safe, efficient, and ready for
                your daily needs.
              </span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Authorized Repair for Elba Built-in Cookers & Ovens in Rehab City",
          label: "Authorized Repair for Elba",
        },
      },
    ],
    [],
  );
  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "Who provides the most reliable Elba Maintenance in Rehab City for cookers?",
        a: (
          <p>
            <strong>American Group</strong>
            <span> is the leading specialist for </span>
            <strong>Elba Maintenance in Rehab City</strong>
            <span>. We offer professional </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span> with original Italian parts. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to fix gas flow or ignition issues at your Rehab City home today.
            </span>
          </p>
        ),
      },
      {
        q: "How can I book an Elba Maintenance in Rehab City for an oven?",
        a: (
          <p>
            <span>To schedule your </span>
            <strong>Elba Maintenance in Rehab City</strong>
            <span> for any oven model, simply contact </span>
            <strong>01211114528</strong>
            <span>. We provide expert </span>
            <a
              href="https://alba-eg.com/en/elba-oven-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba oven maintenance</strong>
            </a>
            <span> and </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-oven-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in oven repair</strong>
            </a>
            <span> with on-site service and a certified warranty.</span>
          </p>
        ),
      },
      {
        q: "Is there Elba Maintenance in Rehab City for kitchen hoods?",
        a: (
          <p>
            <span>Yes, we offer comprehensive </span>
            <strong>Elba Maintenance in Rehab City</strong>
            <span> for all hood types. Call </span>
            <strong>01211114528</strong>
            <span> or </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>WhatsApp us</strong>
            </a>
            <span> for </span>
            <a
              href="https://alba-eg.com/en/elba-hood-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba hood maintenance</strong>
            </a>
            <span>
              {" "}
              and built-in repair to restore motor efficiency immediately.
            </span>
          </p>
        ),
      },
      {
        q: "Where can I find Elba Maintenance in Rehab City for dishwashers?",
        a: (
          <p>
            <span>For high-quality </span>
            <strong>Elba Maintenance in Rehab City</strong>
            <span> regarding dishwashers, call </span>
            <strong>01211114528</strong>
            <span>. We provide on-site </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba dishwasher repair</strong>
            </a>
            <span> and </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in dishwasher repair</strong>
            </a>
            <span> with a 1-year guarantee.</span>
          </p>
        ),
      },
    ],
    [],
  );

  const schemaGraph = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: "American Group - Elba Maintenance in Rehab City",
          url: "https://alba-eg.com/en/elba-maintenance-in-rehab-city",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rehab City",
            addressRegion: "New Cairo",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "Rehab 1" },
            { "@type": "City", name: "Rehab 2" },
            { "@type": "City", name: "New Cairo" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who provides the most reliable Elba Maintenance in Rehab City?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "American Group is the leading expert for Elba Maintenance in Rehab City. Call 01211114528 for on-site repair with original Italian parts and a 12-month warranty.",
              },
            },
            {
              "@type": "Question",
              name: "How can I book an Elba Maintenance in Rehab City for an oven?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 to book Elba Maintenance in Rehab City for ovens. Our mobile team performs all repairs at your home in Rehab using certified Italian spare parts.",
              },
            },
            {
              "@type": "Question",
              name: "Is there Elba Maintenance in Rehab City for kitchen hoods?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide Elba Maintenance in Rehab City for hoods. Call 01211114528 or WhatsApp us to fix motor and suction issues today with original parts.",
              },
            },
          ],
        },
      ],
    };
  }, []);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop"
          alt="صيانة بوتاجاز البا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-cairo leading-tight lg:leading-[5rem]">
                Elba Maintenance in Rehab City | Specialized Italian Appliance
                Repair
              </h1>
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
                    className="border-white/80 text-primary hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    Call
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70 font-cairo">
                Hotline:{" "}
                <span className="font-semibold text-white">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections بدون متغير محتوى */}
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
                      reverse ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <div className="max-w-none space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 lg:mt-16">
                        {s.title}
                      </h2>

                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                          {s.body}
                        </p>
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
                      reverse ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-sm text-muted-foreground">
                            Rehab City
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 font-cairo ">
            Frequently Asked Questions - Professional Elba Maintenance in Rehab
            City
          </h2>

          <Accordion type="single" collapsible className="space-y-3 ">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-bold hover:no-underline font-cairo lg:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-cairo  lg:text-lg">
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

export default RehabPageEn;
