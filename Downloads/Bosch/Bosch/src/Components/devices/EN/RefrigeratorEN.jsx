import React from 'react'

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import RefrigeratorfaqEN from '../../faq/EN/RefrigeratorfaqEN';

export default function RefrigeratorEN() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

      {/* ================= SEO ================= */}
      <Helmet>
<title>
Bosch Refrigerator Repair | Authorized Center Bosch Egypt | 01211114528</title>

<meta
  name="description"
  content='Get the best Bosch refrigerator repair service in Egypt. Original spare parts, immediate home service, and comprehensive warranty from Bosch Egypt. Call us now 01211114528.
'
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
Welcome to Bosch Refrigerator Repair Center</h1>

<p className="text-gray-200 mb-8">
  Authorized Bosch  Refrigerator Maintenance by Bosch Egypt
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

   

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-4">
      
                      <h2 className="text-2xl text-center p-3 font-semibold mb-4">
Why Choose Us for Your Bosch Refrigerator Repair?</h2>
      
      
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                     <div>
                  <h2 className="text-2xl font-semibold mb-4">
Precision in Device Maintenance        </h2>
      
                  <p className="text-gray-600 leading-loose">
At American Group, we believe that maintaining German cooling technology requires specialized expertise. Our Bosch refrigerator repair process involves deep cleaning of condenser coils, checking refrigerant levels, and ensuring that the NoFrost system is functioning perfectly. Precision in maintenance ensures that your food stays fresh and your appliance consumes less energy.</p>                 
             <h2 className="text-2xl font-semibold mb-4">
Reliability of Original Spare Parts               </h2>
                  <p className="text-gray-600 leading-loose">
The core of our service is the use of 100% original Bosch refrigerator parts. Whether it is a compressor, a thermal sensor, or a fan motor, we only install genuine components backed by a full one-year warranty. Using authentic parts prevents the cooling fluctuations often caused by commercial alternatives, protecting your Bosch built-in refrigerator from long-term damage..</p>                              <h2 className="text-2xl font-semibold mb-4">
     Expertise in Handling Complex Faults          </h2>
                  <p className="text-gray-600 leading-loose">
Our engineers are masters at troubleshooting both hardware and software issues. We encounter various faults daily, such as cooling failure, water leakage, or electronic board (PCB) errors. Using digital diagnostic tools, we can accurately identify sensor malfunctions or compressor issues in all models, including Bosch deep freezers. Our goal is to resolve 95% of these faults during the first home visit.</p>           
      
                </div>
      
                <div className="flex justify-center">
                  <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
                </div>
      
           
      
              </div>
            </section>




      <section className="py-20 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      How to Easily Book Bosch Refrigerator  Machine Repair
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

 
      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Bosch Coffee Machine Repair?
          </h3>

          <a href="tel:01211114528" className="bg-red-600 px-8 py-3 rounded-lg">
            Call Now
          </a>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <CoffeemachinefaqEN />

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