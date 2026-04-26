import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function Helwanfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "ما هو رقم توكيل صيانة غسالات بوش المعتمد؟",
    answer: (
      <>
        في حالة وجود عطل مثل عدم الطرد أو الاهتزاز، يمكنك طلب{" "}
        <Link to="/washing-machines" className="text-blue-600 underline">
          صيانة غسالات بوش
        </Link>{" "}
        وسيتم إرسال فني متخصص فورًا لمنزلك.
      </>
    ),
  },
  {
    question: "كيف أتواصل مع الخط الساخن لصيانة ثلاجات بوش؟",
    answer: (
      <>
        عند حدوث ضعف في التبريد يمكنك طلب{" "}
        <Link to="/refrigerators" className="text-blue-600 underline">
          صيانة ثلاجات بوش
        </Link>{" "}
        لفحص الجهاز وحل المشكلة بسرعة.
      </>
    ),
  },
  {
    question: "أين أجد رقم صيانة غسالات أطباق بوش؟",
    answer: (
      <>
        يمكنك حجز{" "}
        <Link to="/dishwashers" className="text-blue-600 underline">
          صيانة غسالات أطباق بوش
        </Link>{" "}
        بسهولة مع خدمة منزلية كاملة.
      </>
    ),
  },
  {
    question: "ما هو الخط الساخن لصيانة ديب فريزر بوش؟",
    answer: (
      <>
        في حالة توقف التجميد يمكنك طلب{" "}
        <Link to="/freezers" className="text-blue-600 underline">
          صيانة ديب فريزر بوش
        </Link>{" "}
        بشكل عاجل لحماية الأطعمة.
      </>
    ),
  },
  {
    question: "رقم صيانة ميكروويف بوش وأفران البلت إن؟",
    answer: (
      <>
        نوفر صيانة متخصصة لـ{" "}
        <Link to="/microwaves" className="text-blue-600 underline">
          ميكروويف بوش
        </Link>{" "}
        و{" "}
        <Link to="/built-in-ovens" className="text-blue-600 underline">
          أفران البلت إن
        </Link>.
      </>
    ),
  },
  {
    question: "كيف أطلب صيانة مكانس بوش وماكينات القهوة؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <Link to="/vacuum-cleaners" className="text-blue-600 underline">
          صيانة مكانس بوش
        </Link>{" "}
        وكذلك صيانة ماكينات القهوة بسهولة.
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