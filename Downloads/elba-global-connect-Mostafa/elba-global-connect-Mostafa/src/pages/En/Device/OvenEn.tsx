import { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import ovenImg from "@/assest/elba-oven.png.png";

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

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";

const SITE_URL = "https://alba-eg.com/";
const BRAND_URL = "https://americangroup-eg.com/";

// ✅ IMPORTANT: use your exact URLs (as you wrote)
const URL_OVEN = "https://alba-eg.com/en/elba-oven-maintenance";
const URL_ELBA_EGYPT = "https://alba-eg.com/en/elba-egypt";
const URL_HOTLINE = "https://alba-eg.com/en/elba-hotline";
const URL_BUILTIN = "https://alba-eg.com/en/elba-built-in-oven-repair";
const URL_HOOD = "https://alba-eg.com/en/elba-hood-maintenance";

// WhatsApp API link (same as your HTML)
const WA_API =
  "https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const OvenEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  // ✅ Meta exactly as you wrote
  const metaTitle =
    "Elba Oven Maintenance | Home Repair with Genuine Spare Parts | Call 01211114528";
  const metaDescription =
    "Looking for certified elba oven maintenance? American Group provides expert Elba oven repair technicians with genuine spare parts and a full-year warranty. Call 01211114528 now for immediate home service.";

  // ✅ H1 exactly
  const h1 = "Welcome to the Authorized Elba Oven Maintenance Center";

  // ✅ Sections (same content) but converted to Hood style (title + body + image)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: "Why choose us for elba oven maintenance?",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Elba is an Italian brand known for premium kitchen quality, but
              even top appliances need regular care. We provide trusted{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>{" "}
              in Egypt through a team of specialized engineers trained to handle
              complex Italian technology, using genuine spare parts and fast
              response through American Group. For official brand support, you
              can also visit{" "}
              <a href={URL_ELBA_EGYPT} className={LINK_CLASS}>
                Elba Egypt
              </a>{" "}
              or contact the official{" "}
              <a href={URL_HOTLINE} className={LINK_CLASS}>
                Elba hotline
              </a>
              .
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              Our technicians are available across Cairo, and whether you own an
              electric or gas oven, our elba oven maintenance services cover
              both common and unexpected faults to restore factory-level
              performance.
            </p>
          </>
        ),
        image: {
          src: ovenImg,
          alt: "Elba oven maintenance",
          label: "Oven Service",
        },
      },
      {
        title: "Need an elba oven maintenance technician near you in Cairo?",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              If you live in Cairo and need speed and accuracy, choosing us
              ensures a specialized technician for elba oven maintenance
              (including built-in ovens) can arrive the same day. If your oven
              is integrated, you can also review{" "}
              <a href={URL_BUILTIN} className={LINK_CLASS}>
                Elba built-in oven repair
              </a>
              .
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              We provide immediate home service without moving the appliance.
              Our team uses advanced digital inspection tools to accurately
              detect sensor and thermostat faults. If your Elba oven has any
              issue, call the{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>{" "}
              number <strong>{PHONE_DISPLAY}</strong> or use the{" "}
              <a href={URL_HOTLINE} className={LINK_CLASS}>
                Elba hotline
              </a>
              , and a specialized technician will arrive at your door with a
              full inspection and genuine spare parts.
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "Technician support in Cairo",
          label: "Cairo Support",
        },
      },
      {
        title: "What are the most common Elba oven faults and how are they fixed?",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Many people ask: Why is the Elba oven not heating? Or what causes
              the flame to go out? The answer is often a faulty thermal sensor
              or burners that need cleaning. Our{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>{" "}
              specialists handle weak flame issues, broken hinges, and cooling
              fan faults.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              We use modern techniques to recalibrate temperature and perform a
              complete safety circuit check to protect your family and prevent
              gas leaks. If you face any problem, call{" "}
              <strong>{PHONE_DISPLAY}</strong> immediately or contact{" "}
              <a href={URL_HOTLINE} className={LINK_CLASS}>
                Elba hotline
              </a>{" "}
              to schedule professional elba oven maintenance.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              If the issue is related to your cooker instead of the oven, you
              can review Elba cooker maintenance. If you need ventilation
              service, visit{" "}
              <a href={URL_HOOD} className={LINK_CLASS}>
                Elba hood maintenance
              </a>
              .
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Diagnostics and repair",
          label: "Diagnostics",
        },
      },
      {
        title:
          "Do you provide genuine Elba oven spare parts through the authorized service?",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Yes. We have a large stock of genuine spare parts imported
              specifically for{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>
              . We supply heat-resistant oven glass, hinges, and electric
              heaters in multiple capacities.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              Using genuine spare parts through American Group extends the
              appliance lifespan and helps prevent repeated breakdowns. Every
              installed part during{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>{" "}
              comes with an official warranty certificate. If you need genuine
              spare parts in Cairo, call <strong>{PHONE_DISPLAY}</strong> now.
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Genuine spare parts",
          label: "Genuine Parts",
        },
      },

      // ✅ repeated block (kept exactly like your HTML)
      {
        title:
          "Do you provide genuine Elba oven spare parts through the authorized service?",
        body: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Yes. We have a large stock of genuine spare parts imported
              specifically for{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>
              . We supply heat-resistant oven glass, hinges, and electric
              heaters in multiple capacities.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              Using genuine spare parts through American Group extends the
              appliance lifespan and helps prevent repeated breakdowns. Every
              installed part during{" "}
              <a href={URL_OVEN} className={LINK_CLASS}>
                elba oven maintenance
              </a>{" "}
              comes with an official warranty certificate. If you need genuine
              spare parts in Cairo, call <strong>{PHONE_DISPLAY}</strong> now.
            </p>
          </>
        ),
        image: {
          src: ovenImg,
          alt: "Elba spare parts",
          label: "Warranty Parts",
        },
      },
    ],
    []
  );

  // ✅ FAQ exactly as your structure (keep text unchanged)
  const faqs = useMemo(
    () => [
      {
        q: "1. What is the authorized Elba oven maintenance number in Egypt?",
        a: `The direct answer is to contact American Group via the Elba hotline ${PHONE_DISPLAY}. We provide immediate home elba oven maintenance for all models (gas, electric, and built-in) with an official warranty on genuine Italian spare parts.`,
        linkText: "Elba hotline",
        linkHref: URL_HOTLINE,
        extraLinkText: "elba oven maintenance",
        extraLinkHref: URL_OVEN,
      },
      {
        q: "2. How can I repair an Elba oven that is not heating?",
        a: `Heating problems in Elba ovens are usually caused by a faulty heater or thermostat. Request elba oven maintenance by calling ${PHONE_DISPLAY}. The technician will inspect the electrical circuit and replace damaged parts with genuine parts in the same visit.`,
        linkText: "elba oven maintenance",
        linkHref: URL_OVEN,
      },
      {
        q: "3. Where can I find genuine Elba oven spare parts?",
        a: `All genuine Italian Elba oven spare parts are available through Elba Egypt. Book your elba oven maintenance to ensure original parts with real warranty.`,
        linkText: "Elba Egypt",
        linkHref: URL_ELBA_EGYPT,
      },
      {
        q: "4. What causes the Elba gas oven flame to go out suddenly?",
        a: `A sudden flame-out is usually caused by a faulty safety sensor or clogged burners. The best solution is professional elba oven maintenance. Call ${PHONE_DISPLAY} to send a specialized technician.`,
        linkText: PHONE_DISPLAY,
        linkHref: WA_API,
      },
      {
        q: "5. Do you provide a specialized built-in Elba oven maintenance technician?",
        a: `Yes. We provide expert technicians for built-in appliances through Elba built-in oven repair alongside complete elba oven maintenance.`,
        linkText: "Elba built-in oven repair",
        linkHref: URL_BUILTIN,
      },
      {
        q: "6. How is broken Elba oven glass replaced?",
        a: `Replacing oven glass requires professional elba oven maintenance with genuine heat-resistant glass. Call ${PHONE_DISPLAY} for home installation.`,
        linkText: PHONE_DISPLAY,
        linkHref: WA_API,
      },
      {
        q: "7. Why do error codes appear on the Elba digital oven display?",
        a: `Error codes indicate an issue with the electronic board or sensors. For reset and elba oven maintenance, contact ${PHONE_DISPLAY} for advanced diagnostics.`,
        linkText: "elba oven maintenance",
        linkHref: URL_OVEN,
      },
      {
        q: "8. What is the Elba company number for hood and oven maintenance?",
        a: `We provide both elba oven maintenance and Elba hood maintenance. Call ${PHONE_DISPLAY} for full kitchen appliance support.`,
        linkText: PHONE_DISPLAY,
        linkHref: WA_API,
      },
      {
        q: "9. How can I protect Elba oven hinges from damage?",
        a: `If you have difficulty closing the oven door, book elba oven maintenance to replace hinges with genuine parts.`,
      },
      {
        q: "10. Is there an Elba oven maintenance branch near me in Egypt?",
        a: `We cover most areas through our mobile service fleet. Call ${PHONE_DISPLAY} to request professional elba oven maintenance at your home without transporting the appliance.`,
        linkText: PHONE_DISPLAY,
        linkHref: WA_API,
        extraLinkText: "elba oven maintenance",
        extraLinkHref: URL_OVEN,
      },
    ],
    []
  );

  // ✅ JSON-LD (same structure)
  const schemas = useMemo(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "American Group - Elba Oven Maintenance in Egypt",
      url: SITE_URL,
      telephone: PHONE_TEL,
      areaServed: [{ "@type": "Country", name: "Egypt" }],
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
      description: metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Elba Oven Maintenance",
      serviceType: "Oven Repair Service",
      description:
        "Certified Elba oven maintenance in Egypt with genuine spare parts and a full-year warranty. Fast home repair and advanced diagnostics.",
      provider: {
        "@type": "LocalBusiness",
        name: "American Group",
        telephone: PHONE_TEL,
      },
      areaServed: { "@type": "Country", name: "Egypt" },
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          contactType: "customer service",
        },
      },
    };

    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    return [localBusiness, service, faqPage];
  }, [faqs, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      {/* ✅ JSON-LD Schemas */}
      {schemas.map((obj, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* ✅ Hero (same design) */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&h=600&fit=crop"
          alt="Elba Oven Maintenance"
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
                {h1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Home repair with genuine spare parts and a full-year warranty.
                Call <strong>{PHONE_DISPLAY}</strong> now for immediate service.
              </p>

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
                    className="border-white/80 text-white hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
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
                    className={`lg:col-span-7 ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
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
                    className={`lg:col-span-5 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-sm text-muted-foreground">
                            Elba Oven
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
                      <a href={SITE_URL} className={LINK_CLASS} target="_blank" rel="noreferrer">
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

      {/* ✅ FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions About Elba oven maintenance in Egypt
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
                  <span>{f.a} </span>

                  {f.linkText && f.linkHref ? (
                    <>
                      {" "}
                      <a href={f.linkHref} className={LINK_CLASS}>
                        {f.linkText}
                      </a>
                    </>
                  ) : null}

                  {f.extraLinkText && f.extraLinkHref ? (
                    <>
                      {" "}
                      <a href={f.extraLinkHref} className={LINK_CLASS}>
                        {f.extraLinkText}
                      </a>
                    </>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export default OvenEn;