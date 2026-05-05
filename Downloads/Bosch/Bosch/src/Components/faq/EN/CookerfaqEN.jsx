import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CookerfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Bosch cooker maintenance number in Egypt?",
      answer: (
        <>
          The certified Bosch cooker maintenance number is{" "}
          <a href="https://api.whatsapp.com/send/?phone=201211114528">
            <strong>01211114528</strong>
          </a>
          . You can call directly to book a home visit with original spare parts
          and a warranty after repair.
        </>
      ),
    },
    {
      question: "Is there an authorized Bosch cooker maintenance center?",
      answer: (
        <>
          Yes, the <strong>Bosch Egypt</strong> maintenance center is available
          via <strong>01211114528</strong> to provide professional repairs for
          common faults like ignition failure or weak burners.
        </>
      ),
    },
    {
      question: "What is the Bosch cooker warranty after maintenance?",
      answer: (
        <>
          The warranty covers the repair work and the original spare parts
          installed by the{" "}
          <a href="https://bosch-egypts.com/bosch-egypt-maintenance">
            Bosch Egypt
          </a>{" "}
          agency. Details can be confirmed by calling{" "}
          <strong>01211114528</strong>.
        </>
      ),
    },
    {
      question:
        "What are the common faults that require Bosch cooker maintenance?",
      answer: (
        <>
          Common faults include weak oven heat, clogged injectors, faulty safety
          sensors, or ignition switch issues. For an accurate diagnosis, contact
          the <strong>Bosch Agency</strong> at <strong>01211114528</strong>.
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4" dir="ltr">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500">
          Here are the most common questions from our customers
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-4 cursor-pointer transition"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm md:text-base">
                {item.question}
              </p>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}