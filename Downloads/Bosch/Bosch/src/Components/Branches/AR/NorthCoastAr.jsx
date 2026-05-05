import React from "react";
import bg from "../../../assets/homebg.png";
import img from "../../../assets/5 1.png";
import NorthCoastfaqar from "../../faq/AR/branches/NorthCoastfaqar";
import { Helmet } from "react-helmet-async";

export default function NorthCoastAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>صيانة بوش الساحل الشمالي | رقم توكيل بوش المعتمد 01211114528</title>

        <meta
          name="description"
          content="احجز صيانة من مركز صيانة بوش الساحل الشمالي المعتمد. خدمة منزلية فورية في مارينا، مراسي، هاسيندا، وكافة قرى الساحل بقطع غيار أصلية. اتصل 01211114528."
        />

        {/* ================= SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: "صيانة بوش الساحل الشمالي",
                image: "https://bosch-egypts.com/wp-content/uploads/2023/bosch-logo.png",
                "@id": "https://bosch-egypts.com/صيانة-بوش-في-الساحل-الشمالي",
                url: "https://bosch-egypts.com/صيانة-بوش-في-الساحل-الشمالي",
                telephone: "01211114528",
                priceRange: "$$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "طريق الإسكندرية مطروح الصحراوي",
                  addressLocality: "الساحل الشمالي",
                  addressRegion: "مطروح",
                  addressCountry: "EG"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 30.9833,
                  longitude: 28.95
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
                  ],
                  opens: "09:00",
                  closes: "23:00"
                }
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "كيف أحجز صيانة سريعة لأجهزة بوش في الساحل؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "يمكنك الاتصال على 01211114528 أو عبر الخط الساخن بوش لحجز صيانة منزلية فورية في الساحل الشمالي."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "هل تتوفر صيانة لأجهزة البلت إن بوش في الساحل؟",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "نعم، نوفر صيانة متخصصة لأجهزة البلت إن في جميع قرى الساحل الشمالي بفنيين محترفين."
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
            مركز صيانة بوش الساحل الشمالي - صيانة منزلية فورية
          </h1>

          <p className="text-gray-300 mb-6">
            خدمة صيانة سريعة في مارينا - مراسي - هاسيندا وكافة قرى الساحل
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

      {/* ================= CONTENT 1 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
لماذا تختار خدمة صيانة بوش الساحل الشمالي لأجهزتك؟            </h2>

            <p className="text-gray-600 leading-[2.2em]">
تنفرد خدمة صيانة بوش الساحل الشمالي بتقديم أسرع استجابة بلاغات الأعطال خلال فصل الصيف، حيث ندرك أهمية استقرار أجهزتكم أثناء العطلات. نؤكد التزامنا بتغطية كافة الكيلومترات من سيدي كرير وحتى مطروح، حيث وفرنا في مركز صيانة بوش مصر فرع الساحل الشمالي وحدات صيانة متنقلة مجهزة بقطع غيار أصلية لإصلاح الثلاجات والتكييفات والغسالات في مكانها. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني متخصص لحد باب الشاليه.            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= CONTENT 2 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
أهمية صيانة بوش الساحل الشمالي الوقائية في المناطق الساحلية            </h2>

            <p className="text-gray-600 leading-[2.2em]">
          إن إجراء صيانة بوش الساحل الشمالي الوقائية (Maintenance) ضرورة حتمية نظراً لظروف الملوحة العالية والرطوبة التي تؤثر بشكل مباشر على الصاج الخارجي والدوائر الإلكترونية. يقوم فريقنا في الساحل بفحص شامل يتضمن معالجة الصدأ، وتنظيف فلاتر الغسالات، وشحن فريون الثلاجات لضمان أعلى كفاءة تبريد في درجات الحرارة المرتفعة بفضل الخبرة الواسعة التي نقدمها لعملائنا بكل إخلاص وأمانة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم توكيل بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الفني فوراً.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT 3 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
قطع غيار أصلية وضمان معتمد في توكيل بوش الساحل الشمالي            </h2>

            <p className="text-gray-600 leading-[2.2em]">
           نحرص في مركز صيانة بوش الساحل الشمالي على توفير قطع غيار بوش الأصلية لضمان عدم تكرار العطل وإهدار وقت عطلتكم الثمين. نوفر ضماناً معتمداً على كافة الإصلاحات، مما يمنحكم راحة البال طوال فترة الصيف. اختيارك لتوكيلنا في الساحل الشمالي يضمن لك الحصول على المكونات الأصلية بأسعار المصنع المعتمدة بعيداً عن استغلال الفنيين غير المؤهلين. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب.
            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= CONTENT 4 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
أبرز الأعطال التي تعالجها صيانة بوش الساحل الشمالي فوراً            </h2>

            <p className="text-gray-600 leading-[2.2em]">
             يمتلك مهندسو صيانة بوش الساحل الشمالي خبرة فائقة في علاج أعطال غسالات بوش، ومشاكل الكومبريسور في ثلاجات بوش، بالإضافة إلى صيانة أجهزة البلت إن والشفاطات والبوتاجازات التي قد تتأثر بتراكم الدهون والأملاح. نحن نضمن لك الإصلاح المنزلي الفوري في مارينا ومراسي وهاسيندا وكافة القرى. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <NorthCoastfaqar />

    </div>
  );
}