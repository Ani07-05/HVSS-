import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hardware Security Frameworks References",
  description: "Research papers and references for HVSS, BenchIoT, and CPS Scoring frameworks.",
}

export default function ReferencesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-pretty">
          Learn More
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
          These frameworks are based on cutting-edge research. Here are the original papers:
        </p>
      </header>

      <section className="space-y-2">
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
    </main>
  )
}
