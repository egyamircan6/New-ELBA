import React from "react";
import serviceimg from "../../../../assets/serviceimg.png";

export default function TechnicalSectionEn() {
  return (
    <section className="py-20 bg-gray-50" dir="ltr">
      <div className="container mx-auto px-4 space-y-20">

        {/* ===== Section 1: Technical Expertise ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src={serviceimg}
            alt="Bosch Maintenance"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Technical Expertise & Device Care
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              At our center, we believe that proper maintenance is the backbone of appliance longevity.
              Our Bosch Egypt team follows strict manufacturer protocols to ensure precision handling of every device.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Whether it's software calibration for modern washing machines or cooling system recharge for refrigerators,
              we restore your appliance to factory-level performance.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We also handle complex electrical and mechanical faults using advanced diagnostic tools to prevent recurrence.
            </p>
          </div>
        </div>

        {/* ===== Section 2: Spare Parts ===== */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Original Spare Parts
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We use only genuine Bosch spare parts sourced directly to ensure compatibility and durability.
            Every component comes with an official warranty, including motors, compressors, and electronic boards.
            This guarantees long-term performance and safety for all Bosch Egypt appliances.
          </p>
        </div>

        {/* ===== Section 3: Common Faults ===== */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">Washing Machines</h3>
            <p className="text-gray-600 text-sm">
              Drainage issues, vibration problems, and electronic faults.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">Refrigerators</h3>
            <p className="text-gray-600 text-sm">
              Cooling inefficiency and compressor failures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">Ovens & Cookers</h3>
            <p className="text-gray-600 text-sm">
              Heating issues and control system malfunctions.
            </p>
          </div>

        </div>

        {/* ===== Section 4: Trust ===== */}
        <div className="bg-red-600 text-white p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Customer Trust & Service Quality
          </h2>

          <p className="max-w-3xl mx-auto leading-relaxed">
            Thousands of customers across Egypt trust our Bosch maintenance center
            for its transparency, speed, and professional service.
            From emergency repairs to routine maintenance, we deliver reliable solutions every time.
          </p>
        </div>

 
 <div className="flex justify-between">

 <div className="bg-white p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            How to Request Bosch Maintenance Service
          </h2>



       

          <ol className="space-y-3 text-gray-700 list-decimal pl-5">
            <li>Call authorized Bosch number: 01211114528</li>
            <li>Provide device details and issue</li>
            <li>Schedule a suitable visit time</li>
            <li>Technician visits your home</li>
            <li>Repair with original parts + warranty</li>
          </ol>
        </div>

        {/* ===== Section 6: Coverage ===== */}
        <div className="bg-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Bosch Egypt Coverage Areas
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Cairo: Nasr City, Maadi, New Cairo, Tagamoa. <br />
            Giza: 6th of October, Mohandessin, Haram, Sheikh Zayed. <br />
            Other areas: Alexandria, North Coast and more.
          </p>
        </div>
 </div>
       

      </div>
    </section>
  );
}