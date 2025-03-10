"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const cashFlowData = [
  { year: "2020", cash: 102164290, fixedAssets: 85800740, subsidiaryInvestments: 0 },
  { year: "2021", cash: 100872416, fixedAssets: 105070391, subsidiaryInvestments: 0 },
  { year: "2022", cash: 183529920, fixedAssets: 189351507, subsidiaryInvestments: 68900000 },
  { year: "2023", cash: 250172152, fixedAssets: 212115454, subsidiaryInvestments: 68900000 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function CashFlow() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Cash Flow & Assets</h2>
        <p className="text-muted-foreground mt-2">Liquidity and Capital Investments (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cash Position</CardTitle>
            <CardDescription>Year-end cash in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                cash: {
                  label: "Cash",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-[4/3]"
            >
              <AreaChart data={cashFlowData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Area
                  type="monotone"
                  dataKey="cash"
                  fill="var(--color-cash)"
                  fillOpacity={0.3}
                  stroke="var(--color-cash)"
                />
              </AreaChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-muted-foreground">ISK 102.2M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-muted-foreground">ISK 100.9M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-muted-foreground">ISK 183.5M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-muted-foreground">ISK 250.2M</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Cash position has grown significantly since 2021, with a 145% increase from
                  2020 to 2023, providing strong liquidity for operations and expansion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Capital Investments</CardTitle>
            <CardDescription>Fixed assets and subsidiary investments in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                fixedAssets: {
                  label: "Fixed Assets",
                  color: "hsl(var(--chart-2))",
                },
                subsidiaryInvestments: {
                  label: "Subsidiary Investments",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="aspect-[4/3]"
            >
              <BarChart data={cashFlowData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Bar dataKey="fixedAssets" fill="var(--color-fixedAssets)" stackId="a" radius={[4, 4, 0, 0]} />
                <Bar
                  dataKey="subsidiaryInvestments"
                  fill="var(--color-subsidiaryInvestments)"
                  stackId="a"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">Fixed Assets Growth</p>
                  <p className="text-muted-foreground">+147% (2020-2023)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Subsidiary Investment</p>
                  <p className="text-muted-foreground">ISK 68.9M (2022)</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Significant investments in fixed assets and subsidiaries in 2022, supporting
                  the company's expansion strategy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cash Flow and Investments</CardTitle>
          <CardDescription>Comparative view of liquidity and capital allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              cash: {
                label: "Cash",
                color: "hsl(var(--chart-1))",
              },
              fixedAssets: {
                label: "Fixed Assets",
                color: "hsl(var(--chart-2))",
              },
              subsidiaryInvestments: {
                label: "Subsidiary Investments",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="aspect-[21/9]"
          >
            <LineChart data={cashFlowData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatToMillions(value)} />
              <ChartTooltip
                content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
              />
              <Line
                type="monotone"
                dataKey="cash"
                stroke="var(--color-cash)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="fixedAssets"
                stroke="var(--color-fixedAssets)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="subsidiaryInvestments"
                stroke="var(--color-subsidiaryInvestments)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 text-sm">
            <p className="text-muted-foreground">
              The company has maintained strong liquidity while simultaneously investing in growth. The strategic
              investments in fixed assets and subsidiaries in 2022, combined with increasing cash reserves, demonstrate
              a balanced approach to financial management and growth.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

