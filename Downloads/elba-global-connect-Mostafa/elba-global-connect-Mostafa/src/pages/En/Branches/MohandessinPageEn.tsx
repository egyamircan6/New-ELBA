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

const MohandessinPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance in Mohandessin | Authorized American Group Service`;
  const metaDescription = `Premier Elba Maintenance in Mohandessin. We provide on-site repair for Elba hobs and ovens with original Italian parts. Call 01211114528 for certified service.`;

  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "The Authorized Destination for Elba Egypt Services in Mohandessin",
        body: (
          <>
            <p>
              <span>
                For decades, Mohandessin has been the heart of Cairo&rsquo;s
                elite living, and we are here to ensure your high-end kitchen
                appliances keep up with that lifestyle.{" "}
              </span>
              <a
                href="https://americangroup-eg.com/"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>American Group</strong>
              </a>
              <span> provides a premier </span>
              <strong>Elba maintenance in Mohandessin</strong>
              <span>
                , covering everything from Gameat El Dowal to Ahmed Orabi and
                Dokki. We understand that{" "}
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
                products are built with Italian precision, which is why we only
                dispatch technicians who have mastered the art of repairing
                built-in hobs and luxury appliances. By calling our{" "}
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
                , you get a premium technical experience that values your time
                and maintains the elegance of your home.
              </span>
            </p>
            <p className="mt-5">
              <span>
                If your Elba kitchen unit in Mohandessin is showing any error
                codes or performance drops, call{" "}
              </span>
              <strong>01211114528</strong>
              <span> now or reach us via </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>WhatsApp</strong>
              </a>
              <span>
                {" "}
                for an instant consultation. Our specialized team handles deep
                cleaning, electronic diagnostics, and{" "}
              </span>
              <strong>Elba original parts</strong>
              <span>
                {" "}
                replacement with a certified 1-year warranty right at your
                doorstep.
              </span>
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
        title: "Technical Mastery in Elba Built-in Repair within Mohandessin",
        body: (
          <>
            <p>
              <span>When searching for </span>
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
                in the Mohandessin area, efficiency and safety are paramount.
                Our{" "}
              </span>
              <strong>American Group</strong>
              <span>
                {" "}
                engineers specialize in the delicate calibration of Italian
                burners and electronic oven timers. We don't just "fix"
                appliances; we restore them to their factory-new condition using
                genuine components. As a leading{" "}
              </span>
              <strong>Elba repair provider</strong>
              <span>
                , we focus on providing a quiet and professional service that
                fits the busy schedule of Mohandessin residents, ensuring your
                cooking experience remains uninterrupted and safe for your
                family.
              </span>
            </p>
            <p className="mt-5">
              <span>
                Don&rsquo;t let a broken stove ruin your day&mdash;if your Elba
                cooker or oven in Mohandessin needs expert attention, call
                the{" "}
              </span>
              <strong>Elba repair number 01211114528</strong>
              <span>
                {" "}
                today. We offer immediate on-site inspections and a formal
                12-month guarantee on all Italian spare parts to ensure
                long-term reliability.
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
        q: "Who provides the best Elba Maintenance in Mohandessin for cookers?",
        a: (
          <p>
            <strong>American Group</strong>
            <span> is the premier provider of </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span> for all cooking appliances. As specialists in </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span>
              , we fix gas flow and ignition issues on-site. Simply call{" "}
            </span>
            <strong>01211114528</strong>
            <span> to schedule your professional </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span> today.</span>
          </p>
        ),
      },
      {
        q: "How do I book Elba Maintenance in Mohandessin for my oven?",
        a: (
          <p>
            <span>Booking an </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span>
              {" "}
              for your oven is easy and convenient. Our mobile team offers
              expert{" "}
            </span>
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
            <span> at your location. Contact </span>
            <strong>01211114528</strong>
            <span> for a same-day </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span> with a certified warranty on all parts.</span>
          </p>
        ),
      },
      {
        q: "Is there an Elba Maintenance in Mohandessin for hood motor repair?",
        a: (
          <p>
            <span>Yes, we are the leading experts for </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span> regarding kitchen hoods. We provide </span>
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
            <span> throughout the area. Call </span>
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
            <span> to secure your </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span> now.</span>
          </p>
        ),
      },
      {
        q: "Where can I find Elba Maintenance in Mohandessin for dishwashers?",
        a: (
          <p>
            <span>For top-tier </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span>
              {" "}
              for dishwashers, look no further. We provide comprehensive{" "}
            </span>
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
            <span> using original parts. Call </span>
            <strong>01211114528</strong>
            <span> to request </span>
            <strong>Elba Maintenance in Mohandessin</strong>
            <span>
              {" "}
              and receive a full year of warranty from American Group.
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
          name: "American Group - Elba Maintenance 6th October",
          url: "https://alba-eg.com/en/elba-maintenance-in-6th-october",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "6th of October",
            addressRegion: "Giza",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "6th of October City" },
            { "@type": "City", name: "Hadayek October" },
            { "@type": "City", name: "October Districts" },
            { "@type": "City", name: "West Somid" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How can I fix my Elba cooker in 6th of October?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For Elba built-in cooker repair in 6th of October, call 01211114528. American Group offers professional home repair with original Italian parts and an official warranty.",
              },
            },
            {
              "@type": "Question",
              name: "Where is the certified Elba oven repair in 6th October?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 for Elba oven maintenance in 6th October. American Group specialists fix built-in and standard ovens on-site with certified spare parts.",
              },
            },
            {
              "@type": "Question",
              name: "Does American Group provide Elba hood services in 6th October?",
              acceptedAnswer: {
                "@type": {
                  "@type": "Answer",
                  text: "Yes, we offer Elba hood maintenance and built-in hood repair in 6th October. Call 01211114528 or WhatsApp us to solve motor and suction issues immediately.",
                },
              },
            },
            {
              "@type": "Question",
              name: "Is there Elba dishwasher repair near me in 6th of October?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 01211114528 for Elba dishwasher repair in 6th October. American Group provides home service with 100% original parts and a 12-month guarantee.",
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
                Elba Maintenance in Mohandessin | Elite Service by American
                Group
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
            Professional Elba Maintenance in Mohandessin
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

export default MohandessinPageEn;
