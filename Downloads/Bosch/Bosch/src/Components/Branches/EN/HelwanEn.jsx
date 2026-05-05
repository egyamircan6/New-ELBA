import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import AlexfaqEn from "../../faq/EN/branches/AlexfaqEn";
import HelwanfaqEn from "../../faq/EN/branches/HelwanfaqEn";
import { Helmet } from "react-helmet-async";
import { Scripts } from "react-router-dom";

export default function HelwanEn() {
 return (
    <div className="bg-gray-100">


            {/* ================= SEO ================= */}
         <Helmet>
  <title>
    Bosch Maintenance Helwan | Authorized Bosch Agency Helwan 01211114528
  </title>

  <meta
    name="description"
    content="Authorized Bosch Maintenance Helwan. Expert Bosch Repairs in Helwan for all appliances in Helwan and May 15th with original parts. Call 01211114528."
  />

  <link
    rel="canonical"
    href="https://bosch-egypts.com/bosch-repairs-helwan"
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
    Welcome to Bosch Maintenance Helwan Center 
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
   
              <h2 className="text-3xl font-bold text-center mb-10">
             Bosch Mokattam <span className="text-red-600">Service</span>
           </h2>
         
                         <h2 className="text-2xl text-center p-3 font-semibold mb-4">
Why Choose Bosch Maintenance Helwan as Your First Choice?   </h2>
         
         
                 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
   
                        <div>
                     <h2 className="text-2xl font-semibold mb-4">
 Precision in Device Maintenance for Long-Lasting Appliances    </h2>
         
                     <p className="text-gray-600 leading-loose">
Commitment to periodic device maintenance through Bosch Repairs in Helwan is the ideal investment that protects your appliances from sudden failures. Our Bosch Repairs in Helwan service focuses on inspecting cooling cycles, water paths, and complex electronic circuits. This proactive maintenance directly contributes to reducing energy consumption and extending the device's lifespan for many additional years, provided by our Bosch appliance service with complete technical integrity in Helwan.</p>                              <h2 className="text-2xl font-semibold mb-4">
Original Spare Parts at the Helwan Service Center
                 </h2>
                     <p className="text-gray-600 leading-loose">
At our center for Bosch Repairs in Mokattam, we strictly adhere to installing only certified Bosch spare parts, which come with an official one-year warranty for complete peace of mind. Whether you are suffering from a damaged PCB, motor issues, or a Freon leak, our Bosch Repairs in Mokattam technicians carry all necessary original components during the first visit for immediate execution. Choosing us in the Mokattam area means maintaining your German appliance's identity and superior performance without resorting to counterfeit parts that cause doubled costs. All parts are sourced via the Bosch Hotline 01211114528..</p>                              <h2 className="text-2xl font-semibold mb-4">
      Expertise in Handling Common Appliance Fault        </h2>
                     <p className="text-gray-600 leading-loose">
Regarding the faults we encounter, our Bosch Repairs in Helwan team handles a variety of issues with great expertise. We fix weak cooling in refrigerators, water leaks in washing machines, and electrical circuit issues in built-in appliances. Our technicians are also trained in Bosch Repairs in Helwan for dishwasher sensors and microwaves, ensuring your devices return to peak performance according to Bosch's global quality standards. For any electronic error or mechanical failure, trust the specialized Bosch Repairs in Helwan team.</p>          
              
         
                   </div>
         
                   <div className="flex justify-center">
                     <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
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
      <HelwanfaqEn/>

    
    </div>
  );
}