"use client"

import { Input } from "@/components/ui/input"
import debounce from "lodash.debounce"
import { useCallback } from "react"

export default function SearchBar({ onSearch }) {
  const debouncedSearch = useCallback(
    debounce((value) => onSearch(value), 400),
    []
  )

  return (
    <Input
      placeholder="Search books..."
      onChange={(e) =>
        debouncedSearch(e.target.value)
      }
      className="max-w-lg"
    />
  )
}
