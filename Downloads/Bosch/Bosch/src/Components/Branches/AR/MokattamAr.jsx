import React from "react";
import bg from "../../../assets/homebg.png"; 
import img from "../../../assets/5 1.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import Mokattamfaqar from "../../faq/AR/branches/Mokattamfaqar";
import { Helmet } from "react-helmet-async";
export default function MokattamAr() {
  return (
    <div dir="rtl" className="bg-gray-100">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >


<Helmet>

<title>
صيانة بوش المقطم | اطلب صيانة فورية اليوم</title>

<meta
name="description"
content="مركز صيانة بوش المقطم المعتمد يقدم خدمة منزلية فورية بقطع غيار أصلية وضمان عام. اتصل بنا الآن لطلب صيانة غسالات، ثلاجات، ودراير بوش في منطقة المقطم"
/>

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: `
{
 "@context":"https://schema.org",
 "@graph":[
   {
      "@type":"LocalBusiness",
      "@id":"https://bosch-egypts.com/#nasrcity",
      "name":"Bosch Nasr City Repair",
      "url":"https://bosch-egypts.com/صيانة-بوش-مصر",
      "telephone":"+201211114528",
      "address":{
         "@type":"PostalAddress",
         "streetAddress":"Nasr City",
         "addressLocality":"Cairo",
         "addressCountry":"EG"
      }
   },
   {
      "@type":"Service",
      "@id":"https://bosch-egypts.com/#nasrcity-service",
      "name":"صيانة بوش مدينة نصر المعتمدة",
      "description":"خدمة صيانة بوش الشاملة بمدينة نصر لكافة الأجهزة المنزلية والبلت ان بقطع غيار أصلية وضمان رسمي.",
      "provider":{
         "@id":"https://bosch-egypts.com/#nasrcity"
      },
      "areaServed":[
         "Nasr City",
         "Zahraa Nasr City",
         "Abbas El Akkad",
         "Makram Ebeid"
      ]
   },
   {
      "@type":"FAQPage",
      "@id":"https://bosch-egypts.com/#faq",
      "mainEntity":[
         {
            "@type":"Question",
            "name":"أين يمكنني طلب صيانة غسالات ملابس بوش في مدينة نصر؟",
            "acceptedAnswer":{
               "@type":"Answer",
               "text":"يمكنك طلب صيانة غسالات ملابس بوش في مدينة نصر عبر الرقم 01211114528."
            }
         },
         {
            "@type":"Question",
            "name":"كيف أحجز موعد صيانة ثلاجات بوش في مدينة نصر؟",
            "acceptedAnswer":{
               "@type":"Answer",
               "text":"حجز صيانة ثلاجات بوش في مدينة نصر يتم عبر الرقم 01211114528."
            }
         },
         {
            "@type":"Question",
            "name":"هل تتوفر صيانة افران بلت ان بوش في مدينة نصر؟",
            "acceptedAnswer":{
               "@type":"Answer",
               "text":"نعم، نقدم خدمة صيانة افران بلت ان بوش بمدينة نصر عبر الرقم 01211114528."
            }
         },
         {
            "@type":"Question",
            "name":"ما هو رقم صيانة غسالات أطباق بوش بلت ان في مدينة نصر؟",
            "acceptedAnswer":{
               "@type":"Answer",
               "text":"الرقم هو 01211114528 لطلب صيانة غسالات أطباق بوش بمدينة نصر."
            }
         },
         {
            "@type":"Question",
            "name":"هل يوجد فني صيانة ميكروويف بوش بمدينة نصر؟",
            "acceptedAnswer":{
               "@type":"Answer",
               "text":"نعم، نوفر صيانة ميكروويف بوش بمدينة نصر عبر الرقم 01211114528."
            }
         }
      ]
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
 أهلاً بكــم في مركز صيانة بوش المقطم | أقرب لك - صيانة منزلية        </h1>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
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



            {/* ================= STEPS ================= */}
<section className="py-16 bg-[#f3f3f3]">
  <h2 className="text-center text-xl md:text-2xl font-bold mb-14">
    مراحل العمل و طلب الخدمة
  </h2>

  <div className="max-w-6xl mx-auto px-4 relative">

    {/* الخط الرئيسي */}
    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-red-500 z-0"></div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">

      {[
        { num: "01", title: "طلب خدمة", desc: "بمجرد طلب الخدمة نقوم بالرد والمتابعة معك" },
        { num: "02", title: "زيارة منزلية وإجراء معاينة", desc: "معاينة المنتج ومعرفة العطل الكامل به" },
        { num: "03", title: "كشف الأعطال", desc: "وبعدها يتم إصلاح العطل ومن ثم يتم تجربة المنتج" },
        { num: "04", title: "المتابعة بعد الخدمة", desc: "نقوم بالمتابعة لضمان رضاك التام وكفاءة عمل المنتج" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center relative">

          {/* الدائرة */}
          <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold bg-white z-10">
            {item.num}
          </div>

          {/* النص */}
          <h3 className="font-bold mt-4 mb-2 text-sm md:text-base">
            {item.title}
          </h3>

          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px]">
            {item.desc}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>

             <section className="py-20 px-4">
       
               <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
              
مركز صيانة مقطم  <span className="text-red-600">Bosch</span>
               </h1>
       
               <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                
                 <div className="text-right">
       
                   <h2 className="text-2xl font-semibold mb-4 text-gray-900">
لماذا تختار صيانة بوش المقطم كخيارك الأول؟          </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">تعتبر خدمة صيانة بوش المقطم هي الوجهة الموثوقة لآلاف العملاء الذين يبحثون عن الكفاءة والمهنية في إصلاح أعطالهم المنزلية داخل الهضبة الوسطى والعليا. نحن نؤكد التزامنا بتوفير أعلى معايير الجودة، حيث وفرنا في مركز صيانة بوش مصر فرع المقطم طاقم عمل متخصص في صيانة أجهزة بوش، مدعماً بأحدث أجهزة الفحص الرقمي التي تحدد العطل بدقة متناهية دون الحاجة لنقل الجهاز من منزلك، مما يوفر عليك الوقت والجهد ويضمن استعادة كفاءة الجهاز فوراً بأقل تكلفة ممكنة بفضل المهندسين الأكفاء. ولو جهازك فيه أي عطل، اتصل دلوقتي على رقم صيانة بوش 01211114528 أو راسلنا عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.</p>
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
             <section className="py-20 px-4">
       
       
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
أهمية صيانة بوش في المقطم - الصيانة الدورية من مركزنا        </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base"> إن الالتزام بعمليات صيانة بوش المقطم الدورية (Maintenance) هو الحصن المنيع الذي يحمي أجهزتكم من الأعطال الكارثية والمفاجئة التي قد توقف روتينكم اليومي وتكلفكم مبالغ طائلة لاحقاً. نركز في خدمتنا بالمقطم على فحص دورات التبريد في الثلاجات، ومسارات المياه في الغسالات، والدوائر الكهربائية الحساسة في الأفران، مما يساهم بشكل مباشر في تقليل استهلاك الكهرباء وإطالة العمر الافتراضي للجهاز لسنوات طويلة إضافية بفضل جودة الصيانة الوقائية التي نقدمها لعملائنا بكل احترافية وأمانة مهنية تامة تليق باسم بوش العالمي. ولو جهازك فيه أي عطل، اتصل دلوقتي على رقم صيانة بوش 01211114528 أو راسلنا عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت.</p>                   <div className="flex flex-col sm:flex-row gap-4">
       
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
             <section className="py-20 px-4">
       
       
               <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                  <div className="text-right">
       
                   <h2 className="text-2xl font-semibold mb-4 text-gray-900">
قطع الغيار الأصلية في مركز صيانة بوش المقطم      </h2>
       
                   <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">نحن في مركز صيانة بوش المقطم نلتزم بشكل صارم بتركيب قطع الغيار الأصلية المعتمدة فقط، والتي تأتي بضمان رسمي يصل إلى عام كامل لضمان راحة بال العميل الكاملة. سواء كنت تعاني من تلف في "بورده" الجهاز، أو مشاكل في الموتور، أو تسريب في الفريون، فإن فنيينا يحملون معهم كافة قطع الغيار اللازمة أثناء الزيارة الأولى لضمان سرعة التنفيذ الفوري. اختيارك لنا في منطقة المقطم يعني الحفاظ على هوية جهازك الألماني وأدائه الفائق دون اللجوء للقطع المقلدة التي تدمر الأجهزة وتسبب أعطالاً مضاعفة ومكلفة. ولو جهازك فيه أي عطل، اتصل دلوقتي على رقم صيانة بوش 01211114528 أو راسلنا عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت</p>                   <div className="flex flex-col sm:flex-row gap-4">
       
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


      {/* ================= CONTENT ================= */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE CARD */}
          <div className=" overflow-hidden">
          

            <div className="p-4 flex justify-center">
              <img src={img} alt="devices" className="w-full max-w-sm" />
            </div>

          </div>

          {/* TEXT */}
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">
أشهر الأعطال التي تعالجها صيانة بوش المقطم            </h2>

            <p className="text-gray-600 leading-loose mb-6">
           يواجه عملاء صيانة بوش المقطم مجموعة متنوعة من الأعطال التي نتعامل معها بخبرة تزيد عن عشرين عاماً، مثل أعطال عدم العصر في الغسالات، أو توقف التبريد في الثلاجات و الديب فريزر نتيجة ضعف الفريون. كما نتخصص في معالجة مشاكل الإشعال في البوتاجازات وأعطال الطرمبة في غسالات الأطباق بكفاءة. فريقنا مدرب أيضاً على صيانة أجهزة بوش المدمجة و الميكروويف بمهارة فائقة تضمن عودة الجهاز للعمل بكفاءة المصنع المصممة له في أسرع وقت ممكن. ولو جهازك فيه أي عطل، اتصل دلوقتي على رقم صيانة بوش 01211114528 أو راسلنا عبر الواتساب وهيوصلك فني صيانة متخصص لحد باب البيت
            </p>

            <div className="flex gap-4 justify-end">
              <a
                href="tel:01211114528"
                className="bg-red-600 text-white px-6 py-2 rounded-md"
              >
                اطلب صيانة الآن
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-600 text-red-600 px-6 py-2 rounded-md"
              >
                واتساب
              </a>
            </div>
          </div>

        </div>
      </section>

<Mokattamfaqar/>

            

    </div>
  );
}