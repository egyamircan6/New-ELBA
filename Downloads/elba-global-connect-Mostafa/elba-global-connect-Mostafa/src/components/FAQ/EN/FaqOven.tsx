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

const FAQOvenEn: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const defaultItems: faqaboutItem[] = [
 


     {
    question: "What is Glem Gas oven maintenance?",
    answer: (
      <>
        Glem Gas oven maintenance includes a full inspection of the oven to ensure
        proper heating performance, thermostat accuracy, and stable temperature
        control for safe and efficient operation. Book maintenance through the{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Hotline
        </a>{" "}
        or call <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "When do I need Glem Gas oven maintenance?",
    answer: (
      <>
        You need Glem Gas oven maintenance if heating is weak, temperature is
        unstable, or the oven stops working suddenly. In such cases, it is
        recommended to contact the <strong>Glem Gas service team</strong>{" "}
        immediately.
      </>
    ),
  },
  {
    question: "What is the difference between Glem Gas oven maintenance and repair?",
    answer: (
      <>
        Glem Gas oven maintenance is preventive or periodic to maintain
        performance, while <strong>Glem Gas oven repair</strong> is required when
        an actual malfunction occurs. You can choose the appropriate service
        through our{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Contact & Hotline Page
        </a>
        .
      </>
    ),
  },
  {
    question: "Are genuine spare parts used in Glem Gas oven repair?",
    answer: (
      <>
        Yes, all Glem Gas oven repairs are performed using{" "}
        <strong>genuine approved spare parts</strong> to maintain oven efficiency
        and ensure a longer operational lifespan. Contact us via the{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Hotline
        </a>
        .
      </>
    ),
  },
  {
    question: "Does Glem Gas oven maintenance include a warranty?",
    answer: (
      <>
        Yes, all <strong>Glem Gas oven maintenance services</strong> include an
        approved <strong>6-month warranty</strong> on the repaired fault, giving
        customers confidence after service completion. View warranty-supported
        services on the{" "}
        <a
          href="https://glemgas-eg.co/en"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Egypt Home Page
        </a>
        .
      </>
    ),
  },
  {
    question: "Can all Glem Gas oven models be serviced?",
    answer: (
      <>
        Yes, we provide Glem Gas oven maintenance for{" "}
        <strong>all models</strong>, including standard and built-in ovens,
        through specialized technicians. You may also explore{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-built-in-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Built-In Glem Gas Services
        </a>
        .
      </>
    ),
  },
  {
    question: "What common issues require Glem Gas oven repair?",
    answer: (
      <>
        Common issues include weak heating, thermostat failure, or unresponsive
        control settings. In these cases, contact the{" "}
        <strong>Glem Gas Oven Service Team</strong> or call{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "How can I request Glem Gas oven maintenance quickly?",
    answer: (
      <>
        You can request fast <strong>Glem Gas oven maintenance</strong> by calling{" "}
        <strong>01211114528</strong> or visiting the{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hotline"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Hotline Page
        </a>{" "}
        to register your request.
      </>
    ),
  },
  {
    question: "Does oven maintenance help improve performance?",
    answer: (
      <>
        Yes, regular <strong>Glem Gas oven maintenance</strong> improves heating
        efficiency, reduces energy consumption, and ensures consistent cooking
        results. Learn more about appliance care on the{" "}
        <a
          href="https://glemgas-eg.co/en"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Egypt Website
        </a>
        .
      </>
    ),
  },
  {
    question: "Can oven maintenance be combined with other appliances in one visit?",
    answer: (
      <>
        Yes, Glem Gas oven maintenance can be combined with servicing other Glem
        Gas appliances during the same visit, such as{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-cooker-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Cooker Maintenance
        </a>{" "}
        or{" "}
        <a
          href="https://glemgas-eg.co/glem-gas-hood-maintenance"
          className="font-bold text-primary hover:underline"
        >
          Glem Gas Hood Maintenance
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
          Frequently Asked Questions – Glem Gas Oven Maintenance

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

export default FAQOvenEn;
