import React, { useState } from "react";

export default function HadayekAhramfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your technicians available to visit all Gates?",
      answer: (
        <>
          Yes, our specialized teams cover all Gates of{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-hadayek-ahram"
            className="text-blue-600 font-semibold hover:underline"
          >
            Hadayek Al-Ahram
          </a>{" "}
          with immediate home service for all Bosch appliances.
        </>
      ),
    },
    {
      question: "Do you provide original spare parts for built-in ovens?",
      answer: (
        <>
          Absolutely. We carry a full inventory of original Bosch parts for{" "}
          <a
            href="https://bosch-egypts.com/bosch-oven-repair"
            className="text-blue-600 font-semibold hover:underline"
          >
            built-in ovens
          </a>{" "}
          and{" "}
          <a
            href="https://bosch-egypts.com/bosch-hob-repair"
            className="text-blue-600 font-semibold hover:underline"
          >
            hobs
          </a>{" "}
          to ensure same-day repair at your location.
        </>
      ),
    },
    {
      question: "What is the warranty period for appliance repairs?",
      answer: (
        <>
          Every service includes an official warranty certificate valid for up to
          12 months on all replaced parts and technical labor. You can book
          directly through the{" "}
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
          Frequently Asked Questions - Hadayek Al-Ahram Guide
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