const API_URL =
  "https://rdtfhjguho8.american-softwares.com/api/v1/projects/by-key";

const API_KEY =
  "";

  
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
  const res = await fetch(
    "https://rdtfhjguho8.american-softwares.com/api/v1/projects/by-key",
    {
      headers: {
        "X-API-Key":
          "pk_58eb0ecd1ba9b6265ef182381298b1bda97ed8272eae2c36e893602591f9739c",
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const json = await res.json();

  const articles = json?.data?.articles || [];
  return articles.find(
    (a: any) => a?.meta?.slug === slug
  );
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
