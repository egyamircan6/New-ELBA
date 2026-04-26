import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BuiltinDishwashersfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة غسالات أطباق بوش بلت ان المعتمد؟",
      answer: (
        <>
          يمكنك طلب خدمة{" "}
          <a
            href="https://bosch-egypts.com/صيانة-غسالات-أطباق-بوش"
            className="text-blue-600 font-semibold"
          >
            صيانة غسالات أطباق بوش بلت ان
          </a>{" "}
          عبر الرقم الموحد <strong>01211114528</strong>.  
          نوفر زيارة منزلية فورية في{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مصر-الجديدة"
            className="text-blue-600"
          >
            مصر الجديدة
          </a>{" "}
          و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-شيراتون"
            className="text-blue-600"
          >
            شيراتون
          </a>{" "}
          مع فحص كامل داخل المطبخ بدون نقل الجهاز.
        </>
      ),
    },

    {
      question: "أين أجد فروع صيانة غسالات أطباق بوش البلت ان في الجيزة؟",
      answer: (
        <>
          نوفر صيانة في الجيزة داخل{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الدقي"
            className="text-blue-600"
          >
            الدقي
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-فيصل"
            className="text-blue-600"
          >
            فيصل
          </a>
          ، و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الهرم"
            className="text-blue-600"
          >
            الهرم
          </a>{" "}
          عبر رقم <strong>01211114528</strong>.  
          الخدمة تتم داخل المنزل بدون فك الجهاز.
        </>
      ),
    },

    {
      question: "كيف يمكنني حجز موعد صيانة غسالات أطباق بوش (Built-in)؟",
      answer: (
        <>
          لحجز صيانة غسالات أطباق بوش بلت ان اتصل على{" "}
          <strong>01211114528</strong>.  
          نغطي{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مدينتي"
            className="text-blue-600"
          >
            مدينتي
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الشروق"
            className="text-blue-600"
          >
            الشروق
          </a>
          ، و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الرحاب"
            className="text-blue-600"
          >
            الرحاب
          </a>{" "}
          مع زيارة فورية وفحص شامل للجهاز.
        </>
      ),
    },

    {
      question: "هل يوجد توكيل صيانة غسالات أطباق بوش بلت ان في الإسكندرية؟",
      answer: (
        <>
          نعم، نوفر خدمة{" "}
          <a
            href="https://bosch-egypts.com/صيانة-غسالات-أطباق-بوش"
            className="text-blue-600 font-semibold"
          >
            صيانة غسالات أطباق بوش بلت ان
          </a>{" "}
          في{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الإسكندرية"
            className="text-blue-600"
          >
            الإسكندرية
          </a>{" "}
          و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الساحل-الشمالي"
            className="text-blue-600"
          >
            الساحل الشمالي
          </a>{" "}
          عبر رقم <strong>01211114528</strong> مع استخدام قطع غيار أصلية.
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          أسئلة شائعة حول صيانة غسالات أطباق بوش بلت ان
        </h2>
        <p className="text-gray-500 mt-2">
          إجابات مباشرة وسريعة لأهم أسئلة العملاء
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
              <div className="text-gray-500 text-sm mt-4 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}