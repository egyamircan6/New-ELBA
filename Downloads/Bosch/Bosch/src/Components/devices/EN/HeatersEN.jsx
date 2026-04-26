import React from 'react'

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";

export default function HeatersEN() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>
Authorized Bosch Hob Repair in Egypt | Bosch Egypt Agency 01211114528        </title>

        <meta
          name="description"
          content=" Book Bosch hob maintenance from Bosch Egypt with fast home service, original spare parts, and an official warranty. Repair for Bosch built-in and electric hobs of all sizes: 60, 75, and 90 cm. Call 01211114528 now."
        />

        <link
          rel="canonical"
          href="https://bosch-egypts.com/bosch-hob-repair"
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
      Welcome to the Bosch Hob Repair Center | Request Service Now
          </h1>

          <p className="text-gray-200 mb-8">
Authorized Bosch Hob Repair by Bosch Egypt          </p>

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

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Bosch Hob <span className="text-red-600">Service</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="rounded-xl shadow-xl" />

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Certified Bosch Dryer Repair Services
            </h3>

            <p className="text-gray-600 leading-[2] mb-6">
         At Bosch Egypt, we provide authorized Bosch hob repair services within Egypt, featuring precise repairs that restore ignition efficiency and daily safety. Whether you own a Bosch built-in gas hob or a Bosch electric hob, we accurately diagnose the fault and implement repairs using original spare parts followed by a final operation test. We offer rapid support for weak flames, ignition failure, or issues with control switches and internal circuits through the Bosch Hotline 01211114528.
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
      {/* ================= WHY CHOOSE US ================= */}
    <section className="py-20 px-4">
  <h2 className="text-2xl text-center font-semibold mb-16">
    Why Choose Our Bosch Hob Maintenance Center?
  </h2>

  <div className="max-w-6xl mx-auto space-y-20">
    {/* Section 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Precision in Device Maintenance
        </h3>

        <p className="text-gray-600 leading-loose">
          When choosing Bosch hob repair, you rely on a specialized entity that
          understands different sizes and systems, including Bosch 60cm, 75cm,
          and 90cm models. Our process includes checking the ignition system,
          safety sensors, gas pressure, and heating circuits to prevent repeated
          faults.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch hob maintenance"
        />
      </div>
    </div>

    {/* Section 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="md:order-2 flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch hob original spare parts"
        />
      </div>

      <div className="md:order-1">
        <h3 className="text-2xl font-semibold mb-4">
          Reliability of Original Spare Parts
        </h3>

        <p className="text-gray-600 leading-loose">
          We use 100% original Bosch spare parts to ensure stable performance
          and long service life. Whether your hob needs a new burner, ignition
          component, safety sensor, or touch control panel, genuine parts remain
          the core of our repair quality.
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
          Our engineers handle complex faults such as thermocouple failure,
          ignition problems, weak flame, and electronic board malfunctions in
          electric and induction hobs. We diagnose the root cause to keep your
          kitchen safe, efficient, and reliable.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
          alt="Bosch hob repair"
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
Customer Trust in Bosch Hob Maintenance          </h3>

            <p className="text-gray-600 leading-[2] mb-6">
Customer trust in Bosch hob maintenance grows when the service steps are clear: receiving the report, identifying the potential fault, and conducting a technical inspection before repair. We prioritize transparency and safety elements, such as flame failure devices and heat stability in electric hobs. If you are looking for Bosch in Egypt with certified service, call us now via 01211114528.            </p>

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
How to Request Bosch Hob Repair Service?         </h3>

            <p className="text-gray-600 leading-[2] mb-6">
Requesting Bosch Hob Repair Service service is simple: contact us at 01211114528 and register your hob details and problem (weak ignition, gas leak, or switch failure). We will schedule a visit and send a specialized technician to perform the repair on-site using original parts. During the visit, we check ignition points, clean passages if necessary, and ensure stable operation for all sizes, including 60, 75, or 90 cm..</p>
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

          <img src={img} className="rounded-xl shadow-xl" />

          
               <div>
            <h3 className="text-2xl font-bold mb-4">
Warranty and After-Sales Service        </h3>

            <p className="text-gray-600 leading-[2] mb-6">
We provide an official warranty on all maintenance work and replaced spare parts. Our after-sales service includes checking ignition efficiency and heat stability to ensure safe daily use. For warranty inquiries, contact the Bosch Egypt support line at 01211114528.</p>
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
      <HeatersEN />

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
