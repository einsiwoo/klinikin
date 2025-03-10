"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const equityLiabilitiesData = [
  { year: "2020", equity: -8850203, liabilities: 294386875, assets: 285536672 },
  { year: "2021", equity: 50135269, liabilities: 290421050, assets: 340556319 },
  { year: "2022", equity: 266747309, liabilities: 306217582, assets: 572964891 },
  { year: "2023", equity: 321810835, liabilities: 330971606, assets: 652782441 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function EquityLiabilities() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Equity & Liabilities</h2>
        <p className="text-muted-foreground mt-2">Financial Position (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Equity Growth</CardTitle>
            <CardDescription>Annual equity in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                equity: {
                  label: "Equity",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-[4/3]"
            >
              <AreaChart data={equityLiabilitiesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Area
                  type="monotone"
                  dataKey="equity"
                  fill="var(--color-equity)"
                  fillOpacity={0.3}
                  stroke="var(--color-equity)"
                />
              </AreaChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-destructive">ISK -8.9M (Negative)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-primary">ISK 50.1M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-primary">ISK 266.7M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-primary">ISK 321.8M</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Equity turned positive in 2021 and has grown significantly since, indicating
                  improved financial stability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liabilities</CardTitle>
            <CardDescription>Annual liabilities in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                liabilities: {
                  label: "Liabilities",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-[4/3]"
            >
              <BarChart data={equityLiabilitiesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Bar dataKey="liabilities" fill="var(--color-liabilities)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-muted-foreground">ISK 294.4M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-muted-foreground">ISK 290.4M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-muted-foreground">ISK 306.2M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-muted-foreground">ISK 331.0M</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Liabilities have remained relatively stable with a slight increase over time,
                  while long-term debt was fully repaid by 2022.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assets, Equity & Liabilities</CardTitle>
          <CardDescription>Comparative view of financial position</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              assets: {
                label: "Total Assets",
                color: "hsl(var(--chart-1))",
              },
              equity: {
                label: "Equity",
                color: "hsl(var(--chart-2))",
              },
              liabilities: {
                label: "Liabilities",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="aspect-[21/9]"
          >
            <LineChart data={equityLiabilitiesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatToMillions(value)} />
              <ChartTooltip
                content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
              />
              <Line
                type="monotone"
                dataKey="assets"
                stroke="var(--color-assets)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="equity"
                stroke="var(--color-equity)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="liabilities"
                stroke="var(--color-liabilities)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 text-sm">
            <p className="text-muted-foreground">
              The company has significantly improved its financial position, with assets more than doubling from 2020 to
              2023. The equity ratio improved from negative in 2020 to 49.3% in 2023, indicating a much stronger
              financial foundation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

