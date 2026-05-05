import React from 'react'

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import CookerfaqEN from '../../faq/EN/CookerfaqEN';
import { Helmet } from 'react-helmet-async';

export default function CookerEN() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

          <Helmet>
              <title>
 Bosch Cooker Repair | Authorized Service Bosch Egypt | Call Now 01211114528              </title>
      
              <meta
                name="description"
                content=" Get the best Bosch cooker repair service in Egypt. Original spare parts, immediate repair for ovens and burners, and a certified warranty from Bosch Agency. Call us at 01211114528."
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
Welcome to Bosch Cooker Repair Bosch Egypt       </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
Engineering Excellence in Authorized Bosch Cooker Repair        </p>

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
          Bosch Cooker Service
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="w-full max-w-md mx-auto rounded-xl shadow-2xl" />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Professional Cooker Repair
            </h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">
Maintaining a Bosch Cooker is a precise technical process aimed at restoring the ideal cooling cycle and maintaining stable freezing temperatures. This is provided by the Bosch Egypt team according to the strictest German standards. In our Bosch appliances service center, we realize that any defect in freezing performance may affect food safety; therefore, we rely on the unified Bosch Hotline 01211114528 to provide an immediate response and comprehensive solutions for all technical malfunctions, ensuring long-term operational efficiency            </p>

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
    Why Choose Our Bosch Cooker Maintenance Center?
  </h2>

  <div className="max-w-6xl mx-auto space-y-20">
    {/* Section 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch cooker maintenance"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Precision in Device Maintenance
        </h3>

        <p className="text-gray-600 leading-loose">
          Our certified technicians are trained in repairing Bosch cookers and
          ovens with high technical accuracy. Whether the issue is related to
          ignition, control switches, gas regulators, or internal oven faults,
          our maintenance process keeps your cooker safe and efficient.
        </p>
      </div>
    </div>

    {/* Section 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="md:order-2 flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch cooker spare parts"
        />
      </div>

      <div className="md:order-1">
        <h3 className="text-2xl font-semibold mb-4">
          Reliability of Original Spare Parts
        </h3>

        <p className="text-gray-600 leading-loose">
          We use original Bosch cooker spare parts including ignition switches,
          thermocouples, nozzles, burners, and safety sensors. Genuine
          components ensure safe gas operation, stable performance, and
          long-lasting reliability.
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
          Our engineers handle weak oven flames, clogged nozzles, faulty
          thermocouples, broken ignition systems, and gas connection issues. We
          diagnose the root cause and repair the fault safely according to Bosch
          service standards.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch cooker repair"
        />
      </div>
    </div>
  </div>
</section>


              <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          How to Request Bosch Cooker Repair Service?
        </h2>

        <p className="text-gray-600 text-center mb-10 leading-relaxed">
          We make the process simple and fast. You can obtain service through the following steps:
        </p>

        <div className="space-y-4">

          <div className="flex gap-3 items-start">
            <span className="text-red-600 font-bold">1.</span>
            <p className="text-gray-700">
              Call the certified maintenance number <strong>01211114528</strong>.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="text-red-600 font-bold">2.</span>
            <p className="text-gray-700">
              Register the device data and type of fault with customer service.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="text-red-600 font-bold">3.</span>
            <p className="text-gray-700">
              Schedule a visit time that suits you.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="text-red-600 font-bold">4.</span>
            <p className="text-gray-700">
              A specialized technician arrives at your home at the specified time.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="text-red-600 font-bold">5.</span>
            <p className="text-gray-700">
              Execution of maintenance using original parts and providing a written warranty.
            </p>
          </div>

        </div>

      </div>
    </section>

                  {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">



        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

             <div>
            <h3 className="text-2xl font-semibold mb-4">
Coverage in All Egyptian Governoratess            </h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">Our Bosch cooker maintenance services cover all governorates, including Cairo, Giza, and Alexandria. Our technical support teams reach customers quickly in areas like Nasr City, Tagamoa, Sheikh Zayed, and 6th of October.
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
Warranty and After-Sales Service
</h3>

            <p className="text-gray-500 leading-[2.2em] mb-8">
        We provide an official warranty on all maintenance work and replaced spare parts. Our relationship with the customer does not end after the repair; we continue to provide technical support and advice to maintain the device's performance through the Bosch Agency support line.</p> <div className="flex gap-4">
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
      <CookerfaqEN />

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
