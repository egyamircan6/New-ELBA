import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";
import dish from "@/assest/elba-dishwasher-ar.jpeg";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA_ME = "201211114528";

const DEVICE_NAME = "غسالة أطباق إلبا";
const DEVICE_CATEGORY = "dishwasher";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop";
const DEVICE_IMAGE = dish;

const DEVICE_DESC =
  "نقدم خدمة صيانة شاملة لجميع موديلات غسالات أطباق إلبا سواء البلت إن أو القائم. فريقنا المعتمد يشخص الأعطال بدقة ويصلح مشاكل عدم سحب المياه، التسريب، ضعف التجفيف، وأكواد الأعطال مع قطع غيار أصلية وضمان معتمد.";

const DEVICE_TIPS = [
  "نظّف الفلاتر أسبوعيًا لتجنب انسداد الطلمبة وضعف السحب.",
  "استخدم ملح الغسالات ومساعد الشطف بانتظام لتحسين التجفيف وتقليل الترسبات.",
  "افحص الخرطوم وصمام دخول المياه دوريًا لتجنب التسريب أو ضعف السحب.",
  "نظّف الرشاشات من الترسبات لضمان توزيع مياه قوي وتنظيف أفضل.",
];

const SEO_META_TITLE = "أفضل مركز للصيانة غسالات اطباق البا| اطلــب الان";
const SEO_META_DESCRIPTION =
  "هل تعاني من أعطال غسالة اطباق البا؟ الأمريكية جروب توفر صيانة غسالات اطباق البا فورية بالمنزل بضمان معتمد وقطع غيار إيطالية أصلية. احجز موعدك الآن: 01211114528.";
const SEO_H1 = "أفضل خدمة صيانة غسالات اطباق البا في مصر | إصلاح فوري بالمنزل";

