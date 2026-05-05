import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import Alexfaqar from "../../faq/AR/branches/Alexfaqar";
import SheikhZayedfaqar from "../../faq/AR/branches/SheikhZayedfaqar";
import Shoroukfaqar from "../../faq/AR/branches/Shoroukfaqar";
import { Helmet } from "react-helmet-async";
export default function ShoroukAr() {
   return (
     <div dir="rtl" className="bg-gray-100">
 
       {/* ================= HERO ================= */}
       <section
         className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
         style={{ backgroundImage: `url(${bg})` }}
       >
 
 
 <Helmet>
  {/* TITLE */}
  <title>صيانة بوش الشروق | توكيل معتمد وخدمة منزلية</title>

  {/* META DESCRIPTION */}
  <meta
    name="description"
    content="توكيل صيانة بوش الشروق المعتمد. نصلك لإصلاح الغسالات، الثلاجات، والبلت إن بقطع غيار أصلية وضمان رسمي داخل الشروق. اتصل الآن 01211114528."
  />

  {/* SCHEMA */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bosch-egypts.com/#shorouk",
      "name": "Bosch Shorouk Service",
      "url": "https://bosch-egypts.com/صيانة-بوش-الشروق",
      "telephone": "+201211114528",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Shorouk",
        "addressRegion": "Cairo",
        "addressCountry": "EG"
      }
    },
    {
      "@type": "Service",
      "@id": "https://bosch-egypts.com/#shorouk-service",
      "name": "صيانة بوش الشروق المعتمدة",
      "description": "خدمة صيانة أجهزة بوش المنزلية في الشروق تشمل الغسالات، الثلاجات، الأجهزة المدمجة بقطع غيار أصلية.",
      "provider": {
        "@id": "https://bosch-egypts.com/#shorouk"
      },
      "areaServed": [
        "El Shorouk",
        "Madinaty",
        "Badr City",
        "New Cairo"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://bosch-egypts.com/#faq-shorouk",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "كيف أحجز صيانة غسالات بوش في الشروق؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "يمكنك حجز صيانة غسالات بوش في الشروق عبر الاتصال على 01211114528 وسيصل الفني لمنزلك."
          }
        },
        {
          "@type": "Question",
          "name": "ما هو رقم صيانة ثلاجات بوش في الشروق؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "رقم صيانة ثلاجات بوش في الشروق هو 01211114528 لخدمة الإصلاح المنزلية."
          }
        },
        {
          "@type": "Question",
          "name": "هل يتوفر صيانة أجهزة بوش المدمجة في الشروق؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، نوفر صيانة الأفران البلت إن والمسطحات والشفاطات داخل الشروق بقطع غيار أصلية."
          }
        }
      ]
    }
  ]
}
      `,
    }}
  />
</Helmet>
         <div className="absolute inset-0 bg-black/70"></div>
 
         <div className="relative z-10 text-white max-w-3xl px-4">
 
           <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
مركز صيانة بوش الشروق المعتمد    </h1>
 
           <p className="text-gray-300 mb-6 text-sm md:text-base">
             نقدم خدمات صيانة بوش لجميع الأجهزة بأفضل جودة وأسرع وقت
           </p>
 
           <div className="flex justify-center gap-4">
             <a
               href="tel:01211114528"
               className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700"
             >
               اطلب صيانة الآن
             </a>
 
             <a
               href="https://wa.me/201211114528"
               className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black"
             >
               واتساب
             </a>
           </div>
         </div>
       </section>
 
 
 
             {/* ================= STEPS ================= */}
 <section className="py-16 bg-[#f3f3f3]">
   <h2 className="text-center text-xl md:text-2xl font-bold mb-14">
     مراحل العمل و طلب الخدمة
   </h2>
 
   <div className="max-w-6xl mx-auto px-4 relative">
 
     {/* الخط الرئيسي */}
     <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-red-500 z-0"></div>
 
     <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
 
       {[
         { num: "01", title: "طلب خدمة", desc: "بمجرد طلب الخدمة نقوم بالرد والمتابعة معك" },
         { num: "02", title: "زيارة منزلية وإجراء معاينة", desc: "معاينة المنتج ومعرفة العطل الكامل به" },
         { num: "03", title: "كشف الأعطال", desc: "وبعدها يتم إصلاح العطل ومن ثم يتم تجربة المنتج" },
         { num: "04", title: "المتابعة بعد الخدمة", desc: "نقوم بالمتابعة لضمان رضاك التام وكفاءة عمل المنتج" },
       ].map((item, i) => (
         <div key={i} className="flex flex-col items-center relative">
 
           {/* الدائرة */}
           <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold bg-white z-10">
             {item.num}
           </div>
 
           {/* النص */}
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
 
              <section className="py-20 px-4">
        
                <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
             مركز صيانة الشروق   <span className="text-red-600">Bosch</span>
                </h1>
        
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
 
 
                 
                  <div className="text-right">
        
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
لماذا نحن الاختيار الأول لصيانة بوش في الشروق؟     </h2>
        
                    <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">تعد توكيل صيانة بوش في الشروق الوجهة الموثوقة لكل سكان مدينة الشروق، حيث نقدم في فرع صيانة بوش الشروق تجربة إصلاح فريدة تجمع بين السرعة والاحترافية. نحن نلتزم بالمعايير الصارمة التي يضعها صيانة بوش مصر لضمان تقديم خدمة تليق باسم العلامة التجارية الألمانية، مما يجعلنا الخيار الأول في كافة أحياء الشروق، مع ضمان عودة الجهاز للعمل بكامل كفاءته الأصلية فور الانتهاء من الصيانة بفضل فريقنا المدرب على معالجة أعطال الأجهزة بدقة، مما يعزز ريادتنا في صيانة بوش الشروق.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
        
                      <a
                        href="tel:01211114528"
                        className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
                      >
                        اتصل الآن
                      </a>
        
                      <a
                        href="https://wa.me/201211114528"
                        className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
                      >
                        واتساب
                      </a>
        
                    </div>
        
                  </div>
        
                  <div className="flex justify-center">
                    <img
                      src={img}
                      alt="washing machine"
                      className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
                    />
                  </div>
        
        
                </div>
              </section>
              <section className="py-20 px-4">
        
        
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
                  <div className="flex justify-center">
                    <img
                      src={img}
                      alt="washing machine"
                      className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
                    />
                  </div>
        
                  <div className="text-right">
        
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
قطع الغيار الأصلية والضمان المعتمد في الشروق    </h2>
        
                    <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base"> نحن ندرك في صيانة بوش الشروق أن استدامة الأجهزة الفاخرة تعتمد على جودة المكونات، لذا يلتزم مركزنا بتوفير قطع الغيار الأصلية والمستوردة فقط عبر الخط الساخن بوش. عند طلبك للخدمة، تحصل على شهادة ضمان رسمية على قطع الغيار والأعمال الفنية، مما يعزز الثقة في صيانة أجهزة بوش داخل مدينة الشروق. اتصل بنا الآن على 01211114528 لتصلك سيارة الخدمة مجهزة بكافة المعدات لإتمام الإصلاح في نفس الزيارة مع معالجة كافة العيوب والأعطال التي قد تواجهونها بمهنية تامة.</p>                   <div className="flex flex-col sm:flex-row gap-4">
        
                      <a
                        href="tel:01211114528"
                        className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
                      >
                        اتصل الآن
                      </a>
        
                      <a
                        href="https://wa.me/201211114528"
                        className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
                      >
                        واتساب
                      </a>
        
                    </div>
        
                  </div>
        
                </div>
              </section>
              <section className="py-20 px-4">
        
        
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
 
 
                   <div className="text-right">
        
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
تغطية شاملة لجميع موديلات أجهزة بوش في مدينة الشروق   </h2>
        
                    <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">نوفر في فرع الشروق دعماً فنياً متخصصاً لكل إصدارات العلامة التجارية، حيث نضمن لك إصلاحاً احترافياً لكل من: غسالات ملابس بوش، ثلاجات بوش، دراير بوش، ديب فريزر بوش، غسالات أطباق بوش، بوتاجازات بوش، مسطحات بوش، ميكروويف بوش، شفاطات بوش، مكنة قهوة بوش، مكانس بوش، تكييف بوش، و سخانات بوش، بالإضافة إلى أجهزة بوش المدمجة (Built-in) مثل أفران بلت ان، غسالات أطباق بلت ان، و ثلاجات بلت ان. كل هذه الخدمات متوفرة بضغطة زر عبر الواتساب أو الرقم 01211114528.</p>                   <div className="flex flex-col sm:flex-row gap-4">
        
                      <a
                        href="tel:01211114528"
                        className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
                      >
                        اتصل الآن
                      </a>
        
                      <a
                        href="https://wa.me/201211114528"
                        className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
                      >
                        واتساب
                      </a>
        
                    </div>
        
                  </div>
        
                  <div className="flex justify-center">
                    <img
                      src={img}
                      alt="washing machine"
                      className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
                    />
                  </div>
        
                
        
                </div>
              </section>
 
 
  
 <Shoroukfaqar/>
 
             
 
     </div>
   );
}