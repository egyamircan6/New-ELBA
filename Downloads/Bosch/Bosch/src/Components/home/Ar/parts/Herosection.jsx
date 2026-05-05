import React from 'react'
import heroBg from '../../../../assets/homebg.png'
import serviceimg from '../../../../assets/serviceimg.png'

import { Helmet } from 'react-helmet-async';

export default function Herosection() {
  return (
    <>
      
    <Helmet>
      <title>المـــركز الرئيـــسي للصيانة بوش Bosch مصر| bosch egypt
</title>
      <meta 
        name="description" 
        content="هل تبحث عن خدمة صيانة بوش Bosch المعتمدة في مصر. نوفر صيانة بقطع غيار بوش الأصلية لجميع الأجهزة (غسالات، ثلاجات، بوتاجازات، ميكروويف…إلخ). ولدينا فروع في جميع المناطق في القاهرة والمحافظات اتصل الآن على رقم صيانة بوش 01211114528 " 
      />
    </Helmet>
    
<section
  className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl px-4 text-white">

        <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
أهــلاً بكـــم مـــركــز صيانة بوش المعتمد في مصر        </h1>

        <p className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed">
          احجز صيانة أجهزة بوش الآن – خدمة احترافية مع قطع غيار أصلية وفنيين خبراء.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="tel:01211114528"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold transition shadow-lg"
          >
            اطلب صيانة الآن
          </a>

          <a
            href="https://wa.me/201211114528"
            className="border border-red-700 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            واتساب
          </a>

        </div>
      </div>
    </section>

   <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
           لماذا تختار مركزنا للصيانة 
 <span className="text-red-600"> بوش؟</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* 🖼️ Image */}
          <div className="flex justify-center">
            <img
              src={serviceimg}
              alt="Bosch Service"
              className="rounded shadow-lg w-full max-w-md"
            />
          </div>

    
          <div className="text-right">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              خدمات مركز صيانة بوش في مصر
            </h3>

            <p className="text-gray-600 leading-[2em] mb-6">
             عند اختيارك مركز صيانة بوش، فأنت تعتمد على جهة متخصصة تمتلك خبرة واسعة في صيانة أجهزة Bosch داخل مصر. نحن لا نقدّم خدمة إصلاح تقليدية، بل نوفر منظومة صيانة متكاملة تبدأ من التشخيص الدقيق للعطل وتنتهي بضمان مكتوب يضمن لك راحة البال.
نتميّز بفريق من الفنيين المعتمدين والمدرّبين على أحدث تقنيات التكنولوجيا الألمانية، سواء كنت تحتاج صيانة ثلاجات بوش، غسالات، أو أجهزة البلت إن. كما نلتزم باستخدام قطع غيار أصلية 100% للحفاظ على كفاءة الجهاز وإطالة عمره التشغيلي، مع سرعة استجابة تضمن وصول أقرب فني إلى منزلك في أسرع وقت ممكن.
لطلب صيانة بوش المعتمدة اتصل الآن على 01211114528
            </p>

            {/* 🔘 Buttons */}
            <div className="flex gap-4 justify-end">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                اطلب صيانة الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                واتساب
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
    </>


  );

}
