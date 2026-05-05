import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import dishwasherImg from "@/assest/elba-dishwasher.jpeg";

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

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";
const DOMAIN = "https://elba-eg.com";

const LINK_CLASS =
  "text-primary hover:text-primary/80 font-bold hover:underline";

type FaqItem = {
  q: string;
  aText: string; // schema
  aJSX: React.ReactNode; // UI
};

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-lg font-bold text-foreground">{question}</span>
        <span
          className={`text-2xl font-bold text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-muted-foreground text-lg leading-relaxed space-y-3 text-left">
          {answer}
        </div>
      )}
    </div>
  );
};

const DishwasherBuiltinElbaEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Best Elba Built-in Dishwasher Service in Egypt | Call ${PHONE_DISPLAY}`;
  const metaDescription = `Having issues with your Elba dishwasher? We provide fast home service for Elba built-in dishwashers with a certified warranty and genuine Italian spare parts. Book now: ${PHONE_DISPLAY}.`;
  const { t, isRTL, localePath } = useLanguage();

  // ✅ Sections (each one has image + content)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "Why Are We the Leading Experts in Elba built-in Dishwasher Repair in Egypt?",
        body: (
          <>
            <p>
              <span>
                When it comes to built-in appliances, expertise is the only
                difference between a successful repair and costly damage to your
                kitchen d&eacute;cor. At American Group, a leader in electrical
                appliance maintenance, we take pride in being the most
                specialized center for{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                in Egypt. Our team consists of engineers who have spent years
                studying Italian Elba technology in depth.
              </span>
            </p>
            <p>
              <span>
                We do not treat the dishwasher as a separate appliance, but as
                an integrated part of your kitchen system. That is why we use
                advanced diagnostic techniques that allow us to detect the root
                cause of any malfunction in the shortest possible time.
              </span>
            </p>
            <p>
              <span>Once you call 01211114528 or contact the official </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hotline</span>
              </a>
              <span>
                , you are placing your appliance in safe hands that guarantee
                the highest quality standards in professional{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                and complete service for Elba kitchen appliances. You can also
                learn more about the brand through{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-egypt"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba Egypt</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&h=900&fit=crop",
          alt: "Elba built-in dishwasher service",
          label: "Certified",
        },
      },
      {
        title:
          "Immediate Elba built-in Dishwasher Repair at Home (Without Dismantling the Kitchen",
        body: (
          <>
            <p>
              <span>
                The biggest concern for built-in appliance owners is the fear of
                removing wooden cabinets or scratching marble surfaces during
                repairs. At American Group, we have completely eliminated this
                concern.
              </span>
            </p>
            <p>
              <span>We provide immediate </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                fully performed inside your home using professional extraction
                and lifting equipment specifically designed for Built-in
                appliances.
              </span>
            </p>
            <p>
              <span>
                Our technicians are highly trained to remove and reinstall the
                dishwasher with extreme precision, without affecting the kitchen
                finishing or cabinet alignment.
              </span>
            </p>
            <p>
              <span>Call the unified number for </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span> at </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>01211114528</span>
              </a>
              <span>
                {" "}
                now, and a fully equipped mobile workshop will arrive at your
                location to complete the repair in a single visit.
              </span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "In-home built-in dishwasher repair",
          label: "In-Home",
        },
      },
      {
        title:
          "Elba built-in Dishwasher Repair with Genuine Italian Spare Parts and Official Warranty",
        body: (
          <>
            <p>
              <span>Our golden rule in </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                is: &ldquo;There is no substitute for original parts.&rdquo;
              </span>
            </p>
            <p>
              <span>
                To ensure the efficiency of the drain pump, spray arms, heating
                element, or electronic control board, we strictly install 100%
                genuine Italian spare parts imported specifically for Elba
                models.
              </span>
            </p>
            <p>
              <span>
                Most importantly, we provide you with an official warranty from
                the main service center covering both spare parts and labor.
                This gives you complete peace of mind after every{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span> service.</span>
            </p>
            <p>
              <span>
                To request reliable original spare parts, contact us via
                WhatsApp or call directly at 01211114528. If you have a
                free-standing model instead of built-in, you can review{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>.</span>
            </p>{" "}
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Genuine spare parts and warranty",
          label: "Genuine Parts",
        },
      },
      {
        title:
          "Elba built-in Dishwasher Repair for 10 and 14 Place Settings – All Elba Models Covered",
        body: (
          <>
            <p>
              <span>
                Whether you own a compact 10-place Elba dishwasher for small
                kitchens or a large 14-place model for big families, we provide
                complete technical solutions for all Elba versions.
              </span>
            </p>
            <p>
              <span>Our comprehensive inspection includes:</span>
            </p>
            <ul>
              <li>
                <span>Heating system check</span>
              </li>
              <li>
                <span>Water level sensors inspection</span>
              </li>
              <li>
                <span>Drainage system testing</span>
              </li>
              <li>
                <span>Drying performance evaluation</span>
              </li>
              <li>
                <span>Electronic board diagnostics</span>
              </li>
            </ul>
            <p>
              <span>We are the trusted experts in </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                relied upon by thousands of customers in Cairo and Giza.
              </span>
            </p>
            <p>
              <span>
                Do not wait until the malfunction worsens. Call customer service
                now at{" "}
              </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>01211114528</span>
              </a>
              <span>
                {" "}
                and enjoy a service experience worthy of your premium Italian
                appliances.
              </span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
          alt: "Dishwasher diagnostics and calibration",
          label: "Diagnostics",
        },
      },
    ],
    [],
  );

  // ✅ FAQ with links (UI) + plain text (schema)
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "What is the authorized Elba built-in Dishwasher Repair number?",
        aText: `The certified service number is ${PHONE_DISPLAY}. American Group provides instant fault reports and specialized built-in support, sending an expert technician to repair your unit at home without moving it.`,
        aJSX: (
          <>
            <p>
              <span>The authorized </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                number is 01211114528. Through this number, American Group
                provides immediate fault reporting and specialized technical
                support for integrated appliances, ensuring an expert technician
                is dispatched to repair the appliance on-site without moving it
                to a workshop.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "How can I contact the authorized Elba dishwasher repair center?",
        aText: `You can contact the authorized service center in Egypt by calling the unified number ${PHONE_DISPLAY} or sending a WhatsApp message to book a home visit.`,
        aJSX: (
          <>
            <p>
              <span>
                You can contact the authorized Elba dishwasher repair center in
                Egypt by calling the unified Elba maintenance number 01211114528
                or through the official{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hotline</span>
              </a>
              <span>
                . The center provides certified services that meet the highest
                quality standards to guarantee your appliance efficiency. For
                brand details, visit{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-egypt"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba Egypt</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
      },
      {
        q: "Does the authorized Elba built-in Dishwasher Repair center provide genuine spare parts??",
        aText: `Customer service number is ${PHONE_DISPLAY}. You can also message us on WhatsApp to report issues and schedule a fast home visit.`,
        aJSX: (
          <>
            <p>
              <span>
                Yes. American Group is committed to providing all genuine Elba
                dishwasher spare parts, including the dishwasher motor, drain
                pump, heating element, and electronic control board, with an
                official warranty. To ensure correct installation, book{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span> at 01211114528.</span>
            </p>
          </>
        ),
      },
      {
        q: "What should I do if my Elba dishwasher is not taking in water?",
        aText:
          "Yes. We provide genuine spare parts including the motor, drain pump, heater, and control board—each covered by a certified warranty.",
        aJSX: (
          <>
            <p>
              <span>
                If your Elba dishwasher is not taking in water, the issue may be
                caused by a clogged filter or a faulty inlet valve. You can
                request immediate{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                service by calling 01211114528 for professional inspection and
                system reset.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "What is the solution if my Elba dishwasher is not draining water?",
        aText: `It could be a clogged filter or a faulty inlet valve. Call ${PHONE_DISPLAY} for a technician to inspect connections and restore operation.`,
        aJSX: (
          <>
            <p>
              <span>
                When your Elba dishwasher is not draining water, the cause is
                often a clogged filter or a defective drain pump. Contact
                customer service at{" "}
              </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>01211114528</span>
              </a>
              <span> to dispatch a certified technician for </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span> and solve the issue at home immediately.</span>
            </p>
          </>
        ),
      },
      {
        q: "Why is my Elba dishwasher not heating water or drying dishes?",
        aText:
          "Most commonly this is caused by a clogged filter or a faulty drain pump. Contact us and we’ll fix it at your home.",
        aJSX: (
          <>
            <p>
              <span>
                If your Elba dishwasher is not heating water or not drying
                dishes properly, this usually indicates a faulty heating element
                or temperature sensor. We provide specialized technicians
                for{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                to inspect the electrical circuit and replace damaged components
                with genuine spare parts.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "How should I handle water leakage from my Elba dishwasher?",
        aText:
          "This often indicates a heater or temperature sensor problem. Our technicians will inspect the electrical circuit and replace faulty parts with genuine ones.",
        aJSX: (
          <>
            <p>
              <span>
                If you notice water leakage from your Elba dishwasher,
                contact{" "}
              </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>01211114528</span>
              </a>
              <span> immediately for </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                . The leakage may result from worn door seals or internal hose
                damage, especially in built-in models where fast response helps
                protect kitchen cabinets.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "What does it mean when an Elba dishwasher error code appears on the display?",
        aText: `Disconnect power immediately and call ${PHONE_DISPLAY}. Leakage may be caused by worn seals or internal hose issues.`,
        aJSX: (
          <>
            <p>
              <span>
                When your Elba dishwasher displays an error code such as E1 or
                E4, it helps simplify diagnosis. Each error code corresponds to
                a specific malfunction such as overflow or drainage issues.
                Our{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                experts can accurately interpret and resolve the issue.
              </span>
            </p>
            <p>
              <span>
                If you also need maintenance for other Elba kitchen appliances,
                you can review{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-oven-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba oven maintenance</span>
              </a>
              <span>, </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>, and </span>
              <a
                href="https://alba-eg.com/en/elba-hood-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hood maintenance</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
      },
    ],
    [],
  );

  // ✅ JSON-LD (FAQ uses aText)
  const schemas = useMemo(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "American Group - Elba Dishwasher Service in Egypt",
      url: "https://elba-eg.com/",
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
      name: "Elba Built-in Dishwasher Service",
      serviceType: "Dishwasher Repair Service",
      description:
        "Fast home service for Elba built-in dishwashers in Egypt with certified warranty and genuine Italian spare parts.",
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
        acceptedAnswer: { "@type": "Answer", text: f.aText },
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

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&h=600&fit=crop"
          alt="Elba Built-in Dishwasher Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2">
                Home Service
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Best Elba built-in Dishwasher Repair Center in Egypt{" "}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Fast home repair — no kitchen dismantling. Certified warranty
                and genuine Italian spare parts.
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
                    className="border-white/80 text-black hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full font-cairo"
                  >
                    <Phone className="w-5 h-5" />
                    Call
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70">
                Service number:{" "}
                <span className="font-semibold text-white">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Sections: Image + Content per section */}
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
                  {/* Content */}
                  <div
                    className={cn(
                      "lg:col-span-7",
                      reverse ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <div className="max-w-none space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {s.title}
                      </h2>

                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-xl font-semibold">
                          {s.body}
                        </p>
                      </div>
                      {/* CTA */}
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
                            Elba Dishwasher (Built-in)
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
                          Service number:{" "}
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            FAQs — Elba Dishwasher Service
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
                  {f.aJSX}
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

export default DishwasherBuiltinElbaEn;
