import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DishwasherfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is the authorized Bosch dishwasher repair phone number in Egypt?",
      answer: (
        <>
          The official direct number for requesting service is{" "}
          <strong>01211114528</strong>. You can also contact{" "}
          <strong>Bosch Egypt</strong> via WhatsApp to schedule a quick home
          visit and get specialized technical support.
        </>
      ),
    },
    {
      question:
        "Does the Bosch agency provide immediate home maintenance for dishwashers?",
      answer: (
        <>
          <strong>Bosch Egypt maintenance</strong> provides immediate home
          repair service with a success rate exceeding 95%. Once you call{" "}
          <strong>01211114528</strong>, an engineer is dispatched with original
          parts to complete the repair on the same day.
        </>
      ),
    },
    {
      question:
        "What causes Error Codes (e.g., E15, E19, E24) in Bosch dishwashers?",
      answer:
        "Codes like E15, E19, or E24 usually appear due to drainage pump issues or internal water leaks. If a code appears, disconnect the power and call 01211114528 immediately for a professional diagnostic check.",
    },
    {
      question:
        "Is Bosch maintenance available in Alexandria and new cities?",
      answer: (
        <>
          Certainly, our network covers{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-maadi">
            Maadi
          </a>
          ,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-shorouk">
            Shorouk
          </a>
          ,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-madinaty">
            Madinaty
          </a>
          , and{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-alexandria">
            Bosch Alexandria
          </a>
          . Call <strong>01211114528</strong> and we will reach you wherever
          you are.
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