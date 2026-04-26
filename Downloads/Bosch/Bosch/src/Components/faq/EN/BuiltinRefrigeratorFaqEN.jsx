import React, { useState } from "react";

export default function BuiltinRefrigeratorFaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I request an authorized Bosch Built-in Refrigerator Repair?",
      answer: (
        <>
          You can easily book a{" "}
          <strong>Bosch Built-in Refrigerator Repair</strong> by calling our
          unified number <strong>01211114528</strong>. We provide expert home
          visits in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-heliopolis"
            className="text-blue-600 hover:underline"
          >
            Heliopolis
          </a>
          , Sheraton, and Maadi.
        </>
      ),
    },
    {
      question: "Where is Bosch Built-in Refrigerator Repair available in Giza?",
      answer: (
        <>
          Our <strong>Bosch Built-in Refrigerator Repair</strong> service covers
          all of Giza, including{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-dokki"
            className="text-blue-600 hover:underline"
          >
            Dokki
          </a>
          , Haram, and Faisal. We fix the appliance in your kitchen to protect
          your built-in setup.
        </>
      ),
    },
    {
      question: "Do you provide a warranty on Bosch Built-in Refrigerator Repair?",
      answer: (
        <>
          Yes, all our <strong>Bosch Built-in Refrigerator Repair</strong>{" "}
          services come with an official warranty on both spare parts and labor.
          This includes Freon charging and compressor replacements in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-madinaty"
            className="text-blue-600 hover:underline"
          >
            Madinaty
          </a>{" "}
          and Al Shrouk.
        </>
      ),
    },
    {
      question: "Can I get Bosch Built-in Refrigerator Repair in Alexandria?",
      answer: (
        <>
          Certainly! We provide specialized{" "}
          <strong>Bosch Built-in Refrigerator Repair</strong> in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-blue-600 hover:underline"
          >
            Alexandria
          </a>{" "}
          and the North Coast. Contact us at{" "}
          <strong>01211114528</strong> for immediate assistance.
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
          FAQs Regarding Bosch Built-in Refrigerator Repair
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