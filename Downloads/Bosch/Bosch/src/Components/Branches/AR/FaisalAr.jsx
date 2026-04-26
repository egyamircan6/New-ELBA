import React from "react";
import bg from "../../../assets/homebg.png";
import img from "../../../assets/5 1.png";
import Faisalfaqar from "../../faq/AR/branches/Faisalfaqar";
import { Helmet } from "react-helmet-async";

export default function FaisalAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>صيانة بوش فيصل | اطلب صيانة منزلية فورية 01211114528</title>

        <meta
          name="description"
          content="مركز صيانة بوش فيصل المعتمد. خدمة منزلية فورية لكافة الأجهزة بقطع غيار أصلية وضمان عام. اتصل الآن برقم صيانة بوش فيصل 01211114528."
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
            مركز صيانة بوش فيصل | خدمة منزلية سريعة
          </h1>

          <p className="text-gray-300 mb-6">
            صيانة احترافية لجميع أجهزة بوش في فيصل والجيزة
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
              لماذا تختار صيانة بوش فيصل؟
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
             تعتبر خدمة صيانة بوش فيصل هي المقصد الأول والآمن لجميع سكان منطقة فيصل والجيزة الذين يبحثون عن الاحترافية في التعامل مع أجهزتهم الألمانية. نحن في صيانة بوش مصر ندرك أهمية الوقت لعملائنا، لذا وفرنا في فرع صيانة بوش فيصل أسطولاً من السيارات المجهزة بالكامل لنقل المهندسين وقطع الغيار إلى منزلك فوراً. إن اختيارك لخدمة صيانة بوش فيصل يضمن لك فحصاً دقيقاً باستخدام أحدث الأجهزة الرقمية، مما يوفر عليك عناء نقل الجهاز ويضمن عودته للعمل بكفاءة المصنع في نفس الزيارة. لو جهازك فيه عطل، اتصل الآن على 01211114528.
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
همية صيانة بوش فيصل الدورية للحفاظ على الأجهزةا
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
الالتزام بإجراء صيانة بوش فيصل الدورية (Maintenance) هو الضمان الوحيد لإطالة العمر الافتراضي لأجهزتكم وحمايتها من التوقف المفاجئ. نركز في فرعنا بفيصل على تقديم خدمة صيانة أجهزة بوش التي تشمل تنظيف دورات المياه في الغسالات، وفحص شحن الفريون في الثلاجات، ومراجعة التوصيلات الكهربائية. هذا النهج الوقائي من صيانة بوش فيصل يقلل من استهلاك الكهرباء ويمنع حدوث أعطال مكلفة مستقبلاً، مما يعكس خبرتنا الطويلة في تقديم خدمات بوش المعتمدة بكل أمانة وصدق.            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
قطع الغيار الأصلية والضمان في فرع فيصل
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
            نحن في مركز صيانة بوش فيصل نلتزم بشكل صارم بتركيب قطع الغيار الأصلية فقط، والتي تأتي مع شهادة ضمان معتمدة تصل إلى عام كامل. سواء كنت تحتاج إلى قطع غيار لـ صيانة ثلاجات بوش أو مكونات إلكترونية لـ صيانة غسالات بوش، فإن توكيلنا يوفر لك المكونات الأصلية المختومة. اختيارك لـ صيانة بوش فيصل يحمي جهازك من مخاطر القطع المقلدة التي قد تؤدي لتلف المواتير، ويمكنك دائماً طلب الدعم عبر الخط الساخن بوش 01211114528.
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
             الأعطال الشائعة التي تعالجها صيانة بوش فيصل
            </h2>

            <p className="text-gray-600 leading-[2.2em]">
             يتعامل فريق صيانة بوش فيصل يومياً مع مجموعة واسعة من الأعطال التي نواجهها، مثل ضعف التبريد، وأعطال تصريف المياه، ومشاكل لوحات التحكم (PCBs). مهندسونا خبراء في تقديم صيانة أجهزة بوش المدمجة والبلت إن بدقة متناهية. إن خبرة صيانة بوش فيصل تمتد لتشمل الأعطال المعقدة في الغسالات والديب فريزر، مع ضمان تقديم حلول جذرية تمنع تكرار العطل، مما يجعلنا المركز المفضل لخدمة صيانة بوش فيصل في محافظة الجيز
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto text-right">
    
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
      خدمات بوش الشاملة في فيصل والمناطق المجاورة
    </h2>

    <p className="text-gray-600 leading-[2.2em] mb-6">
      نحن نقدم تغطية كاملة لجميع أجهزة بوش في فيصل، بما في ذلك:
    </p>

    <ul className="space-y-3 text-gray-700 leading-[2.2em] list-disc pr-6">
      <li>صيانة ديب فريزر بوش و صيانة دراير بوش.</li>
      <li>خدمة صيانة غسالات أطباق بوش و صيانة أطباق بلت إن.</li>
      <li>إصلاح بوتاجازات بوش، المسطحات، و الأفران البلت إن.</li>
      <li>صيانة ميكروويف بوش و الشفاطات.</li>
      <li>خدمات تكييف بوش و السخانات.</li>
      <li>إصلاح مكنة قهوة بوش و المكانس.</li>
      <li>متخصصون في صيانة ثلاجات بلت إن بوش.</li>
      <li>نخدم أيضاً المناطق المجاورة لفيصل: الهرم، حدائق الأهرام، و المهندسين.</li>
    </ul>

  </div>
</section>

      {/* ================= FAQ ================= */}
      <Faisalfaqar />

    </div>
  );
}