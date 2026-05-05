import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HoodsfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
{
question:"ما هو رقم صيانة شفاطات بوش؟",
answer:(
<>
رقم{" "}
<a href="/صيانة-شفاطات-بوش" className="text-blue-600 font-bold">
صيانة شفاطات بوش
</a>{" "}
المعتمد من{" "}
<a href="/توكيل-بوش" className="text-blue-600 font-bold">
bosch egypt
</a>{" "}
هو{" "}
<a href="/الخط-الساخن-بوش" className="text-blue-600 font-bold">
01211114528
</a>
، ويمكن من خلاله حجز زيارة منزلية لإجراء الفحص والإصلاح.
</>
),
},

{
question:"هل يوجد توكيل صيانة شفاطات بوش معتمد؟",
answer:(
<>
نعم، يتوفر{" "}
<a href="/توكيل-صيانة-شفاطات-بوش" className="text-blue-600 font-bold">
توكيل صيانة شفاطات بوش
</a>{" "}
لتقديم إصلاح احترافي يشمل أعطال الموتور والفلاتر ولوحات التحكم.
</>
),
},

{
question:"ما أسباب ضعف شفط شفاط بوش؟",
answer:(
<>
من أسباب ضعف الشفط انسداد الفلاتر أو ضعف الموتور، ويمكن طلب فحص من{" "}
<a href="/مركز-صيانة-بوش" className="text-blue-600 font-bold">
مركز صيانة بوش
</a>{" "}
أو التواصل عبر{" "}
<a href="/الخط-الساخن-بوش" className="text-blue-600 font-bold">
الخط الساخن بوش
</a>.
</>
),
},

{
question:"هل يشمل إصلاح شفاطات بوش ضمان؟",
answer:(
<>
نعم، يشمل{" "}
<a href="/اصلاح-شفاطات-بوش" className="text-blue-600 font-bold">
إصلاح شفاطات بوش
</a>{" "}
ضمان على قطع الغيار وأعمال الصيانة المقدمة من{" "}
<a href="/صيانة-بوش" className="text-blue-600 font-bold">
صيانة بوش
</a>.
</>
),
},

{
question:"هل تتوفر فروع لصيانة شفاطات بوش في القاهرة؟",
answer:(
<>
نعم، تتوفر خدمات{" "}
<a href="/فروع-صيانة-بوش" className="text-blue-600 font-bold">
فروع صيانة بوش
</a>{" "}
في القاهرة والجيزة والإسكندرية، ويمكن الوصول لأقرب فرع عبر{" "}
<a href="/الخط-الساخن-بوش" className="text-blue-600 font-bold">
01211114528
</a>.
</>
),
},

{
question:"هل تتوفر فروع لصيانة شفاطات بوش في القاهرة والجيزة؟",
answer:(
<>
نعم، نوفر{" "}
<a href="/صيانة-بوش-القاهرة" className="text-blue-600 font-bold">
صيانة بوش القاهرة
</a>{" "}
و{" "}
<a href="/صيانة-بوش-الجيزة" className="text-blue-600 font-bold">
صيانة بوش الجيزة
</a>.
</>
),
},

{
question:"متى أحتاج إلى صيانة شفاط بوش؟",
answer:(
<>
عند ضعف الشفط أو ارتفاع الصوت ستحتاج إلى{" "}
<a href="/صيانة-شفاطات-بوش" className="text-blue-600 font-bold">
صيانة شفاطات بوش
</a>{" "}
بشكل سريع لتجنب زيادة العطل.
</>
),
},

{
question:"كيف أحجز صيانة شفاطات بوش بسرعة؟",
answer:(
<>
يمكنك الحجز من خلال{" "}
<a href="/الخط-الساخن-بوش" className="text-blue-600 font-bold">
الخط الساخن بوش
</a>{" "}
أو عبر صفحة{" "}
<a href="/صيانة-شفاطات-بوش" className="text-blue-600 font-bold">
حجز صيانة شفاطات بوش
</a>.
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