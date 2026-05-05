import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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

const FifthSettlementPageEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Maintenance in Fifth Settlement | Authorized Service Center`;
  const metaDescription = `Official Elba maintenance in Fifth Settlement & New Cairo. Home repair for Elba hobs, ovens, and hoods with original Italian spare parts. Call 01211114528.`;
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "The Leading Elba Service Center in Fifth Settlement & New Cairo",
        body: (
          <>
            <span>
              For residents of the Fifth Settlement seeking professional
              appliance care, we offer the most reliable{" "}
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
              maintenance services. Our team is specifically trained to handle
              the sophisticated technology of Italian appliances, ensuring a
              seamless repair experience. By contacting our{" "}
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
              , you gain access to a network of certified engineers who cover
              all areas of New Cairo, including El Narges, North Investors, and
              the Choueifat district. We guarantee a rapid response and a clean,
              on-site repair that restores your kitchen&rsquo;s efficiency
              immediately.
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
        title: "Authorized Elba Repair in New Cairo with Genuine Parts",
        body: (
          <>
            <span>We take pride in being the primary destination for </span>
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
              in the Fifth Settlement. Our service is built on transparency and
              technical mastery, utilizing only 100% original Italian spare
              parts. Whether you have a modern built-in set or a classic Elba
              appliance, our technicians ensure that every repair meets the
              highest international standards. Each service visit in New Cairo
              is backed by an official warranty certificate, giving you
              long-term peace of mind and protecting your investment in
              high-quality kitchen equipment.
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
        q: " Who is the authorized specialist for Elba cookers in Fifth Settlement?",
        a: (
          <p>
            <span>Our center is the leading expert for </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Elba built-in cooker repair</strong>
            </a>
            <span> in Fifth Settlement. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              now to have a specialized technician fix your hob at home today
              using genuine Italian parts.
            </span>
          </p>
        ),
      },
      {
        q: "How can I get my Elba oven fixed in Fifth Settlement?",
        a: (
          <p>
            <span>&nbsp;For the best </span>
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
            <span> in Fifth Settlement, contact </span>
            <strong>01211114528</strong>
            <span>
              . We provide immediate professional home service with a certified
              12-month warranty.
            </span>
          </p>
        ),
      },
      {
        q: "Where can I book Elba dishwasher maintenance in Fifth Settlement?",
        a: (
          <p>
            <span>Simply call </span>
            <strong>01211114528</strong>
            <span> for reliable </span>
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
              . Our Maadi and New Cairo teams offer on-site repairs with
              original spare parts.
            </span>
          </p>
        ),
      },
      {
        q: "Is there an Elba hood repair service available in New Cairo?",
        a: (
          <p>
            <span>Yes, we provide expert </span>
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
            <span> across Fifth Settlement. Call </span>
            <strong>01211114528</strong>
            <span>
              {" "}
              to restore your hood&rsquo;s suction power and motor efficiency
              instantly.
            </span>
          </p>
        ),
      },
    ],
    [],
  );

  const schemaGraph = useMemo(() => {
    return {};
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
                Elba Maintenance in Fifth Settlement | Authorized Home
                Service{" "}
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
            Frequently Asked Questions - Elba Maintenance Fifth Settlement
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

export default FifthSettlementPageEn;
