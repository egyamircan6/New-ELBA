import React, { useState } from "react";

export default function NasrcityEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I request a Bosch maintenance service?",
      answer:
        "You can fill out the maintenance request form above or contact us directly via phone or WhatsApp, and our team will get back to you as soon as possible.",
    },
    {
      question: "How long does it take to receive a response?",
      answer:
        "Our support team usually responds within a few minutes during working hours, and within 24 hours at most.",
    },
    {
      question: "Do you provide home service?",
      answer:
        "Yes, we provide home maintenance services across multiple areas to ensure your convenience.",
    },
    {
      question: "Are original spare parts available?",
      answer:
        "Yes, we only use original and certified spare parts to ensure the best performance and long-term reliability.",
    },
    {
      question: "Is there a warranty on the service?",
      answer:
        "Yes, all our maintenance services come with a warranty depending on the type of repair.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" dir="ltr">
      <div className="container mx-auto px-4 max-w-3xl">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
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
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}