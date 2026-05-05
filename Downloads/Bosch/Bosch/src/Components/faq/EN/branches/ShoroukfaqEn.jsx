import React, { useState } from "react";

export default function ShoroukfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book Bosch washing machine maintenance in El Shorouk?",
      answer: (
        <>
          To book <strong>Bosch Repairs El Shorouk</strong> for washers, call{" "}
          <strong>01211114528</strong>. We provide home visits to inspect drums
          and motors using original parts to ensure perfect performance.
        </>
      ),
    },
    {
      question: "What is the authorized Bosch refrigerator repair number in El Shorouk?",
      answer: (
        <>
          The number for authorized{" "}
          <strong>Bosch Repairs El Shorouk</strong> is{" "}
          <strong>01211114528</strong>. We specialize in Freon recharging and
          compressor replacement for Bosch refrigerators with an official
          warranty.
        </>
      ),
    },
    {
      question: "Is Bosch built-in appliance maintenance available in Shorouk?",
      answer: (
        <>
          Yes, we offer specialized{" "}
          <strong>Bosch Repairs El Shorouk</strong> for built-in ovens and hobs.
          Call <strong>01211114528</strong> to fix heaters and sensors without
          damaging your kitchen cabinets.
        </>
      ),
    },
    {
      question: "Where can I find a Bosch dishwasher technician in El Shorouk?",
      answer: (
        <>
          Authorized <strong>Bosch Repairs El Shorouk</strong> for dishwashers is
          available by calling <strong>01211114528</strong>. We serve all Shorouk
          city areas and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-madinaty"
            className="text-blue-600 hover:underline"
          >
            Madinaty
          </a>{" "}
          with immediate home visits.
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
          Frequently Asked Questions About Bosch Repairs El Shorouk
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