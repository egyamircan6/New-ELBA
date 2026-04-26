import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DryerfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. What is the authorized Bosch maintenance number and Hotline for service?",
      answer: (
        <>
          You can contact the authorized Bosch maintenance number and Hotline directly at{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold"
          >
            01211114528
          </a>{" "}
          for immediate technical support. We provide comprehensive coverage for all areas including{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-new-cairo"
            className="text-red-600"
            target="_blank"
          >
            New Cairo
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-6-october"
            className="text-red-600"
            target="_blank"
          >
            6th of October
          </a>
          , and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-red-600"
            target="_blank"
          >
            Alexandria
          </a>
          .
        </>
      ),
    },
    {
      question: "2. How can I reach the nearest Bosch service center and what are the coverage areas?",
      answer: (
        <>
          To find the nearest center, call the unified number{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-red-600 font-semibold"
            target="_blank"
          >
            01211114528
          </a>
          . We cover East Cairo,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-tagamoa" className="text-red-600">
            Tagamoa
          </a>
          , Giza,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-sheikh-zayed" className="text-red-600">
            Sheikh Zayed
          </a>
          , and{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-north-coast" className="text-red-600">
            North Coast
          </a>
          .
        </>
      ),
    },
    {
      question: "3. What are the common faults in Bosch devices and how are they handled?",
      answer:
        "Common faults include the dryer not heating or unusual vibrations. Our engineers use digital testing devices to accurately identify and fix the fault. Call 01211114528 to schedule a home visit.",
    },
    {
      question: "4. Does the center provide original Bosch spare parts with a certified warranty?",
      answer: (
        <>
          Yes, we provide all original Bosch spare parts. When installing any part through{" "}
          <a href="https://bosch-egypts.com/bosch-hotline-egypt" className="text-red-600">
            01211114528
          </a>
          , you receive a certified warranty certificate that ensures free maintenance and follow-up.
        </>
      ),
    },
    {
      question: "5. How do I ensure I receive service from the official maintenance provider?",
      answer:
        "To ensure reliable service, you must communicate only through the authorized Bosch maintenance number 01211114528. This guarantees trained specialists and original parts.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4" dir="ltr">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          (FAQ) About Bosch Dryer Repair
        </h2>
        <p className="text-gray-500">
          Frequently asked questions about Bosch dryer maintenance in Egypt
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