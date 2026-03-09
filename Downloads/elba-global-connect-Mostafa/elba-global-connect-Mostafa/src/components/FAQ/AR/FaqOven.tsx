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

const FAQOvenAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const glemGasOvenFaqs = [
  {
    question: "ما هي صيانة فرن جليم جاز؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/صيانة-فرن-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          صيانة فرن جليم جاز
        </a>{" "}
        تشمل فحصًا شاملًا للفرن للتأكد من كفاءة التسخين،
        سلامة الترموستات، وضبط درجات الحرارة بدقة،
        بما يضمن تشغيلًا آمنًا وأداءً ثابتًا.
        لحجز الصيانة تواصل مباشرة على{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "متى أحتاج إلى صيانة أفران جليم جاز؟",
    answer: (
      <>
        تُطلب صيانة أفران جليم جاز عند ضعف التسخين،
        عدم ثبات الحرارة، أو توقف الفرن عن العمل بشكل مفاجئ.
        في هذه الحالات يُنصح بالتواصل الفوري مع الصيانة عبر{" "}
         <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "ما الفرق بين صيانة فرن جليم جاز وتصليحه؟",
    answer: (
      <>
        صيانة فرن جليم جاز تكون وقائية أو دورية للحفاظ
        على الأداء، بينما تصليح فرن جليم جاز يتم عند
        وجود عطل فعلي يحتاج إلى تدخل فني متخصص.
        يمكنك حجز الخدمة المناسبة عبر{" "}
        <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "هل يتم تصليح أفران جليم جاز بقطع غيار أصلية؟",
    answer: (
      <>
        نعم، يتم تصليح أفران جليم جاز باستخدام قطع
        غيار أصلية معتمدة للحفاظ على كفاءة الفرن
        وضمان عمر تشغيلي أطول.
        للتواصل مع الصيانة اتصل على{" "}
        <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "هل تشمل صيانة فرن جليم جاز ضمانًا؟",
    answer: (
      <>
        تشمل جميع خدمات صيانة فرن جليم جاز ضمانًا
        معتمدًا لمدة 6 أشهر على العطل الذي تم إصلاحه،
        مما يمنح العميل ثقة وراحة بعد الصيانة.
        للحجز اتصل على  <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "هل يمكن صيانة جميع موديلات أفران جليم جاز؟",
    answer: (
      <>
        نعم، يتم تقديم صيانة أفران جليم جاز لجميع
        الموديلات سواء الأفران العادية أو البلت إن،
        من خلال فنيين متخصصين.
        احجز فني الفرن الآن عبر{" "}
         <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "ما الأعطال الشائعة التي تتطلب تصليح فرن جليم جاز؟",
    answer: (
      <>
        من أشهر الأعطال التي تستدعي تصليح فرن جليم جاز:
        ضعف التسخين، تلف الترموستات، أو عدم استجابة
        الفرن للإعدادات.
        في هذه الحالات تواصل فورًا على{" "}
        <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "كيف أطلب صيانة أفران جليم جاز بسرعة؟",
    answer: (
      <>
        يمكنك طلب صيانة أفران جليم جاز بسهولة من خلال
        الاتصال المباشر على  <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          ،
        حيث يتم تسجيل العطل وإرسال أقرب فني متخصص
        في الأفران.
      </>
    ),
  },
  {
    question: "هل صيانة الأفران تحافظ على كفاءة التشغيل؟",
    answer: (
      <>
        نعم، الالتزام بصيانة فرن جليم جاز الدورية
        يساعد على تحسين كفاءة التشغيل، تقليل استهلاك
        الطاقة، والحفاظ على جودة الطهي.
        للحجز اتصل على  <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          
      </>
    ),
  },
  {
    question: "هل يمكن الجمع بين صيانة الفرن وأجهزة أخرى في نفس الزيارة؟",
    answer: (
      <>
        نعم، يمكن تنفيذ صيانة فرن جليم جاز مع صيانة
        أجهزة أخرى من جليم جاز في نفس الزيارة حسب الطلب.
        للتنسيق تواصل مع الصيانة على{" "}
         <a
          href="https://glemgas-eg.co/رقم-صيانة-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          <strong>01211114528</strong>.
          </a>
          .
      </>
    ),
  },
];

  

  const faqaboutoven = items || glemGasOvenFaqs;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الاسئلة الشائعة   

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

export default FAQOvenAr;
