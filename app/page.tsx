import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-16 font-sans">
      <h1 className="text-pretty text-3xl font-semibold text-slate-900">
        Understanding Hardware Security: HVSS vs BenchIoT vs CPS Scoring
      </h1>
      <p className="text-slate-700 leading-relaxed">
        Ever wondered how we measure hardware security? This interactive guide breaks down three powerful frameworks
        that help engineers and security experts evaluate and improve hardware security. See how they compare in
        real-time with interactive charts and easy-to-understand explanations.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild className="rounded-none bg-slate-900 text-white hover:bg-slate-800">
          <Link href="/paper" prefetch>Read the paper</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-none">
          <Link href="/paper/visual-comparison" prefetch>Jump to charts</Link>
        </Button>
      </div>
    </main>
  )
}
