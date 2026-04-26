import React, { useState } from "react";

export default function MohandessinfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book a repair for Bosch washers or fridges in Mohandessin?",
      answer: (
        <>
          You can book immediately by calling{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          or through the Bosch Hotline page. We cover Mohandessin with original
          spare parts and an authorized warranty.
        </>
      ),
    },
    {
      question:
        "Is repair available for Bosch deep freezers and dishwashers in Mohandessin?",
      answer: (
        <>
          Yes, we provide comprehensive maintenance for deep freezers and
          dishwashers. Contact us at{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          or visit the Bosch Hotline link for immediate booking.
        </>
      ),
    },
    {
      question: "What is the Bosch dryer repair number in Mohandessin?",
      answer: (
        <>
          The unified number is{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>
          . You can also book via WhatsApp or the Bosch Hotline to solve dryer
          issues immediately with original components.
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
          Frequently Asked Questions - Bosch Repairs Mohandessin Guide
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