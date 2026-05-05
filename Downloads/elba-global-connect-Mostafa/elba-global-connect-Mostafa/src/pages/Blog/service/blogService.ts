const API_URL = "https://backs.seoi.ai/api/v1/projects/by-key";

const API_KEY =
  "pk_c11de51bfda1ad90a58c4ef47cdaf059a937aaba554b22ff2bfa7ab7914faa8c";

export async function getBlogArticles() {
  const res = await fetch(API_URL, {
    headers: {
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const json = await res.json();
  return json?.data?.articles || [];
}

export async function getBlogBySlug(slug: string) {
  const res = await fetch("https://backs.seoi.ai/api/v1/projects/by-key", {
    headers: {
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const json = await res.json();

  const articles = json?.data?.articles || [];
  return articles.find((a: any) => a?.meta?.slug === slug);
}

export async function fetchArticles() {
  const res = await fetch(API_URL, {
    headers: {
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const json = await res.json();

  return json?.data?.articles || [];
}
