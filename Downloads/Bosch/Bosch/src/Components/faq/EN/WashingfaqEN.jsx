import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WashingfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch washing machine repair number in Egypt?",
      answer: (
        <>
          The Bosch washing machine repair number is{" "}
          <strong>01211114528</strong>. You can contact this number to request
          an immediate home visit from engineers specialized in fixing{" "}
          <a
            href="https://bosch-egypts.com/bosch-egypt-maintenance"
            className="text-red-600 underline"
          >
            Bosch Egypt maintenance
          </a>{" "}
          faults for all models with fast response within 24 hours.
        </>
      ),
    },
    {
      question: "How do I reach Bosch customer service for washers?",
      answer:
        "You can contact the Bosch Hotline directly at 01211114528 to book maintenance, activate warranty, or request original spare parts.",
    },
    {
      question: "Where is the nearest Bosch service center for washing machines?",
      answer: (
        <>
          We cover many areas including{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-maadi" className="text-red-600 underline">
            Maadi
          </a>
          ,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-heliopolis" className="text-red-600 underline">
            Heliopolis
          </a>
          ,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-sheikh-zayed" className="text-red-600 underline">
            Sheikh Zayed
          </a>
          , and{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-6-october" className="text-red-600 underline">
            6th of October
          </a>
          . Call 01211114528 to find the nearest technician.
        </>
      ),
    },
    {
      question: "Is there Bosch maintenance in East Cairo?",
      answer: (
        <>
          Yes, we provide full coverage in{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-nasr-city" className="text-red-600 underline">
            Nasr City
          </a>
          ,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-heliopolis" className="text-red-600 underline">
            Heliopolis
          </a>
          , and{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-tagamoa" className="text-red-600 underline">
            New Cairo (Tagamoa)
          </a>
          .
        </>
      ),
    },
    {
      question: "How can I request Bosch maintenance in Alexandria?",
      answer: (
        <>
          We have a dedicated team for{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-red-600 underline"
          >
            Bosch Alexandria service
          </a>{" "}
          and the North Coast. Call 01211114528 for home service support.
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 bg-gray-50" dir="ltr">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Bosch Washing Machine Repair FAQ
        </h2>
        <p className="text-gray-500">
          Everything you need to know about Bosch maintenance in Egypt
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-md transition"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm md:text-base">
                {item.question}
              </p>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <div className="text-gray-600 text-sm mt-4 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}