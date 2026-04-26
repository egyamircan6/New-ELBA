import React from "react";

export default function OurfeaturesEn() {
  const items = [
    {
      icon: "★",
      title: "Original Quality",
      text: "We use only genuine spare parts.",
    },
    {
      icon: "✓",
      title: "Certified Warranty",
      text: "All services come with warranty.",
    },
    {
      icon: "⚡",
      title: "Fast Support",
      text: "Quick response from our support team.",
    },
    {
      icon: "👨‍🔧",
      title: "Expert Technicians",
      text: "Highly trained professionals.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50" dir="ltr">
      <h2 className="text-center text-3xl font-bold mb-10">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 text-center rounded-xl shadow">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}