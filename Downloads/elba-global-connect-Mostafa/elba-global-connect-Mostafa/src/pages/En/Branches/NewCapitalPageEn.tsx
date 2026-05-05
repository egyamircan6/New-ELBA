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
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/صيانة-بوتاجاز-البا";
const BRAND_URL = "https://americangroup-eg.com/";

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

const NewCapitalPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance in Fifth Settlement | Authorized Service Center`;
  const metaDescription = `Official Elba maintenance in Fifth Settlement & New Cairo. Home repair for Elba hobs, ovens, and hoods with original Italian spare parts. Call 01211114528.`;
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "Elite Elba Maintenance in New Administrative Capital by American Group",
        body: (
          <>
            <p>
              <span>As the newest residential hub in Egypt, </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span>
                {" "}
                is designed to meet the highest standards of modern luxury
                living.{" "}
              </span>
              <a
                href="https://americangroup-eg.com/"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>American Group</strong>
              </a>
              <span> provides specialized technical support for all </span>
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
                luxury appliances across the R3, R5, and R7 districts. Our{" "}
              </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span>
                {" "}
                team uses advanced digital diagnostic tools to ensure your
                built-in ovens and hobs are perfectly maintained according to
                Italian standards. By contacting our{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>Elba hotline</strong>
              </a>
              <span>
                , you secure a rapid, high-tech response tailored for the smart
                homes of the New Capital.
              </span>
            </p>
            <p className="mt-5">
              <span>
                If your Elba appliance in the New Capital has any fault, call
                the{" "}
              </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span> number </span>
              <strong>01211114528</strong>
              <span> now or message us via </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>WhatsApp</strong>
              </a>
              <span>
                {" "}
                for a specialized home visit. Our center provides a
                comprehensive check-up, professional cleaning, and original{" "}
              </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span>
                {" "}
                services with 100% genuine parts and an official 12-month
                warranty.
              </span>
            </p>
          </>
        ),
        image: {
          src: cooker1,
          alt: "Elite Elba Maintenance in New Administrative Capital by American Group",
          label: "Elba Service Center",
        },
      },
      {
        title:
          "Innovative Elba Maintenance in New Administrative Capital for Smart Kitchens",
        body: (
          <>
            <p>
              <span>Choosing </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span>
                {" "}
                through American Group ensures that your high-end appliances
                receive the care they deserve. We specialize in the
                professional{" "}
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
                {" "}
                and built-in systems, using only genuine Italian components to
                replace any faulty timers, burners, or sensors. As a
                pioneer{" "}
              </span>
              <strong>Elba repair provider</strong>
              <span>
                {" "}
                in the new capital, we guarantee a fast, clean, and highly
                technical service right at your doorstep. Our{" "}
              </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span>
                {" "}
                branch is dedicated to providing excellence for the residents of
                the most prestigious smart neighborhoods.
              </span>
            </p>
            <p className="mt-5">
              <span>
                Ensure your kitchen is always ready for excellence&mdash;if you
                require urgent{" "}
              </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span> for your oven or hob, call </span>
              <strong>01211114528</strong>
              <span>
                {" "}
                today. We offer a same-day inspection and a formal 12-month
                warranty from American Group on all original Italian parts used
                during the{" "}
              </span>
              <strong>Elba Maintenance in New Administrative Capital</strong>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Genuine parts and warranty",
          label: "Warranty",
        },
      },
    ],
    [],
  );
  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "Who provides the best Elba Maintenance in New Administrative Capital for cookers?",
        a: (
          <p>
            <strong>American Group</strong>
            <span> is the leading specialist for </span>
            <strong>Elba Maintenance in New Administrative Capital</strong>
            <span>. We provide professional </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span>
              {" "}
              with on-site diagnostics and original Italian parts. Call{" "}
            </span>
            <strong>01211114528</strong>
            <span> to book your </span>
            <strong>Elba Maintenance in New Administrative Capital</strong>
            <span> now.</span>
          </p>
        ),
      },
      {
        q: "How do I schedule Elba Maintenance in New Administrative Capital for an oven?",
        a: (
          <p>
            <span>To schedule your </span>
            <strong>Elba Maintenance in New Administrative Capital</strong>
            <span> for any oven model, contact </span>
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
            <span> with a full certified warranty.</span>
          </p>
        ),
      },
      {
        q: "Is there Elba Maintenance in New Administrative Capital for kitchen hoods?",
        a: (
          <p>
            <span>Yes, we offer comprehensive </span>
            <strong>Elba Maintenance in New Administrative Capital</strong>
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
            <span> to restore motor efficiency and suction power today.</span>
          </p>
        ),
      },
      {
        q: "Where can I find Elba Maintenance in New Administrative Capital for dishwashers?",
        a: (
          <p>
            <span>For high-quality </span>
            <strong>Elba Maintenance in New Administrative Capital</strong>
            <span> regarding dishwashers, call </span>
            <strong>01211114528</strong>
            <span>. American Group provides on-site </span>
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
          name: "American Group - Elba Maintenance in New Administrative Capital",
          url: "https://alba-eg.com/en/elba-maintenance-in-new-administrative-capital",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New Administrative Capital",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "R3 District" },
            { "@type": "City", name: "R5 District" },
            { "@type": "City", name: "R7 District" },
            { "@type": "City", name: "Diplomatic District" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who provides the best Elba Maintenance in New Administrative Capital?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "American Group is the leading expert for Elba Maintenance in New Administrative Capital. Call 01211114528 for on-site repair with original Italian parts and a 12-month warranty.",
              },
            },
            {
              "@type": "Question",
              name: "How can I book Elba Maintenance in New Administrative Capital for an oven?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 to book Elba Maintenance in New Administrative Capital for ovens. Our mobile team performs all repairs at your home using certified Italian spare parts.",
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
                Elba Maintenance in New Administrative Capital | Official
                Italian Service
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 font-cairo ">
            Frequently Asked Questions - Professional Elba Maintenance in New
            Administrative Capital
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

export default NewCapitalPageEn;
