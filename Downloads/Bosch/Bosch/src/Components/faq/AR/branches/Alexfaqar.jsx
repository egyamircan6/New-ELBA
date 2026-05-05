import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Alexfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أتواصل مع صيانة غسالات بوش في الإسكندرية؟",
      answer: (
        <>
          يمكنك الاتصال مباشرة على{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            الخط الساخن بوش
          </a>
          . كما يمكنك الحجز عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600 underline"
            target="_blank"
          >
            الواتساب
          </a>
          .
        </>
      ),
    },
    {
      question: "ما هو رقم توكيل صيانة ثلاجات وديب فريزر بوش بالإسكندرية؟",
      answer: (
        <>
          الرقم الرسمي هو{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            01211114528
          </a>{" "}
          ويمكنك الحجز من خلال{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            الخط الساخن بوش
          </a>{" "}
          مع ضمان قطع غيار أصلية. تواصل أيضاً عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600 underline"
            target="_blank"
          >
            الواتساب
          </a>
          .
        </>
      ),
    },
    {
      question: "هل تتوفر صيانة لغسالات الأطباق والمجففات بالإسكندرية؟",
      answer: (
        <>
          نعم، نوفر صيانة متخصصة لغسالات الأطباق والمجففات. اطلب الخدمة عبر{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            الخط الساخن بوش
          </a>{" "}
          أو الاتصال على{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600 underline"
            target="_blank"
          >
            الواتساب
          </a>
          .
        </>
      ),
    },
    {
      question: "هل يقدم التوكيل صيانة لأجهزة البلت إن في الإسكندرية؟",
      answer: (
        <>
          نعم، نحن متخصصون في صيانة الأفران والشفاطات والمسطحات البلت إن. للحجز
          اتصل على{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-blue-600 underline"
            target="_blank"
          >
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600 underline"
            target="_blank"
          >
            الواتساب
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
          الأسئلة الشائعة لصيانة بوش بالإسكندرية
        </h2>
        <p className="text-gray-500">
          إجابات سريعة مع طرق التواصل المباشر
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