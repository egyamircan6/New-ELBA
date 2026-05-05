import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function BuiltinRefrigeratorfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة ثلاجات بوش المدمجة المعتمد؟",
      answer: (
        <>
          للحصول على دعم فني معتمد يمكنك التواصل مع{" "}
          <a href="/صيانة-ثلاجات-بوش" className="text-blue-600 font-semibold">
            مركز صيانة ثلاجات بوش المدمجة
          </a>{" "}
          عبر الرقم <strong>01211114528</strong>.  
          نوفر خدمة منزلية في{" "}
          <a href="/صيانة-بوش-شيراتون" className="text-blue-600">شيراتون</a>{" "}
          و{" "}
          <a href="/صيانة-بوش-المعادي" className="text-blue-600">المعادي</a>{" "}
          مع فحص كامل داخل المنزل بدون نقل الجهاز.
        </>
      ),
    },
    {
      question: "أين تتوفر مراكز صيانة ثلاجات بوش بلت ان في الجيزة؟",
      answer: (
        <>
          تغطي الخدمة جميع مناطق الجيزة مثل{" "}
          <a href="/صيانة-بوش-الدقي" className="text-blue-600">الدقي</a>،{" "}
          <a href="/صيانة-بوش-المهندسين" className="text-blue-600">المهندسين</a>،{" "}
          <a href="/صيانة-بوش-الهرم" className="text-blue-600">الهرم</a>.  
          للحجز اتصل على <strong>01211114528</strong> ويتم الإصلاح في المنزل.
        </>
      ),
    },
    {
      question: "كيف يمكنني حجز موعد صيانة ثلاجات بوش البلت ان؟",
      answer: (
        <>
          يمكنك حجز موعد عبر الاتصال أو واتساب على{" "}
          <strong>01211114528</strong>.  
          نخدم مناطق{" "}
          <a href="/صيانة-بوش-6-أكتوبر" className="text-blue-600">6 أكتوبر</a>،{" "}
          <a href="/صيانة-بوش-الشيخ-زايد" className="text-blue-600">الشيخ زايد</a>،{" "}
          <a href="/صيانة-بوش-مدينتي" className="text-blue-600">مدينتي</a>{" "}
          بزيارة فورية.
        </>
      ),
    },
    {
      question: "هل يوفر توكيل صيانة ثلاجات بوش بلت ان ضماناً على الفريون؟",
      answer: (
        <>
          نعم، جميع خدمات{" "}
          <a href="/صيانة-ثلاجات-بوش" className="text-blue-600 font-semibold">
            صيانة ثلاجات بوش بلت ان
          </a>{" "}
          تشمل ضمان رسمي على الفريون وقطع الغيار.  
          للتواصل في{" "}
          <a href="/صيانة-بوش-الإسكندرية" className="text-blue-600">الإسكندرية</a>{" "}
          أو الساحل الشمالي اتصل بنا مباشرة.
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ================= SEO + SGE SCHEMA ================= */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "صيانة ثلاجات بوش بلت ان (Built-in)",
        "description":
          "خدمة صيانة معتمدة لثلاجات بوش المدمجة تشمل إصلاح أعطال التبريد والكومبريسور بقطع غيار أصلية وضمان رسمي داخل المنزل.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bosch Egypt Built-in Service",
          "telephone": "+201211114528",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cairo",
            "addressCountry": "EG"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof f.answer === "string" ? f.answer : "خدمة صيانة بوش بلت ان في مصر"
          }
        }))
      }
    ]
  };

  return (
    <div className="py-16 px-4" dir="rtl">

      {/* SEO */}
      <Helmet>
        <title>صيانة ثلاجات بوش بلت ان (Built-in) | خدمة معتمدة في مصر</title>

        <meta
          name="description"
          content="صيانة ثلاجات بوش بلت ان في مصر. إصلاح أعطال التبريد والكومبريسور ولوحة التحكم بقطع غيار أصلية وضمان معتمد. اتصل الآن 01211114528"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Helmet>

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          الأسئلة الشائعة حول صيانة ثلاجات بوش بلت ان
        </h2>
        <p className="text-gray-500 mt-2">
          إجابات مباشرة مبنية على أكثر استفسارات العملاء
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm md:text-base">
                {item.question}
              </p>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <div className="text-gray-600 text-sm mt-4 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}