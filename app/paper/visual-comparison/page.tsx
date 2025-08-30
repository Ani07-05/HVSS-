import dynamic from "next/dynamic"

// Lazy load heavy components
const FrameworkAttributesChart = dynamic(() => import("@/components/charts/framework-attributes-chart").then(mod => ({ default: mod.FrameworkAttributesChart })), {
  loading: () => <div className="h-[340px] flex items-center justify-center bg-muted/20 rounded-none">Loading chart...</div>
})
const RigorEaseScatter = dynamic(() => import("@/components/charts/rigor-ease-scatter").then(mod => ({ default: mod.RigorEaseScatter })), {
  loading: () => <div className="h-[340px] flex items-center justify-center bg-muted/20 rounded-none">Loading chart...</div>
})

export default function VisualComparisonPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 font-sans">
      <h1 className="mb-6 text-pretty text-2xl font-semibold text-slate-900">Visual Comparison of Frameworks</h1>

      <section id="attributes" className="mb-10">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">Framework Attributes Comparison</h2>
        <FrameworkAttributesChart />
        <p className="mt-2 text-sm text-slate-600">
          This chart rates each framework on key attributes (1=Low, 5=High). HVSS stands out for its strong hardware focus and scoring granularity.
        </p>
      </section>

      <section id="trade-offs">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          Trade-off: Evaluation Rigor vs. Ease of Use
        </h2>
        <RigorEaseScatter />
        <p className="mt-2 text-sm text-slate-600">
          This scatter plot shows the balance between analytical depth and practical application. HVSS achieves high rigor without excessive complexity, making it a practical choice for many teams.
        </p>
      </section>
    </main>
  )
}
