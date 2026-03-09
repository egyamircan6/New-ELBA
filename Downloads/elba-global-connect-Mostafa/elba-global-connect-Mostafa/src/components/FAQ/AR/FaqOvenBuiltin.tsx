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

const FAQOvenBuiltinAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const glemGasOvenBuiltinFaqs = [
 {
    question: "ما هي صيانة فرن جليم جاز بلت إن؟",
    answer: (
      <>
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          صيانة فرن جليم جاز بلت إن
        </a>{" "}
        هي خدمة فنية متخصصة تهدف إلى فحص وإصلاح أعطال الفرن المدمج بدقة،
        مع الحفاظ على كفاءة التشغيل وثبات درجات الحرارة. تشمل الصيانة
        تشخيص العطل ومعالجة السبب الأساسي لضمان أداء آمن ومستقر.
        <br />
        للتواصل: <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "هل يتوفر توكيل صيانة فرن جليم جاز بلت إن؟",
    answer: (
      <>
        نوفّر خدمة صيانة متخصصة لأفران جليم جاز بلت إن بمعايير احترافية
        عالية من خلال فنيين ذوي خبرة، مع الالتزام بإجراءات الأمان وجودة الإصلاح.
        <br />
        احجز الصيانة عبر{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>
      </>
    ),
  },
  {
    question: "ما هو رقم صيانة فرن جليم جاز بلت إن؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          رقم صيانة فرن جليم جاز بلت إن
        </a>{" "}
        المخصص لتسجيل الأعطال وحجز المواعيد هو{" "}
        <strong>01211114528</strong>، حيث يتم استقبال الطلب
        وتحديد موعد مناسب لزيارة الفني.
      </>
    ),
  },
  {
    question: "كيف أتواصل مع خدمة عملاء صيانة فرن جليم جاز؟",
    answer: (
      <>
        يمكنك التواصل مع{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          خدمة عملاء صيانة فرن جليم جاز بلت إن
        </a>{" "}
        مباشرة عبر الاتصال على <strong>01211114528</strong>،
        حيث يتم تسجيل بيانات العطل ومتابعة الطلب حتى الانتهاء من الإصلاح.
      </>
    ),
  },
  {
    question: "متى أحتاج إلى صيانة فرن جليم جاز بلت إن؟",
    answer: (
      <>
        تحتاج إلى{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          صيانة فرن جليم جاز بلت إن
        </a>{" "}
        في حال ضعف التسخين، عدم ثبات درجة الحرارة،
        توقف الفرن عن العمل، أو وجود خلل في الأداء.
        <br />
        اطلب الفحص الفني على <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "هل تشمل الصيانة إصلاح أعطال الفرن بالكامل؟",
    answer: (
      <>
        نعم، تشمل صيانة فرن جليم جاز بلت إن إصلاح جميع الأعطال
        المتعلقة بالتسخين، الترموستات، أنظمة الأمان،
        وأجزاء التحكم، مع اختبار الفرن بعد الصيانة لضمان كفاءة التشغيل.
        <br />
        للتواصل: <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "هل تتم صيانة فرن جليم جاز بلت إن داخل المنزل؟",
    answer: (
      <>
        نعم، يتم تنفيذ{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          صيانة أفران جليم جاز بلت إن
        </a>{" "}
        داخل المنزل في أغلب الحالات دون الحاجة إلى نقل الفرن،
        مع الحفاظ على تركيب المطبخ وسلامة الجهاز.
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
    question: "هل يوجد فني متخصص في أفران جليم جاز بلت إن؟",
    answer: (
      <>
        نوفّر فني{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          صيانة فرن جليم جاز بلت إن
        </a>{" "}
        لديه خبرة متخصصة في الأفران المدمجة،
        ويعمل وفق معايير أمان دقيقة لضمان نتائج موثوقة.
        <br />
        اطلب فني الصيانة على <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "هل تشمل الصيانة ضمانًا؟",
    answer: (
      <>
        نعم، تشمل خدمة صيانة فرن جليم جاز بلت إن ضمانًا
        على أعمال الصيانة، مما يمنح العميل الثقة وراحة البال بعد الإصلاح.
        <br />
        للاستفسار عن الضمان اتصل على <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "كيف أحجز صيانة فرن جليم جاز بلت إن بسرعة؟",
    answer: (
      <>
        يمكنك حجز{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          صيانة فرن جليم جاز بلت إن
        </a>{" "}
        بسهولة من خلال الاتصال المباشر على{" "}
        <strong>01211114528</strong>، حيث يتم تسجيل الطلب
        وتحديد موعد الصيانة في أقرب وقت متاح.
      </>
    ),
  },

];

  

  const faqaboutoven = items || glemGasOvenBuiltinFaqs;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الأسئلة الشائعة عن صيانة فرن جليم جاز بلت إن

        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqaboutoven.map((item, index) => (
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

export default FAQOvenBuiltinAr;
