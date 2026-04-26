import React, { useState } from "react";

export default function SheikhZayedfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Bosch washing machine hotline in Sheikh Zayed?",
      answer: (
        <>
          You can contact the{" "}
          <strong>Bosch Repairs Sheikh Zayed</strong> specialized team via the
          hotline or call{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>
          . We provide expert technicians to solve washer faults with original
          parts.
        </>
      ),
    },
    {
      question:
        "How can I get original spare parts for Bosch fridges in Sheikh Zayed?",
      answer: (
        <>
          Through the authorized Bosch agency, call{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          or visit the Bosch Hotline link to request original parts and home
          installation with a one-year warranty.
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
          Frequently Asked Questions - Bosch Sheikh Zayed Guide
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