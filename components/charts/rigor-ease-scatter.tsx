"use client"

import { useMemo, useState, useCallback, memo } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import {
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts"

type Point = { name: string; rigor: number; ease: number; note?: string }
const points: Point[] = [
  { name: "HVSS", rigor: 4.5, ease: 3.2, note: "High rigor, medium ease" },
  { name: "BenchIoT", rigor: 4.2, ease: 2.9, note: "Benchmark suite trade-offs" },
  { name: "CPS Scoring", rigor: 4.6, ease: 2.2, note: "Complex system modeling" },
]

// Custom tooltip function
function CustomScatterTooltip({ active, payload }: any) {
  if (!active || !payload || payload.length === 0) return null
  const p = payload[0]?.payload
  const seriesName = payload[0]?.name
  if (!p) return null
  return (
    <div className="rounded-none border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
      <div className="font-medium">{seriesName}</div>
      <div>Rigor: {p.rigor}</div>
      <div>Ease: {p.ease}</div>
      {p.note ? <div className="mt-1 text-slate-500">{p.note}</div> : null}
    </div>
  )
}

export const RigorEaseScatter = memo(function RigorEaseScatter() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    HVSS: true,
    BenchIoT: true,
    "CPS Scoring": true,
  })

  const filtered = useMemo(() => points.filter((p) => enabled[p.name]), [enabled])

  const handleToggle = useCallback((key: string, checked: boolean) => {
    setEnabled((s) => ({ ...s, [key]: checked }))
  }, [])

  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle className="text-pretty">Trade-off: Evaluation Rigor vs. Ease of Use</CardTitle>
        <CardDescription>
          Higher values are better for both axes (1–5). Midlines show quadrant boundaries.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer
          className="h-[340px]"
          config={{
            HVSS: { label: "HVSS", color: "hsl(var(--chart-1))" },
            BenchIoT: { label: "BenchIoT", color: "hsl(var(--chart-2))" },
            "CPS Scoring": { label: "CPS Scoring", color: "hsl(var(--chart-3))" },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 16, right: 24, left: 8, bottom: 16 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="rigor" name="Evaluation Rigor" domain={[1, 5]} />
              <YAxis type="number" dataKey="ease" name="Ease of Use" domain={[1, 5]} />
              <ChartTooltip content={<CustomScatterTooltip />} />
              <Legend />
              <ReferenceLine x={3} stroke="currentColor" strokeOpacity={0.2} />
              <ReferenceLine y={3} stroke="currentColor" strokeOpacity={0.2} />
              {enabled["HVSS"] && (
                <Scatter
                  name="HVSS"
                  data={points.filter((p) => p.name === "HVSS")}
                  fill="rgb(29 78 216)"
                  stroke="rgb(29 78 216)"
                  shape="circle"
                />
              )}
              {enabled["BenchIoT"] && (
                <Scatter
                  name="BenchIoT"
                  data={points.filter((p) => p.name === "BenchIoT")}
                  fill="rgb(29 78 216)"
                  stroke="rgb(29 78 216)"
                  shape="square"
                />
              )}
              {enabled["CPS Scoring"] && (
                <Scatter
                  name="CPS Scoring"
                  data={points.filter((p) => p.name === "CPS Scoring")}
                  fill="rgb(29 78 216)"
                  stroke="rgb(29 78 216)"
                  shape="triangle"
                />
              )}
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="flex flex-wrap gap-4">
          {Object.keys(enabled).map((k) => (
            <label key={k} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={enabled[k]}
                onCheckedChange={(v) => handleToggle(k, Boolean(v))}
                className="rounded-none"
                aria-label={`Toggle ${k}`}
              />
              <span>{k}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div>
            <div className="font-medium">Quadrants</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Top-right: High Rigor, Easy to Use</li>
              <li>Top-left: Low Rigor, Easy to Use</li>
            </ul>
          </div>
          <div aria-hidden>
            <div className="font-medium sr-only">Quadrants Continued</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bottom-right: High Rigor, Hard to Use</li>
              <li>Bottom-left: Low Rigor, Hard to Use</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

export default RigorEaseScatter
