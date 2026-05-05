import React from 'react'

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import VacuumcleanersfaqEN from '../../faq/EN/VacuumcleanersfaqEN';
import DishwasherfaqEn from '../../faq/EN/DishwasherfaqEn';
import { Helmet } from 'react-helmet-async';

export default function DishwasherEn() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

          <Helmet>
              <title>
Bosch Dishwasher Repair | Certified Engineering Service Bosch Egypt | 01211114528
              </title>
      
              <meta
                name="description"
                content=" Restore maximum cleaning efficiency with Bosch dishwasher repair. Original spare parts, smart solutions for drainage and sprayer faults, and a comprehensive warranty from Bosch Egypt. Call 01211114528.."
              />
      
              <meta name="robots" content="index, follow" />
      
              <link
                rel="canonical"
                href="https://bosch-egypts.com/صيانة-ثلاجات-بوش-بلت-ان"
              />
      
        
            </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
Welcome to Bosch Dishwasher Repair center        </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
Engineering Excellence in Authorized Bosch Dishwasher Repair        </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="tel:01211114528" className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-lg font-bold">
              Call Now
            </a>

            <a href="https://wa.me/201211114528" className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black">
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">

        <h2 className="text-2xl md:text-3xl text-center font-bold mb-10">
          Bosch Dishwasher Service
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="w-full max-w-md mx-auto rounded-xl shadow-2xl" />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Professional Dishwasher Repair
            </h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">
