import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MicrowavefaqAR() {
const [openIndex, setOpenIndex] = useState(null);

const faqs = [
{
question: "ما هو رقم صيانة ميكروويف بوش في مصر؟",
answer: (
<>
رقم صيانة ميكروويف بوش المعتمد هو{" "}
<a
href="/الخط-الساخن-بوش"
className="text-blue-600 font-bold"
>
01211114528
</a>
، ويمكن من خلاله حجز زيارة منزلية سريعة لإجراء الفحص والإصلاح.
كما يمكنك التعرف على جميع خدمات{" "}
<a
href="/صيانة-ميكروويف-بوش"
className="text-blue-600 font-bold"
>
صيانة ميكروويف بوش
</a>.
</>
),
},

{
question: "هل يوجد توكيل صيانة ميكروويف بوش معتمد؟",
answer: (
<>
نعم، يتوفر{" "}
<a
href="/توكيل-بوش"
className="text-blue-600 font-bold"
>
توكيل صيانة ميكروويف بوش
</a>
المعتمد لتقديم خدمات الفحص والإصلاح باستخدام قطع غيار أصلية.
</>
),
},

{
question: "ما الفرق بين إصلاح ميكروويف بوش في التوكيل وأي مركز عادي؟",
answer: (
<>
إصلاح الجهاز داخل{" "}
<a
href="/مركز-صيانة-بوش"
className="text-blue-600 font-bold"
>
مركز صيانة بوش
</a>
يضمن تشخيصًا دقيقًا للأعطال وضمان رسمي بعد الصيانة.
</>
),
},

{
question: "متى أحتاج إلى صيانة ميكروويف بوش؟",
answer: (
<>
إذا لاحظت ضعف تسخين أو توقف الطبق الداخلي ستحتاج إلى{" "}
<a
href="/اصلاح-ميكروويف-بوش"
className="text-blue-600 font-bold"
>
إصلاح ميكروويف بوش
</a>
بشكل سريع لتجنب تفاقم العطل.
</>
),
},

{
question: "كيف يمكنني التواصل مع الخط الساخن لصيانة ميكروويف بوش؟",
answer: (
<>
يمكنك التواصل عبر{" "}
<a
href="/الخط-الساخن-بوش"
className="text-blue-600 font-bold"
>
الخط الساخن بوش
</a>
لحجز موعد أو الاستفسار عن الضمان.
</>
),
},

{
question: "هل يشمل إصلاح ميكروويف بوش ضمان بعد الصيانة؟",
answer: (
<>
نعم، جميع خدمات{" "}
<a
href="/صيانة-بوش"
className="text-blue-600 font-bold"
>
صيانة بوش
</a>
تشمل ضمان على قطع الغيار وأعمال الصيانة.
</>
),
},

{
question: "هل يتوفر إصلاح ميكروويف بوش في جميع المحافظات؟",
answer: (
<>
نعم، نوفر الخدمة في جميع المحافظات من خلال{" "}
<a
href="/مراكز-صيانة-بوش"
className="text-blue-600 font-bold"
>
مراكز صيانة بوش
</a>.
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
{faqs.map((item,index)=>(
<div
key={index}
className="bg-white border border-black rounded-lg p-4 cursor-pointer"
onClick={()=>toggle(index)}
>
<div className="flex justify-between items-center">

<p className="font-medium text-sm md:text-base">
{item.question}
</p>

<ChevronDown
className={`transition-transform duration-300 ${
openIndex===index ? "rotate-180" : ""
}`}
/>

</div>

{openIndex===index && (
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