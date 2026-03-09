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

const FAQCookerBuiltinAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const glemGasCookerFaqs = [
 {
    question: "لماذا تختارنا في صيانة بوتاجاز جليم جاز بلت ان؟",
    answer: (
      <>
        لأننا نوفر حلًا متكاملًا يشمل{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة بوتاجاز بلت إن جليم جاز
        </a>{" "}
        و<strong>إصلاح بوتاجاز Glem Gas بلت إن</strong> باستخدام
        قطع غيار أصلية مع ضمان حقيقي وخدمة عملاء جاهزة للرد على جميع الاستفسارات.
        هدفنا هو تقديم صيانة موثوقة تمنحك راحة البال وتحافظ على أمان مطبخك.
      </>
    ),
  },
  {
    question: "ما هي صيانة بوتاجازات بلت إن جليم جاز؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة بوتاجازات بلت إن جليم جاز
        </a>{" "}
        هي خدمة متخصصة لإصلاح وفحص البوتاجازات المدمجة داخل المطبخ دون فك أو إضرار بالوحدة.
        تشمل الصيانة فحص الشعلات، الإشعال الذاتي، توزيع الغاز، وأنظمة الأمان
        لضمان تشغيل آمن وكفاءة عالية.
        <br />
        للحصول على خدمة موثوقة اتصل على{" "}
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
    question: "هل صيانة بوتاجاز بلت إن Glem Gas تتم داخل المنزل؟",
    answer: (
      <>
        نعم، تتم{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة بوتاجاز بلت إن Glem Gas
        </a>{" "}
        بالكامل داخل المنزل بواسطة فنيين متخصصين في الأجهزة البلت إن،
        مع الحفاظ على تصميم المطبخ دون أي فك غير ضروري.
        <br />
        لحجز موعد صيانة اتصل على{" "}
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
    question:
      "هل يتم استخدام قطع غيار أصلية في صيانة بوتاجازات بلت إن جليم جاز؟",
    answer: (
      <>
        نعم، تعتمد{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة بوتاجازات بلت إن جليم جاز
        </a>{" "}
        على استخدام قطع غيار أصلية 100% ومتوافقة مع جميع الموديلات،
        لضمان الأمان وطول عمر الجهاز.
        <br />
        للاستفسار أو طلب الصيانة اتصل على <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "هل يوجد ضمان على صيانة بوتاجاز بلت إن جليم جاز؟",
    answer: (
      <>
        بالتأكيد، جميع خدمات{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          صيانة بوتاجاز بلت إن جليم جاز
        </a>{" "}
        تشمل ضمانًا معتمدًا لمدة 6 شهور على أعمال الصيانة،
        مما يمنح العميل ثقة وراحة بال بعد الإصلاح.
        <br />
        لمعرفة تفاصيل الضمان اتصل على <strong>01211114528</strong>
      </>
    ),
  },
  {
    question: "كيف أطلب فني صيانة بوتاجازات بلت إن جليم جاز؟",
    answer: (
      <>
        يمكنك طلب{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
          className="font-bold text-primary hover:underline"
        >
          فني صيانة بوتاجازات بلت إن جليم جاز
        </a>{" "}
        بسهولة من خلال الاتصال على{" "}
        <a
          href="https://glemgas-eg.co/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          01211114528
        </a>{" "}
        حيث يقوم فريق خدمة العملاء بتسجيل العطل وتحديد موعد مناسب،
        ثم إرسال أقرب فني متخصص لإتمام الصيانة بسرعة واحترافية.
      </>
    ),
  },
];

  

  const faqaboutcooker = items || glemGasCookerFaqs;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الاسئلة الشائعة حول بوتاجازات جليم جاز بلت ان 

        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqaboutcooker.map((item, index) => (
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

export default FAQCookerBuiltinAr;
