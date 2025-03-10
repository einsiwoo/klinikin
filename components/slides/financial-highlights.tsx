"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const financialData = [
  { year: "2020", revenue: 1222000666, profit: -1481875 },
  { year: "2021", revenue: 1995674625, profit: 62985472 },
  { year: "2022", revenue: 2595742369, profit: 216612040 },
  { year: "2023", revenue: 2810223878, profit: 115872318 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function FinancialHighlights() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Financial Highlights</h2>
        <p className="text-muted-foreground mt-2">Revenue and Profit Growth (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Annual revenue in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-[4/3]"
            >
              <AreaChart data={financialData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  fillOpacity={0.3}
                  stroke="var(--color-revenue)"
                />
              </AreaChart>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="font-medium">2020-2021 Growth</p>
                <p className="text-muted-foreground">+63%</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">2021-2022 Growth</p>
                <p className="text-muted-foreground">+31%</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">2022-2023 Growth</p>
                <p className="text-muted-foreground">+10%</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Overall Growth</p>
                <p className="text-muted-foreground">+130%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profit/Loss</CardTitle>
            <CardDescription>Annual profit/loss in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                profit: {
                  label: "Profit/Loss",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-[4/3]"
            >
              <BarChart data={financialData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Bar dataKey="profit" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-destructive">ISK -1.5M (Loss)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-primary">ISK 63.0M (Profit)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-primary">ISK 216.6M (Profit)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-primary">ISK 115.9M (Profit)</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> 2022 was the most profitable year, with profit declining in 2023 despite higher
                  revenue, indicating increased operational costs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue vs. Profit Trend</CardTitle>
          <CardDescription>Comparative view of revenue and profit growth</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
              profit: {
                label: "Profit",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="aspect-[21/9]"
          >
            <LineChart data={financialData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" tickFormatter={(value) => formatToMillions(value)} />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => formatToMillions(value)} />
              <ChartTooltip
                content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="profit"
                stroke="var(--color-profit)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 text-sm">
            <p className="text-muted-foreground">
              The company has shown consistent revenue growth over the four-year period, with a significant turnaround
              from loss to profit in 2021. While 2022 marked the peak profitability, 2023 saw continued revenue growth
              but with reduced profit margins.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

