const BASE =
  "https://rdtfhjguho8.american-softwares.com/storage/";

export const cleanImageUrl = (url?: string | null) => {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return BASE + (url.startsWith("/") ? url : `/${url}`);
};

export const normalizeContentImages = (html = "") => {
  return html
    .replace(/src="([^"]*?)\/api\/v1\/+storage\/+/g, 'src="$1/storage/')
    .replace(/src="([^"]*\/storage)\/+/g, 'src="$1/')
    .replace(/src="(article_images\/[^"]+)"/g, `src="${BASE}$1"`);
};
