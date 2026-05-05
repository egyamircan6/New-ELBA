import React from "react";
import bg from "../../../assets/homebg.png";
import img from "../../../assets/5 1.png";
import Alexfaqar from "../../faq/AR/branches/Alexfaqar";
import { Helmet } from "react-helmet-async";

export default function AlexAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>صيانة بوش الإسكندرية | اطلب صيانة فورية اليوم</title>

        <meta
          name="description"
          content="مركز صيانة بوش الإسكندرية المعتمد. خدمة منزلية فورية في سموحة، ميامي، لوران، وكافة أحياء الإسكندرية بقطع غيار أصلية. اتصل بالخط الساخن 01211114528."
        />

        {/* ================= SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: "صيانة بوش الإسكندرية - المعتمد",
                image:
                  "https://bosch-egypts.com/wp-content/uploads/2023/bosch-logo.png",
                "@id": "https://bosch-egypts.com/صيانة-بوش-في-الإسكندرية",
                url: "https://bosch-egypts.com/صيانة-بوش-في-الإسكندرية",
                telephone: "01211114528",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "سموحة، طريق الحرية",
                  addressLocality: "الإسكندرية",
                  addressRegion: "محافظة الإسكندرية",
                  postalCode: "21500",
                  addressCountry: "EG",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 31.2001,
                  longitude: 29.9187,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "22:00",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "كيف أتواصل مع صيانة غسالات بوش في الإسكندرية؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "يمكنك الاتصال على 01211114528 أو عبر الخط الساخن بوش لحجز صيانة منزلية فورية في الإسكندرية.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "هل تتوفر صيانة لأجهزة البلت إن بوش بالإسكندرية؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "نعم، نوفر صيانة متخصصة لأجهزة البلت إن في جميع مناطق الإسكندرية بفنيين محترفين.",
                    },
                  },
                ],
              },
            ],
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
            مركز صيانة بوش الإسكندرية | أقرب لك - صيانة منزلية
          </h1>

          <p className="text-gray-300 mb-6">
            نقدم خدمات صيانة بوش لجميع الأجهزة بأفضل جودة وأسرع وقت
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

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              لماذا تختار صيانة بوش الإسكندرية؟
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
         تعتبر صيانة بوش الإسكندرية هي الرائدة في تقديم الدعم الفني المتكامل لعملاء الإسكندرية، حيث نمتلك أسطولاً من السيارات المجهزة التي تغطي كافة الأحياء من العجمي وحتى المعمورة. نحن نؤكد التزامنا بالمعايير العالمية، حيث وفرنا في مركز صيانة بوش مصر فرع الإسكندرية فريقاً من المهندسين المدربين على التعامل مع الرطوبة العالية وتأثيرها على الدوائر الإلكترونية لأجهزة بوش. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني متخصص لحد باب البيت.

            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
استدامة أداء أجهزتك مع صيانة بوش الإسكندرية الوقائية            </h2>

            <p className="text-gray-600 leading-[2.2em]">
             إن إجراء صيانة بوش الإسكندرية الدورية (Maintenance) هو الضمان الحقيقي لحماية استثمارك في أجهزة بوش الألمانية، خاصة في المناطق الساحلية. يقوم فريقنا في الإسكندرية بفحص شامل للمواتير، ومعالجة الصدأ الناتج عن الرطوبة، ومراجعة كفاءة التبريد في الثلاجات، مما يضمن لك أداءً مستقراً وتوفيراً في استهلاك الطاقة بفضل الخبرة الواسعة التي نقدمها بكل إخلاص وأمانة لكل عميل سكندري. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم توكيل بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الفني فوراً.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
قطع غيار أصلية وضمان معتمد في توكيل بوش الإسكندرية            </h2>

            <p className="text-gray-600 leading-[2.2em]">
             نلتزم في مركز صيانة بوش الإسكندرية بتوفير قطع الغيار الأصلية المستوردة من بلد المنشأ لضمان استعادة الجهاز لقدرته التشغيلية القصوى، مع تقديم ضمان عام كامل على جميع الإصلاحات. نحن في الإسكندرية ندرك أن القطعة الأصلية تحمي الجهاز من الأعطال المتكررة وتوفر عليك مبالغ طائلة في المستقبل، ولذلك نوفر المكونات الأصلية بأسعار تنافسية جداً. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب.
            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
=أبرز الأعطال التي تعالجها صيانة بوش الإسكندرية بالمنزل            </h2>

            <p className="text-gray-600 leading-[2.2em]">
        يمتلك مهندسو صيانة بوش الإسكندرية خبرة استثنائية في علاج أعطال غسالات بوش، وتوقف التبريد في ثلاجات بوش، وصيانة أجهزة البلت إن والشفاطات والبوتاجازات التي تتطلب مهارة فائقة في الإصلاح دون مغادرة المنزل. نحن نضمن لك الدقة والسرعة في كافة أحياء الإسكندرية. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <Alexfaqar />
    </div>
  );
}