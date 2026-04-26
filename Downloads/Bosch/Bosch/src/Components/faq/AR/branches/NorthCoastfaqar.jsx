import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NorthCoastfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أحجز صيانة سريعة لغسالات أو ثلاجات بوش في الساحل؟",
      answer: (
        <>
          يمكنك التواصل مباشرة على{" "}
          <a
            href="tel:01211114528"
            className="text-blue-600 font-bold"
          >
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://bosch-egypts.com/الخط-السـاخن-بوش"
            className="text-blue-600"
            target="_blank"
          >
            الخط الساخن بوش
          </a>
          . كما يمكنك مراسلتنا عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600"
            target="_blank"
          >
            الواتساب
          </a>
          . نحن نغطي كافة قرى الساحل الشمالي بخدمة منزلية سريعة.
        </>
      ),
    },
    {
      question: "هل تتوفر صيانة لغسالات الأطباق ومجففات بوش في مارينا ومراسي؟",
      answer: (
        <>
          نعم، نوفر صيانة شاملة لغسالات الأطباق والدراير بقطع غيار أصلية وضمان.
          اتصل على{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://bosch-egypts.com/الخط-السـاخن-بوش"
            className="text-blue-600"
            target="_blank"
          >
            الخط الساخن بوش
          </a>{" "}
          أو راسلنا عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600"
            target="_blank"
          >
            واتساب
          </a>
          .
        </>
      ),
    },
    {
      question: "ما هو رقم توكيل صيانة أجهزة بوش المدمجة (البلت إن) في الساحل؟",
      answer: (
        <>
          الرقم الموحد هو{" "}
          <a href="tel:01211114528" className="text-blue-600 font-bold">
            01211114528
          </a>
          . نحن خبراء صيانة الأفران والمسطحات والشفاطات المدمجة في الساحل.
          للحجز اتصل بنا أو عبر{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600"
            target="_blank"
          >
            واتساب
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