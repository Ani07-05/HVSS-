"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function ComparisonTable() {
  const cell = "border border-slate-200 p-3 align-top text-slate-800"
  const head = "border border-slate-300 bg-slate-50 p-3 text-left font-semibold text-slate-900"

  return (
    <Card className="rounded-none">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className={head}>Attribute</th>
                <th className={head}>HVSS</th>
                <th className={head}>BenchIoT</th>
                <th className={head}>CPS Scoring System</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Scope of Analysis</td>
                <td className={cell}>Single hardware vulnerability at the component level</td>
                <td className={cell}>Impact of security features at the device level</td>
                <td className={cell}>Entire interacting system or ecosystem of devices</td>
              </tr>
              <tr>
                <td className={cell}>Primary Output</td>
                <td className={cell}>Single, granular numerical score (vulnerability severity)</td>
                <td className={cell}>Multi-metric performance profile (e.g., speed, memory, power)</td>
                <td className={cell}>Aggregated, probabilistic risk score for the overall system</td>
              </tr>
              <tr>
                <td className={cell}>Main Objective</td>
                <td className={cell}>Rate and prioritize individual hardware vulnerabilities for remediation</td>
                <td className={cell}>
                  Analyze engineering trade-offs between security features and device performance
                </td>
                <td className={cell}>System-wide risk assessment of interconnected components</td>
              </tr>
              <tr>
                <td className={cell}>Methodology</td>
                <td className={cell}>Detailed component-level analysis based on vulnerability characteristics</td>
                <td className={cell}>Standardized benchmarking against security-related workloads</td>
                <td className={cell}>Complex probabilistic system modeling (e.g., Bayesian networks)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
