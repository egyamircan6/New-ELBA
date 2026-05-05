import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function Downtownfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "ما هو رقم تليفون صيانة بوش المعتمد في شبرا؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <Link to="/bosch-repair-shoubra" className="text-blue-600 underline">
          صيانة بوش في شبرا
        </Link>{" "}
        وسيتم إرسال فني متخصص لمنزلك بسرعة.
      </>
    ),
  },
  {
    question: "كيف أحجز موعداً مع الخط الساخن بوش لإصلاح الأجهزة؟",
    answer: (
      <>
        يمكنك حجز صيانة من خلال صفحة{" "}
        <Link to="/contact" className="text-blue-600 underline">
          تواصل معنا
        </Link>{" "}
        وسيتم تحديد موعد مناسب لك.
      </>
    ),
  },
  {
    question: "هل يتوفر صيانة لغسالات الأطباق في شبرا؟",
    answer: (
      <>
        نعم، نوفر{" "}
        <Link to="/dishwashers" className="text-blue-600 underline">
          صيانة غسالات أطباق بوش
        </Link>{" "}
        بجميع الأعطال وبقطع غيار أصلية.
      </>
    ),
  },
  {
    question: "هل يتوفر صيانة ديب فريزر بوش؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <Link to="/freezers" className="text-blue-600 underline">
          صيانة ديب فريزر بوش
        </Link>{" "}
        للحفاظ على كفاءة التجميد.
      </>
    ),
  },
  {
    question: "كيف أحصل على صيانة غسالات بوش؟",
    answer: (
      <>
        ادخل على صفحة{" "}
        <Link to="/washing-machines" className="text-blue-600 underline">
          صيانة غسالات بوش
        </Link>{" "}
        واحجز الخدمة بسهولة.
      </>
    ),
  },
  {
    question: "هل يوجد صيانة بوش في مناطق أخرى؟",
    answer: (
      <>
        نعم، نوفر أيضًا{" "}
        <Link to="/bosch-repair-nasr-city" className="text-blue-600 underline">
          صيانة بوش مدينة نصر
        </Link>{" "}
        و{" "}
        <Link to="/bosch-repair-maadi" className="text-blue-600 underline">
          صيانة بوش المعادي
        </Link>{" "}
        و{" "}
        <Link to="/bosch-repair-mokattam" className="text-blue-600 underline">
          صيانة بوش المقطم
        </Link>.
      </>
    ),
  },
];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 ">
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