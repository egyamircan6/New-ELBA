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

const HeliopolisPageAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة البا في مصر الجديدة | رقم خدمة عملاء البا 01211114528
`;
  const metaDescription = `مركز صيانة البا في مصر الجديدة يوفر صيانة وإصلاح جميع أجهزة البا داخل هليوبوليس والمناطق المجاورة مع سرعة وصول وضمان معتمد على الخدمة وقطع الغيار. اتصل الآن 01211114528 لحجز صيانة فورية.`;

  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة البا مصر الجديدة لخدمة النجدة الفورية؟",
        a: (
          <p>
            رقم صيانة البا مصر الجديدة هو{" "}
            <a
              href={`https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              01211114528{" "}
            </a>
            ؛ اتصل بنا الآن لطلب فني تصليح منزلي يصلك فوراً في هليوبوليس أو
            شيراتون
          </p>
        ),
        aText: `إذا كنت بحاجة إلى إصلاح عاجل، اتصل على رقم صيانة بوتاجاز البا ${PHONE_DISPLAY} لحجز صيانة منزلية سريعة. يتم تسجيل بيانات العطل وتحديد أقرب موعد لزيارة فني متخصص مع تجهيز قطع الغيار المناسبة قبل الوصول.`,
      },
      {
        q: "هل يوجد فني صيانة بوتاجاز البا قريب مني في الميرغني أو تريومف؟",
        a: (
          <p>
            نعم، لدينا فريق عمل متاح باستمرار بالقرب من (شارع الميرغني، تريومف،
            والكوربة) لتقديم خدمة{" "}
            <a
              href={`https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              صيانة بوتاجاز البا{" "}
            </a>{" "}
            و{" "}
            <a
              href={`https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              صيانة بوتاجاز البا بلت ان{" "}
            </a>{" "}
            بمجرد الاتصال بالرقم{" "}
            <a
              href={`https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0`}
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              01211114528.
            </a>
          </p>
        ),
        aText: `لحجز صيانة معتمدة اتصل على رقم توكيل بوتاجاز البا ${PHONE_DISPLAY} واشرح العطل بالتفصيل. يتم إرسال فني مختص حسب نوع الجهاز لضمان تشخيص دقيق وإصلاح آمن بقطع غيار أصلية مع ضمان.`,
      },
      {
        q: "كيف أحجز موعد تصليح أفران البا في مصر الجديدة؟",
        a: (
          <p>
            <span>الحجز يتم في ثوانٍ عبر الهاتف؛ نرسل لك مهندس متخصص في </span>
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
            <span> للقيام بالإصلاح الفوري في منزلك بضمان معتمد.</span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "أين أجد قطع غيار شفاط البا الأصلية في هليوبوليس؟",
        a: (
          <p>
            <span>جميع القطع الإيطالية متوفرة لدى توكيلنا؛ اتصل على </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>01211114528</strong>
            </a>
            <span> لطلب خدمة </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D8%A7"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة شفاط البا</strong>
            </a>
            <span> أو </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة شفاط البا بلت ان</strong>
            </a>
            <span> بقطع غيار أصلية.</span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "ما هو رقم توكيل صيانة غسالات أطباق البا بمصر الجديدة؟",
        a: (
          <p>
            <span>الرقم الموحد هو </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>01211114528</strong>
            </a>
            <span>؛ نحن نضمن لك أفضل </span>
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
            <span> في المنطقة.</span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "هل يوجد ضمان على صيانة غسالات أطباق البا في هليوبوليس؟",
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
              تشمل ضماناً حقيقياً على الإصلاح بالمنزل لضمان راحة عملائنا.
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
          name: "صيانة البا مصر الجديدة",
          url: "https://alba-eg.com/صيانة-البا-مصر-الجديدة",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Heliopolis",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: { "@type": "City", name: "مصر الجديدة" },
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "ما هو رقم صيانة البا مصر الجديدة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "رقم صيانة البا المعتمد في مصر الجديدة هو 01211114528 لحجز تصليح منزلي فوري.",
              },
            },
            {
              "@type": "Question",
              name: "أين أجد مركز صيانة بوتاجاز البا في هليوبوليس؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "يقدم مركز صيانة بوتاجاز البا بمصر الجديدة خدماته في المنزل عبر الاتصال بالرقم 01211114528.",
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
                صيانة البا في مصر الجديدة | رقم توكيل هليوبوليس المعتمد
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
                    أفضل مركز صيانة أجهزة البا في حي مصر الجديدة{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      إذا كنت تبحث عن التميز، فإننا نوفر لك أرقى خدمة
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        صيانة البا في مصر{" "}
                      </a>
                      لتلبية احتياجات سكان مصر الجديدة وهليوبوليس بكفاءة منقطعة
                      النظير. نحن نعي جيداً قيمة الوقت لعملائنا، لذا خصصنا
                      فريقاً من المهندسين المحترفين للتحرك الفوري بمجرد تواصلكم
                      على **
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        رقم صيانة البا
                      </a>
                      ** الموحد، لضمان تغطية شاملة لكافة شوارع المنطقة بدءاً من
                      الكوربة والميرغني وصولاً إلى ميدان تريومف ومساكن شيراتون.
                      نلتزم بتقديم حلول تقنية جذرية تضمن عودة أجهزتكم الإيطالية
                      لحالتها الأولى، مع توفير فحص إلكتروني دقيق يتم داخل منزلك
                      بمصر الجديدة دون الحاجة لنقل الجهاز، مما يوفر لك أقصى
                      درجات الراحة والأمان الفني.
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
                    توكيل تصليح Elba بمصر الجديدة بقطع غيار أصلية وضمان{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      يعد مركزنا هو الوجهة الموثوقة لكل من يرغب في{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
                        target="_blank"
                        rel="noreferrer"
                      >
                        صيانة أجهزة elba
                      </a>{" "}
                      بمواصفات المصنع الأصلية في قلب مصر الجديدة. نحن نتميز عن
                      غيرنا بالشفافية المطلقة وتوفير قطع غيار إيطالية معتمدة
                      تضمن إطالة العمر الافتراضي للجهاز وتجنب الأعطال المفاجئة.
                      يقوم خبراء الصيانة لدينا بتقديم دعم فني مخصص لسكان
                      هليوبوليس يرتكز على السرعة والاحترافية في التنفيذ، مع
                      تسليم شهادة ضمان موثقة على كافة أعمال التصليح والقطع
                      المستبدلة. هدفنا هو بناء ثقة مستدامة مع عملائنا في شرق
                      القاهرة عبر تقديم خدمة منزلية فورية تتسم بالدقة العالية
                      وتتبع أرقى معايير الجودة العالمية في صيانة الأجهزة
                      المنزلية بأسعار تنافسية.
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
            الأسئلة الشائعة - صيانة البا مصر الجديدة (هليوبوليس)
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

export default HeliopolisPageAr;
