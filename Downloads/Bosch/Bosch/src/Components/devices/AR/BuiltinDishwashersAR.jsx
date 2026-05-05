import React from "react";
import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import BuiltinDishwashersfaqAR from "../../faq/AR/BuiltinDishwashersfaqAR";
import { Helmet } from "react-helmet-async";

export default function BuiltinDishwashersAR() {
  return (
     <div dir="rtl" className="bg-white space-y-24">
 
<Helmet>
      <title>
        صيانة غسالات أطباق بوش بلت ان في مصر | 01211114528
      </title>

      <meta
        name="description"
        content="خدمة صيانة غسالات أطباق بوش بلت ان (Built-in) في مصر بخدمة منزلية سريعة وقطع غيار أصلية وضمان رسمي. تغطية القاهرة والجيزة والإسكندرية. اتصل الآن 01211114528."
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "صيانة غسالات أطباق بوش بلت ان (Built-in)",
              "description":
                "خدمة صيانة معتمدة لغسالات أطباق بوش المدمجة (Built-in) في مصر. إصلاح منزلي للأعطال بقطع غيار أصلية وضمان شامل.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Bosch Egypt Dishwashers Service",
                "telephone": "+201211114528",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Cairo",
                  "addressCountry": "EG"
                }
              },
              "areaServed": [
                "Cairo",
                "Giza",
                "Alexandria",
                "October",
                "Zayed",
                "New Cairo",
                "Sheraton"
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "ما هو رقم صيانة غسالات أطباق بوش بلت ان المعتمد؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "رقم صيانة غسالات أطباق بوش بلت ان المعتمد هو 01211114528 لطلب الزيارات المنزلية الفورية وإصلاح كافة أعطال الأجهزة المدمجة."
                  }
                },
                {
                  "@type": "Question",
                  "name": "أين أجد فروع صيانة غسالات أطباق بوش البلت ان في الجيزة؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "تغطي الخدمة الدقي والمهندسين و6 أكتوبر والشيخ زايد وفيصل والهرم عبر الرقم 01211114528."
                  }
                },
                {
                  "@type": "Question",
                  "name": "كيف يمكنني حجز موعد صيانة غسالات أطباق بوش (Built-in)؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "يمكن الحجز عبر الخط الساخن 01211114528 لخدمة مناطق مدينتي والشروق والرحاب ومصر الجديدة بزيارات فورية."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل يوجد توكيل صيانة غسالات أطباق بوش بلت ان في الإسكندرية؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "نعم، نغطي الإسكندرية والساحل الشمالي بفرق متخصصة لتقديم خدمة صيانة غسالات أطباق بوش بلت ان عبر الرقم 01211114528."
                  }
                }
              ]
            }
          ]
        })}
      </script>
    </Helmet>
       {/* ================= HERO ================= */}
       <section
         className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
         style={{ backgroundImage: `url(${heroImg})` }}
       >
         <div className="absolute inset-0 bg-black/70"></div>
 
         <div className="relative z-10 text-white max-w-3xl px-4">
 
           <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
أهلاً بكـــم في مركز صيانة غسالات أطباق بوش بلت ان (Built-in)</h1>
 
           <p className="text-gray-200 mb-8 text-base md:text-lg">
صيانة   غسالات أطباق بوش بلت ان بوش المعتمدة من Bosch Egypt
           </p>
 
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
 
             <a
               href="tel:01211114528"
               className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-lg font-bold transition shadow-lg"
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
       </section>
 
       {/* ================= SECTION 2 ================= */}
       <section className="py-20 px-4">
 
         <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
           غسالات أطباق بوش بلت ان  صيانة   <span className="text-red-600">Bosch</span>
         </h1>
 
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
لماذا نحن الخيار الأفضل لصيانة غسالات أطباق بوش بلت ان؟        </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">تعد توكيل بوش مصر الواجهة الموثوقة لكل من يبحث عن دقة متناهية في صيانة غسالات أطباق بوش بلت ان، حيث تتطلب هذه الأجهزة المدمجة خبرة خاصة للحفاظ على سلامة التوصيلات المخفية وتصميم المطبخ. نحن نوفر فنيين مدربين في صيانة أجهزة بوش على أعلى مستوى للتعامل مع التكنولوجيا الألمانية المعقدة لغسالات الأطباق المدمجة. اختيارك لنا يضمن لك فحصاً شاملاً ودقيقاً يعيد لجهازك كفاءته في التنظيف والتعقيم بضمان معتمد، مما يجعلنا رواد صيانة غسالات أطباق بوش بلت ان في مصر.
</p>
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
 
         </div>
       </section>
 
 
            {/* ================= SECTION 2 ================= */}
       <section className=" ">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
 
 
              <div className="text-right">
 
             <h2 className="text-2xl font-semibold mb-4 text-gray-900">
أبرز أعطال غسالات أطباق بوش البلت ان وكيفية معالجتها        </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">تتنوع أعطال غسالات أطباق بوش البلت ان بين انسداد طلمبة الطرد، تسريب المياه من الأبواب المدمجة، أو ظهور رموز أعطال مثل E15 وE24. يقوم خبراء صيانة بوش مصر باستخدام أحدث أجهزة الاستشعار لتحديد العطل بدقة دون الحاجة لفك وحدات المطبخ بشكل عشوائي. سواء كان العطل في سخان المياه (Heater) أو في توزيع الرشاشات، نضمن لك تصليح غسالات أطباق بوش بلت ان في منزلك، مع إعادة ضبط المصنع لضمان دورات غسيل هادئة وموفرة للطاق </p>             <div className="flex flex-col sm:flex-row gap-4">
 
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
 
            {/* ================= SECTION 2 ================= */}
  <section className=" ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


          
          <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>
