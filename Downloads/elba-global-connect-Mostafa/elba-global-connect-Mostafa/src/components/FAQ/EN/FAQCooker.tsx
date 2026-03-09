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

const FAQCookerEn: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const defaultItems: faqaboutItem[] = [
  {
    question: "What Is the Glem Gas Cooker Service Center?",
    answer: (
      <>
        The{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Cooker Service Center
        </a>{" "}
        is a specialized provider for repairing and maintaining all types of Glem
        Gas cookers, including freestanding and built-in models, using certified
        technicians and genuine spare parts. To book maintenance, call{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "What Does Glem Gas Cooker Maintenance Include?",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/glem-gas-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas cooker maintenance
        </a>{" "}
        includes inspecting burners, safety systems, ignition units, control
        knobs, and checking for gas leaks to ensure safe and efficient operation.
        Request service via <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Is Glem Gas Cooker Maintenance the Same as Glem Gas Service?",
    answer: (
      <>
        Yes,{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas cooker maintenance
        </a>{" "}
        and <strong>Glem Gas service</strong> refer to the same professional
        service. The difference is only in the name, while technical standards
        and service quality remain the same. Book now at{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "What Is the Official Glem Gas Cooker Maintenance Number?",
    answer: (
      <>
        The official{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas cooker maintenance number
        </a>{" "}
        is <strong>01211114528</strong>, dedicated to booking technician visits
        and reporting faults.
      </>
    ),
  },
  {
    question: "Is There a Glem Gas Cooker Hotline?",
    answer: (
      <>
        Yes, the{" "}
        <a
          href="https://glemgas-eg.co/glem%20gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas cooker hotline
        </a>{" "}
        is <strong>01211114528</strong>, the fastest way to request urgent
        maintenance or book a certified technician.
      </>
    ),
  },
  {
    question: "When Do I Need Glem Gas Cooker Maintenance?",
    answer: (
      <>
        You should request Glem Gas cooker maintenance if burners are weak,
        ignition is difficult, flames go out unexpectedly, or you notice a gas
        smell during use. Call immediately:{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "What Issues Require Glem Gas Cooker Repair?",
    answer: (
      <>
        Glem Gas cooker repair is required in cases of gas leakage, damaged
        control knobs, or ignition system malfunctions. For safety reasons,
        contact maintenance immediately via{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Do You Use Genuine Glem Gas Spare Parts?",
    answer: (
      <>
        Yes, we use <strong>only genuine Glem Gas spare parts</strong> in all
        cooker maintenance services to ensure maximum safety, efficiency, and
        long appliance lifespan. Book service at{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Built-In Glem Gas Cooker Maintenance",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/glem-gas-built-in-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Built-in Glem Gas cookers
        </a>{" "}
        require special expertise due to precise kitchen installation.
        Maintenance is carried out by technicians specialized in{" "}
        <strong>built-in Glem Gas cookers</strong> to ensure safe and accurate
        repair. Contact us at <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "When Should I Request Built-In Glem Gas Cooker Repair?",
    answer: (
      <>
        You should request built-in{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas cooker repair
        </a>{" "}
        when performance drops, ignition problems occur, or some burners stop
        working. Schedule a visit now via{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "Does Glem Gas Cooker Maintenance Include Warranty?",
    answer: (
      <>
        Yes, all <strong>Glem Gas cooker maintenance services</strong> include
        an approved warranty covering the repaired fault, ensuring customer
        confidence and peace of mind. Call{" "}
        <strong>01211114528</strong> to book.
      </>
    ),
  },
  {
    question: "How Can I Request Glem Gas Cooker Maintenance Quickly?",
    answer: (
      <>
        You can request fast <strong>Glem Gas cooker maintenance</strong> by
        calling <strong>01211114528</strong>. Your request will be registered
        and the nearest specialized technician will be dispatched.
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

export default FAQCookerEn;
