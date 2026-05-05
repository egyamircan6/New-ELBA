import React from 'react'

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import HoodsfaqEN from '../../faq/EN/HoodsfaqEN';
import { Helmet } from 'react-helmet-async';

export default function HoodsEN() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

      {/* ================= SEO ================= */}
      <Helmet>
<title>
Authorized Bosch Hood Repair Egypt | Bosch Agency 01211114528
</title>

<meta
  name="description"
  content="Get authorized Bosch hood maintenance from Bosch Egypt across all governorates. Repair with original spare parts and official warranty. Call 01211114528 for a specialist."
/>

<link
  rel="canonical"
  href="https://bosch-egypts.com/bosch-hood-repair"
/>
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
  Welcome to the Authorized Bosch Hood Repair Center
</h1>

<p className="text-gray-200 mb-8">
  Authorized Bosch Hood Maintenance by Bosch Egypt
</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:01211114528" className="bg-red-600 px-10 py-3 rounded-lg">
              Call Now
            </a>

            <a href="https://wa.me/201211114528" className="border px-10 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

   


   <section className="py-20 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <img src={img} className="rounded-xl shadow-xl" />

    <div>
      <h2 className="text-2xl font-bold mb-4">
        Authorized Bosch Hood Maintenance
      </h2>

      <p className="text-gray-600 leading-loose">
        Bosch Egypt provides authorized Bosch hood repair services across all Egyptian governorates,
        featuring immediate repairs and original spare part replacements to restore ideal suction power.
        If you suffer from weak vapor extraction, loud motor noise, or lighting failure, our specialized
        team provides accurate diagnosis and technical solutions that maintain hood efficiency and prevent
        grease and odor accumulation in your kitchen.
      </p>
    </div>

  </div>
