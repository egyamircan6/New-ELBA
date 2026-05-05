import React, { useState } from "react";

export default function HaramfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I schedule a Bosch repair in the Haram area?",
      answer: (
        <>
          Simply call the authorized number <strong>01211114528</strong>. Our{" "}
          <strong>Bosch Repairs Haram</strong> team will schedule a visit within
          24 hours to handle any appliance fault at your home.
        </>
      ),
    },
    {
      question: "Does the Haram branch offer a warranty on repairs?",
      answer: (
        <>
          Yes, all <strong>Bosch Repairs Haram</strong> services come with a
          certified warranty on both labor and original spare parts for up to one
          year.
        </>
      ),
    },
    {
      question: "Are built-in oven repairs available in Al-Haram?",
      answer: (
        <>
          Absolutely. We specialize in built-in technologies, providing
          high-precision maintenance for Bosch ovens and hobs throughout the
          Haram district.
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" dir="ltr">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions - Bosch Repairs Haram Guide
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 cursor-pointer transition hover:shadow-md"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">{faq.question}</h3>

                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}