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

const HeliopolisPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance Heliopolis | Certified Italian Repair 01211114528`;
  const metaDescription = `Premium Elba service in Heliopolis, Korba, and Gesr El Suez. Fix your Elba hobs and ovens today with genuine parts and a 1-year warranty. Call 01211114528.`;

  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Experience Excellence with Elba Egypt in Heliopolis",
        body: (
          <>
            <span>
              Heliopolis has always been a symbol of elegance, and your premium
              kitchen appliances deserve a service that matches this prestige.
              Our{" "}
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
              branch in Heliopolis is dedicated to providing swift,
              high-precision technical support for families living in Korba, Ard
              El Golf, and Sheraton Heliopolis. By dialing our{" "}
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
              , you aren't just booking a repair; you are inviting a master
              technician who respects your home's aesthetics and understands the
              sophisticated engineering of Italian-made equipment. We guarantee
              a seamless experience that brings your kitchen back to life
              without the need for off-site transportation.
            </span>
          </>
        ),
        image: {
          src: cooker1,
          alt: "The Top-Rated Elba Service Center in Sheikh Zayed City",
          label: "Elba Service Center",
        },
      },
      {
        title:
          "The Trusted Destination for Elba Built-in Systems in Heliopolis",
        body: (
          <>
            <span>Specializing in the intricate details of </span>
            <a
              href="https://alba-eg.com/en/elba-cooker-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba cooker maintenance</strong>
            </a>
            <span>
              , our Heliopolis team focuses on durability and safety. We know
              that a malfunctioning appliance can disrupt your daily routine,
              which is why we maintain a huge inventory of original Italian
              spare parts right here in Heliopolis. Our certified engineers
              excel at diagnosing complex issues in built-in hobs and luxury
              ovens, ensuring every fix complies with international safety
              standards. Every Heliopolis resident is entitled to a formal
              12-month warranty certificate, solidifying our reputation as the
              most reliable{" "}
            </span>
            <strong>authorized repair center</strong>
            <span> in East Cairo.</span>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Premium Elba Repair in Zayed with Certified Italian Parts",
          label: "Repair",
        },
      },
    ],
    [],
  );
  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "My Elba hob is not igniting; who can fix it in Heliopolis?",
        a: (
          <p>
            <span>Our Heliopolis experts specialize in </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span>. Just call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to have a technician at your doorstep in Korba or Heliopolis
              within hours to replace any faulty parts with original ones.
            </span>
          </p>
        ),
      },
      {
        q: "I need an urgent Elba oven repair in Heliopolis; is it available?",
        a: (
          <p>
            <span>Absolutely! For professional </span>
            <a
              href="https://alba-eg.com/en/elba-oven-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba oven maintenance</strong>
            </a>
            <span> or </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-oven-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in oven repair</strong>
            </a>
            <span>, contact our Heliopolis office at </span>
            <strong>01211114528</strong>
            <span>. We offer same-day home visits and certified results.</span>
          </p>
        ),
      },
      {
        q: "Does your Heliopolis branch handle Elba kitchen hood issues?",
        a: (
          <p>
            <span>Yes, we are the primary center for </span>
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
            <span> in Heliopolis. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to fix motor failures or suction problems using authentic Italian
              filters and parts.
            </span>
          </p>
        ),
      },
      {
        q: "Where is the closest place to fix an Elba dishwasher in Heliopolis?",
        a: (
          <p>
            <span>You don't need to move your appliance. Call </span>
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
              . Our Heliopolis mobile team will handle everything at your home
              with a full warranty.
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
          name: "Elba Maintenance Heliopolis",
          url: "https://alba-eg.com/en/elba-maintenance-in-heliopolis",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Heliopolis",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "Korba" },
            { "@type": "City", name: "Heliopolis" },
            { "@type": "City", name: "Ard El Golf" },
            { "@type": "City", name: "Sheraton" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "My Elba hob is not igniting; who can fix it in Heliopolis?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our Heliopolis experts specialize in Elba built-in cooker repair. Just call 01211114528 to have a technician at your doorstep in Korba or Heliopolis within hours to replace any faulty parts with original ones.",
              },
            },
            {
              "@type": "Question",
              name: "I need an urgent Elba oven repair in Heliopolis; is it available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! For professional Elba oven maintenance or Elba built-in oven repair, contact our Heliopolis office at 01211114528. We offer same-day home visits and certified results.",
              },
            },
            {
              "@type": "Question",
              name: "Does your Heliopolis branch handle Elba kitchen hood issues?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we are the primary center for Elba hood maintenance and Elba built-in hood repair in Heliopolis. Call 01211114528 to fix motor failures or suction problems using authentic Italian filters and parts.",
              },
            },
            {
              "@type": "Question",
              name: "Where is the closest place to fix an Elba dishwasher in Heliopolis?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You don't need to move your appliance. Call 01211114528 for Elba dishwasher repair or Elba built-in dishwasher repair. Our Heliopolis mobile team will handle everything at your home with a full warranty.",
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
                Elba Maintenance in Heliopolis | Elite Appliance Solutions{" "}
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
            Frequently Asked Questions - Heliopolis Resident Support: Elba
            Repair
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

export default HeliopolisPageEn;
