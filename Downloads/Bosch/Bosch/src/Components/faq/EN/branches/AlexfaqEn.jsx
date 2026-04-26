import React, { useState } from "react";

export default function AlexfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I request Bosch Repairs Alexandria?",
      answer: (
        <>
          You can request service by calling our unified number{" "}
          <strong>01211114528</strong> or through the{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Hotline
          </a>
          . We provide{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Repairs Alexandria
          </a>{" "}
          with home visits within 24 hours.
        </>
      ),
    },
    {
      question: "Do you cover areas like Agami and Al-Bitash?",
      answer: (
        <>
          Yes, our{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Repairs Alexandria
          </a>{" "}
          team covers all Alexandria districts, including Agami, Al-Bitash,
          Al-Hanoville, and the North Coast with fast response service.
        </>
      ),
    },
    {
      question: "Is there a warranty on the repaired appliances?",
      answer: (
        <>
          Absolutely. Every service includes an official warranty certificate
          valid for up to 12 months on all replaced original parts. You can book
          directly via the{" "}
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
          Frequently Asked Questions - Bosch Alexandria Guide
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