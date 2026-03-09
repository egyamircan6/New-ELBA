import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface faqaboutItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

interface faqaboutSectionProps {
  items?: faqaboutItem[];
}

const FAQHomeEn: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const defaultItems: faqaboutItem[] = [
  {
    question: "What is the Glem Gas Egypt Service Center?",
    answer: (
      <>
        The <strong>Glem Gas Egypt Service Center</strong> is a specialized
        provider for repairing and maintaining all Glem Gas appliances in Egypt
        using certified technicians, genuine spare parts, and an approved
        service warranty. For service requests, call{" "}
        <a href="tel:01211114528" className="font-bold text-primary">
          01211114528
        </a>
        .
      </>
    ),
  },
  {
    question: "What does Glem Gas Egypt maintenance include?",
    answer: (
      <>
        <a
          href="http://glemgas-eg.co/en"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Egypt maintenance
        </a>{" "}
        includes full appliance inspection, accurate fault diagnosis, and
        professional repair to ensure safe operation and long-term performance.
        To book maintenance, call{" "}
        <a href="tel:01211114528" className="font-bold text-primary">
          01211114528
        </a>
        .
      </>
    ),
  },
  {
    question: "What is the official Glem Gas Egypt maintenance number?",
    answer: (
      <>
        The official <strong>Glem Gas Egypt maintenance number</strong> for
        service booking and technician scheduling is{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Is Glem Gas Egypt customer service always available?",
    answer: (
      <>
        Yes,{" "}
        <a
          href="http://glemgas-eg.co/en"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Egypt customer service
        </a>{" "}
        is available to receive maintenance requests nationwide. The fastest way
        to request service is calling <strong>01211114528</strong>.
      </>
    ),
  },
];

  

  const faqaboutItems = items || defaultItems;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
          FAQ
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqaboutItems.map((item, index) => (
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

export default FAQHomeEn;
