export default function AnalysisPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 font-sans">
      <h1 className="mb-6 text-pretty text-2xl font-semibold text-slate-900">1 Analysis of Scoring Methodologies</h1>
      <p className="mb-4 text-slate-800 leading-relaxed">
        To understand the unique position of HVSS, it is essential to analyze the methodologies of its direct
        competitors in the quantitative scoring space. Each framework approaches the problem of security measurement
        from a different perspective, resulting in fundamentally different outputs and use cases.
      </p>
      <h2 className="mb-2 text-xl font-semibold text-slate-900">1.1 Hardware Vulnerability Scoring System (HVSS)</h2>
      <p className="mb-4 text-slate-800 leading-relaxed">
        HVSS is designed to provide a granular, quantitative score for hardware-specific vulnerabilities at the
        component level. The output is a single score to prioritize remediation and enable objective comparisons.
      </p>
      <h2 className="mb-2 text-xl font-semibold text-slate-900">1.2 BenchIoT</h2>
      <p className="mb-4 text-slate-800 leading-relaxed">
        BenchIoT produces a profile of quantitative performance metrics derived from standardized security tests (e.g.,
        memory, execution time, power). It enables engineering trade-off analysis but is not a single summary score.
      </p>
      <h2 className="mb-2 text-xl font-semibold text-slate-900">1.3 Aigner et al.’s CPS Scoring System</h2>
      <p className="text-slate-800 leading-relaxed">
        This framework models system-level interactions (often via Bayesian networks) to estimate probabilistic risk of
        failure across a CPS ecosystem, yielding an aggregated, quantitative risk score for the overall system.
      </p>
      <p className="mt-4 text-sm text-slate-600">
        See also:{" "}
        <a className="text-slate-900 underline underline-offset-4" href="/paper/visual-comparison#figure-1">
          Figure 1 (Attributes)
        </a>{" "}
        and{" "}
        <a className="text-slate-900 underline underline-offset-4" href="/paper/visual-comparison#figure-2">
          Figure 2 (Rigor vs Ease)
        </a>
        .
      </p>
    </main>
  )
}
