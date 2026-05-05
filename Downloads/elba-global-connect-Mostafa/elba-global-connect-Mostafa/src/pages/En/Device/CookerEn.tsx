import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import cooker1 from "@/assest/elba-cooker.png.png";

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

const PAGE_URL = "https://alba-eg.com/elba-cooker-service";
const SITE_URL = "https://alba-eg.com/";
const BRAND_URL = "https://americangroup-eg.com/";
const DOMAIN = "https://elba-eg.com";

const LINK_CLASS =
  "text-primary hover:text-primary/80 font-bold hover:underline";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

type FaqItem = {
  q: string;
  aText: string; // ✅ schema text
  aJSX: React.ReactNode; // ✅ UI
};

const CookerEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Cooker Maintenance in Egypt | Call Now  ${PHONE_DISPLAY}`;
  const metaDescription = `Book Elba cooker maintenance in Egypt with the official service center. Fast home repair for built-in cookers, 5 burner cookers, and Elba hobs. Call 01211114528 now for immediate support.`;

  // ✅ Sections (6 blocks) + image card
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "Elba Cooker Maintenance Number – Direct Contact Without Waiting",
        body: (
          <>
            \
            <p>
              <span>
                If you are looking for a fast and reliable response, contact
                the{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                number 01211114528 to book immediate home service in Egypt
                without long waiting times.
              </span>
            </p>
            <p>
              <span>
                Your request is registered during the same call, and a suitable
                appointment is scheduled based on your location. Our team sends
                a specialized technician experienced in Elba cooker maintenance,
                equipped with modern diagnostic tools to accurately detect the
                issue from the first visit. This reduces repeat problems and
                saves both time and repair costs.
              </span>
            </p>
            <p>
              <span>
                For official brand information and authorized service details,
                visit{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-egypt"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba Egypt</span>
              </a>
              <span>
                . If you want immediate booking support, you can also contact
                the{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hotline</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: cooker1,
          alt: "Elba cooker service at home",
          label: "Hotline",
        },
      },
      {
        title:
          "Elba Cooker Maintenance Center with Genuine Spare Parts and Written Warrantyy",
        body: (
          <>
            <p>
              <span>
                What makes our Elba cooker maintenance service different is our
                commitment to using original spare parts that match manufacturer
                specifications. This ensures stable performance and extends the
                lifespan of your cooker after repair.
              </span>
            </p>
            <p>
              <span>
                When you call 01211114528, all repair details and costs are
                clearly explained before starting the work for full
                transparency. We also provide a written warranty on replaced
                parts and repair services, giving you complete peace of mind
                after your{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span> service is completed.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Elba Cooker Maintenance Center with Genuine Spare Parts and Written Warranty",
          label: "Warranty",
        },
      },
      {
        title: "Common Elba cooker maintenance Problems and Fast Solutions",
        body: (
          <>
            <p>
              <span>
                The most common issues requiring Elba cooker maintenance include
                weak flame, ignition problems, gas leakage, or low oven
                efficiency.
              </span>
            </p>
            <p>
              <span>
                Our technicians are fully trained to handle these problems using
                precise gas detection and safety tools to guarantee maximum
                safety. Once you contact the Elba cooker maintenance number
                01211114528, a technician specialized in your specific issue
                will be assigned to restore your appliance&rsquo;s performance
                quickly and efficiently.
              </span>
            </p>
            <p>
              <span>
                If your problem is mainly related to the oven section, you can
                review{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-oven-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba oven maintenance</span>
              </a>
              <span>. If you need kitchen ventilation support, visit </span>
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
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Common Elba cooker maintenance Problems and Fast Solutions",
          label: "Diagnostics",
        },
      },
      {
        title:
          "Built-In Elba Cooker Maintenance with Maximum Safety and Precision",
        body: (
          <>
            <p>
              <span>
                Built-in models require special expertise during removal and
                installation to avoid damaging kitchen units or gas connections.
                Our Elba cooker maintenance team includes specialists in
                built-in appliances to ensure safe and accurate service.
              </span>
            </p>
            <p>
              <span>
                Before the visit, the technician is fully prepared with the
                required tools and spare parts, helping complete the Elba cooker
                maintenance job in one visit without unnecessary delays. If you
                need service specifically for integrated models, visit{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker repair</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "Built-In Elba Cooker Maintenance with Maximum Safety and Precision",
          label: "Built-in",
        },
      },
      {
        title:
          "5 Burner Elba Cooker Maintenance with Perfect Heat Distribution",
        body: (
          <>
            <p>
              <span>
                A 5 burner model requires precise gas regulator calibration and
                balanced heat distribution. Our Elba cooker maintenance service
                includes cleaning blocked burners, fixing ignition systems, and
                adjusting flame strength using advanced calibration tools.
              </span>
            </p>
            <p>
              <span>By calling 01211114528, you ensure that your </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                request is handled by a technician experienced specifically in 5
                burner Elba cookers, restoring optimal performance and improving
                gas efficiency.
              </span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
          alt: "5 Burner Elba Cooker Maintenance with Perfect Heat Distribution",
          label: "5-Burner",
        },
      },
      {
        title: "Fast Customer Service for Elba Cooker Maintenance in Egypt",
        body: (
          <>
            <p>
              <span>Our customer service team is ready to receive </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span> requests quickly and efficiently.</span>
            </p>
            <p>
              <span>
                When you call 01211114528, your request is handled immediately
                and a technician visit is scheduled based on your location in
                Cairo, Giza, Alexandria, or Qalyubia.
              </span>
            </p>
            <p>
              <span>
                Our goal is to provide a professional and organized Elba cooker
                maintenance experience in Egypt that restores your appliance
                safely and efficiently.
              </span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
          alt: "Fast Customer Service for Elba Cooker Maintenance in Egypt",
          label: "Support",
        },
      },
    ],
    [],
  );

  // ✅ FAQ with links (aText + aJSX)
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "How can I contact the Elba cooker maintenance number for immediate service?",
        aText: `Call ${PHONE_DISPLAY} to book a fast home service in Egypt, or message us on WhatsApp.`,
        aJSX: (
          <>
            <p>
              <span>If you need urgent repair, you can call the </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                number 01211114528 directly to book fast home service in Egypt.
                The issue details are registered during the same call, and the
                nearest available appointment is scheduled for a specialized
                technician. The required spare parts are prepared before arrival
                to reduce repair time and ensure the problem is solved from the
                first visit through professional Elba cooker maintenance
                service.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "How do I book service through the authorized Elba cooker maintenance number?",
        aText: `To book authorized Elba cooker maintenance, contact 01211114528 and explain the issue in detail, whether it is a weak flame, oven malfunction, or ignition problem. A specialized technician is assigned based on your appliance type to ensure accurate diagnosis and safe repair using genuine spare parts, with a warranty provided on the service.`,
        aJSX: (
          <>
            <p>
              <span>To book authorized </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                , contact 01211114528 and explain the issue in detail, whether
                it is a weak flame, oven malfunction, or ignition problem. A
                specialized technician is assigned based on your appliance type
                to ensure accurate diagnosis and safe repair using genuine spare
                parts, with a warranty provided on the service.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "What is the Elba cooker maintenance customer service number for fast repair?",
        aText: `It is recommended to contact the Elba cooker maintenance customer service number 01211114528 as soon as you notice any issue such as gas leakage, weak heat, or the oven not operating properly. The support team immediately registers your request, schedules a home visit, and follows up until the Elba cooker maintenance process is fully completed.`,
        aJSX: (
          <>
            <p>
              <span>It is recommended to contact the </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                customer service number 01211114528 as soon as you notice any
                issue such as gas leakage, weak heat, or the oven not operating
                properly. The support team immediately registers your request,
                schedules a home visit, and follows up until the Elba cooker
                maintenance process is fully completed.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "What is the Elba hotline for Elba cooker maintenance in Cairo?",
        aText: `In case of a sudden malfunction, you can call the Elba hotline 01211114528 to request immediate assistance for Elba cooker maintenance. A trained technician equipped with modern diagnostic tools will be dispatched to detect the source of the problem and complete the repair safely and efficiently without moving the appliance from your home.`,
        aJSX: (
          <>
            <p>
              <span>In case of a sudden malfunction, you can call the </span>
              <a href="https://alba-eg.com/en/elba-hotline">
                <span>Elba hotline</span>
              </a>
              <span> 01211114528 to request immediate assistance for </span>
              <a href="https://alba-eg.com/en/elba-cooker-maintenance">
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                . A trained technician equipped with modern diagnostic tools
                will be dispatched to detect the source of the problem and
                complete the repair safely and efficiently without moving the
                appliance from your home.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "How can I request Elba cooker maintenance in Cairo?",
        aText: `To request Elba cooker maintenance in Egypt, call 01211114528 and provide your exact location, whether in Cairo, Giza, or Alexandria. A home visit will be arranged as soon as possible, with warranty coverage on replaced parts and the completed Elba cooker maintenance service to ensure full customer satisfaction.`,
        aJSX: (
          <>
            <p>
              <span>To request </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                in Egypt, call 01211114528 and provide your exact location,
                whether in Cairo, Giza, or Alexandria. A home visit will be
                arranged as soon as possible, with warranty coverage on replaced
                parts and the completed{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span> service to ensure full customer satisfaction.</span>
            </p>
          </>
        ),
      },
      {
        q: "When do I need built-in Elba built-in cooker repair?",
        aText: `You need built-in Elba built-in cooker repair if you experience ignition issues, weak burner flame, or electrical switch malfunctions. After contacting 01211114528, a technician specialized in built-in appliances will be assigned to ensure safe removal and installation without affecting kitchen units or gas connections, while also delivering professional Elba cooker maintenance.`,
        aJSX: (
          <>
            <p>
              <span>You need built-in </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker repair</span>
              </a>
              <span>
                {" "}
                if you experience ignition issues, weak burner flame, or
                electrical switch malfunctions. After contacting 01211114528, a
                technician specialized in built-in appliances will be assigned
                to ensure safe removal and installation without affecting
                kitchen units or gas connections, while also delivering
                professional{" "}
              </span>
              <a href="https://alba-eg.com/en/elba-cooker-maintenance">
                <span>Elba cooker maintenance</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
      },
      {
        q: "What situations require urgent 5 burner Elba cooker maintenance?",
        aText: `You may require urgent Elba cooker maintenance for a 5 burner model if you notice uneven heat distribution, a blocked burner, or a faulty gas regulator. By calling 01211114528, a technician experienced in 5 burner Elba cooker maintenance will be sent to properly adjust the burners and restore balanced thermal performance.`,
        aJSX: (
          <>
            <p>
              <span>
                You may require urgent Elba cooker maintenance for a 5 burner
                model if you notice uneven heat distribution, a blocked burner,
                or a faulty gas regulator. By calling 01211114528, a technician
                experienced in 5 burner{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                will be sent to properly adjust the burners and restore balanced
                thermal performance.
              </span>
            </p>
          </>
        ),
      },
      {
        q: "How can I book Elba hob maintenance at home?",
        aText: `Call ${PHONE_DISPLAY} and describe the fault (weak ignition, clogged burner, sensor issues). A specialist will inspect, clean internal parts, and calibrate performance for safe operation.`,
        aJSX: (
          <>
            <p>
              <span>To book home </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                {" "}
                for your Elba hob, call 01211114528 and describe the issue,
                whether it is weak ignition, burner blockage, or sensor
                malfunction. A specialized technician will perform a detailed
                inspection, internal cleaning, and performance adjustment to
                ensure your hob operates safely and efficiently.
              </span>
            </p>
            <p>
              <span>
                <br />
                For more appliance services, you can also explore{" "}
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
                href="https://alba-eg.com/en/elba-hood-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hood maintenance</span>
              </a>
              <span>, </span>
              <a
                href="https://alba-eg.com/en/elba-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba dishwasher repair</span>
              </a>
              <span>, </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-oven-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in oven repair</span>
              </a>
              <span>, </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-hood-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in hood repair</span>
              </a>
              <span>, and </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in dishwasher repair</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
      },
    ],
    [],
  );

  // ✅ Schemas (FAQ uses aText)
  const schemas = useMemo(() => {
    const logo =
      "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png";

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Main Elba Cooker Service Center in Egypt",
      url: PAGE_URL,
      image: logo,
      logo,
      telephone: PHONE_TEL,
      areaServed: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "City", name: "Cairo" },
        { "@type": "City", name: "Giza" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          contactType: "customer service",
          areaServed: "EG",
          availableLanguage: ["en"],
        },
      ],
      sameAs: [`https://wa.me/${WHATSAPP_WA}`],
      description: metaDescription,
    };

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Main Elba Cooker Service Center in Egypt",
      url: SITE_URL,
      logo,
      telephone: PHONE_TEL,
      sameAs: [`https://wa.me/${WHATSAPP_WA}`, BRAND_URL],
    };

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ELBA EGYPT - Elba Service in Egypt",
      url: SITE_URL,
      inLanguage: "en",
    };

    const webpage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Elba Cooker Service in Egypt | Hotline ${PHONE_DISPLAY}`,
      url: PAGE_URL,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", url: SITE_URL },
      about: { "@type": "Thing", name: "Elba Cooker Service" },
      description: metaDescription,
    };

    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Elba Cooker Service in Egypt",
      serviceType: "Elba Cooker Repair & Maintenance",
      provider: {
        "@type": "LocalBusiness",
        name: "Main Elba Cooker Service Center in Egypt",
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
      description:
        "Certified Elba cooker service in Egypt for built-in cookers, 5-burner models, and Elba hobs with 24/7 support.",
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

    return [localBusiness, organization, website, webpage, service, faqPage];
  }, [faqs, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

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
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop"
          alt="Elba Cooker Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Welcome to Elba Cooker Maintenance in Egypt{" "}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Certified home service, genuine spare parts, and written
                warranty — call <strong>{PHONE_DISPLAY}</strong>.
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
                Hotline:{" "}
                <span className="font-semibold text-white">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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

export default CookerEn;
