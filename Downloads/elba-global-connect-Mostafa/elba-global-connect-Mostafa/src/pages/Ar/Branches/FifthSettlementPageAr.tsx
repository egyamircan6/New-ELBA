import React, { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

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

import cooker1 from "@/assest/elba-cooker.png.png";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";
const DOMAIN = "https://elba-eg.com";
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/صيانة-بوتاجاز-البا";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS =
  "text-primary hover:text-primary/80 font-bold hover:underline";

type FaqItemType = {
  q: string;
  a: React.ReactNode;
  aText: string;
};

const FifthSettlementPageAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة البا التجمع الخامس | مركز معتمد لتصليح بوتاجازات Elba`;
  const metaDescription = `بحث عن صيانة البا في التجمع الخامس؟ نوفر لك فنيين متخصصين لخدمة أجهزة Elba المنزلية (بوتاجازات، أفران) بقطع غيار أصلية وضمان معتمد. اتصل الآن.`;

  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "ما هي أجهزة Elba التي يتم صيانتها في التجمع؟",
        a: (
          <p>
            مركزنا متخصص في صيانة كافة أجهزة المطبخ، وتشمل خدماتنا:{" "}
            <a
              href={`https://alba-eg.com/صيانة-بوتاجاز-البا`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              بوتاجازات البا{" "}
            </a>{" "}
            ، و
            <a
              href={`https://alba-eg.com/صيانة-افران-البا`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              صيانة افران البا
            </a>{" "}
            ، وأيضاً{" "}
            <a
              href={`https://alba-eg.com/صيانة-شفاط-البا-بلت-ان`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              صيانة شفاط البا بلت ان
            </a>{" "}
            ، بالإضافة إلى{" "}
            <a
              href={`https://alba-eg.com/صيانة-غسالات-اطباق-البا-بلت-ان`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              صيانة غسالات اطباق البا بلت ان{" "}
            </a>{" "}
            بجميع موديلاتها
          </p>
        ),
        aText: `إذا كنت بحاجة إلى إصلاح عاجل، اتصل على رقم صيانة بوتاجاز البا ${PHONE_DISPLAY} لحجز صيانة منزلية سريعة. يتم تسجيل بيانات العطل وتحديد أقرب موعد لزيارة فني متخصص مع تجهيز قطع الغيار المناسبة قبل الوصول.`,
      },
      {
        q: "كيف يمكنني التواصل مع خدمة العملاء؟",
        a: (
          <p>
            يمكنك الاتصال بنا مباشرة عبر{" "}
            <a
              href={`https://alba-eg.com/رقم-صيانة-البا`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              رقم صيانة البا{" "}
            </a>{" "}
            المخصص لاستقبال طلبات سكان التجمع والقاهرة الجديدة من السبت إلى
            الخميس، مع توفير فريق للطوارئ يوم الجمعة.
          </p>
        ),
        aText: `لحجز صيانة معتمدة اتصل على رقم توكيل بوتاجاز البا ${PHONE_DISPLAY} واشرح العطل بالتفصيل. يتم إرسال فني مختص حسب نوع الجهاز لضمان تشخيص دقيق وإصلاح آمن بقطع غيار أصلية مع ضمان.`,
      },
      {
        q: "هل يتم تصليح أجهزة البا في المنزل؟",
        a: (
          <p>
            بالتأكيد، 95% من الأعطال الخاصة بـ{" "}
            <a
              href={`https://alba-eg.com/صيانة-البا-في-مصر`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              صيانة البا في مصر{" "}
            </a>{" "}
            يتم إصلاحها في منزل العميل بالتجمع الخامس باستخدام معدات فحص حديثة
            تحدد العطل بدقة، مما يوفر عليك عناء فك ونقل الجهاز للمركز.
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
    ],
    [],
  );

  const schemaGraph = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: "مركز صيانة البا التجمع الخامس",
          url: "https://alba-eg.com/صيانة-البا-في-التجمع-الخامس",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          logo: "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New Cairo",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "City", name: "التجمع الخامس" },
            { "@type": "City", name: "القاهرة الجديدة" },
            { "@type": "City", name: "الرحاب" },
            { "@type": "City", name: "مدينتي" },
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
        },
        {
          "@type": "Service",
          name: "صيانة أجهزة البا في التجمع الخامس",
          serviceType: "Repair and Maintenance",
          provider: {
            "@type": "LocalBusiness",
            name: "المركز الرئيسي لصيانة بوتاجاز البا في مصر",
          },
          description:
            "خدمة صيانة منزلية فورية لبوتاجازات وأفران وشفاطات البا في التجمع الخامس والقاهرة الجديدة مع قطع غيار أصلية وضمان معتمد.",
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "هل يتوفر فني صيانة البا في التجمع الخامس طوال أيام الأسبوع؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، فريق الدعم الفني متاح لاستقبال طلبات الصيانة والتحرك الفوري لسكان التجمع والقاهرة الجديدة من السبت إلى الخميس، مع توفير حالات الطوارئ يوم الجمعة عبر الرقم 01211114528.",
              },
            },
            {
              "@type": "Question",
              name: "ما هي الأجهزة التي يشملها مركز صيانة البا في التجمع؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نحن متخصصون في صيانة جميع أجهزة المطبخ من ماركة البا، بما في ذلك صيانة بوتاجاز البا، صيانة أفران البا، صيانة شفاط البا، وصيانة غسالات أطباق البا بلت إن.",
              },
            },
            {
              "@type": "Question",
              name: "هل يتم تصليح أجهزة البا في المنزل داخل التجمع؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "بالتأكيد، 95% من أعطال البا يتم إصلاحها في منزل العميل بالتجمع الخامس باستخدام معدات فحص حديثة وقطع غيار أصلية لضمان أعلى جودة دون الحاجة لنقل الجهاز.",
              },
            },
          ],
        },
      ],
    };
  }, []);

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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-cairo leading-tight lg:leading-[5rem]">
                صيانة البا في التجمع الخامس والقاهرة الجديدة
              </h1>
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
                    className="border-white/80 text-black hover:bg-white hover:text-foreground gap-2 text-base md:text-lg px-7 md:px-8 w-full font-cairo"
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-cairo lg:mt-16">
                    أسرع خدمة صيانة البا في التجمع الخامس والقاهرة الجديدة{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      تعتبر أجهزة "البا" الإيطالية عنواناً للفخامة والكفاءة في
                      مطابخ التجمع الخامس، ولأننا ندرك أن أي عطل قد يعطل روتين
                      يومك، يقدم مركزنا أسرع خدمة{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة البا في التجمع الخامس{" "}
                      </a>{" "}
                      نحن نوفر فريقاً من المهندسين المدربين على التعامل مع
                      موديلات Elba الحديثة والقديمة، سواء كنت تبحث عن{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-بوتاجاز-البا"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة بوتاجاز البا{" "}
                      </a>{" "}
                      أو إصلاح الأعطال المفاجئة في
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-افران-البا"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة افران البا{" "}
                      </a>{" "}
                      ، فنحن نضمن لك الالتزام التام بالمواعيد والاحترافية التي
                      تليق بسكان القاهرة الجديدة.
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
                    <img
                      src={cooker1}
                      alt="بوتاجاز إلبا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />
                    {/* 
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
                    </div> */}

                    {/* <div className="mt-4 text-sm text-muted-foreground font-cairo">
                      رقم الصيانة:{" "}
                      <span className="font-semibold text-foreground">
                        {PHONE_DISPLAY}
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* <div className="mt-4 text-xs text-muted-foreground text-center">
                  {DOMAIN}
                </div> */}
              </div>
            </div>
            {/* Section 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
                  <div className="p-4 md:p-5">
                    <img
                      src={cooker1}
                      alt="بوتاجاز إلبا"
                      className="w-full rounded-xl shadow-sm object-cover"
                    />
                    {/* 
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
                    </div> */}

                    {/* <div className="mt-4 text-sm text-muted-foreground font-cairo">
                      رقم الصيانة:{" "}
                      <span className="font-semibold text-foreground">
                        {PHONE_DISPLAY}
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* <div className="mt-4 text-xs text-muted-foreground text-center">
                  {DOMAIN}
                </div> */}
              </div>
              <div className="lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-cairo lg:mt-16">
                    تصليح أجهزة Elba بلت ان بقطع غيار أصلية{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      ما يميز خدمتنا هو الشمولية، حيث نمتلك خبرة واسعة في{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-شفاط-البا"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة شفاط البا{" "}
                      </a>{" "}
                      وخدمات{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-غسالات-اطباق-البا"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة غسالات اطباق البا{" "}
                      </a>{" "}
                      التي تتطلب دقة عالية في التعامل. نوفر لك قطع غيار أصلية
                      لضمان عودة الجهاز لحالته الأولى، ونغطي جميع أحياء التجمع
                      (النرجس، الياسمين، المستثمرين، وحي اللوتس) بخدمة صيانة
                      منزلية فورية. سواء كان جهازك{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-افران-البا"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة بوتاجاز البا بلت ان{" "}
                      </a>{" "}
                      أو{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-افران-البا"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة فرن البا بلت ان{" "}
                      </a>{" "}
                      ، ستحصل على شهادة ضمان معتمدة على أعمال التصليح وقطع
                      الغيار المستبدلة.
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

                  <div className="text-sm text-muted-foreground font-cairo">
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
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 font-cairo text-right">
            الأسئلة الشائعة - صيانة البا التجمع الخامس والقاهرة الجديدة
          </h2>

          <Accordion type="single" collapsible className="space-y-3 ">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-foreground font-bold hover:no-underline font-cairo text-right lg:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-cairo text-right lg:text-lg">
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

export default FifthSettlementPageAr;
