import { useQuery } from "@tanstack/react-query";
import { getBlogArticles } from "../service/blogService";

export function useBlogArticles() {
  return useQuery({
    queryKey: ["blog-articles"],
    queryFn: getBlogArticles,
    staleTime: 1000 * 60 * 5, // 5 دقائق
    retry: 1,
  });
}
