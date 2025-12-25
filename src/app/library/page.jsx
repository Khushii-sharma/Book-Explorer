"use client"

import { useState } from "react"
import BookGrid from "@/components/BookGrid"
import { Search, X } from "lucide-react"
import BackToTop from "@/components/BackToTop"

const CHIPS = [
  "science",
  "biology",
  "history",
  "astronomy",
  "mathematics",
]

export default function LibraryPage() {
  const [query, setQuery] = useState("science")
  const [input, setInput] = useState("science")

  const handleClear = () => {
    setInput("")
    setQuery("")
  }

  const handleChipClick = (chip) => {
    setInput(chip)
    setQuery(chip)
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-indigo-700">
            Book Explorer
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl group">
            <div
              className="absolute-inset-0.5 rounded-lg bg-linear-to-r from-indigo-400 to-violet-400 opacity-30 blur transition group-focus-within:opacity-60"/>

            {/* Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-500" />

              <input
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  setQuery(e.target.value)
                }}
                placeholder="Search books, authors, subjects..."
                className="w-full h-12 rounded-full pl-12 pr-12 text-sm bg-white border border-indigo-200 shadow-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition"/>

              {/* Clear (X) button */}
              {input && (
                <button
                  onClick={handleClear}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-600 transition">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Chips */}
        <div className="flex justify-center gap-2 flex-wrap">
          {CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              className={`px-4 py-1.5 rounded-full text-xs transition
                ${input === chip
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }
              `}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Books */}
        <BookGrid query={query || "science"} />

        <BackToTop/>

      </div>
    </main>
  )
}
