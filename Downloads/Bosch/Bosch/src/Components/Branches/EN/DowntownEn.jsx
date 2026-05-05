import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import AlexfaqEn from "../../faq/EN/branches/AlexfaqEn";
import DowntownfaqEn from "../../faq/EN/branches/DowntownfaqEn";
import { Helmet } from "react-helmet-async";

export default function DowntownEn() {
 return (
    <div className="bg-gray-100">


            {/* ================= SEO ================= */}
         <Helmet>
  <title>
 Bosch Maintenance Downtown | Request Immediate Service Today 01211114528  </title>

  <meta
    name="description"
    content=" Authorized Bosch maintenance center Downtown. Expert Bosch Repairs Downtown for all appliances with original parts and official warranty. Call 01211114528.."
  />

  <link
    rel="canonical"
    href="https://bosch-egypts.com/bosch-repairs-downtown"
  />

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Authorized Bosch Repairs in Helwan",
        description:
          "Professional Bosch maintenance service in Helwan and 15th of May for all home and built-in appliances with original spare parts and official warranty.",
        provider: {
          "@type": "LocalBusiness",
          name: "Bosch Helwan Repair Center",
          telephone: "+201211114528",
          url: "https://bosch-egypts.com/bosch-repairs-helwan",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Helwan",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
        },
        areaServed: [
          "Helwan",
          "15th of May City",
          "Maasara",
          "Hadayek Helwan",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the authorized Bosch washing machine repair number in Helwan?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "For washing machine issues in Helwan, contact Bosch Repairs in Helwan at 01211114528 for certified home service.",
            },
          },
          {
            "@type": "Question",
            name: "How can I contact the Bosch refrigerator hotline in Helwan?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Call the specialized hotline for Bosch Repairs in Helwan at 01211114528 for refrigerator cooling issues and genuine parts.",
            },
          },
          {
            "@type": "Question",
            name: "Are Bosch built-in appliance repairs available in Helwan?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, Bosch Repairs in Helwan covers all built-in ovens, hobs, and hoods with original components via 01211114528.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book maintenance for Bosch vacuum cleaners in Helwan?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You can book Bosch Repairs in Helwan for vacuums and coffee machines by calling 01211114528 for original filter and motor replacements.",
            },
          },
        ],
      },
    ],
  })}
