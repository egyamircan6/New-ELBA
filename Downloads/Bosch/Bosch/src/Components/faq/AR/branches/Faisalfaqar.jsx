import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Faisalfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم تليفون صيانة بوش المعتمد في فيصل؟",
      answer: (
        <>
          الرقم الرسمي الموحد هو{" "}
          <a href="tel:01211114528" className="text-blue-600 underline">
            01211114528
          </a>{" "}
          يمكنك طلب{" "}
          <Link to="/bosch-repair-faisal" className="text-blue-600 underline">
            صيانة بوش فيصل
          </Link>{" "}
          في أي وقت وسيتم إرسال فني لمنزلك فوراً.
        </>
      ),
    },
    {
      question: "هل توفرون قطع غيار أصلية لثلاجات وغسالات بوش؟",
      answer: (
        <>
          نعم، جميع خدمات{" "}
          <Link to="/bosch-repair-faisal" className="text-blue-600 underline">
            صيانة بوش فيصل
          </Link>{" "}
          تتم بقطع غيار أصلية مع ضمان يصل إلى 12 شهر.
        </>
      ),
    },
    {
      question: "هل تتوفر خدمة صيانة بوش فيصل خلال الإجازات؟",
      answer: (
        <>
          نعم، مركز{" "}
          <Link to="/bosch-repair-faisal" className="text-blue-600 underline">
            صيانة بوش فيصل
          </Link>{" "}
          يعمل طوال الأسبوع لتغطية جميع الأعطال في أسرع وقت.
        </>
      ),
    },
    {
      question: "هل يوجد صيانة بوش في مناطق قريبة من فيصل؟",
      answer: (
        <>
          نعم نوفر أيضاً خدمات في{" "}
          <Link to="/bosch-repair-helwan" className="text-blue-600 underline">
            حلوان
          </Link>{" "}
          و{" "}
          <Link to="/bosch-repair-mokattam" className="text-blue-600 underline">
            المقطم
          </Link>{" "}
          و{" "}
          <Link to="/bosch-repair-nasr-city" className="text-blue-600 underline">
            مدينة نصر
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