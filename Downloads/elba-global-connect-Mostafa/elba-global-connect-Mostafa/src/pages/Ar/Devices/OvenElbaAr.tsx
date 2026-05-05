import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import ovenImg from "@/assest/elba-oven.png.png";

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
const PAGE_URL = "https://alba-eg.com/صيانة-افران-البا";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

const OvenElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة افران البا (Elba) | تصليح منزلي بقطع غيار أصلية | اتصل ${PHONE_DISPLAY}`;
  const metaDescription = `هل تبحث عن صيانة افران البا معتمدة؟ الشركة الأمريكية جروب توفر لك فني تصليح افران البا متخصص بقطع غيار أصلية وضمان عام. اتصل الآن على ${PHONE_DISPLAY} نصلك في الحال.`;

  const introH1 = "مرحــــباً بك في مركز صيانة افران البا المعتمد";

  const faqs = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة افران البا المعتمد في مصر؟",
        a: (
          <p>
            رقم صيانة افران البا المعتمد هو{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لحجز صيانة منزلية فورية لجميع موديلات الغاز والكهرباء والبلت إن، مع
            ضمان على قطع الغيار الأصلية. ويمكنك التواصل عبر{" "}
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
        aText: `رقم صيانة افران البا المعتمد هو ${PHONE_DISPLAY} لحجز صيانة منزلية فورية لجميع موديلات الغاز والكهرباء والبلت إن مع ضمان على قطع الغيار الأصلية. يمكنك التواصل أيضًا عبر واتساب.`,
      },
      {
        q: "كيف يمكنني تصليح فرن البا الذي لا يسخن؟",
        a: (
          <p>
            عدم التسخين غالباً يكون بسبب تلف <strong>السخان (Heater)</strong> أو{" "}
            <strong>الترموستات</strong>. اطلب فني متخصص عبر{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لفحص الدائرة واستبدال القطع التالفة بقطع أصلية في نفس الزيارة.
          </p>
        ),
        aText: `عدم التسخين غالباً بسبب تلف السخان (Heater) أو الترموستات. اتصل على ${PHONE_DISPLAY} لفحص الدائرة واستبدال القطع التالفة بقطع أصلية في نفس الزيارة.`,
      },
      {
        q: "أين أجد قطع غيار افران البا الأصلية؟",
        a: (
          <p>
            نوفر قطع غيار افران البا الأصلية مثل <strong>المفصلات</strong> و
            <strong>الزجاج الحراري</strong> و<strong>شمعات الإشعال</strong>.
            لطلب قطعة غيار أصلية مع تركيب وضمان، اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `تتوفر قطع غيار افران البا الأصلية مثل المفصلات والزجاج الحراري وشمعات الإشعال. اتصل على ${PHONE_DISPLAY} لطلب القطعة مع تركيب وضمان.`,
      },
      {
        q: "ما سبب انطفاء شعلة فرن البا الغاز فجأة؟",
        a: (
          <p>
            انطفاء الشعلة يحدث غالباً بسبب تلف <strong>حساس الأمان</strong> أو
            انسداد الفونيات. للحجز السريع اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لإرسال فني لتنظيف الفونيات واستبدال الحساس وتشغيل آمن.
          </p>
        ),
        aText: `انطفاء الشعلة يحدث غالباً بسبب تلف حساس الأمان أو انسداد الفونيات. اتصل على ${PHONE_DISPLAY} لتنظيف الفونيات واستبدال الحساس لضمان تشغيل آمن.`,
      },
      {
        q: "هل يتوفر فني صيانة افران البا متخصص للـ Built-in؟",
        a: (
          <p>
            نعم، لدينا فني متخصص لصيانة <strong>فرن البا بلت إن</strong> لضمان
            فك وتركيب احترافي دون الإضرار بوحدات المطبخ. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لحجز زيارة تشمل فحص وتشغيل كامل.
          </p>
        ),
        aText: `نعم، يتوفر فني متخصص لصيانة فرن البا بلت إن لضمان فك وتركيب احترافي دون الإضرار بوحدات المطبخ. اتصل على ${PHONE_DISPLAY} لحجز زيارة تشمل فحص وتشغيل كامل.`,
      },
      {
        q: "كيف يتم تغيير زجاج فرن البا المكسور؟",
        a: (
          <p>
            تغيير زجاج فرن البا يحتاج <strong>زجاج حراري</strong> مطابق للموديل
            ومقاوم للصدمات. اطلب توفير وتركيب سريع عبر{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `تغيير زجاج فرن البا يحتاج زجاج حراري مطابق للموديل. اتصل على ${PHONE_DISPLAY} لتوفير المقاس المناسب والتركيب السريع.`,
      },
      {
        q: "لماذا تظهر رموز خطأ (Error Codes) على شاشة فرن البا الرقمي؟",
        a: (
          <p>
            رموز الخطأ تشير غالباً إلى مشكلة في{" "}
            <strong>الكارتة الإلكترونية</strong> أو <strong>الحساسات</strong>.
            اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لفحص الأعطال بأجهزة تشخيص دقيقة وإعادة ضبط الإعدادات.
          </p>
        ),
        aText: `رموز الخطأ تشير غالباً إلى مشكلة في الكارتة الإلكترونية أو الحساسات. اتصل على ${PHONE_DISPLAY} لفحص الأعطال بأجهزة تشخيص دقيقة وإعادة ضبط الإعدادات.`,
      },
      {
        q: "ما هو رقم شركة البا لصيانة الشفاطات والافران؟",
        a: (
          <p>
            لصيانة شاملة لأفران البا وشفاطات المطبخ، تواصل مع خدمة العملاء على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لحجز صيانة منزلية في جميع المحافظات.
          </p>
        ),
        aText: `لصيانة شاملة لأفران البا وشفاطات المطبخ اتصل على ${PHONE_DISPLAY} لحجز صيانة منزلية في جميع المحافظات.`,
      },
      {
        q: "كيف أحافظ على مفصلات فرن البا من التلف؟",
        a: (
          <p>
            لتقليل تلف المفصلات: نظّف الدهون بانتظام وتجنب الضغط على الباب بعنف.
            عند وجود صعوبة في الغلق اطلب استبدال مفصلات أصلية عبر{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `لتقليل تلف مفصلات فرن البا نظّف الدهون بانتظام وتجنب الاستخدام العنيف للباب. عند صعوبة الغلق اتصل على ${PHONE_DISPLAY} لاستبدال المفصلات الأصلية.`,
      },
      {
        q: "هل يوجد فرع لـ صيانة افران البا قريب مني؟",
        a: (
          <p>
            الخدمة متاحة عبر فريق صيانة متنقل يغطي القاهرة والجيزة وباقي
            المحافظات. اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لتحديد أقرب موعد حسب منطقتك دون نقل الجهاز.
          </p>
        ),
        aText: `الخدمة تغطي القاهرة والجيزة وجميع محافظات مصر عبر فريق صيانة متنقل. اتصل على ${PHONE_DISPLAY} لتحديد أقرب موعد حسب منطقتك دون نقل الجهاز.`,
      },
    ],
    [],
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
          name: "المركز المعتمد لصيانة افران البا في مصر",
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
          description: `صيانة افران البا (Elba) في مصر بقطع غيار أصلية وضمان معتمد، مع صيانة منزلية فورية لجميع موديلات الغاز والكهرباء والبلت إن. اتصل الآن على ${PHONE_DISPLAY}.`,
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
            { "@type": "Thing", name: "صيانة افران البا" },
            { "@type": "Thing", name: "تصليح فرن البا" },
            { "@type": "Thing", name: "قطع غيار افران البا" },
          ],
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "صيانة افران البا (Elba) في مصر",
          serviceType: "Oven Repair Service",
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
            "خدمة صيانة افران البا تشمل إصلاح عدم التسخين، أعطال الترموستات، الاشتعال، حساسات الأمان، تغيير زجاج الفرن، ومعالجة Error Codes، مع قطع غيار أصلية وضمان.",
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
          src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&h=600&fit=crop"
          alt="صيانة افران البا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl font-cairo">
              <p className="text-sm md:text-base text-white/70 mb-2">
                خدمات عند المنزل
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight lg:leading-[5rem]">
                {introH1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                تصليح فرن البا بالمنزل بقطع غيار أصلية وضمان معتمد — فحص دقيق
                للحساسات والترموستات ودائرة الأمان.
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
                    className="border-white/80 text-black hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    اتصال
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70">
                رقم الخدمة:{" "}
                <span className="font-semibold text-white">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sticky */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    لماذا تختارنا للصيانة افران البا؟
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    تعتبر ماركة البا الإيطالية رمزاً للجودة في المطبخ، ولكن حتى
                    أفضل الأجهزة تحتاج إلى عناية دورية. نحن نوفر لك أفضل خدمة{" "}
                    <a
                      href={PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      صيانة افران البا
                    </a>{" "}
                    في مصر، معتمدين على فريق من المهندسين المتخصصين في التعامل
                    مع التقنيات الإيطالية، وتقديم قطع غيار أصلية وسرعة رد فائقة
                    من خلال{" "}
                    <a
                      href={BRAND_URL}
                      target="_blank"
                      rel="noreferrer"
                      className={LINK_CLASS}
                    >
                      الشركة الأمريكية جروب
                    </a>
                    . سواء كان الفرن كهرباء أو غاز، فإن خدمات{" "}
                    <a
                      href="https://alba-eg.com/صيانة-أجهزة-elba"
                      target="_blank"
                      rel="noreferrer"
                      className={LINK_CLASS}
                    >
                      صيانة أجهزة Elba
                    </a>{" "}
                    تغطي الأعطال الشائعة والمفاجئة لضمان عودة الجهاز لكفاءة
                    المصنع.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="lg:sticky lg:top-24">
                  <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                    <div className="p-4 md:p-5">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <p className="text-sm text-muted-foreground font-cairo">
                          فرن إلبا (Elba Oven)
                        </p>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                          بالمنزل
                        </span>
                      </div>

                      <img
                        src={ovenImg}
                        alt="فرن إلبا"
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    هل تبحث عن فني صيانة افران البا في القاهرة قريب منك؟
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    إذا كنت تسكن في القاهرة وتبحث عن السرعة والدقة، فإن اختيارك
                    لنا يضمن لك وصول فني متخصص في{" "}
                    <a
                      href="https://alba-eg.com/صيانة-فرن-البا-بلت-ان"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      صيانة فرن البا بلت ان
                    </a>{" "}
                    في نفس اليوم. نوفر صيانة منزلية دون نقل الجهاز، مع أدوات فحص
                    دقيقة للحساسات والترموستات. لو فرن البا فيه أي عطل، اتصل
                    الآن على{" "}
                    <a
                      href="https://alba-eg.com/رقم-صيانة-البا"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      رقم صيانة افران البا {PHONE_DISPLAY}
                    </a>{" "}
                    أو راسلنا عبر{" "}
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
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        فني متخصص
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        سرعة وصول
                      </span>
                    </div>

                    <img
                      src={ovenImg}
                      alt="فني صيانة افران البا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    ما هي أشهر أعطال فرن البا وكيفية إصلاحها؟
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    يسأل الكثيرون: <strong>لماذا فرن البا لا يسخن؟</strong> أو{" "}
                    <strong>ما سبب انطفاء الشعلة؟</strong> وغالباً يكون السبب
                    تلف <strong>الحساس الحراري</strong> أو احتياج الفونيات
                    للتنظيف. نحن في{" "}
                    <a
                      href="https://alba-eg.com/صيانة-البا-في-مصر"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      صيانة البا في مصر
                    </a>{" "}
                    متخصصون في إصلاح أعطال ضعف النار، كسر المفصلات، أو عطل مروحة
                    التبريد، مع فحص دائرة الأمان لتجنب أي مخاطر. للحجز اتصل
                    فوراً على <strong>{PHONE_DISPLAY}</strong>.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        أعطال شائعة
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        فحص أمان
                      </span>
                    </div>

                    <img
                      src={ovenImg}
                      alt="أعطال فرن البا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 font-cairo">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    هل توفرون قطع غيار افران البا الأصلية في التوكيل؟
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    نعم، نوفر قطع غيار أصلية مستوردة مثل زجاج الفرن الحراري،
                    المفصلات، وسخانات الكهرباء بمختلف القدرات. تركيب القطع
                    الأصلية من خلال{" "}
                    <a
                      href={BRAND_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      الشركة الأمريكية جروب
                    </a>{" "}
                    يطيل عمر الجهاز ويمنع تكرار الأعطال، مع ضمان معتمد على كل
                    قطعة. اطلب الآن على <strong>{PHONE_DISPLAY}</strong>.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        قطع غيار أصلية
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        ضمان معتمد
                      </span>
                    </div>

                    <img
                      src={ovenImg}
                      alt="قطع غيار افران البا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-muted-foreground leading-relaxed font-cairo">
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
            الأسئلة الشائعة حول صيانة افران البا في مصر
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

export default OvenElbaAr;
