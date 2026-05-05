import React from "react";

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import DryerfaqEn from "../../faq/EN/DryerfaqEn";

export default function DryerEn() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bosch Dryer Repair in Egypt - Certified Maintenance Service
          </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
            Professional Bosch dryer repair using original spare parts and certified engineers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="tel:01211114528" className="bg-red-600 px-10 py-3 rounded-lg font-bold">
              Call Now
            </a>

            <a href="https://wa.me/201211114528" className="border border-red-700 px-10 py-3 rounded-lg">
              WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* ================= SERVICE SECTION ================= */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Bosch Dryer <span className="text-red-600">Service</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="rounded-xl shadow-xl" />

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Certified Bosch Dryer Repair Services
            </h3>

            <p className="text-gray-600 leading-[2] mb-6">
              We provide professional Bosch dryer maintenance in Egypt using advanced diagnostic tools,
              original spare parts, and certified engineers. We ensure full restoration of drying efficiency
              with long-term warranty and reliable performance.
            </p>

            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 text-white px-6 py-3 rounded-lg">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border px-6 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="px-6 max-w-5xl mx-auto space-y-6 text-gray-700 leading-[1.9]">

        <h2 className="text-2xl font-bold text-black">
          Bosch Dryer Repair: Certified Engineering Solutions
        </h2>

        <p>
          Maintaining a Bosch dryer requires high precision and advanced technical expertise.
          At our Bosch Egypt center, we apply strict German engineering standards to restore full efficiency.
        </p>

        <h3 className="text-xl font-semibold text-black">Why Choose Us?</h3>

        <ul className="space-y-3">
          <li>✔ Precision diagnostics using modern tools</li>
          <li>✔ 100% original Bosch spare parts</li>
          <li>✔ Expert engineers for complex electronic faults</li>
          <li>✔ Fast home service across Egypt</li>
        </ul>

        <p>
          We handle all dryer issues including heating failure, drum rotation problems, and sensor malfunctions.
        </p>

      </section>

      {/* ================= TIPS ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 bg-white/95 rounded-2xl max-w-3xl px-8 py-10 text-center">

          <h3 className="text-2xl font-bold mb-6">Dryer Maintenance Tips 💡</h3>

          <ul className="space-y-3">
            <li>✔ Clean lint filter regularly</li>
            <li>✔ Do not overload dryer</li>
            <li>✔ Ensure proper ventilation</li>
          </ul>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="p-5 border rounded-xl text-center">
            <img src={frame1} className="w-20 mx-auto" />
            <h3 className="font-bold mt-3">Repairs</h3>
          </div>

          <div className="p-5 border rounded-xl text-center">
            <img src={frame2} className="w-20 mx-auto" />
            <h3 className="font-bold mt-3">Maintenance</h3>
          </div>

          <div className="p-5 border rounded-xl text-center">
            <img src={frame3} className="w-20 mx-auto" />
            <h3 className="font-bold mt-3">Support</h3>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white text-center max-w-3xl">

          <h3 className="text-3xl font-bold mb-4">
            Need Bosch Dryer Repair?
          </h3>

          <p className="mb-8 text-gray-200">
            Contact us now for certified maintenance service
          </p>

          <div className="flex gap-4 justify-center">
            <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg">
              Call Now
            </a>

            <a href="https://wa.me/201211114528" className="border px-8 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <DryerfaqEn />

      {/* ================= SEO JSON-LD ================= */}
         <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Bosch Dryer Repair",
          provider: {
            "@type": "LocalBusiness",
            name: "American Group - Bosch Egypt Service",
            telephone: "01211114528",
            priceRange: "$$",
            image:
              "https://bosch-egypts.com/wp-content/uploads/2023/american-group-logo.png",
            url: "https://bosch-egypts.com/bosch-dryer-repair",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Main Branch",
              addressLocality: "Cairo",
              addressCountry: "EG",
            },
          },
          areaServed: [
            { "@type": "City", name: "Cairo" },
            { "@type": "City", name: "Giza" },
            { "@type": "City", name: "Alexandria" },
            { "@type": "City", name: "New Cairo" },
            { "@type": "City", name: "6th of October" },
            { "@type": "City", name: "Sheikh Zayed" },
          ],
          description:
            "Certified Bosch dryer repair service in Egypt. Professional home maintenance using original spare parts and certified warranty.",
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the authorized Bosch maintenance number and Hotline for service?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "The authorized Bosch maintenance number and Hotline is 01211114528. It provides immediate technical support and home visits for all dryer models.",
              },
            },
            {
              "@type": "Question",
              name: "How can I reach the nearest Bosch service center and what are the coverage areas?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Call 01211114528 to reach our branches covering Cairo, Giza, Alexandria, Sheikh Zayed, 6th of October, and the North Coast.",
              },
            },
            {
              "@type": "Question",
              name: "What are the common faults in Bosch dryers and how are they handled?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Common dryer faults include not heating or drum rotation failure. Our engineers use digital diagnostics to fix these issues on-site.",
              },
            },
            {
              "@type": "Question",
              name: "Does the center provide original Bosch spare parts with a certified warranty?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes, we provide 100% original Bosch spare parts with a certified warranty that ensures free follow-ups and prevents recurring faults.",
              },
            },
            {
              "@type": "Question",
              name: "How do I ensure I receive service from the official maintenance provider?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "To guarantee official service, only communicate through the authorized number 01211114528 to ensure trained technicians and genuine parts.",
              },
            },
          ],
        })}
      </script>

    </div>
  );
}