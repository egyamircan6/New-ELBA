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

import cooker1 from "@/assest/elba-cooker.png.png";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";
const DOMAIN = "https://elba-eg.com";
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/صيانة-بوتاجاز-البا";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS =
  "text-primary underline font-semibold hover:text-primary/80";

type FaqItemType = {
  q: string;
  a: React.ReactNode;
  aText: string;
};

const CookerElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `المـــركز الرئـــيسي لصيانة بوتاجاز البا فــي مصــر | اتصل الآن ${PHONE_DISPLAY}`;
  const metaDescription = `المركز الرئيسي وتوكيل صيانة بوتاجاز البا يقدم خدمة صيانة معتمدة في مصر لأعطال البلت إن و5 شعلة ومسـطح البا. تواصل الآن على ${PHONE_DISPLAY} لحجز صيانة منزلية فورية.`;

  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "كيف أتواصل مع رقم صيانة بوتاجاز البا لحجز صيانة فورية؟",
        a: (
          <p>
            إذا كنت بحاجة إلى إصلاح عاجل، يمكنك الاتصال مباشرة على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              رقم صيانة بوتاجاز البا <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لحجز صيانة منزلية سريعة. يتم تسجيل بيانات العطل في نفس المكالمة
            وتحديد أقرب موعد لزيارة فني متخصص، مع تجهيز قطع الغيار المناسبة قبل
            الوصول لتقليل وقت الإصلاح وضمان إنهاء المشكلة من أول زيارة.
          </p>
        ),
        aText: `إذا كنت بحاجة إلى إصلاح عاجل، اتصل على رقم صيانة بوتاجاز البا ${PHONE_DISPLAY} لحجز صيانة منزلية سريعة. يتم تسجيل بيانات العطل وتحديد أقرب موعد لزيارة فني متخصص مع تجهيز قطع الغيار المناسبة قبل الوصول.`,
      },
      {
        q: "كيف أحجز صيانة عبر رقم توكيل بوتاجاز البا؟",
        a: (
          <p>
            لحجز صيانة معتمدة يمكنك التواصل مع{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              رقم توكيل بوتاجاز البا <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            وشرح العطل بالتفصيل مثل ضعف الشعلة أو مشكلة في الفرن أو الإشعال
            الذاتي. يتم توجيه فني مختص حسب نوع الجهاز لضمان تشخيص دقيق وإصلاح
            آمن باستخدام قطع غيار أصلية مع ضمان على الخدمة.
          </p>
        ),
        aText: `لحجز صيانة معتمدة اتصل على رقم توكيل بوتاجاز البا ${PHONE_DISPLAY} واشرح العطل بالتفصيل. يتم إرسال فني مختص حسب نوع الجهاز لضمان تشخيص دقيق وإصلاح آمن بقطع غيار أصلية مع ضمان.`,
      },
      {
        q: "رقم خدمة عملاء بوتاجاز البا لطلب صيانة سريعة؟",
        a: (
          <p>
            يُفضل التواصل مع{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              رقم خدمة عملاء بوتاجاز البا <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن. يتم
            تسجيل البلاغ فورًا وتحديد موعد مناسب للصيانة المنزلية، مع متابعة
            الطلب حتى الانتهاء من الإصلاح بالكامل.
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "ما هو الخط الساخن صيانة بوتاجاز البا في القاهرة؟",
        a: (
          <p>
            في حالة وجود عطل مفاجئ، يمكنك الاتصال على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              الخط الساخن صيانة بوتاجاز البا <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لحجز تدخل فوري. يتم إرسال فني مدرب مزود بأدوات فحص حديثة للكشف عن
            مصدر المشكلة وضمان إصلاحها بسرعة وأمان دون الحاجة لنقل الجهاز.
          </p>
        ),
        aText: `للتدخل الفوري في القاهرة اتصل على الخط الساخن لصيانة بوتاجاز البا ${PHONE_DISPLAY}. يتم إرسال فني مزود بأدوات فحص حديثة لتشخيص العطل وإصلاحه بسرعة وأمان دون نقل الجهاز.`,
      },
      {
        q: "كيف أطلب صيانة بوتاجاز البا في مصر حسب منطقتي؟",
        a: (
          <p>
            لطلب صيانة بوتاجاز البا في مصر يمكنك الاتصال على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            وتحديد موقعك بدقة مثل القاهرة أو الجيزة أو الإسكندرية وغيرها. يتم
            تنسيق زيارة منزلية في أقرب وقت ممكن مع ضمان على القطع المستبدلة
            والخدمة المقدمة.
          </p>
        ),
        aText: `لطلب صيانة بوتاجاز البا حسب منطقتك اتصل على ${PHONE_DISPLAY} وحدد موقعك بدقة. يتم تنسيق زيارة منزلية في أقرب وقت مع ضمان على القطع والخدمة.`,
      },
      {
        q: "متى أحتاج إلى صيانة بوتاجاز بلت إن البا؟",
        a: (
          <p>
            تحتاج إلى صيانة بوتاجاز بلت إن البا عند وجود مشكلة في الاشتعال أو ضعف
            في الشعلة أو خلل في المفاتيح الكهربائية. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            لإرسال فني متخصص لضمان فك وتركيب آمن دون التأثير على وحدات المطبخ أو
            توصيلات الغاز.
          </p>
        ),
        aText: `تحتاج لصيانة بوتاجاز بلت إن البا عند مشاكل الاشتعال أو ضعف الشعلة أو خلل المفاتيح. اتصل على ${PHONE_DISPLAY} لإرسال فني متخصص يضمن فك وتركيب آمن دون التأثير على وحدات المطبخ أو توصيلات الغاز.`,
      },
      {
        q: "ما الحالات التي تستدعي صيانة بوتاجاز 5 شعلة البا بسرعة؟",
        a: (
          <p>
            تحتاج إلى صيانة بوتاجاز 5 شعلة البا عند ضعف توزيع الحرارة أو انسداد
            إحدى الشعلات أو وجود خلل في منظم الغاز. عبر الاتصال على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            يتم إرسال فني لديه خبرة في هذا النوع لضبط الشعلة وإعادة التوازن
            الحراري بكفاءة عالية.
          </p>
        ),
        aText: `تحتاج لصيانة بوتاجاز 5 شعلة البا عند ضعف توزيع الحرارة أو انسداد شعلة أو خلل منظم الغاز. اتصل على ${PHONE_DISPLAY} لإرسال فني متخصص لضبط الشعلات وإعادة التوازن الحراري بكفاءة.`,
      },
      {
        q: "كيف يمكن حجز صيانة مسطح البا في المنزل؟",
        a: (
          <p>
            لحجز صيانة مسطح البا اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              <strong>{PHONE_DISPLAY}</strong>
            </a>{" "}
            وشرح نوع العطل مثل ضعف الإشعال أو انسداد الشعلة أو مشكلة في
            الحساسات. يتم إرسال فني متخصص لإجراء فحص دقيق وتنظيف الأجزاء
            الداخلية وضبط الأداء لضمان التشغيل بأمان.
          </p>
        ),
        aText: `لحجز صيانة مسطح البا بالمنزل اتصل على ${PHONE_DISPLAY} واذكر نوع العطل. يتم إرسال فني متخصص للفحص الدقيق والتنظيف وضبط الأداء لضمان التشغيل بأمان.`,
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
          name: "المركز الرئيسي لصيانة بوتاجاز البا في مصر",
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
          name: "المركز الرئيسي لصيانة بوتاجاز البا في مصر",
          url: PAGE_URL,
          image: logo,
          logo,
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
          name: "ELBA EGYPT - صيانة البا في مصر",
          url: SITE_URL,
          inLanguage: "ar-EG",
          publisher: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${PAGE_URL}#webpage`,
          name: `صيانة بوتاجاز البا في مصر | رقم الصيانة ${PHONE_DISPLAY} وخدمة العملاء`,
          url: PAGE_URL,
          inLanguage: "ar-EG",
          isPartOf: { "@id": `${SITE_URL}#website` },
          about: { "@type": "Thing", name: "صيانة بوتاجاز البا" },
          description: metaDescription,
          publisher: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "صيانة بوتاجاز البا في مصر",
          serviceType: "صيانة وإصلاح بوتاجاز البا",
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
            "خدمة صيانة بوتاجاز البا تشمل صيانة بوتاجاز بلت إن البا وصيانة بوتاجاز 5 شعلة البا وصيانة مسطح البا داخل مصر مع دعم فني سريع وخدمة منزلية.",
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
          alt="صيانة بوتاجاز البا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-cairo leading-tight">
                أهـــلاً بكــــم فــــي المركــز المعتمد لصيانة بوتاجاز البا في
                مصر
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 font-cairo">
                المركز الرئيسي لصيانة بوتاجاز البا — خدمة منزلية فورية، قطع غيار
                أصلية، وضمان مكتوب.
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
                <span className="font-semibold text-white">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections بدون متغير محتوى */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    رقم صيانة بوتاجاز البا – تواصل مباشر بدون انتظار
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-cairo">
                      إذا كنت تبحث عن سرعة حقيقية في الاستجابة، يمكنك التواصل
                      مباشرة مع{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        رقم صيانة بوتاجاز البا {PHONE_DISPLAY}
                      </a>{" "}
                      لحجز{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة البا في مصر
                      </a>{" "}
                      منزلية فورية بدون تحويلات أو انتظار طويل. يتم تسجيل
                      بياناتك في نفس المكالمة وتحديد موعد مناسب حسب منطقتك،
                      وإرسال فني متخصص مزود بأجهزة فحص حديثة لتشخيص العطل بدقة
                      من أول زيارة.
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

                  <div className="text-sm text-muted-foreground font-cairo">
                    رقم الصيانة:{" "}
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
                        بوتاجاز إلبا
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        خدمة منزلية
                      </span>
                    </div>

                    <img
                      src={cooker1}
                      alt="بوتاجاز إلبا"
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

            {/* Section 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    مركز صيانة بوتاجازات البا بقطع غيار أصلية وضمان مكتوب
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-cairo">
                      ما يميزنا هو الالتزام باستخدام{" "}
                      <strong>قطع غيار أصلية</strong> مطابقة لمواصفات الشركة
                      المصنعة لضمان أداء ثابت وعمر أطول. عند الاتصال على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>{" "}
                      يتم توضيح تفاصيل الصيانة والتكلفة قبل بدء العمل لضمان
                      الشفافية، ونقدم ضمانًا فعليًا على القطع المستبدلة وخدمة
                      الإصلاح.
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

                  <div className="text-sm text-muted-foreground font-cairo">
                    رقم الصيانة:{" "}
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
                        قطع غيار وضمان
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        أصلية
                      </span>
                    </div>

                    <img
                      src={cooker1}
                      alt="قطع غيار أصلية بوتاجاز البا"
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

            {/* Section 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    أعطال بوتاجاز البا الشائعة وحلول فورية من فنيين متخصصين
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-cairo">
                      تشمل أعطال بوتاجاز البا ضعف الشعلة، مشكلة الاشتعال الذاتي،
                      تسريب الغاز، أو انخفاض كفاءة الفرن. فريقنا يستخدم أجهزة
                      كشف دقيقة لضمان الأمان الكامل. اتصل على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>{" "}
                      ليصلك فني متخصص حسب نوع العطل.
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

                  <div className="text-sm text-muted-foreground font-cairo">
                    رقم الصيانة:{" "}
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
                        أعطال وحلول
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        فحص فني
                      </span>
                    </div>

                    <img
                      src={cooker1}
                      alt="أعطال بوتاجاز البا"
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

            {/* Section 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    صيانة بوتاجاز بلت إن البا بأعلى معايير الأمان والدقة
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-cairo">
                      بوتاجازات البا البلت إن تحتاج خبرة خاصة أثناء الفك والتركيب
                      حتى لا تتأثر وحدات المطبخ أو توصيلات الغاز. نحن نوفر فنيين
                      متخصصين في{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة بوتاجاز بلت إن البا
                      </a>{" "}
                      مع تجهيز الأدوات وقطع الغيار قبل الزيارة لتقليل مدة الإصلاح
                      وإنهاء العمل من أول مرة.
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

                  <div className="text-sm text-muted-foreground font-cairo">
                    رقم الصيانة:{" "}
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
                        بوتاجاز بلت إن
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        أمان ودقة
                      </span>
                    </div>

                    <img
                      src={cooker1}
                      alt="صيانة بوتاجاز بلت إن البا"
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

            {/* Section 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    صيانة بوتاجاز 5 شعلة البا بكفاءة توزيع حرارة مثالية
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-cairo">
                      يحتاج بوتاجاز 5 شعلة البا إلى ضبط دقيق لمنظم الغاز وتوزيع
                      الحرارة بين الشعلات. نعالج انسداد الشعلات وتلف الإشعال
                      الذاتي وضعف اللهب باستخدام أدوات معايرة حديثة. عبر الاتصال
                      على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>{" "}
                      يتم إرسال فني متخصص بهذا النوع لضمان أفضل أداء وتقليل
                      استهلاك الغاز.
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

                  <div className="text-sm text-muted-foreground font-cairo">
                    رقم الصيانة:{" "}
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
                        بوتاجاز 5 شعلة
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        معايرة دقيقة
                      </span>
                    </div>

                    <img
                      src={cooker1}
                      alt="صيانة بوتاجاز 5 شعلة البا"
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

            {/* Section 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-cairo">
                    خدمة عملاء وتوكيل صيانة البا في مصر باستجابة سريعة
                  </h2>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-cairo">
                      نوفر خدمة عملاء لتلقي البلاغات وتحديد المواعيد بسرعة. عند
                      التواصل على{" "}
                      <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
                        {PHONE_DISPLAY}
                      </a>{" "}
                      يتم الرد المباشر وتسجيل طلبك دون تعقيد، مع تحديد أقرب موعد
                      حسب موقعك في القاهرة أو الجيزة أو الإسكندرية أو القليوبية.
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

                  <div className="text-sm text-muted-foreground font-cairo">
                    رقم الصيانة:{" "}
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
                        خدمة العملاء
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        استجابة سريعة
                      </span>
                    </div>

                    <img
                      src={cooker1}
                      alt="خدمة عملاء صيانة بوتاجاز البا"
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-cairo text-right">
            الأسئلة الشائعة لصيانة بوتاجاز البا
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

export default CookerElbaAr;