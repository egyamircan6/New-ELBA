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

const FAQHoodeEn: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const defaultItems: faqaboutItem[] = [
 

 {
    question: "Is there an authorized Glem Gas hood maintenance center?",
    answer: (
      <>
        Yes, <strong>Glem Gas hood maintenance</strong> is provided through a
        specialized service center focusing on filter cleaning, fan inspection,
        and motor performance to ensure strong suction and stable operation. For
        booking or inquiries, contact the{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas hotline
        </a>{" "}
        at <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "When do I need Glem Gas hood maintenance?",
    answer: (
      <>
        You need Glem Gas hood maintenance if suction weakens, grease builds up,
        or unusual noise appears during operation. In such cases, immediate
        contact with the <strong>Glem Gas service center</strong> helps prevent
        further performance issues.
      </>
    ),
  },
  {
    question: "Can Glem Gas hood maintenance be performed at home?",
    answer: (
      <>
        Yes, most <strong>Glem Gas hood maintenance services</strong> are
        performed at home without uninstalling the hood. You can easily book an
        in-home visit through the{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas hotline
        </a>{" "}
        at <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Do built-in Glem Gas hoods require specialized technicians?",
    answer: (
      <>
        Yes, built-in hoods require technicians experienced in{" "}
        <strong>Glem Gas hood maintenance</strong> due to their integrated kitchen
        installation. Incorrect handling may affect safety or airflow
        efficiency, which is why service should always be requested from the{" "}
        <a
          href="https://glemgas-eg.co/en"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Egypt Service Center
        </a>
        .
      </>
    ),
  },
  
];

  

  const faqaboutItems = items || defaultItems;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
Frequently Asked Questions About Glem Gas Hood Maintenance
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

export default FAQHoodeEn;
