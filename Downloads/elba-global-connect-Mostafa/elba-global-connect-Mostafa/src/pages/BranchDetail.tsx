import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle, ArrowRight, Users, Wrench, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";

interface BranchData {
  slug: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  areasAr: string[];
  areasEn: string[];
  featuresAr: string[];
  featuresEn: string[];
}

const branches: BranchData[] = [
  {
    slug: "rehab",
    nameAr: "الرحاب",
    nameEn: "Rehab",
    descAr: "فرع صيانة إلبا في الرحاب يقدم خدمات صيانة شاملة لجميع أجهزة إلبا. فريقنا المتخصص جاهز لخدمتك في أي وقت مع ضمان على جميع قطع الغيار والإصلاحات.",
    descEn: "Elba Maintenance branch in Rehab provides comprehensive maintenance services for all Elba appliances. Our specialized team is ready to serve you anytime with warranty on all parts and repairs.",
    areasAr: ["الرحاب 1", "الرحاب 2", "المناطق المجاورة"],
    areasEn: ["Rehab 1", "Rehab 2", "Surrounding areas"],
    featuresAr: ["فنيين متخصصين في المنطقة", "استجابة سريعة خلال ساعة", "قطع غيار أصلية متوفرة"],
    featuresEn: ["Specialized technicians in the area", "Fast response within 1 hour", "Original spare parts available"],
  },
  {
    slug: "tagamoa",
    nameAr: "التجمع",
    nameEn: "Tagamoa",
    descAr: "فرع صيانة إلبا في التجمع الخامس يغطي جميع مناطق القاهرة الجديدة. نوفر خدمة سريعة واحترافية مع فريق فنيين معتمدين.",
    descEn: "Elba Maintenance branch in Tagamoa covers all areas of New Cairo. We provide fast and professional service with a team of certified technicians.",
    areasAr: ["التجمع الأول", "التجمع الثالث", "التجمع الخامس", "القاهرة الجديدة"],
    areasEn: ["First Settlement", "Third Settlement", "Fifth Settlement", "New Cairo"],
    featuresAr: ["تغطية كاملة للقاهرة الجديدة", "خدمة في نفس اليوم", "ضمان شامل"],
    featuresEn: ["Full coverage of New Cairo", "Same-day service", "Comprehensive warranty"],
  },
  {
    slug: "maadi",
    nameAr: "المعادي",
    nameEn: "Maadi",
    descAr: "فرع صيانة إلبا في المعادي يخدم جميع مناطق المعادي وضواحيها. خبرة طويلة في صيانة جميع أنواع أجهزة إلبا.",
    descEn: "Elba Maintenance branch in Maadi serves all Maadi areas and suburbs. Long experience in maintaining all types of Elba appliances.",
    areasAr: ["المعادي الجديدة", "المعادي القديمة", "دجلة", "زهراء المعادي"],
    areasEn: ["New Maadi", "Old Maadi", "Degla", "Zahraa El Maadi"],
    featuresAr: ["فنيين ذوي خبرة عالية", "خدمة منزلية متكاملة", "أسعار تنافسية"],
    featuresEn: ["Highly experienced technicians", "Complete home service", "Competitive prices"],
  },
  {
    slug: "obour",
    nameAr: "العبور",
    nameEn: "Obour",
    descAr: "فرع صيانة إلبا في مدينة العبور يقدم أفضل خدمات الصيانة والإصلاح. نصلك أينما كنت في العبور والمناطق المحيطة.",
    descEn: "Elba Maintenance branch in Obour City offers the best maintenance and repair services. We reach you wherever you are in Obour and surrounding areas.",
    areasAr: ["مدينة العبور", "الحي الأول", "الحي السابع", "جولف سيتي"],
    areasEn: ["Obour City", "First District", "Seventh District", "Golf City"],
    featuresAr: ["وصول سريع لجميع أحياء العبور", "صيانة فورية", "متابعة بعد الإصلاح"],
    featuresEn: ["Quick access to all Obour districts", "Instant maintenance", "Post-repair follow-up"],
  },
  {
    slug: "mohandessin",
    nameAr: "المهندسين",
    nameEn: "Mohandessin",
    descAr: "فرع صيانة إلبا في المهندسين يقدم خدمات صيانة متميزة في قلب الجيزة. فريق محترف متاح على مدار الساعة.",
    descEn: "Elba Maintenance branch in Mohandessin offers distinguished maintenance services in the heart of Giza. Professional team available 24/7.",
    areasAr: ["المهندسين", "الدقي", "العجوزة", "بولاق الدكرور"],
    areasEn: ["Mohandessin", "Dokki", "Agouza", "Boulaq El Dakrour"],
    featuresAr: ["موقع مركزي في الجيزة", "فريق متخصص 24/7", "خدمة VIP"],
    featuresEn: ["Central location in Giza", "Specialized 24/7 team", "VIP service"],
  },
  {
    slug: "october",
    nameAr: "6 أكتوبر",
    nameEn: "6th of October",
    descAr: "فرع صيانة إلبا في 6 أكتوبر يغطي جميع أحياء المدينة. خدمة سريعة وموثوقة مع ضمان على جميع الإصلاحات.",
    descEn: "Elba Maintenance branch in 6th of October covers all city districts. Fast and reliable service with warranty on all repairs.",
    areasAr: ["الحي الأول", "الحي الثاني عشر", "الشيخ زايد", "دريم لاند"],
    areasEn: ["First District", "Twelfth District", "Sheikh Zayed", "Dreamland"],
    featuresAr: ["تغطية شاملة لأكتوبر والشيخ زايد", "قطع غيار فورية", "ضمان سنة"],
    featuresEn: ["Full coverage of October & Sheikh Zayed", "Instant spare parts", "1-year warranty"],
  },
  {
    slug: "zamalek",
    nameAr: "الزمالك",
    nameEn: "Zamalek",
    descAr: "فرع صيانة إلبا في الزمالك يقدم خدمات صيانة راقية تناسب المنطقة. فنيين محترفين مع خدمة عملاء مميزة.",
    descEn: "Elba Maintenance branch in Zamalek offers premium maintenance services. Professional technicians with distinguished customer service.",
    areasAr: ["الزمالك", "جاردن سيتي", "وسط البلد", "المنيل"],
    areasEn: ["Zamalek", "Garden City", "Downtown", "El Manial"],
    featuresAr: ["خدمة راقية ومتميزة", "مواعيد مرنة", "فنيين محترفين"],
    featuresEn: ["Premium distinguished service", "Flexible scheduling", "Professional technicians"],
  },
  {
    slug: "madinaty",
    nameAr: "مدينتي",
    nameEn: "Madinaty",
    descAr: "فرع صيانة إلبا في مدينتي يقدم خدمات صيانة شاملة لسكان المدينة. فريق متخصص يصلك في أسرع وقت.",
    descEn: "Elba Maintenance branch in Madinaty provides comprehensive maintenance services for city residents. Specialized team reaches you in the shortest time.",
    areasAr: ["مدينتي", "المنطقة B", "المنطقة D", "المناطق المجاورة"],
    areasEn: ["Madinaty", "Zone B", "Zone D", "Surrounding areas"],
    featuresAr: ["فريق مخصص لمدينتي", "استجابة خلال 45 دقيقة", "صيانة دورية"],
    featuresEn: ["Dedicated Madinaty team", "Response within 45 minutes", "Periodic maintenance"],
  },
  {
    slug: "shorouk",
    nameAr: "الشروق",
    nameEn: "Shorouk",
    descAr: "فرع صيانة إلبا في مدينة الشروق يخدم جميع مناطق المدينة والمناطق المحيطة. نوفر أفضل خدمة بأفضل سعر.",
    descEn: "Elba Maintenance branch in Shorouk City serves all city areas and surrounding regions. We provide the best service at the best price.",
    areasAr: ["مدينة الشروق", "المنطقة الأولى", "المنطقة الرابعة", "هليوبوليس الجديدة"],
    areasEn: ["Shorouk City", "First Zone", "Fourth Zone", "New Heliopolis"],
    featuresAr: ["أسعار مناسبة", "خدمة منزلية كاملة", "فنيين معتمدين"],
    featuresEn: ["Affordable prices", "Complete home service", "Certified technicians"],
  },
];

