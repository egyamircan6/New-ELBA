import React, { useState } from "react";

export default function RefrigeratorfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch refrigerator repair number in Egypt?",
      answer: (
        <>
          The authorized number is <strong>01211114528</strong>. This{" "}
          <strong>Bosch Hotline</strong> allows you to communicate directly with technical support
          to schedule home inspections and obtain original spare parts with a certified warranty.
        </>
      ),
    },
    {
      question: "Is Bosch maintenance available in all governorates and new cities?",
      answer: (
        <>
          Yes, our network covers{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-heliopolis">Heliopolis</a>,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-rehab-city">Rehab City</a>,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-madinaty">Madinaty</a>,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-6-october">6th of October</a>,{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-dokki">Dokki</a>, and the{" "}
          <a href="https://bosch-egypts.com/bosch-repairs-north-coast">North Coast</a>.
          Call <strong>01211114528</strong> to request service anywhere.
        </>
      ),
    },
    {
      question: "Why should I rely on the official Bosch agency number instead of uncertified technicians?",
      answer: (
        <>
          Relying on <strong>01211114528</strong> guarantees specialized engineering service from{" "}
          <a href="https://bosch-egypts.com/bosch-egypt-maintenance">Bosch Egypt</a>. 
          Uncertified technicians lack original parts, whereas our official service provides a real warranty
          that prevents the fault from recurring.
        </>
      ),
    },
    {
      question: "Does Bosch Egypt service built-in appliances?",
      answer: (
        <>
          Yes, we specialize in{" "}
          <a href="https://bosch-egypts.com/bosch-built-in-appliances">Bosch built-in appliances</a>,
          especially{" "}
          <a href="https://bosch-egypts.com/bosch-built-in-refrigerator-repair">
            Bosch built-in refrigerators
          </a>, which require high precision in disassembly and installation.
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
          (FAQ)s About Bosch Refrigerator Repair
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
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}