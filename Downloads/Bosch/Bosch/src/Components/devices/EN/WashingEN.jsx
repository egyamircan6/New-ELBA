import React from "react";

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import WashingfaqEN from "../../faq/EN/WashingfaqEN";

export default function WashingEN() {
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
            Bosch Washing Machine Maintenance in Egypt - 100% Certified Service
          </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
            We provide top-quality washing machine repair services using modern tools and original spare parts with warranty
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

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 px-4">

        <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
          Bosch Washing Machine <span className="text-red-600">Service</span>
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Bosch Washing Machine Repair Services
            </h2>

            <p className="text-gray-600 leading-loose">
              We provide professional Bosch washing machine maintenance in Egypt using certified engineers and original spare parts.
              Our service ensures long-lasting performance and accurate fault diagnosis using advanced tools.
            </p>

          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
   <section className="py-20 px-4">

  <div className="max-w-6xl mx-auto space-y-20">

    {/* Section 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div className="flex justify-center">
        <img src={heroImg2} className="w-full max-w-md rounded-xl shadow-2xl" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Us for Your Bosch Appliances?
        </h2>

        <p className="text-gray-600 leading-loose">
          We believe that German engineering requires a specialized touch. Our maintenance philosophy focuses on preventive care and deep diagnostics. Whether it is a routine check or a complex overhaul, our team ensures that every Bosch appliance service is performed according to international standards.
        </p>
      </div>

    </div>

    {/* Section 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div className="md:order-2 flex justify-center">
        <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
      </div>

      <div className="md:order-1">
        <h2 className="text-2xl font-semibold mb-4">
          Precision in Device Maintenance
        </h2>

        <p className="text-gray-600 leading-loose">
          The secret to our success is our reliance on genuine components. We provide original Bosch washing machine parts including drain pumps, water valves, and control boards to ensure ideal performance and protect your appliance.
        </p>
      </div>

    </div>

    {/* Section 3 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div className="flex justify-center">
        <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Reliability of Original Spare Parts
        </h2>

        <p className="text-gray-600 leading-loose">
          Using original spare parts is what guarantees long-lasting performance. We ensure every replacement part meets Bosch standards to maintain efficiency and durability.
        </p>
      </div>

    </div>

    {/* Section 4 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div className="md:order-2 flex justify-center">
        <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
      </div>

      <div className="md:order-1">
        <h2 className="text-2xl font-semibold mb-4">
          Expertise in Handling Complex Faults
        </h2>

        <p className="text-gray-600 leading-loose">
          Our engineers resolve all types of faults, from drainage issues and vibration problems to electronic board failures. We ensure accurate diagnosis and fast repair in one visit.
        </p>
      </div>

    </div>

  </div>

</section>


         <section className="py-20 px-4">

       

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


            <div>
      <h1 className="text-2xl font-semibold mb-4">Bosch Washing Machine Repair for Your Home</h1>
      <p className="text-gray-600 leading-loose">Our center is the first destination for those seeking safety and accuracy in Bosch maintenance within Egypt. We provide a professional staff in Bosch washer repair of all types. As a leading service center, we guarantee immediate home service without moving the device, covering areas from New Cairo and Nasr City to Alexandria and the North Coast.</p>
     </div>

          <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>

   
        </div>
      </section>

         <section className="py-20 px-4">

       

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>


            <div>
      <h1 className="text-2xl font-semibold mb-4">Certified Warranty for Peace of Mind</h1>
      <p className="text-gray-600 leading-loose">We don't just repair; we provide a comprehensive warranty on all repairs and replaced parts. This warranty reflects our confidence in the quality provided by our technicians. Contact the Bosch washing machine repair number 01211114528 now to benefit from maintenance offers and spare parts discounts. We are here to serve you 24/7 with full transparency and technical integrity.</p>
     </div>

        

   
        </div>
      </section>
      {/* ================= TIPS ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 bg-white/95 rounded-2xl max-w-3xl mx-auto px-8 py-10 text-center">

          <h3 className="text-2xl font-bold mb-6">
            Tips to Maintain Your Washing Machine
          </h3>

          <ul className="space-y-3">
            <li>✔ Do not overload the machine</li>
            <li>✔ Use proper detergent</li>
            <li>✔ Clean filters regularly</li>
          </ul>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

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

      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white text-center max-w-2xl">

          <h3 className="text-3xl font-bold mb-4">
            Need Bosch Washing Machine Repair?
          </h3>

          <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg font-bold">
            Call Now
          </a>

        </div>
      </section>

      {/* FAQ */}
      <WashingfaqEN />

      {/* ================= SCHEMA (SEO) ================= */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Bosch Washing Machine Repair Egypt",
          "telephone": "01211114528",
          "areaServed": ["Cairo", "Giza", "Alexandria", "New Cairo"],
          "description":
            "Certified Bosch washing machine repair service in Egypt with original spare parts and warranty."
        })}
      </script>

    </div>
  );
}