import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function Nasrcityfaqar() {
  const [openIndex, setOpenIndex] = useState(null);
 const faqs = [
    {
      question: "أين يمكنني طلب صيانة غسالات ملابس بوش في مدينة نصر؟",
      answer: (
        <span>
          للحصول على خدمة احترافية، اتصل بفرع <strong>صيانة غسالات ملابس بوش في مدينة نصر</strong> عبر الرقم <strong>01211114528</strong>.
          نوفر زيارات منزلية في مكرم عبيد وعباس العقاد لفحص الطلمبة والموتور بقطع غيار أصلية، ويمكنك الحجز عبر
          <a href="https://api.whatsapp.com/send/?phone=201211114528" className="text-red-600 mx-1 underline">الواتساب</a>.
        </span>
      )
    },
    {
      question: "كيف أحجز موعد صيانة ثلاجات بوش في مدينة نصر؟",
      answer: (
        <span>
          يمكنك حجز <strong>صيانة ثلاجات بوش في مدينة نصر</strong> بالاتصال على <strong>01211114528</strong>.
          كما نوفر خدمات
          <Link to="/صيانة-ديب-فريزر-بوش" className="text-red-600 mx-1 underline">صيانة ديب فريزر بوش</Link>
          داخل نفس الزيارة المنزلية.
        </span>
      )
    },
    {
      question: "هل تتوفر صيانة افران بلت ان بوش في مدينة نصر؟",
      answer: (
        <span>
          نعم، نوفر
          <Link to="/صيانة-افران-بلت-ان-بوش" className="text-red-600 mx-1 underline">صيانة افران بلت ان بوش</Link>
          وكذلك
          <Link to="/صيانة-مسطحات-بوش" className="text-red-600 mx-1 underline">صيانة مسطحات بوش</Link>
          مع إصلاح الهيتروات وحساسات الحرارة.
        </span>
      )
    },
    {
      question: "ما هو رقم صيانة غسالات أطباق بوش بلت ان في مدينة نصر؟",
      answer: (
        <span>
          الرقم المعتمد هو <strong>01211114528</strong> لطلب
          <Link to="/صيانة-غسالات-اطباق-بوش" className="text-red-600 mx-1 underline">صيانة غسالات أطباق بوش</Link>
          العادية والبلت ان.
        </span>
      )
    },
    {
      question: "هل يوجد فني صيانة ميكروويف بوش بمدينة نصر؟",
      answer: (
        <span>
          نعم، نوفر
          <Link to="/صيانة-ميكروويف-بوش" className="text-red-600 mx-1 underline">صيانة ميكروويف بوش</Link>
          وأيضاً
          <Link to="/صيانة-مكانس-بوش" className="text-red-600 mx-1 underline">صيانة مكانس بوش</Link>
          و
          <Link to="/صيانة-مكنة-قهوة-بوش" className="text-red-600 mx-1 underline">صيانة مكنة قهوة بوش</Link>.
        </span>
      )
    },
    {
      question: "هل يوجد صيانة بوش في مصر الجديدة؟",
      answer: (
        <span>
          نعم، نوفر
          <Link to="/صيانة-بوش-مصر-الجديدة" className="text-red-600 underline">صيانة بوش مصر الجديدة</Link>
          لحجز الخدمة اتصل على 01211114528.
        </span>
      )
    },
    {
      question: "كيف أحصل على صيانة بوش في التجمع؟",
      answer: (
        <span>
          يمكنك طلب
          <Link to="/صيانة-بوش-التجمع" className="text-red-600 underline">صيانة بوش التجمع</Link>
          عبر الاتصال على 01211114528.
        </span>
      )
    },
    {
      question: "هل يوجد مركز صيانة بوش في المعادي؟",
      answer: (
        <span>
          نعم، لدينا
          <Link to="/صيانة-بوش-المعادي" className="text-red-600 underline">مركز صيانة بوش المعادي</Link>
          بخدمة منزلية سريعة.
        </span>
      )
    },
    {
      question: "كيف أحجز صيانة بوش في 6 أكتوبر؟",
      answer: (
        <span>
          للحجز توجه إلى
          <Link to="/صيانة-بوش-6-أكتوبر" className="text-red-600 underline">صيانة بوش 6 أكتوبر</Link>
          أو اتصل مباشرة على 01211114528.
        </span>
      )
    },
    {
      question: "هل يوجد مركز صيانة بوش في شيراتون؟",
      answer: (
        <span>
          نعم نوفر
          <Link to="/صيانة-بوش-شيراتون" className="text-red-600 underline">صيانة بوش شيراتون</Link>
          بزيارات منزلية فورية.
        </span>
      )
    }
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