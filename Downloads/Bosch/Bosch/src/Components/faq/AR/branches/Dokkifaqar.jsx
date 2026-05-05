import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dokkifaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أتواصل مع صيانة غسالات بوش في الدقي؟",
      answer: (
        <>
          يمكنك طلب{" "}
          <Link to="/bosch-repair-dokki" className="text-blue-600 underline">
            صيانة بوش في الدقي
          </Link>{" "}
          وسيتم إرسال فني متخصص لمنزلك فورًا.
        </>
      ),
    },
    {
      question: "ما هو رقم توكيل صيانة ثلاجات بوش بالدقي؟",
      answer: (
        <>
          يمكنك التواصل عبر صفحة{" "}
          <Link to="/hotline-bosch" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>{" "}
          أو طلب{" "}
          <Link to="/refrigerator-repair" className="text-blue-600 underline">
            صيانة ثلاجات بوش
          </Link>{" "}
          فورًا.
        </>
      ),
    },
    {
      question: "هل تتوفر صيانة لغسالات أطباق بوش في الدقي؟",
      answer: (
        <>
          نعم، نوفر{" "}
          <Link to="/dishwasher-repair" className="text-blue-600 underline">
            صيانة غسالات الأطباق بوش
          </Link>{" "}
          بجميع الأعطال مع قطع غيار أصلية.
        </>
      ),
    },
    {
      question: "أين أجد رقم صيانة ديب فريزر بوش في الدقي؟",
      answer: (
        <>
          يمكنك طلب{" "}
          <Link to="/freezer-repair" className="text-blue-600 underline">
            صيانة ديب فريزر بوش
          </Link>{" "}
          بسهولة من خلال موقعنا.
        </>
      ),
    },
    {
      question: "كيف يمكنني إصلاح دراير بوش في الدقي؟",
      answer: (
        <>
          نوفر{" "}
          <Link to="/dryer-repair" className="text-blue-600 underline">
            صيانة مجففات بوش
          </Link>{" "}
          بقطع غيار أصلية وضمان رسمي.
        </>
      ),
    },
    {
      question: "هل يوجد صيانة بوش في مناطق أخرى؟",
      answer: (
        <>
          نوفر أيضًا خدمات في{" "}
          <Link to="/bosch-repair-nasr-city" className="text-blue-600 underline">
            مدينة نصر
          </Link>{" "}
          و{" "}
          <Link to="/bosch-repair-october" className="text-blue-600 underline">
            6 أكتوبر
          </Link>{" "}
          و{" "}
          <Link to="/bosch-repair-maadi" className="text-blue-600 underline">
            المعادي
          </Link>.
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
          الأسئلة الشائعة حول صيانة بوش بالدقي
        </h2>
        <p className="text-gray-500">
          هنا هنجاوبك على أهم الأسئلة الخاصة بخدماتنا
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