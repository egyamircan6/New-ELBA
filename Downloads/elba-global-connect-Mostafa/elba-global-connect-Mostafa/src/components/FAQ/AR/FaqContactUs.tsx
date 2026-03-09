import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqcContactAr {
  question: React.ReactNode;
  answer: React.ReactNode;
}

interface faqaboutSectionProps {
  items?: FaqcContactAr[];
}

const ContactUsFAQAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const defaultItems: FaqcContactAr[] = [
  {
    question: "رقم خدمة عملاء جليم جاز كام؟",
    answer: (
      <>
        رقم خدمة عملاء جليم جاز هو{" "}
        <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
        ، وهو الرقم المخصص للاستفسارات وحجز طلبات الصيانة لجميع أجهزة جليم جاز.
      </>
    ),
  },
  {
    question: "رقم صيانة شركة جليم جاز إيه؟",
    answer: (
      <>
        يمكنك التواصل مع رقم صيانة شركة جليم جاز مباشرة عبر{" "}
        <strong>01211114528</strong> لتسجيل الأعطال وحجز موعد زيارة فني متخصص.
      </>
    ),
  },
  {
    question: "هل رقم تليفون صيانة جليم جاز متاح؟",
    answer: (
      <>
        نعم، رقم تليفون صيانة جليم جاز <strong>01211114528</strong> متاح
        لاستقبال طلبات الصيانة والدعم الفني.
      </>
    ),
  },
  {
    question: "هل يوجد رقم دعم جليم جاز؟",
    answer: (
      <>
        نعم، رقم دعم جليم جاز هو <strong>01211114528</strong> ويقدم دعمًا
        فنيًا لجميع أجهزة Glem Gas.
      </>
    ),
  },
  {
    question: "رقم مركز صيانة جليم جاز إيه؟",
    answer: (
      <>
        رقم مركز صيانة جليم جاز المعتمد هو{" "}
        <strong>01211114528</strong> للتواصل المباشر مع خدمة العملاء.
      </>
    ),
  },
  {
    question: "هل صيانة جليم جاز متوفرة داخل مصر؟",
    answer: (
      <>
        نعم، صيانة جليم جاز متوفرة داخل مصر، ويتم توجيه الفني حسب منطقتك عند
        الاتصال على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل ده رقم صيانة جليم جاز الرسمي؟",
    answer: (
      <>
        رقم <strong>01211114528</strong> مخصص لتسجيل طلبات صيانة جليم جاز
        والاستفسار عن الخدمات وقطع الغيار.
      </>
    ),
  },
  {
    question: "هل يوجد رقم صيانة جليم جاز خط ساخن؟",
    answer: (
      <>
        نعم، يمكن اعتبار <strong>01211114528</strong> هو الخط الساخن
        المعتمد للتواصل السريع مع صيانة جليم جاز.
      </>
    ),
  },
  {
    question: "إزاي أكلم صيانة جليم جاز؟",
    answer: (
      <>
        كل اللي عليك الاتصال على <strong>01211114528</strong> وشرح العطل،
        وسيتم تحديد موعد مناسب للصيانة.
      </>
    ),
  },
  {
    question: "رقم صيانة بوتاجازات جليم جاز كام؟",
    answer: (
      <>
        رقم صيانة بوتاجازات جليم جاز هو{" "}
        <a
          href="https://glemgas-eg.co/صيانة-بوتاجاز-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
        ، ويشمل أعطال البوتاجازات والأفران.
      </>
    ),
  },
  {
    question: "هل توجد خدمة صيانة جليم جاز السريعة؟",
    answer: (
      <>
        نعم، خدمة صيانة جليم جاز السريعة متاحة عند الاتصال على{" "}
        <strong>01211114528</strong> وتسجيل الطلب.
      </>
    ),
  },
];

  

  const FaqcContactArs = items || defaultItems;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الاسئلة الشائعة   

        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FaqcContactArs.map((item, index) => (
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

export default ContactUsFAQAr;
