import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VacuumcleanersfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch vacuum repair number in Egypt?",
      answer: (
        <>
          You can contact the authorized <strong>Bosch vacuum maintenance</strong> center via the unified number{" "}
          <strong>01211114528</strong>. We ensure a specialist reaches you to restore your vacuum’s original suction efficiency.
        </>
      ),
    },
    {
      question: "How can I reach the Bosch vacuum maintenance hotline?",
      answer: (
        <>
          The dedicated hotline for{" "}
          <a href="https://bosch-egypts.com/bosch-hotline">
            Bosch vacuum service
          </a>{" "}
          is <strong>01211114528</strong>. This number is available for reporting faults and requesting original spare parts in areas like{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-heliopolis">
            Heliopolis
          </a>{" "}
          and{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-maadi">
            Maadi
          </a>.
        </>
      ),
    },
    {
      question: "Is there a Bosch vacuum center that provides original parts?",
      answer: (
        <>
          Yes, our{" "}
          <a href="https://bosch-egypts.com/bosch-vacuum-repair">
            Bosch vacuum repair center
          </a>{" "}
          provides all certified components such as motors and filters. To obtain them, call{" "}
          <strong>01211114528</strong>. Relying on a Bosch Egypt expert ensures motor power and noise prevention.
        </>
      ),
    },
    {
      question: "Where can I find Bosch vacuum agency numbers in Cairo and Giza?",
      answer: (
        <>
          The Bosch vacuum agency number is <strong>01211114528</strong>, serving all Greater Cairo neighborhoods including{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-6-october">
            6th of October
          </a>{" "}
          and{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-sheikh-zayed">
            Sheikh Zayed
          </a>. We specialize in on-site repairs to save you the trouble of transportation.
        </>
      ),
    },
    {
      question: "Does Bosch provide vacuum repair services in Alexandria?",
      answer: (
        <>
          Yes, our services extend to cover{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-alexandria">
            Alexandria
          </a>{" "}
          and the North Coast. You can book an appointment via{" "}
          <strong>01211114528</strong> for high-quality technical support.
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
          Frequently Asked Questions About Bosch Vacuum Repair
        </h2>
        <p className="text-gray-500">
          Common questions about Bosch vacuum maintenance in Egypt
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