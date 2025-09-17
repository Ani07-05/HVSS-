import type { Metadata } from "next"
import ComparisonTable from "@/components/comparison-table"
import { CvssComparisonChart } from "@/components/charts/cvss-comparison-chart"

export const metadata: Metadata = {
  title: "Hardware Security Frameworks Analysis",
  description: "Detailed analysis of HVSS, BenchIoT, and CPS Scoring frameworks for hardware security evaluation.",
}

export default function AnalysisPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-pretty">
          Understanding Each Framework
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
          Three different approaches to measuring hardware security. HVSS gives you a single score for vulnerabilities,
          BenchIoT tests performance impacts, and CPS Scoring evaluates entire systems.
        </p>
      </header>

      <section className="space-y-8">
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">HVSS: Hardware Vulnerability Scoring System</h2>
          <p className="text-sm leading-relaxed">
            HVSS provides a precise, quantitative scoring system specifically designed for hardware vulnerabilities. Unlike general-purpose scoring systems like CVSS, HVSS focuses on hardware-specific attack vectors, component interactions, and exploitation complexity.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            <strong>Key Features:</strong> Single vulnerability assessment, cumulative vulnerability analysis, hardware-specific metrics, and reproducible scoring methodology.
          </p>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm">
              <strong>HVSS Unique Capability:</strong> Unlike CVSS and other frameworks, HVSS can assess both individual vulnerabilities and <em>cumulative risk</em> when multiple hardware weaknesses interact. This is crucial because hardware attack chains often create exponentially greater risks than isolated vulnerabilities.
            </p>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">BenchIoT: Performance Benchmarking for IoT Security</h2>
          <p className="text-sm leading-relaxed">
            BenchIoT is a comprehensive benchmarking suite that measures the performance impact of security implementations on IoT devices. Rather than scoring vulnerabilities, it quantifies the trade-offs between security features and device performance metrics.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            <strong>What it measures:</strong> CPU utilization, memory consumption, battery life impact, network latency, and processing overhead when security features are enabled.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">CPS Scoring: Cyber-Physical Systems Risk Assessment</h2>
          <p className="text-sm leading-relaxed">
            CPS Scoring evaluates entire cyber-physical systems using probabilistic risk modeling. It employs Bayesian networks and system-wide analysis to predict cascading failures and economic impacts across interconnected infrastructure.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            <strong>Applications:</strong> Industrial control systems, smart cities, autonomous vehicles, and critical infrastructure protection.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-pretty">Quick Comparison Table</h2>
          <p className="text-sm leading-relaxed mb-4">
            Here's a side-by-side comparison to help you quickly see the differences:
          </p>
          <ComparisonTable />
        </article>
      </section>
    </main>
  )
}
