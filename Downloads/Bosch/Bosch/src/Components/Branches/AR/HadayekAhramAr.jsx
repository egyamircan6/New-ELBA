import React from "react";
import bg from "../../../assets/homebg.png";
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";

import { Helmet } from "react-helmet-async";
import HadayekAhramfaqar from "../../faq/AR/branches/HadayekAhramfaqar";

export default function HadayekAhramAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>صيانة بوش حدائق الأهرام | اطلب صيانة فورية اليوم</title>
        <meta
          name="description"
          content="مركز صيانة بوش حدائق الأهرام المعتمد. خدمة منزلية فورية بجميع بوابات حدائق الأهرام (غسالات، ثلاجات، بلت إن) بقطع غيار أصلية. اتصل بالخط الساخن 01211114528."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            مركز صيانة بوش حدائق الأهرام | أقرب لك - صيانة منزلية
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

      {/* ================= SECTION 1 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              لماذا تختار صيانة بوش حدائق الأهرام؟
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
            تنفرد خدمة صيانة بوش حدائق الأهرام بتقديم استجابة سريعة جداً لسكان هضبة الأهرام بكافة بواباتها (خوفو، خفرع، منقرع، حورس)، حيث ندرك أهمية الوقت لعملائنا. نحن نؤكد التزامنا بالمعايير الألمانية، حيث وفرنا في مركز صيانة بوش مصر فرع حدائق الأهرام فريقاً مجهزاً بسيارات متنقلة تحتوي على كافة أدوات الفحص الرقمي لضمان إصلاح الأعطال في زيارة واحدة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر عن خدماتنا من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني متخصص لحد باب البيت.
            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
استدامة أداء أجهزتك مع صيانة بوش حدائق الأهرام الوقائية            </h2>

            <p className="text-gray-600 leading-[2.2em]">
       إن الالتزام بجدول صيانة بوش حدائق الأهرام الوقائي (Maintenance) يحمي أجهزتكم من التأثر بتغيرات ضغط المياه أو تذبذب التيار الكهربائي. يقوم فريقنا في حدائق الأهرام بفحص الفلاتر، ومراجعة كفاءة التبريد في الثلاجات، واختبار قوة مواتير الغسالات، مما يضمن استمرارية العمل بأعلى كفاءة لسنوات طويلة دون أعطال مفاجئة بفضل الخبرة الواسعة التي نقدمها بكل إخلاص وأمانة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم توكيل بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الفني فوراً.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
قطع غيار أصلية وضمان معتمد في توكيل بوش حدائق الأهرام            </h2>

            <p className="text-gray-600 leading-[2.2em]">
             نحرص في مركز صيانة بوش حدائق الأهرام على تركيب قطع الغيار الأصلية المعتمدة التي تحمل بلد المنشأ، لضمان توافقها التام مع التكنولوجيا الألمانية المتطورة، مع تقديم ضمان عام كامل على الإصلاح. اختيارك لنا في حدائق الأهرام يضمن لك الحصول على المكونات الأصلية بأسعار المصنع، بعيداً عن القطع المقلدة التي تضر بالعمر الافتراضي للجهاز وتسبب خسائر مادية فادحة. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب.
            </p>
          </div>

          <img src={img} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={img} className="rounded-xl shadow-lg" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
أبرز الأعطال التي تعالجها صيانة بوش حدائق الأهرام بالمنزل            </h2>

            <p className="text-gray-600 leading-[2.2em]">
         يتمتع مهندسو صيانة بوش حدائق الأهرام بخبرة كبيرة في علاج أعطال غسالات بوش، وضعف التبريد في ثلاجات بوش، بالإضافة إلى صيانة أجهزة بوش البلت إن والشفاطات والبوتاجازات التي تتطلب دقة فنية عالية. نحن نضمن لك الإصلاح المنزلي الفوري بأعلى جودة تشخيصية ممكنة في هضبة الأهرام. ولو جهازك فيه أي عطل، تقدر تعرف أكتر من خلال الخط الساخن بوش، أو اتصل دلوقتي على رقم صيانة بوش 01211114528، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <HadayekAhramfaqar />

    </div>
  );
}