</section>
      {/* ================= WHY CHOOSE US ================= */}
     <section className="py-20 px-4">

  <h2 className="text-2xl text-center font-semibold mb-16">
    Why Choose Our Bosch Hood Maintenance Center?
  </h2>

  <div className="max-w-6xl mx-auto space-y-20">

    {/* Section 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Precision in Hood Maintenance
        </h3>

        <p className="text-gray-600 leading-loose">
          Maintaining a Bosch hood requires expertise in airflow systems,
          grease filters, and motor efficiency. Our team is trained to handle
          common issues such as weak suction, excessive noise, and filter
          blockage. We ensure your kitchen ventilation system operates safely
          and efficiently.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch hood maintenance"
        />
      </div>

    </div>

    {/* Section 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="md:order-2 flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch hood spare parts"
        />
      </div>

      <div className="md:order-1">
        <h3 className="text-2xl font-semibold mb-4">
          Reliability of Original Spare Parts
        </h3>

        <p className="text-gray-600 leading-loose">
          We use 100% original Bosch spare parts including motors, carbon
          filters, grease filters, and control switches. Genuine components
          ensure strong suction performance and long-lasting durability for
          your hood.
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
          Our engineers resolve all complex hood issues such as motor failure,
          weak airflow, electrical faults, and lighting problems. We diagnose
          the root cause to ensure the issue does not return, restoring your
          Bosch hood to peak performance.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch hood repair"
        />
      </div>

    </div>

  </div>

</section>

      {/* ================= SERVICES ================= */}
      <section className="px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="p-5 border rounded-xl text-center">
            <img src={frame1} className="w-20 mx-auto" />
            <h3 className="font-bold mt-4">Repairs</h3>
          </div>

          <div className="p-5 border rounded-xl text-center">
            <img src={frame2} className="w-20 mx-auto" />
            <h3 className="font-bold mt-4">Maintenance</h3>
          </div>

          <div className="p-5 border rounded-xl text-center">
            <img src={frame3} className="w-20 mx-auto" />
            <h3 className="font-bold mt-4">Support</h3>
          </div>

        </div>
      </section>


            {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
      

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="rounded-xl shadow-xl" />

          <div>
            <h3 className="text-2xl font-bold mb-4">
Customer Trust in Bosch Microwave Services         </h3>

            <p className="text-gray-600 leading-[2] mb-6">
Bosch Egypt maintenance services have earned customer trust through transparency and accuracy. We do not replace any part without full verification of the problem and explaining the steps to the client. Our experience in Bosch microwave maintenance ensures the device is tested after repair to confirm heating stability and operation safety.            </p>

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


      <section className="py-20 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      How to Easily Book Bosch Microwave Repair
    </h2>

    <p className="text-gray-600 mb-10">
      You can request service through simple steps via our Bosch Service Center:
    </p>

    <div className="grid md:grid-cols-2 gap-6 text-left">

      <div className="flex gap-3">
        <span className="text-red-600 font-bold text-xl">1.</span>
        <p className="text-gray-700">
          Call <strong>01211114528</strong> and describe the fault.
        </p>
      </div>

      <div className="flex gap-3">
        <span className="text-red-600 font-bold text-xl">2.</span>
        <p className="text-gray-700">
          Schedule a convenient time for a home visit.
        </p>
      </div>

      <div className="flex gap-3">
        <span className="text-red-600 font-bold text-xl">3.</span>
        <p className="text-gray-700">
          Accurate technical diagnosis using certified measuring tools.
        </p>
      </div>

      <div className="flex gap-3">
        <span className="text-red-600 font-bold text-xl">4.</span>
        <p className="text-gray-700">
          Execution of repair with original parts and a written warranty.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-10 flex justify-center gap-4">
      <a
        href="tel:01211114528"
        className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/201211114528"
        className="border border-red-600 px-8 py-3 rounded-lg"
      >
        WhatsApp
      </a>
    </div>

  </div>
</section>

      
            {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
      

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

               <div>
            <h3 className="text-2xl font-bold mb-4">
How to Request Bosch Hob Repair Service?           </h3>

            <p className="text-gray-600 leading-[2] mb-6">
Requesting Bosch Hob Repair Service service is simple: contact us at 01211114528 and register your hob details and problem (weak ignition, gas leak, or switch failure). We will schedule a visit and send a specialized technician to perform the repair on-site using original parts. During the visit, we check ignition points, clean passages if necessary, and ensure stable operation for all sizes, including 60, 75, or 90 cm.</p>
            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 text-white px-6 py-3 rounded-lg">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border px-6 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>

          <img src={img} className="rounded-xl shadow-xl" />

     
        </div>
      </section>
            {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
      

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="rounded-xl shadow-xl" />

          
               <div>
            <h3 className="text-2xl font-bold mb-4">
Coverage in All Egyptian Governorates          </h3>

            <p className="text-gray-600 leading-[2] mb-6">
Our Bosch hob maintenance services cover all governorates, including Nasr City, Tagamoa, Sheikh Zayed, 6th of October, and Alexandria. We also provide support in coastal cities like Bosch Hurghada via the same unified number 01211114528 or WhatsApp..</p>
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
            {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
      

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

       

          
               <div>
            <h3 className="text-2xl font-bold mb-4">
Warranty and After-Sales Service         </h3>

            <p className="text-gray-600 leading-[2] mb-6">
We offer an official certified warranty on all Bosch microwave repairs and replaced parts. The warranty includes a technical review if any notes arise during the coverage period, ensuring heating efficiency and internal circuit safety. Our after-sales service also provides usage guidelines to help protect your microwave from future malfunctions.</p>            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 text-white px-6 py-3 rounded-lg">
                Call Now
              </a>

              <a href="https://wa.me/201211114528" className="border px-6 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>

             <img src={img} className="rounded-xl shadow-xl" />


     
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Bosch Hob Repair?
          </h3>

          <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg">
            Call Now
          </a>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <HoodsfaqEN />

      {/* ================= SCHEMA ================= */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Bosch Hob Repair",
          "provider": {
            "@type": "Organization",
            "name": "Bosch Egypt",
            "telephone": "01211114528"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Egypt"
          }
        })}
      </script>

    </div>
  )
}
