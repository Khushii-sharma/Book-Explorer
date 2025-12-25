"use client"

import { useEffect, useRef, useState } from "react"
import BookCard from "./BookCard"
import { Skeleton } from "@/components/ui/skeleton"

const BOOKS_PER_PAGE = 20

export default function BookGrid({ query }) {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loaderRef = useRef(null)

  useEffect(() => {
    setBooks([])
    setPage(1)
    setHasMore(true)
  }, [query])

  // Fetch books
  useEffect(() => {
    async function fetchBooks() {
      if (!hasMore) return

      setLoading(true)

      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${BOOKS_PER_PAGE}`
      )
      const data = await res.json()

      const newBooks = data.docs.slice(0, BOOKS_PER_PAGE)

      setBooks((prev) => [...prev, ...newBooks])
      setHasMore(newBooks.length === BOOKS_PER_PAGE)
      setLoading(false)
    }

    fetchBooks()
  }, [page, query])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((p) => p + 1)
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => observer.disconnect()
  }, [loading, hasMore])

  return (
    <>
      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {books.map((book, index) => (
          <BookCard key={`${book.key}-${index}`} book={book} />
        ))}

        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-96 rounded-2xl" />
          ))}
      </div>

      {/* Infinite scroll trigger */}
      <div ref={loaderRef} className="h-10" />

      {!hasMore && (
        <p className="text-center text-sm text-muted-foreground mt-6">
          You’ve reached the end
        </p>
      )}
    </>
  )
}
