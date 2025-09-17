import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { CvssComparisonChart } from "@/components/charts/cvss-comparison-chart"

// Lazy load heavy components
const FrameworkAttributesChart = dynamic(() => import("@/components/charts/framework-attributes-chart").then(mod => ({ default: mod.FrameworkAttributesChart })), {
  loading: () => <div className="h-[340px] flex items-center justify-center bg-muted/20 rounded-none">Loading chart...</div>
})
const RigorEaseScatter = dynamic(() => import("@/components/charts/rigor-ease-scatter").then(mod => ({ default: mod.RigorEaseScatter })), {
  loading: () => <div className="h-[340px] flex items-center justify-center bg-muted/20 rounded-none">Loading chart...</div>
})

export const metadata: Metadata = {
  title: "Hardware Security Frameworks Charts",
  description: "Interactive charts comparing HVSS, BenchIoT, and CPS Scoring frameworks with visual analysis.",
}

export default function ChartsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-pretty">
          Framework Comparison Charts
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
          Interactive visualizations to help you understand the differences between hardware security frameworks.
        </p>
      </header>

      <section className="space-y-8">
        {/* Centerpiece: CVSS Comparison */}
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">HVSS vs CVSS: The Baseline Comparison</h2>
          <div className="border rounded-lg p-6 bg-card">
            <CvssComparisonChart />
          </div>
          <p className="text-sm text-muted-foreground px-6">
            <strong>Note on BenchIoT:</strong> BenchIoT is not included in this comparison because it serves a different purpose.
            It measures the performance overhead (e.g., speed, power consumption) of security features, rather than assigning a
            severity score to vulnerabilities. Therefore, it is not directly comparable in a scoring context like CVSS or HVSS.
          </p>
          <div className="mt-6 px-6">
            <h3 className="text-lg font-semibold mb-4">Chart Baselines & Specifications</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Category</th>
                    <th className="px-4 py-3 text-left font-semibold">Details</th>
                    <th className="px-4 py-3 text-left font-semibold">Scores</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 font-medium">CVSS Baseline</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Heartbleed vulnerability (CVE-2014-0160)
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold">7.5</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-3 font-medium">HVSS Single Vulnerability</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Memory Dumping exploit assessment
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold">8.2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">HVSS Cumulative Vulnerabilities</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Memory Dumping + Clock-based Attack + Wireless Attack
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold">9.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary section */}
          <div className="mt-8 px-6">
            <h3 className="text-lg font-semibold mb-4">Understanding HVSS Scoring: Single vs. Cumulative Vulnerabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Single Vulnerability Assessment
                </h4>
                <p className="text-muted-foreground text-sm">
                  HVSS can evaluate individual hardware vulnerabilities in isolation, providing a precise score for a specific weakness like a memory dumping exploit. This allows for targeted prioritization of security fixes.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Cumulative Vulnerability Analysis
                </h4>
                <p className="text-muted-foreground text-sm">
                  What makes HVSS unique is its ability to assess <strong>multiple interacting vulnerabilities</strong> simultaneously. When vulnerabilities combine (like memory dumping + clock-based attacks + wireless exploits), the cumulative risk often exceeds the sum of individual risks due to attack chaining and exploitation synergies.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">HVSS Advantages Over CVSS and Other Frameworks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Hardware-Specific Metrics:</strong>
                      <p className="text-muted-foreground text-xs mt-1">Unlike CVSS (designed for software), HVSS incorporates hardware attack vectors like side-channel analysis, fault injection, and physical tampering</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Cumulative Risk Modeling:</strong>
                      <p className="text-muted-foreground text-xs mt-1">Only HVSS can properly model how multiple hardware vulnerabilities interact and amplify each other's exploitability</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Component-Level Granularity:</strong>
                      <p className="text-muted-foreground text-xs mt-1">Scores individual chips, buses, and interfaces rather than entire systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-sm">Attack Chain Analysis:</strong>
                      <p className="text-muted-foreground text-xs mt-1">Considers exploitation prerequisites and dependencies that other frameworks ignore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Additional Charts from Visual Comparison */}
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">Framework Attributes Comparison</h2>
          <div className="border rounded-lg p-6 bg-card">
            <FrameworkAttributesChart />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            This chart rates each framework on key attributes (1=Low, 5=High). HVSS stands out for its strong hardware focus and scoring granularity.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">
            Trade-off: Evaluation Rigor vs. Ease of Use
          </h2>
          <div className="border rounded-lg p-6 bg-card">
            <RigorEaseScatter />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            This scatter plot shows the balance between analytical depth and practical application. HVSS achieves high rigor without excessive complexity, making it a practical choice for many teams.
          </p>
        </article>
      </section>
    </main>
  )
}
