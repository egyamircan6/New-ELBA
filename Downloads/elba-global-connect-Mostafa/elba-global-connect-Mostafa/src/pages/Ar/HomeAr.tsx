import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  Shield,
  Clock,
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Headphones,
  BadgeCheck,
  Truck,
  Timer,
  MapPin
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {Helmet} from "react-helmet";
import FAQSectionHome from "@/components/FAQ/AR/FAQHomeSection";


// Sample blog articles
const blogArticles = [
  {
    id: 1,
    slug: "cooker-maintenance-tips",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    titleEn: "Essential Cooker Maintenance Tips",
    titleAr: "نصائح أساسية لصيانة البوتاجاز",
    excerptEn: "Learn how to keep your Elba cooker in perfect condition with these simple maintenance tips.",
    excerptAr: "تعلم كيفية الحفاظ على بوتاجاز إلبا في حالة ممتازة مع هذه النصائح البسيطة للصيانة.",
  },
  {
    id: 2,
    slug: "oven-cleaning-guide",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop",
    titleEn: "Complete Oven Cleaning Guide",
    titleAr: "دليل شامل لتنظيف الفرن",
    excerptEn: "A step-by-step guide to deep clean your oven and maintain its performance.",
    excerptAr: "دليل خطوة بخطوة لتنظيف الفرن بعمق والحفاظ على أدائه.",
  },
  {
    id: 3,
    slug: "hood-filter-replacement",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop",
    titleEn: "When to Replace Your Hood Filter",
    titleAr: "متى يجب تغيير فلتر الشفاط",
    excerptEn: "Signs that indicate its time to replace your range hood filter for optimal performance.",
    excerptAr: "علامات تشير إلى أن الوقت قد حان لتغيير فلتر الشفاط للحصول على أداء مثالي.",
  },
];

