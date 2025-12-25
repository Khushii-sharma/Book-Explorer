const PAGE_SIZE = 20

export async function fetchBooks({ query, page }) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${query}&page=${page}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch books")
  }

  const data = await res.json()

  return {
    books: data.docs.slice(0, PAGE_SIZE),
    numFound: data.numFound,
    page,
  }
}
