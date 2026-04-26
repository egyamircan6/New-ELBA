import React, { useState } from "react";

export default function DowntownFaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What causes Error Codes in Bosch washing machines?",
      answer: (
        <>
          These codes appear to pinpoint the fault location. The{" "}
          <strong>Bosch Repairs Downtown</strong> team uses diagnostic devices to
          read these codes and fix them immediately with original parts.
        </>
      ),
    },
    {
      question: "Why do the outer sides of my Bosch refrigerator get hot?",
      answer: (
        <>
          Heat is normal for heat exchange, but if it's excessive, it may mean a
          condenser fan failure or a need for a cooling cycle cleaning through{" "}
          <strong>Bosch Repairs Downtown</strong>.
        </>
      ),
    },
    {
      question:
        "Are maintenance services for Bosch Built-in appliances available Downtown?",
      answer: (
        <>
          Yes, we specialize in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-downtown"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Repairs Downtown
          </a>{" "}
          for all integrated appliances such as built-in ovens, hobs, and hoods
          using original spare parts. Call{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          for an immediate visit.
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
          Frequently Asked Questions - Bosch Repairs Downtown Guide
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 cursor-pointer transition hover:shadow-md"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">
                  {faq.question}
                </h3>

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