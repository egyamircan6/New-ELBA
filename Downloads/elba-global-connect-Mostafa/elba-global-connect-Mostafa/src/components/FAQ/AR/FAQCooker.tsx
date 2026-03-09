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

const FAQCookerAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const glemGasCookerFaqs = [
  {
    question: "ما هو مركز صيانة بوتاجاز جليم جاز؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/صيانة-بوتاجاز-جليم-جاز"
          className="font-bold text-primary hover:underline"
        >
          مركز صيانة بوتاجاز جليم جاز
        </a>{" "}
        هو جهة متخصصة في صيانة وإصلاح جميع أنواع بوتاجازات جليم جاز العادية
        والبلت إن، باستخدام فنيين معتمدين وقطع غيار أصلية. لحجز الصيانة اتصل
        على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "ماذا تشمل صيانة بوتاجازات جليم جاز؟",
    answer: (
      <>
        تشمل صيانة بوتاجازات جليم جاز فحص الشعلات، أنظمة الأمان، الإشعال
        الذاتي، مفاتيح التشغيل، والكشف عن أي تسريب غاز لضمان تشغيل آمن
        وكفاءة عالية. لطلب الصيانة اتصل على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل صيانة بوتاجاز جليم جاز هي نفسها صيانة Glem Gas؟",
    answer: (
      <>
        نعم، صيانة بوتاجاز جليم جاز هي نفسها صيانة Glem Gas، والاختلاف فقط في
        طريقة كتابة الاسم بينما الخدمة والمعايير الفنية واحدة. للحجز اتصل
        على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "ما هو رقم صيانة بوتاجاز جليم جاز المعتمد؟",
    answer: (
      <>
        رقم صيانة بوتاجاز جليم جاز المعتمد هو{" "}
        <strong>01211114528</strong>، وهو الرقم المخصص لحجز مواعيد الصيانة
        وطلب فنيي البوتاجازات.
      </>
    ),
  },
  {
    question: "متى أحتاج إلى صيانة بوتاجاز جليم جاز؟",
    answer: (
      <>
        تحتاج إلى صيانة بوتاجاز جليم جاز عند ضعف الشعلات، صعوبة الإشعال،
        انطفاء النار، أو ملاحظة رائحة غاز أثناء الاستخدام. في هذه الحالات
        اطلب الصيانة فورًا على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "ما الحالات التي تتطلب تصليح بوتاجاز جليم جاز؟",
    answer: (
      <>
        يتم تصليح بوتاجاز جليم جاز عند وجود تسريب غاز، تلف مفاتيح التشغيل،
        أو خلل في الإشعال الذاتي. للحفاظ على الأمان تواصل مع الصيانة عبر{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل تتوفر قطع غيار بوتاجازات جليم جاز؟",
    answer: (
      <>
        نعم، نوفر جميع قطع غيار بوتاجازات جليم جاز المناسبة لمختلف الموديلات
        لضمان إصلاح آمن ودقيق. للاستعلام أو الطلب اتصل على{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "ما أهمية استخدام قطع غيار بوتاجاز جليم جاز الأصلية؟",
    answer: (
      <>
        استخدام قطع الغيار الأصلية يضمن سلامة التشغيل، يحافظ على كفاءة
        البوتاجاز، ويطيل عمره الافتراضي. لطلب الصيانة بقطع أصلية اتصل على{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "ما الذي يميز صيانة بوتاجاز بلت إن جليم جاز؟",
    answer: (
      <>
        صيانة بوتاجاز بلت إن جليم جاز تحتاج إلى خبرة خاصة بسبب دقة التركيب
        داخل المطبخ، ويتم تنفيذها بواسطة فنيين متخصصين في أجهزة البلت إن.
        للتواصل اتصل على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل تشمل صيانة بوتاجازات جليم جاز ضمانًا؟",
    answer: (
      <>
        نعم، جميع خدمات صيانة بوتاجازات جليم جاز تشمل ضمانًا معتمدًا على
        العطل الذي تم إصلاحه، لراحة العميل وثقته في الخدمة. للحجز اتصل على{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "كيف أطلب صيانة بوتاجاز جليم جاز بسرعة؟",
    answer: (
      <>
        يمكنك طلب صيانة بوتاجاز جليم جاز بسهولة من خلال الاتصال المباشر على{" "}
        <strong>01211114528</strong>، حيث يتم تسجيل البلاغ وإرسال أقرب فني
        متخصص في نفس اليوم.
      </>
    ),
  },
];

  

  const faqaboutcooker = items || glemGasCookerFaqs;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الاسئلة الشائعة   

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

export default FAQCookerAr;
