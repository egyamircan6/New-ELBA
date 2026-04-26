import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function FlatsfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة مسطح بوش في مصر؟",
      answer: (
        <>
          رقم صيانة مسطح بوش المعتمد هو{" "}
          <a href="tel:01211114528" className="text-red-600 font-bold">
            01211114528
          </a>{" "}
          ويمكنك من خلاله حجز{" "}
          <Link to="/hob-repair" className="text-red-600 underline">
            صيانة مسطح بوش
          </Link>{" "}
          منزلية مع فنيين متخصصين وتشخيص دقيق للمشكلة.
        </>
      ),
    },
    {
      question: "هل يوجد توكيل صيانة مسطح بوش معتمد؟",
      answer:
        "نعم، يوجد توكيل صيانة مسطح بوش تابع لـ Bosch Egypt عبر الرقم 01211114528 لتقديم فحص دقيق وإصلاح احترافي باستخدام قطع غيار أصلية مع ضمان بعد الإصلاح.",
    },
    {
      question: "هل تختلف صيانة مسطح بوش 60 سم عن 75 أو 90؟",
      answer:
        "نعم، تختلف حسب عدد الشعلات ونظام التحكم الداخلي، ويتم إرسال فني مناسب لكل موديل لضمان الإصلاح الصحيح.",
    },
    {
      question: "هل توفرون صيانة مسطح بوش بلت إن أو كهرباء؟",
      answer: (
        <>
          نعم، نوفر{" "}
          <Link to="/bosch-services" className="text-red-600 underline">
            صيانة أجهزة بوش
          </Link>{" "}
          للمساطح الغاز والكهرباء مع فحص شامل للحساسات ولوحة التحكم.
        </>
      ),
    },
    {
      question: "هل تتوفر صيانة مسطح بوش في القاهرة والجيزة؟",
      answer:
        "نعم، نوفر خدمة صيانة في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، المعادي، مصر الجديدة، مدينة نصر، التجمع، الشروق، الرحاب، والمزيد من المناطق مع خدمة منزلية سريعة.",
    },
    {
      question: "هل تتوفر صيانة بوش في المناطق الساحلية؟",
      answer: (
        <>
          نعم، نوفر{" "}
          <Link to="/bosch-services" className="text-red-600 underline">
            صيانة بوش في مصر
          </Link>{" "}
          مع تغطية الساحل الشمالي وبعض المدن الساحلية حسب التوفر عبر الرقم 01211114528.
        </>
      ),
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
          الأسئلة الشائعة عن صيانة مسطح بوش
        </h2>
        <p className="text-gray-500">
          أهم الأسئلة التي يطرحها العملاء حول صيانة مسطحات بوش في مصر
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