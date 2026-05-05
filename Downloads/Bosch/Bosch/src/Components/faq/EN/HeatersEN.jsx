import React, { useState } from "react";

export default function HeatersEN() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Bosch hob repair number in Egypt?",
      answer: (
        <>
          The authorized number for Bosch hob maintenance is{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>
          . You can call to book a home visit, get an accurate diagnosis, and receive an official warranty after the repair.
        </>
      ),
    },
    {
      question: "Does the center repair both gas built-in and electric hobs?",
      answer: (
        <>
          Yes, we provide specialized maintenance for{" "}
          <a
            href="https://bosch-egypts.com/bosch-built-in-hob-repair"
            className="text-blue-600 hover:underline"
          >
            Bosch built-in gas hobs
          </a>{" "}
          and{" "}
          <a
            href="https://bosch-egypts.com/bosch-electric-hob-repair"
            className="text-blue-600 hover:underline"
          >
            Bosch electric hobs
          </a>
          . We inspect ignition and safety sensors for gas models and heating circuits for electric ones.
        </>
      ),
    },
    {
      question: "Does the repair process differ between 60cm and 90cm hobs?",
      answer: (
        <>
          While the engineering principles are the same, the internal design and burner distribution vary. Our technicians are trained to handle all sizes (60, 75, and 90 cm) to ensure the correct solution for each specific model via{" "}
          <a
            href="https://bosch-egypts.com/bosch-hotline-egypt"
            className="text-blue-600 font-semibold hover:underline"
          >
            01211114528
          </a>.
        </>
      ),
    },
    {
      question: "How do I ensure I am contacting the official Bosch agency?",
      answer: (
        <>
          By calling <strong>01211114528</strong>, you are connecting with{" "}
          <strong>Bosch Egypt authorized service</strong>, which guarantees original parts and certified engineering standards that random repair shops cannot provide.
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
          Frequently Asked Questions About Bosch Hob Repair
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