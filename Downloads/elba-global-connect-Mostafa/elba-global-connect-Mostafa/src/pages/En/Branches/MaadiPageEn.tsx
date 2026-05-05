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

const MaadiPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance Maadi | Authorized Italian Repair 01211114528`;
  const metaDescription =
    "Official Elba service in Maadi, Degla, and Sarayat. Fix your Elba appliances today with original Italian parts and home warranty. Call 01211114528.";

  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Reliable Elba Egypt Solutions for Maadi Residents",
        body: (
          <>
            <span>
              Maadi is known for its quiet streets and high standards of living,
              and your{" "}
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
              appliances deserve a maintenance service that reflects that.
              Whether you are located in the leafy suburbs of Maadi Sarayat, the
              modern buildings of Zahraa Maadi, or the vibrant Degla area, our
              team is ready to assist. By calling the{" "}
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
              , you secure a visit from a senior technician specialized in
              Italian engineering. We respect your home environment and ensure
              that every repair is conducted with precision, cleanliness, and
              speed.
            </span>
          </>
        ),
        image: {
          src: cooker1,
          alt: "The Leading Elba Service Center in Fifth Settlement & New Cairo",
          label: "Elba Service Center",
        },
      },
      {
        title: "Expert Repair for Elba Built-in Cookers & Ovens in Maadi",
        body: (
          <>
            <span>When it comes to </span>
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
              in Maadi, we are the first choice for homeowners who value
              original quality. We maintain a dedicated stock of authentic
              Italian spare parts specifically for the Maadi district to ensure
              same-day repairs. Our certified engineers are experts in handling
              built-in hobs and luxury ovens, providing a technical edge that
              preserves your appliance's lifespan. Every repair in Maadi comes
              with an official 12-month warranty, guaranteeing that your kitchen
              remains the heart of your home without any unexpected
              interruptions.
            </span>
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
        q: "My Elba cooker has a gas leak or ignition issue in Maadi; what should I do?",
        a: (
          <p>
            <span>Safety is our priority. For </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span> in Maadi, call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              immediately. We will send a technician to your home in Degla or
              Sarayat to fix the issue on-site with original parts.
            </span>
          </p>
        ),
      },
      {
        q: "I need a specialist for Elba oven repair in Maadi; who can help?",
        a: (
          <p>
            <span>Our Maadi center provides top-tier </span>
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
            <span>. Contact </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to schedule a visit and get a certified 1-year warranty on your
              repair.
            </span>
          </p>
        ),
      },
      {
        q: "My Elba hood isn't extracting smoke properly in my Maadi kitchen; any solution?",
        a: (
          <p>
            <span>Yes, we offer specialized </span>
            <a
              href="https://alba-eg.com/en/elba-hood-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba hood maintenance</strong>
            </a>
            <span> and </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-hood-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in hood repair</strong>
            </a>
            <span> across Maadi. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to clean or replace motors and filters with original Italian ones.
            </span>
          </p>
        ),
      },
      {
        q: "Where can I fix my Elba dishwasher in the Maadi area?",
        a: (
          <p>
            <span>No need to transport your appliance. Call </span>
            <strong>01211114528</strong>
            <span> for </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba dishwasher repair</strong>
            </a>
            <span> or </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in dishwasher repair</strong>
            </a>
            <span>
              . Our Maadi team will fix it at your home with genuine parts.
            </span>
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
          name: "Elba Maintenance Maadi",
          url: "https://alba-eg.com/en/elba-maintenance-in-maadi",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Maadi",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "Maadi Sarayat" },
            { "@type": "City", name: "Degla" },
            { "@type": "City", name: "Zahraa Maadi" },
            { "@type": "City", name: "New Maadi" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "My Elba cooker has a gas leak or ignition issue in Maadi; what should I do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For Elba built-in cooker repair in Maadi, call 01211114528 immediately. We will send a technician to your home in Degla or Sarayat to fix the issue on-site with original parts.",
              },
            },
            {
              "@type": "Question",
              name: "I need a specialist for Elba oven repair in Maadi; who can help?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our Maadi center provides top-tier Elba oven maintenance and Elba built-in oven repair. Contact 01211114528 to schedule a visit and get a certified 1-year warranty.",
              },
            },
            {
              "@type": "Question",
              name: "My Elba hood isn't extracting smoke properly in my Maadi kitchen; any solution?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer specialized Elba hood maintenance and Elba built-in hood repair across Maadi. Call 01211114528 to fix motor or filter issues using original parts.",
              },
            },
            {
              "@type": "Question",
              name: "Where can I fix my Elba dishwasher in the Maadi area?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 for Elba dishwasher repair or Elba built-in dishwasher repair. Our Maadi team will fix it at your home with genuine parts and home warranty.",
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
                Elba Maintenance in Maadi | Professional Home Care
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
            Maadi Customer Support: Elba Repair{" "}
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

export default MaadiPageEn;
