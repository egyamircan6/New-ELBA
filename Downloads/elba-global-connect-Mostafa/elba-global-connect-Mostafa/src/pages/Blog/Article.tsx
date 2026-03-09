import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  MessageCircle,
  Phone,
  User,
  Tag,
} from "lucide-react";
import { Helmet } from "react-helmet";

import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";

import { useBlogBySlug } from "@/pages/Blog/hooks/useBlogBySlug";
import { useBlogArticles } from "@/pages/Blog/hooks/useBlogArticles";

const BASE_IMAGE = "https://rdtfhjguho8.american-softwares.com/storage/";
const getImage = (img?: string) => (!img ? "" : img.startsWith("http") ? img : BASE_IMAGE + img);

const BlogSingleContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const phoneNumber = "+201211114528";

  const { data: article, isLoading, isError } = useBlogBySlug(slug);
  const { data: allArticles = [] } = useBlogArticles();

  // ✅ paths زي المرجع (RTL/EN)
  const listPath = isRTL ? "/المدونة" : "/blog";
  const postPath = (s?: string) => {
    if (!s) return listPath;
    return isRTL ? `/المدونة/${s}` : `/blog/${s}`;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ Related (3 مقالات غير الحالية)
  const relatedArticles = useMemo(() => {
    if (!slug) return [];
    return (allArticles || [])
      .filter((a: any) => a?.meta?.slug && a?.meta?.slug !== slug)
      .slice(0, 3);
  }, [allArticles, slug]);

  // ✅ Share links
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = article?.title || "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
      shareTitle
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
  };

  // ✅ Loading / Error (زي المرجع)
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir={isRTL ? "rtl" : "ltr"}>
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">{language === "ar" ? "المقال غير موجود" : "Article Not Found"}</h1>
          <Button onClick={() => navigate(listPath)}>
            {language === "ar" ? "العودة للمدونة" : "Back to Blog"}
          </Button>
        </div>
      </div>
    );
  }

  const heroImage = getImage(article.mainImage);
  const categoryLabel = (article as any).categoryName || (language === "ar" ? "مقالات" : "Articles");

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* SEO (Helmet + SEOHead) */}
      <Helmet>
        <title>{article.metaTitle || article.title}</title>
        <meta name="description" content={article.metaDescription || ""} />
      </Helmet>

      <SEOHead title={article.metaTitle || article.title} description={article.metaDescription || ""} ogImage={heroImage} />

      {/* ✅ HERO IMAGE (ستايل صفحتك الأولى) */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={heroImage} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 text-white/80 text-sm mb-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground gap-1">
                <Tag className="w-3 h-3" />
                {categoryLabel}
              </Badge>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.createdAt)}
              </span>

              {!!(article as any)?.authorName && (
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {(article as any).authorName}
                </span>
              )}
            </div>

            <h1
              className={cn(
                "text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl",
                isRTL ? "font-cairo" : "font-sans"
              )}
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ✅ BODY + SIDEBAR */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* CONTENT */}
            <div className="lg:col-span-2">
              <div
                className={cn(
                  "prose prose-lg max-w-none",
                  "prose-headings:font-bold prose-headings:text-foreground",
                  "prose-p:text-muted-foreground prose-p:leading-relaxed",
                  "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
                  "prose-li:text-muted-foreground",
                  isRTL && "font-cairo text-right"
                )}
                dangerouslySetInnerHTML={{ __html: article.contentHtml || article.excerptHtml }}
              />

              {/* ✅ SHARE */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className={cn("font-bold text-lg mb-4 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
                  {t("blog.share")}
                </h3>
                <div className="flex gap-3">
                  <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]"
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </a>

                  <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]"
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </a>

                  <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* ✅ CTA */}
              <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-white">
                <h3 className={cn("font-bold text-xl md:text-2xl mb-4", isRTL ? "font-cairo" : "font-sans")}>
                  {isRTL ? "هل تحتاج إلى خدمة صيانة؟" : "Need Maintenance Service?"}
                </h3>
                <p className="text-white/80 mb-6">
                  {isRTL ? "فريقنا من الفنيين المحترفين جاهز لمساعدتك" : "Our team of professional technicians is ready to help you"}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => setIsServicePopupOpen(true)} className="bg-white text-primary hover:bg-white/90 gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {t("hero.cta.request")}
                  </Button>

                  <a href={`tel:${phoneNumber}`}>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary gap-2">
                      <Phone className="w-5 h-5" />
                      {t("hero.cta.call")}
                    </Button>
                  </a>
                </div>
              </div>

              {/* ✅ NAV BUTTONS (زي المرجع) */}
              <div className="mt-12 flex justify-between items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 text-primary font-semibold"
                >
                  <ArrowIcon className="w-4 h-4" />
                  {isRTL ? "رجوع" : "Back"}
                </button>

                <button
                  onClick={() => navigate(listPath)}
                  className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold"
                >
                  {isRTL ? "كل المقالات" : "All Articles"}
                </button>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className={cn("font-bold text-xl mb-6 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
                  {t("blog.relatedArticles")}
                </h3>

                <div className="space-y-4">
                  {relatedArticles.map((related: any) => {
                    const rSlug = related?.meta?.slug;
                    const rTitle = related?.title || "";
                    const rImg = getImage(related?.main_image || related?.image_url || related?.featured_image);

                    return (
                      <Link key={related?.id || rSlug} to={postPath(rSlug)}>
                        <Card className="group overflow-hidden hover-lift border-none shadow-md">
                          <div className="flex gap-4">
                            <div className="w-24 h-24 shrink-0 overflow-hidden">
                              <img
                                src={rImg}
                                alt={rTitle}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>

                            <CardContent className="p-3 flex-1">
                              <h4
                                className={cn(
                                  "font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2",
                                  isRTL ? "font-cairo" : "font-sans"
                                )}
                              >
                                {rTitle}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{formatDate(related?.created_at)}</p>
                            </CardContent>
                          </div>
                        </Card>
                      </Link>
                    );
                  })}

                  {!relatedArticles.length && (
                    <div className="text-sm text-muted-foreground">
                      {isRTL ? "لا توجد مقالات ذات صلة" : "No related articles"}
                    </div>
                  )}
                </div>
              </div>

              <Button variant="outline" className="w-full gap-2" asChild>
                <Link to={listPath}>
                  {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  {isRTL ? "العودة للمدونة" : "Back to Blog"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Important: domain لازم URL صحيح */}
      <ServiceRequestPopup
        isOpen={isServicePopupOpen}
        onClose={() => setIsServicePopupOpen(false)}
        domain="https://www.elba-eg.com"
      />

      <Footer />
    </div>
  );
};

const BlogSinglePage = () => (
  <LanguageProvider>
    <BlogSingleContent />
  </LanguageProvider>
);

export default BlogSinglePage;
