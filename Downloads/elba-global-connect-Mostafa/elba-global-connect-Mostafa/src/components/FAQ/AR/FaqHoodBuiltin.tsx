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

const FAQHoodBuiltinAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();


const glemGasHoodFaqs = [
  {
    question: "ما هي صيانة شفاط جليم جاز بلت إن؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة شفاط جليم جاز بلت إن
        </a>{" "}
        هي خدمة فنية متخصصة لفحص وإصلاح أعطال الشفاط المدمج داخل المطبخ،
        مثل ضعف الشفط أو توقف التشغيل، بهدف استعادة كفاءة الأداء وضمان تهوية آمنة.
        <br />
        للتواصل:{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
      </>
    ),
  },
  {
    question: "متى أحتاج إلى صيانة شفاط جليم جاز بلت إن؟",
    answer: (
      <>
        تحتاج إلى{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة شفاط جليم جاز بلت إن
        </a>{" "}
        عند ملاحظة ضعف الشفط، صدور أصوات غير طبيعية، توقف الشفاط عن العمل،
        أو تراكم روائح الدهون داخل المطبخ.
        <br />
        اطلب الصيانة عبر{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
      </>
    ),
  },
  {
    question: "ما سبب ضعف شفط شفاط جليم جاز بلت إن؟",
    answer: (
      <>
        ضعف الشفط قد يكون بسبب انسداد الفلاتر بالدهون أو وجود خلل في الموتور،
        ويُنصح بطلب صيانة متخصصة لمعالجة السبب الأساسي.
        <br />
        للحجز:{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
      </>
    ),
  },
  {
    question: "شفاط جليم جاز بلت إن لا يعمل، ماذا أفعل؟",
    answer: (
      <>
        في حال توقف الشفاط عن العمل، يُفضل عدم محاولة الإصلاح الذاتي
        وطلب فني صيانة متخصص لفحص الجهاز وإصلاح العطل بشكل آمن.
        <br />
        للتواصل الفوري: <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "هل تحتاج صيانة شفاط جليم جاز بلت إن إلى فني متخصص؟",
    answer: (
      <>
        نعم، نظرًا لتركيب الشفاط داخل وحدات المطبخ،
        فإن الصيانة تتطلب فنيًا متخصصًا لضمان الإصلاح الصحيح دون التأثير على التركيب أو الأمان.
        <br />
        اطلب فني الصيانة على{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
      </>
    ),
  },
  {
    question: "هل تتم صيانة شفاط جليم جاز بلت إن داخل المنزل؟",
    answer: (
      <>
        نعم، تتم معظم أعمال الصيانة داخل المنزل دون الحاجة إلى نقل الجهاز،
        مع اختبار الشفاط بعد الإصلاح لضمان كفاءة التشغيل.
        <br />
        احجز الخدمة عبر{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
      </>
    ),
  },
  {
    question: "هل تشمل الصيانة تنظيف الفلاتر؟",
    answer: (
      <>
        نعم، تشمل صيانة شفاط جليم جاز بلت إن فحص وتنظيف الفلاتر
        وإزالة الدهون المتراكمة لضمان عودة الشفط إلى كفاءته الطبيعية.
        <br />
        للتواصل: <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "كيف أحجز صيانة شفاط جليم جاز بلت إن بسرعة؟",
    answer: (
      <>
        يمكنك حجز{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          صيانة شفاط جليم جاز بلت إن
        </a>{" "}
        بسهولة عبر الاتصال المباشر على{" "}
        <strong>01211114528</strong>،
        حيث يتم تسجيل البلاغ وتحديد موعد مناسب.
      </>
    ),
  },
  {
    question: "هل صيانة شفاط جليم جاز بلت إن تحسّن أداء المطبخ؟",
    answer: (
      <>
        نعم، الصيانة المنتظمة تساعد على تحسين التهوية،
        تقليل الروائح، والحفاظ على بيئة مطبخ صحية أثناء الطهي.
        <br />
        للحجز: <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "ما هو رقم صيانة شفاط جليم جاز بلت إن؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          رقم صيانة شفاط جليم جاز بلت إن
        </a>{" "}
        هو <strong>01211114528</strong> المخصص لحجز الصيانة والتواصل مع خدمة العملاء.
      </>
    ),
  },
];

  

  const faqaboutItems = items || glemGasHoodFaqs;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الأسئلة الشائعة عن صيانة شفاط جليم جاز بلت إن
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

export default FAQHoodBuiltinAr;
