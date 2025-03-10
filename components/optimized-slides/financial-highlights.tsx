"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const financialData = [
  { year: "2020", revenue: 1222000666, profit: -1481875, equity: -8850203, liabilities: 294386875 },
  { year: "2021", revenue: 1995674625, profit: 62985472, equity: 50135269, liabilities: 290421050 },
  { year: "2022", revenue: 2595742369, profit: 216612040, equity: 266747309, liabilities: 306217582 },
  { year: "2023", revenue: 2810223878, profit: 115872318, equity: 321810835, liabilities: 330971606 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function FinancialHighlights() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Financial Performance</h2>
        <p className="text-muted-foreground mt-2">Strong Growth & Financial Stability (2020-2023)</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader>
              <CardTitle>Revenue & Profit</CardTitle>
              <CardDescription>Annual performance (ISK)</CardDescription>
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
                className="aspect-[4/3]"
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
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium">Revenue Growth</p>
                  <p className="text-muted-foreground">+130% (2020-2023)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Peak Profit</p>
                  <p className="text-muted-foreground">ISK 216.6M (2022)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader>
              <CardTitle>Financial Position</CardTitle>
              <CardDescription>Equity & Liabilities (ISK)</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  equity: {
                    label: "Equity",
                    color: "hsl(var(--chart-3))",
                  },
                  liabilities: {
                    label: "Liabilities",
                    color: "hsl(var(--chart-4))",
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
                    dataKey="equity"
                    fill="var(--color-equity)"
                    fillOpacity={0.3}
                    stroke="var(--color-equity)"
                  />
                  <Area
                    type="monotone"
                    dataKey="liabilities"
                    fill="var(--color-liabilities)"
                    fillOpacity={0.3}
                    stroke="var(--color-liabilities)"
                  />
                </AreaChart>
              </ChartContainer>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium">Equity Ratio</p>
                  <p className="text-muted-foreground">49.3% (2023)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Long-Term Debt</p>
                  <p className="text-muted-foreground">Zero since 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Key Financial Metrics</CardTitle>
            <CardDescription>Performance indicators at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-primary">130%</div>
                <div className="text-xs text-muted-foreground">Revenue Growth</div>
              </div>
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-primary">49.3%</div>
                <div className="text-xs text-muted-foreground">Equity Ratio</div>
              </div>
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-primary">ISK 250M</div>
                <div className="text-xs text-muted-foreground">Cash Position</div>
              </div>
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-xs text-muted-foreground">Long-Term Debt</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

