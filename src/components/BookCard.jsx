import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null

  return (
    <Card
      className="group rounded-xl overflow-hidden bg-white/70 backdrop-blur shadow-sm p-3 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-2xl hover:border-indigo-300">
      <div className="relative aspect-2/3 bg-linear-to-br from-indigo-100 to-violet-100">
        {cover ? (
          <Image
            src={cover}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-4xl">
            <span className="text-lg font-bold text-indigo-500">404</span>
            <span className="mt-1 text-xs tracking-wide text-indigo-600">Cover not found</span>
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-indigo-700 transition">
          {book.title}
        </h3>

        <p className="text-xs text-muted-foreground">
          {book.author_name?.[0] || "Unknown Author"}
        </p>

        {book.first_publish_year && (
          <p className="text-[11px] text-muted-foreground">
            Published {book.first_publish_year}
          </p>
        )}

        <div className="flex gap-1 flex-wrap">
          {book.subject?.slice(0, 2).map((s) => (
            <Badge
              key={s}
              className="bg-indigo-100 text-indigo-700 text-[10px] group-hover:bg-indigo-200 transition">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
