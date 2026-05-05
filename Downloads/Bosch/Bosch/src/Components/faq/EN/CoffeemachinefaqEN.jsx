import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CoffeemachinefaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is the hotline number for Bosch coffee machine repair?",
      answer: (
        <>
          You can contact us via the dedicated <strong>Bosch Hotline</strong> at{" "}
          <strong>01211114528</strong>. We provide immediate responses for
          maintenance requests in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-nasr-city"
            className="text-red-600"
          >
            Nasr City
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-sheraton"
            className="text-red-600"
          >
            Sheraton
          </a>
          , and all governorates of Egypt.
        </>
      ),
    },
    {
      question: "Are coffee machine faults repaired at home?",
      answer: (
        <>
          Yes, a specialized technician in{" "}
          <a
            href="https://bosch-egypts.com/bosch-coffee-machine-repair"
            className="text-red-600"
          >
            Bosch coffee machine repair
          </a>{" "}
          is sent directly to your home for inspection and fix. We cover areas
          including{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-shrouk"
            className="text-red-600"
          >
            Al Shrouk
          </a>{" "}
          and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-sheikh-zayed"
            className="text-red-600"
          >
            Sheikh Zayed
          </a>
          .
        </>
      ),
    },
    {
      question:
        "When does a Bosch coffee machine need professional maintenance?",
      answer: (
        <>
          The machine needs service if you notice a change in coffee taste,
          water leaks, or if the grinder stops working. We handle faults in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-dokki"
            className="text-red-600"
          >
            Dokki
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-haram"
            className="text-red-600"
          >
            Haram
          </a>
          , and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-faisal"
            className="text-red-600"
          >
            Faisal
          </a>
          .
        </>
      ),
    },
    {
      question:
        "Is there a warranty on coffee machine spare parts?",
      answer: (
        <>
          Certainly. When replacing any original spare parts through us, you
          will receive a certified warranty. You can inquire when the technician
          visits you in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-helwan"
            className="text-red-600"
          >
            Helwan
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-mokattam"
            className="text-red-600"
          >
            Mokattam
          </a>
          , or any other region.
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
          Frequently Asked Questions About Bosch Coffee Machine Repair
        </h2>

        <p className="text-gray-500">
          Common questions about Bosch coffee machine maintenance
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
              <div className="text-gray-500 text-sm mt-4 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}