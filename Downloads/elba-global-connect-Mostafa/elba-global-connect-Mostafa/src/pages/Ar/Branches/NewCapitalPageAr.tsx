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
  "text-primary hover:text-primary/80 font-bold hover:underline";

type FaqItemType = {
  q: string;
  a: React.ReactNode;
  aText: string;
};

const NewCapitalPageAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة البا العاصمة الإدارية | توكيل Elba المعتمد الحي السكني R3`;
  const metaDescription =
    "توكيل صيانة البا في العاصمة الإدارية الجديدة. نصلك في الحي السكني R3 وجميع أحياء العاصمة لتصليح أجهزة Elba بقطع غيار أصلية وضمان معتمد. اتصل على 01211114528.";

  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة البا في العاصمة الإدارية لطلب خدمة سريعة؟",
        a: (
          <p>
            <span>يمكنك التواصل مباشرة مع توكيل العاصمة عبر الرقم </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>01211114528</strong>
            </a>
            <span>
              ؛ نصلك في الحي السكني R3 وجميع أحياء العاصمة خلال وقت قياسي.
            </span>
          </p>
        ),
        aText: `إذا كنت بحاجة إلى إصلاح عاجل، اتصل على رقم صيانة بوتاجاز البا ${PHONE_DISPLAY} لحجز صيانة منزلية سريعة. يتم تسجيل بيانات العطل وتحديد أقرب موعد لزيارة فني متخصص مع تجهيز قطع الغيار المناسبة قبل الوصول.`,
      },
      {
        q: "هل يتوفر فني صيانة بوتاجاز البا في الحي السكني R3؟",
        a: (
          <p>
            <span>نعم، لدينا فريق متخصص في </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة بوتاجاز البا</strong>
            </a>
            <span> و </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة بوتاجاز البا بلت ان</strong>
            </a>
            <span>
              {" "}
              يغطي الحي السكني R3 وكافة مناطق العاصمة الإدارية فوراً.
            </span>
          </p>
        ),
        aText: `لحجز صيانة معتمدة اتصل على رقم توكيل بوتاجاز البا ${PHONE_DISPLAY} واشرح العطل بالتفصيل. يتم إرسال فني مختص حسب نوع الجهاز لضمان تشخيص دقيق وإصلاح آمن بقطع غيار أصلية مع ضمان.`,
      },
      {
        q: "كيف أحجز موعد تصليح أفران البا داخل العاصمة الإدارية؟",
        a: (
          <p>
            <span>الحجز يتم بمكالمة واحدة؛ نرسل لك مهندساً متخصصاً في </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة افران البا</strong>
            </a>
            <span> و </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D9%81%D8%B1%D9%86-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة فرن البا بلت ان</strong>
            </a>
            <span> للقيام بالإصلاح الفوري بقطع غيار أصلية وضمان موثق.</span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "هل تتوفر صيانة شفاط البا في العاصمة الإدارية الجديدة؟",
        a: (
          <p>
            <span>بالتأكيد، كافة أعمال </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D8%A7"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة شفاط البا</strong>
            </a>
            <span> و </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة شفاط البا بلت ان</strong>
            </a>
            <span>
              {" "}
              تتم باستخدام قطع غيار إيطالية لضمان قوة الشفط المثالية في مطابخ
              العاصمة المتطورة.
            </span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "هل يوجد ضمان على صيانة غسالات أطباق البا بالعاصمة؟",
        a: (
          <p>
            <span>نعم، جميع خدمات </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%BA%D8%B3%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D8%B7%D8%A8%D8%A7%D9%82-%D8%A7%D9%84%D8%A8%D8%A7"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة غسالات اطباق البا</strong>
            </a>
            <span> و </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%BA%D8%B3%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D8%B7%D8%A8%D8%A7%D9%82-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة غسالات اطباق البا بلت ان</strong>
            </a>
            <span>
              {" "}
              تشمل ضماناً معتمداً على قطع الغيار الأصلية والمصنعية لراحة سكان
              العاصمة.
            </span>
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
          name: "مركز صيانة البا العاصمة الإدارية المعتمد",
          url: "https://alba-eg.com/صيانة-البا-في-العاصمة-الإدارية-الجديدة",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New Administrative Capital",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.9861,
            longitude: 31.7411,
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
            opens: "09:00",
            closes: "22:00",
          },
          areaServed: [
            { "@type": "City", name: "العاصمة الإدارية الجديدة" },
            { "@type": "City", name: "الحي السكني R3" },
            { "@type": "City", name: "الحي السكني R5" },
            { "@type": "City", name: "منطقة المستثمرين" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "ما هو رقم صيانة البا في العاصمة الإدارية لطلب خدمة سريعة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "رقم صيانة البا العاصمة الإدارية هو 01211114528. نصلك في الحي السكني R3 والحي الخامس وجميع أحياء العاصمة بقطع غيار أصلية وضمان 12 شهر.",
              },
            },
            {
              "@type": "Question",
              name: "هل يتوفر فني صيانة بوتاجاز البا في الحي السكني R3؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، نوفر خدمة صيانة بوتاجاز البا وصيانة بوتاجاز البا بلت ان في الحي السكني R3 وجميع مناطق العاصمة الإدارية فور طلب الخدمة.",
              },
            },
            {
              "@type": "Question",
              name: "كيف أحجز موعد تصليح أفران البا داخل العاصمة الإدارية؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "الحجز يتم عبر الاتصال بالرقم 01211114528 لإرسال مهندس متخصص في صيانة افران البا وصيانة فرن البا بلت ان للإصلاح الفوري بالمنزل في العاصمة الإدارية.",
              },
            },
            {
              "@type": "Question",
              name: "هل تتوفر صيانة شفاط البا في العاصمة الإدارية الجديدة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "بالتأكيد، كافة أعمال صيانة شفاط البا وصيانة شفاط البا بلت ان في العاصمة الإدارية تتم باستخدام قطع غيار إيطالية أصلية وبضمان معتمد.",
              },
            },
            {
              "@type": "Question",
              name: "هل يوجد ضمان على صيانة غسالات أطباق البا بالعاصمة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، جميع خدمات صيانة غسالات اطباق البا وصيانة غسالات اطباق البا بلت ان في العاصمة الإدارية تشمل ضماناً معتمداً ومعتبراً على قطع الغيار والمصنعية.",
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
                صيانة البا في العاصمة الإدارية الجديدة | خدمة ذكية Elba{" "}
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
                    أفضل مركز صيانة أجهزة البا في الحي السكني R3 والعاصمة{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      <span>نحن فخورون بكوننا الرواد في تقديم خدمة </span>
                      <a
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
                        className={LINK_CLASS}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>صيانة البا في مصر</span>
                      </a>
                      <span>
                        {" "}
                        داخل قلب العاصمة الإدارية الجديدة. إن السكن في مدينة
                        ذكية يتطلب خدمة صيانة متطورة تضاهيها في الدقة، لذا وفرنا
                        أسطولاً مجهزاً للتحرك الفوري بمجرد تواصلكم على{" "}
                      </span>
                      <a
                        href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                        className={LINK_CLASS}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>رقم صيانة البا</span>
                      </a>
                      <span>
                        {" "}
                        الموحد. نغطي بخدماتنا الحي السكني الثالث R3، والحي
                        السكني الخامس R5، ومنطقة المستثمرين، مع الالتزام الكامل
                        بكافة معايير الجودة والأمان. فريقنا من المهندسين مدرب
                        على التعامل مع أحدث إصدارات Elba الإيطالية الذكية، لضمان
                        استعادة كفاءة أجهزتكم داخل المنزل دون الحاجة لنقلها، مع
                        مراعاة كافة تصاريح الدخول والالتزام بالهدوء التام الذي
                        يميز العاصمة الجديدة.
                      </span>
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
              <div className=" lg:col-span-7 lg:order-2">
                <div className="max-w-none space-y-4 text-right">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-cairo lg:mt-16">
                    توكيل تصليح Elba بالعاصمة الإدارية بقطع غيار أصلية
                    وضمان{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      <span>يعد مركزنا الوجهة الأولى الموثوقة لعمليات </span>
                      <a
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
                        className={LINK_CLASS}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>صيانة أجهزة elba</span>
                      </a>
                      <span>
                        {" "}
                        في العاصمة الإدارية، حيث نعتمد حصرياً على قطع غيار أصلية
                        تناسب تكنولوجيا أجهزة البلت إن الفاخرة. نحن نوفر حلولاً
                        هندسية متكاملة تضمن إطالة العمر الافتراضي لأفران
                        وبوتاجازات Elba، مع استخدام أجهزة فحص رقمية متطورة
                        تتماشى مع طبيعة المنشآت الحديثة بالعاصمة. يحرص مهندسونا
                        على تسليم شهادة ضمان معتمدة بعد إتمام الإصلاح المنزلي،
                        مما يوفر لسكان العاصمة الإدارية الطمأنينة والاحترافية
                        التي ينشدونها. سواء كنت في الحي المالي أو المناطق
                        السكنية الراقية، نضمن لك خدمة صيانة دورية وقائية تحافظ
                        على استقرار أداء مطبخك وتمنع الأعطال المفاجئة قبل
                        حدوثها.
                      </span>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 font-cairo text-right">
            الأسئلة الشائعة - صيانة البا العاصمة الإدارية
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

export default NewCapitalPageAr;
