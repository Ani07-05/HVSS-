import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import ComparisonTable from "@/components/comparison-table"

// Lazy load heavy components
const FrameworkAttributesChart = dynamic(() => import("@/components/charts/framework-attributes-chart").then(mod => ({ default: mod.FrameworkAttributesChart })), {
  loading: () => <div className="h-[340px] flex items-center justify-center bg-muted/20 rounded-none">Loading chart...</div>
})
const RigorEaseScatter = dynamic(() => import("@/components/charts/rigor-ease-scatter").then(mod => ({ default: mod.RigorEaseScatter })), {
  loading: () => <div className="h-[340px] flex items-center justify-center bg-muted/20 rounded-none">Loading chart...</div>
})

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
          Hardware Security Frameworks: Which One Should You Choose?
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
          Three different approaches to measuring hardware security. HVSS gives you a single score for vulnerabilities,
          BenchIoT tests performance impacts, and CPS Scoring evaluates entire systems. Use the interactive charts below
          to see how they compare and which might work best for your needs.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {/* Buttons are square per request */}
          <Button asChild className="rounded-none">
            <Link href="#analysis" prefetch>Jump to Analysis</Link>
          </Button>
          <Button asChild variant="secondary" className="rounded-none">
            <Link href="#charts" prefetch>View Charts</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-none bg-transparent">
            <Link href="#references" prefetch>References</Link>
          </Button>
          {/* Replace the href below with your real HVSS site if available */}
          <Button asChild className="rounded-none">
            <Link href="https://example.com/hvss" target="_blank" rel="noreferrer noopener" prefetch>
              Visit HVSS
            </Link>
          </Button>
        </div>
      </header>

      <section id="analysis" className="space-y-8">
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">Understanding Each Framework</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">HVSS: The Precision Tool</h3>
              <p className="text-sm leading-relaxed text-blue-800">
                <strong>What it does:</strong> HVSS gives you a single, clear number that tells you exactly how serious a
                hardware vulnerability is. Think of it like a doctor's diagnosis - it tells you "this is a level 7 out of 10" problem.
              </p>
              <p className="text-sm leading-relaxed text-blue-800 mt-2">
                <strong>Best for:</strong> When you need to prioritize which vulnerabilities to fix first, or compare
                different hardware components objectively.
              </p>
              <p className="text-sm leading-relaxed text-blue-800 mt-2">
                <strong>Real-world example:</strong> "This memory chip has a vulnerability score of 8.2 - fix it before
                the processor chip with score 3.1."
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-900 mb-3">BenchIoT: The Performance Tester</h3>
              <p className="text-sm leading-relaxed text-green-800">
                <strong>What it does:</strong> Instead of just saying "this is secure," BenchIoT measures what happens
                to your device's performance when you add security features. It tells you: "Adding this encryption
                will slow things down by 15% and use 20% more battery."
              </p>
              <p className="text-sm leading-relaxed text-green-800 mt-2">
                <strong>Best for:</strong> Engineers who need to balance security with device performance and battery life.
              </p>
              <p className="text-sm leading-relaxed text-green-800 mt-2">
                <strong>Real-world example:</strong> "This security feature gives great protection but will make your
                IoT device run 30% slower - is it worth it?"
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">CPS Scoring: The Big Picture View</h3>
              <p className="text-sm leading-relaxed text-purple-800">
                <strong>What it does:</strong> CPS Scoring looks at entire systems of connected devices and calculates
                the overall risk. It uses advanced math (like Bayesian networks) to predict what could go wrong
                across your whole network.
              </p>
              <p className="text-sm leading-relaxed text-purple-800 mt-2">
                <strong>Best for:</strong> Large organizations managing complex systems like smart cities, industrial
                control systems, or connected vehicle networks.
              </p>
              <p className="text-sm leading-relaxed text-purple-800 mt-2">
                <strong>Real-world example:</strong> "If this factory robot gets hacked, it could cost $2.3 million in
                downtime - here's the probability and impact score."
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-4" id="charts">
          <h2 className="text-2xl font-semibold text-pretty">Interactive Comparison Charts</h2>
          <p className="text-sm leading-relaxed">
            Use these interactive charts to compare the frameworks side-by-side. Click the checkboxes to show/hide
            different frameworks and see how they stack up in terms of hardware focus, ease of use, and evaluation rigor.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FrameworkAttributesChart />
            <RigorEaseScatter />
          </div>
          <p className="text-xs text-muted-foreground">
            <strong>Pro tip:</strong> Try toggling frameworks on/off to focus on specific comparisons that matter to your project.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">Quick Comparison Table</h2>
          <p className="text-sm leading-relaxed mb-4">
            Here's a side-by-side comparison to help you quickly see the differences:
          </p>
          <ComparisonTable />
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">Which Framework Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Choose HVSS if you need:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Simple vulnerability prioritization</li>
                <li>• Component-level security scores</li>
                <li>• Quick, reproducible results</li>
                <li>• Individual hardware assessment</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Choose BenchIoT if you need:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Performance impact analysis</li>
                <li>• Security vs. efficiency trade-offs</li>
                <li>• Device benchmarking</li>
                <li>• Engineering optimization</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Choose CPS Scoring if you need:</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• System-wide risk assessment</li>
                <li>• Complex network analysis</li>
                <li>• Probabilistic risk modeling</li>
                <li>• Enterprise-level security</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section id="references" className="mt-10 space-y-2">
        <h2 className="text-2xl font-semibold text-pretty">Learn More</h2>
        <p className="text-sm text-muted-foreground mb-4">
          These frameworks are based on cutting-edge research. Here are the original papers:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
          <li>
            <strong>Aigner et al. (2021)</strong> - The original CPS Scoring System research paper from IEEE.{" "}
            <a
              href="https://ieeexplore.ieee.org/document/9502452"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 hover:underline"
            >
              Read the IEEE paper →
            </a>
          </li>
          <li>
            <strong>Celik et al. (2019)</strong> - BenchIoT benchmark suite research from IEEE.{" "}
            <a
              href="https://ieeexplore.ieee.org/document/8814432"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 hover:underline"
            >
              Read the IEEE paper →
            </a>
          </li>
        </ol>
      </section>

      <footer className="mt-12 border-t pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Hardware Security Framework Comparison</p>
          <div className="flex items-center gap-3">
            <Button asChild variant="secondary" className="rounded-none">
              <Link href="https://example.com/hvss" target="_blank" rel="noreferrer noopener">
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
