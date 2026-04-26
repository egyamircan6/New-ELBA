import React, { useState } from "react";

export default function DokkifaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I contact Bosch washing machine repair in Dokki?",
      answer: (
        <>
          You can contact <strong>Bosch Repairs Dokki</strong> by calling{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>
          . Our technicians provide home visits to inspect washing machines and
          fix all faults using original spare parts.
        </>
      ),
    },
    {
      question: "What is the Bosch refrigerator agency number in Dokki?",
      answer: (
        <>
          You can communicate via the unified number{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          or visit the Bosch Hotline link to solve cooling and Freon leak
          problems immediately.
        </>
      ),
    },
    {
      question: "Is repair available for Bosch Built-in appliances in Dokki?",
      answer: (
        <>
          Certainly, we are experts in maintaining built-in ovens, hobs, and
          integrated hoods. Contact us at{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          or through the Bosch Hotline to book your visit.
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
          Frequently Asked Questions - Bosch Repairs Dokki Guide
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