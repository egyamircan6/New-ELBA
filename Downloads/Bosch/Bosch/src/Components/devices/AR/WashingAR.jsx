import React from "react";
import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import WashingfaqAR from "../../faq/AR/WashingfaqAR";
import { Helmet } from "react-helmet-async";

export default function WashingAR() {
  return (
    <div dir="rtl" className="bg-white space-y-24">

            
<Helmet>
      <title>أهلا بكـــــم في مركــــز صيانة غسالات ملابس بوش</title>

      <meta
        name="description"
        content="استعد كفاءة غسالتك الآن مع خبراء صيانة غسالات ملابس بوش في مصر. خدمة منزلية فورية بقطع غيار أصلية وضمان معتمد. اتصل بنا على 01211114528 لإصلاح عطل غسالتك اليوم."
      />

      {/* Service + FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "صيانة غسالات ملابس بوش",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bosch Egypt Service",
              "telephone": "01211114528",
              "priceRange": "$$",
              "image": "رابط_صورة_اللوجو_هنا",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "الجيزة، القاهرة",
                "addressLocality": "القاهرة",
                "addressCountry": "EG",
              },
            },
            "areaServed": [
              { "@type": "City", "name": "القاهرة" },
              { "@type": "City", "name": "الجيزة" },
              { "@type": "City", "name": "الإسكندرية" },
              { "@type": "City", "name": "مدينة نصر" },
              { "@type": "City", "name": "التجمع" },
              { "@type": "City", "name": "الشيخ زايد" },
              { "@type": "City", "name": "6 أكتوبر" },
              { "@type": "City", "name": "المعادي" },
              { "@type": "City", "name": "مصر الجديدة" },
            ],
            "description":
              "خدمة صيانة غسالات ملابس بوش المعتمدة في مصر، توفير قطع غيار أصلية وضمان شامل على الإصلاح المنزلي لجميع الموديلات.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "ما هو رقم صيانة غسالات ملابس بوش المعتمد في مصر؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "رقم صيانة غسالات ملابس بوش المعتمد هو 01211114528. يمكنك التواصل مع هذا الرقم لطلب زيارة منزلية فورية من مهندسين متخصصين في إصلاح أعطال Bosch Egypt بكافة موديلاتها، حيث نضمن لك استجابة سريعة خلال 24 ساعة.",
                },
              },
              {
                "@type": "Question",
                "name": "كيف أصل إلى رقم خدمة عملاء بوش المختص بالغسالات؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "يمكنك التواصل مع خدمة عملاء بوش مباشرة عبر الرقم 01211114528 للاستفسار عن الأعطال أو حجز الصيانة أو طلب دعم فني لجميع أجهزة Bosch.",
                },
              },
              {
                "@type": "Question",
                "name": "أين يقع أقرب مركز صيانة بوش لغسالات الملابس؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "لتحديد أقرب مركز صيانة، اتصل على 01211114528 وسيتم توجيهك لأقرب فني أو سيارة دعم مجهزة بقطع الغيار الأصلية.",
                },
              },
              {
                "@type": "Question",
                "name": "هل يوجد مركز صيانة بوش لخدمة شرق القاهرة؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "نعم، نوفر تغطية كاملة في مدينة نصر ومصر الجديدة والتجمع.",
                },
              },
              {
                "@type": "Question",
                "name": "هل تتوفر خدمة صيانة بوش في القاهرة الجديدة والرحاب؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "نعم، تشمل خدماتنا القاهرة الجديدة والرحاب ومدينتي والشروق.",
                },
              },
              {
                "@type": "Question",
                "name": "هل يوجد صيانة بوش في الجيزة و6 أكتوبر؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "نعم، نوفر صيانة في 6 أكتوبر والشيخ زايد والهرم وفيصل وحدائق الأهرام.",
                },
              },
              {
                "@type": "Question",
                "name": "هل يوجد صيانة بوش في المعادي والمقطم؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "نعم، نوفر صيانة منزلية في المعادي والمقطم وحلوان.",
                },
              },
              {
                "@type": "Question",
                "name": "هل يوجد صيانة بوش في الإسكندرية؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "نعم، نوفر فريق صيانة متخصص في الإسكندرية والساحل الشمالي.",
                },
              },
              {
                "@type": "Question",
                "name": "هل يتم استخدام قطع غيار أصلية؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "نعم، جميع الإصلاحات تتم باستخدام قطع غيار أصلية بضمان معتمد.",
                },
              },
            ],
          },
        ])}
      </script>
    </Helmet>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
صيانة غسالات ملابس بوش: الحلول الهندسية المعتمدة من Bosch Egypt       </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
            نقدم أفضل خدمات صيانة الغسالات بأحدث الأجهزة وقطع غيار أصلية بضمان معتمد
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:01211114528"
              className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-lg font-bold transition shadow-lg"
            >
              اتصل الآن
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              واتساب
            </a>

          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 px-4">

        <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
          صيانة مجففات <span className="text-red-600">Bosch</span>
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

          <div className="text-right">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
مركز صيانة غسالات ملابس بوش المعتمد لخدمة منزلك        </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
يعتبر مركزنا الوجهة الأولى لكل من يبحث عن الأمان والدقة في صيانة غسالات بوش داخل مصر. نحن ندرك أهمية الغسالة في روتينك اليومي، لذا وفرنا طاقم عمل محترفاً في إصلاح غسالات بوش بجميع أنواعها. بفضل خبرتنا الطويلة كأفضل مركز خدمة بوش، نضمن لك خدمة فورية تتم بمنزلك دون الحاجة لنقل الجهاز، مما يحافظ على سلامة الغسالة ويوفر وقتك. نحن نتبع المعايير التقنية الألمانية لضمان عودة جهازك للعمل بكفاءة تامة، مع الالتزام التام بالمواعيد والاحترافية في التعامل الهندسي</p>
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
              >
                اتصل الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                واتساب
              </a>

            </div>

          </div>

        </div>
      </section>


           {/* ================= SECTION 2 ================= */}
      <section className=" ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


             <div className="text-right">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
تصليح غسالات بوش أوتوماتيك بأحدث المعدات والتقنيا        </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
إذا كنت تواجه أعطالاً في الصرف أو اهتزازاً شديداً، فإن خدمة تصليح غسالات بوش لدينا هي الحل الأمثل. نحن متخصصون في التعامل مع أعطال غسالات ملابس بوش الأوتوماتيك وفوق أوتوماتيك، بما في ذلك الموديلات الحديثة. يمتلك مهندسونا القدرة على فحص الدوائر الإلكترونية وحل مشاكل المواتير الصامتة وتغيير "الرولمان بلي" بدقة متناهية. هدفنا هو تقديم خدمة صيانة بوش مصر التي تغنيك عن شراء جهاز جديد، من خلال معالجة كافة العيوب المعقدة والبسيطة في زيارة منزلية واحدة وبأقل تكلفة ممكنة.            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
              >
                اتصل الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                واتساب
              </a>

            </div>

          </div>


          <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

       
        </div>
      </section>

           {/* ================= SECTION 2 ================= */}
      <section className=" ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


          
          <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>


             <div className="text-right">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
قطع غيار غسالات بوش الأصلية المتوفرة بأسعار تنافسي    </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">سر نجاحنا واستمرارنا هو الاعتماد الكلي على قطع غيار غسالات بوش الأصلية، والتي تضمن إطالة العمر الافتراضي للجهاز ومنع تكرار الأعطال. نوفر كافة القطع من طلمبات طرد، وصمامات مياه، ولوحات تحكم بأسعار عادلة تناسب العميل المصري. استخدام المكونات الأصلية هو ما يميز خدمة عملاء بوش لدينا، حيث يمنحك الأداء المثالي الذي صُمم به الجهاز في الأصل. لا تتردد في طلب الخدمة لضمان الحصول على مكونات مضمونة تحمي محرك الغسالة وتحافظ على جودة الملابس أثناء الغسيل.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
              >
                اتصل الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                واتساب
              </a>

            </div>

          </div>



       
        </div>
      </section>
           {/* ================= SECTION 2 ================= */}
      <section className=" ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


 <div className="text-right">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
ضمان صيانة غسالات بوش المعتمد لراحة بال العميل      </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">نحن لا نكتفي بالإصلاح فقط، بل نقدم ضمان صيانة غسالات بوش شاملاً على جميع أعمال التصليح وقطع الغيار المستبدلة. هذا الضمان يعكس ثقتنا في جودة الخدمة التي يقدمها فني صيانة بوش، ويضمن حق العميل في المتابعة الدورية المجانية إذا ظهرت أي مشكلة. تواصل مع رقم صيانة غسالات بوش 01211114528 الآن لتستفيد من أقوى عروض الصيانة الدورية وخصومات قطع الغيار. نحن هنا لخدمتكم على مدار الساعة، ونلتزم بتقديم تقارير فنية دقيقة عن حالة الجهاز لضمان الشفافية والمصداقية مع كل عميل.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700  text-white px-10 py-3 rounded-lg font-bold transition shadow-lg"
              >
                اتصل الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                واتساب
              </a>

            </div>

          </div>

          
          <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>


            



       
        </div>
      </section>
           {/* ================= SECTION 2 ================= */}
      <section className=" ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


             <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>


          
             <div className="text-right">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
ضمان الاستدامة من Bosch Egypt: التزامنا جودة لا تضاهى          </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">إن التزامنا في صيانة غسالة أطباق بوش يتوج بتقديم ضمان شامل وحقيقي على كافة قطع الغيار الأصلية التي يتم تركيبها بواسطة مهندسينا المتخصصين. من خلال تواصلك مع Bosch Egypt على الرقم 01211114528، ستحصل على متابعة دورية وشهادة ضمان معتمدة تضمن لك حق الإصلاح المجاني في حال ظهور أي عيوب فنية ناتجة عن أعمال الصيانة، مما يعزز من قيمة وثقة عملائنا في علامة بوش التجارية. نحن نسعى دائماً لتحقيق أقصى درجات الرضا من خلال تقديم خدمة ما بعد البيع المتميزة والموثوقة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700 px-10  text-white py-3 rounded-lg font-bold transition shadow-lg"
              >
                اتصل الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                واتساب
              </a>

            </div>

          </div>



          
       



       
        </div>
      </section>


      {/* ================= TIPS ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 bg-white/95 rounded-2xl shadow-2xl max-w-3xl mx-auto px-8 py-10 text-center">

          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            نصائح للحفاظ على الغسالة 💡
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500">✔</span>
              لا تضع حمولة زائدة داخل الغسالة
            </li>

            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500">✔</span>
              استخدم مسحوق غسيل مناسب
            </li>

            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500">✔</span>
              نظف الفلتر بانتظام لتجنب الأعطال
            </li>

          </ul>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-4">

        <h2 className="text-center text-3xl font-bold mb-10">
          خدماتنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame1} className="w-24 h-24" />
            <h3 className="font-bold mt-4">إصلاح الأعطال</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              إصلاح جميع الأعطال بسرعة وكفاءة
            </p>
          </div>

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame2} className="w-24 h-24" />
            <h3 className="font-bold mt-4">صيانة دورية</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              متابعة دورية للحفاظ على الأداء
            </p>
          </div>

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame3} className="w-24 h-24" />
            <h3 className="font-bold mt-4">دعم فني</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              دعم فني متوفر طوال الوقت
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-8 py-12 text-center text-white">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            محتاج صيانة لغسالة بوش؟
          </h3>

          <p className="text-gray-200 mb-8">
            تواصل معنا الآن واحصل على أفضل خدمة صيانة بضمان معتمد
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:01211114528"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold"
            >
              اتصل الآن
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              واتساب
            </a>

          </div>

        </div>
      </section>
      

   
      <WashingfaqAR/>

    </div>
  );
}