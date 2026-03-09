import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import hoodImg from "@/assest/elba-hood-ar.jpeg";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
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
const PAGE_URL = "https://alba-eg.com/صيانة-شفاط-البا-بلت-ان";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

const HoodBuiltinElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `وكيل صيانة شفاطات بلت ان قريب منك - تصليح شفاط البا | اتصل ${PHONE_DISPLAY}`;
  const metaDescription = `هل تبحث عن فني صيانة شفاطات بلت ان؟ نوفر صيانة شفاط البا وتصليح التاتش وتغيير المواتير بالمنزل. نصلك في التجمع، زايد، والقاهرة خلال 24 ساعة. اتصل بـ ${PHONE_DISPLAY}.`;

  const introH1 = "مرحــــباً بك في مركز صيانة شفاط البا بلت ان المعتمد";

  const faqs = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة شفاط البا بلت ان المعتمد في مصر؟",
        a: (
          <p>
            رقم صيانة شفاط البا بلت ان المعتمد هو{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لحجز صيانة منزلية فورية لموديلات 90 سم و60 سم، مع قطع غيار أصلية
            وضمان. ويمكنك التواصل عبر{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              واتساب
            </a>
            .
          </p>
        ),
        aText: `رقم صيانة شفاط البا بلت ان المعتمد هو ${PHONE_DISPLAY} لحجز صيانة منزلية فورية لموديلات 90 سم و60 سم مع قطع غيار أصلية وضمان. يمكنك التواصل أيضًا عبر واتساب.`,
      },
      {
        q: "الشفاط يعمل لكن لا يسحب الأبخرة، ما السبب؟",
        a: (
          <p>
            غالباً السبب انسداد <strong>الفلاتر</strong> أو تراكم الدهون في{" "}
            <strong>مسارات الهواء</strong>. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لتنظيف عميق وفحص قوة سحب الموتور.
          </p>
        ),
        aText: `الشفاط يعمل لكن لا يسحب الأبخرة غالباً بسبب انسداد الفلاتر أو تراكم الدهون في مسارات الهواء. اتصل على ${PHONE_DISPLAY} لتنظيف عميق وفحص قوة السحب.`,
      },
      {
        q: "هل يمكن تصليح تاتش شفاط البا بلت ان في المنزل؟",
        a: (
          <p>
            نعم، نوفر تصليح <strong>التاتش</strong> وصيانة لوحة التحكم الرقمية
            بالمنزل بأجهزة فحص دقيقة لتجنب تغيير البوردة بالكامل. للحجز اتصل
            على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `نعم يمكن تصليح تاتش شفاط البا بلت ان في المنزل بأجهزة فحص دقيقة. اتصل على ${PHONE_DISPLAY} للحجز.`,
      },
      {
        q: "هل صيانة شفاط البا 90 سم تختلف عن 60 سم؟",
        a: (
          <p>
            نعم، موديل <strong>90 سم</strong> غالباً يحتاج فحص مسارات طرد أكبر
            وقدرة سحب أعلى، بينما <strong>60 سم</strong> يركز على كفاءة مروحة
            أصغر وتبريد أفضل داخل مساحة مدمجة. للحجز اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `نعم صيانة 90 سم تختلف عن 60 سم حسب قدرة السحب ومسارات الطرد. اتصل على ${PHONE_DISPLAY} لتحديد الموديل وإرسال فني مناسب.`,
      },
      {
        q: "كيف يتم تنظيف شفاط البا البلت ان من الداخل بعمق؟",
        a: (
          <p>
            نقوم بتنظيف “ديتيلنج” لإزالة الزيوت المتجمدة من الفلاتر وحوض الموتور
            بمواد آمنة، ثم فحص العزل والوصلات لتجنب حدوث ماس كهربائي. اطلب
            الخدمة عبر{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `يتم تنظيف شفاط البا البلت ان من الداخل بإزالة الدهون والزيوت من الفلاتر وحوض الموتور بمواد آمنة مع فحص العزل والوصلات. اتصل على ${PHONE_DISPLAY} لطلب الخدمة.`,
      },
      {
        q: "هل تتوفر قطع غيار أصلية لشفاطات البا القديمة والحديثة؟",
        a: (
          <p>
            نعم، نوفر المواتير والفلاتر ولمبات الليد ولوحات التحكم حسب الموديل.
            لطلب قطعة غيار أصلية مع تركيب وضمان اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `نعم تتوفر قطع غيار أصلية لشفاطات البا القديمة والحديثة مثل المواتير والفلاتر ولمبات الليد ولوحات التحكم حسب الموديل. اتصل على ${PHONE_DISPLAY} لطلب القطعة مع تركيب وضمان.`,
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
          name: "الشركة الأمريكية جروب - صيانة البا في مصر",
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
          name: "المركز المعتمد لصيانة شفاط البا بلت ان في مصر",
          url: PAGE_URL,
          image: logo,
          telephone: PHONE_TEL,
          areaServed: [
            { "@type": "Country", name: "Egypt" },
            { "@type": "City", name: "Cairo" },
            { "@type": "City", name: "Giza" },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
            addressRegion: "Cairo & Giza",
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
          inLanguage: "ar-EG",
          publisher: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: metaTitle,
          description: metaDescription,
          inLanguage: "ar-EG",
          isPartOf: { "@id": `${SITE_URL}#website` },
          publisher: { "@id": `${SITE_URL}#organization` },
          about: [
            { "@type": "Thing", name: "صيانة شفاط البا بلت ان" },
            { "@type": "Thing", name: "تصليح شفاط البا" },
            { "@type": "Thing", name: "قطع غيار شفاطات البا" },
          ],
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "صيانة شفاط البا بلت ان (Elba) في مصر",
          serviceType: "Hood Repair Service",
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
            "خدمة صيانة شفاط البا بلت ان تشمل إصلاح ضعف الشفط، أعطال الموتور، تصليح التاتش، تغيير الفلاتر وتنظيف داخلي عميق، مع قطع غيار أصلية وضمان.",
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
          alt="صيانة شفاط البا بلت ان"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl font-cairo">
              <p className="text-sm md:text-base text-white/70 mb-2">
                خدمات عند المنزل
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {introH1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                تصليح التاتش، تغيير الموتور، تنظيف الفلاتر — خدمة منزلية سريعة
                لشفاطات Elba Built-in مع ضمان معتمد.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto"
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
                    className="border-white/80 text-green-500 hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-white hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    اتصال
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70">
                رقم الخدمة:{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    لماذا تختارنا لصيانة شفاط البا بلت ان؟
                  </h2>

                  <div className="text-muted-foreground leading-relaxed">
                    شفاطات <strong>Elba Built-in</strong> جزء أساسي من مطبخك،
                    وصيانتها تحتاج دقة لأن الجهاز يكون داخل وحدة مدمجة. نحن
                    نوفر لك خدمة{" "}
                    <a
                      href={PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      صيانة شفاط البا بلت ان
                    </a>{" "}
                    بقطع غيار أصلية وفنيين متخصصين، مع سرعة استجابة عالية عبر{" "}
                    <a
                      href={BRAND_URL}
                      target="_blank"
                      rel="noreferrer"
                      className={LINK_CLASS}
                    >
                      الشركة الأمريكية جروب
                    </a>
                    . كما يمكنك زيارة{" "}
                    <a
                      href="https://alba-eg.com/صيانة-أجهزة-elba"
                      target="_blank"
                      rel="noreferrer"
                      className={LINK_CLASS}
                    >
                      صيانة أجهزة Elba
                    </a>{" "}
                    لمعرفة باقي خدمات الأجهزة.
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
                        شفاط إلبا بلت إن (Elba Hood Built-in)
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        بالمنزل
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="شفاط إلبا بلت إن"
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
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    فني صيانة شفاطات بلت إن قريب منك في القاهرة والجيزة
                  </h2>

                  <div className="text-muted-foreground leading-relaxed">
                    لو أنت في القاهرة أو الجيزة وتحتاج صيانة سريعة دون نقل
                    الشفاط، نوفر فني متخصص يصل لمنطقتك مثل التجمع والشيخ زايد
                    والمعادي ومدينة نصر. الفني يقوم بفحص{" "}
                    <strong>الموتور</strong> و<strong>الفلاتر</strong> و
                    <strong>مسارات الهواء</strong> والتأكد من عدم وجود انسداد أو
                    ضعف سحب. للحجز اتصل الآن على{" "}
                    <a
                      href="https://alba-eg.com/رقم-صيانة-البا"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      رقم صيانة البا {PHONE_DISPLAY}
                    </a>{" "}
                    أو تواصل عبر{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      الواتساب
                    </a>
                    .
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
                        خدمة منزلية
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        قريب منك
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="فني صيانة شفاط البا"
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

            {/* Section 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    تخصص دقيق في موديلات 90 سم و60 سم
                  </h2>

                  <div className="text-muted-foreground leading-relaxed">
                    نوفر صيانة دقيقة لموديلات <strong>شفاط البا 90 سم</strong>{" "}
                    للمطابخ الكبيرة لضمان أعلى قوة شفط، وكذلك موديلات{" "}
                    <strong>60 سم</strong> التي تحتاج ضبط أدق للدوائر الكهربائية
                    وكفاءة المروحة داخل المساحات المدمجة. نقوم بفحص كامل للموتور
                    والمكثف وقياس كفاءة السحب قبل وبعد الصيانة.
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
                        موديلات متعددة
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        90 سم / 60 سم
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="شفاط البا 90 سم و60 سم"
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

            {/* Section 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    تغيير موتور شفاط البا إيطالي أصلي بضمان
                  </h2>

                  <div className="text-muted-foreground leading-relaxed">
                    لو الشفاط توقف أو الصوت أصبح مرتفعًا بشكل غير طبيعي، غالباً
                    المشكلة في <strong>الموتور</strong> أو{" "}
                    <strong>المكثف</strong>. نحن نوفر تغيير موتور بموتور إيطالي
                    أصلي مطابق للموديل مع اختبار السرعات ومستوى الصوت وتقديم{" "}
                    <strong>ضمان معتمد</strong>. للحجز السريع اتصل على{" "}
                    <strong>{PHONE_DISPLAY}</strong>.
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
                        موتور أصلي
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        ضمان
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="تغيير موتور شفاط البا"
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

            {/* Section 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    تنظيف وتغيير فلاتر الكربون وإزالة الدهون بعمق
                  </h2>

                  <div className="text-muted-foreground leading-relaxed">
                    ضعف الشفط والروائح غالباً سببه انسداد{" "}
                    <strong>فلتر الكربون</strong> وتراكم الدهون داخل مسارات
                    الهواء. نوفر تنظيف داخلي عميق بمواد آمنة، واستبدال الفلاتر
                    الأصلية عند الحاجة لتقليل الحمل على الموتور وإطالة عمره.
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
                        تنظيف داخلي
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        فلاتر كربون
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="تنظيف شفاط البا من الداخل"
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

            <div className="pt-2 font-cairo">
              <p className="text-muted-foreground leading-relaxed">
                لمعرفة المزيد عن خدماتنا لجميع الأجهزة، يمكنك زيارة{" "}
                <a
                  href="https://alba-eg.com/صيانة-أجهزة-elba"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  صيانة أجهزة Elba
                </a>{" "}
                أو الرجوع إلى{" "}
                <a
                  href="https://alba-eg.com/صيانة-البا-في-مصر"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  صيانة البا في مصر
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-cairo">
            الأسئلة الشائعة حول صيانة شفاط البا بلت ان في مصر
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

export default HoodBuiltinElbaAr;