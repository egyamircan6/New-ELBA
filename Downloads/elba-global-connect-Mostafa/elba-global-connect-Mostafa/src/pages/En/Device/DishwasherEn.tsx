import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";
import dish from "@/assest/elba-dishwasher-ar.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// =====================
// Constants
// =====================
const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA_ME = "201211114528";
const LINK_CLASS =
  "text-primary hover:text-primary/80 font-bold hover:underline";
// =====================
// Device data (EN)
// =====================
const devicesDetailData: Record<
  string,
  {
    nameEn: string;
    category: string;
    heroImage: string;
    deviceImage: string;
    descEn: string;
    tipsEn: string[];
  }
> = {
  Dishwasher: {
    nameEn: "Elba Dishwasher",
    category: "dishwasher",
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
    deviceImage: dish,
    descEn:
      "We provide complete repair and maintenance for all Elba dishwashers (Built-in & Free-standing). Our certified technicians diagnose issues precisely and fix water inlet problems, leaks, weak drying, and error codes using genuine spare parts with a certified warranty.",
    tipsEn: [
      "Clean the filters weekly to prevent pump blockage and weak water intake.",
      "Use dishwasher salt and rinse aid regularly to improve drying and reduce limescale buildup.",
      "Check the inlet hose and inlet valve periodically to avoid leaks or low water flow.",
      "Clean the spray arms from deposits for stronger water distribution and better cleaning.",
    ],
  },
};

// =====================
// SEO Meta (EN)
// =====================
const SEO_META_TITLE = "Best Elba Dishwasher Repair Center | Book Now ";
const SEO_META_DESCRIPTION =
  "Having problems with your Elba dishwasher? American Group provides fast and certified Elba Dishwasher Repair at home with genuine Italian spare parts and official warranty. Book your appointment now: 01211114528.";

const SEO_H1 = "Best Elba Dishwasher Repair Service in Egypt";

// =====================
// JSON-LD (Service + FAQPage) (EN)
// =====================
const buildJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Elba Dishwasher Repair",
      serviceType: "Dishwasher Repair Service",
      description:
        "Best Elba dishwasher repair in Egypt. Fast in-home service with genuine spare parts and certified warranty for all Elba models.",
      provider: {
        "@type": "LocalBusiness",
        name: "American Group",
        telephone: PHONE_DISPLAY,
        areaServed: { "@type": "Country", name: "Egypt" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "210",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the official Elba dishwasher repair number in Egypt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official Elba dishwasher repair number is 01211114528. American Group provides specialized in-home service for all Italian models with genuine spare parts and certified warranty.",
          },
        },
        {
          "@type": "Question",
          name: "How to fix an Elba dishwasher that won’t fill with water?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This usually requires checking the inlet valve and the inlet hose connections. Call 01211114528 for a technician to inspect the pump, sensors, and restore operation quickly.",
          },
        },
        {
          "@type": "Question",
          name: "What does error code E4 mean on an Elba dishwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "E4 typically indicates a water leak or overflow in the base tray. A technician should locate the leak source and fix it—book a visit via 01211114528.",
          },
        },
        {
          "@type": "Question",
          name: "Can you repair a built-in Elba dishwasher without removing kitchen cabinets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We specialize in repairing built-in Elba dishwashers at home without damaging the kitchen unit or countertop. Call 01211114528.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Elba dishwasher not drying well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Weak drying is often caused by low rinse aid or an issue with the heater. Contact 01211114528 to check the electrical circuit and install genuine parts if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find genuine Elba dishwasher spare parts in Cairo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Genuine Elba dishwasher spare parts (pumps, spray arms, boards) are available at American Group. Call 01211114528 or message via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the warranty for Elba dishwasher repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide a certified warranty up to 12 months on repair work and replaced parts. For details call 01211114528.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Elba dishwasher noisy during operation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noise is commonly caused by worn motor bearings or clogged spray arms. Call 01211114528 for diagnosis and on-site repair.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a periodic maintenance appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call the unified service number 01211114528 to schedule preventive maintenance and avoid sudden breakdowns.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Elba dishwasher repair cost in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing starts with a technical inspection fee (deducted from the final repair cost). For an estimate call 01211114528.",
          },
        },
      ],
    },
  ],
});

// =====================
// FAQ Item (same UI)
// =====================

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

