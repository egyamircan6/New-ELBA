import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function Mokattamfaqar() {
  const [openIndex, setOpenIndex] = useState(null);
const faqs = [
  {
    question: "ما سبب ظهور رموز الخطأ (Error Codes) في غسالة ملابس بوش؟",
    answer: (
      <>
        تظهر هذه الرموز لتحديد مكان العطل بدقة مثل مشاكل طلمبة الطرد أو قفل الباب.
        يمكنك طلب{" "}
        <Link to="/washing-machines" className="text-blue-600 underline">
          صيانة غسالات بوش
        </Link>{" "}
        وسيتم إرسال فني متخصص فورًا.
      </>
    ),
  },
  {
    question: "لماذا تسخن الجوانب الخارجية لثلاجة بوش؟",
    answer: (
      <>
        السخونة طبيعية لتبادل الحرارة، لكن إذا زادت عن الحد قد يكون هناك عطل.
        يمكنك طلب{" "}
        <Link to="/refrigerators" className="text-blue-600 underline">
          صيانة ثلاجات بوش
        </Link>{" "}
        لفحص الجهاز.
      </>
    ),
  },
  {
    question: "هل تتوفر صيانة لأجهزة بوش المدمجة (Built-in)؟",
    answer: (
      <>
        نعم، نوفر صيانة كاملة للأجهزة المدمجة مثل{" "}
        <Link to="/built-in-ovens" className="text-blue-600 underline">
          أفران البلت إن
        </Link>{" "}
        و{" "}
        <Link to="/hobs" className="text-blue-600 underline">
          المسطحات
        </Link>{" "}
        و{" "}
        <Link to="/hoods" className="text-blue-600 underline">
          الشفاطات
        </Link>.
      </>
    ),
  },
  {
    question: "كيف أحصل على صيانة غسالات بوش؟",
    answer: (
      <>
        يمكنك زيارة صفحة{" "}
        <Link to="/washing-machines" className="text-blue-600 underline">
          صيانة غسالات بوش
        </Link>{" "}
        وحجز الخدمة بسهولة.
      </>
    ),
  },
  {
    question: "هل يتوفر صيانة ميكروويف بوش؟",
    answer: (
      <>
        نعم، نوفر خدمة{" "}
        <Link to="/microwaves" className="text-blue-600 underline">
          صيانة ميكروويف بوش
        </Link>{" "}
        بجميع الأعطال.
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