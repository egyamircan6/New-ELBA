import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VacuumcleanersfaqAr() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
{
question: "ما هو رقم صيانة مكانس بوش المعتمد في مصر؟",
answer: (
<>
يمكنك التواصل مع مركز{" "}
<a href="https://bosch-egypts.com/صيانة-مكانس-بوش" className="text-blue-600">
صيانة مكانس بوش
</a>{" "}
المعتمد عبر الرقم الموحد <strong>01211114528</strong>. توفر الخدمة دعماً فنياً فورياً لإصلاح كافة الموديلات، سواء كنت تبحث عن خدمة في{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-مدينة-نصر" className="text-blue-600">
مدينة نصر
</a>{" "}
أو{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-التجمع" className="text-blue-600">
التجمع
</a>.
</>
),
},

{
question: "كيف يمكنني الوصول إلى الخط الساخن لصيانة مكانس بوش؟",
answer: (
<>
الخط الساخن المخصص لخدمة{" "}
<a href="https://bosch-egypts.com/صيانة-مكانس-بوش" className="text-blue-600">
صيانة مكانس بوش
</a>{" "}
هو <strong>01211114528</strong>، ويمكنك طلب{" "}
<a href="https://bosch-egypts.com/الخط-الساخن-بوش" className="text-blue-600">
قطع غيار بوش الأصلية
</a>{" "}
مع تغطية مناطق{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-المعادي" className="text-blue-600">
المعادي
</a>{" "}
و{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-مصر-الجديدة" className="text-blue-600">
مصر الجديدة
</a>.
</>
),
},

{
question: "هل يوجد مركز صيانة مكانس بوش يوفر قطع غيار أصلية؟",
answer: (
<>
نعم، يوفر{" "}
<a href="https://bosch-egypts.com/صيانة-أجهزة-بوش" className="text-blue-600">
مركز صيانة مكانس بوش
</a>{" "}
كافة المكونات المعتمدة مثل المواتير والفلاتر، مع ضمان رسمي على الأجزاء المستبدلة من{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-مصر" className="text-blue-600">
توكيل بوش مصر
</a>.
</>
),
},

{
question: "أين أجد رقم توكيل صيانة مكانس بوش في القاهرة والجيزة؟",
answer: (
<>
رقم توكيل صيانة مكانس بوش هو <strong>01211114528</strong> ويغطي{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-في-6-أكتوبر" className="text-blue-600">
6 أكتوبر
</a>{" "}
و{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الشيخ-زايد" className="text-blue-600">
الشيخ زايد
</a>.
</>
),
},

{
question: "ما هي خدمات خدمة عملاء صيانة مكانس بوش؟",
answer: (
<>
خدمة العملاء تتابع البلاغ من تسجيله حتى انتهاء الإصلاح، مع تغطية{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الدقي" className="text-blue-600">
الدقي
</a>{" "}
و{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-المهندسين" className="text-blue-600">
المهندسين
</a>{" "}
و{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الإسكندرية" className="text-blue-600">
الإسكندرية
</a>.
</>
),
},

{
question: "أين تتوفر فروع صيانة مكانس بوش في القاهرة والمحافظات؟",
answer: (
<>
نغطي{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-مدينة-نصر" className="text-blue-600">
مدينة نصر
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-شيراتون" className="text-blue-600">
شيراتون
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الرحاب" className="text-blue-600">
الرحاب
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-مدينتي" className="text-blue-600">
مدينتي
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الشروق" className="text-blue-600">
الشروق
</a>{" "}
و{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الساحل-الشمالي" className="text-blue-600">
الساحل الشمالي
</a>.
</>
),
},

{
question: "كيف يمكنني طلب صيانة مكانس بوش في الجيزة وأحيائها؟",
answer: (
<>
يمكنك طلب الصيانة في{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-المهندسين" className="text-blue-600">
المهندسين
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الدقي" className="text-blue-600">
الدقي
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-فيصل" className="text-blue-600">
فيصل
</a>,
{" "}
<a href="https://bosch-egypts.com/صيانة-بوش-الهرم" className="text-blue-600">
الهرم
</a>{" "}
عبر <strong>01211114528</strong>.
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