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

const BASE_IMAGE = "https://backs.seoi.ai.com/storage/";
const getImage = (img?: string) =>
  !img ? "" : img.startsWith("http") ? img : BASE_IMAGE + img;

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
      shareTitle,
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
  };

  // ✅ Loading / Error (زي المرجع)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">
            {language === "ar" ? "المقال غير موجود" : "Article Not Found"}
          </h1>
          <Button onClick={() => navigate(listPath)}>
            {language === "ar" ? "العودة للمدونة" : "Back to Blog"}
          </Button>
        </div>
      </div>
    );
  }

  const heroImage = getImage(article.mainImage);
  const categoryLabel =
    (article as any).categoryName ||
    (language === "ar" ? "مقالات" : "Articles");

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* SEO (Helmet + SEOHead) */}
      <Helmet>
        <title>{article.metaTitle || article.title}</title>
        <meta name="description" content={article.metaDescription || ""} />
      </Helmet>

      <SEOHead
        title={article.metaTitle || article.title}
        description={article.metaDescription || ""}
        ogImage={heroImage}
      />

      {/* ✅ HERO IMAGE (ستايل صفحتك الأولى) */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          {article.categoryName && (
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              {article.categoryName}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
            {article.createdAt && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.createdAt).toLocaleDateString(
                  isRTL ? "ar-EG" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
              </span>
            )}

            {article.authorName && (
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.authorName}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {article.mainImage && (
            <img
              src={article.mainImage}
              alt={article.title}
              className="w-full rounded-2xl mb-10"
            />
          )}

          <div
            className={`
              article-content
              prose
              prose-neutral
              dark:prose-invert
              max-w-none
              prose-headings:text-white
              prose-p:text-muted-foreground
              prose-li:text-muted-foreground
              ${isRTL ? "text-right" : "text-left"}
            `}
            dangerouslySetInnerHTML={{
              __html: article.contentHtml || article.excerptHtml,
            }}
          />

          <div className="mt-12 flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-primary font-semibold"
            >
              <ArrowIcon className="w-4 h-4" />
              {isRTL ? "رجوع" : "Back"}
            </button>

            <button
              onClick={() => navigate(isRTL ? "/المدونة" : "/blog")}
              className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold"
            >
              {isRTL ? "كل المقالات" : "All Articles"}
            </button>
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
