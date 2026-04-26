import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function SheikhZayedfaqar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو رقم الخط الساخن لغسالات بوش في الشيخ زايد؟",
      answer: (
        <>
          يمكنك التواصل عبر{" "}
          <Link to="/الخط-الساخن-بوش" className="text-blue-600 underline">
            الخط الساخن بوش
          </Link>{" "}
          أو الاتصال على <strong>01211114528</strong>. كما يمكنك طلب{" "}
          <Link to="/washing-machines" className="text-blue-600 underline">
            صيانة غسالات بوش
          </Link>{" "}
          في الشيخ زايد وسيصل إليك فني متخصص فورًا. وللحجز السريع تواصل عبر{" "}
          <a
            href="https://wa.me/201211114528"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            الواتساب
          </a>.
        </>
      ),
    },
    {
      question: "كيف أحصل على قطع غيار أصلية لثلاجات بوش؟",
      answer: (
        <>
          يمكنك طلب{" "}
          <Link to="/refrigerators" className="text-blue-600 underline">
            صيانة ثلاجات بوش
          </Link>{" "}
          من خلال{" "}
          <Link
            to="/bosch-repair-sheikh-zayed"
            className="text-blue-600 underline"
          >
            توكيل بوش الشيخ زايد
          </Link>{" "}
          وسيتم توفير قطع الغيار الأصلية وتركيبها في منزلك مع ضمان. للحجز
          اتصل على <strong>01211114528</strong> أو تواصل عبر{" "}
          <a
            href="https://wa.me/201211114528"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            الواتساب
          </a>.
        </>
      ),
    },
    {
      question: "هل يتوفر صيانة غسالات أطباق بوش في الشيخ زايد؟",
      answer: (
        <>
          نعم، نوفر{" "}
          <Link to="/dishwashers" className="text-blue-600 underline">
            صيانة غسالات أطباق بوش
          </Link>{" "}
          بجميع الأعطال وبقطع غيار أصلية داخل الشيخ زايد.
        </>
      ),
    },
    {
      question: "هل يوجد صيانة أجهزة بوش المدمجة (Built-in)؟",
      answer: (
        <>
          نوفر صيانة متكاملة لـ{" "}
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
      question: "هل يتم إصلاح الميكروويف والمكانس؟",
      answer: (
        <>
          نعم، يمكنك طلب{" "}
          <Link to="/microwaves" className="text-blue-600 underline">
            صيانة ميكروويف بوش
          </Link>{" "}
          و{" "}
          <Link to="/vacuum-cleaners" className="text-blue-600 underline">
            صيانة مكانس بوش
          </Link>{" "}
          بسهولة.
        </>
      ),
    },
    {
      question: "هل يوجد صيانة بوش في الشيخ زايد؟",
      answer: (
        <>
          نعم، يمكنك زيارة صفحة{" "}
          <Link
            to="/bosch-repair-sheikh-zayed"
            className="text-blue-600 underline"
          >
            صيانة بوش الشيخ زايد
          </Link>{" "}
          لحجز الخدمة المنزلية في أي وقت.
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
          الأسئلة الشائعة - صيانة بوش الشيخ زايد
        </h2>
        <p className="text-gray-500">
          هنا هنجاوبك على أهم الأسئلة الخاصة بخدمة صيانة بوش في الشيخ زايد
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