</script>
</Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">

          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
   Welcome to Bosch Repairs Downtown
          </h1>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            We provide Bosch maintenance services for all appliances with the best quality and fastest service.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="tel:01211114528"
              className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700"
            >
              Request Service Now
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="py-16 bg-[#f3f3f3]">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-14">
          Service Request Process
        </h2>

        <div className="max-w-6xl mx-auto px-4 relative">

          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-red-500 z-0"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">

            {[
              { num: "01", title: "Request Service", desc: "Once you request service, we respond and follow up with you." },
              { num: "02", title: "Home Visit & Inspection", desc: "Inspecting the appliance and identifying the full issue." },
              { num: "03", title: "Fault Diagnosis", desc: "The issue is repaired and the appliance is tested afterward." },
              { num: "04", title: "After-Service Follow-up", desc: "We follow up to ensure your satisfaction and appliance efficiency." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center relative">

                <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold bg-white z-10">
                  {item.num}
                </div>

                <h3 className="font-bold mt-4 mb-2 text-sm md:text-base">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
   <section className="py-20 px-4">

  {/* Title */}
  <h2 className="text-3xl font-bold text-center mb-10">
    Bosch Mokattam <span className="text-red-600">Service</span>
  </h2>

  <h2 className="text-2xl text-center p-3 font-semibold mb-16">
    Why Choose Bosch Repairs Downtown as Your First Choice?
  </h2>

  <div className="max-w-6xl mx-auto space-y-20">

    {/* Section 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Precision in Device Maintenance for Long-Lasting Appliances
        </h3>

        <p className="text-gray-600 leading-loose">
          Commitment to periodic device maintenance through our Bosch Repairs Downtown protocol protects your appliances from sudden failures. We focus on inspecting refrigerator cooling cycles, washing machine water paths, and integrated circuit boards. This proactive Bosch Repairs Downtown approach reduces electricity consumption and extends the device's lifespan.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
        />
      </div>
    </div>

    {/* Section 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div className="flex justify-center md:order-1 order-2">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
        />
      </div>

      <div className="md:order-2 order-1">
        <h3 className="text-2xl font-semibold mb-4">
          Original Spare Parts at the Helwan Service Center
        </h3>

        <p className="text-gray-600 leading-loose">
          Our center for Bosch Repairs Downtown is committed to installing only certified Bosch spare parts with up to one year warranty. Our technicians carry all original components during the first visit for immediate repair.
        </p>
      </div>

    </div>

    {/* Section 3 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Expertise in Handling Common Appliance Faults
        </h3>

        <p className="text-gray-600 leading-loose">
          Our Bosch Repairs Downtown team handles all common faults including washer spinning issues, refrigerator cooling problems, and cooker ignition failures. We also fix dishwasher sensors and coffee machine scaling.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          className="w-full max-w-md rounded-xl shadow-2xl"
        />
      </div>
    </div>

  </div>
</section>


               {/* ================= DOWNTOWN SERVICES ================= */}
<section className="py-20 px-4 bg-gray-50" dir="ltr">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Comprehensive Bosch Services in Downtown & Surrounding Areas
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We guarantee professional Bosch Repairs Downtown for the full range of
        Bosch home and kitchen appliances, ensuring every device performs at its peak.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Bosch Washing Machine Repair and Dryer Repair",
        "Professional Refrigerator Repair and Deep Freezer Repair",
        "Certified Bosch Repairs for Dishwashers and Built-in Dishwashers",
        "Full service for Cookers, Hobs, and Hoods",
        "Specialized Bosch Repairs for Built-in Ovens and Microwaves",
        "Expert care for Coffee Machines and Vacuum Cleaners",
        "Immediate Bosch Repairs for Air Conditioners and Water Heaters",
        "Specialized maintenance for Built-in Appliances",
        "Built-in Refrigerator Repair",
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
        >
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
            {index + 1}
          </div>

          <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
            {service}
          </h3>
        </div>
      ))}
    </div>

    <div className="mt-14 bg-red-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-xl">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Trusted Bosch Repairs Downtown Service
      </h3>

      <p className="max-w-3xl mx-auto leading-relaxed mb-6 text-red-50">
        No matter the model, you can rely on the most trusted Bosch Repairs
        Downtown service. We serve residents in Downtown, Garden City, Zamalek,
        and Abdeen.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:01211114528"
          className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Call 01211114528
        </a>

        <a
          href="https://wa.me/201211114528"
          className="border border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-red-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>

  </div>
</section>
   

      <section className="px-4">
        <h2 className="text-center text-3xl font-bold mb-10">
          What Makes Us Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame1} className="w-20 h-20" />
            <h3 className="font-bold mt-4">Fault Repair</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              We have a team of engineers and technicians with extensive experience in electromechanical solutions, capable of delivering the best results across various sectors.
            </p>
          </div>

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame2} className="w-20 h-20" />
            <h3 className="font-bold mt-4">Periodic Maintenance</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              We have a team of engineers and technicians with extensive experience in electromechanical solutions, capable of delivering the best results across various sectors.
            </p>
          </div>

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame3} className="w-20 h-20" />
            <h3 className="font-bold mt-4">Technical Support</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              We have a team of engineers and technicians with extensive experience in electromechanical solutions, capable of delivering the best results across various sectors.
            </p>
          </div>

        </div>
      </section>

           <section className="py-20 px-4">
            
      
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
                <img src={img} className="rounded-xl shadow-xl" />
      
                <div>
                  <h3 className="text-2xl font-bold mb-4">
   Comprehensive Bosch Services in Helwan & 15th of May       </h3>
      
                  <p className="text-gray-600 leading-[2] mb-6">
We guarantee professional Bosch Repairs in Helwan for: Washing Machines, Refrigerators, Dryers, Deep Freezers, and all Bosch Built-in appliances. Call 01211114528 for the best Bosch Repairs in Helwan.     </p>
      
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
      <DowntownfaqEn/>

    
    </div>
  );
}