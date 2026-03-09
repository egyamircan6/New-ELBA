import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import dishwasher from "@/assest/elba-dishwasher-ar.jpeg";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";
const DOMAIN = "https://elba-eg.com";
const PAGE_URL = "https://alba-eg.com/صيانة-غسالة-اطباق-البا-بلت-ان";
const SITE_URL = "https://alba-eg.com/";

const LINK_CLASS =
  "text-primary underline font-semibold hover:text-primary/80";

type FaqItemType = {
  q: string;
  a: React.ReactNode;
  aText: string;
};

const DishwasherBuiltinElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `أفضل مركز صيانة غسالات اطباق البا بلت ان بمصر | اتصل ${PHONE_DISPLAY}`;
  const metaDescription = `هل تعاني من أعطال غسالة اطباق البا؟ نحن نوفر لك صيانة غسالات اطباق البا بلت ان فورية بالمنزل بضمان معتمد وقطع غيار إيطالية أصلية. احجز الآن: ${PHONE_DISPLAY}.`;

  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة غسالات اطباق البا بلت ان المعتمد؟",
        a: (
          <p>
            رقم صيانة غسالات اطباق البا بلت ان هو{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            . توفر <strong>الامريكية جروب</strong> بلاغات أعطال فورية ودعم فني
            متخصص للأجهزة المدمجة، مع توجيه فني خبير لمنزلك لإصلاح الجهاز في
            مكانه دون الحاجة لنقله.
          </p>
        ),
        aText: `رقم صيانة غسالات اطباق البا بلت ان هو ${PHONE_DISPLAY}. نوفر بلاغات أعطال فورية ودعم فني متخصص للأجهزة المدمجة مع توجيه فني خبير للمنزل لإصلاح الجهاز في مكانه دون الحاجة لنقله.`,
      },
      {
        q: "كيف يمكنني التواصل مع مركز صيانة غسالات اطباق البا المعتمد؟",
        a: (
          <p>
            يمكنك التواصل مع مركز صيانة غسالات اطباق البا المعتمد في مصر عبر
            الاتصال على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              رقم صيانة البا الموحد <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لحجز زيارة منزلية فورية.
          </p>
        ),
        aText: `يمكنك التواصل مع مركز صيانة غسالات اطباق البا عبر الاتصال على رقم صيانة البا الموحد ${PHONE_DISPLAY} لحجز زيارة منزلية فورية.`,
      },
      {
        q: "ما هو رقم خدمة عملاء غسالات اطباق البا للإبلاغ عن الأعطال؟",
        a: (
          <p>
            رقم خدمة عملاء غسالات اطباق البا هو{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            . ويمكنك أيضاً مراسلتنا عبر{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              <strong>واتساب</strong>
            </a>{" "}
            لتسجيل بلاغ العطل وتنسيق الزيارة المنزلية.
          </p>
        ),
        aText: `رقم خدمة عملاء غسالات اطباق البا هو ${PHONE_DISPLAY}. يمكنك مراسلتنا عبر واتساب لتسجيل بلاغات الأعطال وتنسيق زيارة منزلية.`,
      },
      {
        q: "هل يوفر توكيل صيانة غسالات اطباق البا قطع غيار أصلية؟",
        a: (
          <p>
            نعم، نلتزم بتوفير وتركيب قطع غيار أصلية مثل الموتور والطلمبة والسخان
            ولوحة التحكم مع ضمان معتمد على كل قطعة. للحجز اتصل{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText:
          "نعم، نوفر قطع غيار أصلية لغسالات اطباق البا مثل الموتور والطلمبة والسخان ولوحة التحكم مع ضمان معتمد على كل قطعة.",
      },
      {
        q: "ماذا أفعل إذا كانت غسالة اطباق البا لا تسحب مياه؟",
        a: (
          <p>
            قد يكون السبب انسداد الفلتر أو عطل في صمام الدخول. اطلب فني فوراً
            عبر رقم الصيانة{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لفحص الوصلات والطلمبة وإعادة التشغيل بأمان.
          </p>
        ),
        aText: `قد يكون السبب انسداد الفلتر أو عطل في صمام الدخول. اطلب فني عبر رقم الصيانة ${PHONE_DISPLAY} لفحص الوصلات وإعادة التشغيل.`,
      },
      {
        q: "ما هو حل مشكلة غسالة اطباق البا لا تصرف المياه؟",
        a: (
          <p>
            السبب غالباً انسداد في الفلتر أو عطل في طلمبة الطرد. تواصل معنا
            لحجز زيارة منزلية عبر{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `عدم صرف المياه غالباً بسبب انسداد الفلتر أو عطل طلمبة الطرد. اتصل على ${PHONE_DISPLAY} لحجز فني بالمنزل.`,
      },
      {
        q: "لماذا غسالة اطباق البا لا تسخن المياه أو لا تجفف الأطباق؟",
        a: (
          <p>
            يشير ذلك غالباً لعطل في السخان <strong>(Heater)</strong> أو حساس
            الحرارة. نوفر فنيين متخصصين لفحص الدائرة الكهربائية واستبدال الأجزاء
            التالفة بأخرى أصلية. للحجز اتصل{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `ضعف التسخين أو التجفيف غالباً بسبب عطل السخان أو حساس الحرارة. اتصل ${PHONE_DISPLAY} لفحص الدائرة الكهربائية واستبدال القطع بأخرى أصلية.`,
      },
      {
        q: "كيف أتعامل مع تسريب مياه من غسالة اطباق البا؟",
        a: (
          <p>
            افصل التيار الكهربائي فوراً، وأغلق مصدر المياه إن أمكن، ثم اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              رقم الصيانة <strong>{PHONE_DISPLAY}</strong>
            </a>
            . قد يكون السبب تآكل الجوانات أو مشكلة في الخراطيم الداخلية أو في
            القاعدة السفلية.
          </p>
        ),
        aText: `عند تسريب المياه افصل الكهرباء فوراً واتصل على ${PHONE_DISPLAY}. قد يكون السبب تآكل الجوانات أو مشكلة في الخراطيم الداخلية.`,
      },
      {
        q: "ماذا يعني ظهور كود خطأ غسالة اطباق البا على الشاشة؟",
        a: (
          <p>
            كل كود خطأ مثل <strong>E1</strong> أو <strong>E4</strong> يشير لعطل
            محدد مثل ضعف السحب أو الفيضان. تواصل معنا على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لمعرفة معنى الرمز وخطوات الإصلاح الصحيحة.
          </p>
        ),
        aText: `أكواد الأعطال مثل E1 أو E4 تشير لعطل محدد مثل ضعف السحب أو الفيضان. اتصل ${PHONE_DISPLAY} لمعرفة معنى الكود وطريقة المعالجة الصحيحة.`,
      },
    ],
    []
  );

  const schemaGraph = useMemo(() => {
    const logo =
      "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png";

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: "المركز الرئيسي لصيانة غسالات اطباق البا بلت ان في مصر",
          url: PAGE_URL,
          image: logo,
          logo,
          telephone: PHONE_TEL,
          areaServed: [
            { "@type": "Country", name: "Egypt" },
            { "@type": "City", name: "Cairo" },
            { "@type": "City", name: "Giza" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: PHONE_TEL,
              contactType: "customer service",
              areaServed: "EG",
              availableLanguage: ["ar"],
            },
          ],
          sameAs: [`https://wa.me/${WHATSAPP_WA}`],
          description: metaDescription,
        },
        {
          "@type": "Organization",
          name: "الامريكية جروب",
          url: DOMAIN,
          logo,
          telephone: PHONE_TEL,
          sameAs: [`https://wa.me/${WHATSAPP_WA}`],
        },
        {
          "@type": "WebSite",
          name: "ELBA EGYPT - صيانة البا في مصر",
          url: SITE_URL,
          inLanguage: "ar-EG",
        },
        {
          "@type": "WebPage",
          name: `صيانة غسالات اطباق البا بلت ان | رقم الصيانة ${PHONE_DISPLAY}`,
          url: PAGE_URL,
          inLanguage: "ar-EG",
          isPartOf: { "@type": "WebSite", url: SITE_URL },
          about: { "@type": "Thing", name: "صيانة غسالات اطباق البا بلت ان" },
          description: metaDescription,
        },
        {
          "@type": "Service",
          name: "صيانة غسالات اطباق البا بلت ان",
          serviceType: "Dishwasher Repair Service",
          description:
            "صيانة غسالات اطباق البا بلت ان فورية بالمنزل بضمان معتمد وقطع غيار إيطالية أصلية لجميع موديلات Elba.",
          provider: {
            "@type": "LocalBusiness",
            name: "المركز الرئيسي لصيانة غسالات اطباق البا بلت ان في مصر",
            telephone: PHONE_TEL,
          },
          areaServed: { "@type": "Country", name: "Egypt" },
          availableChannel: {
            "@type": "ServiceChannel",
            servicePhone: {
              "@type": "ContactPoint",
              telephone: PHONE_TEL,
              contactType: "customer service",
            },
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.aText },
          })),
        },
      ],
    };
  }, [faqs, metaDescription]);

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop"
          alt="صيانة غسالات اطباق البا بلت ان"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-cairo leading-tight">
                صيانة غسالات اطباق البا بلت ان في مصر
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 font-cairo">
                صيانة فورية بالمنزل بدون فك المطبخ — ضمان معتمد وقطع غيار
                إيطالية أصلية.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto font-cairo"
                >
                  اطلب صيانة الآن
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_WA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full font-cairo"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-white hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full font-cairo"
                  >
                    <Phone className="w-5 h-5" />
                    {PHONE_DISPLAY}
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70 font-cairo">
                رقم الصيانة:{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    لماذا نعد الخبراء الأوائل في صيانة غسالات اطباق البا بلت ان؟
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-cairo">
                    الأجهزة المدمجة تحتاج خبرة حقيقية لتجنب فك المطبخ أو خدش
                    الرخام أثناء الإصلاح. نوفر فنيين متخصصين في موديلات Elba مع
                    أدوات تشخيص دقيقة لتحديد العطل بسرعة وأمان. احجز الآن على{" "}
                    <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={() => setIsServicePopupOpen(true)}
                      className="gap-2 w-full sm:w-auto font-cairo"
                    >
                      اطلب صيانة
                    </Button>

                    <a
                      href={`https://wa.me/${WHATSAPP_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <MessageCircle className="w-4 h-4" />
                        واتساب
                      </Button>
                    </a>

                    <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        غسالة أطباق إلبا بلت إن
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        خدمة منزلية
                      </span>
                    </div>

                    <img
                      src={dishwasher}
                      alt="غسالة اطباق البا بلت ان"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        onClick={() => setIsServicePopupOpen(true)}
                        className="w-full font-cairo"
                      >
                        طلب
                      </Button>

                      <a
                        href={`https://wa.me/${WHATSAPP_WA}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <MessageCircle className="w-4 h-4" />
                          واتساب
                        </Button>
                      </a>

                      <a href={`tel:${PHONE_TEL}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <Phone className="w-4 h-4" />
                          اتصال
                        </Button>
                      </a>
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground font-cairo">
                      رقم الصيانة:{" "}
                      <span className="font-semibold text-foreground">
                        {PHONE_DISPLAY}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground text-center">
                  {DOMAIN}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    صيانة منزلية بدون فك المطبخ لوحدات الـ Built-in
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-cairo">
                    نوفر معدات سحب وتركيب مخصصة للأجهزة Built-in للحفاظ على وحدات
                    الخشب والرخام. سواء المشكلة في السحب أو الطرد أو التسخين،
                    نصل إليك بورشة متنقلة مجهزة. للحجز اتصل على{" "}
                    <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={() => setIsServicePopupOpen(true)}
                      className="gap-2 w-full sm:w-auto font-cairo"
                    >
                      اطلب صيانة
                    </Button>

                    <a
                      href={`https://wa.me/${WHATSAPP_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <MessageCircle className="w-4 h-4" />
                        واتساب
                      </Button>
                    </a>

                    <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        Built-in
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        بدون فك المطبخ
                      </span>
                    </div>

                    <img
                      src={dishwasher}
                      alt="صيانة غسالة اطباق البا المدمجة"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        onClick={() => setIsServicePopupOpen(true)}
                        className="w-full font-cairo"
                      >
                        طلب
                      </Button>

                      <a
                        href={`https://wa.me/${WHATSAPP_WA}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <MessageCircle className="w-4 h-4" />
                          واتساب
                        </Button>
                      </a>

                      <a href={`tel:${PHONE_TEL}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <Phone className="w-4 h-4" />
                          اتصال
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    قطع غيار إيطالية أصلية مع ضمان معتمد
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-cairo">
                    نلتزم بتركيب قطع غيار أصلية 100% مثل الطلمبة والسخان والبورد
                    والرشاشات لضمان أعلى كفاءة تشغيل وأمان. نقدم ضماناً معتمداً
                    على القطعة وأجور الإصلاح. تواصل واتساب أو اتصل على{" "}
                    <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={() => setIsServicePopupOpen(true)}
                      className="gap-2 w-full sm:w-auto font-cairo"
                    >
                      اطلب صيانة
                    </Button>

                    <a
                      href={`https://wa.me/${WHATSAPP_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <MessageCircle className="w-4 h-4" />
                        واتساب
                      </Button>
                    </a>

                    <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        قطع الغيار
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        أصلية
                      </span>
                    </div>

                    <img
                      src={dishwasher}
                      alt="قطع غيار غسالات اطباق البا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        onClick={() => setIsServicePopupOpen(true)}
                        className="w-full font-cairo"
                      >
                        طلب
                      </Button>

                      <a
                        href={`https://wa.me/${WHATSAPP_WA}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <MessageCircle className="w-4 h-4" />
                          واتساب
                        </Button>
                      </a>

                      <a href={`tel:${PHONE_TEL}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <Phone className="w-4 h-4" />
                          اتصال
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    صيانة جميع الأعطال الشائعة لموديلات 10 و14 فرد
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-cairo">
                    نعالج أعطال عدم السحب، عدم الطرد، ضعف التجفيف، تسريب المياه،
                    وأكواد الأعطال المختلفة. يتم الفحص خطوة بخطوة لتحديد السبب
                    الحقيقي وإنهاء العطل من أول زيارة. احجز الآن على{" "}
                    <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={() => setIsServicePopupOpen(true)}
                      className="gap-2 w-full sm:w-auto font-cairo"
                    >
                      اطلب صيانة
                    </Button>

                    <a
                      href={`https://wa.me/${WHATSAPP_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <MessageCircle className="w-4 h-4" />
                        واتساب
                      </Button>
                    </a>

                    <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        أعطال شائعة
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        فحص شامل
                      </span>
                    </div>

                    <img
                      src={dishwasher}
                      alt="أعطال غسالة اطباق البا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        onClick={() => setIsServicePopupOpen(true)}
                        className="w-full font-cairo"
                      >
                        طلب
                      </Button>

                      <a
                        href={`https://wa.me/${WHATSAPP_WA}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <MessageCircle className="w-4 h-4" />
                          واتساب
                        </Button>
                      </a>

                      <a href={`tel:${PHONE_TEL}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full gap-2 font-cairo"
                        >
                          <Phone className="w-4 h-4" />
                          اتصال
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-cairo text-right">
            دليل الأسئلة الشائعة لخدمات صيانة غسالات أطباق البا
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline font-cairo text-right">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-cairo text-right">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ServiceRequestPopup
        isOpen={isServicePopupOpen}
        onClose={() => setIsServicePopupOpen(false)}
        domain={DOMAIN}
      />
    </Layout>
  );
};

export default DishwasherBuiltinElbaAr;