import React, { useState } from "react";
import StepperEn from "./StepperEn";
import img from '../../../../assets/contact.png'

export default function FormContactEn() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else {
      setShowSuccess(true);
    }
  };

  return (
    <section className="py-16 bg-[#f5f5f5]" dir="ltr">

      



      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
About Us - American Group for Specialized Maintenance and German Bosch Appliances          </h2>
          <p className="text-gray-500 text-sm">
            Fill in the form and we will contact you shortly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-[80%] h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              <img src={img} alt="contact" />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">

            <StepperEn step={step} />

            <form onSubmit={handleFormSubmit} className="space-y-4">

              {step === 1 && (
                <>
                  <input type="text" placeholder="Full Name" className="input" />
                  <input type="tel" placeholder="Phone Number" className="input" />
                  <input type="email" placeholder="Email (optional)" className="input" />

                  <select className="input">
                    <option disabled defaultValue="">
                      Appliance Type
                    </option>
                    <option>Washing Machine</option>
                    <option>Refrigerator</option>
                  </select>

                  <select className="input">
                    <option disabled defaultValue="">
                      Is it under warranty?
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </>
              )}

              {step === 2 && (
                <>
                  <input type="text" placeholder="Governorate" className="input" />
                  <input type="text" placeholder="Full Address" className="input" />
                </>
              )}

              <button type="submit" className="btn">
                {step === 1 ? "Next" : "Submit"}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg w-[90%] max-w-sm">
            <h3 className="text-xl font-bold mb-4">Submitted Successfully ✅</h3>
            <p className="text-gray-500 mb-6">
              We will contact you shortly
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setStep(1);
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}