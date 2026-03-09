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

const FAQHoodAr: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

const glemGasHoodFaqs = [
  {
    question: "مركز صيانة شفاط جليم جاز معتمد؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          صيانة شفاط جليم جاز
        </a>{" "}
        هي خدمة متخصصة تهدف إلى فحص الشفاط وتنظيف الفلاتر وفحص المروحة والموتور
        لضمان قوة شفط عالية وتشغيل مستقر. لطلب صيانة الشفاط تواصل الآن على{" "}
        <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "متى أحتاج إلى صيانة شفاط جليم جاز؟",
    answer: (
      <>
        تحتاج إلى{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          صيانة شفاط جليم جاز
        </a>{" "}
        عند ضعف الشفط، تراكم الدهون، أو صدور أصوات غير طبيعية أثناء التشغيل.
        في هذه الحالات يُنصح بالحجز الفوري عبر <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل صيانة شفاط جليم جاز تختلف عن صيانة جليم جاز؟",
    answer: (
      <>
        <a
          href="https://glemgas-eg.co"
          className="font-bold text-primary hover:underline"
        >
          صيانة جليم جاز
        </a>{" "}
        تشمل جميع الأجهزة، بينما <strong>صيانة شفاط جليم جاز</strong> تكون
        مخصصة للشفاطات من حيث التنظيف والفحص والإصلاح الفني. يمكنك حجز الخدمة
        المناسبة عبر <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل يمكن صيانة شفاط جليم جاز داخل المنزل؟",
    answer: (
      <>
        نعم، تتم{" "}
        <a
          href="https://glemgas-eg.co"
          className="font-bold text-primary hover:underline"
        >
          صيانة شفاط جليم جاز
        </a>{" "}
        داخل المنزل دون الحاجة إلى فك الشفاط، مع فحص شامل لجميع المكونات.
        احجز فني متخصص الآن على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "ما الأعطال الشائعة في شفاط جليم جاز؟",
    answer: (
      <>
        من الأعطال الشائعة في{" "}
        <a
          href="https://glemgas-eg.co/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%AC%D9%84%D9%8A%D9%85-%D8%AC%D8%A7%D8%B2"
          className="font-bold text-primary hover:underline"
        >
          شفاط جليم جاز
        </a>{" "}
        ضعف الشفط، تلف الفلاتر، أو مشكلة في الموتور، وجميعها يتم التعامل معها
        باحترافية عند التواصل عبر <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل صيانة شفاط جليم جاز 90 سم تحتاج خطوات خاصة؟",
    answer: (
      <>
        نعم، <strong>صيانة شفاط جليم جاز 90 سم</strong> تتطلب فحصًا دقيقًا لقوة
        الشفط والموتور بسبب سعة التشغيل، ويتم تنفيذها بواسطة فنيين متخصصين.
        للحجز اتصل على <strong>01211114528</strong>.
      </>
    ),
  },
  {
    question: "هل تتم صيانة شفاط جليم جاز داخل المنزل؟",
    answer: (
      <>
        نعم، يتم إجراء معظم أعمال{" "}
        <strong>صيانة شفاطات جليم جاز داخل المنزل</strong> دون الحاجة إلى نقل
        الجهاز.
        <br />
        احجز الزيارة على{" "}
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
    question: "هل تشمل الصيانة شفاط جليم جاز 90 سم و60 سم؟",
    answer: (
      <>
        نعم، نوفر صيانة شفاط جليم جاز بمقاسي <strong>90 سم و60 سم</strong> سواء
        للشفاطات الهرمية أو البلت إن أو المسطحة.
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
    question: "هل يحتاج شفاط جليم جاز البلت إن إلى فني متخصص؟",
    answer: (
      <>
        نعم، الشفاط البلت إن يحتاج إلى فني صيانة متخصص نظرًا لتركيبه داخل
        المطبخ، وأي تدخل غير صحيح قد يؤثر على الأمان أو الأداء.
        <br />
        اطلب فني الصيانة عبر{" "}
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
    question: "هل تشمل صيانة شفاط جليم جاز تنظيف الفلاتر؟",
    answer: (
      <>
        نعم، تشمل الصيانة فحص وتنظيف الفلاتر ومعالجة سبب العطل لضمان عودة
        الشفاط إلى كفاءته الطبيعية.
        <br />
        احجز الصيانة على{" "}
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
    question: "هل يستخدم فنيّو Glem Gas قطع غيار أصلية أثناء الصيانة؟",
    answer: (
      <>
        نعم، يلتزم كل فني في <strong>صيانة Glem Gas</strong> باستخدام{" "}
        <strong>قطع غيار أصلية معتمدة</strong> فقط من شركة Glem Gas. تركيب القطع
        الأصلية يضمن الحفاظ على كفاءة الجهاز كما كانت عند الشراء، ويقلّل من
        تكرار الأعطال، وهو ما جعل الكثير من العملاء يعبّرون عن رضاهم بعد تجربة
        الخدمة.
      </>
    ),
  },
  {
    question:
      "كيف يمكنني التواصل مع خدمة عملاء صيانة شفاط Glem Gas بعد الصيانة؟",
    answer: (
      <>
        تعمل{" "}
        <a
          href="http://glemgas-eg.co/ar"
          className="font-bold text-primary hover:underline"
        >
          خدمة عملاء Glem Gas
        </a>{" "}
        على مدار الوقت للرد على جميع الاستفسارات بعد الصيانة، سواء لمعرفة تفاصيل
        الضمان أو متابعة حالة الطلب.
        <br />
        يمكنك التواصل بسهولة من خلال <strong>رقم خدمة عملاء Glem Gas</strong> أو
        الاتصال على <strong>الخط الساخن جليم جاز 01211114528</strong>، كما يمكنك
        طلب <strong>قطع غيار بوتاجاز جليم جاز</strong> أو متابعة أعمال الصيانة
        بكل سهولة.
      </>
    ),
  },
];

  

  const faqaboutItems = items || glemGasHoodFaqs;

  return (
    <section className="section-padding bg-[#101318] p-[2em]">
      <div className="container-kiriazi">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-up">
الاسئلة الشائعة   

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

export default FAQHoodAr;
