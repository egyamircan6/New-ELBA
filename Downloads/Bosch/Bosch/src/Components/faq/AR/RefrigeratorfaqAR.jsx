import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RefrigeratorfaqAR() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "ما هو رقم خدمة صيانة ثلاجات بوش المعتمد في مصر؟",
    answer:
      "الرقم المعتمد لطلب خدمة صيانة ثلاجات بوش هو 01211114528. يتيح لك هذا الخط الساخن بوش التواصل المباشر مع الدعم الفني لشركة Bosch Egypt لجدولة زيارات الفحص المنزلي، والحصول على قطع غيار أصلية بضمان معتمد.",
  },
  {
    question: "هل يتوفر توكيل صيانة بوش في المحافظات والمدن الجديدة؟",
    answer:
      "نعم، تغطي فروع Bosch Egypt شبكة واسعة تشمل مدينة نصر، مصر الجديدة، التجمع، القاهرة الجديدة، الرحاب، مدينتي، الشروق، شيراتون، جسر السويس، المعادي، المقطم، حلوان، وسط البلد، شبرا، بالإضافة إلى الشيخ زايد، 6 أكتوبر، الدقي، المهندسين، فيصل، الهرم، حدائق الأهرام، الإسكندرية، والساحل الشمالي. يمكنك طلب الخدمة عبر الرقم 01211114528.",
  },
  {
    question: "ما هي الخطوات المتبعة عند طلب صيانة ثلاجات بوش في مصر؟",
    answer:
      "تبدأ العملية بالاتصال على رقم صيانة ثلاجات بوش الموحد 01211114528 لتسجيل البيانات، ثم يتم إرسال مهندس متخصص مجهز بأدوات تشخيص رقمية لفحص الجهاز منزلياً، حيث يتم استبدال القطع التالفة بقطع أصلية فوراً لضمان عودة الثلاجة للعمل بكفاءة المصنع.",
  },
  {
    question: "لماذا يفضل الاعتماد على رقم توكيل صيانة بوش بدلاً من الفنيين غير المعتمدين؟",
    answer:
      "الاعتماد على 01211114528 يضمن لك الحصول على خدمة هندسية متخصصة من صيانة بوش مصر، فالفنيون غير المعتمدين يفتقرون للقطع الأصلية، بينما توفر خدمة صيانة ثلاجات بوش الرسمية ضماناً حقيقياً يمنع تكرار العطل.",
  },
  {
    question: "كيف يمكنني التأكد من أصلية قطع الغيار عند صيانة ثلاجات بوش؟",
    answer:
      "تلتزم Bosch Egypt بتقديم قطع غيار مختومة بباركود المصنع ومرفقة بشهادة ضمان رسمية عند تنفيذ أي عملية صيانة ثلاجات بوش. يمكنك التحقق من القطعة عبر الرقم 01211114528 لضمان استدامة التبريد لسنوات طويلة.",
  },
  {
    question: "ما هو التصرف الصحيح عند ظهور كود عطل (Error Code) على شاشة ثلاجة بوش؟",
    answer:
      "عند ظهور أكواد مثل E1 و E2 يجب فصل التيار لـ 10 دقائق، وإذا استمر العطل اتصل فوراً بمركز صيانة ثلاجات بوش على 01211114528. يقوم الفريق بتحليل الكود وإصلاح الدائرة الإلكترونية بدقة.",
  },
  {
    question: "هل تشمل خدمة Bosch Egypt صيانة أجهزة بوش بلت إن (Built-in)؟",
    answer:
      "نعم، نحن متخصصون في صيانة أجهزة بوش المدمجة وخصوصاً صيانة ثلاجات بلت ان بوش التي تتطلب دقة عالية في الفك والتركيب، ونوفر حلولاً تقنية متكاملة عبر الرقم 01211114528.",
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