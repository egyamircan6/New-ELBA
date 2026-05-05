import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import AlexfaqEn from "../../faq/EN/branches/AlexfaqEn";
import { Helmet } from "react-helmet-async";

export default function AlexEn() {
  return (
      <div className="bg-gray-100">
  
  
              {/* ================= SEO ================= */}
           <Helmet>
    <title> Bosch Maintenance Alexandria | Certified Home Service 01211114528
   </title>
  
    <meta
      name="description"
      content="  Premier Bosch Repairs Alexandria for all German appliances. We offer original spare parts and a certified warranty across Alexandria. Call 01211114528.."
    />
  
    <link
      rel="canonical"
      href="https://bosch-egypts.com/bosch-repairs-Hadayek Ahram"
    />
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Authorized Bosch Repairs Alexandria",
        description:
          "Premium Bosch maintenance services across Alexandria for all home appliances with original parts and coastal-ready maintenance.",
        provider: {
          "@type": "LocalBusiness",
          name: "Bosch Alexandria Service Center",
          telephone: "+201211114528",
          url: "https://bosch-egypts.com/bosch-repairs-alexandria",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Smouha / Miami",
            addressLocality: "Alexandria",
            addressCountry: "EG",
          },
        },
        areaServed: ["Alexandria", "Smouha", "Miami", "Agami", "King Mariout"],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I request Bosch Repairs Alexandria?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You can request Bosch Repairs Alexandria by calling 01211114528 for expert home maintenance and fast service.",
            },
          },
          {
            "@type": "Question",
            name: "Do you cover areas like Agami and Al-Bitash?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, our Bosch Repairs Alexandria team serves all districts of Alexandria, including Agami, Bitash, and surrounding areas.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a warranty on the repaired appliances?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, all repairs come with a certified warranty for up to 12 months on labor and original Bosch spare parts.",
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
Welcome to Bosch Repairs Alexandria </h1>
  
            <p className="text-gray-300 mb-6 text-sm md:text-base">
 Elite Maintenance Center | Certified Bosch Repairs Alexandria         </p>
  
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
        <section className="py-20 px-4 bg-white" dir="ltr">
    <div className="max-w-6xl mx-auto">
  
      <h2 className="text-3xl font-bold text-center mb-10">
        Bosch Alexandria <span className="text-red-600">Service</span>
      </h2>
  
      <h3 className="text-2xl text-center font-semibold mb-14">
        Why Bosch Repairs Alexandria is the Trusted Choice for Coastal Residents?
     </h3>
  
      {/* ITEM 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">
Preventive Device Maintenance Against Coastal Humidity    </h3>
  
          <p className="text-gray-600 leading-loose">
Coastal air can be harsh on electrical circuits and metallic bodies. Through our device maintenance protocol at Bosch Repairs Alexandria, we provide specialized anti-corrosion inspections and deep cleaning for cooling systems. Regular Bosch appliances service is essential to prevent sudden rust-related failures in Washing Machines and refrigerators. Our Alexandrian engineers are dedicated to keeping your home running efficiently with professional technical honesty. </p>       </div>
  
        <div className="flex justify-center">
          <img src={img} className="rounded-xl shadow-xl max-w-md w-full" />
        </div>
      </div>
  
      {/* ITEM 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        
        <div className="flex justify-center order-2 md:order-1">
          <img src={img} className="rounded-xl shadow-xl max-w-md w-full" />
        </div>
  
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold mb-4">
Genuine Bosch Spare Parts and Authorized Warranty
       </h3>
  
          <p className="text-gray-600 leading-loose">
Maintaining the integrity of German engineering requires 100% authentic components. At Bosch Repairs Alexandria, we only install genuine Bosch spare parts that come with an official 12-month warranty certificate. Whether you need a new compressor for your Refrigerator or a digital board for your Dishwasher, our stock is always ready. Choosing Bosch Repairs Alexandria means you avoid the risks of counterfeit parts that degrade your device's lifespan. For original parts, contact the Bosch Hotline 01211114528. .</p>       </div>
      </div>
  
      {/* ITEM 3 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">
Expert Handling of Complex Coastal Appliance Faults          </h3>
  
          <p className="text-gray-600 leading-loose">
Regarding the faults we encounter, our specialists in Alexandria are experts at resolving drainage blockages, motor overheating, and sensor malfunctions in Built-in Appliances. Our Bosch Repairs Alexandria team utilizes digital testing to find the root cause of any issue, ensuring a permanent fix during the first visit. We treat every device with the precision it deserves, from cookers to dryers. For reliable assistance, message us on WhatsApp or call 01211114528 to schedule your visit.  </p>       </div>
  
        <div className="flex justify-center">
          <img src={img} className="rounded-xl shadow-xl max-w-md w-full" />
        </div>
      </div>
  
    </div>
  </section>
  
  
  <section className="py-20 px-4 bg-gray-50" dir="ltr">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Comprehensive Bosch Services in Alexandria     </h2>
  
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
         We provide professional maintenance for all models. Call  <strong>01211114528</strong> for expert home
          service with original spare parts and reliable support.
        </p>
      </div>
  
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "Dryer Repair and Deep Freezer Repair",
          "Certified care for Dishwashers and Cookers",
          "Specialized service for Microwaves, Hobs, and Hoods",
          "Expert maintenance for Coffee Machines and Vacuum Cleaners",
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
              {index + 1}
            </div>
  
            <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
              {service}
            </h3>
          </div>
        ))}
      </div>
  
   
    </div>
  </section>
      
  
        {/* <section className="px-4">
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
        </section> */}
  
        <AlexfaqEn/>
  
      
      </div>
    );
}