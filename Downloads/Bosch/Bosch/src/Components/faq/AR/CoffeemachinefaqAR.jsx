import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CoffeemachinefaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم الخط الساخن لصيانة مكنة قهوة بوش؟",
      answer: (
        <>
          يمكنك التواصل معنا عبر{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-red-600 font-bold"
          >
            الخط الساخن بوش
          </a>{" "}
          المخصص لماكينات القهوة على الرقم <strong>01211114528</strong>.
          نحن نوفر استجابة فورية لطلبات الصيانة في مناطق{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مدينة-نصر"
            className="text-red-600 font-bold"
          >
            صيانة بوش مدينة نصر
          </a>{" "}
          و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-شيراتون"
            className="text-red-600 font-bold"
          >
            صيانة بوش شيراتون
          </a>{" "}
          وكافة محافظات مصر.
        </>
      ),
    },

    {
      question: "هل يتم إصلاح أعطال ماكينة القهوة في المنزل؟",
      answer: (
        <>
          نعم، يتم توجيه فني متخصص في{" "}
          <a
            href="https://bosch-egypts.com/صيانة-مكنة-قهوة-بوش"
            className="text-red-600 font-bold"
          >
            صيانة مكنة قهوة بوش
          </a>{" "}
          إلى منزلك مباشرة للقيام بالفحص والإصلاح. نغطي مناطق واسعة تشمل{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-مدينتي"
            className="text-red-600 font-bold"
          >
            صيانة بوش مدينتي
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الشروق"
            className="text-red-600 font-bold"
          >
            صيانة بوش الشروق
          </a>
          ، و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الشيخ-زايد"
            className="text-red-600 font-bold"
          >
            صيانة بوش الشيخ زايد
          </a>
          .
        </>
      ),
    },

    {
      question: "متى تحتاج ماكينة قهوة بوش إلى صيانة احترافية؟",
      answer: (
        <>
          تحتاج الماكينة للصيانة عند ملاحظة تغير في طعم القهوة، تسريب مياه،
          أو توقف الماكينة عن طحن البن. نحن نتعامل مع كافة الأعطال بدقة عالية،
          ونوفر خدماتنا في{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الدقي"
            className="text-red-600 font-bold"
          >
            صيانة بوش الدقي
          </a>
          ،{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-الهرم"
            className="text-red-600 font-bold"
          >
            صيانة بوش الهرم
          </a>
          ، و{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-فيصل"
            className="text-red-600 font-bold"
          >
            صيانة بوش فيصل
          </a>
          .
        </>
      ),
    },

    {
      question: "هل يتوفر ضمان على قطع غيار ماكينة القهوة؟",
      answer: (
        <>
          بالتأكيد، عند استبدال أي من قطع الغيار الأصلية من خلالنا، ستحصل على
          ضمان معتمد يضمن لك جودة القطعة وأداء الماكينة. يمكنك الاستفسار عند زيارة
          الفني لك في{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-حلوان"
            className="text-red-600 font-bold"
          >
            صيانة بوش حلوان
          </a>{" "}
          أو{" "}
          <a
            href="https://bosch-egypts.com/صيانة-بوش-المقطم"
            className="text-red-600 font-bold"
          >
            صيانة بوش المقطم
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
          الأسئلة الشائعة عن صيانة مكنة قهوة بوش
        </h2>

        <p className="text-gray-500">
          هنا هنجاوبك على أكثر الأسئلة المتكررة من عملائنا
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