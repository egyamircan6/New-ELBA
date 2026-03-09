import React, { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface faqaboutItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

interface faqaboutSectionProps {
  items?: faqaboutItem[];
}

// ✅ برا الكومبوننت
function extractTextFromNode(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromNode).join(" ");
  if (React.isValidElement(node)) return extractTextFromNode(node.props.children);
  return "";
}

const FAQSectionHome: React.FC<faqaboutSectionProps> = ({ items }) => {
  const { t, isRTL } = useLanguage();

  const defaultItems: faqaboutItem[] = [
    {
      question: "ما افضل مركز لصيانة البا في مصر؟",
      answer: (
        <>
          أفضل{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
            className="font-bold text-primary hover:underline"
          >
            مركز صيانة البا في مصر
          </a>{" "}
          هو{" "}
          <a
            href="https://americangroup-eg.com/"
            className="font-bold text-primary hover:underline"
          >
            الأمريكية جروب
          </a>{" "}
          ويمكنك الاتصال على <strong>01211114528</strong> للحصول على خدمة منزلية
          سريعة مع قطع غيار أصلية وضمان مكتوب.
        </>
      ),
    },
    {
      question: "كيف اتواصل مع خدمة عملاء البا؟",
      answer: (
        <>
          للتواصل مع <strong>خدمة عملاء البا</strong> اتصل على{" "}
          <strong>01211114528</strong> أو قم بتسجيل طلب عبر{" "}
          <a
            href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
            className="font-bold text-primary hover:underline"
          >
            الفورم الإلكتروني
          </a>{" "}
          لتحديد موعد زيارة فني متخصص.
        </>
      ),
    },
    {
      question: "ما هو توكيل البا في مصر؟",
      answer: (
        <>
          عند البحث عن{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
            className="font-bold text-primary hover:underline"
          >
            توكيل البا في مصر
          </a>{" "}
          يُفضل اختيار مركز متخصص مثل{" "}
          <a
            href="https://americangroup-eg.com/"
            className="font-bold text-primary hover:underline"
          >
            الأمريكية جروب
          </a>{" "}
          التي توفر خدمة احترافية وقطع غيار أصلية بضمان.
          <br />
          للحجز اتصل على <strong>01211114528</strong>
        </>
      ),
    },
    {
      question: "أين أجد شركة لصيانة البا بالمنزل؟",
      answer: (
        <>
          نوفر <strong>صيانة البا بالمنزل</strong> لجميع الأجهزة مثل{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
            className="font-bold text-primary hover:underline"
          >
            البوتاجازات
          </a>{" "}
          و{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
            className="font-bold text-primary hover:underline"
          >
            الأفران
          </a>{" "}
          والشفاطات والبلت ان.
          <br />
          للحجز السريع: <strong>01211114528</strong>
        </>
      ),
    },
    {
      question: "هل يتم استخدام قطع غيار البا الأصلية؟",
      answer: (
        <>
          نعم، نستخدم <strong>قطع غيار البا الأصلية</strong> والمتوافقة مع
          المواصفات الفنية للحفاظ على كفاءة الجهاز وأمان التشغيل.
          <br />
          للاستفسار اتصل على{" "}
          <a
            href="https://wa.me/201211114528"
            className="font-bold text-primary hover:underline"
          >
            01211114528
          </a>
        </>
      ),
    },
    {
      question: "هل يوجد ضمان على صيانة elba في مصر؟",
      answer: (
        <>
          نعم، نقدم <strong>ضمان صيانة البا مكتوب</strong> على جميع الإصلاحات
          المنفذة باستخدام مكونات أصلية.
          <br />
          للحجز عبر الرقم <strong>01211114528</strong>
        </>
      ),
    },
    {
      question: "متى أحتاج إلى فني صيانة البا بشكل عاجل؟",
      answer: (
        <>
          عند ملاحظة ضعف شعلة البوتاجاز، تسريب غاز، توقف الفرن أو أعطال كهربائية،
          يُنصح بالتواصل فورًا مع{" "}
          <a
            href="https://americangroup-eg.com/"
            className="font-bold text-primary hover:underline"
          >
            شركة الأمريكية جروب
          </a>{" "}
          على <strong>01211114528</strong> لإرسال فني متخصص في أقرب وقت.
        </>
      ),
    },
  ];

  const faqaboutItems = items || defaultItems;

  // ✅ useMemo + فلترة
  const faqSchema = useMemo(() => {
    const mainEntity = faqaboutItems
      .filter((it) => typeof it.question === "string")
      .map((it) => ({
        "@type": "Question",
        name: it.question as string,
        acceptedAnswer: {
          "@type": "Answer",
          text: extractTextFromNode(it.answer).replace(/\s+/g, " ").trim(),
        },
      }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity,
    };
  }, [faqaboutItems]);

  return (
    <section className="section-padding bg-[#0060E6] p-[2em]">
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

      {/* ✅ FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default FAQSectionHome;