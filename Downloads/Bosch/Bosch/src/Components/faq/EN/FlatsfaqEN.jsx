import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FlatsfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "What is the Bosch hob repair number in Egypt?",
    answer: (
      <>
        The authorized number for Bosch hob maintenance is{" "}
        <a
          href="https://bosch-egypts.com/bosch-hotline-egypt"
          className="text-red-600 font-bold"
        >
          01211114528
        </a>
        . You can call to book a home visit, get an accurate diagnosis, and
        receive an official warranty after the repair.
      </>
    ),
  },
  {
    question:
      "Does the center repair both gas built-in and electric hobs?",
    answer: (
      <>
        Yes, we provide specialized maintenance for{" "}
        <a
          href="https://bosch-egypts.com/bosch-built-in-hob-repair"
          className="text-red-600"
        >
          Bosch built-in gas hobs
        </a>{" "}
        and{" "}
        <a
          href="https://bosch-egypts.com/bosch-electric-hob-repair"
          className="text-red-600"
        >
          Bosch electric hobs
        </a>
        . We inspect ignition and safety sensors for gas models and heating
        circuits for electric ones.
      </>
    ),
  },
  {
    question:
      "Does the repair process differ between 60cm and 90cm hobs?",
    answer: (
      <>
        While the engineering principles are the same, the internal design and
        burner distribution vary. Our technicians are trained to handle all
        sizes (60, 75, and 90 cm) to ensure the correct solution for each
        specific model via{" "}
        <a
          href="https://bosch-egypts.com/bosch-hotline-egypt"
          className="text-red-600 font-bold"
        >
          01211114528
        </a>
        .
      </>
    ),
  },
  {
    question:
      "How do I ensure I am contacting the official Bosch agency?",
    answer: (
      <>
        By calling <strong>01211114528</strong>, you are connecting with{" "}
        <strong>Bosch Egypt authorized service</strong>, which guarantees
        original parts and certified engineering standards that random repair
        shops cannot provide.
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