<div className="text-right bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">

  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
قطع الغيار الأصلية لغسالات أطباق بوش بلت ان  </h2>

  {/* Intro */}
  <p className="text-gray-600 leading-[2.2em] mb-6 text-sm md:text-base">
نحن نؤمن بأن استدامة الأجهزة المدمجة تعتمد على جودة المكونات، لذا نوفر كافة قطع غيار غسالات أطباق بوش بلت ان الأصلية والمستوردة. عند طلب صيانة غسالات أطباق بوش بلت ان، نلتزم بتركيب طلمبات، فلاتر، وصمامات أمان معتمدة بضمان رسمي. يمكنك التواصل عبر الخط الساخن بوش للحصول على قطع الغيار الأصلية، حيث نرفض تماماً استخدام البدائل التجارية، مما يعزز مكانتنا كأفضل مركز صيانة بوش مصر المتخصص في أجهزة البلت ان.
  </p>


  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">

    <a
      href="tel:01211114528"
      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition shadow-md text-center"
    >
      اتصل الآن
    </a>


  </div>

</div>



       
        </div>
      </section>

      
            {/* ================= SECTION 2 ================= */}
       <section className=" ">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
 
 
              <div className="text-right">
 
             <h2 className="text-2xl font-semibold mb-4 text-gray-900">
أقرب فرع صيانة غسالات أطباق بوش بلت ان بالقرب منك      </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">تغطي شبكة فروعنا أوسع نطاق جغرافي لضمان سرعة تلبية بلاغات صيانة غسالات أطباق بوش بلت ان المنزلية. إذا كنت في شرق القاهرة، نخدمك في مدينة نصر و التجمع. كما يتوفر دعمنا الفني في المهندسين، المعادي، وفي المجتمعات العمرانية الجديدة مثل 6 أكتوبر و الشيخ زايد. أسطولنا مجهز للوصول إليك فور تواصلك معنا عبر الرقم الموحد 01211114528. </p>             <div className="flex flex-col sm:flex-row gap-4">
 
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
   
 
 
       {/* ================= TIPS ================= */}
       <section
         className="relative py-24 bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${heroImg2})` }}
       >
         <div className="absolute inset-0 bg-black/60"></div>
 
         <div className="relative z-10 bg-white/95 rounded-2xl shadow-2xl max-w-3xl mx-auto px-8 py-10 text-center">
 
           <h3 className="text-2xl font-bold mb-6 text-gray-900">
             نصائح للحفاظ على   غسالات أطباق بوش بلت ان 💡
           </h3>
 
           <ul className="space-y-4 text-gray-700">
 
             <li className="flex items-center justify-center gap-2">
               <span className="text-green-500">✔</span>
 غسالات أطباق بوش بلت ان             </li>
 
             <li className="flex items-center justify-center gap-2">
               <span className="text-green-500">✔</span>
             استخدم  مسحوق مناسب
             </li>
 
             <li className="flex items-center justify-center gap-2">
               <span className="text-green-500">✔</span>
               نظف الفلتر بانتظام لتجنب الأعطال
             </li>
 
           </ul>
 
         </div>
       </section>
 
       {/* ================= SERVICES ================= */}
       <section className="px-4">
 
         <h2 className="text-center text-3xl font-bold mb-10">
           خدماتنا
         </h2>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
 
           <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
             <img src={frame1} className="w-24 h-24" />
             <h3 className="font-bold mt-4">إصلاح الأعطال</h3>
             <p className="text-gray-600 text-sm text-center mt-2">
               إصلاح جميع الأعطال بسرعة وكفاءة
             </p>
           </div>
 
           <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
             <img src={frame2} className="w-24 h-24" />
             <h3 className="font-bold mt-4">صيانة دورية</h3>
             <p className="text-gray-600 text-sm text-center mt-2">
               متابعة دورية للحفاظ على الأداء
             </p>
           </div>
 
           <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
             <img src={frame3} className="w-24 h-24" />
             <h3 className="font-bold mt-4">دعم فني</h3>
             <p className="text-gray-600 text-sm text-center mt-2">
               دعم فني متوفر طوال الوقت
             </p>
           </div>
 
         </div>
       </section>
 
       {/* ================= CTA ================= */}
       <section
         className="relative py-24 bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${img2})` }}
       >
         <div className="absolute inset-0 bg-black/60"></div>
 
         <div className="relative z-10 max-w-3xl mx-auto px-8 py-12 text-center text-white">
 
           <h3 className="text-2xl md:text-3xl font-bold mb-4">
             محتاج صيانة  غسالات أطباق بوش بلت ان؟
           </h3>
 
           <p className="text-gray-200 mb-8">
             تواصل معنا الآن واحصل على أفضل خدمة صيانة بضمان معتمد
           </p>
 
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
 
             <a
               href="tel:01211114528"
               className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold"
             >
               اتصل الآن
             </a>
 
             <a
               href="https://wa.me/201211114528"
               className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
             >
               واتساب
             </a>
 
           </div>
 
         </div>
       </section>
       
 
    
       <BuiltinDishwashersfaqAR />
 
     </div>
   );
}