import React, { useState } from "react";

export default function HoodsfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Bosch hood maintenance number?",
      answer: (
        <>
          The authorized Bosch hood maintenance number is{" "}
          <strong>01211114528</strong>. You can book a home visit for inspection
          and repair using original parts and a formal warranty.
        </>
      ),
    },
    {
      question: "Is there an authorized Bosch hood service center?",
      answer: (
        <>
          Yes,{" "}
          <a
            href="https://bosch-egypts.com/bosch-egypt-maintenance"
            className="text-red-600 font-medium"
          >
            Bosch Egypt
          </a>{" "}
          provides authorized hood repair via 01211114528, offering professional
          fixes for motors, filters, and control panels.
        </>
      ),
    },
    {
      question:
        "What are the reasons for weak suction in a Bosch hood?",
      answer: (
        <>
          The most common causes are clogged grease filters, expired carbon
          filters, or a weak motor. For a specialized technical inspection,
          call <strong> 01211114528</strong>.
        </>
      ),
    },
    {
      question: "When do I need Bosch hood maintenance?",
      answer: (
        <>
          You need maintenance when you hear loud noises, notice weak suction,
          or if the lights and control panel stop working. Contact{" "}
          <strong>01211114528</strong> immediately in these cases.
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

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions About Bosch Hood Repair
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

                <span className="text-xl font-bold text-red-600">
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