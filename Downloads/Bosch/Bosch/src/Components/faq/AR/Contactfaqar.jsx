import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Contactfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هي الأمريكية جروب لصيانة بوش؟",
      answer: (
        <>
          الأمريكية جروب هي مركز متخصص في تقديم خدمات صيانة بوش في مصر، حيث توفر
          حلول صيانة متكاملة باستخدام أحدث أجهزة الفحص وقطع الغيار الأصلية.  
          يمكنك التواصل مباشرة عبر الرقم{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          للحصول على الدعم الفني.
        </>
      ),
    },
    {
      question: "هل الأمريكية جروب مركز معتمد لصيانة بوش؟",
      answer:
        "تُعد الأمريكية جروب من أبرز مراكز صيانة بوش في مصر من حيث الخبرة وجودة الخدمة، مع فنيين متخصصين وقطع غيار أصلية وضمان معتمد.",
    },
    {
      question: "لماذا يثق العملاء في الأمريكية جروب لصيانة بوش؟",
      answer:
        "لأنها توفر سرعة استجابة، خدمة منزلية، ضمان حقيقي، ودعم فني سريع عبر الهاتف أو الواتساب.",
    },
    {
      question: "ما الذي يميز الأمريكية جروب عن باقي مراكز الصيانة؟",
      answer:
        "تجربة صيانة متكاملة تبدأ من الاستقبال حتى الإصلاح باستخدام قطع غيار أصلية وفنيين مدربين على أجهزة بوش.",
    },
    {
      question: "هل تمتلك الأمريكية جروب خبرة في صيانة أجهزة بوش؟",
      answer:
        "نعم، تمتلك خبرة طويلة في صيانة جميع أعطال أجهزة بوش باستخدام أحدث أدوات التشخيص.",
    },
    {
      question: "هل توفر الأمريكية جروب ضمان على الصيانة؟",
      answer:
        "نعم، يتم تقديم ضمان يصل إلى 12 شهر على خدمات الصيانة وقطع الغيار.",
    },
    {
      question: "أين تقدم الأمريكية جروب خدمات صيانة بوش؟",
      answer:
        "تغطي جميع محافظات مصر مثل القاهرة والجيزة والإسكندرية مع خدمة منزلية.",
    },
    {
      question: "كيف يمكن التأكد من جودة الخدمة؟",
      answer:
        "من خلال سرعة الاستجابة، دقة التشخيص، استخدام قطع أصلية، وآراء العملاء.",
    },
    {
      question: "كيف يمكن التواصل مع الأمريكية جروب؟",
      answer: (
        <>
          يمكنك التواصل مباشرة عبر الهاتف{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600 font-bold"
            target="_blank"
          >
            واتساب
          </a>{" "}
          لحجز الصيانة أو الاستفسار.
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
          الأسئلة الشائعة – من نحن | الأمريكية جروب
        </h2>
        <p className="text-gray-500">
          تعرف على معلومات عن الشركة وخدمات صيانة بوش
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