const Home = () => {
  const { t, isRTL, language, localePath } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const whatsappNumber = "01211114528";
  const phoneNumber = "+201211114528";

  const services = [
    { icon: Wrench, title: t("services.repair.title"), desc: t("services.repair.desc") },
    { icon: Settings, title: t("services.installation.title"), desc: t("services.installation.desc") },
    { icon: Shield, title: t("services.maintenance.title"), desc: t("services.maintenance.desc") },
    { icon: Clock, title: t("services.emergency.title"), desc: t("services.emergency.desc") },
  ];

  const features = [
    { icon: BadgeCheck, labelEn: "Certified Technicians", labelAr: "فنيون معتمدون" },
    { icon: Truck, labelEn: "Original Spare Parts", labelAr: "قطع غيار أصلية" },
    { icon: Timer, labelEn: "Fast Service", labelAr: "خدمة سريعة" },
    { icon: Headphones, labelEn: "24/7 Support", labelAr: "دعم على مدار الساعة" },
  ];

  const stats = [
    { icon: Star, value: "15+", label: t("why.experience") },
    { icon: Users, value: "50+", label: t("why.technicians") },
    { icon: Award, value: "100%", label: t("why.warranty") },
    { icon: CheckCircle, value: "100%", label: t("why.parts") },
  ];

  const linkBlueStyle = { color: "blue" };


  return (
    <Layout>

        <Helmet>
        <title>صيانة elba في مصر | مركز صيانة البا بالمنزل بضمان معتمد</title>
        <meta charSet="utf-8" />
        <meta name="description" content="احصل على أفضل خدمة صيانة elba في مصر مع مركز متخصص في تصليح أجهزة البا بالمنزل. نوفر قطع غيار أصلية وضمان صيانة مكتوب مع استجابة سريعة داخل القاهرة. اتصل الآن لحجز فني صيانة elba بأعلى معايير الجودة." />
        <link rel="canonical" href="http://elba-eg" />
    </Helmet>
      <SEOHead />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-primary/90 to-foreground">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/40" />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white leading-[3] ">
            <h1
              className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 animate-fade-in-up font-cairo leading-[4rem]"
            >
             مركز صيانة elba في مصر – صيانة البا بالمنزل وقطع غيار أصلية بضمان معتمد

            </h1>
            <p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t("hero.subtitle")}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white gap-2 text-lg px-8 py-6 shadow-lg hover-lift"
              >
                <MessageCircle className="w-5 h-5" />
                {t("hero.cta.request")}
              </Button>

              <a href={`tel:${phoneNumber}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green-500 hover:bg-white hover:text-foreground gap-2 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  {t("hero.cta.call")}
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Elba Maintenance Section 1  */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            مركز صيانة <span className="text-primary">Elba</span>
            </h2>

          </div>

          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center")}>
            <div className="relative animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span>🔥</span> 3+1
                </div>
                <div className="bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] rounded-xl p-6">
                  <div className="text-center mb-4">
                    <span className={cn("inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold",)}>
                  مركز صيانة أجهزة إلبا
                    </span>

                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                    alt="Elba Appliances"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2
                className={cn( "text-2xl md:text-3xl font-bold mb-6 text-foreground",)} >
               لماذا نحن أفضل مركز صيانة elba في مصر؟
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
              
                <ul>
      <li>
        لأننا نوفر فنيون متخصصون في{" "}
        <a
          href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
          style={{ color: "blue" }}
        >
          <strong>صيانة أجهزة elba</strong>
        </a>
      </li>

      <li>
        نقدم تشخيص دقيق لجميع أعطال البا باستخدام أجهزة فحص حديثة
      </li>

      <li>
        <strong>نقدم خدمة صيانة البا في مصر</strong> وفق أعلى معايير الجودة
      </li>

      <li>
        دائما نستخدم قطع غيار البا الأصلية والمتوافقة مع المواصفات
      </li>

      <li>
        لدينا ضمان رسمي على{" "}
        <a
          href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
          style={{ color: "blue" }}
        >
          <strong>صيانة elba</strong>
        </a>{" "}
        مكتوب على جميع الإصلاحات التي تتم من المركز
      </li>

      <li>
        يمكننا <strong>صيانة البا بالمنزل</strong> دون الحاجة لنقل الجهاز
      </li>

      <li>
        استجابة سريعة عبر <strong>رقم صيانة البا</strong> وخدمة العملاء 24/7
      </li>

      <li>
        لدينا تغطية واسعة داخل القاهرة والجيزة والإسكندرية.
      </li>

      <li>
        لدينا شفافية كاملة في تكلفة <strong>تصليح أجهزة elba</strong> قبل بدء
        العمل مع خصومات على أول صيانة.
      </li>

      <li>
        خبرة طويلة في <strong>مركز صيانة elba</strong> لجميع الموديلات الحديثة
        والقديمة
      </li>
    </ul>




              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
               كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل."
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {feature.labelAr }
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  {t("hero.cta.request")}
                </Button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* About Elba Maintenance Section 2  */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            مركز صيانة <span className="text-primary">Elba</span>
            </h2>

          </div>

          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center")}>
            <div className="relative animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span>🔥</span> 3+1
                </div>
                <div className="bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] rounded-xl p-6">
                  <div className="text-center mb-4">
                    <span className={cn("inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold",)}>
                  مركز صيانة أجهزة إلبا
                    </span>

                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                    alt="Elba Appliances"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2
                className={cn( "text-2xl md:text-3xl font-bold mb-6 text-foreground",)} >
               خدمات صيانة أجهزة البا على جميع الأجهزة التالية
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
              
            
                     <ul>
      <li>
        <p>
          نقدم <strong>صيانة elba بالمنزل</strong> لجميع الأجهزة، بما في ذلك{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>البوتاجازات</strong>
          </a>
          ،{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>الأفران</strong>
          </a>
          ،{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
            style={linkBlueStyle}
          >
            <strong>بوتاجازات البلت ان</strong>
          </a>
          ،{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D9%81%D8%B1%D9%86-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
            style={linkBlueStyle}
          >
            <strong>افران البلت ان</strong>
          </a>
          ،{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>الشفاطات</strong>
          </a>
          ،{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B4%D9%81%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D8%A7-%D8%A8%D9%84%D8%AA-%D8%A7%D9%86"
            style={linkBlueStyle}
          >
            <strong>شفاطات البلت ان</strong>
          </a>
          . فريق <strong>فني صيانة البا</strong> لدينا مؤهل للتعامل مع الأعطال
          الكهربائية والميكانيكية ولوحات التحكم الإلكترونية بدقة عالية. يتم فحص
          الجهاز بالكامل قبل وبعد الإصلاح لضمان استقرار الأداء. إذا كنت تبحث عن{" "}
          <a
            href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>رقم صيانة البا في مصر</strong>
          </a>{" "}
          للحصول على صيانة فورية في القاهرة، اتصل الآن على{" "}
          <strong>01211114528</strong> لحجز زيارة منزلية في أقرب موعد.
        </p>
      </li>
    </ul>




              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
 كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {feature.labelAr}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  {t("hero.cta.request")}
                </Button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



       {/* About Elba Maintenance Section 3  */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            مركز صيانة <span className="text-primary">Elba</span>
            </h2>

          </div>

          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center")}>
            <div className="relative animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span>🔥</span> 3+1
                </div>
                <div className="bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] rounded-xl p-6">
                  <div className="text-center mb-4">
                    <span className={cn("inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold",)}>
                  مركز صيانة أجهزة إلبا
                    </span>

                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                    alt="Elba Appliances"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2
                className={cn( "text-2xl md:text-3xl font-bold mb-6 text-foreground",)} >
استخدام قطع غيار البا الأصلية بضمان معتمد
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
              
                <ul>
      <li>
        <p>
          نحرص في مركزنا على توفير{" "}
          <strong>قطع غيار البا الأصلية والمتوافقة مع المعايير الفنية</strong>{" "}
          لضمان أفضل أداء بعد الصيانة. جميع المكونات يتم اختبارها قبل التركيب،
          ويتم التأكد من كفاءة الجهاز بالكامل بعد الإصلاح. نقدم{" "}
          <strong>ضمان صيانة elba مكتوب</strong> يمنحك راحة وثقة بعد انتهاء
          الخدمة. استخدام قطع غيار مطابقة للمواصفات يحافظ على العمر الافتراضي
          للجهاز ويمنع تكرار الأعطال. للاستفسار عن توفر القطع أو تكلفة الإصلاح،
          اتصل مباشرة على{" "}
          <a
            href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>01211114528</strong>
          </a>
          .
        </p>
      </li>
                </ul>

              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
               كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك، مع متابعة مستمرة بعد الصيانة للتأكد إن جهازك بيشتغل بكفاءة تامة وبدون أي مشاكل.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      { feature.labelAr }
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  {t("hero.cta.request")}
                </Button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* Branches Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-4 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
                       فروعنا              
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نغطي جميع المناطق في القاهرة الكبرى بفريق فنيين متخصصين
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { slug: "rehab", nameAr: "الرحاب", nameEn: "Rehab" },
              { slug: "tagamoa", nameAr: "التجمع", nameEn: "Tagamoa" },
              { slug: "maadi", nameAr: "المعادي", nameEn: "Maadi" },
              { slug: "obour", nameAr: "العبور", nameEn: "Obour" },
              { slug: "mohandessin", nameAr: "المهندسين", nameEn: "Mohandessin" },
              { slug: "october", nameAr: "6 أكتوبر", nameEn: "6th of October" },
              { slug: "zamalek", nameAr: "الزمالك", nameEn: "Zamalek" },
              { slug: "madinaty", nameAr: "مدينتي", nameEn: "Madinaty" },
              { slug: "shorouk", nameAr: "الشروق", nameEn: "Shorouk" },
            ].map((branch) => (
              <Link key={branch.slug} to={localePath(`/branches/${branch.slug}`)}>
                <Card className="hover-lift border-none shadow-md group cursor-pointer h-full">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className={cn("font-bold text-foreground group-hover:text-primary transition-colors", isRTL ? "font-cairo" : "font-sans")}>
                      { branch.nameAr }
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* 24/7 Service Section 1  */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center")}>
            <div className="text-white animate-fade-in-up order-2 lg:order-1">
              <h3 className={cn("text-2xl md:text-3xl font-bold mb-6", isRTL ? "font-cairo" : "font-sans")}>
               ما هي خطوات حجز صيانة elba في مصر؟

              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                   <ul>
      <li>
        <p>
          حجز <strong>صيانة البا بالمنزل</strong> يتم بسهولة عبر التواصل مع فريق
          خدمة العملاء على الرقم{" "}
          <a
            href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>01211114528</strong>
          </a>
          . بعد تسجيل بيانات الجهاز ونوع العطل، يتم تحديد موعد زيارة مناسب، ثم
          يقوم فني صيانة ELBA بفحص الجهاز وتشخيص المشكلة بدقة. يتم إبلاغ العميل
          بتفاصيل الإصلاح والتكلفة قبل التنفيذ لضمان الشفافية الكاملة. هدفنا
          توفير تجربة صيانة احترافية وسريعة دون الحاجة إلى نقل الجهاز أو تحمل
          عناء الانتظار الطويل.
        </p>
      </li>
    </ul>
              </p>
              <p className="text-white/90 leading-relaxed mb-8">
                
                 كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-foreground hover:bg-foreground/90 text-white gap-2"
                >
                  {t("hero.cta.request")}
                </Button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-green-500 border-green-500 text-white hover:bg-white hover:text-primary gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div
                  className={cn(
                    "absolute -top-4 z-10 bg-accent text-white px-6 py-3 rounded-xl shadow-lg",
                    isRTL ? "-right-4 md:right-8" : "-left-4 md:left-8",
                  )}
                >
                  <span className={cn("text-xl md:text-2xl font-bold", isRTL ? "font-cairo" : "font-sans")}>
           خدمة صيانة فورية على مدار 24 ساعة
                  </span>
                </div>

                <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-2xl p-8 pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=600&fit=crop"
                    alt="Professional Technician"
                    className="w-full max-w-sm mx-auto h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


     {/* 24/7 Service Section 2  */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center")}>
            <div className="text-white animate-fade-in-up order-2 lg:order-1">
              <h3 className={cn("text-2xl md:text-3xl font-bold mb-6", isRTL ? "font-cairo" : "font-sans")}>
ما هي أشهر أعطال أجهزة elba وكيف نقوم بإصلاحها؟

              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                 
                  <ul>
      <li>
        <p>
          نتعامل مع أشهر أعطال <strong>أجهزة elba</strong> مثل ضعف شعلة
          البوتاجاز، عطل الإشعال الذاتي، توقف الفرن عن التسخين، تسريب الغاز،
          وضعف أداء الشفاط. كما نقوم بإصلاح الأعطال الكهربائية ولوحات التحكم
          بدقة عالية باستخدام معدات فحص متخصصة. يعتمد نجاح{" "}
          <a
            href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
            style={linkBlueStyle}
          >
            <strong>صيانة elba في مصر</strong>
          </a>{" "}
          على التشخيص الصحيح من البداية، وهو ما نحرص عليه في كل زيارة. إذا
          لاحظت أي مشكلة في جهازك، تواصل فورًا على{" "}
          <strong>01211114528</strong> لتحديد موعد صيانة سريع.
        </p>
      </li>
                  </ul>
              </p>
              <p className="text-white/90 leading-relaxed mb-8">
                
                 كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-foreground hover:bg-foreground/90 text-white gap-2"
                >
                  {t("hero.cta.request")}
                </Button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-green-500 border-green-500 text-white hover:bg-white hover:text-primary gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div
                  className={cn(
                    "absolute -top-4 z-10 bg-accent text-white px-6 py-3 rounded-xl shadow-lg",
                    isRTL ? "-right-4 md:right-8" : "-left-4 md:left-8",
                  )}
                >
                  <span className={cn("text-xl md:text-2xl font-bold", isRTL ? "font-cairo" : "font-sans")}>
                    خدمة صيانة فورية على مدار 24 ساعة 
                  </span>
                </div>

                <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-2xl p-8 pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=600&fit=crop"
                    alt="Professional Technician"
                    className="w-full max-w-sm mx-auto h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





 {/* 24/7 Service Section 3  */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center")}>
            <div className="text-white animate-fade-in-up order-2 lg:order-1">
              <h3 className={cn("text-2xl md:text-3xl font-bold mb-6", isRTL ? "font-cairo" : "font-sans")}>
توفير صيانة elba في القاهرة طارئة وسريعة خصيصاً!

              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
            
                 <ul>
      <li>
        <p>
          عند الاتصال على{" "}
          <a
            href="https://wa.me/201211114528"
            style={linkBlueStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>01211114528</strong>
          </a>{" "}
          يمكنك الحصول على <strong>صيانة البا في القاهرة</strong> بسرعة
          استجابة وزيارات منزلية مجهزة بالكامل من مراكزنا الموزعة في جميع أنحاء
          القاهرة. كما نقدم صيانة داخل الجيزة ويمكنك ملء الفورم{" "}
          <a
            href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
            style={linkBlueStyle}
          >
            <strong>من هنا</strong>
          </a>
          .
          <br />
          فـ سواء كنت تبحث عن <strong>مركز صيانة ELBA موثوق</strong> أو فني
          متخصص لإصلاح الأعطال في المنزل، نضمن لك خدمة احترافية بمعايير جودة
          عالية. فريقنا مستعد للوصول إليك في أقرب وقت لتقديم خدمة مطابقة
          للمواصفات الفنية المعتمدة.
        </p>
      </li>
                 </ul>

              </p>
              <p className="text-white/90 leading-relaxed mb-8">
                
                   كمان بنحرص على تقديم خدمة عملاء سريعة ومتجاوبة مع كل استفساراتك
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsServicePopupOpen(true)}
                  className="bg-foreground hover:bg-foreground/90 text-white gap-2"
                >
                  {t("hero.cta.request")}
                </Button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-green-500 border-green-500 text-white hover:bg-white hover:text-primary gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div
                  className={cn(
                    "absolute -top-4 z-10 bg-accent text-white px-6 py-3 rounded-xl shadow-lg",
                    isRTL ? "-right-4 md:right-8" : "-left-4 md:left-8",
                  )}
                >
                  <span className={cn("text-xl md:text-2xl font-bold", isRTL ? "font-cairo" : "font-sans")}>
              خدمة صيانة فورية على مدار 24 ساعة  
                  </span>
                </div>

                <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-2xl p-8 pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=600&fit=crop"
                    alt="Professional Technician"
                    className="w-full max-w-sm mx-auto h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={cn("text-3xl md:text-4xl font-bold mb-4 text-foreground", isRTL ? "font-cairo" : "font-sans")}
            >
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("services.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift border-none shadow-lg bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={cn("text-3xl md:text-4xl font-bold mb-4 text-foreground", isRTL ? "font-cairo" : "font-sans")}
            >
              {t("why.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("why.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-md hover-lift">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2
                className={cn(
                  "text-3xl md:text-4xl font-bold mb-2 text-foreground",
                  isRTL ? "font-cairo" : "font-sans",
                )}
              >
                {t("blog.latestArticles")}
              </h2>
              <p className="text-muted-foreground">{t("blog.subtitle")}</p>
            </div>
            <Link to={localePath("/blog")}>
              <Button variant="outline" className="gap-2">
                {t("blog.readMore")}
                <ArrowRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Link key={article.id} to={localePath(`/blog/${article.slug}`)}>
                <Card className="group overflow-hidden hover-lift border-none shadow-lg h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={language === "ar" ? article.titleAr : article.titleEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3
                      className={cn(
                        "font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2",
                        isRTL ? "font-cairo" : "font-sans",
                      )}
                    >
                      {language === "ar" ? article.titleAr : article.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {language === "ar" ? article.excerptAr : article.excerptEn}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      <FAQSectionHome/>



      <ServiceRequestPopup isOpen={isServicePopupOpen} onClose={() => setIsServicePopupOpen(false)} domain="https://www.elba-eg.com"/>    </Layout>
  );
};

export default Home;
