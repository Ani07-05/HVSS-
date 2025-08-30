"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/paper", label: "Overview" },
  { href: "/paper/analysis", label: "Analysis" },
  { href: "/paper/visual-comparison", label: "Charts" },
  { href: "/paper/summary", label: "Summary" },
  { href: "/paper/conclusion", label: "Conclusion" },
  { href: "/paper/references", label: "References" },
]

export default function PaperLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 font-sans">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-pretty text-xl font-semibold text-slate-900">Framework Analysis</h1>
        <nav className="flex flex-wrap gap-2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Button
                key={href}
                asChild
                variant={isActive ? "default" : "secondary"}
                className={`hover:bg-slate-200 ${isActive ? "bg-slate-900 text-white hover:bg-slate-800" : ""}`}
              >
                <Link href={href} prefetch>
                  {label}
                </Link>
              </Button>
            )
          })}
        </nav>
      </header>
      {children}
    </main>
  )
}
