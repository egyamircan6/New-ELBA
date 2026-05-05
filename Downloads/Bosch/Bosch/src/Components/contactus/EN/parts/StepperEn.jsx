import React from "react";

export default function StepperEn({ step }) {
  return (
    <div className="mb-8">

      <h3 className="text-xl font-bold text-center mb-6">
        Maintenance Request Form
      </h3>

      <div className="flex items-center justify-between relative">

        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 -translate-y-1/2"></div>

        {/* Step 1 */}
        <div className="relative z-10">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
            ${step === 1 ? "border-red-500 text-red-500" : "text-gray-400 bg-white"}`}
          >
            1
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative z-10">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border 
            ${step === 2 ? "border-red-500 text-red-500" : "text-gray-400 bg-white"}`}
          >
            2
          </div>
        </div>

      </div>
    </div>
  );
}