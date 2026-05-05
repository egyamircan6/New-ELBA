import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BuiltinOvenfaqarSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة أفران بوش بلت ان المعتمد؟",
      answer:
        "يمكنك طلب صيانة أفران بوش بلت ان عبر الرقم 01211114528 للحصول على زيارة منزلية فورية وفحص شامل داخل المنزل مع ضمان على الخدمة.",
    },
    {
      question: "هل يتم إصلاح فرن بوش البلت ان في المنزل؟",
      answer:
        "نعم، يتم الإصلاح داخل المنزل بدون نقل الجهاز، حيث يقوم الفني بفحص الفرن وإصلاحه في نفس المكان لضمان الحفاظ على المطبخ والأثاث.",
    },
    {
      question: "ما هي أشهر أعطال أفران بوش بلت ان؟",
      answer:
        "من أشهر الأعطال: ضعف التسخين، توقف المروحة، مشاكل الإشعال أو لوحة التحكم، ويتم إصلاحها باستخدام قطع غيار أصلية.",
    },
    {
      question: "هل يوجد ضمان على صيانة أفران بوش بلت ان؟",
      answer:
        "نعم، جميع أعمال الصيانة تشمل ضمان رسمي على الإصلاح وقطع الغيار لضمان أعلى كفاءة بعد الصيانة.",
    },
    {
      question: "هل تغطون جميع المحافظات؟",
      answer:
        "نعم، نوفر صيانة أفران بوش بلت ان في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع، مدينتي، الرحاب، والإسكندرية.",
    },
    {
      question: "كيف أحجز صيانة فرن بوش بلت ان؟",
      answer:
        "يمكنك الحجز مباشرة عبر الاتصال أو واتساب على 01211114528 وسيتم إرسال فني في أقرب وقت.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ===== FAQ Schema (SEO STRONG) ===== */
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="py-16 px-4">

      {/* SEO SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          الأسئلة الشائعة حول صيانة أفران بوش بلت ان
        </h2>
        <p className="text-gray-500 mt-2">
          إجابات سريعة ومباشرة لأهم أسئلة العملاء
        </p>
      </div>

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
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}