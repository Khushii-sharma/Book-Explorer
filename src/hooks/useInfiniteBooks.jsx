import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchBooks } from "@/lib/openLibrary"

export function useInfiniteBooks(query) {
  return useInfiniteQuery({
    queryKey: ["books", query],
    queryFn: ({ pageParam = 1 }) =>
      fetchBooks({ query, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const maxPages = Math.ceil(lastPage.numFound / 20)
      return lastPage.page < maxPages
        ? lastPage.page + 1
        : undefined
    },
  })
}
