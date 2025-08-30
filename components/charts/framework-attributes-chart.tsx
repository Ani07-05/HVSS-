"use client"

import { useMemo, useState, useCallback, memo } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

type FrameworkKey = "HVSS" | "BenchIoT" | "CPS"

const rawData = [
  { attribute: "Hardware Focus", HVSS: 5, BenchIoT: 5, CPS: 2 },
  { attribute: "Scoring Granularity", HVSS: 5, BenchIoT: 3, CPS: 2.5 },
  { attribute: "Ease of Use", HVSS: 3.5, BenchIoT: 3, CPS: 2.5 },
]

function FrameworkAttributesChart() {
  const [active, setActive] = useState<Record<FrameworkKey, boolean>>({
    HVSS: true,
    BenchIoT: true,
    CPS: true,
  })

  const series = useMemo(() => (Object.keys(active) as FrameworkKey[]).filter((k) => active[k]).map((k) => k), [active])

  // but still display a friendly label in the Legend (e.g., "CPS Scoring")
  const legendLabel: Record<FrameworkKey, string> = {
    HVSS: "HVSS",
    BenchIoT: "BenchIoT",
    CPS: "CPS Scoring",
  }

  const handleToggle = useCallback((key: FrameworkKey, checked: boolean) => {
    setActive((s) => ({ ...s, [key]: checked }))
  }, [])

  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle className="text-pretty">Framework Attributes Comparison</CardTitle>
        <CardDescription>Ratings normalized (1 = Low, 5 = High). Toggle frameworks below.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer
          className="h-[340px]"
          config={{
            HVSS: { label: "HVSS", color: "hsl(var(--chart-1))" },
            BenchIoT: { label: "BenchIoT", color: "hsl(var(--chart-2))" },
            CPS: { label: "CPS Scoring", color: "hsl(var(--chart-3))" },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rawData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
              <defs>
                {/* HVSS: diagonal stripes */}
                <pattern id="pattern-hvss" patternUnits="userSpaceOnUse" width="8" height="8">
                  <rect width="8" height="8" fill="rgb(29 78 216)" fillOpacity="0.18" />
                  <path
                    d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                    stroke="rgb(29 78 216)"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                  />
                </pattern>
                {/* BenchIoT: dots */}
                <pattern id="pattern-benchiot" patternUnits="userSpaceOnUse" width="10" height="10">
                  <rect width="10" height="10" fill="rgb(29 78 216)" fillOpacity="0.14" />
                  <circle cx="3" cy="3" r="1.2" fill="rgb(29 78 216)" fillOpacity="0.5" />
                  <circle cx="8" cy="8" r="1.2" fill="rgb(29 78 216)" fillOpacity="0.5" />
                </pattern>
                {/* CPS: crosshatch */}
                <pattern id="pattern-cps" patternUnits="userSpaceOnUse" width="8" height="8">
                  <rect width="8" height="8" fill="rgb(29 78 216)" fillOpacity="0.12" />
                  <path d="M0,0 L8,8 M8,0 L0,8" stroke="rgb(29 78 216)" strokeWidth="1" strokeOpacity="0.35" />
                </pattern>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="attribute" />
              <YAxis domain={[0, 5]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend formatter={(value: string) => legendLabel[value as FrameworkKey] ?? value} />
              {series.includes("HVSS") && (
                <Bar dataKey="HVSS" fill="url(#pattern-hvss)" stroke="rgb(29 78 216)" className="rounded-none" />
              )}
              {series.includes("BenchIoT") && (
                <Bar
                  dataKey="BenchIoT"
                  fill="url(#pattern-benchiot)"
                  stroke="rgb(29 78 216)"
                  className="rounded-none"
                />
              )}
              {series.includes("CPS") && (
                <Bar dataKey="CPS" fill="url(#pattern-cps)" stroke="rgb(29 78 216)" className="rounded-none" />
              )}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="flex flex-wrap gap-4">
          {(["HVSS", "BenchIoT", "CPS"] as FrameworkKey[]).map((key) => (
            <label key={key} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={active[key]}
                onCheckedChange={(v) => handleToggle(key, Boolean(v))}
                className="rounded-none"
                aria-label={`Toggle ${key}`}
              />
              <span>{key === "CPS" ? "CPS Scoring" : key}</span>
            </label>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default memo(FrameworkAttributesChart)
export { FrameworkAttributesChart }