export { branches };

const BranchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isRTL, language, localePath, t } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const branch = branches.find((b) => b.slug === slug);
  const whatsappNumber = "01211114528";
  const phoneNumber = "+201211114528";

  if (!branch) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
            <p className="text-muted-foreground mb-6">{isRTL ? "الفرع غير موجود" : "Branch not found"}</p>
            <Link to={localePath("/")}>
              <Button>{isRTL ? "العودة للرئيسية" : "Back to Home"}</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const name = isRTL ? branch.nameAr : branch.nameEn;
  const desc = isRTL ? branch.descAr : branch.descEn;
  const areas = isRTL ? branch.areasAr : branch.areasEn;
  const features = isRTL ? branch.featuresAr : branch.featuresEn;

  const otherBranches = branches.filter((b) => b.slug !== slug).slice(0, 4);

  return (
    <Layout>
      <SEOHead
        title={isRTL ? `صيانة إلبا - فرع ${name}` : `Elba Maintenance - ${name} Branch`}
        description={desc}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-foreground via-primary/90 to-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute top-10 left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{isRTL ? "فرع" : "Branch"}</span>
            </div>
            <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-4", isRTL ? "font-cairo" : "font-sans")}>
              {isRTL ? `صيانة إلبا في ${name}` : `Elba Maintenance in ${name}`}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsServicePopupOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white gap-2 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5" />
                {t("hero.cta.request")}
              </Button>
              <a href={`tel:${phoneNumber}`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground gap-2 text-lg px-8 py-6 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  {t("hero.cta.call")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Features */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            {isRTL ? `لماذا تختار فرع ${name}؟` : `Why Choose ${name} Branch?`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    {index === 0 ? <Users className="w-7 h-7 text-primary" /> :
                     index === 1 ? <Clock className="w-7 h-7 text-primary" /> :
                     <Star className="w-7 h-7 text-primary" />}
                  </div>
                  <p className="font-semibold text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            {isRTL ? "مناطق الخدمة" : "Service Areas"}
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Steps */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            {t("device.steps.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {`0${step}`}
                </div>
                <h3 className={cn("font-bold text-lg mb-2 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
                  {t(`device.steps.${step}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(`device.steps.${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4 text-white", isRTL ? "font-cairo" : "font-sans")}>
            {isRTL ? `احجز صيانة إلبا في ${name} الآن` : `Book Elba Maintenance in ${name} Now`}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {isRTL ? "تواصل معنا الآن للحصول على خدمة سريعة واحترافية" : "Contact us now for fast and professional service"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 text-lg px-8 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                {t("contact.whatsapp")}
              </Button>
            </a>
            <a href={`tel:${phoneNumber}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary gap-2 text-lg px-8 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                <span dir="ltr">{phoneNumber}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Other Branches */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
            {isRTL ? "فروعنا الأخرى" : "Our Other Branches"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherBranches.map((b) => (
              <Link key={b.slug} to={localePath(`/branches/${b.slug}`)}>
                <Card className="hover-lift border-none shadow-lg group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className={cn("font-bold text-foreground group-hover:text-primary transition-colors", isRTL ? "font-cairo" : "font-sans")}>
                      {isRTL ? b.nameAr : b.nameEn}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceRequestPopup isOpen={isServicePopupOpen} onClose={() => setIsServicePopupOpen(false)}  domain="https://www.elba-eg.com"/>
    </Layout>
  );
};

export default BranchDetail;
