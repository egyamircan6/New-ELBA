import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HadayekAhramfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أحجز صيانة لغسالات أو ثلاجات بوش بحدائق الأهرام؟",
      answer: (
        <>
          يمكنك التواصل مباشرة على{" "}
          <a
            href="tel:01211114528"
            className="text-blue-600 underline"
          >
            01211114528
          </a>{" "}
          أو عبر صفحة{" "}
          <Link to="/bosch-hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>
          . نحن نغطي جميع بوابات حدائق الأهرام بخدمة فورية. راسلنا أيضاً عبر{" "}
          <a
            href="https://wa.me/201211114528"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            الواتساب
          </a>.
        </>
      ),
    },

    {
      question: "هل تتوفر صيانة لديب فريزر بوش وغسالات الأطباق بالهضبة؟",
      answer: (
        <>
          نعم، نوفر صيانة شاملة للديب فريزر وغسالات الأطباق بقطع غيار أصلية وضمان.  
          اتصل على{" "}
          <a href="tel:01211114528" className="text-blue-600 underline">
            01211114528
          </a>{" "}
          أو زور{" "}
          <Link to="/bosch-hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>{" "}
          أو راسلنا واتساب.
        </>
      ),
    },

    {
      question: "ما هو رقم توكيل صيانة دراير (مجفف) بوش في حدائق الأهرام؟",
      answer: (
        <>
          الرقم الموحد هو{" "}
          <a href="tel:01211114528" className="text-blue-600 underline">
            01211114528
          </a>{" "}
          كما يمكنك الاطلاع عبر{" "}
          <Link to="/bosch-hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>{" "}
          أو التواصل عبر الواتساب لحل الأعطال فوراً.
        </>
      ),
    },

    {
      question: "هل يقدم الفرع خدمة صيانة أجهزة بوش المدمجة (البلت إن)؟",
      answer: (
        <>
          بالتأكيد، نحن خبراء صيانة الأفران والمسطحات والشفاطات البلت إن في حدائق الأهرام.  
          للحجز اتصل على{" "}
          <a href="tel:01211114528" className="text-blue-600 underline">
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-blue-600 underline"
          >
            الواتساب
          </a>.
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
          الأسئلة الشائعة
        </h2>
        <p className="text-gray-500">
          هنا هنجاوبك أكتر الأسئلة اللي بيكررها عملائنا
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