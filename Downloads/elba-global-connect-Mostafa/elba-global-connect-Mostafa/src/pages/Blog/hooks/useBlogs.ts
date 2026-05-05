import { useQuery } from "@tanstack/react-query";

const API_URL = "https://backs.seoi.ai/api/v1/projects/by-key";

const API_KEY =
  "pk_c11de51bfda1ad90a58c4ef47cdaf059a937aaba554b22ff2bfa7ab7914faa8c";

export const useHomeBlogs = () => {
  return useQuery({
    queryKey: ["home-blogs"],
    queryFn: async () => {
      const res = await fetch(API_URL, {
        headers: {
          "X-API-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });
      return res?.data?.data?.articles ?? [];
    },
  });
};
