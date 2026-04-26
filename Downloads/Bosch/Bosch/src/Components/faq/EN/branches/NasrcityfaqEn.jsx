import React, { useState } from "react";

export default function NasrcityfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where can I request Bosch washing machine maintenance in Nasr City?",
      answer: (
        <>
          Call the <strong>Bosch washing machine</strong> branch in Nasr City at{" "}
          <strong>01211114528</strong>. We provide home visits in Makram Ebeid
          and Abbas El Akkad to inspect motors and pumps with original parts.
        </>
      ),
    },
    {
      question: "How do I book Bosch refrigerator maintenance in Nasr City?",
      answer: (
        <>
          You can book by calling <strong>01211114528</strong>. We send an
          engineer specialized in{" "}
          <a
            href="https://bosch-egypts.com/bosch-refrigerators-repair"
            className="text-blue-600 hover:underline"
          >
            Bosch refrigerator repair
          </a>{" "}
          to fix cooling circuits and recharge Freon on-site.
        </>
      ),
    },
    {
      question: "Is Bosch built-in oven maintenance available in Nasr City?",
      answer: (
        <>
          Yes, we offer a dedicated service for{" "}
          <strong>Bosch built-in oven maintenance</strong>. Contact us at{" "}
          <strong>01211114528</strong> for immediate repair of heaters and
          sensors within your kitchen units without random dismantling.
        </>
      ),
    },
    {
      question:
        "What is the Bosch built-in dishwasher maintenance number in Nasr City?",
      answer: (
        <>
          The authorized number is <strong>01211114528</strong>. We handle drain
          pump issues and spray arm blockages for both standard and{" "}
          <a
            href="https://bosch-egypts.com/bosch-dishwashers-repair"
            className="text-blue-600 hover:underline"
          >
            Bosch dishwashers
          </a>{" "}
          with the highest quality.
        </>
      ),
    },
    {
      question: "Is there a Bosch microwave maintenance technician in Nasr City?",
      answer: (
        <>
          Certainly, our Nasr City branch offers{" "}
          <strong>Bosch microwave maintenance</strong> via{" "}
          <strong>01211114528</strong>. We serve the 7th and 8th districts and
          Zahraa Nasr City for all small appliances including vacuum cleaners.
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
          Frequently Asked Questions About Bosch Services in Nasr City
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