export default function ReferencesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 font-sans">
      <h1 className="mb-6 text-pretty text-2xl font-semibold text-slate-900">References</h1>
      <ol className="list-inside list-decimal space-y-3 text-slate-800">
        <li>
          Aigner, A., et al. (2021). A Scoring System to Efficiently Measure Security in Cyber-Physical Systems. IEEE
          CSR.{" "}
          <a
            href="https://ieeexplore.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 underline underline-offset-4"
          >
            External link
          </a>
        </li>
        <li>
          Celik, Z. B., et al. (2019). BenchIoT: A Security Benchmark for the Internet of Things. IEEE Security &
          Privacy.{" "}
          <a
            href="https://ieeexplore.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 underline underline-offset-4"
          >
            External link
          </a>
        </li>
      </ol>
    </main>
  )
}