Maintaining a Bosch Dishwasher is a precise technical process aimed at restoring the ideal cooling cycle and maintaining stable freezing temperatures. This is provided by the Bosch Egypt team according to the strictest German standards. In our Bosch appliances service center, we realize that any defect in freezing performance may affect food safety; therefore, we rely on the unified Bosch Hotline 01211114528 to provide an immediate response and comprehensive solutions for all technical malfunctions, ensuring long-term operational efficiency            </p>

            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg text-white font-bold">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border border-red-600 px-8 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>


     <section className="py-20 px-4">
  <h2 className="text-2xl text-center font-semibold mb-16">
    Why Choose Us for Your Bosch Dishwasher?
  </h2>

  <div className="max-w-6xl mx-auto space-y-20">

    {/* Section 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch dishwasher maintenance"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Precision in Device Maintenance
        </h3>

        <p className="text-gray-600 leading-loose">
          Maintaining a Bosch dishwasher requires deep understanding of water
          circulation and filtration systems. Our service includes cleaning
          internal filters, inspecting the heating element, and calibrating the
          water softener unit to ensure spotless results and prevent limescale
          buildup.
        </p>
      </div>

    </div>

    {/* Section 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="md:order-2 flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch dishwasher spare parts"
        />
      </div>

      <div className="md:order-1">
        <h3 className="text-2xl font-semibold mb-4">
          Reliability of Original Spare Parts
        </h3>

        <p className="text-gray-600 leading-loose">
          We provide only original Bosch dishwasher parts such as circulation
          pumps, inlet valves, and spray arms. Genuine components guarantee full
          compatibility with your model, especially for built-in dishwashers,
          ensuring long-term reliability.
        </p>
      </div>

    </div>

    {/* Section 3 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Expertise in Handling Complex Faults
        </h3>

        <p className="text-gray-600 leading-loose">
          Our engineers handle advanced faults such as water leakage (E15),
          drainage issues (E24), and heating failures. Using digital diagnostic
          tools, we identify the root cause and fix the issue efficiently in a
          single visit.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch dishwasher repair"
        />
      </div>

    </div>

  </div>
</section>

                  {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">



        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

             <div>
            <h3 className="text-2xl font-semibold mb-4">
Technical Specialization in Freezing Circuits and NoFrost Systems            </h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">Specializing in Bosch dishwasher repair requires full familiarity with complex hydraulic systems and smart control panels that regulate different wash cycles. Bosch Egypt experts are professionally trained to fix "water heaters," temperature sensors, and decode software error codes efficiently. This expertise ensures your dishwasher stays within the ideal working range, saving water and electricity while extending the device's lifespan.
         </p>

            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg text-white font-bold">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border border-red-600 px-8 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>

          <img src={img} className="w-full max-w-md mx-auto rounded-xl shadow-2xl" />

       

        </div>
      </section>
                  {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">



        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="w-full max-w-md mx-auto rounded-xl shadow-2xl" />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
Our Branches for Bosch Dishwasher Service in All Governorates  </h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">
We provide the fastest home service when you request Bosch dishwasher maintenance via the unified number 01211114528. Our coverage includes Nasr City, Tagamoa, Sheikh Zayed, 6th of October, and Alexandria. We arrive with fully equipped vehicles to perform repairs on-site, preserving your kitchen decor and the safety of your integrated units.</p>          <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg text-white font-bold">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border border-red-600 px-8 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>



          <section className="py-20 px-4">



        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        

          <div>
            <h3 className="text-2xl font-semibold mb-4">
Sustainability Guarantee from Bosch Egypt: Unmatched Quality     </h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">
Our commitment to Bosch  Dishwasher maintenance is crowned by providing a comprehensive and real warranty on all original spare parts. By contacting Bosch Egypt at 01211114528, you will receive periodic follow-ups and a certified warranty certificate, ensuring your right to free repair should any technical defects appear.</p>           <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg text-white font-bold">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border border-red-600 px-8 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>

            <img src={img} className="w-full max-w-md mx-auto rounded-xl shadow-2xl" />

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="p-5 border rounded-xl text-center shadow-lg">
            <img src={frame1} className="w-20 mx-auto" />
            <h3 className="font-bold mt-4">Repairs</h3>
            <p className="text-gray-600 text-sm">Fast and professional repair</p>
          </div>

          <div className="p-5 border rounded-xl text-center shadow-lg">
            <img src={frame2} className="w-20 mx-auto" />
            <h3 className="font-bold mt-4">Maintenance</h3>
            <p className="text-gray-600 text-sm">Regular maintenance service</p>
          </div>

          <div className="p-5 border rounded-xl text-center shadow-lg">
            <img src={frame3} className="w-20 mx-auto" />
            <h3 className="font-bold mt-4">Support</h3>
            <p className="text-gray-600 text-sm">24/7 technical support</p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white text-center max-w-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Need Bosch Dishwasher Repair?
          </h3>

          <p className="mb-8">Contact us now for fast certified service</p>

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
      <DishwasherfaqEn />

      {/* ================= SCHEMA ================= */}
    <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Bosch Refrigerator Repair",
            provider: {
              "@type": "LocalBusiness",
              name: "American Group - Bosch Egypt Service",
              telephone: "01211114528",
              priceRange: "$$",
              image:
                "https://bosch-egypts.com/wp-content/uploads/2023/american-group-logo.png",
              url: "https://bosch-egypts.com/bosch-refrigerator-repair",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Branch",
                addressLocality: "Cairo/Giza",
                addressCountry: "EG",
              },
            },
            areaServed: [
              { "@type": "City", name: "Cairo" },
              { "@type": "City", name: "Giza" },
              { "@type": "City", name: "Alexandria" },
              { "@type": "City", name: "New Cairo" },
              { "@type": "City", name: "Sheikh Zayed" },
              { "@type": "City", name: "6th of October" },
              { "@type": "City", name: "North Coast" },
            ],
            description:
              "Authorized Bosch refrigerator maintenance in Egypt. We offer original spare parts and home repair services for all Bosch cooling appliances.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the authorized Bosch refrigerator repair number in Egypt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The authorized number for Bosch refrigerator maintenance is 01211114528. This hotline provides direct access to Bosch Egypt technical support.",
                },
              },
              {
                "@type": "Question",
                name: "Is Bosch maintenance available in new cities?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, our service covers areas like Tagamoa, Rehab, Madinaty, Sheikh Zayed, and 6th of October. Call 01211114528 for support.",
                },
              },
              {
                "@type": "Question",
                name: "Does the center provide original spare parts for Bosch refrigerators?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we exclusively use original spare parts with a factory barcode and an official warranty certificate to ensure long-term cooling stability.",
                },
              },
              {
                "@type": "Question",
                name: "What should I do if an Error Code appears on my Bosch fridge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "If codes like E1 or E2 appear, disconnect the power for 10 minutes. If it persists, call 01211114528 immediately for a professional diagnosis.",
                },
              },
              {
                "@type": "Question",
                name: "Does Bosch Egypt service built-in refrigerators?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we specialize in Bosch built-in refrigerator repair, which requires specific expertise in handling integrated kitchen units.",
                },
              },
            ],
          },
        ])}
      </script>

      {/* Simple Service Schema (optional extra lightweight one) */}

    </div>
  );
}
