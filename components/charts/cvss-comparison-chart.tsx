"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  {
    name: "Scenario 1: Single Vulnerability",
    vulnerability: "Memory Dumping",
    CVSS: 7.5,
    HVSS: 8.2,
  },
  {
    name: "Scenario 2: Cumulative Vulnerabilities",
    vulnerability: "Memory Dumping + Clock Attack + Wireless Attack",
    HVSS: 9.1,
    CVSS: null, // CVSS is not applicable for cumulative scoring
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const scenarioData = data.find(d => d.name === label);
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              Scenario
            </span>
            <span className="font-bold text-muted-foreground">
              {label}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              Vulnerabilities
            </span>
            <span className="font-bold text-muted-foreground">
              {scenarioData?.vulnerability}
            </span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
            {payload.map((p: any) => (
                 <div key={p.dataKey} className="flex flex-col">
                 <span className="text-[0.70rem] uppercase" style={{color: p.color}}>
                   {p.dataKey}
                 </span>
                 <span className="font-bold" style={{color: p.color}}>
                   {p.value || 'N/A'}
                 </span>
               </div>
            ))}
        </div>
      </div>
    );
  }

  return null;
};


export function CvssComparisonChart() {
  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle>HVSS vs. CVSS: A Baseline Comparison</CardTitle>
        <CardDescription>
          This chart compares HVSS and CVSS scores for single and cumulative hardware vulnerabilities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="CVSS" fill="#8884d8" radius={[0, 0, 0, 0]} />
            <Bar dataKey="HVSS" fill="#82ca9d" radius={[0, 0, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