type FAQItem = {
  q: string;
  a: React.ReactNode;
  aText: string;
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
      >
        <span className="text-lg font-bold text-foreground">{question}</span>
        <span
          className={`text-2xl font-bold text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-muted-foreground text-lg leading-relaxed space-y-3 text-right">
          {answer}
        </div>
      )}
    </div>
  );
};

const DishwasherElbaAr = () => {
  const { t, isRTL, localePath } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        q: "إيه هو رقم صيانة غسالات اطباق البا المعتمد في مصر؟",
        a: (
          <p>
            رقم <strong>صيانة غسالات اطباق البا</strong> المعتمد هو{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-primary underline font-semibold"
            >
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            . توفر{" "}
            <a
              href="https://americangroup-eg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              <strong>الامريكية جروب</strong>
            </a>{" "}
            دعم فني متخصصة لإصلاح كافة موديلات غسالات الأطباق بالمنزل مع ضمان
            وتركيب قطع غيار أصلية.
          </p>
        ),
        aText:
          "رقم صيانة غسالات اطباق البا المعتمد هو 01211114528. توفر الامريكية جروب دعم فني متخصصة لإصلاح كافة موديلات غسالات الأطباق بالمنزل مع ضمان وتركيب قطع غيار أصلية.",
      },
      {
        q: "ما هو حل مشكلة غسالة اطباق البا لا تسحب المياه؟",
        a: (
          <p>
            حل مشكلة عدم سحب المياه يتطلب فحص صمام الدخول{" "}
            <strong>(Inlet Valve)</strong> أو التأكد من سلامة وصلات الخرطوم.
            احجز فني صيانة عبر الرقم <strong>{PHONE_DISPLAY}</strong> لفحص
            الطلمبة والحساسات وإعادة التشغيل فوراً.
          </p>
        ),
        aText:
          "حل مشكلة عدم سحب المياه يتطلب فحص صمام الدخول أو سلامة الخرطوم. اتصل على 01211114528 لفحص الطلمبة والحساسات وإعادة التشغيل فوراً.",
      },
      {
        q: "إيه سبب ظهور رمز الخطأ E4 في غسالة اطباق البا؟",
        a: (
          <p>
            يرمز كود <strong>E4</strong> إلى <strong>تسريب مياه</strong> أو
            فيضان داخل قاعدة الغسالة. احجز موعد فني لتحديد مصدر التسريب وإصلاحه
            عبر{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-primary underline font-semibold"
            >
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText:
          "كود E4 يشير غالباً إلى تسريب مياه أو فيضان داخل قاعدة الغسالة. اتصل على 01211114528 لحجز فني لتحديد مصدر التسريب وإصلاحه.",
      },
      {
        q: "هل يتم تصليح غسالة اطباق البا بلت ان دون فك المطبخ؟",
        a: (
          <p>
            نعم، نحن متخصصون في صيانة الغسالات المدمجة{" "}
            <strong>(Built-in)</strong> داخل المنزل دون تلفيات. للحجز اتصل{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-primary underline font-semibold"
            >
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText:
          "نعم، يتم تصليح غسالة اطباق البا بلت ان داخل المنزل غالباً دون فك المطبخ. للحجز اتصل 01211114528.",
      },
      {
        q: "لماذا لا تقوم غسالة اطباق البا بتجفيف الأطباق جيداً؟",
        a: (
          <p>
            ضعف التجفيف غالباً بسبب نفاد مساعد الشطف <strong>(Rinse Aid)</strong>{" "}
            أو عطل في السخان <strong>(Heater)</strong>. تواصل معنا لفحص الدائرة
            وتوفير القطع الأصلية عبر الرقم <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
        aText:
          "ضعف التجفيف غالباً بسبب نفاد مساعد الشطف أو عطل السخان. اتصل 01211114528 لفحص الدائرة وتوفير القطع الأصلية.",
      },
      {
        q: "ألاقي فين قطع غيار غسالة اطباق البا الأصلية في القاهرة؟",
        a: (
          <p>
            تتوفر قطع الغيار الأصلية مثل الطلمبات والرشاشات والبوردات لدى
            مركزنا. لضمان تركيب قطعة أصلية بضمان، تواصل على{" "}
            <strong>{PHONE_DISPLAY}</strong> أو واتساب{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA_ME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              <strong>من هنا</strong>
            </a>
            .
          </p>
        ),
        aText:
          "تتوفر قطع الغيار الأصلية لدى مركزنا مثل الطلمبات والرشاشات والبوردات. تواصل على 01211114528 أو واتساب للحصول على قطعة أصلية بضمان.",
      },
      {
        q: "كم مدة ضمان صيانة غسالات اطباق البا لدى الأمريكية جروب؟",
        a: (
          <p>
            نمنحك ضماناً معتمداً يصل إلى <strong>12 شهراً</strong> على أعمال
            الصيانة وقطع الغيار المستبدلة. للاستفسار اتصل{" "}
            <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
        aText:
          "نمنحك ضماناً معتمداً يصل إلى 12 شهراً على أعمال الصيانة وقطع الغيار المستبدلة. للاستفسار اتصل 01211114528.",
      },
      {
        q: "إيه سبب إصدار غسالة اطباق البا لصوت عالي أثناء التشغيل؟",
        a: (
          <p>
            الصوت العالي ينتج غالباً عن تآكل بلي الموتور أو انسداد الرشاشات.
            احجز فني لتشخيص الصوت وتغيير القطع التالفة بالمنزل عبر{" "}
            <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
        aText:
          "الصوت العالي ينتج غالباً عن تآكل بلي الموتور أو انسداد الرشاشات. اتصل 01211114528 لتشخيص الصوت وتغيير القطع التالفة بالمنزل.",
      },
      {
        q: "إزاي أكلم خدمة عملاء البا لحجز موعد صيانة دورية؟",
        a: (
          <p>
            تواصل مباشرة على رقم الصيانة الموحد{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-primary underline font-semibold"
            >
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لتحديد ميعاد صيانة دورية وتنظيف وقائي لتجنب الأعطال المفاجئة.
          </p>
        ),
        aText:
          "يمكنك التواصل على رقم الصيانة الموحد 01211114528 لحجز موعد صيانة دورية وتنظيف وقائي لتجنب الأعطال المفاجئة.",
      },
      {
        q: "أسعار صيانة غسالات اطباق البا 2026 بكام؟",
        a: (
          <p>
            الأسعار بتختلف حسب العطل والموديل. تكلفة الكشف تُخصم من قيمة
            الإصلاح. للحصول على تقدير سريع، تواصل على{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA_ME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold"
            >
              <strong>واتساب</strong>
            </a>{" "}
            أو اتصل <strong>{PHONE_DISPLAY}</strong>.
          </p>
        ),
        aText:
          "الأسعار تختلف حسب العطل والموديل، وتكلفة الكشف تُخصم من الإصلاح. تواصل واتساب أو اتصل 01211114528 للحصول على تقدير سريع.",
      },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "صيانة غسالات اطباق البا",
          serviceType: "Dishwasher Repair Service",
          description:
            "أفضل خدمة صيانة غسالات اطباق البا في مصر. إصلاح فوري بالمنزل بقطع غيار أصلية وضمان معتمد لجميع موديلات Elba.",
          provider: {
            "@type": "LocalBusiness",
            name: "الامريكية جروب",
            telephone: PHONE_DISPLAY,
            areaServed: { "@type": "Country", name: "Egypt" },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "210",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.aText,
            },
          })),
        },
      ],
    };
  }, [faqs]);

  if (!DEVICE_NAME) {
    return (
      <Layout>
        <SEOHead title="الجهاز غير موجود" />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">الجهاز غير موجود</h1>
          <Link to={localePath("/صيانة-اجهزة-البا")}>
            <Button>العودة للأجهزة</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const steps = [
    {
      num: "01",
      title: t("device.steps.1.title"),
      desc: t("device.steps.1.desc"),
    },
    {
      num: "02",
      title: t("device.steps.2.title"),
      desc: t("device.steps.2.desc"),
    },
    {
      num: "03",
      title: t("device.steps.3.title"),
      desc: t("device.steps.3.desc"),
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{SEO_META_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={SEO_META_DESCRIPTION} />
        <link
          rel="canonical"
          href="https://alba-eg.com/صيانة-غسالة-اطباق-البا"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <SEOHead title={SEO_META_TITLE} description={SEO_META_DESCRIPTION} />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt={DEVICE_NAME}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2">
                خدمات عند المنزل
              </p>

              <h1
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight",
                  isRTL ? "font-cairo" : "font-sans"
                )}
              >
                {SEO_H1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                احجز صيانة {DEVICE_NAME} الآن — خدمة احترافية بالمنزل مع قطع غيار
                أصلية وضمان معتمد.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className={cn(
                    "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto",
                    isRTL ? "font-cairo" : "font-sans"
                  )}
                >
                  {t("hero.cta.request")}
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_WA_ME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className={cn(
                      "border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full",
                      isRTL ? "font-cairo" : "font-sans"
                    )}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className={cn(
                      "border-white/80 text-white hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full",
                      isRTL ? "font-cairo" : "font-sans"
                    )}
                  >
                    <Phone className="w-5 h-5" />
                    {PHONE_DISPLAY}
                  </Button>
                </a>
              </div>

              <div
                className={cn(
                  "mt-6 text-sm text-white/70",
                  isRTL ? "font-cairo" : "font-sans"
                )}
              >
                رقم الصيانة:{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2
            className={cn(
              "text-2xl md:text-3xl font-bold text-center mb-12 text-foreground",
              isRTL ? "font-cairo" : "font-sans"
            )}
          >
            {t("device.steps.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-md hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {step.num}
                  </span>
                </div>
                <h3
                  className={cn(
                    "font-bold text-lg mb-2 text-foreground",
                    isRTL ? "font-cairo" : "font-sans"
                  )}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device info */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2
            className={cn(
              "text-2xl md:text-3xl font-bold text-center mb-10 text-foreground",
              isRTL ? "font-cairo" : "font-sans"
            )}
          >
            خدمة صيانة {DEVICE_NAME}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 order-1">
              <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
                <p
                  className={cn(
                    "text-muted-foreground leading-relaxed mb-8",
                    isRTL ? "font-cairo" : "font-sans"
                  )}
                >
                  {DEVICE_DESC}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsServicePopupOpen(true)}
                    className={cn(
                      "bg-primary hover:bg-primary/90 gap-2",
                      isRTL ? "font-cairo" : "font-sans"
                    )}
                  >
                    {t("hero.cta.request")}
                  </Button>

                  <a
                    href={`https://wa.me/${WHATSAPP_WA_ME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className={cn(
                        "gap-2",
                        isRTL ? "font-cairo" : "font-sans"
                      )}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t("contact.whatsapp")}
                    </Button>
                  </a>

                  <a href={`tel:${PHONE_TEL}`}>
                    <Button
                      size="lg"
                      variant="outline"
                      className={cn(
                        "gap-2",
                        isRTL ? "font-cairo" : "font-sans"
                      )}
                    >
                      <Phone className="w-5 h-5" />
                      {PHONE_DISPLAY}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-2">
              <div className="lg:sticky lg:top-24">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p
                        className={cn(
                          "text-sm text-muted-foreground",
                          isRTL ? "font-cairo" : "font-sans"
                        )}
                      >
                        {DEVICE_NAME}
                      </p>
                      <span
                        className={cn(
                          "text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium",
                          isRTL ? "font-cairo" : "font-sans"
                        )}
                      >
                        خدمة منزلية
                      </span>
                    </div>

                    <img
                      src={DEVICE_IMAGE}
                      alt={DEVICE_NAME}
                      className="w-full rounded-xl shadow-sm object-cover"
                    />

                    <div className="flex gap-1 mt-4 justify-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-yellow-500 text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-2">
                      https://www.elba-eg.com
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => setIsServicePopupOpen(true)}
                        className={cn(
                          "w-full",
                          isRTL ? "font-cairo" : "font-sans"
                        )}
                      >
                        {t("hero.cta.request")}
                      </Button>

                      <a
                        href={`https://wa.me/${WHATSAPP_WA_ME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full gap-2",
                            isRTL ? "font-cairo" : "font-sans"
                          )}
                        >
                          <MessageCircle className="w-4 h-4" />
                          {t("contact.whatsapp")}
                        </Button>
                      </a>
                    </div>

                    <div
                      className={cn(
                        "mt-4 text-sm text-muted-foreground",
                        isRTL ? "font-cairo" : "font-sans"
                      )}
                    >
                      رقم الصيانة:{" "}
                      <span className="font-semibold text-foreground">
                        {PHONE_DISPLAY}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Static sections بدل data object */}
          <div className="space-y-12 mt-12">
            <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-cairo text-right">
                لماذا تختارنا في صيانة غسالات أطباق إلبا؟
              </h2>
              <p className="text-muted-foreground leading-relaxed font-cairo text-right">
                لأننا نوفر تشخيصًا دقيقًا، وفنيين متخصصين، وخدمة منزلية سريعة
                لجميع موديلات غسالات أطباق إلبا. نعالج مشكلات السحب والطرد
                والتسريب وضعف التجفيف وأكواد الأعطال مع استخدام قطع غيار أصلية
                وضمان واضح على الإصلاح.
              </p>
            </div>

            <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-cairo text-right">
                صيانة غسالات أطباق إلبا بالمنزل بدون تعقيد
              </h2>
              <p className="text-muted-foreground leading-relaxed font-cairo text-right">
                نوفر زيارة منزلية منظمة وسريعة، مع فحص شامل لمصدر العطل قبل
                الاستبدال أو الإصلاح. في موديلات البلت إن نهتم بالحفاظ على
                المطبخ والرخام والوصلات أثناء العمل، وننجز أكبر قدر ممكن من
                الإصلاح في نفس الزيارة.
              </p>
            </div>

            <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-cairo text-right">
                متى تحتاج غسالة أطباق إلبا إلى تدخل فني؟
              </h2>
              <p className="text-muted-foreground leading-relaxed font-cairo text-right">
                تحتاج إلى تدخل فني عند ظهور تسريب مياه، أو عدم سحب أو صرف
                المياه، أو توقف التسخين، أو ضعف التجفيف، أو ظهور كود خطأ على
                الشاشة، أو صدور صوت غير طبيعي أثناء التشغيل. في هذه الحالات
                يفضل عدم الاستمرار في الاستخدام والتواصل فورًا مع مركز الصيانة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-foreground to-foreground/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-xl">
            <h2
              className={cn(
                "text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2",
                isRTL ? "font-cairo" : "font-sans"
              )}
            >
              💡 {t("device.tips.title")} {DEVICE_NAME}
            </h2>

            <ul className="space-y-4 mb-8">
              {DEVICE_TIPS.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <p className="text-muted-foreground leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-6 font-medium">
              {t("device.tips.cta")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className={cn(
                  "bg-primary hover:bg-primary/90 gap-2",
                  isRTL ? "font-cairo" : "font-sans"
                )}
              >
                {t("hero.cta.request")}
              </Button>

              <a
                href={`https://wa.me/${WHATSAPP_WA_ME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "gap-2",
                    isRTL ? "font-cairo" : "font-sans"
                  )}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("contact.whatsapp")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className={cn(
                "text-2xl md:text-3xl font-extrabold text-foreground mb-8 text-right",
                isRTL ? "font-cairo" : "font-sans"
              )}
            >
              الأسئلة الشائعة حول صيانة غسالات اطباق البا
            </h2>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <FaqItem key={i} question={f.q} answer={f.a} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a href={`tel:${PHONE_TEL}`}>
                <Button
                  variant="outline"
                  className={cn(
                    "gap-2 w-full sm:w-auto",
                    isRTL ? "font-cairo" : "font-sans"
                  )}
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </Button>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_WA_ME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={cn(
                    "gap-2 w-full sm:w-auto",
                    isRTL ? "font-cairo" : "font-sans"
                  )}
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </Button>
              </a>

              <Button
                onClick={() => setIsServicePopupOpen(true)}
                className={cn(
                  "w-full sm:w-auto",
                  isRTL ? "font-cairo" : "font-sans"
                )}
              >
                {t("hero.cta.request")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceRequestPopup
        isOpen={isServicePopupOpen}
        onClose={() => setIsServicePopupOpen(false)}
        domain="https://elba-eg.com"
      />
    </Layout>
  );
};

export default DishwasherElbaAr;