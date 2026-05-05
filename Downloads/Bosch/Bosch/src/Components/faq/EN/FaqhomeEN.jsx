import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqBoschEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Bosch Egypt maintenance number?",
      answer: (
        <>
          The direct Bosch Egypt maintenance number is{" "}
          <a href="tel:01211114528" className="text-red-600 font-semibold">
            01211114528
          </a>
          . You can book maintenance for all Bosch appliances.
        </>
      ),
    },
    {
      question: "How do I contact Bosch Egypt customer service?",
      answer: (
        <>
          You can contact us via{" "}
          <a
            href="tel:01211114528"
            className="text-red-600 font-semibold"
          >
            phone
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/201211114528"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 font-semibold"
          >
            WhatsApp
          </a>{" "}
          for instant support and booking.
        </>
      ),
    },
    {
      question: "Where is the Bosch Egypt maintenance center located?",
      answer: (
        <>
          We provide home service in Cairo & Giza including{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-nasr-city"
            className="text-blue-600 underline"
          >
            Nasr City
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-maadi"
            className="text-blue-600 underline"
          >
            Maadi
          </a>{" "}
          and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-mohandessin"
            className="text-blue-600 underline"
          >
            Mohandessin
          </a>
          .
        </>
      ),
    },
    {
      question: "How do I book Bosch washing machine maintenance?",
      answer: (
        <>
          Book now via{" "}
          <a
            href="https://bosch-egypts.com/bosch-washing-machine-repair"
            className="text-blue-600 underline"
          >
            washing machine repair service
          </a>{" "}
          or call{" "}
          <a href="tel:01211114528" className="text-red-600 font-semibold">
            01211114528
          </a>
          .
        </>
      ),
    },
    {
      question: "Do you provide original spare parts?",
      answer:
        "Yes, we only use 100% original Bosch spare parts to ensure long-term performance and safety.",
    },
    {
      question: "Is there a warranty on repairs?",
      answer:
        "Yes, all maintenance services include an official warranty depending on the type of repair.",
    },
    {
      question: "Which appliances do you repair?",
      answer: (
        <>
          We repair washing machines, fridges, dishwashers, ovens and more. Visit{" "}
          <a
            href="https://bosch-egypts.com"
            className="text-blue-600 underline"
          >
            our website
          </a>{" "}
          for full services.
        </>
      ),
    },
    {
      question: "How do I request a maintenance visit?",
      answer: (
        <>
          Call{" "}
          <a href="tel:01211114528" className="text-red-600 font-semibold">
            01211114528
          </a>{" "}
          or message us on{" "}
          <a
            href="https://wa.me/201211114528"
            className="text-green-600 font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>{" "}
          to book a technician visit.
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" dir="ltr">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2">
          Bosch Egypt maintenance support & service info
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="bg-white border rounded-xl p-5 cursor-pointer hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.question}</h3>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}