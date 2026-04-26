import React from "react";

export default function Ourfeatures() {
  const items = [
    {
      icon: "★",
      title: "الجودة الأصلية",
      text: "نستخدم فقط قطع غيار أصلية 100%، مما يضمن أداءً ممتازاً وإطالة عمر جهازك التشغيلي.",
    },
    {
      icon: "✓",
      title: "ضمان معتمد",
      text: "جميع خدماتنا تشمل ضماناً رسمياً مكتوباً على أعمال الصيانة وقطع الغيار المستبدلة.",
    },
    {
      icon: "⚡",
      title: "دعم سريع",
      text: "فريق خدمة العملاء متاح على مدار الساعة، مع وصول أقرب فني إلى منزلك في أسرع وقت ممكن.",
    },
    {
      icon: "👨‍🔧",
      title: "فنيين محترفين",
      text: "فريق من الفنيين المعتمدين المدرّبين على أحدث تقنيات التكنولوجيا الألمانية.",
    },
    {
      icon: "🔍",
      title: "تشخيص دقيق",
      text: "نستخدم أجهزة فحص حديثة لتحديد سبب العطل بدقة، ونلتزم بتطبيق تعليمات الشركة المصنعة.",
    },
    {
      icon: "📍",
      title: "تغطية شاملة",
      text: "نغطي جميع محافظات مصر – القاهرة، الجيزة، الإسكندرية والمزيد.",
    },
    {
      icon: "📞",
      title: "خط ساخن 24/7",
      text: "تواصل معنا في أي وقت على 01211114528 لحجز موعد صيانة أو الحصول على دعم فني فوري.",
    },
    {
      icon: "🛡️",
      title: "خدمة ما بعد البيع",
      text: "لا تنتهي علاقتنا بعد الإصلاح، بل نستمر في تقديم الدعم الفني لتقليل تكرار الأعطال.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          لماذا تختار{" "}
          <span className="text-red-600">مركز صيانة بوش؟</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          نوفر منظومة صيانة متكاملة تبدأ من التشخيص الدقيق للعطل وتنتهي بضمان مكتوب يضمن لك راحة البال
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a  href="tel:01211114528"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg inline-block">
         
        
          اطلب صيانة الآن
        </a>
      </div>
    </div>
  );
}