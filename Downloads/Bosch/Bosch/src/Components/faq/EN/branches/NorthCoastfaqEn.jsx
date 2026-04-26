import React, { useState } from "react";

export default function NorthCoastfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How fast can a technician reach my village?",
      answer: (
        <>
          Our{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-north-coast"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Repairs North Coast
          </a>{" "}
          teams are stationed along the coast to reach major villages within 2 to
          4 hours of your request.
        </>
      ),
    },
    {
      question: "Do you provide maintenance for built-in refrigerators?",
      answer: (
        <>
          Yes, we specialize in{" "}
          <a
            href="https://bosch-egypts.com/bosch-built-in-refrigerator-repair"
            className="text-blue-600 font-semibold hover:underline"
          >
            Built-in Refrigerator Maintenance
          </a>
          , ensuring your kitchen aesthetics and cooling remain perfect.
        </>
      ),
    },
    {
      question: "Is the warranty valid back in Cairo?",
      answer: (
        <>
          Absolutely. The warranty provided by our North Coast branch is honored
          at any of our branches across Egypt. You can also contact the{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Hotline
          </a>{" "}
          or call <strong>01211114528</strong>.
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
          Frequently Asked Questions - North Coast Service
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