import React, { useState } from "react";
import img from '../../../../assets/5 1.png'
import img1 from '../../../../assets/1 4.png'

export default function Ourproducts() {
  const [activeTab, setActiveTab] = useState("washing");

  const tabs = [
    { id: "washing", label: "غسالات" },
    { id: "fridges", label: "ثلاجات" },
    { id: "freezers", label: "ديب فريزر" },
    { id: "ovens", label: "أفران وبوتاجازات" },
    { id: "ac", label: "تكييفات" },
  ];

  const content = {
    washing: {
      title: 'خدمات مركز صيانة غسالات بوش في مصر',
      desc: "في صيانة بوش نهتم بكل التفاصيل علشان نضمنلك تجربة مميزة وخدمة صيانة ترجع جهازك لأفضل أداء. نوفر لك قطع غيار أصلية 100% بضمان رسمي يحافظ على كفاءة الجهاز ويطيل عمره الافتراضي. فريقنا مكوَّن من فنيين معتمدين ومدرَّبين على أحدث تقنيات، قادرين على تشخيص الأعطال بدقة وتنفيذ الإصلاح بسرعة واحترافية عالية. كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.",
    },
    fridges: {
           title: 'خدمات مركز صيانة تلاجات بوش في مصر',
      desc: "في صيانة بوش نهتم بكل التفاصيل علشان نضمنلك تجربة مميزة وخدمة صيانة ترجع جهازك لأفضل أداء. نوفر لك قطع غيار أصلية 100% بضمان رسمي يحافظ على كفاءة الجهاز ويطيل عمره الافتراضي. فريقنا مكوَّن من فنيين معتمدين ومدرَّبين على أحدث تقنيات، قادرين على تشخيص الأعطال بدقة وتنفيذ الإصلاح بسرعة واحترافية عالية. كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.",
    },
    freezers: {
           title: 'خدمات مركز صيانة  ديب فرايزر بوش في مصر',
      desc: "في صيانة بوش نهتم بكل التفاصيل علشان نضمنلك تجربة مميزة وخدمة صيانة ترجع جهازك لأفضل أداء. نوفر لك قطع غيار أصلية 100% بضمان رسمي يحافظ على كفاءة الجهاز ويطيل عمره الافتراضي. فريقنا مكوَّن من فنيين معتمدين ومدرَّبين على أحدث تقنيات، قادرين على تشخيص الأعطال بدقة وتنفيذ الإصلاح بسرعة واحترافية عالية. كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.",
    },
    ovens: {
          title: 'خدمات مركز صيانة افران  بوش في مصر',
      desc: "في صيانة بوش نهتم بكل التفاصيل علشان نضمنلك تجربة مميزة وخدمة صيانة ترجع جهازك لأفضل أداء. نوفر لك قطع غيار أصلية 100% بضمان رسمي يحافظ على كفاءة الجهاز ويطيل عمره الافتراضي. فريقنا مكوَّن من فنيين معتمدين ومدرَّبين على أحدث تقنيات، قادرين على تشخيص الأعطال بدقة وتنفيذ الإصلاح بسرعة واحترافية عالية. كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.",
    },
    ac: {
          title: 'خدمات مركز صيانة بوش في مصر',
      desc: "في صيانة بوش نهتم بكل التفاصيل علشان نضمنلك تجربة مميزة وخدمة صيانة ترجع جهازك لأفضل أداء. نوفر لك قطع غيار أصلية 100% بضمان رسمي يحافظ على كفاءة الجهاز ويطيل عمره الافتراضي. فريقنا مكوَّن من فنيين معتمدين ومدرَّبين على أحدث تقنيات، قادرين على تشخيص الأعطال بدقة وتنفيذ الإصلاح بسرعة واحترافية عالية. كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.",
    },
  };

  return (
    <>
     <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-10">
          منتجاتنا
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === tab.id
                  ? "bg-red-600 text-white"
                  : "border border-red-500 text-red-500 hover:bg-red-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

     <div className="space-y-16">

  {/* Section 1 */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <img className="w-[80%]" src={img}alt="" />


    <div className="text-right">
      <h3 className="text-2xl font-bold mb-4">
        {content[activeTab].title}
      </h3>

      <p className="text-gray-600 leading-loose mb-6">
        {content[activeTab].desc}
      </p>

      <div className="flex gap-4 justify-end">
        <a
          href="tel:01211114528"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full"
        >
          اطلب صيانة الآن
        </a>

        <a
          href="https://wa.me/201211114528"
          className="border border-red-600 text-red-600 px-6 py-3 rounded-full"
        >
          واتساب
        </a>
      </div>
    </div>
  </div>

  {/* Section 2 */}
  <div className="grid md:grid-cols-2 gap-10 items-center">

       <div className="text-right">

      
      <h3 className="text-2xl font-bold mb-4">
        {content[activeTab].title}
      </h3>

      <p className="text-gray-600 leading-loose mb-6">
        {content[activeTab].desc}
      </p>

      <div className="flex gap-4 justify-end">
        <a
          href="tel:01211114528"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full"
        >
          اطلب صيانة الآن
        </a>

        <a
          href="https://wa.me/201211114528"
          className="border border-red-600 text-red-600 px-6 py-3 rounded-full"
        >
          واتساب
        </a>
      </div>
    </div>

        <img className="w-[80%]" src={img1}alt="" />

 
    <div className="flex justify-center">

    </div>
  </div>

</div>
        
      </div>
    </section>
    
    </>
   
  );
}