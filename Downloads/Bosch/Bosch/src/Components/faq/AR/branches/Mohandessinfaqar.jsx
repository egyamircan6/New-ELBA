import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Mohandessinfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أتواصل مع صيانة غسالات بوش في المهندسين؟",
      answer: (
        <>
          لطلب صيانة فورية للغسالات، اتصل على{" "}
          <a
            href="https://bosch-egypts.com/%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D8%A8%D9%88%D8%B4"
            className="text-blue-600 underline"
          >
            01211114528
          </a>{" "}
          أو من خلال{" "}
          <a
            href="https://bosch-egypts.com/%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D8%A8%D9%88%D8%B4"
            className="text-blue-600 underline"
          >
            الخط الساخن بوش
          </a>{" "}
          أو عبر{" "}
          <a href="https://wa.me/201211114528" className="text-blue-600 underline">
            واتساب
          </a>
          .
        </>
      ),
    },
    {
      question: "ما هو رقم توكيل صيانة ثلاجات بوش في المهندسين؟",
      answer: (
        <>
          يمكنك الاتصال على{" "}
          <a
            href="https://bosch-egypts.com/%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D8%A8%D9%88%D8%B4"
            className="text-blue-600 underline"
          >
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://bosch-egypts.com/%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D8%A8%D9%88%D8%B4"
            className="text-blue-600 underline"
          >
            الخط الساخن بوش
          </a>{" "}
          لصيانة الثلاجات و شحن الفريون.
        </>
      ),
    },
    {
      question: "هل تتوفر صيانة لغسالات الأطباق في المهندسين؟",
      answer: (
        <>
          نعم، نوفر{" "}
          <Link to="/dishwashers" className="text-blue-600 underline">
            صيانة غسالات الأطباق بوش
          </Link>{" "}
          مع قطع غيار أصلية وضمان.
        </>
      ),
    },
    {
      question: "أين أجد رقم صيانة ديب فريزر بوش؟",
      answer: (
        <>
          الرقم الموحد{" "}
          <a
            href="https://bosch-egypts.com/%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D8%A8%D9%88%D8%B4"
            className="text-blue-600 underline"
          >
            01211114528
          </a>{" "}
          أو من خلال{" "}
          <a
            href="https://bosch-egypts.com/%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86-%D8%A8%D9%88%D8%B4"
            className="text-blue-600 underline"
          >
            الخط الساخن بوش
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
          الأسئلة الشائعة حول صيانة بوش بالمهندسين
        </h2>
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