import React, { useState } from "react";

export default function FaisalfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch maintenance number in Faisal?",
      answer: (
        <>
          The official unified number is <strong>01211114528</strong>. You can
          contact us anytime to request immediate{" "}
          <strong>Bosch Repairs Faisal</strong> home service.
        </>
      ),
    },
    {
      question: "Do you provide original spare parts for Bosch fridges?",
      answer: (
        <>
          Yes, all spare parts used in{" "}
          <strong>Bosch Repairs Faisal</strong> are certified originals with a
          warranty of up to 12 months.
        </>
      ),
    },
    {
      question: "Is Bosch maintenance available in Faisal during holidays?",
      answer: (
        <>
          Yes, our center works 7 days a week to receive fault reports and
          direct <strong>Bosch Repairs Faisal</strong> technicians to you
          immediately.
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
          Frequently Asked Questions - Bosch Repairs Faisal Guide
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