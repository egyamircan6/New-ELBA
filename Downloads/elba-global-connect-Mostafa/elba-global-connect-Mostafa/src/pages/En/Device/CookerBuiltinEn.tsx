import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import cookerImg from "@/assest/elba-cookerbuiltin.jpeg"; // عدّل لو الاسم مختلف

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
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/elba-built-in-cooker-service"; // ✅ عدّل للـ URL الحقيقي عندك
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS =
  "text-primary hover:text-primary/80 font-bold hover:underline";

type SectionItem = {
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string; label?: string };
};

type FaqItem = {
  q: string;
  a: React.ReactNode; // UI
  aText: string; // Schema text
};

const CookerBuiltinElbaEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `Elba Built-in Cooker Service in Egypt | In-Home Repair | Call ${PHONE_DISPLAY}`;
  const metaDescription = `Need Elba built-in cooker repair in Egypt? American Group provides fast in-home service with genuine spare parts and a certified warranty. Call now: ${PHONE_DISPLAY}.`;

  const introH1 = "Best Elba built-in cooker Repair Service in Egypt";

  // ✅ Sections (Text + Image per section like Hood)
  const sections: SectionItem[] = useMemo(
    () => [
      {
        title:
          "Why trust our center as the best Elba built-in cooker Repair center in Egypt?",
        body: (
          <>
            <p>
              <span>
                Trust is the foundation when choosing a service provider to
                repair your home appliances, and that is exactly what we deliver
                through our{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-egypt"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba service in Egypt</span>
              </a>
              <span>
                . We are not just a temporary repair shop. We are a specialized
                entity focused on{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker Repair</span>
              </a>
              <span>
                , with years of experience handling complex Italian
                technologies.
              </span>
            </p>
            <p>
              <span>
                What makes our approach different is our strict commitment to
                international inspection standards. We do not only fix the
                visible issue. We perform a complete safety inspection and check
                connections to ensure the problem does not return. When you
                contact us through the{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-hotline"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba hotline</span>
              </a>
              <span> or call </span>
              <strong>01211114528</strong>
              <span>
                , you guarantee service from experienced Elba appliance
                specialists who prioritize customer satisfaction and home safety
                above everything else.
              </span>
            </p>
          </>
        ),
        image: {
          src: cookerImg,
          alt: "Elba built-in cooker service",
          label: "Certified",
        },
      },
      {
        title: "Elba built-in cooker Repair for 90 cm gas models",
        body: (
          <>
            <p>
              <span>
                Built-in appliances, especially 90 cm models, require special
                attention because of their precise design and integrated
                installation inside kitchen units. At American Group, we are the
                leading experts in{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span> and </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker Repair</span>
              </a>
              <span> for both gas and electric versions.</span>
            </p>
            <p>
              <span>
                Our team is trained to remove and reinstall these built-in units
                professionally without damaging marble surfaces or kitchen
                cabinets. Whether you are dealing with weak gas flames or a
                fault in the automatic ignition system, our{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker Repair</span>
              </a>
              <span>
                {" "}
                solutions restore your appliance to its original Italian
                performance as soon as you call{" "}
              </span>
              <strong>01211114528</strong>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop",
          alt: "In-home repair service",
          label: "In-Home",
        },
      },
      {
        title: "Professional solutions for Elba cooker burner faults at home",
        body: (
          <>
            <p>
              <span>
                Burners stopping or oven performance dropping are common
                problems that disrupt your daily routine. That is why we provide
                immediate and comprehensive{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker Repair</span>
              </a>
              <span> service at home.</span>
            </p>
            <p>
              <span>
                American Group operates a fleet of fully equipped vehicles
                across Cairo and Giza to reach you quickly and complete your
                repair accurately. Our technicians use advanced electronic
                diagnostic tools to identify the cause of the fault, whether it
                is the gas regulator, sensors, or switches. If you also need
                related services like{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-oven-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba oven maintenance</span>
              </a>
              <span> or full </span>
              <a
                href="https://alba-eg.com/en/elba-cooker-maintenance"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba cooker maintenance</span>
              </a>
              <span>
                , we can handle everything in one visit. Do not hesitate to call
                the unified service number{" "}
              </span>
              <strong>01211114528</strong>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop",
          alt: "Professional solutions for Elba cooker burner faults at home",
          label: "Genuine Parts",
        },
      },
      {
        title: "100% warranty on genuine Elba cooker spare parts",
        body: (
          <>
            <p>
              <span>
                One of the biggest customer concerns is receiving counterfeit
                parts that cause additional damage later. With our specialized
                center, we are committed to providing imported genuine spare
                parts that support effective{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in cooker Repair</span>
              </a>
              <span> and ensure full compatibility with your exact model.</span>
            </p>
            <p>
              <span>
                Most importantly, you receive an official warranty certificate
                for every replaced part, which guarantees your right to free
                service if any issue appears. To request trusted spare parts or
                ask about Elba appliance services, contact us on WhatsApp or
                call{" "}
              </span>
              <strong>01211114528</strong>
              <span>
                {" "}
                directly. You can also review other Elba built-in services such
                as{" "}
              </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-oven-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in oven repair</span>
              </a>
              <span> and </span>
              <a
                href="https://alba-eg.com/en/elba-built-in-hood-repair"
                className={LINK_CLASS}
                target="_blank"
                rel="noreferrer"
              >
                <span>Elba built-in hood repair</span>
              </a>
              <span>.</span>
            </p>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Cooker safety inspection",
          label: "Safety Check",
        },
      },
      {
        title: "Related Elba Services",
        body: (
          <>
            <ul>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-hotline"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba hotline</span>
                </a>
                <span> for booking and urgent support</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-cooker-maintenance"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba cooker maintenance</span>
                </a>
                <span> for periodic checks and safety calibration</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-oven-maintenance"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba oven maintenance</span>
                </a>
                <span> for stable baking and safe ignition</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-hood-maintenance"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba hood maintenance</span>
                </a>
                <span> to improve suction and reduce kitchen odors</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-dishwasher-repair"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba dishwasher repair</span>
                </a>
                <span> for cleaning and drainage issues</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-built-in-dishwasher-repair"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba built-in dishwasher repair</span>
                </a>
                <span> for integrated models</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-built-in-cooker-repair"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba built-in cooker repair</span>
                </a>
                <span> for 60/90 cm built-in cookers</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-built-in-oven-repair"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba built-in oven repair</span>
                </a>
                <span> for heating and thermostat faults</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-built-in-hood-repair"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba built-in hood repair</span>
                </a>
                <span> for motor and control problems</span>
              </li>
              <li>
                <a
                  href="https://alba-eg.com/en/elba-egypt"
                  className={LINK_CLASS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Elba Egypt</span>
                </a>
                <span> main service page</span>
              </li>
            </ul>
          </>
        ),
        image: {
          src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop",
          alt: "Cooker safety inspection",
          label: "Safety Check",
        },
      },
    ],
    [],
  );

  // ✅ FAQ (UI JSX + aText للـ Schema)
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "What is the authorized Elba built-in cooker Repair number in Egypt?",
        a: (
          <p>
            The authorized number is available through the{" "}
            <a
              href="https://alba-eg.com/en/elba-hotline"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              Elba hotline
            </a>
            . American Group provides complete technical support and immediate
            fault reporting for all Elba appliance maintenance services. Call
            now: <strong>01211114528</strong>.
          </p>
        ),
        aText: `The certified service number is ${PHONE_DISPLAY}. We book fast in-home visits for Elba built-in cookers and handle fault reports and genuine spare parts replacement.`,
      },
      {
        q: "Who is the authorized Elba built-in cooker Repair provider in Cairo?",
        a: (
          <p>
            <span>American Group is a specialized provider of </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba built-in cooker Repair</span>
            </a>
            <span>
              {" "}
              in Cairo and Giza, covering all neighborhoods with equipped
              service vehicles. Request service directly through{" "}
            </span>
            <strong>01211114528</strong>
            <span>.</span>
          </p>
        ),
        aText: `Yes. Our technicians use safe built-in procedures and professional tools to service units without harming cabinets or countertops. Call ${PHONE_DISPLAY}.`,
      },
      {
        q: "Where can I find a professional Elba built-in cooker Repair technician?",
        a: (
          <p>
            <span>You can request an expert technician through </span>
            <a
              href="https://alba-eg.com/en/elba-egypt"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba service in Egypt</span>
            </a>
            <span> by calling </span>
            <strong>01211114528</strong>
            <span>
              . Our technicians handle built-in appliances safely without
              affecting kitchen d&eacute;cor or marble.
            </span>
          </p>
        ),
        aText: `Weak flame is often caused by clogged jets, grease buildup, or gas regulator issues. Call ${PHONE_DISPLAY} for safe cleaning and gas pressure calibration.`,
      },
      {
        q: "How can I contact Elba customer service in Egypt for urgent inquiries?",
        a: (
          <p>
            <span>For urgent inquiries, use the </span>
            <a
              href="https://alba-eg.com/en/elba-hotline"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba hotline</span>
            </a>
            <span> or call </span>
            <strong>01211114528</strong>
            <span>. The team can schedule preventive </span>
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
              appointments and provide usage advice to extend the lifespan of
              your Italian appliances.
            </span>
          </p>
        ),
        aText: `Turn off the gas supply immediately, ventilate the area, and avoid flames or electrical switches. Then call ${PHONE_DISPLAY} for urgent inspection.`,
      },
      {
        q: "Why is my Elba cooker flame weak and how can it be strengthened?",
        a: (
          <p>
            <span>
              Weak flame is usually caused by clogged burners or grease buildup.
              For a professional solution, book{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-cooker-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba cooker maintenance</span>
            </a>
            <span> or request </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba built-in cooker Repair</span>
            </a>
            <span> by calling </span>
            <strong>01211114528</strong>
            <span>.</span>
          </p>
        ),
        aText: `This is commonly related to a safety sensor (thermocouple) issue or a blocked gas outlet. Call ${PHONE_DISPLAY} for diagnosis.`,
      },
      {
        q: "What causes the cooker oven flame to go out suddenly during operation?",
        a: (
          <p>
            <span>
              The main cause is a faulty safety sensor or a dirty oven gas
              outlet. This issue requires detailed inspection by a specialist.
              If the issue is oven-related, consider{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-oven-maintenance"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba oven maintenance</span>
            </a>
            <span> along with service booking via </span>
            <strong>01211114528</strong>
            <span>.</span>
          </p>
        ),
        aText: `Yes. We use genuine imported parts to match Elba specifications for safety and performance. Call ${PHONE_DISPLAY} to book.`,
      },
      {
        q: "Can I fix the safety sensor myself in Elba appliances??",
        a: (
          <p>
            <span>
              It is not recommended due to gas risks. The safest option is to
              request a certified technician via the{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-hotline"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba hotline</span>
            </a>
            <span> or call </span>
            <strong>01211114528</strong>
            <span> for safe diagnostics and genuine parts</span>
          </p>
        ),
        aText: `We provide a certified warranty on repair work and replaced parts (up to 12 months depending on the part and fault). Call ${PHONE_DISPLAY}.`,
      },
      {
        q: "Are the Elba spare parts installed by American Group genuine?",
        a: (
          <p>
            <span>
              Yes. All spare parts are genuine and imported to ensure perfect
              compatibility with Elba services. For documentation and warranty
              proof, call{" "}
            </span>
            <strong>01211114528</strong>
            <span>. You can also check other service pages like </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-oven-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba built-in oven repair</span>
            </a>
            <span> and </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-hood-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba built-in hood repair</span>
            </a>
            <span>.</span>
          </p>
        ),
        aText: `Genuine parts ensure safe gas operation, stable performance, and longer lifespan. Non-genuine parts may cause faults and safety risks. We use genuine parts only. Call ${PHONE_DISPLAY}.`,
      },
      {
        q: "How long is the warranty for Elba built-in cooker Repair at your center?",
        a: (
          <p>
            <span>
              Warranty ranges from 6 months up to one full year on replaced
              spare parts, documented with an official invoice. To book through
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
            <span>, call </span>
            <strong>01211114528</strong>
          </p>
        ),
        aText: `Pricing starts with a technical inspection fee (often deducted from the final repair cost). For an estimate based on your model and issue, call ${PHONE_DISPLAY} or message on WhatsApp.`,
      },
      {
        q: "What is the difference between genuine and counterfeit spare parts for Elba appliances?",
        a: (
          <p>
            <span>
              Genuine parts ensure safe gas operation and stable performance,
              while counterfeit parts may damage circuits and reduce safety.
              That&rsquo;s why we rely on genuine parts within{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-built-in-cooker-repair"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba built-in cooker Repair</span>
            </a>
            <span>. Book service: </span>
            <strong>01211114528</strong>
            <span>.</span>
          </p>
        ),
        aText: `Pricing starts with a technical inspection fee (often deducted from the final repair cost). For an estimate based on your model and issue, call ${PHONE_DISPLAY} or message on WhatsApp.`,
      },
      {
        q: "What are the Elba built-in cooker Repair prices for 2026 in Egypt?",
        a: (
          <p>
            <span>
              Prices start with an inspection fee that is deducted from the
              total repair cost. For an estimate, contact us via the{" "}
            </span>
            <a
              href="https://alba-eg.com/en/elba-hotline"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <span>Elba hotline</span>
            </a>
            <span> or call </span>
            <strong>01211114528</strong>
            <span>.</span>
          </p>
        ),
        aText: `Pricing starts with a technical inspection fee (often deducted from the final repair cost). For an estimate based on your model and issue, call ${PHONE_DISPLAY} or message on WhatsApp.`,
      },
    ],
    [],
  );

  // ✅ JSON-LD @graph واحد
  const schemaGraph = useMemo(() => {
    const logo =
      "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png";

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "American Group - Elba Service in Egypt",
          url: BRAND_URL,
          logo: { "@type": "ImageObject", url: logo },
          sameAs: [`https://wa.me/${WHATSAPP_WA}`],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: PHONE_TEL,
              contactType: "customer service",
              areaServed: "EG",
              availableLanguage: ["en"],
            },
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}#localbusiness`,
          name: "Certified Elba Built-in Cooker Service Center in Egypt",
          url: PAGE_URL,
          image: logo,
          telephone: PHONE_TEL,
          areaServed: [{ "@type": "Country", name: "Egypt" }],
          address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
          },
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
          sameAs: [`https://wa.me/${WHATSAPP_WA}`, BRAND_URL],
          description: metaDescription,
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          url: SITE_URL,
          name: "Elba Service in Egypt",
          inLanguage: "en",
          publisher: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: metaTitle,
          description: metaDescription,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_URL}#website` },
          publisher: { "@id": `${SITE_URL}#organization` },
          about: [
            { "@type": "Thing", name: "Elba built-in cooker service" },
            { "@type": "Thing", name: "Elba cooker repair" },
            { "@type": "Thing", name: "Genuine Elba spare parts" },
          ],
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "Elba Built-in Cooker Service in Egypt",
          serviceType: "Cooker Repair Service",
          provider: { "@id": `${SITE_URL}#localbusiness` },
          areaServed: { "@type": "Country", name: "Egypt" },
          availableChannel: [
            {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: PHONE_TEL,
                contactType: "customer service",
              },
            },
            {
              "@type": "ServiceChannel",
              serviceUrl: `https://wa.me/${WHATSAPP_WA}`,
            },
          ],
          description:
            "Fast in-home Elba built-in cooker service in Egypt with genuine spare parts and certified warranty. Covers weak flame, ignition faults, oven shut-off, gas smell inspection, and safety calibration.",
        },
        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.aText },
          })),
        },
      ],
    };
  }, [faqs, metaTitle, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ✅ Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=700&fit=crop"
          alt="Elba Built-in Cooker Service"
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
                {introH1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Fast in-home repair — genuine spare parts and certified warranty
                for safe gas operation and stable performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className={cn(
                    "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                    "text-base md:text-lg px-7 md:px-8 w-full sm:w-auto",
                  )}
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
                    className={cn(
                      "border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2",
                      "text-base md:text-lg px-7 md:px-8 w-full",
                    )}
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
                            Elba Cooker (Built-in)
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
                      {DOMAIN}
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
            FAQs — Elba Built-in Cooker Service
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
        domain={DOMAIN}
      />
    </Layout>
  );
};

export default CookerBuiltinElbaEn;
