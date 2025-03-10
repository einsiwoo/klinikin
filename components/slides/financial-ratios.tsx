"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const ratiosData = [
  { year: "2020", equityRatio: -0.031, operatingMargin: -0.001, longTermDebt: 46260242 },
  { year: "2021", equityRatio: 0.147, operatingMargin: 0.033, longTermDebt: 19999034 },
  { year: "2022", equityRatio: 0.466, operatingMargin: 0.078, longTermDebt: 0 },
  { year: "2023", equityRatio: 0.493, operatingMargin: 0.041, longTermDebt: 0 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

// Format percentage
const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(1)}%`
}

export default function FinancialRatios() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Financial Ratios</h2>
        <p className="text-muted-foreground mt-2">Key Financial Metrics (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Equity Ratio</CardTitle>
            <CardDescription>Equity as a percentage of total assets (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                equityRatio: {
                  label: "Equity Ratio",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-[4/3]"
            >
              <AreaChart data={ratiosData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatPercentage(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatPercentage(value)} />} />
                <Area
                  type="monotone"
                  dataKey="equityRatio"
                  fill="var(--color-equityRatio)"
                  fillOpacity={0.3}
                  stroke="var(--color-equityRatio)"
                />
              </AreaChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-destructive">-3.1% (Negative)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-muted-foreground">14.7%</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-muted-foreground">46.6%</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-muted-foreground">49.3%</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Equity ratio improved dramatically from negative in 2020 to nearly 50% in 2023,
                  indicating significantly improved financial stability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operating Profit Margin</CardTitle>
            <CardDescription>Operating profit as a percentage of revenue (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                operatingMargin: {
                  label: "Operating Margin",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-[4/3]"
            >
              <BarChart data={ratiosData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatPercentage(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatPercentage(value)} />} />
                <Bar dataKey="operatingMargin" fill="var(--color-operatingMargin)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-destructive">-0.1% (Negative)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-muted-foreground">3.3%</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-muted-foreground">7.8%</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-muted-foreground">4.1%</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Operating margin peaked in 2022 at 7.8% but declined in 2023 to 4.1%,
                  suggesting increased operational costs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Long-Term Debt</CardTitle>
          <CardDescription>Long-term debt reduction (2020-2023)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              longTermDebt: {
                label: "Long-Term Debt",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="aspect-[21/9]"
          >
            <LineChart data={ratiosData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatToMillions(value)} />
              <ChartTooltip
                content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
              />
              <Line
                type="monotone"
                dataKey="longTermDebt"
                stroke="var(--color-longTermDebt)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 text-sm">
            <p className="text-muted-foreground">
              The company has successfully eliminated all long-term debt by 2022, reducing it from ISK 46.3M in 2020 to
              zero. This debt-free position strengthens the company's financial flexibility and reduces financial risk.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

