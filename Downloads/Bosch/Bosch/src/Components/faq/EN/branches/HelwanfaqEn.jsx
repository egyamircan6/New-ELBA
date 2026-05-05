import React, { useState } from "react";

export default function HelwanfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch washing machine repair number in Helwan?",
      answer: (
        <>
          If you encounter heavy vibration or drainage issues, contact the{" "}
          <strong>Bosch Repairs in Helwan</strong> hotline at{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=201211114528"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          for an immediate expert technician visit.
        </>
      ),
    },
    {
      question: "How can I contact the Bosch refrigerator hotline in Helwan?",
      answer: (
        <>
          For cooling stops or Freon leaks, call the{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-helwan"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Repairs in Helwan
          </a>{" "}
          specialized line at <strong>01211114528</strong> to ensure original
          parts and a one-year warranty.
        </>
      ),
    },
    {
      question: "Are Bosch built-in appliance repairs available in Helwan?",
      answer: (
        <>
          Yes, we offer specialized{" "}
          <strong>Bosch Repairs in Helwan</strong> for built-in ovens and hobs.
          Call <strong>01211114528</strong> to handle sensitive electronic
          circuits safely.
        </>
      ),
    },
    {
      question: "How do I book maintenance for Bosch vacuum cleaners in Helwan?",
      answer: (
        <>
          You can request <strong>Bosch Repairs in Helwan</strong> for small
          appliances like vacuums and coffee machines by calling{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=201211114528"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>{" "}
          or messaging us via WhatsApp.
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
          Frequently Asked Questions - Bosch Repairs in Helwan
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