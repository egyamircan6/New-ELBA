import React, { useState } from "react";
import Stepper from "./Stepper";
import img from '../../../../assets/contact.png'
import { Helmet } from "react-helmet-async";

export default function FormContact() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();

  if (step === 1) {
    setStep(2);
  } else {
    setShowSuccess(true);
  }
};

  return (
    <section className="py-16 bg-[#f5f5f5]" dir="rtl">



          <Helmet>
            <title> من نحن | الأمريكية جروب - وكيل صيانة بوش المعتمد في مصر

      </title>
            <meta 
              name="description" 
              content='تعرف على الأمريكية جروب، الكيان الرائد في صيانة بوش الألمانية بمصر. نقدم خدمات الدعم الفني المعتمد بقطع غيار أصلية وضمان عام. ثقة الاعتماد الألمانية بين يديك'
            />
          </Helmet>
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
          من نحن - الأمريكية جروب للصيانة المتخصصة وأجهزة بوش الألمانية
          </h2>
          <p className="text-gray-500 text-sm">
            املأ البيانات وسيتم التواصل معك في أقرب وقت
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

<div className="flex justify-center">
  <div className="w-[80%] h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
<img src={img}>

</img>  </div>
</div>
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">

            <Stepper step={step} />

         <form onSubmit={handleFormSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <input type="text" placeholder="الاسم بالكامل" className="input" />
                  <input type="tel" placeholder="رقم التليفون" className="input" />
                  <input type="email" placeholder="البريد الإلكتروني (اختياري)" className="input" />

                  <div className="relative">
                    <select className="input">
                      <option disabled defaultValue="">
                        نوع العطل 
                      </option>
                      <option>غسالة</option>
                      <option>ثلاجة</option>
                    </select>
                  </div>

                  <div className="relative">
                    <select className="input">
                      <option disabled defaultValue="">
                        هل الجهاز داخل الضمان
                      </option>
                      <option>نعم</option>
                      <option>لا</option>
                    </select>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <input type="text" placeholder="المحافظة" className="input" />
                  <input type="text" placeholder="العنوان بالتفصيل" className="input" />
                </>
              )}

              {/* Button */}
              <button type="submit" className="btn">
                {step === 1 ? "التالي" : "تم الإرسال"}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg w-[90%] max-w-sm">
            <h3 className="text-xl font-bold mb-4">تم الإرسال ✅</h3>
            <p className="text-gray-500 mb-6">
              سيتم التواصل معك في أقرب وقت
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setStep(1);
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </section>
  );
}