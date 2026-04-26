import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import AlexfaqEn from "../../faq/EN/branches/AlexfaqEn";
import DokkifaqEn from "../../faq/EN/branches/DokkifaqEn";
import { Helmet } from "react-helmet-async";

export default function DokkiEn() {
  return (
     <div className="bg-gray-100">
 
 
             {/* ================= SEO ================= */}
          <Helmet>
   <title> Bosch Repairs Dokki | Request Immediate Service Today 01211114528
  </title>
 
   <meta
     name="description"
     content="Authorized Bosch maintenance center in Dokki. Expert Bosch Repairs Dokki for all appliances (washers, fridges, cookers) with original parts. Call 01211114528."
   />
 
   <link
     rel="canonical"
     href="https://bosch-egypts.com/bosch-repairs-dokki"
   />
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Authorized Bosch Repairs Dokki",
        description:
          "Professional Bosch maintenance service in Dokki and Mohandessin for all home and built-in appliances with original spare parts and official warranty.",
        provider: {
          "@type": "LocalBusiness",
          name: "Bosch Dokki Repair Center",
          telephone: "+201211114528",
          url: "https://bosch-egypts.com/bosch-repairs-dokki",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dokki",
            addressLocality: "Giza",
            addressCountry: "EG",
          },
        },
        areaServed: ["Dokki", "Mohandessin", "Agouza", "Giza"],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I contact Bosch washing machine repair in Dokki?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "For washing machine repair, call 01211114528. We provide immediate home maintenance with original spare parts.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Bosch refrigerator agency number in Dokki?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The number is 01211114528. You can contact us to solve cooling issues immediately with original parts.",
            },
          },
          {
            "@type": "Question",
            name: "Is repair available for Bosch Built-in appliances in Dokki?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, we are experts in maintaining built-in ovens and hobs. Contact us at 01211114528 for a certified maintenance booking.",
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
Welcome to the Authorized Bosch Maintenance Center | Expert Bosch Repairs Dokki    </h1>
 
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
       <section className="py-20 px-4 bg-white" dir="ltr">
   <div className="max-w-6xl mx-auto">
 
     <h2 className="text-3xl font-bold text-center mb-10">
       Bosch Dokki   <span className="text-red-600">Service</span>
     </h2>
 
     <h3 className="text-2xl text-center font-semibold mb-14">
Why Choose Bosch Repairs Dokki for Your Home Appliances?     </h3>
 
     {/* ITEM 1 */}
     <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
       
       <div>
         <h3 className="text-2xl font-semibold mb-4">
The Importance of Preventive Device Maintenance         </h3>
 
         <p className="text-gray-600 leading-loose">
Performing periodic device maintenance through our Bosch Repairs Dokki protocol is not just a luxury; it is a technical necessity to maintain the lifespan of your appliances and protect them from sudden wear or burnout. Our team in Dokki conducts a comprehensive inspection of electrical and mechanical cycles, ensuring quiet operation and lower energy consumption. This proactive Bosch Repairs Dokki approach is built on vast experience and absolute honesty with the customer. For any fault, check our Bosch appliances service or contact the hotline at 01211114528         </p>
       </div>
 
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
. Guaranteed Original Spare Parts at Dokki Agency         </h3>
 
         <p className="text-gray-600 leading-loose">
The Bosch Repairs Dokki center is committed to providing a permanent stock of certified Bosch spare parts to ensure your devices are not out of service for long periods. We provide customers with an authorized warranty certificate, guaranteeing the right to free re-repair if the fault recurs. We believe that the original part is the soul of the device; therefore, we offer them at competitive prices to protect our customers from counterfeit commercial parts prevalent in the markets. For any fault, learn more via the Bosch Hotline or call 01211114528.</p>       </div>
     </div>
 
     {/* ITEM 3 */}
     <div className="grid md:grid-cols-2 gap-10 items-center">
       
       <div>
         <h3 className="text-2xl font-semibold mb-4">
           Expertise in Handling Common Appliance Faults
         </h3>
 
         <p className="text-gray-600 leading-loose">
Regarding the faults we encounter, our services cover all types of complex issues, starting from compressor problems in Refrigerators and timer faults in Washing Machines, to the maintenance of Built-in Appliances, Hoods, and Cookers. We guarantee an immediate on-site repair without the need to transport the device. For professional Bosch Repairs Dokki, call 01211114528 or message us via WhatsApp to have a specialized maintenance technician visit your home. </p>       </div>
 
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
         Comprehensive Bosch Services in Sheikh Zayed & October
       </h2>
 
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
 
       <DokkifaqEn/>
 
     
     </div>
   );
}