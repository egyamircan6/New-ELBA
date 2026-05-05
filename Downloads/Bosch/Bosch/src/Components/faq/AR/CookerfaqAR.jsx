import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookerfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة بوتاجاز بوش في مصر؟",
      answer: (
        <>
          رقم صيانة بوتاجاز بوش المعتمد هو{" "}
          <a href="tel:01211114528" className="text-red-600 font-bold">
            01211114528
          </a>{" "}
          ويمكنك من خلاله حجز{" "}
          <Link to="/cookers-repair" className="text-red-600 underline">
            صيانة بوتاجاز بوش
          </Link>{" "}
          منزلية مع فنيين متخصصين من Bosch Egypt مع ضمان وقطع غيار أصلية.
        </>
      ),
    },
    {
      question: "هل يوجد مركز صيانة بوتاجاز بوش معتمد؟",
      answer:
        "نعم، يوجد مركز صيانة معتمد تابع لـ Bosch Egypt يقدم خدمات فحص وإصلاح جميع أعطال البوتاجازات باستخدام قطع غيار أصلية وضمان رسمي عبر الرقم 01211114528.",
    },
    {
      question: "ما هو ضمان بوتاجاز بوش بعد الصيانة؟",
      answer:
        "نوفر ضمان على جميع أعمال الصيانة وقطع الغيار الأصلية بعد الإصلاح من خلال توكيل بوش مصر لضمان أفضل أداء للجهاز.",
    },
    {
      question: "هل تتوفر صيانة بوش في جميع محافظات مصر؟",
      answer: (
        <>
          نعم، نوفر خدمة{" "}
          <Link to="/bosch-services" className="text-red-600 underline">
            صيانة بوش في مصر
          </Link>{" "}
          في معظم المحافظات مثل القاهرة، الجيزة، الإسكندرية، و6 أكتوبر مع خدمة منزلية سريعة.
        </>
      ),
    },
    {
      question: "ما هي الأعطال الشائعة في بوتاجاز بوش؟",
      answer:
        "من أشهر الأعطال ضعف الشعلة، انسداد الرشاشات، مشاكل الاشتعال الذاتي، أو أعطال في مفاتيح التشغيل، ويتم إصلاحها بواسطة فنيين متخصصين.",
    },
    {
      question: "كيف أتواصل مع خدمة ما بعد البيع بوش؟",
      answer: (
        <>
          يمكنك التواصل مع{" "}
          <Link to="/after-sales" className="text-red-600 underline">
            خدمة ما بعد البيع بوش
          </Link>{" "}
          عبر الرقم 01211114528 للحصول على دعم فني أو حجز صيانة منزلية.
        </>
      ),
    },
    {
      question: "كم تبلغ رسوم زيارة فني صيانة بوش؟",
      answer:
        "يتم تحديد رسوم الزيارة حسب نوع العطل والموقع، ويتم إبلاغ العميل بالتكلفة قبل بدء أي إصلاح لضمان الشفافية.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          الأسئلة الشائعة عن صيانة بوتاجاز بوش
        </h2>
        <p className="text-gray-500">
          هنا هنجاوب على أهم الأسئلة الخاصة بصيانة بوتاجاز بوش في مصر
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer shadow-sm hover:shadow-md transition"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm md:text-base text-gray-800">
                {item.question}
              </p>

              <ChevronDown
                className={`transition-transform duration-300 text-red-600 ${
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