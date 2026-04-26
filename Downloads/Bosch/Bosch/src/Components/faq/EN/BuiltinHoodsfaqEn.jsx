import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BuiltinHoodsfaqEn() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer home maintenance service?",
      answer:
        "Yes, we provide home maintenance service. A technician can visit you the same day or at the earliest available time.",
    },
    {
      question: "How can I contact Bosch service in Egypt?",
      answer:
        "You can contact us directly via phone or WhatsApp at 01211114528 to book your service.",
    },
    {
      question: "What is the Bosch maintenance hotline?",
      answer:
        "The Bosch Egypt maintenance hotline is 01211114528 for all service requests.",
    },
    {
      question: "Do you provide original spare parts?",
      answer:
        "Yes, we only use 100% original spare parts to ensure high performance and durability.",
    },
    {
      question: "Is there a warranty on the service?",
      answer:
        "Yes, all our services include a warranty depending on the type of repair.",
    },
    {
      question: "Do you repair washing machines?",
      answer:
        "Yes, we provide professional Bosch washing machine repair services by certified technicians.",
    },
    {
      question: "Do you repair refrigerators?",
      answer:
        "Yes, we offer full maintenance services for Bosch refrigerators.",
    },
    {
      question: "Do you repair dishwashers?",
      answer:
        "Yes, you can book a Bosch dishwasher repair service through phone or WhatsApp.",
    },
    {
      question: "Do you repair cookers and ovens?",
      answer:
        "Yes, we provide maintenance services for Bosch cookers and ovens.",
    },
    {
      question: "Do you repair microwaves?",
      answer:
        "Yes, Bosch microwave repair is available through our service center.",
    },
    {
      question: "Do you provide water heater maintenance?",
      answer:
        "Yes, we provide Bosch water heater repair services.",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "We provide home service in many areas including Nasr City, New Cairo, Maadi, 6th of October, and more.",
    },
    {
      question: "Can I book a technician visit?",
      answer:
        "Yes, you can easily book a technician visit by calling or messaging us on WhatsApp.",
    },
    {
      question: "How fast is your response time?",
      answer:
        "We respond quickly and usually provide same-day service whenever possible.",
    },
    {
      question: "Do you provide service across Cairo?",
      answer:
        "Yes, we cover most areas in Cairo and surrounding regions.",
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