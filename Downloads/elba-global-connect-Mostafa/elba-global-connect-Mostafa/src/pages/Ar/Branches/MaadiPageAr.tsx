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

const MaadiPageAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة البا في المعادي | رقم خدمة عملاء البا 01211114528 صيانة فورية`;
  const metaDescription = `مركز صيانة البا في المعادي يقدم خدمة صيانة وإصلاح جميع أجهزة البا داخل دجلة والمعادي القديمة مع سرعة وصول وضمان معتمد على قطع الغيار. اتصل الآن 01211114528 لحجز صيانة منزلية فورية.`;

  const faqs: FaqItemType[] = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة البا المعادي المعتمد لخدمة النجدة السريعة؟",
        a: (
          <p>
            <span>رقم صيانة البا المعادي المعتمد هو </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>01211114528</strong>
            </a>
            <span>
              ؛ اتصل بنا الآن لطلب فني تصليح منزلي يصلك في غضون ساعات بجميع
              أحياء المعادي بقطع غيار أصلية.
            </span>
          </p>
        ),
        aText: `إذا كنت بحاجة إلى إصلاح عاجل، اتصل على رقم صيانة بوتاجاز البا ${PHONE_DISPLAY} لحجز صيانة منزلية سريعة. يتم تسجيل بيانات العطل وتحديد أقرب موعد لزيارة فني متخصص مع تجهيز قطع الغيار المناسبة قبل الوصول.`,
      },
      {
        q: "هل يوجد فني صيانة بوتاجاز البا قريب مني في دجلة أو زهراء المعادي؟",
        a: (
          <p>
            <span>
              نعم، نوفر مهندسين متخصصين متواجدين بصفة دائمة في (دجلة المعادي،
              زهراء المعادي، والمعادي القديمة) لتقديم خدمة{" "}
            </span>
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
            <span> فور اتصالك بالرقم </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>01211114528</strong>
            </a>
            <span>.</span>
          </p>
        ),
        aText: `لحجز صيانة معتمدة اتصل على رقم توكيل بوتاجاز البا ${PHONE_DISPLAY} واشرح العطل بالتفصيل. يتم إرسال فني مختص حسب نوع الجهاز لضمان تشخيص دقيق وإصلاح آمن بقطع غيار أصلية مع ضمان.`,
      },
      {
        q: "كيف أحجز تصليح أفران البا في ثكنات المعادي أو الأوتوستراد؟",
        a: (
          <p>
            <span>يمكنك حجز موعد </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة افران البا</strong>
            </a>
            <span> أو </span>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D9%81%D8%B1%D9%86-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>صيانة فرن البا بلت ان</strong>
            </a>
            <span>
              {" "}
              بمكالمة واحدة؛ نصلك في المعادي القديمة والجديدة بقطع غيار إيطالية
              وضمان معتمد على الإصلاح بالمنزل.
            </span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "هل يوفر توكيل المعادي صيانة شفاط البا في نفس اليوم؟",
        a: (
          <p>
            <span>بالتأكيد، بمجرد التواصل مع </span>
            <strong>توكيل صيانة البا بالمعادي</strong>
            <span>، نرسل لك فنياً متخصصاً لعمل </span>
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
            <span> وضبط قوة الشفط فوراً لضمان سلامة مطبخك.</span>
          </p>
        ),
        aText: `اتصل برقم خدمة عملاء بوتاجاز البا ${PHONE_DISPLAY} فور ملاحظة أي خلل مثل تسريب الغاز أو ضعف الحرارة أو توقف الفرن، لتسجيل البلاغ وتحديد موعد صيانة منزلية مع متابعة الطلب حتى الانتهاء.`,
      },
      {
        q: "ما هو رقم توكيل صيانة غسالات أطباق البا بالمعادي؟",
        a: (
          <p>
            <span>يمكنك طلب خدمة </span>
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
            <span> عبر الرقم </span>
            <a
              href="https://api.whatsapp.com/send/?phone=201211114528&text&type=phone_number&app_absent=0"
              className={LINK_CLASS}
              target="_blank"
              rel="noreferrer"
            >
              <strong>01211114528</strong>
            </a>
            <span>
              ؛ نحن نضمن لك إصلاحاً احترافياً ودقيقاً دون الحاجة لنقل الجهاز
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
          name: "صيانة البا المعادي",
          url: "https://alba-eg.com/صيانة-البا-المعادي",
          image:
            "https://westinghouse-egy.com/wp-content/uploads/2026/02/Elba-Egypt.png",
          telephone: "+201211114528",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Maadi",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
          areaServed: ["دجلة المعادي", "المعادي القديمة", "المعادي الجديدة"],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "ما هو رقم صيانة البا المعادي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "رقم صيانة البا المعتمد في المعادي هو 01211114528 لطلب تصليح منزلي فوري بقطع غيار أصلية.",
              },
            },
            {
              "@type": "Question",
              name: "أين أجد مركز صيانة بوتاجاز البا في دجلة المعادي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "يقدم مركز صيانة بوتاجاز البا خدماته المنزلية في دجلة وكافة أحياء المعادي عبر الاتصال بالرقم 01211114528.",
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
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 font-cairo leading-tight lg:leading-[5rem]">
                صيانة البا في المعادي | رقم توكيل دجلة والمعادي القديمة صيانة
                البا في المعادي | رقم توكيل Elba المعتمد
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
                    أفضل مركز صيانة البا في المعادي{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      يعتبر مركزنا هو الوجهة المعتمدة الأولى لكل من يبحث عن خدمة{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        صيانة البا في مصر{" "}
                      </a>
                      داخل حي المعادي الراقي، حيث نقدم حلولاً تقنية متكاملة تضمن
                      استعادة كفاءة أجهزتكم الإيطالية في أسرع وقت ممكن. نحن ندرك
                      تماماً طبيعة واحتياجات سكان المعادي، لذا وفرنا أسطولاً من
                      المهندسين الجاهزين للتحرك الفوري بمجرد تواصلكم على
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        رقم صيانة البا
                      </a>{" "}
                      الموحد والمعتمد لاستقبال البلاغات. تغطي خدماتنا كافة أرجاء
                      المعادي بدءاً من منطقة دجلة الهادئة والمعادي القديمة
                      (ثكنات المعادي) وصولاً إلى المعادي الجديدة ومنطقة زهراء
                      المعادي والأوتوستراد، مع الالتزام الكامل بتقديم خدمة تصليح
                      منزلية شاملة تتبع أدق معايير الجودة، مما يضمن لعملائنا في
                      المعادي الحصول على دعم فني محترف دون الحاجة لنقل الأجهزة
                      خارج المنزل.
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
                    توكيل تصليح Elba المعادي بضمان وقطع غيار أصلية{" "}
                  </h2>

                  <div className="space-y-3 ">
                    <p className="text-muted-foreground leading-relaxed lg:leading-10 font-cairo lg:text-2xl font-semibold">
                      عندما تختار التعامل مع{" "}
                      <a
                        className={LINK_CLASS}
                        href="https://alba-eg.com/صيانة-أجهزة-elba"
                        target="_blank"
                        rel="noreferrer"
                      >
                        توكيل صيانة البا{" "}
                      </a>{" "}
                      في المعادي، فإنك تضمن الحصول على قطع غيار أصلية ومعتمدة
                      100% مستوردة لضمان أفضل أداء لأجهزتكم وتجنب تكرار الأعطال
                      المزعجة. نحن نتميز عن غيرنا بالسرعة في تلبية الطلبات
                      وتوفير فنيين متخصصين لديهم خبرة طويلة في تصليح أجهزة Elba
                      بمختلف موديلاتها الحديثة والقديمة، مما جعلنا المركز الأكثر
                      ثقة في جنوب القاهرة لتقديم الدعم الفني والتقني. يتميز
                      مركزنا بالدقة المتناهية في المواعيد والشفافية في تحديد
                      التكلفة قبل البدء، كما نوفر شهادات ضمان موثقة على كافة
                      أعمال الصيانة والقطع المستبدلة التي تتم داخل منزلك، مما
                      يوفر لجميع سكان حي المعادي ودجلة الأمان الكامل والاحترافية
                      في التعامل مع مركز صيانة يمتلك كافة الأدوات الحديثة لفحص
                      الأجهزة إلكترونياً.
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
            الأسئلة الشائعة - صيانة البا المعادي
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

export default MaadiPageAr;
