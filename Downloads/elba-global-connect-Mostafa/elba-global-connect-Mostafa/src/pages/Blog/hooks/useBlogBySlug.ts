import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../service/blogService";

/** 1) Sanitizer بسيط (لو محتاج أمان قوي استخدم DOMPurify) */
function sanitizeHtml(html: string) {
  if (!html) return "";
  // حذف script tags كحد أدنى
  return html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

/** 2) normalize للصور داخل المحتوى */
function normalizeContentImages(html: string) {
  if (!html) return "";
  const BASE = "https://rdtfhjguho8.american-softwares.com/storage/";
  return html.replace(/<img[^>]+src=["']([^"']+)["']/gi, (m, src) => {
    const fixed = src.startsWith("http") ? src : BASE + src.replace(/^\/+/, "");
    return m.replace(src, fixed);
  });
}

/** 3) تنظيف url للصورة الرئيسية */
function cleanImageUrl(src?: string) {
  if (!src) return "";
  const BASE = "https://rdtfhjguho8.american-softwares.com/storage/";
  return src.startsWith("http") ? src : BASE + src.replace(/^\/+/, "");
}

export function useBlogBySlug(slug?: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    enabled: !!slug,
    queryFn: async () => {
      const articles = await fetchArticles();
      const post = articles.find((a: any) => a?.meta?.slug === slug);
      if (!post) return null;

      return {
        id: post.id,
        title: post.title,
        slug: post.meta?.slug,

        contentHtml: sanitizeHtml(normalizeContentImages(post.content)),
        excerptHtml: post.excerpt_html,

        mainImage: cleanImageUrl(post.main_image || post.image_url || post.featured_image),
        images: post.images?.map((i: any) => cleanImageUrl(i.image_path)) || [],

        metaTitle: post.meta?.title,
        metaDescription: post.meta?.description,
        focusKeyword: post.focus_keyword,

        tags: post.tags || [],
        createdAt: post.created_at,
        lang: post.lang,
      };
    },
    staleTime: 1000 * 60 * 10,
  });
}
