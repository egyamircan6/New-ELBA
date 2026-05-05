import React from "react";
import bg from "../../../assets/homebg.png";
import img from "../../../assets/5 1.png";
import Haramfaqar from "../../faq/AR/branches/Haramfaqar";
import { Helmet } from "react-helmet-async";

export default function HaramAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>صيانة بوش الهرم | اطلب صيانة فورية اليوم</title>

        <meta
          name="description"
          content="مركز صيانة بوش الهرم المعتمد. خدمة منزلية فورية لجميع الأجهزة (غسالات، ثلاجات، ديب فريزر) بقطع غيار أصلية وضمان. اتصل بالخط الساخن 01211114528."
        />

        {/* ================= SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: "صيانة بوش الهرم - المعتمد",
                telephone: "01211114528",
                url: "https://bosch-egypts.com/صيانة-بوش-في-الهرم",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "كيف أحجز موعداً لصيانة غسالات بوش في الهرم؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "يمكنك الحجز عبر الاتصال على 01211114528 أو الخط الساخن بوش."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            مركز صيانة بوش الهرم | أقرب لك - صيانة منزلية
          </h1>

          <p className="text-gray-300 mb-6">
            خدمة صيانة فورية لجميع أجهزة بوش بالهرم مع ضمان وقطع غيار أصلية
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="tel:01211114528"
              className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700"
            >
              اطلب صيانة الآن
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black"
            >
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              لماذا تختار صيانة بوش الهرم؟
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
تعتبر صيانة بوش الهرم هي الاختيار الأمثل لآلاف الأسر في منطقة الهرم وفيصل الذين يبحثون عن الجودة الألمانية والسرعة في التنفيذ.نؤكد ريادتنا في تقديم الدعم الفني، حيث قمنا بتزويد مركز صيانة بوش مصر فرع الهرم بفريق من كبار المهندسين المتخصصين في التعامل مع الدوائر الإلكترونية المعقدة لأجهزة بوش الحديثة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني متخصص لحد باب البيت.
            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
=استدامة أداء أجهزتك مع صيانة بوش الهرم الدورية
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
           إن إهمال صيانة بوش الهرم الدورية (Maintenance) قد يؤدي إلى تراجع كفاءة الجهاز وزيادة استهلاك الكهرباء بشكل ملحوظ. يقوم فريقنا في الهرم بفحص شامل يتضمن تنظيف دورات المياه في الغسالات، ومراجعة ضغط الفريون في الثلاجات، وفحص ثرموستات الأفران، مما يضمن لك تشغيلاً آمناً ومستقراً لسنوات طويلة دون مفاجآت تقنية مزعجة بفضل المتابعة التي نقدمها بكل إخلاص. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم توكيل بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الفني فوراً.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ORIGINAL PARTS ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
قطع غيار أصلية وضمان معتمد من توكيل بوش الهرم            </h2>

            <p className="text-gray-600 leading-[2.2em]">
            نحن في مركز صيانة بوش الهرم نؤمن بأن عمر الجهاز يعتمد على جودة القطع المستخدمة في الإصلاح، لذا نلتزم بتركيب قطع الغيار الأصلية المعتمدة فقط، والتي تأتي بضمان حقيقي يصل إلى عام كامل. اختيارك لنا في الهرم يحميك من مخاطر القطع التجارية المقلدة التي قد تدمر الموتور أو الكارتات الذكية، ونوفر لك القطع الأصلية بأسعار تنافسية جداً. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عبر الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب.
            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= BREAKDOWNS ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
أبرز الأعطال التقنية التي تعالجها صيانة بوش الهرم
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
          يتخصص فنيو صيانة بوش الهرم في حل أعقد المشاكل، مثل توقف الطرد في الغسالات، وضعف التجميد في الثلاجات، وأعطال أجهزة البلت إن التي تتطلب احترافية عالية في الفك والتركيب لضمان سلامة مطبخك. نحن نصلح الجهاز في منزلك فوراً وبأعلى دقة تشخيصية ممكنة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            خدمات بوش الشاملة في الهرم والمناطق المجاورة
          </h2>

          <ul className="text-gray-600 leading-[2.2em] list-disc pr-5 space-y-2">
            <li>صيانة ديب فريزر بوش وصيانة دراير بوش</li>
            <li>صيانة غسالات أطباق بوش</li>
            <li>إصلاح بوتاجازات وأفران بوش</li>
            <li>صيانة ميكروويف وشفاطات بوش</li>
            <li>صيانة سخانات وتكييف بوش</li>
            <li>صيانة المكانس ومكينات القهوة</li>
            <li>خدمة الأجهزة البلت إن</li>
          </ul>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <Haramfaqar />

    </div>
  );
}