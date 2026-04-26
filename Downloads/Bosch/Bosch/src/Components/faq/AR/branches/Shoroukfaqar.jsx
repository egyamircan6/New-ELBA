import { useState } from "react";
import { ChevronDown, Link } from "lucide-react";


export default function Shoroukfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "كيف أحجز صيانة غسالات ملابس بوش في الشروق؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <Link to="/washing-machines" className="text-blue-600 underline">
          صيانة غسالات بوش
        </Link>{" "}
        في الشروق وسيتم إرسال فني لفحص الحلة والمحرك في منزلك.
      </>
    ),
  },
  {
    question: "ما هو رقم صيانة ثلاجات بوش في الشروق؟",
    answer: (
      <>
        في حالة ضعف التبريد يمكنك طلب{" "}
        <Link to="/refrigerators" className="text-blue-600 underline">
          صيانة ثلاجات بوش
        </Link>{" "}
        لإصلاح أعطال الفريون والكومبريسور.
      </>
    ),
  },
  {
    question: "هل تتوفر صيانة غسالات أطباق بوش؟",
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
    question: "أين أجد صيانة أجهزة بوش المدمجة؟",
    answer: (
      <>
        نوفر صيانة متكاملة لـ{" "}
        <Link to="/built-in-ovens" className="text-blue-600 underline">
          أفران البلت إن
        </Link>{" "}
        و{" "}
        <Link to="/hobs" className="text-blue-600 underline">
          المسطحات
        </Link>.
      </>
    ),
  },
  {
    question: "كيفية صيانة ميكروويف وشفاط بوش؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <Link to="/microwaves" className="text-blue-600 underline">
          صيانة ميكروويف بوش
        </Link>{" "}
        وكذلك{" "}
        <Link to="/hoods" className="text-blue-600 underline">
          صيانة شفاطات بوش
        </Link>.
      </>
    ),
  },
  {
    question: "هل يوجد صيانة مكانس وماكينات قهوة بوش؟",
    answer: (
      <>
        نوفر{" "}
        <Link to="/vacuum-cleaners" className="text-blue-600 underline">
          صيانة مكانس بوش
        </Link>{" "}
        بالإضافة إلى صيانة ماكينات القهوة.
      </>
    ),
  },
  {
    question: "هل تتوفر صيانة تكييفات وسخانات بوش؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <Link to="/air-conditioners" className="text-blue-600 underline">
          صيانة تكييفات بوش
        </Link>{" "}
        و{" "}
        <Link to="/heaters" className="text-blue-600 underline">
          صيانة سخانات بوش
        </Link>.
      </>
    ),
  },
  {
    question: "هل يتم إصلاح الديب فريزر والدراير؟",
    answer: (
      <>
        نعم، نوفر{" "}
        <Link to="/dryers" className="text-blue-600 underline">
          صيانة مجفف بوش
        </Link>{" "}
        و{" "}
        <Link to="/freezers" className="text-blue-600 underline">
          صيانة ديب فريزر بوش
        </Link>.
      </>
    ),
  },
  {
    question: "هل يوجد صيانة بوش في الشروق؟",
    answer: (
      <>
        نعم، يمكنك زيارة صفحة{" "}
        <Link to="/bosch-repair-shorouk" className="text-blue-600 underline">
          صيانة بوش في الشروق
        </Link>{" "}
        لحجز الخدمة المنزلية.
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