import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "HVSS vs BenchIoT vs CPS Scoring: Hardware Security Frameworks Compared",
  description:
    "Understand hardware security frameworks: HVSS for component-level scoring, BenchIoT for performance benchmarking, and CPS Scoring for system-wide risk assessment. Interactive comparison with charts.",
}

export default function Page() {
  return (
    <main id="top" className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-pretty">
          Hardware Vulnerability Scoring System (HVSS) : A Comphrensive Analysis
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
          Three different approaches to measuring hardware security. HVSS gives you a single score for vulnerabilities,
          BenchIoT tests performance impacts, and CPS Scoring evaluates entire systems. Use the interactive charts below
          to see how they compare and which might work best for your needs.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {/* Buttons are square per request */}
          <Button asChild className="rounded-none">
            <Link href="/analysis" prefetch>Jump to Analysis</Link>
          </Button>
          <Button asChild variant="secondary" className="rounded-none">
            <Link href="/charts" prefetch>View Charts</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-none bg-transparent">
            <Link href="/references" prefetch>References</Link>
          </Button>
          {/* Replace the href below with your real HVSS site if available */}
          <Button asChild className="rounded-none">
            <Link href="https://example.com/hvss" target="_blank" rel="noreferrer noopener" prefetch>
              Visit HVSS
            </Link>
          </Button>
        </div>
      </header>

      <footer className="mt-12 border-t pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground">© {new Date().getFullYear()} HVSS</p>
          <div className="flex items-center gap-3">
            <Button asChild variant="secondary" className="rounded-none">
              <Link href="https://hvss-y4i0.onrender.com/" target="_blank" rel="noreferrer noopener">
                Visit HVSS
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none bg-transparent">
              <Link href="#top">Back to top</Link>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  )
}
