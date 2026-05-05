import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DeepfreezerfaqAr() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم صيانة ديب فريزر بوش؟",
      answer: (
        <>
          رقم صيانة ديب فريزر بوش{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          هو أسرع طريقة للحصول على دعم فني فوري. يتم إرسال فني متخصص لحد البيت
          مع فحص شامل وإصلاح باستخدام قطع غيار أصلية.
        </>
      ),
    },
    {
      question: "كيف أحجز صيانة ديب فريزر بوش؟",
      answer: (
        <>
          يمكنك الحجز عبر الاتصال على{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://wa.me/201211114528"
            target="_blank"
            className="text-green-600 font-semibold"
          >
            واتساب
          </a>{" "}
          وسيتم تحديد أقرب موعد زيارة فني.
        </>
      ),
    },
    {
      question: "هل صيانة ديب فريزر بوش متاحة في المنزل؟",
      answer: (
        <>
          نعم، خدمة صيانة ديب فريزر بوش متاحة بالكامل في المنزل بدون نقل الجهاز،
          فقط اتصل على{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          وسيتم إرسال الفني مباشرة.
        </>
      ),
    },
    {
      question: "كم سعر صيانة ديب فريزر بوش؟",
      answer: (
        <>
          سعر الصيانة يختلف حسب العطل، لكن يمكنك معرفة التكلفة قبل الإصلاح
          بالاتصال على{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          للفحص والتسعير الدقيق.
        </>
      ),
    },
    {
      question: "ما أشهر أعطال ديب فريزر بوش؟",
      answer: (
        <>
          تشمل الأعطال ضعف التجميد، تسريب مياه، صوت عالي أو توقف الجهاز. يتم
          إصلاحها عبر الاتصال على{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>
          .
        </>
      ),
    },
    {
      question: "هل يمكن إصلاح ديب فريزر بوش في نفس اليوم؟",
      answer: (
        <>
          نعم، نوفر خدمة إصلاح في نفس اليوم حسب حالة العطل عبر الاتصال على{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>
          .
        </>
      ),
    },
    {
      question: "هل يوجد قطع غيار أصلية لديب فريزر بوش؟",
      answer: (
        <>
          نعم، جميع الإصلاحات تتم باستخدام قطع غيار أصلية لضمان كفاءة الجهاز
          عبر صيانة بوش{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>
          .
        </>
      ),
    },
    {
      question: "ما هو أقرب مركز صيانة ديب فريزر بوش؟",
      answer: (
        <>
          يمكنك اختيار أقرب فرع من خلال الروابط التالية:{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مدينة-نصر"
            className="text-blue-600"
          >
            مدينة نصر
          </a>{" "}
          |{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الإسكندرية"
            className="text-blue-600"
          >
            الإسكندرية
          </a>{" "}
          |{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الساحل-الشمالي"
            className="text-blue-600"
          >
            الساحل الشمالي
          </a>
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
          الأسئلة الشائعة – ديب فريزر بوش
        </h2>
        <p className="text-gray-500">
          إجابات سريعة لكل أسئلتك حول صيانة ديب فريزر بوش
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