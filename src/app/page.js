import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Book Explorer
      </h1>
      <Link href="/library">
        <Button>Open Library</Button>
      </Link>
    </div>
  )
}
