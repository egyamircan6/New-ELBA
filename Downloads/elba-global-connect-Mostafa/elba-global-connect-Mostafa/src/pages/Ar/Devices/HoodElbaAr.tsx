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
const PAGE_URL = "https://alba-eg.com/صيانة-شفاط-البا";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS =
  "text-blue-600 underline font-semibold hover:text-blue-700";

const HoodElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة شفاط البا المعتمدة | تصليح فوري بالمنزل اتصل الان`;
  const metaDescription = `هل تعاني من أعطال شفاط المطبخ؟ احصل على أسرع صيانة شفاط البا بالمنزل من الامريكية جروب. قطع غيار أصلية وضمان معتمد. اتصل الآن بخدمة العملاء: ${PHONE_DISPLAY}.`;

  const introH1 = "أفضل مركز صيانة شفاط البا المعتمد في مصر";

  const faqs = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة شفاط البا المعتمد في مصر؟",
        a: (
          <p>
            يمكنك التواصل مع مركز صيانة شفاط البا المعتمد عبر الرقم الموحد{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . تقدم <strong>الامريكية جروب</strong> خدمة دعم فني فورية لإصلاح
            كافة أعطال الشفاطات الإيطالية بالمنزل، مع توفير قطع غيار أصلية
            بضمان حقيقي لضمان استعادة كفاءة الجهاز.
          </p>
        ),
        aText: `يمكنك التواصل مع مركز صيانة شفاط البا المعتمد عبر الرقم ${PHONE_DISPLAY} لحجز صيانة منزلية فورية بقطع غيار أصلية وضمان معتمد.`,
      },
      {
        q: "كيف أحصل على قطع غيار شفاط البا الأصلية؟",
        a: (
          <p>
            تتوفر قطع غيار شفاط البا الأصلية مثل المواتير وفلاتر الكربون لدى{" "}
            <strong>الامريكية جروب</strong>. لطلب قطع الغيار وضمان تركيبها
            بواسطة فني متخصص، اتصل على{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            . جميع القطع تأتي بضمان معتمد لضمان أعلى أداء لشفاط المطبخ.
          </p>
        ),
        aText: `تتوفر قطع غيار شفاط البا الأصلية مثل المواتير وفلاتر الكربون لدى المركز المعتمد. للحجز اتصل على ${PHONE_DISPLAY} لضمان تركيب القطع الأصلية.`,
      },
      {
        q: "من هو وكيل صيانة شفاط البا في القاهرة والجيزة؟",
        a: (
          <p>
            تعتبر <strong>الامريكية جروب</strong> هي الجهة الرائدة في تقديم
            خدمات صيانة شفاط البا بمناطق القاهرة والجيزة. توفر الشركة أسطول
            صيانة متنقل يصلك حتى باب المنزل بمجرد الاتصال على الرقم{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            لتشخيص وإصلاح الأعطال في نفس اليوم.
          </p>
        ),
        aText: `يوفر المركز المعتمد صيانة شفاط البا في القاهرة والجيزة من خلال فريق فني متنقل يصل إلى المنزل بمجرد الاتصال على ${PHONE_DISPLAY}.`,
      },
      {
        q: "ما هي خطوات تصليح شفاط البا في حال توقف الموتور؟",
        a: (
          <p>
            عند توقف الموتور، يجب أولاً فحص وصلات الكهرباء والمكثف. لضمان صيانة
            شفاط البا بشكل احترافي، يفضل تواصلك مع خبراء{" "}
            <strong>الامريكية جروب</strong> على رقم{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>
            ، حيث يتم فحص الموتور واستبداله بقطعة أصلية إذا لزم الأمر لضمان قوة
            شفط مثالية.
          </p>
        ),
        aText: `عند توقف الموتور يجب فحص وصلات الكهرباء والمكثف. اتصل على ${PHONE_DISPLAY} حيث يتم فحص الموتور واستبداله بقطعة أصلية إذا لزم الأمر.`,
      },
      {
        q: "كيف يمكنني حجز موعد صيانة شفاط البا فورية؟",
        a: (
          <p>
            لحجز موعد صيانة شفاط البا، يمكنك الاتصال مباشرة بخدمة العملاء على
            الرقم{" "}
            <a href={`tel:${PHONE_TEL}`} className={LINK_CLASS}>
              {PHONE_DISPLAY}
            </a>{" "}
            أو التواصل عبر{" "}
            <a
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              واتساب
            </a>
            . الخدمة متاحة على مدار الساعة لتلقي بلاغات الأعطال وتنسيق زيارة
            الفنيين في الموعد الذي يناسبك.
          </p>
        ),
        aText: `يمكنك حجز موعد صيانة شفاط البا عبر الاتصال على ${PHONE_DISPLAY} أو التواصل عبر واتساب على نفس الرقم لتحديد موعد مناسب لزيارة الفني.`,
      },
    ],
    []
  );

  const schemaGraph = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${PAGE_URL}#localbusiness`,
          name: "مركز صيانة شفاط البا المعتمد في مصر",
          url: PAGE_URL,
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: PHONE_TEL,
          priceRange: "$$",
          areaServed: [
            {
              "@type": "Country",
              name: "Egypt",
            },
            {
              "@type": "City",
              name: "Cairo",
            },
            {
              "@type": "City",
              name: "Giza",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
            addressRegion: "Cairo & Giza",
          },
          openingHoursSpecification: {
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
          sameAs: [`https://wa.me/${WHATSAPP_WA}/`],
          description:
            "صيانة شفاط البا المعتمدة في مصر توفر تصليح فوري بالمنزل بقطع غيار أصلية وضمان معتمد لجميع موديلات الشفاطات الإيطالية.",
        },
        {
          "@type": "Service",
          "@id": `${PAGE_URL}#service`,
          name: "صيانة شفاط البا بالمنزل",
          serviceType: "تصليح شفاطات البا",
          provider: {
            "@id": `${PAGE_URL}#localbusiness`,
          },
          areaServed: {
            "@type": "Country",
            name: "Egypt",
          },
          availableChannel: [
            {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: PHONE_TEL,
                contactType: "customer service",
                areaServed: "EG",
              },
            },
            {
              "@type": "ServiceChannel",
              serviceUrl: `https://wa.me/${WHATSAPP_WA}/`,
            },
          ],
          description:
            "خدمة صيانة شفاط البا تشمل إصلاح ضعف الشفط، أعطال الموتور، تغيير فلاتر الكربون، واستبدال القطع الأصلية مع ضمان رسمي.",
        },
        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
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
          alt="صيانة شفاط البا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white z-10 max-w-3xl font-cairo">
              <p className="text-sm md:text-base text-white/70 mb-2">
                خدمة منزلية
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {introH1}
              </h1>

              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
                أسرع صيانة شفاط البا بالمنزل مع ضمان معتمد
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
                    أسرع صيانة شفاط البا بالمنزل مع ضمان معتمد
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    نحن ندرك أن تعطل شفاط المطبخ يسبب تراكم الدهون والروائح
                    المزعجة، لذا نوفر لك خدمة تصليح شفاط البا فورية في منزلك دون
                    الحاجة لنقله إلى الورشة. نعتمد في مركز صيانة البا على معدات
                    حديثة لتشخيص الأعطال بدقة متناهية، مما يضمن لك استعادة كفاءة
                    الشفط في وقت قياسي. جميع أعمال{" "}
                    <a
                      href="https://alba-eg.com/صيانة-أجهزة-elba"
                      target="_blank"
                      rel="noreferrer"
                      className={LINK_CLASS}
                    >
                      صيانة أجهزة البا
                    </a>{" "}
                    التي نقوم بها تأتي مع ضمان معتمد على الصيانة وقطع الغيار،
                    لضمان راحة بالك وحماية جهازك من الأعطال المستقبلية.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="lg:sticky lg:top-24">
                  <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                    <div className="p-4 md:p-5">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <p className="text-sm text-muted-foreground font-cairo">
                          شفاط إلبا
                        </p>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                          بالمنزل
                        </span>
                      </div>

                      <img
                        src={hoodImg}
                        alt="شفاط إلبا"
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
                    خدمة عملاء صيانة شفاط البا: الدعم الفني المباشر
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    يتيح لك قسم خدمة عملاء البا التواصل المباشر مع خبراء
                    متخصصين للإجابة على كافة استفساراتكم التقنية. سواء كنت تسأل
                    عن طريقة تنظيف شفاط Elba أو تواجه مشكلة في لوحة التحكم، فإن
                    فريق الدعم الفني جاهز لتقديم الحلول الفورية. هدفنا هو تقديم
                    تجربة مستخدم سلسة تبدأ من مكالمتك الأولى وحتى إتمام عملية
                    إصلاح الشفاط، مع تقديم نصائح وقائية للحفاظ على قوة الموتور
                    وفلاتر الكربون من التلف السريع.
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
                        دعم مباشر
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="خدمة عملاء شفاط البا"
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
                    رقم صيانة شفاط البا الموحد لجميع أنحاء القاهرة
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    إذا كنت تبحث عن توكيل صيانة البا في القاهرة، فقد وفرنا لك
                    الخط الساخن الموحد لاستقبال طلبات الصيانة من كافة المناطق
                    مثل المعادي والتجمع ومدينة نصر والشيخ زايد وغيرها. بمجرد
                    اتصالك على رقم صيانة شفاطات البا{" "}
                    <strong>{PHONE_DISPLAY}</strong>، يتم توجيه أقرب سيارة مجهزة
                    بقطع الغيار الأصلية إلى موقعك. نحن نلتزم بمواعيد دقيقة
                    لضمان عدم تعطيل يومك، مع توفير تغطية شاملة لجميع موديلات
                    شفاطات البا سواء المسطحة أو الهرمية.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        تغطية القاهرة
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium font-cairo">
                        خط ساخن
                      </span>
                    </div>

                    <img
                      src={hoodImg}
                      alt="رقم صيانة شفاط البا"
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
                    فني صيانة شفاط البا خبير بالقرب منك
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    لا داعي للبحث كثيراً عن فني مجهول الهوية، فنحن نوفر لك أفضل
                    فني تصليح شفاطات متخصص في ماركة البا الإيطالية. يتمتع
                    الفنيون لدينا بخبرة سنوات في التعامل مع أعطال موتور الشفاط،
                    وتغيير مفاتيح التشغيل، وتركيب قطع غيار البا الأصلية. البحث
                    عن فني صيانة شفاطات بالقرب مني لم يعد صعباً، حيث ننتشر في
                    أغلب الأحياء لضمان وصول الدعم الفني إليك في أقل من ساعة، مع
                    تقديم تقرير فني كامل عن حالة الجهاز بعد الصيانة.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm text-muted-foreground font-cairo">
                        فني خبير
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-cairo">
            الأسئلة الشائعة حول صيانة شفاط البا
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

export default HoodElbaAr;