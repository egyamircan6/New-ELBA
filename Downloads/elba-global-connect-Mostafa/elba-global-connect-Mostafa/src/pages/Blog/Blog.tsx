import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, ArrowLeft, User, Tag } from "lucide-react";
import { Helmet } from "react-helmet";

import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { useBlogArticles } from "@/pages/Blog/hooks/useBlogArticles";

const BASE_IMAGE = "https://backs.seoi.ai.com/storage/";

const getImage = (img?: string) =>
  !img ? "" : img.startsWith("http") ? img : BASE_IMAGE + img;

const BlogPageContent = () => {
  const { t, isRTL, language } = useLanguage();
  const navigate = useNavigate();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const { data: articles = [], isLoading, isError } = useBlogArticles();

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ paths زي الصفحة التانية بالظبط
  const listPath = isRTL ? "/المدونة" : "/blog";
  const postPath = (slug?: string) => {
    if (!slug) return listPath;
    return isRTL ? `/المدونة/${slug}` : `/en/blog/${slug}`;
  };
  // ✅ يتحقق هل النص عربي
  const isArabicText = (text?: string) => {
    if (!text) return false;
    return /[\u0600-\u06FF]/.test(text);
  };
  const filteredArticles = articles.filter((article) => {
    const slug = article?.meta?.slug || article?.slug || "";
    const isArabicSlug = isArabicText(slug);

    return isRTL ? isArabicSlug : !isArabicSlug;
  });
  const featured = useMemo(
    () => (filteredArticles.length ? filteredArticles[0] : null),
    [filteredArticles],
  );
  const rest = useMemo(
    () => (filteredArticles.length > 1 ? filteredArticles.slice(1) : []),
    [filteredArticles],
  );

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      <Helmet>
        <title>{isRTL ? "المدونة" : "Blog"}</title>
      </Helmet>

      <SEOHead
        title={
          language === "ar"
            ? "مدونة صيانة إلبا - نصائح ومقالات"
            : "Elba Maintenance Blog - Tips & Articles"
        }
        description={
          language === "ar"
            ? "نصائح ومقالات متخصصة في صيانة أجهزة إلبا. تعلم كيفية الحفاظ على أجهزتك."
            : "Expert tips and articles on Elba appliance maintenance. Learn how to care for your appliances."
        }
      />

      {/* ✅ HERO (ستايل الصفحة الأولى) */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4 text-foreground",
              isRTL ? "font-cairo" : "font-sans",
            )}
          >
            {t("blog.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* ✅ Loading / Error */}
      {isLoading && (
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Loading...
          </div>
        </section>
      )}

      {(isError ) && (
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Failed to load articles
          </div>
        </section>
      )}

      {/* ✅ Content */}
      {!isLoading && !isError && (
        <>
          {!filteredArticles.length && (
            <section className="py-12 md:py-20 bg-background">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                {language === "ar"
                  ? "لا توجد مقالات حالياً"
                  : "No articles yet"}
              </div>
            </section>
          )}

          {!!featured && (
            <>
              {/* ✅ FEATURED (تربيط الصفحة التانية + ستايل الصفحة الأولى) */}
              <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                  <Card className="group overflow-hidden border-none shadow-lg hover-lift">
                    <div className="grid lg:grid-cols-2">
                      <div className="aspect-video lg:aspect-auto overflow-hidden bg-secondary">
                        <img
                          src={`https://backs.seoi.ai/storage/${featured?.main_image || featured?.image_url || featured?.featured_image}`}
                          alt={featured?.title || ""}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <CardContent className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="gap-1">
                            <Tag className="w-3 h-3" />
                            {featured?.category_name ||
                              (isRTL ? "مقالات" : "Articles")}
                          </Badge>

                          {!!featured?.created_at && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(featured.created_at)}
                            </span>
                          )}

                          {!!featured?.author_name && (
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {featured.author_name}
                            </span>
                          )}
                        </div>

                        <h2
                          className={cn(
                            "text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors",
                            isRTL ? "font-cairo" : "font-sans",
                          )}
                        >
                          {featured?.title || ""}
                        </h2>

                        <div
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{
                            __html: featured?.excerpt_html || "",
                          }}
                        />

                        <button
                          onClick={() =>
                            navigate(postPath(featured?.meta?.slug))
                          }
                          className="inline-flex items-center gap-2 text-primary font-semibold"
                        >
                          {t("blog.readMore")}
                          <ArrowIcon className="w-4 h-4" />
                        </button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </section>

              {/* ✅ GRID (ستايل الصفحة الأولى + ربط صحيح) */}
              <section className="py-12 pb-20 bg-background">
                <div className="container mx-auto px-4">
                  <h2
                    className={cn(
                      "text-2xl md:text-3xl font-bold mb-8 text-foreground",
                      isRTL ? "font-cairo" : "font-sans",
                    )}
                  >
                    {isRTL ? "جميع المقالات" : "All Articles"}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {rest.map((article: any, index: number) => {
                      const slug = article?.meta?.slug;
                      const title = article?.title || "";
                      const excerptHtml = article?.excerpt_html || "";
                      const category =
                        article?.category_name ||
                        (isRTL ? "مقالات" : "Articles");
                      const date = article?.created_at;
                      const img = getImage(
                        article?.main_image ||
                          article?.image_url ||
                          article?.featured_image,
                      );

                      return (
                        <Link
                          key={article?.id || slug || index}
                          to={postPath(slug)}
                          className="animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.08}s` }}
                        >
                          <Card className="group h-full overflow-hidden hover-lift border-none shadow-lg">
                            <div className="aspect-video overflow-hidden bg-secondary">
                              <img
                                src={img}
                                alt={title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>

                            <CardContent className="p-5 space-y-3">
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Badge variant="secondary" className="gap-1">
                                  <Tag className="w-3 h-3" />
                                  {category}
                                </Badge>

                                {!!date && (
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(date)}
                                  </span>
                                )}
                              </div>

                              <h3
                                className={cn(
                                  "font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2",
                                  isRTL ? "font-cairo" : "font-sans",
                                )}
                              >
                                {title}
                              </h3>

                              <div
                                className="text-muted-foreground text-sm line-clamp-2"
                                dangerouslySetInnerHTML={{
                                  __html: excerptHtml,
                                }}
                              />

                              <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                                {t("blog.readMore")}
                                {isRTL ? (
                                  <ArrowLeft className="w-4 h-4" />
                                ) : (
                                  <ArrowRight className="w-4 h-4" />
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>

                  {/* لو مفيش غير featured واحد */}
                  {!rest.length && (
                    <div className="text-center text-muted-foreground mt-10">
                      {isRTL ? "لا توجد مقالات أخرى" : "No more articles"}
                    </div>
                  )}
                </div>
              </section>
            </>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

const BlogPage = () => (
  <LanguageProvider>
    <BlogPageContent />
  </LanguageProvider>
);

export default BlogPage;
