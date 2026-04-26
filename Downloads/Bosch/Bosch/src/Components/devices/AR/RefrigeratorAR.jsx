import React from "react";
import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import RefrigeratorfaqAR from "../../faq/AR/RefrigeratorfaqAR";
import { Helmet } from "react-helmet-async";

export default function RefrigeratorAR() {
   return (
     <div dir="rtl" className="bg-white space-y-24">
 
             
       <Helmet>
 <title>
صيانة ثلاجات بوش | المركز المعتمد Bosch Egypt | 01211114528 </title>
 
 <meta
 name="description"
 content="احصل على أفضل خدمة صيانة ثلاجات بوش في مصر. قطع غيار أصلية، خدمة منزلية فورية، وضمان شامل من Bosch Egypt. اتصل بنا الآن 01211114528 لإصلاح ثلاجتك فو"
 />
{/*  
 <script type="application/ld+json">
 {JSON.stringify({
 "@context":"https://schema.org",
 "@type":"FAQPage",
 "mainEntity":[
 
 {
 "@type":"Question",
 "name":"ما هو رقم تليفون صيانة غسالة أطباق بوش المعتمد في مصر؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"الرقم الرسمي المباشر لطلب خدمة صيانة غسالة أطباق بوش هو 01211114528."
 }
 },
 
 {
 "@type":"Question",
 "name":"هل يوفر توكيل بوش صيانة منزلية فورية لغسالات الأطباق؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"نعم، توفر صيانة بوش مصر خدمة الإصلاح المنزلي الفوري عبر مهندسين متخصصين وقطع غيار أصلية عند الاتصال على 01211114528."
 }
 },
 
 {
 "@type":"Question",
 "name":"ما هي مسببات ظهور أكواد الأعطال Error Codes في غسالة أطباق بوش؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"تظهر الأكواد مثل E15 و E19 و E24 نتيجة مشاكل في طلمبة الطرد أو تسريب مياه داخلي ويتطلب حلها فحصاً دقيقاً من مركز الصيانة."
 }
 },
 
 {
 "@type":"Question",
 "name":"كيف يمكنني التأكد من أصلية قطع الغيار عند صيانة غسالة أطباق بوش؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"نلتزم بتركيب قطع غيار أصلية 100 بالمئة مختومة بباركود المصنع ومرفقة بضمان رسمي."
 }
 },
 
 {
 "@type":"Question",
 "name":"هل تغطي فروع صيانة بوش المحافظات والمدن الجديدة؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"نعم، نغطي مدينة نصر والتجمع والشيخ زايد و6 أكتوبر والمعادي والإسكندرية."
 }
 },
 
 {
 "@type":"Question",
 "name":"ما هو العمر الافتراضي لغسالة أطباق بوش؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"قد يتجاوز العمر الافتراضي 12 عاماً عند الالتزام بالصيانة الدورية وتنظيف الفلاتر."
 }
 },
 
 {
 "@type":"Question",
 "name":"لماذا يفضل الاعتماد على توكيل صيانة بوش بدلاً من الفنيين غير المعتمدين؟",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"لأن التوكيل يوفر قطع غيار أصلية وضمان حقيقي ويحافظ على سلامة اللوحة الإلكترونية الحساسة."
 }
 }
 
 ]
 })}
 </script>
  */}
 </Helmet>
       {/* ================= HERO ================= */}
       <section
         className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
         style={{ backgroundImage: `url(${heroImg})` }}
       >
         <div className="absolute inset-0 bg-black/70"></div>
 
         <div className="relative z-10 text-white max-w-3xl px-4">
 
           <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
صيانة ثلاجات بوش: الجودة الألمانية بأيدي خبراء Bosch Egypt       </h1>
 
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
           صيانة تلاجات <span className="text-red-600">Bosch</span>
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
خبراء صيانة ثلاجات بوش: ثقة تبدأ من التشخيص الصحيح        </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
تعتمد الثقة بين العميل ومركز صيانة ثلاجات بوش على دقة الفحص الأولي؛ لذا نوفر طاقماً هندسياً يمتلك خبرة واسعة في التعامل مع الدوائر الإلكترونية المعقدة وأنظمة التبريد الذكية. في توكيل بوش مصر، ندرك أن الثلاجة هي قلب المطبخ، ولذلك نلتزم بتقديم تقارير فنية شفافة توضح حالة الجهاز الفعلية قبل البدء في أي إجراء، مما يجعلنا الخيار الأول للباحثين عن "أفضل مركز صيانة معتمد في مصر".</p> 
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
التخصص التقني في إصلاح سوفت وير وهارد وير ثلاجات Bosch         </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
يتطلب التعامل مع التكنولوجيا الألمانية تخصصاً تقنياً عميقاً، وهذا ما يميز خدمة صيانة ثلاجات بوش لدينا. نحن نستخدم أحدث أجهزة السوفت وير لكشف أعطال كروت الشاشة والحساسات (Sensors)، بالإضافة إلى توفير "قطع غيار ثلاجات بوش الأصلية" التي تضمن توافقاً تاماً مع الموديلات المختلفة. إن مهندسينا مدربون على التعامل مع تقنيات NoFrost وتوزيع الهواء المتعدد، مما يضمن لك معالجة الانخفاض في كفاءة التبريد بأساليب علمية حديثة             </p>
 
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
خدمة منزلية فورية عبر رقم صيانة ثلاجات بوش الموحد    </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">نحن نقدر وقتك وخصوصية منزلك، لذا قمنا بتفعيل نظام "الخدمة المنزلية المتكاملة" لجميع عمليات صيانة ثلاجات بوش. بمجرد اتصالك على الرقم 01211114528، تتوجه إليك سيارة مجهزة بكافة الأدوات التقنية لإتمام الإصلاح في نفس الزيارة بنسبة نجاح تتخطى 95%. تضمن لك الشركة عدم سحب الجهاز من المنزل إلا في حالات نادرة جداً، مما يوفر عليك عناء النقل ويحافظ على سلامة الثلاجة من الصدمات.
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
الضمان الشامل من Bosch Egypt: استدامة لما بعد الإصلاح        </h2>
 
             <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">لا تنتهي علاقتنا بالعميل عند إصلاح العطل، بل تبدأ بمنح شهادة ضمان معتمدة على أعمال صيانة ثلاجات بوش وقطع الغيار المستبدلة. هذا الضمان يعكس ثقتنا في جودة الخدمة المقدمة ويغطي فترات زمنية طويلة تضمن لك حق العودة إلينا في حال تكرار العطل مجاناً. نحن نهدف من خلال الرقم 01211114528 إلى بناء شراكة طويلة الأمد مع عملائنا تعتمد على المصداقية والالتزام التام بجدول المواعيد
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
       
 
    
       <RefrigeratorfaqAR />
 
     </div>
   );
}