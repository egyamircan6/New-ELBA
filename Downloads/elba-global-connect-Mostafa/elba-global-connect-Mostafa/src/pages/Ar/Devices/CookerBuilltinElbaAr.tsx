import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import cooker from "@/assest/elba-cookerbuiltin-ar.jpeg";

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

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";

const DOMAIN = "https://elba-eg.com";
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/elba-built-in-cooker-service";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS =
  "text-primary underline font-semibold hover:text-primary/80";

const CookerBuiltinElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة بوتاجاز البا بلت ان في مصر | خدمة منزلية معتمدة | اتصل ${PHONE_DISPLAY}`;
  const metaDescription = `هل تبحث عن صيانة بوتاجاز البا بلت ان في مصر؟ نوفر خدمة منزلية سريعة مع قطع غيار أصلية وضمان معتمد لعلاج أعطال الشعلات والإشعال والفرن وتسريب الغاز. اتصل الآن: ${PHONE_DISPLAY}.`;

  const faqs = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة بوتاجاز البا بلت ان المعتمد في مصر؟",
        a: (
          <p>
            رقم صيانة بوتاجاز البا بلت ان المعتمد هو{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            . نوفر حجز سريع للصيانة المنزلية مع فنيين متخصصين في أجهزة Elba
            وقطع غيار أصلية وضمان معتمد.
          </p>
        ),
        aText: `رقم صيانة بوتاجاز البا بلت ان المعتمد في مصر هو ${PHONE_DISPLAY}. نوفر حجز سريع للصيانة المنزلية مع فنيين متخصصين في أجهزة Elba وقطع غيار أصلية وضمان معتمد.`,
      },
      {
        q: "هل يمكن إصلاح بوتاجاز البا بلت ان بالمنزل دون تلف المطبخ؟",
        a: (
          <p>
            نعم، يتم الإصلاح بالمنزل باستخدام أدوات مناسبة للتعامل مع وحدات
            البلت إن دون الإضرار بالرخام أو الخشب أو وحدات المطبخ. للحجز اتصل
            على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `نعم، يمكن إصلاح بوتاجاز البا بلت ان بالمنزل دون تلف المطبخ باستخدام أدوات مناسبة للتعامل مع وحدات البلت إن. للحجز اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "ما سبب ضعف شعلة بوتاجاز البا بلت ان؟",
        a: (
          <p>
            ضعف الشعلة غالباً يكون بسبب انسداد الفونية أو تراكم الدهون أو وجود
            مشكلة في منظم الغاز. للحل الآمن نوفّر فحصاً دقيقاً وتنظيفاً ومعايرة
            للشعلة. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `ضعف شعلة بوتاجاز البا بلت ان غالباً يكون بسبب انسداد الفونية أو تراكم الدهون أو وجود مشكلة في منظم الغاز. نوفر فحصاً دقيقاً وتنظيفاً ومعايرة للشعلة. اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "ماذا أفعل إذا شممت رائحة غاز من البوتاجاز؟",
        a: (
          <p>
            يجب غلق مصدر الغاز فوراً وتهوية المكان وعدم استخدام أي مصدر نار أو
            مفاتيح كهرباء، ثم التواصل فوراً على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لطلب فحص عاجل وآمن.
          </p>
        ),
        aText: `إذا شممت رائحة غاز من البوتاجاز يجب غلق مصدر الغاز فوراً وتهوية المكان وعدم استخدام أي مصدر نار أو مفاتيح كهرباء، ثم التواصل فوراً على ${PHONE_DISPLAY} لطلب فحص عاجل وآمن.`,
      },
      {
        q: "لماذا ينطفئ فرن بوتاجاز البا أثناء التشغيل؟",
        a: (
          <p>
            انطفاء الفرن أثناء التشغيل يكون غالباً بسبب مشكلة في الثرموكوبل أو
            حساس الأمان أو انسداد مجرى الغاز. نوفّر تشخيصاً دقيقاً وإصلاحاً
            معتمداً. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `انطفاء فرن بوتاجاز البا أثناء التشغيل يكون غالباً بسبب مشكلة في الثرموكوبل أو حساس الأمان أو انسداد مجرى الغاز. نوفّر تشخيصاً دقيقاً وإصلاحاً معتمداً. اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "هل توفرون قطع غيار أصلية لبوتاجاز البا بلت ان؟",
        a: (
          <p>
            نعم، نوفر قطع غيار أصلية مطابقة لمواصفات Elba مثل الثرموكوبل،
            المفاتيح، الشعلات، الإشعال الذاتي، وأجزاء الفرن. للحجز أو الاستفسار
            اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `نعم، نوفر قطع غيار أصلية لبوتاجاز البا بلت ان مثل الثرموكوبل والمفاتيح والشعلات والإشعال الذاتي وأجزاء الفرن. للحجز اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "كم مدة ضمان صيانة بوتاجاز البا بلت ان؟",
        a: (
          <p>
            نوفر ضماناً معتمداً على أعمال الصيانة وقطع الغيار المستبدلة، وقد
            يصل إلى 12 شهراً حسب نوع القطعة وطبيعة العطل. للاستفسار اتصل{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `نوفر ضماناً معتمداً على أعمال الصيانة وقطع الغيار المستبدلة، وقد يصل إلى 12 شهراً حسب نوع القطعة وطبيعة العطل. للاستفسار اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "ما الفرق بين قطع الغيار الأصلية وغير الأصلية؟",
        a: (
          <p>
            القطع الأصلية تمنحك أماناً أعلى في تشغيل الغاز، وعمرًا أطول،
            وكفاءةً مستقرة. أما القطع غير الأصلية فقد تسبب ضعف أداء أو أعطالاً
            متكررة أو مخاطر أمان. نحن نستخدم قطعاً أصلية فقط. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            .
          </p>
        ),
        aText: `قطع الغيار الأصلية تمنح أماناً أعلى في تشغيل الغاز وعمرًا أطول وكفاءة مستقرة، بينما القطع غير الأصلية قد تسبب أعطالاً متكررة أو مخاطر أمان. نحن نستخدم قطعاً أصلية فقط. اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "كم تكلفة صيانة بوتاجاز البا بلت ان في 2026؟",
        a: (
          <p>
            تكلفة الصيانة تختلف حسب نوع العطل والموديل والقطعة المطلوبة. تبدأ
            الخدمة بفحص فني وتُخصم قيمة الكشف من الإصلاح في كثير من الحالات.
            لمعرفة تقدير مبدئي اتصل{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            أو تواصل عبر{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              <strong>واتساب</strong>
            </a>
            .
          </p>
        ),
        aText: `تكلفة صيانة بوتاجاز البا بلت ان تختلف حسب نوع العطل والموديل والقطعة المطلوبة. تبدأ الخدمة بفحص فني وتُخصم قيمة الكشف من الإصلاح في كثير من الحالات. لمعرفة تقدير مبدئي اتصل على ${PHONE_DISPLAY} أو تواصل عبر واتساب.`,
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
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "الامريكية جروب - صيانة البا في مصر",
          url: BRAND_URL,
          logo: { "@type": "ImageObject", url: logo },
          sameAs: [`https://wa.me/${WHATSAPP_WA}`],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: PHONE_TEL,
              contactType: "customer service",
              areaServed: "EG",
              availableLanguage: ["ar"],
            },
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}#localbusiness`,
          name: "مركز صيانة بوتاجاز البا بلت ان المعتمد في مصر",
          url: PAGE_URL,
          image: logo,
          telephone: PHONE_TEL,
          areaServed: [{ "@type": "Country", name: "Egypt" }],
          address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
          },
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
          sameAs: [`https://wa.me/${WHATSAPP_WA}`, BRAND_URL],
          description: metaDescription,
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          url: SITE_URL,
          name: "صيانة البا في مصر",
          inLanguage: "ar",
          publisher: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: metaTitle,
          description: metaDescription,
          inLanguage: "ar",
          isPartOf: { "@id": `${SITE_URL}#website` },
          publisher: { "@id": `${SITE_URL}#organization` },
          about: [
            { "@type": "Thing", name: "صيانة بوتاجاز البا بلت ان" },
            { "@type": "Thing", name: "إصلاح بوتاجاز البا" },
            { "@type": "Thing", name: "قطع غيار البا الأصلية" },
          ],
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "صيانة بوتاجاز البا بلت ان في مصر",
          serviceType: "Cooker Repair Service",
          provider: { "@id": `${SITE_URL}#localbusiness` },
          areaServed: { "@type": "Country", name: "Egypt" },
          availableChannel: [
            {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: PHONE_TEL,
                contactType: "customer service",
              },
            },
            {
              "@type": "ServiceChannel",
              serviceUrl: `https://wa.me/${WHATSAPP_WA}`,
            },
          ],
          description:
            "صيانة بوتاجاز البا بلت ان بالمنزل في مصر مع قطع غيار أصلية وضمان معتمد. تشمل أعطال الشعلات والإشعال الذاتي والفرن وروائح الغاز وفحص الأمان الكامل.",
        },
        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.aText },
          })),
        },
      ],
    };
  }, [faqs, metaTitle, metaDescription]);

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
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=700&fit=crop"
          alt="صيانة بوتاجاز البا بلت ان"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 mb-2 font-cairo">
                خدمة منزلية
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight lg:leading-[5rem] font-cairo">
                أهلاً بك في صيانة بوتاجاز البا بلت ان المعتمدة في مصر
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 font-cairo">
                صيانة منزلية سريعة — قطع غيار أصلية وضمان معتمد للحفاظ على أمان
                الغاز وكفاءة التشغيل.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className={cn(
                    "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                    "text-base md:text-lg px-7 md:px-8 w-full sm:w-auto font-cairo"
                  )}
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
                    size="lg"
                    variant="outline"
                    className={cn(
                      "border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2",
                      "text-base md:text-lg px-7 md:px-8 w-full font-cairo"
                    )}
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className={cn(
                      "border-white/80 text-black hover:bg-white hover:text-foreground gap-2",
                      "text-base md:text-lg px-7 md:px-8 w-full font-cairo"
                    )}
                  >
                    <Phone className="w-5 h-5" />
                    اتصال
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70 font-cairo">
                رقم الخدمة:{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections like EN but static */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    لماذا تختارنا في صيانة بوتاجاز البا بلت ان؟
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      أجهزة البلت إن تحتاج إلى خبرة حقيقية للحفاظ على تشطيب
                      المطبخ وضمان أمان تشغيل الغاز. نحن نوفر صيانة منزلية
                      معتمدة، تشخيصاً دقيقاً، وقطع غيار أصلية مطابقة لمواصفات
                      Elba. اتصل الآن على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>
                      .
                    </p>
                  </div>

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

                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    رقم الخدمة:{" "}
                    <span className="font-semibold text-foreground">
                      {PHONE_DISPLAY}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        بوتاجاز البا بلت ان
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        معتمد
                      </span>
                    </div>

                    <img
                      src={cooker}
                      alt="صيانة بوتاجاز البا بلت ان"
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
                      رقم الخدمة:{" "}
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

            {/* Section 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 font-cairo text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    صيانة منزلية سريعة مع الحفاظ على وحدات المطبخ
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      يتعامل الفنيون لدينا مع وحدات البلت إن باحترافية كاملة دون
                      الإضرار بالخشب أو الرخام أو سطح المطبخ. نقوم بفحص الإشعال
                      الذاتي، الشعلات، الفرن، حساسات الأمان، والتوصيلات باستخدام
                      أدوات دقيقة. اتصل الآن على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>
                      .
                    </p>
                  </div>

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

                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    رقم الخدمة:{" "}
                    <span className="font-semibold text-foreground">
                      {PHONE_DISPLAY}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        خدمة منزلية
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        بالمنزل
                      </span>
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop"
                      alt="صيانة منزلية بوتاجاز البا بلت ان"
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
                      رقم الخدمة:{" "}
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

            {/* Section 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    قطع غيار أصلية 100% مع ضمان معتمد
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      نوفر{" "}
                      <strong>قطع غيار أصلية مستوردة</strong> مطابقة لمواصفات
                      Elba مثل الثرموكوبل، أجزاء الإشعال، المفاتيح، الفونيات،
                      وأجزاء الفرن. كل عملية إصلاح تشمل ضماناً معتمداً على العمل
                      والقطع المستبدلة. اتصل الآن على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>
                      .
                    </p>
                  </div>

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

                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    رقم الخدمة:{" "}
                    <span className="font-semibold text-foreground">
                      {PHONE_DISPLAY}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        قطع الغيار والضمان
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        أصلية
                      </span>
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=900&fit=crop"
                      alt="قطع غيار أصلية وضمان معتمد"
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
                      رقم الخدمة:{" "}
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

            {/* Section 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 font-cairo text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    حلول أعطال الشعلات والإشعال والفرن وتسريب الغاز
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      نعالج ضعف اللهب، عدم الاشتعال، انطفاء الفرن أثناء التشغيل،
                      ومشكلات تسريب الغاز مع إجراء فحص كامل لعناصر الأمان
                      والمعايرة. في حال وجود رائحة غاز، أغلق المصدر فوراً وقم
                      بتهوية المكان ثم اتصل سريعاً على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>
                      .
                    </p>
                  </div>

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

                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 w-full font-cairo"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال
                      </Button>
                    </a>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    رقم الخدمة:{" "}
                    <span className="font-semibold text-foreground">
                      {PHONE_DISPLAY}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        فحص الأمان
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        أمان الغاز
                      </span>
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&h=900&fit=crop"
                      alt="فحص أمان بوتاجاز البا بلت ان"
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
                      رقم الخدمة:{" "}
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-cairo text-right">
            الأسئلة الشائعة — صيانة بوتاجاز البا بلت ان
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-medium hover:no-underline text-right font-cairo">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-right font-cairo">
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

export default CookerBuiltinElbaAr;