import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Haramfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أحجز موعداً لصيانة غسالات بوش في الهرم؟",
      answer: (
        <>
          الحجز يتم بسهولة عبر الاتصال بـ{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            01211114528
          </Link>{" "}
          أو عبر صفحة{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>
          . نوفر صيانة فورية بالمنزل بقطع غيار أصلية. راسلنا أيضاً عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            الواتساب
          </a>
          .
        </>
      ),
    },
    {
      question: "هل يوفر توكيل الهرم صيانة لثلاجات وديب فريزر بوش؟",
      answer: (
        <>
          نعم، نحن متخصصون في إصلاح الثلاجات والديب فريزر بجميع موديلاتها.
          اتصل على{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            01211114528
          </Link>{" "}
          أو عبر{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>
          ، أو تواصل معنا عبر الواتساب.
        </>
      ),
    },
    {
      question: "ما هو رقم صيانة غسالات أطباق بوش في الهرم وفيصل؟",
      answer: (
        <>
          الرقم الموحد هو{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            01211114528
          </Link>
          ، ويمكن الحجز عبر{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>{" "}
          أو الواتساب للرد السريع.
        </>
      ),
    },
    {
      question: "هل تتوفر صيانة لأجهزة بوش المدمجة (أفران ومسطحات) بالهرم؟",
      answer: (
        <>
          بالتأكيد، خبراء صيانة البلت إن متواجدون لخدمتك بالهرم.
          للحجز اتصل على{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            01211114528
          </Link>{" "}
          أو عبر{" "}
          <Link to="/hotline" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>
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
          دليل الأسئلة الشائعة لصيانة بوش بالهرم
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