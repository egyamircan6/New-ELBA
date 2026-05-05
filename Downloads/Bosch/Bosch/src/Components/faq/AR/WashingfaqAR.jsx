import React, { useState } from "react";
import { ChevronDown } from "lucide-react";



export default function WashingfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);
const faqs = [
  {
    question: "ما هو رقم صيانة غسالات ملابس بوش المعتمد في مصر؟",
    answer:
      "رقم صيانة غسالات ملابس بوش المعتمد هو 01211114528. يمكنك التواصل مع هذا الرقم لطلب زيارة منزلية فورية من مهندسين متخصصين في إصلاح أعطال Bosch Egypt بكافة موديلاتها، حيث نضمن لك استجابة سريعة خلال 24 ساعة.",
  },
  {
    question: "كيف أصل إلى رقم خدمة عملاء بوش المختص بالغسالات؟",
    answer:
      "يمكنك التواصل مع خدمة عملاء بوش مباشرة عبر الرقم 01211114528 للاستفسار عن الأعطال، حجز صيانة، أو طلب دعم فني لجميع أنواع غسالات بوش داخل مصر، مع إمكانية الرد السريع وخدمة متابعة الطلب.",
  },
  {
    question: "أين يقع أقرب مركز صيانة بوش لغسالات الملابس؟",
    answer:
      "يمتلك مركز صيانة بوش شبكة فروع واسعة. لتعرف أقرب فرع إليك، اتصل بنا على 01211114528 وسيتم توجيه طلبك لأقرب سيارة دعم فني مجهزة بقطع الغيار الأصلية لتصلك في أسرع وقت.",
  },
  {
    question: "هل يوجد مركز صيانة بوش لخدمة شرق القاهرة؟",
    answer:
      "نعم، نوفر تغطية كاملة في مناطق مدينة نصر، مصر الجديدة، والتجمع. اطلب الخدمة الآن عبر الرقم 01211114528.",
  },
  {
    question: "كيف يمكنني طلب صيانة بوش الإسكندرية والوجه البحري؟",
    answer:
      "نوفر فريقاً هندسياً متخصصاً لخدمة صيانة بوش الإسكندرية والساحل الشمالي. لطلب فني متخصص بالمنزل، اتصل على 01211114528.",
  },
  {
    question: "هل تتوفر خدمة صيانة بوش في مناطق القاهرة الجديدة والرحاب؟",
    answer:
      "نعم، تشمل خدماتنا صيانة بوش القاهرة الجديدة، الرحاب، مدينتي، والشروق. اتصل بنا على 01211114528.",
  },
  {
    question: "كيف أحصل على خدمة صيانة بوش في شيراتون وجسر السويس؟",
    answer:
      "نغطي مناطق شيراتون وجسر السويس بفرق هندسية جاهزة. بمجرد اتصالك على 01211114528، يتم تحديد موعد الزيارة المنزلية فوراً.",
  },
  {
    question: "هل يوفر مركز صيانة بوش خدماته في مناطق المعادي والمقطم؟",
    answer:
      "بالتأكيد، تغطي شبكة فروعنا المعادي، المقطم، وحلوان. اتصل بنا على 01211114528.",
  },
  {
    question: "ما هي فروع صيانة بوش في الجيزة وأكتوبر؟",
    answer:
      "تنتشر فروعنا في 6 أكتوبر، الشيخ زايد، حدائق الأهرام، فيصل، والهرم. اتصل على 01211114528.",
  },
  {
    question: "أين أجد أقرب مركز صيانة بوش في وسط البلد والدقي؟",
    answer:
      "نقدم خدمة سريعة في وسط البلد، شبرا، الدقي، والمهندسين عبر الرقم 01211114528.",
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
