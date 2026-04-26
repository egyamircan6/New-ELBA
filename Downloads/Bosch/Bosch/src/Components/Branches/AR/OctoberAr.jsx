import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";

import SheikhZayedfaqar from "../../faq/AR/branches/SheikhZayedfaqar";
import Octoberfaqar from "../../faq/AR/branches/Octoberfaqar";
import { Helmet } from "react-helmet-async";

export default function OctoberAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >

        <Helmet>
          <title>صيانة بوش 6 أكتوبر | اطلب صيانة فورية اليوم</title>

          <meta
            name="description"
            content="مركز صيانة بوش 6 أكتوبر المعتمد يقدم خدمة منزلية فورية بقطع غيار أصلية وضمان عام في كافة أحياء أكتوبر والشيخ زايد. اتصل بالخط الساخن 01211114528."
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
      "name": "ما هو رقم الخط الساخن لتوكيل بوش في 6 أكتوبر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يمكنك التواصل عبر الخط الساخن بوش أو الاتصال على 01211114528. نوفر صيانة منزلية سريعة في أكتوبر بقطع غيار أصلية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يوفر فرع أكتوبر صيانة لغسالات الأطباق بوش؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، متخصصون في إصلاح غسالات أطباق بوش بمدينة 6 أكتوبر. اطلب الخدمة عبر الاتصال بـ 01211114528."
      }
    }
  ]
}
              `,
            }}
          />
        </Helmet>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            مركز صيانة بوش 6 أكتوبر | أقرب لك - صيانة منزلية
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
              لماذا تختار صيانة بوش 6 أكتوبر لخدمة أجهزتك؟
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
تعتبر خدمة صيانة بوش 6 أكتوبر هي الوجهة الأولى لسكان مدينة السادس من أكتوبر وهضبة الأهرام الذين يبحثون عن الكفاءة الألمانية في إصلاح أجهزتهم. نحن نؤكد التزامنا بتوفير مهندسين محترفين، حيث وفرنا في مركز صيانة بوش مصر فرع أكتوبر فريقاً مجهزاً بأحدث أدوات الفحص الرقمية لضمان تشخيص العطل بدقة وسرعة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني متخصص لحد باب البيت.            </p>
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
              أهمية صيانة بوش 6 أكتوبر الوقائية للأجهزة المنزلية
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
إن الالتزام بعمليات صيانة بوش 6 أكتوبر الدورية (Maintenance) يضمن حماية أجهزتك المنزلية من الأعطال المفاجئة الناتجة عن الاستخدام المستمر. نحن نركز في خدمتنا داخل مدينة أكتوبر على فحص الأجزاء الحيوية مثل مواتير الثلاجات، وطلمبات الغسالات، واللوحات الإلكترونية، مما يطيل عمر الجهاز ويوفر تكاليف الإصلاح الكبيرة مستقبلاً بفضل الدعم الفني المتميز الذي نقدمه لعملائنا بكل أمانة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم توكيل بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الفني فوراً.            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="text-right">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              قطع الغيار الأصلية في توكيل بوش 6 أكتوبر والضمان
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
نحن في مركز صيانة بوش 6 أكتوبر نضمن لعملائنا تركيب قطع غيار بوش الأصلية فقط، والتي تأتي بضمان معتمد يصل إلى سنة كاملة. اختيارك لقطع الغيار الأصلية يحمي محرك الجهاز من التلف ويحافظ على كفاءة التشغيل العالمية التي تشتهر بها علامة بوش. نحن نرفض تماماً استخدام القطع المقلدة حرصاً على سلامة أجهزتكم في منطقة أكتوبر. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب.            </p>
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
أشهر الأعطال التي تعالجها صيانة بوش 6 أكتوبر
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
يتعامل مهندسو صيانة بوش 6 أكتوبر يومياً مع أعطال متنوعة تشمل مشاكل التبريد في الثلاجات، وأعطال الصرف في الغسالات، بالإضافة إلى صيانة أجهزة البلت إن والشفاطات. نحن نمتلك الخبرة الكافية للتعامل مع التكنولوجيا الألمانية الحديثة وتقديم حلول نهائية للأعطال المعقدة في منزلك. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Octoberfaqar />

    </div>
  );
}