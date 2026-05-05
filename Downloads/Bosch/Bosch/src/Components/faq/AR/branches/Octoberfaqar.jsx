import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Octoberfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم الخط الساخن لتوكيل بوش في 6 أكتوبر؟",
      answer: (
        <>
          يمكنك التواصل مباشرة عبر{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-red-600 underline"
          >
            الخط الساخن بوش
          </a>{" "}
          أو الاتصال على الرقم{" "}
          <strong>01211114528</strong>. نحن نوفر خدمة الصيانة المنزلية السريعة
          في جميع أحياء أكتوبر بقطع غيار أصلية. للاستفسار السريع ابعت رسالة على{" "}
          <a href="https://wa.me/201211114528" className="text-green-600 underline">
            الواتساب
          </a>{" "}
          وهنرد عليك فوراً.
        </>
      ),
    },
    {
      question: "هل يوفر فرع أكتوبر صيانة لغسالات الأطباق بوش؟",
      answer: (
        <>
          نعم، نحن متخصصون في إصلاح غسالات أطباق بوش بجميع موديلاتها في مدينة 6
          أكتوبر. اطلب الخدمة الآن عبر الاتصال بـ{" "}
          <strong>01211114528</strong> أو زور صفحة{" "}
          <a
            href="https://bosch-egypts.com/الخط-الساخن-بوش"
            className="text-red-600 underline"
          >
            الخط الساخن بوش
          </a>{" "}
          كما يمكنك مراسلتنا عبر{" "}
          <a href="https://wa.me/201211114528" className="text-green-600 underline">
            الواتساب
          </a>{" "}
          لحجز موعدك.
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
          الأسئلة الشائعة حول صيانة بوش 6 أكتوبر
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