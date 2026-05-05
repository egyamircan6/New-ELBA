import React from "react";

import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import BuiltinRefrigeratorfaqAR from "../../faq/AR/BuiltinRefrigeratorfaqAR";
import { Helmet } from "react-helmet-async";

export default function BuiltinRefrigeratorAR() {
  return (
    <div dir="rtl" className="bg-white space-y-24">

      {/* ================= SEO + SGE ================= */}
      <Helmet>
        <title>
          صيانة ثلاجات بوش بلت ان (Built-in) | اطلب الآن خدمة معتمدة في مصر
        </title>

        <meta
          name="description"
          content="هل تبحث عن صيانة ثلاجات بوش بلت ان؟ نوفر إصلاح أعطال التبريد، الكومبريسور، وشحن الفريون بقطع غيار أصلية وضمان معتمد. اتصل الآن 01211114528."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://bosch-egypts.com/صيانة-ثلاجات-بوش-بلت-ان"
        />

        {/* Schema (SGE Optimized) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "صيانة ثلاجات بوش بلت ان في مصر - دليل شامل وخدمة معتمدة",
                description:
                  "خدمة صيانة متخصصة لثلاجات بوش المدمجة (Built-in) تشمل إصلاح أعطال التبريد والكومبريسور والفريون داخل المنزل.",
                author: {
                  "@type": "Organization",
                  name: "Bosch Egypt Built-in Refrigerators Service",
                },
                mainEntityOfPage:
                  "https://bosch-egypts.com/صيانة-ثلاجات-بوش-بلت-ان",
              },

              {
                "@type": "Service",
                name: "صيانة ثلاجات بوش بلت ان (Built-in)",
                description:
                  "خدمة صيانة منزلية متخصصة لثلاجات بوش المدمجة تشمل إصلاح التبريد والكومبريسور وشحن الفريون بقطع غيار أصلية وضمان رسمي.",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Bosch Egypt Built-in Refrigerators Service",
                  telephone: "+201211114528",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Cairo",
                    addressCountry: "EG",
                  },
                },
                areaServed: [
                  "Cairo",
                  "Giza",
                  "Alexandria",
                  "6 October",
                  "Sheikh Zayed",
                  "New Cairo",
                  "Sheraton",
                  "Rehab",
                  "Madinty",
                ],
              },

              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "ما هو رقم صيانة ثلاجات بوش المدمجة المعتمد؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "رقم صيانة ثلاجات بوش المدمجة هو 01211114528 لخدمة منزلية فورية داخل مصر.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "هل يتم إصلاح ثلاجات بوش البلت ان في المنزل؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "نعم يتم الإصلاح داخل المنزل بدون نقل الجهاز مع الحفاظ على المطبخ المدمج.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "ما هي أشهر أعطال ثلاجات بوش بلت ان؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "ضعف التبريد، تسريب الفريون، توقف الكومبريسور، وأعطال لوحة التحكم.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "هل يوجد ضمان على صيانة ثلاجات بوش بلت ان؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "نعم يوجد ضمان رسمي على قطع الغيار والإصلاح بعد الخدمة.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "كيف يمكنني حجز صيانة ثلاجة بوش بلت ان؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "يمكنك الاتصال على 01211114528 أو واتساب لحجز زيارة فورية.",
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
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            صيانة ثلاجات بوش بلت ان (Built-in) في مصر - خدمة معتمدة 100%
          </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
            إصلاح أعطال التبريد، الكومبريسور، والفريون بقطع غيار أصلية وضمان رسمي داخل المنزل
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

      {/* ================= CONTENT ================= */}
      <section className="px-4 py-20 max-w-6xl mx-auto space-y-10">

        <h2 className="text-3xl font-bold text-center">
          لماذا تختارنا في صيانة ثلاجات بوش بلت ان؟
        </h2>

        <p className="text-gray-600 leading-loose text-center">
          نحن مركز متخصص في صيانة ثلاجات بوش المدمجة (Built-in) داخل مصر،
          نقدم خدمة احترافية تعتمد على فنيين خبراء في فك وتركيب الثلاجات داخل المطابخ
          دون أي ضرر للديكور، مع استخدام قطع غيار أصلية وضمان رسمي.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-5 border rounded-xl shadow">
            <img src={frame1} className="w-20 mx-auto" />
            <h3 className="font-bold mt-3">إصلاح فوري</h3>
          </div>

          <div className="p-5 border rounded-xl shadow">
            <img src={frame2} className="w-20 mx-auto" />
            <h3 className="font-bold mt-3">قطع غيار أصلية</h3>
          </div>

          <div className="p-5 border rounded-xl shadow">
            <img src={frame3} className="w-20 mx-auto" />
            <h3 className="font-bold mt-3">ضمان رسمي</h3>
          </div>

        </div>

      </section>


         {/* ================= SECTION 2 ================= */}
             <section className="py-20 px-4">
       
               <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
                  ثلاجات بوش بلت ان  صيانة   <span className="text-red-600">Bosch</span>
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
لماذا تختارنا لخدمة صيانة ثلاجات بوش المدمجة؟     </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">يعتبر توكيل صيانة ثلاجات بوش البلت ان الوجهة الأولى لكل من يبحث عن صيانة ثلاجات بوش المدمجة، حيث تتطلب هذه الفئة من الثلاجات دقة استثنائية نظرًا لوجودها داخل وحدات المطبخ الخشبية. نحن نوفر فنيين متخصصين في صيانة أجهزة بوش لديهم المهارة في فك وتركيب الثلاجة دون المساس بديكور المطبخ. اختيارك لنا يضمن لك الحفاظ على نظام التبريد المتطور لثلاجات بوش، مما يجعلنا الخيار الأمثل لتقديم خدمة صيانة ثلاجات بوش بلت ان بمعايير عالمية وضمان حقيقي يمتد لسنوات.
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
             <section className="py-20 px-4">
       
          

               <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                   <div className="text-right">
       
                   <h2 className="text-2xl font-semibold mb-4 text-gray-900">
أبرز الأعطال التي نعالجها في صيانة ثلاجات بوش البلت ان   </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">نحن خبراء في حل كافة أعطال ثلاجات بوش البلت ان، بدءًا من ضعف التبريد في الكابينة، تسريب غاز الفريون، وصولاً إلى مشاكل لوحة التحكم الذكية وتوقف الموتور (الكومبريسور). يقوم فريق صيانة بوش مصر بفحص دائرة النوفروست وحساسات الحرارة بدقة متناهية. سواء كانت ثلاجتك تعاني من تكوين ثلج أو صوت عالي، نضمن لك تصليح ثلاجة بوش Built-in باستخدام أدوات قياس رقمية تحدد العطل في مكانه، مما يوفر عليك عناء نقل الثلاجة المدمجة الثقيلة خارج المطبخ
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
قطع الغيار الأصلية في مركز صيانة ثلاجات بوش Built-in
  </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">استدامة الثلاجة تعتمد على جودة قطع الغيار، لذا يوفر مركزنا كافة قطع غيار ثلاجات بوش Built-in الأصلية والمستوردة من ألمانيا. عند طلبك لخدمة صيانة ثلاجات بوش بلت ان، نلتزم بتوفير كروت التحكم، المراوح، والحساسات المعتمدة التي تضمن عودة الثلاجة لمستوى كفاءتها الأول. يمكنك الاتصال بنا عبر الخط الساخن بوش للحصول على قطع غيار أصلية بأسعار تنافسية وضمان رسمي، مما يعزز الثقة في خدماتنا كأفضل مقدم خدمة صيانة بوش مصر للثلاجات المدمجة. 
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
             <section className="py-20 px-4">
       
          

               <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                   <div className="text-right">
       
                   <h2 className="text-2xl font-semibold mb-4 text-gray-900">
أقرب فرع صيانة ثلاجات بوش بلت ان بالقاهرة والجيزة  </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">نمتلك أسطول سيارات مجهز لتغطية كافة المحافظات لتقديم خدمة صيانة ثلاجات بوش بلت ان في منزلك. إذا كنت تبحث عن فني في شرق القاهرة، نخدمك في مدينة نصر و التجمع و مصر الجديدة. كما نوفر تغطية فورية في المهندسين و 6 أكتوبر و الشيخ زايد. بمجرد اتصالك برقمنا الموحد 01211114528، نرسل لك مهندساً متخصصاً لضمان عودة ثلاجتك للعمل بأقصى طاقتها في أسرع وقت
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
       
                 <div className="flex justify-center">
                   <img
                     src={img}
                     alt="washing machine"
                     className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
                   />
                 </div>
       
              
       
               </div>
             </section>

      {/* ================= FAQ ================= */}
      <BuiltinRefrigeratorfaqAR />

    </div>
  );
}