import ComparisonTable from "@/components/paper/comparison-table"

export default function SummaryPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 font-sans">
      <h1 className="mb-6 text-pretty text-2xl font-semibold text-slate-900">Side-by-Side Comparison</h1>
      <ComparisonTable />
    </main>
  )
}
