import React from "react";
import bg from "../../../assets/homebg.png";
import img from "../../../assets/5 1.png";
import Dokkifaqar from "../../faq/AR/branches/Dokkifaqar";
import { Helmet } from "react-helmet-async";

export default function DokkiAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Helmet>
          <title>صيانة بوش الدقي | اطلب صيانة فورية اليوم</title>

          <meta
            name="description"
            content="مركز صيانة بوش الدقي المعتمد. خدمة منزلية فورية لجميع أجهزة بوش (غسالات، ثلاجات، بوتاجازات) بقطع غيار أصلية. اتصل بالخط الساخن 01211114528."
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كيف أتواصل مع صيانة غسالات بوش في الدقي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لصيانة الغسالات اتصل على 01211114528 أو عبر الخط الساخن بوش."
      }
    },
    {
      "@type": "Question",
      "name": "ما هو رقم توكيل صيانة ثلاجات بوش بالدقي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "الرقم هو 01211114528 لحل مشاكل الثلاجات فوراً."
      }
    },
    {
      "@type": "Question",
      "name": "هل يقدم التوكيل صيانة لأجهزة بوش البلت إن بالدقي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم نوفر صيانة الأفران والمسطحات والشفاطات المدمجة بقطع أصلية."
      }
    }
  ]
}
              `
            }}
          />
        </Helmet>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            مركز صيانة بوش الدقي | أقرب لك - صيانة منزلية
          </h1>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            نقدم خدمات صيانة بوش لجميع الأجهزة بأفضل جودة وأسرع وقت
          </p>

          <div className="flex justify-center gap-4">
            <a href="tel:01211114528" className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700">
              اطلب صيانة الآن
            </a>

            <a href="https://wa.me/201211114528" className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black">
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="text-right">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              لماذا تختار خدمة صيانة بوش الدقي لإصلاح أجهزتك؟
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
تنفرد خدمة صيانة بوش الدقي بتقديم حلول هندسية متكاملة لسكان حي الدقي والمهندسين الذين يقتنون التكنولوجيا الألمانية الرفيعة. نحن نضع معايير صارمة للجودة، حيث وفرنا في مركز صيانة بوش مصر فرع الدقي نخبة من الفنيين القادرين على استعادة كفاءة المصنع لأجهزتكم في وقت قياسي وبأقل تكلفة إصلاح ممكنة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني متخصص لحد باب البيت.            </p>
          </div>

          <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>

          <div className="text-right">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              أهمية صيانة بوش الدقي الوقائية واستدامة الأداء
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
إن إجراء صيانة بوش الدقي بصفة دورية (Maintenance) ليس مجرد رفاهية، بل هو ضرورة تقنية للحفاظ على العمر الافتراضي لأجهزتكم وحمايتها من التآكل أو الاحتراق المفاجئ نتيجة ضغط التشغيل. فريقنا في الدقي يقوم بفحص شامل للدورات الكهربائية والميكانيكية، مما يضمن لك تشغيلاً هادئاً واستهلاكاً أقل للطاقة بفضل الخبرة الواسعة التي نقدمها في صيانة بوش بكل احترافية وصدق مع العميل. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم توكيل بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الفني فوراً            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="text-right">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              ضمان توفر قطع الغيار الأصلية في توكيل بوش الدقي
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
يلتزم مركز صيانة بوش الدقي بتوفير مخزون دائم من قطع الغيار الأصلية المعتمدة لضمان عدم توقف أجهزتكم لفترات طويلة، مع منح العميل شهادة ضمان معتمدة تضمن له حق إعادة الإصلاح مجاناً في حال تكرار العطل. نحن في الدقي نؤمن بأن القطعة الأصلية هي روح الجهاز، ولذلك نوفرها بأسعار تنافسية لحماية عملائنا من غش القطع التجارية المنتشرة في الأسواق. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب.            </p>
          </div>

          <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img src={img} className="w-full max-w-md rounded-xl shadow-2xl" />
          </div>

          <div className="text-right">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              أبرز الأعطال التي تعالجها صيانة بوش الدقي
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
تغطي خدماتنا في صيانة بوش الدقي كافة أنواع الأعطال المعقدة، بدءاً من مشاكل الكومبريسور في الثلاجات، مروراً بأعطال التايمر في الغسالات، وصولاً إلى صيانة أجهزة البلت إن والشفاطات والبوتاجازات التي تتطلب دقة متناهية في التعامل. نحن نضمن لك إصلاحاً فورياً بالمنزل دون الحاجة لنقل الجهاز. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Dokkifaqar />

    </div>
  );
}