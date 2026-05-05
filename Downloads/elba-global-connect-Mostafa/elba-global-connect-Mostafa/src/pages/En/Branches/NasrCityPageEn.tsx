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

const NasrCityPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance in Nasr City | Authorized Service Center 01211114528`;
  const metaDescription = `Get expert Elba maintenance in Nasr City. Fast home repair for hobs, ovens, and hoods with original Italian parts. Call 01211114528 for a certified service today.`;

  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Best Elba Appliances Service Center in Nasr City",
        body: (
          <>
            <p>
              <span>Looking for a reliable </span>
              <strong>Elba service in Nasr City</strong>
              <span>
                ? Our center provides the most advanced technical solutions for
                all Italian kitchen appliances across Nasr City&rsquo;s
                neighborhoods. Whether you live in the 1st District, Abbas El
                Akkad, or Makram Ebeid, we offer a specialized{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-egypt"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>Elba Egypt</strong>
              </a>
              <span> experience tailored to your needs. By calling the </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>Elba hotline</strong>
              </a>
              <span>
                , you ensure that your premium built-in appliances are handled
                by experts who use the latest diagnostic equipment. We guarantee
                a fast response time and a high-quality repair that restores
                your appliance to its factory settings.
              </span>
            </p>
            <p className="mt-5">
              <span>
                If your Elba appliance in Nasr City has any fault, call{" "}
              </span>
              <strong>01211114528</strong>
              <span>
                {" "}
                now or message us on WhatsApp to get a specialized technician at
                your doorstep. Our center provides a comprehensive check-up,
                professional cleaning, and original{" "}
              </span>
              <strong>Elba spare parts</strong>
              <span> replacement with an official warranty.</span>
            </p>
          </>
        ),
        image: {
          src: cooker1,
          alt: "The Leading Elba Service Center in Fifth Settlement & New Cairo",
          label: "Elba Service Center",
        },
      },
      {
        title: "Authorized Repair for Elba Cookers & Ovens in Nasr City",
        body: (
          <>
            <p>
              <span>When it comes to </span>
              <a href="https://alba-eg.com/en/elba-cooker-maintenance">
                <strong>Elba cooker maintenance</strong>
              </a>
              <span>
                {" "}
                in Nasr City, we are the industry leaders. Our team specializes
                in restoring the efficiency of your kitchen heart using 100%
                authentic Italian components. We provide{" "}
              </span>
              <strong>Elba appliance repair</strong>
              <span>
                {" "}
                services for both gas and electric models, ensuring maximum
                safety for your home. Our Nasr City branch is known for its
                punctuality and technical mastery, helping thousands of families
                maintain their luxury kitchen equipment for years.
              </span>
            </p>
            <p className="mt-5">
              <span>
                If your Elba cooker or oven in Nasr City is not working
                properly, call the{" "}
              </span>
              <strong>Elba repair number 01211114528</strong>
              <span>
                {" "}
                today. We offer a same-day inspection and a certified 12-month
                warranty on all original Italian parts used during the service.
              </span>
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
        q: "How can I fix my Elba cooker in Nasr City?",
        a: (
          <p>
            <span>For the most reliable </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span> in Nasr City, simply contact </span>
            <strong>01211114528</strong>
            <span>
              . We provide on-site diagnostics and use genuine Italian parts to
              fix gas leaks or ignition issues immediately.
            </span>
          </p>
        ),
      },
      {
        q: "Where is the official Elba oven repair in Nasr City?",
        a: (
          <p>
            <span>Our center offers professional </span>
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
            <span> in Nasr City. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to book a certified engineer who will restore your oven's heating
              efficiency on the spot.
            </span>
          </p>
        ),
      },
      {
        q: "Does the Nasr City branch provide Elba hood services?",
        a: (
          <p>
            <span>Yes, we are experts in </span>
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
            <span> throughout Nasr City. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to fix suction motors or replace charcoal filters with original
              parts.
            </span>
          </p>
        ),
      },
      {
        q: "Is there Elba dishwasher repair near me in Nasr City?",
        a: (
          <p>
            <span>Absolutely. For </span>
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
            <span> in Nasr City, call </span>
            <strong>01211114528</strong>
            <span>
              . Our mobile team will handle the repair at your home with a full
              year of warranty.
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
          name: "Elba Maintenance Nasr City",
          url: "https://alba-eg.com/en/elba-maintenance-in-nasr-city",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nasr City",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "Abbas El Akkad" },
            { "@type": "City", name: "Makram Ebeid" },
            { "@type": "City", name: "Nasr City District 1" },
            { "@type": "City", name: "Zahraa Nasr City" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How can I fix my Elba cooker in Nasr City?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For Elba built-in cooker repair in Nasr City, contact 01211114528. We offer professional home repair with original Italian parts and an official warranty.",
              },
            },
            {
              "@type": "Question",
              name: "Where is the official Elba oven repair in Nasr City?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 for Elba oven maintenance in Nasr City. Our experts fix built-in and standard ovens on-site with certified parts.",
              },
            },
            {
              "@type": "Question",
              name: "Does the Nasr City branch provide Elba hood services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer Elba hood maintenance and built-in hood repair in Nasr City. Call 01211114528 to solve motor and suction issues immediately.",
              },
            },
            {
              "@type": "Question",
              name: "Is there Elba dishwasher repair near me in Nasr City?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 for Elba dishwasher repair in Nasr City. We provide home service with 100% original parts and a 12-month guarantee.",
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
                Elba Maintenance in Nasr City | Authorized Home Service{" "}
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
            Elba Maintenance Nasr City Support{" "}
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

export default NasrCityPageEn;
