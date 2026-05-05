import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dishwasherfaqar() {
  const [openIndex, setOpenIndex] = useState(null);
const faqs = [
{
question:"ما هو رقم تليفون صيانة غسالة أطباق بوش المعتمد في مصر؟",
answer:"الرقم المباشر لطلب صيانة غسالة أطباق بوش هو 01211114528 ويمكنك من خلاله حجز زيارة منزلية سريعة أو التواصل عبر واتساب للحصول على دعم فني متخصص."
},

{
question:"هل يوفر توكيل بوش صيانة منزلية فورية لغسالات الأطباق؟",
answer:"نعم، نوفر خدمة صيانة منزلية فورية ويتم إرسال مهندس متخصص مجهز بأدوات فحص وقطع غيار أصلية لإتمام الإصلاح في نفس اليوم دون نقل الجهاز."
},

{
question:"ما أسباب ظهور Error Codes مثل E15 و E19 و E24؟",
answer:"تظهر هذه الأكواد غالباً بسبب مشاكل طلمبة الطرد أو تسريب المياه الداخلي أو انسداد الصرف. يفضل فصل الجهاز والتواصل فوراً مع مركز الصيانة لفحص العطل بدقة."
},

{
question:"كيف أتأكد من أصلية قطع الغيار أثناء الصيانة؟",
answer:"جميع قطع الغيار المستخدمة أصلية 100% ومرفقة بضمان رسمي وشهادة معتمدة بعد الانتهاء من الصيانة."
},

{
question:"هل تغطي صيانة بوش جميع المحافظات؟",
answer:"نعم، نوفر الخدمة في مدينة نصر والتجمع والشيخ زايد و6 أكتوبر والشروق ومدينتي والمعادي والإسكندرية ومناطق أخرى."
},

{
question:"ما العمر الافتراضي لغسالة أطباق بوش؟",
answer:"قد يتجاوز العمر الافتراضي 12 عاماً مع الالتزام بالصيانة الدورية وتنظيف الفلاتر واستخدام ملح غسالات الأطباق المناسب."
},

{
question:"لماذا يفضل الاعتماد على توكيل صيانة بوش المعتمد؟",
answer:"لأن التوكيل يوفر مهندسين متخصصين وقطع غيار أصلية وضمان حقيقي على الإصلاح ويحافظ على اللوحة الإلكترونية والحساسات من أي تلف."
},

{
question:"ما أسباب عدم تصريف المياه من غسالة أطباق بوش؟",
answer:"غالباً يكون السبب انسداد الفلتر أو خرطوم الصرف أو وجود مشكلة في طلمبة الطرد ويتم تشخيص السبب بدقة أثناء الفحص."
},

{
question:"لماذا غسالة الأطباق لا تنظف جيداً؟",
answer:"قد يكون السبب انسداد رشاشات المياه أو ضعف ضغط المياه أو مشكلة في دورة الغسيل أو استخدام منظفات غير مناسبة."
},

{
question:"هل يتم إصلاح تسريب المياه من غسالة أطباق بوش؟",
answer:"نعم، يتم إصلاح أسباب التسريب سواء من الجوانات أو الصمامات أو الدائرة الداخلية للمياه."
},

{
question:"هل يتم إصلاح لوحة التحكم الإلكترونية؟",
answer:"نعم، نوفر صيانة اللوحة الإلكترونية وإصلاح الأعطال البرمجية وأكواد الأخطاء الخاصة بغسالات أطباق بوش."
},

{
question:"كيف أحجز صيانة غسالة أطباق بوش؟",
answer:"يمكنك الحجز مباشرة عبر الاتصال على 01211114528 أو التواصل عبر واتساب لتحديد موعد زيارة الفني."
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