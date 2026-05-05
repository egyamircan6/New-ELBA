import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

import ovenImg from "@/assest/elba-oven.png.png";

const PHONE_DISPLAY = "01211114528";
const PHONE_TEL = "+201211114528";
const WHATSAPP_WA = "201211114528";

const DOMAIN = "https://elba-eg.com";
const SITE_URL = "https://alba-eg.com/";
const PAGE_URL = "https://alba-eg.com/صيانة-فرن-البا-بلت-ان";
const BRAND_URL = "https://americangroup-eg.com/";

const LINK_CLASS = "text-blue-600 underline font-semibold hover:text-blue-700";

const OvenBuiltinElbaAr = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const metaTitle = `صيانة فرن إلبا بلت إن | تصليح منزلي بقطع غيار أصلية | اتصل ${PHONE_DISPLAY}`;
  const metaDescription = `هل تبحث عن صيانة فرن إلبا بلت إن المعتمدة؟ الشركة الأمريكية جروب توفر فنيين متخصصين وقطع غيار أصلية وضمان لمدة عام. اتصل الآن على ${PHONE_DISPLAY} لخدمة منزلية فورية.`;

  const h1 = "مرحباً بك في مركز صيانة فرن إلبا بلت إن المعتمد";

  const tips = useMemo(
    () => [
      "نظّف الفرن بانتظام لتجنب تراكم الدهون.",
      "تجنب غلق باب الفرن بعنف للحفاظ على المفصلات والزجاج.",
      "لو التسخين ضعيف، غالباً الترموستات أو السخان يحتاج فحص.",
      "لا تغطي فتحات التهوية للحفاظ على ثبات أداء مروحة التبريد.",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: "ما هو رقم صيانة فرن إلبا بلت إن المعتمد في مصر؟",
        a: (
          <p>
            اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            للتواصل مع{" "}
            <a
              className={LINK_CLASS}
              href={BRAND_URL}
              target="_blank"
              rel="noreferrer"
            >
              الشركة الأمريكية جروب
            </a>{" "}
            وحجز صيانة منزلية فورية لفرن إلبا بلت إن مع قطع غيار أصلية وضمان.
          </p>
        ),
        aText: `اتصل على ${PHONE_DISPLAY} للتواصل مع الشركة الأمريكية جروب وحجز صيانة منزلية فورية لفرن إلبا بلت إن مع قطع غيار أصلية وضمان.`,
      },
      {
        q: "كيف أصلح فرن إلبا لو مش بيسخن؟",
        a: (
          <p>
            غالباً السبب سخان أو ترموستات. اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            لإرسال فني للفحص والاستبدال في نفس الزيارة بقطع أصلية.
          </p>
        ),
        aText: `غالباً السبب سخان أو ترموستات. اتصل على ${PHONE_DISPLAY} لإرسال فني للفحص والاستبدال في نفس الزيارة بقطع أصلية.`,
      },
      {
        q: "منين أجيب قطع غيار فرن إلبا الأصلية؟",
        a: (
          <p>
            قطع الغيار الأصلية مثل المفصلات والزجاج الحراري وقطع الإشعال متاحة
            عبر{" "}
            <a
              className={LINK_CLASS}
              href={BRAND_URL}
              target="_blank"
              rel="noreferrer"
            >
              الأمريكية جروب
            </a>
            . اطلب القطعة أو التركيب عبر{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            أو{" "}
            <a
              className={LINK_CLASS}
              href={`https://wa.me/${WHATSAPP_WA}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              واتساب
            </a>
            .
          </p>
        ),
        aText: `قطع الغيار الأصلية مثل المفصلات والزجاج الحراري وقطع الإشعال متاحة عبر الأمريكية جروب. اطلب القطعة أو التركيب عبر ${PHONE_DISPLAY} أو واتساب.`,
      },
      {
        q: "ليه شعلة فرن إلبا الغاز بتطفى فجأة؟",
        a: (
          <p>
            ده غالباً بسبب حساس أمان أو انسداد الفونيات. اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            لإرسال فني لتنظيف آمن وتغيير الحساس.
          </p>
        ),
        aText: `ده غالباً بسبب حساس أمان أو انسداد الفونيات. اتصل على ${PHONE_DISPLAY} لإرسال فني لتنظيف آمن وتغيير الحساس.`,
      },
      {
        q: "هل عندكم فني متخصص للأجهزة البلت إن؟",
        a: (
          <p>
            نعم، لدينا فنيين متخصصين في البلت إن لفك وتركيب آمن بدون ضرر للمطبخ.
            احجز عبر{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `نعم، لدينا فنيين متخصصين في البلت إن لفك وتركيب آمن بدون ضرر للمطبخ. احجز عبر ${PHONE_DISPLAY}.`,
      },
      {
        q: "إزاي بتغيروا زجاج فرن إلبا المكسور؟",
        a: (
          <p>
            بنركب زجاج حراري أصلي بالمقاس الصحيح مع تركيب منزلي سريع. اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `بنركب زجاج حراري أصلي بالمقاس الصحيح مع تركيب منزلي سريع. اتصل على ${PHONE_DISPLAY}.`,
      },
      {
        q: "ليه بتظهر Error Codes على شاشة فرن إلبا؟",
        a: (
          <p>
            الرموز بتشير لمشكلة في البوردة أو الحساسات. اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            للتشخيص وإعادة الضبط والإصلاح.
          </p>
        ),
        aText: `الرموز بتشير لمشكلة في البوردة أو الحساسات. اتصل على ${PHONE_DISPLAY} للتشخيص وإعادة الضبط والإصلاح.`,
      },
      {
        q: "هل الصيانة عليها ضمان؟",
        a: (
          <p>
            نعم، كل صيانة تشمل <strong>ضمان مكتوب</strong> على قطع الغيار
            والمصنعية. احجز عبر{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ),
        aText: `نعم، كل صيانة تشمل ضمان مكتوب على قطع الغيار والمصنعية. احجز عبر ${PHONE_DISPLAY}.`,
      },
      {
        q: "إزاي أحافظ على مفصلات فرن إلبا؟",
        a: (
          <p>
            تجنب العنف في غلق الباب ونظف الدهون. لو الباب مش بيقفل كويس اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            لتغيير المفصلات الأصلية.
          </p>
        ),
        aText: `تجنب العنف في غلق الباب ونظف الدهون. لو الباب مش بيقفل كويس اتصل على ${PHONE_DISPLAY} لتغيير المفصلات الأصلية.`,
      },
      {
        q: "هل في صيانة قريبة مني؟",
        a: (
          <p>
            بنغطي أغلب المناطق بخدمة متنقلة. اتصل على{" "}
            <a className={LINK_CLASS} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            ونوصلك في البيت بدون نقل الجهاز.
          </p>
        ),
        aText: `بنغطي أغلب المناطق بخدمة متنقلة. اتصل على ${PHONE_DISPLAY} ونوصلك في البيت بدون نقل الجهاز.`,
      },
    ],
    [],
  );

  const schemas = useMemo(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "الشركة الأمريكية جروب - صيانة فرن إلبا بلت إن",
      url: PAGE_URL,
      telephone: PHONE_TEL,
      areaServed: [{ "@type": "Country", name: "Egypt" }],
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
    };

    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.aText },
      })),
    };

    return [localBusiness, faqPage];
  }, [faqs, metaDescription]);

  const steps = useMemo(
    () => [
      {
        num: "01",
        title: "طلب صيانة",
        desc: "سجّل طلبك وحدد أفضل وقت لزيارة الفني.",
      },
      {
        num: "02",
        title: "زيارة الفني",
        desc: "فني متخصص يصل ومعه الأدوات وقطع الغيار المطلوبة.",
      },
      {
        num: "03",
        title: "إصلاح وضمان",
        desc: "إصلاح شامل + ضمان على الخدمة وقطع الغيار.",
      },
    ],
    [],
  );

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />

      {schemas.map((obj, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=700&fit=crop"
          alt="صيانة فرن إلبا بلت إن"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            <p className="text-sm md:text-base text-white/70 mb-2">
              خدمة منزلية
            </p>

            <h1
              className={cn(
                "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 lg:leading-[5rem]",
                "font-cairo",
              )}
            >
              {h1}
            </h1>

            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              صيانة منزلية سريعة — قطع غيار أصلية وضمان معتمد مع فحص دقيق.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8"
              >
                اطلب صيانة
              </Button>

              <a
                href={`https://wa.me/${WHATSAPP_WA}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green-500 hover:bg-white hover:text-foreground gap-2 text-lg px-8 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </Button>
              </a>

              <a href={`tel:${PHONE_TEL}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-foreground gap-2 text-lg px-8 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  اتصال
                </Button>
              </a>
            </div>

            <div className="mt-4 text-sm text-white/70">
              رقم الخدمة:{" "}
              <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
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
              "font-cairo",
            )}
          >
            خطوات الخدمة
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
                    "font-cairo",
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

      {/* Content */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2
            className={cn(
              "text-2xl md:text-3xl font-bold text-center mb-12 text-foreground",
              "font-cairo",
            )}
          >
            خدمة صيانة فرن إلبا بلت إن
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  صيانة أعطال الفرن
                </div>

                <img
                  src={ovenImg}
                  alt="فرن إلبا بلت إن"
                  className="w-full h-auto rounded-xl shadow-lg"
                />

                <div className="flex gap-1 mt-4 justify-center">
                  {[1, 2, 3].map((i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-1">
                  {DOMAIN}
                </p>
              </div>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-8">
                <div>
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold mb-3 text-foreground",
                      "font-cairo",
                    )}
                  >
                    لماذا تختارنا لـ صيانة فرن إلبا بلت إن؟
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    إلبا ماركة إيطالية معروفة بجودة أجهزة المطبخ، لكن حتى أفضل
                    الأجهزة تحتاج صيانة دورية. نحن نقدم صيانة فرن إلبا بلت إن
                    داخل مصر من خلال مهندسين متخصصين في التكنولوجيا الإيطالية،
                    مع قطع غيار أصلية وسرعة استجابة عالية عبر الشركة الأمريكية
                    جروب. اتصل الآن على {PHONE_DISPLAY}
                    واحجز زيارة منزلية آمنة.
                  </p>
                </div>

                <div>
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold mb-3 text-foreground",
                      "font-cairo",
                    )}
                  >
                    هل تحتاج فني صيانة فرن إلبا بلت إن قريب منك في القاهرة؟
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    لو أنت في القاهرة وتحتاج سرعة ودقة، نقدر نوصلك فني متخصص في
                    نفس اليوم. نوفر صيانة منزلية فورية بدون نقل الجهاز أو
                    التأثير على دواليب المطبخ. فريقنا يستخدم أدوات فحص رقمية
                    لتحديد أعطال الحساسات والترموستات بدقة. اتصل على{" "}
                    {PHONE_DISPLAY} أو راسلنا واتساب.
                  </p>
                </div>

                <div>
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold mb-3 text-foreground",
                      "font-cairo",
                    )}
                  >
                    أشهر أعطال فرن إلبا بلت إن وكيف نصلحها
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    أسئلة كتير بتتكرر: ليه الفرن مش بيسخن؟ ليه الشعلة بتطفى؟
                    غالباً السبب بيكون حساس حراري، ترموستات، سخان، مشكلة إشعال،
                    أو انسداد بالفونيات. بنعمل معايرة للحرارة، إصلاح أعطال
                    المروحة، تغيير مفصلات، وفحص كامل لدائرة الأمان لتجنب تسريب
                    الغاز وحماية بيتك. اتصل فوراً على {PHONE_DISPLAY}.
                  </p>
                </div>

                <div>
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold mb-3 text-foreground",
                      "font-cairo",
                    )}
                  >
                    قطع غيار أصلية وضمان معتمد
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    متوفر لدينا مخزون من قطع الغيار الأصلية الخاصة بأفران إلبا:
                    زجاج حراري، مفصلات، قطع إشعال، سخانات، ترموستات وغيرها. كل
                    قطعة يتم تركيبها معها ضمان مكتوب. لو محتاج قطعة غيار أو
                    تركيب بالمنزل اتصل على {PHONE_DISPLAY}.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  اطلب صيانة
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_WA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </Button>
                </a>

                <a href={`tel:${PHONE_TEL}`}>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone className="w-5 h-5" />
                    اتصل الآن
                  </Button>
                </a>
              </div>
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
                "font-cairo",
              )}
            >
              نصائح للحفاظ على الفرن
            </h2>

            <ul className="space-y-4 mb-8">
              {tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <p className="text-muted-foreground leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-6 font-medium">
              محتاج مساعدة؟ اطلب الصيانة الآن.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                اطلب صيانة
              </Button>

              <a
                href={`https://wa.me/${WHATSAPP_WA}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className={cn(
                  "text-2xl md:text-3xl font-bold text-foreground mb-2",
                  "font-cairo",
                )}
              >
                الأسئلة الشائعة
              </h2>
              <p className="text-muted-foreground">
                إجابات أهم الأسئلة المتكررة.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border-none shadow-sm px-6"
                >
                  <AccordionTrigger
                    className={cn(
                      "text-foreground font-medium hover:no-underline text-right",
                      "font-cairo",
                    )}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-right">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center">
              <Link to="/ar/صيانة-اجهزة-البا">
                <Button variant="outline">العودة للأجهزة</Button>
              </Link>
            </div>
          </div>
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

export default OvenBuiltinElbaAr;
