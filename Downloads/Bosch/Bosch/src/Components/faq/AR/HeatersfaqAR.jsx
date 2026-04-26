import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeatersfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة سخانات بوش المعتمد في مصر؟",
      answer: (
        <>
          يمكنك التواصل مع مركز{" "}
          <a
            href="https://bosch-egypts.com/صيانة-سخانات-بوش"
            className="text-blue-600 font-bold"
          >
            صيانة سخانات بوش
          </a>{" "}
          المعتمد عبر الرقم <strong>01211114528</strong>.
          توفر الخدمة دعماً فنياً فورياً لإصلاح سخانات الغاز والكهرباء في{" "}
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
          </a>
          .
        </>
      ),
    },

    {
      question: "أين أجد فروع صيانة سخانات بوش في القاهرة والجيزة؟",
      answer: (
        <>
          نغطي{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مدينة-نصر"
            className="text-blue-600"
          >
            مدينة نصر
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-التجمع"
            className="text-blue-600"
          >
            التجمع
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-المعادي"
            className="text-blue-600"
          >
            المعادي
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-فيصل"
            className="text-blue-600"
          >
            فيصل
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الهرم"
            className="text-blue-600"
          >
            الهرم
          </a>{" "}
          و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الدقي"
            className="text-blue-600"
          >
            الدقي
          </a>
          . للحجز اتصل <strong>01211114528</strong>.
        </>
      ),
    },

    {
      question: "هل يوفر توكيل صيانة سخانات بوش ضماناً على الإصلاح؟",
      answer: (
        <>
          نعم، يمنح{" "}
          <a
            href="https://bosch-egypts.com/صيانة-أجهزة-بوش"
            className="text-blue-600 font-bold"
          >
            توكيل صيانة سخانات بوش
          </a>{" "}
          ضماناً رسمياً على أعمال الإصلاح وقطع الغيار.
          الخدمة متوفرة في{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مدينتي"
            className="text-blue-600"
          >
            مدينتي
          </a>{" "}
          و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الشروق"
            className="text-blue-600"
          >
            الشروق
          </a>
          .
        </>
      ),
    },

    {
      question: "كيف يمكنني التواصل مع خدمة عملاء صيانة سخانات بوش بالأقاليم؟",
      answer: (
        <>
          يمكنك التواصل مع{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مصر"
            className="text-blue-600 font-bold"
          >
            خدمة عملاء صيانة سخانات بوش
          </a>{" "}
          عبر <strong>01211114528</strong>.
          الخدمة تغطي{" "}
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
          </a>
          .
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          الأسئلة الشائعة حول صيانة سخانات بوش
        </h2>

        <p className="text-gray-500">
          هنا هنجاوبك على أكتر الأسئلة اللي بيكررها عملائنا
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-4 cursor-pointer transition"
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