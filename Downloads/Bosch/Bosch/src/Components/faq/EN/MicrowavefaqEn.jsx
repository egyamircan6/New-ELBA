import React, { useState } from "react";

export default function MicrowavefaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Bosch microwave maintenance number in Egypt?",
      answer: (
        <>
          The authorized Bosch microwave repair number is{" "}
          <strong>01211114528</strong>. You can call to book a fast home visit
          and get an official warranty after the service.
        </>
      ),
    },
    {
      question:
        "Is there an authorized Bosch microwave service center?",
      answer: (
        <>
          Yes,{" "}
          <a
            href="https://bosch-egypts.com/bosch-egypt-maintenance"
            className="text-red-600 font-medium"
          >
            Bosch Egypt
          </a>{" "}
          provides authorized microwave services via 01211114528, employing
          engineers trained to handle Magnetron and control board faults.
        </>
      ),
    },
    {
      question:
        "When do I need to call for Bosch microwave maintenance?",
      answer: (
        <>
          You should call <strong>01211114528</strong> if you notice weak
          heating, unusual noises, a frozen control panel, or if the internal
          tray stops rotating, to ensure a safe and fast repair.
        </>
      ),
    },
    {
      question: "Does the repair include a warranty?",
      answer: (
        <>
          Yes, all repairs performed through our{" "}
          <strong>Bosch Agency</strong> include a certified warranty on both
          labor and the original spare parts used.
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
          Frequently Asked Questions About Bosch Microwave Repair
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