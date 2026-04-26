import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DryerfaqAr() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
{
question:"ما هو رقم صيانة بوش والخط الساخن المعتمد لطلب الخدمة؟",
answer:"يمكنك التواصل عبر رقم صيانة بوش والخط الساخن المباشر 01211114528 للحصول على دعم فني فوري وحجز زيارة منزلية في كافة المناطق."
},

{
question:"كيف يمكنني الوصول إلى أقرب مركز صيانة بوش وما مناطق التغطية؟",
answer:"يمكنك الاتصال على 01211114528 للوصول لأقرب مركز صيانة بوش، ونغطي القاهرة والجيزة و6 أكتوبر والإسكندرية والساحل الشمالي."
},

{
question:"ما هي الأعطال الشائعة في مجفف بوش وكيف يتم التعامل معها؟",
answer:"تشمل الأعطال الشائعة عدم التسخين أو اهتزاز غير طبيعي أو توقف الدوران، ويتم تشخيصها بأجهزة فحص رقمية وإصلاحها بواسطة مهندسين متخصصين."
},

{
question:"هل يوفر المركز قطع غيار بوش الأصلية مع ضمان؟",
answer:"نعم، نوفر جميع قطع غيار بوش الأصلية مع شهادة ضمان معتمدة بعد الإصلاح لضمان كفاءة الجهاز ومنع تكرار الأعطال."
},

{
question:"كيف أضمن الحصول على خدمة صيانة من التوكيل الرسمي؟",
answer:"يجب التواصل فقط عبر الرقم المعتمد 01211114528 لضمان حضور فني متخصص واستخدام قطع أصلية بضمان حقيقي."
},

{
question:"هل يتوفر فني صيانة بوش للمنزل؟",
answer:"نعم، نوفر خدمة صيانة منزلية ويتم إرسال فني متخصص إلى منزلك لفحص وإصلاح الجهاز في مكانه."
},

{
question:"ما سبب توقف مجفف بوش عن التسخين؟",
answer:"قد يكون السبب عطل في عنصر التسخين أو حساس الحرارة أو لوحة التحكم ويتم تحديد السبب بدقة أثناء الفحص."
},

{
question:"لماذا يصدر المجفف صوتاً أو اهتزازاً غير طبيعي؟",
answer:"غالباً يكون السبب مشكلة في رولمان البلي أو نظام الدوران أو تثبيت الحلة ويتم إصلاحها أثناء الصيانة."
},

{
question:"هل يتم إصلاح لوحة التحكم الإلكترونية للمجفف؟",
answer:"نعم، نوفر صيانة اللوحة الإلكترونية وأعطال الدوائر والتحكم البرمجي الخاصة بمجففات بوش."
},

{
question:"هل توجد صيانة بوش في مدينة نصر والتجمع و6 أكتوبر؟",
answer:"نعم، نوفر صيانة بوش في مدينة نصر والتجمع والشيخ زايد و6 أكتوبر والمعادي ومناطق أخرى."
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