import React, { useState } from "react";
import img from '../../../../assets/5 1.png'
import img1 from '../../../../assets/1 4.png'

export default function OurproductsEn() {
  const [activeTab, setActiveTab] = useState("washing");

  const tabs = [
    { id: "washing", label: "Washing Machines" },
    { id: "fridges", label: "Refrigerators" },
    { id: "freezers", label: "Freezers" },
    { id: "ovens", label: "Cookers & Ovens" },
    { id: "ac", label: "Air Conditioners" },
  ];

  const content = {
    washing: {
      title: "Bosch Washing Machine Maintenance Services in Egypt",
      desc: "We provide professional repair services using 100% original spare parts and certified technicians to ensure your appliance works efficiently.",
    },
    fridges: {
      title: "Bosch Refrigerator Maintenance Services",
      desc: "Accurate diagnosis and fast repair with guaranteed quality.",
    },
    freezers: {
      title: "Bosch Freezer Maintenance Services",
      desc: "We ensure long-lasting performance with genuine parts.",
    },
    ovens: {
      title: "Bosch Cooker & Oven Maintenance",
      desc: "Professional repair with warranty and expert technicians.",
    },
    ac: {
      title: "Bosch AC Maintenance Services",
      desc: "Fast response and reliable service across Egypt.",
    },
  };

  return (
    <section className="py-20 bg-white" dir="ltr">
      <div className="container mx-auto px-4">

        <h2 className="text-center text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full ${
                activeTab === tab.id
                  ? "bg-red-600 text-white"
                  : "border border-red-500 text-red-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img src={img} className="w-[80%]" />
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {content[activeTab].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {content[activeTab].desc}
            </p>

            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 text-white px-6 py-3 rounded-full">
                Request Service
              </a>

              <a href="https://wa.me/201211114528" className="border border-red-600 px-6 py-3 rounded-full">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {content[activeTab].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {content[activeTab].desc}
            </p>
          </div>
          <img src={img1} className="w-[80%]" />
        </div>

      </div>
    </section>
  );
}