import React, { useState } from "react";

export default function BuiltinOvenfaqEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the authorized Bosch Built-in oven repair number?",
      answer: (
        <>
          For specialized technical support, contact the{" "}
          <strong>Bosch Built-in oven</strong> center at{" "}
          <strong>01211114528</strong>. We provide immediate home inspection in
          Sheraton and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-tagamoa"
            className="text-blue-600 hover:underline"
          >
            Tagamoa
          </a>{" "}
          with original parts.
        </>
      ),
    },
    {
      question: "Where are Bosch Built-in oven repair centers in Giza?",
      answer: (
        <>
          Our service covers all Giza areas, including{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-dokki"
            className="text-blue-600 hover:underline"
          >
            Dokki
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-mohandessin"
            className="text-blue-600 hover:underline"
          >
            Mohandessin
          </a>
          , and Haram. Call <strong>01211114528</strong> for on-site repair
          inside your kitchen.
        </>
      ),
    },
    {
      question: "How can I book a Bosch Built-in oven maintenance appointment?",
      answer: (
        <>
          Book easily by calling the{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            Bosch Hotline
          </a>{" "}
          <strong>01211114528</strong>. We offer rapid response in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-6-october"
            className="text-blue-600 hover:underline"
          >
            6th of October
          </a>
          ,{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-sheikh-zayed"
            className="text-blue-600 hover:underline"
          >
            Sheikh Zayed
          </a>
          , and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-madinaty"
            className="text-blue-600 hover:underline"
          >
            Madinaty
          </a>
          .
        </>
      ),
    },
    {
      question: "Does the Bosch agency provide a certified warranty?",
      answer: (
        <>
          Yes, the authorized agency grants an official warranty on parts and
          labor. For service in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-alexandria"
            className="text-blue-600 hover:underline"
          >
            Alexandria
          </a>{" "}
          or the North Coast, call <strong>01211114528</strong>.
        </>
      ),
    },
    {
      question: "What is the cost of Bosch Built-in oven home maintenance?",
      answer: (
        <>
          Costs depend on the fault and parts needed. Get a preliminary estimate
          via <strong>01211114528</strong>. We ensure transparency and
          competitive pricing in{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-maadi"
            className="text-blue-600 hover:underline"
          >
            Maadi
          </a>{" "}
          and{" "}
          <a
            href="https://bosch-egypts.com/bosch-repairs-shrouk"
            className="text-blue-600 hover:underline"
          >
            Al Shrouk
          </a>
          .
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
          Frequently Asked Questions About Bosch Built-in Oven Repair in Egypt
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 cursor-pointer transition hover:shadow-md"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">{faq.question}</h3>

                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}