import React, { useState } from "react";

export default function BuiltinDishwashersfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch built-in dishwasher repair number?",
      answer: (
        <>
          You can request service via the unified number{" "}
          <strong>01211114528</strong>. We provide immediate home visits to
          inspect and repair dishwashers in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-heliopolis"
            className="text-blue-600 hover:underline"
          >
            Heliopolis
          </a>{" "}
          and Sheraton, ensuring peak performance.
        </>
      ),
    },
    {
      question: "Where can I find Bosch built-in dishwasher repair branches in Giza?",
      answer: (
        <>
          Service is available in all Giza areas such as{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-dokki"
            className="text-blue-600 hover:underline"
          >
            Dokki
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-faisal"
            className="text-blue-600 hover:underline"
          >
            Faisal
          </a>
          , and Haram via <strong>01211114528</strong>. We fix the appliance
          inside your kitchen without moving it.
        </>
      ),
    },
    {
      question: "How can I book a Bosch Built-in Dishwasher Repair appointment?",
      answer: (
        <>
          To book an appointment, call the{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Hotline
          </a>{" "}
          <strong>01211114528</strong>. We cover{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-madinaty"
            className="text-blue-600 hover:underline"
          >
            Madinaty
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-shrouk"
            className="text-blue-600 hover:underline"
          >
            Al Shrouk
          </a>
          , and Rehab with home visits including comprehensive checks.
        </>
      ),
    },
    {
      question: "Is there a Bosch built-in dishwasher agency in Alexandria?",
      answer: (
        <>
          Yes, the authorized agency provides full coverage for{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-blue-600 hover:underline"
          >
            Alexandria
          </a>{" "}
          and the North Coast via <strong>01211114528</strong>, delivering the
          highest quality repair for built-in appliances in Egypt.
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
          Frequently Asked Questions About Bosch Built-in Dishwasher Maintenance
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