const DishwasherElbaEn = () => {
  const device = devicesDetailData["Dishwasher"];
  const { t, isRTL, localePath } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const jsonLd = useMemo(() => buildJsonLd(), []);

  const faqs = useMemo(
    () => [
      {
        q: "What is the authorized Elba Dishwasher Repair number in Egypt?",
        a: (
          <p>
            <span>The authorized </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba Dishwasher Repair</span>
            </a>
            <span>
              {" "}
              number is 01211114528. American Group provides professional home
              repair services for all Italian dishwasher models with genuine
              spare parts and official warranty.
            </span>
          </p>
        ),
      },
      {
        q: "What is the solution if my Elba dishwasher does not take in water?",
        a: (
          <p>
            <span>
              This issue usually requires inspection of the inlet valve, water
              hose connections, or internal pump system. You can request
              expert{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba Dishwasher Repair</span>
            </a>
            <span> by calling </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>01211114528</span>
            </a>
            <span> for immediate inspection and repair.</span>
          </p>
        ),
      },
      {
        q: "What does error code E4 mean on an Elba dishwasher?",
        a: (
          <p>
            <span>
              Error code E4 typically indicates water leakage or overflow inside
              the base of the machine. This requires urgent{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba Dishwasher Repair</span>
            </a>
            <span> to prevent further internal damage.</span>
          </p>
        ),
      },
      {
        q: "Can a built-in Elba dishwasher be repaired without dismantling the kitchen?",
        a: (
          <p>
            Error code E4 typically indicates water leakage or overflow inside
            the base of the machine. This requires urgent&nbsp;
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              Elba Dishwasher Repair
            </a>
            &nbsp;to prevent further internal damage.
            <span>Yes. We specialize in built-in </span>
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
              at home without damaging kitchen cabinets or countertops.
            </span>
          </p>
        ),
      },
      {
        q: "Why is my Elba dishwasher not drying dishes properly?",
        a: (
          <p>
            <span>
              Poor drying performance is often caused by a faulty heater or
              insufficient rinse aid. Contact our{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba Dishwasher Repair</span>
            </a>
            <span>
              {" "}
              team at 01211114528 for electrical inspection and genuine spare
              part replacement.
            </span>
          </p>
        ),
      },
      {
        q: "Where can I find genuine Elba dishwasher spare parts in Cairo?",
        a: (
          <p>
            <span>All genuine spare parts required for </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba Dishwasher Repair</span>
            </a>
            <span>
              , including pumps, spray arms, and electronic boards, are
              available through American Group.
            </span>
          </p>
        ),
      },
      {
        q: "How long is the warranty for Elba Dishwasher Repair?",
        a: (
          <p>
            <span>We provide up to 12 months official warranty on all </span>
            <a
              href="https://alba-eg.com/en/elba-dishwasher-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba Dishwasher Repair</span>
            </a>
            <span> services and replaced spare parts.</span>
          </p>
        ),
      },
      {
        q: "Why is my Elba dishwasher making loud noise during operation?",
        a: (
          <>
            <p>
              <span>
                Loud noise is usually caused by worn motor bearings or blocked
                spray arms. Professional{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> is required to diagnose and replace defective parts.</span>
            </p>
          </>
        ),
      },
      {
        q: "How can I contact Elba customer service to book preventive maintenance?",
        a: (
          <>
            <p>
              <span>You can contact the unified </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hotline</span>
              </a>
              <span>
                {" "}
                or call 01211114528 to schedule preventive maintenance.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "What are the Elba Dishwasher Repair prices for 2026?",
        a: (
          <>
            <p>
              <span>
                Prices start with a technical inspection fee that is deducted
                from the total repair cost. Call{" "}
              </span>
              <a
                href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <strong>01211114528</strong>
              </a>
              <span> now for a detailed quotation for your </span>
              <a
                href="https://alba-eg.com/en/elba-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
      },
    ],
    [],
  );

  if (!device) {
    return (
      <Layout>
        <SEOHead title="Device Not Found" />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Device Not Found</h1>
          <Link to={localePath("/device")}>
            <Button>Back to Devices</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const name = device.nameEn;
  const desc = device.descEn;
  const tips = device.tipsEn;

  const steps = [
    {
      num: "01",
      title: t("device.steps.1.title"),
      desc: t("device.steps.1.desc"),
    },
    {
      num: "02",
      title: t("device.steps.2.title"),
      desc: t("device.steps.2.desc"),
    },
    {
      num: "03",
      title: t("device.steps.3.title"),
      desc: t("device.steps.3.desc"),
    },
  ];

  // ✅ NEW: Sections = image + content (Cooker-like)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title: `Why Is Our Center the First Choice for Elba Dishwasher Repair in Egypt?`,
        body: (
          <>
            <p>
              <span>
                Dishwashers are sensitive appliances that require accurate
                diagnostics and professional handling. That is why our
                authorized center ranks among the top providers of{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> in Egypt.</span>
            </p>
            <p>
              <span>
                We rely on engineers specialized in Italian Elba technology,
                using advanced digital diagnostic equipment to detect faults
                precisely without random disassembly or unnecessary part
                replacement. Every{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                process begins with a full inspection of the electrical system,
                water circulation unit, drainage pump, sensors, and heating
                elements to ensure the real cause of the problem is identified
                correctly.
              </span>
            </p>
            <p>
              <span>
                When you contact us at 01211114528 or through the official{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-hotline">
                <span>Elba hotline</span>
              </a>
              <span>, you receive professional </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                service from a trusted maintenance center that guarantees full
                safety, fast execution, and long-term performance preservation
                for your appliance. You can also learn more about the brand
                through{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-egypt">
                <span>Elba Egypt</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: `${name} service and maintenance`,
          label: "Home Service",
        },
      },
      {
        title:
          "Immediate Elba Dishwasher Repair at Home with Genuine Spare Parts",
        body: (
          <>
            <p>
              <span>
                We understand how essential your dishwasher is in your daily
                kitchen routine. That is why we provide fully home-based{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                , eliminating the need to move the appliance or risk furniture
                damage.
              </span>
            </p>
            <p>
              <span>
                Our team arrives in fully equipped service vehicles carrying all
                necessary tools and genuine Italian spare parts required for
                professional{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>, including:</span>
            </p>
            <ul>
              <li>
                <span>Drain pumps</span>
              </li>
              <li>
                <span>Circulation motors</span>
              </li>
              <li>
                <span>Spray arms</span>
              </li>
              <li>
                <span>Inlet valves</span>
              </li>
              <li>
                <span>Sensors</span>
              </li>
              <li>
                <span>Heating elements</span>
              </li>
              <li>
                <span>Electronic control boards</span>
              </li>
            </ul>
            <p>
              <span>We install only original components during every </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                service to restore your appliance to factory-level condition and
                prevent repeated breakdowns.
              </span>
            </p>
            <p>
              <span>To request an expert technician for certified </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                , call 01211114528 now and enjoy complete peace of mind.
              </span>
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Elba dishwasher common faults and repairs",
          label: "Diagnostics",
        },
      },
      {
        title:
          "Certified Elba Dishwasher Repair for Built-in and Free-Standing Models",
        body: (
          <>
            <p>
              <span>
                Whether you own a free-standing dishwasher or an integrated
                built-in model, we provide comprehensive{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> solutions for 10-place and 14-place settings models.</span>
            </p>
            <p>
              <span>If you own an integrated model, you can also review </span>
              <a href="https://alba-eg.com/en/elba-built-in-dishwasher-repair">
                <span>Elba built-in Dishwasher Repair</span>
              </a>
              <span> for specialized service inside kitchen cabinets.</span>
            </p>
            <p>
              <span>
                Built-in dishwashers require special expertise to avoid damaging
                cabinets or countertops during removal and reinstallation. Our
                technicians are trained specifically for safe and
                professional{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                inside kitchen units without dismantling unnecessary parts.
              </span>
            </p>
            <p>
              <span>
                Our service includes an official written warranty on all{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                work and replaced spare parts, ensuring free reinspection if
                needed within the warranty period.
              </span>
            </p>
            <p>
              <span>Book your service appointment through the unified </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> number 01211114528.</span>
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Common Elba cooker maintenance Problems and Fast Solutions",
          label: "Genuine Parts",
        },
      },
      {
        title: "Common Problems That Require Elba Dishwasher Repair",
        body: (
          <>
            <p>
              <span>
                If you experience any of the following issues, you need
                professional{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> immediately:</span>
            </p>
            <ul>
              <li>
                <span>Dishwasher not taking in water</span>
              </li>
              <li>
                <span>Dishwasher not draining properly</span>
              </li>
              <li>
                <span>Water leakage under the machine</span>
              </li>
              <li>
                <span>Error codes appearing on the digital display</span>
              </li>
              <li>
                <span>Weak washing performance</span>
              </li>
              <li>
                <span>Dishes not drying completely</span>
              </li>
              <li>
                <span>Loud noise during operation</span>
              </li>
            </ul>
            <p>
              <span>
                Our technicians perform a complete diagnostic procedure before
                starting the{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                to ensure accurate troubleshooting and efficient repair from the
                first visit.
              </span>
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Fast in-home Elba dishwasher repair across Egypt",
          label: "Fast Visit",
        },
      },
      {
        title:
          "Elba Dishwasher Repair Troubleshooting Guide from Certified Experts",
        body: (
          <>
            <p>
              <span>Professional </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>
                {" "}
                does not end with fixing the problem. Our team provides
                customers with preventive maintenance guidance to reduce future
                breakdowns.
              </span>
            </p>
            <p>
              <span>After completing your </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span>, we guide you on:</span>
            </p>
            <ul>
              <li>
                <span>Proper filter cleaning</span>
              </li>
              <li>
                <span>Correct use of dishwasher salt</span>
              </li>
              <li>
                <span>Proper rinse aid levels</span>
              </li>
              <li>
                <span>Regular inspection of spray arms</span>
              </li>
              <li>
                <span>Preventing limescale buildup</span>
              </li>
            </ul>
            <p>
              <span>
                This approach ensures your dishwasher continues operating
                efficiently long after the{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> service is completed.</span>
            </p>
            <p>
              <span>
                If you also need service for other kitchen appliances, you can
                review{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-oven-maintenance">
                <span>Elba oven maintenance</span>
              </a>
              <span>, </span>
              <a href="https://alba-eg.com/en/elba-cooker-maintenance">
                <span>Elba cooker maintenance</span>
              </a>
              <span>, and </span>
              <a href="https://alba-eg.com/en/elba-hood-maintenance">
                <span>Elba hood maintenance</span>
              </a>
              <span>.</span>
            </p>
            <p>
              <span>Do not hesitate to contact our </span>
              <a href="https://alba-eg.com/en/elba-dishwasher-repair">
                <span>Elba Dishwasher Repair</span>
              </a>
              <span> support team at </span>
              <a href="https://api.whatsapp.com/send/?phone=201211114528&amp;text&amp;type=phone_number&amp;app_absent=0">
                <span>01211114528</span>
              </a>
              <span>
                {" "}
                or message us on WhatsApp for an initial diagnosis of your
                issue.
              </span>
            </p>
          </>
        ),
        image: {
          src: device.deviceImage,
          alt: "Fast in-home Elba dishwasher repair across Egypt",
          label: "Fast Visit",
        },
      },
    ],
    [device],
  );

  return (
    <Layout>
      <Helmet>
        <title>{SEO_META_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={SEO_META_DESCRIPTION} />
        <link rel="canonical" href="https://alba-eg.com/en/dishwasher" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <SEOHead title={SEO_META_TITLE} description={SEO_META_DESCRIPTION} />

      {/* Hero (Cooker-like) */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={device.heroImage}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2">
                In-Home Service
              </p>

              <h1
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight",
                  isRTL ? "font-cairo" : "font-sans",
                )}
              >
                {SEO_H1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Book {name} service now — professional in-home repair with
                genuine parts and certified warranty.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto"
                >
                  {t("hero.cta.request")}
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_WA_ME}`}
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

      {/* Steps (unchanged) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            {t("device.steps.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-md hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ NEW: Sections (each = content + image card) */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            {name} Repair Service
          </h2>

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
                    <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {s.title}
                      </h3>

                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                          {s.body}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button
                          size="lg"
                          onClick={() => setIsServicePopupOpen(true)}
                          className="gap-2 w-full sm:w-auto"
                        >
                          {t("hero.cta.request")}
                        </Button>

                        <a
                          href={`https://wa.me/${WHATSAPP_WA_ME}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button
                            size="lg"
                            variant="outline"
                            className="gap-2 w-full"
                          >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                          </Button>
                        </a>

                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="w-full sm:w-auto"
                        >
                          <Button
                            size="lg"
                            variant="outline"
                            className="gap-2 w-full"
                          >
                            <Phone className="w-5 h-5" />
                            {PHONE_DISPLAY}
                          </Button>
                        </a>
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
                    <div className="lg:sticky lg:top-24">
                      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                        <div className="p-4 md:p-5">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <p className="text-sm text-muted-foreground">
                              {name}
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

                          <div className="flex gap-1 mt-4 justify-center">
                            {[1, 2, 3, 4, 5].map((k) => (
                              <span key={k} className="text-yellow-500 text-xl">
                                ★
                              </span>
                            ))}
                          </div>

                          <p className="text-center text-sm text-muted-foreground mt-2">
                            https://www.elba-eg.com
                          </p>

                          <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <Button
                              onClick={() => setIsServicePopupOpen(true)}
                              className="w-full"
                            >
                              {t("hero.cta.request")}
                            </Button>

                            <a
                              href={`https://wa.me/${WHATSAPP_WA_ME}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full"
                            >
                              <Button
                                variant="outline"
                                className="w-full gap-2"
                              >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
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
                        https://www.elba-eg.com
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips (unchanged) */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-foreground to-foreground/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              💡 Tips for {name}
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
              Need help now? Contact us for fast in-home service.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                {t("hero.cta.request")}
              </Button>

              <a
                href={`https://wa.me/${WHATSAPP_WA_ME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (unchanged UI) */}
      {/* <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8 text-left">
              FAQs about Elba Dishwasher Repair (Issues & Fixes)
            </h2>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <FaqItem key={i} question={f.q} answer={f.a} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a href={`tel:${PHONE_TEL}`}>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </Button>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_WA_ME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>

              <Button
                onClick={() => setIsServicePopupOpen(true)}
                className="w-full sm:w-auto"
              >
                {t("hero.cta.request")}
              </Button>
            </div>
          </div>
        </div>
      </section> */}
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
        domain="https://elba-eg.com"
      />
    </Layout>
  );
};

export default DishwasherElbaEn;
