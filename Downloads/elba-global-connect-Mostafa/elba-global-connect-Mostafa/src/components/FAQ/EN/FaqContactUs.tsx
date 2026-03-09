import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqContactUsEn {
  question: React.ReactNode;
  answer: React.ReactNode;
}

interface faqaboutSectionProps {
  items?: FaqContactUsEn[];
}

const ContactUsFAQEn: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const FaqContactUsEn = [
   {
    question: "What is the Glem Gas hotline number?",
    answer: (
      <>
        The official{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas hotline
        </a>{" "}
        number is <strong>01211114528</strong> for maintenance requests and customer support.
      </>
    ),
  },
  {
    question: "What is the Glem Gas customer service number?",
    answer: (
      <>
        The{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas customer service number
        </a>{" "}
        is <strong>01211114528</strong>, available for inquiries and service booking.
      </>
    ),
  },
  {
    question: "How can I contact Glem Gas maintenance?",
    answer: (
      <>
        You can contact <strong>Glem Gas maintenance</strong> by calling{" "}
        <strong>01211114528</strong> to report faults and schedule a visit.
      </>
    ),
  },
  {
    question: "Is the Glem Gas hotline available?",
    answer: (
      <>
        Yes, the{" "}
        <strong>Glem Gas hotline</strong>{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>{" "}
        is available for customer support and maintenance requests.
      </>
    ),
  },
  {
    question: "Is there a Glem Gas support number?",
    answer: (
      <>
        Yes,{" "}
        <a
          href="http://glemgas-eg.co/en"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas support number
        </a>{" "}
        is <strong>01211114528</strong> for all appliances.
      </>
    ),
  },
  {
    question: "What is the Glem Gas service center number?",
    answer: (
      <>
        The{" "}
        <strong>Glem Gas service center contact number</strong>{" "}
        is{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>{" "}
        for direct communication with the maintenance team.
      </>
    ),
  },
  {
    question: "Does Glem Gas provide maintenance services in Egypt?",
    answer: (
      <>
        Yes, <strong>Glem Gas maintenance services in Egypt</strong> are available
        nationwide by calling <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Is this the official Glem Gas hotline?",
    answer: (
      <>
        Yes, <strong>01211114528</strong> is the official{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas hotline
        </a>{" "}
        for maintenance and technical support.
      </>
    ),
  },
  {
    question: "Is there a fast or emergency Glem Gas maintenance number?",
    answer: (
      <>
        Yes, you can use <strong>01211114528</strong> as the{" "}
        <strong>Glem Gas hotline</strong> for fast and urgent maintenance requests.
      </>
    ),
  },
  {
    question: "What is the Glem Gas cooker maintenance number?",
    answer: (
      <>
        The{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas cooker maintenance number
        </a>{" "}
        is <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Is fast Glem Gas maintenance service available?",
    answer: (
      <>
        Yes, fast <strong>Glem Gas maintenance service</strong> is available by
        calling{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
        .
      </>
    ),
  },
];

  

  const FaqContactUsEns = items || FaqContactUsEn;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
Frequently Asked Questions – Contacting Glem Gas Hotline

        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FaqContactUsEns.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-sm border-none animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactUsFAQEn;
