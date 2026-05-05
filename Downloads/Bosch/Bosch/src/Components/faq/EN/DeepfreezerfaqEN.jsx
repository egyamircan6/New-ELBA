import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DeepfreezerfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the official Bosch deep freezer repair number in Egypt?",
      answer: (
        <>
          The authorized number is{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-red-600 font-semibold"
          >
            01211114528
          </a>
          . You can call the Bosch Hotline for immediate home service and
          original spare parts for all models.
        </>
      ),
    },
    {
      question: "Does the center cover new cities like Sheikh Zayed and 6th of October?",
      answer: (
        <>
          Yes, we provide full coverage in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-sheikh-zayed"
            className="text-red-600"
          >
            Sheikh Zayed
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-6-october"
            className="text-red-600"
          >
            6th of October
          </a>
          , and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-hadayek-ahram"
            className="text-red-600"
          >
            Hadayek Al Ahram
          </a>
          . Just call 01211114528 to book a visit.
        </>
      ),
    },
    {
      question: "How can I ensure the spare parts are original?",
      answer: (
        <>
          All installed parts come with an official warranty certificate and
          factory barcode through{" "}
          <a
            href="https://bosch-egypts.com/bosch-egypt-maintenance"
            className="text-red-600"
          >
            Bosch Egypt Maintenance
          </a>
          . You can verify authenticity by calling 01211114528.
        </>
      ),
    },
    {
      question: 'What should I do if the "Alarm" light is on in my Bosch freezer?',
      answer: (
        <>
          Check if the door is properly closed or if there is a power issue. If
          the alarm continues, it indicates a cooling problem and you should
          contact our{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-red-600"
          >
            Bosch Hotline
          </a>{" "}
          immediately.
        </>
      ),
    },
    {
      question: "Do you provide home service for deep freezers?",
      answer:
        "Yes, we offer full home maintenance service with trained technicians and same-day visit availability in most areas.",
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
          Common questions about Bosch deep freezer repair
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-4 cursor-pointer transition hover:shadow-md"
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