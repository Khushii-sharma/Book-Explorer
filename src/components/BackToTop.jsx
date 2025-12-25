"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400) // show after 400px
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <Button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-linear-to-br from-indigo-400 to-violet-400 text-white shadow-lg flex items-center justify-center hover:scale-110 transition">
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
