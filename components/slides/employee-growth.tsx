"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const employeeData = [
  { year: "2020", employees: 15, staffCosts: 142623745 },
  { year: "2021", employees: 18.5, staffCosts: 259338916 },
  { year: "2022", employees: 34, staffCosts: 443902840 },
  { year: "2023", employees: 38, staffCosts: 544053589 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function EmployeeGrowth() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Employee Growth</h2>
        <p className="text-muted-foreground mt-2">Workforce and Staff Costs (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Full-Time Equivalent Employees</CardTitle>
            <CardDescription>Annual employee count (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                employees: {
                  label: "Employees",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-[4/3]"
            >
              <BarChart data={employeeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => `${value} FTE`} />} />
                <Bar dataKey="employees" fill="var(--color-employees)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-muted-foreground">15 employees</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-muted-foreground">18.5 employees</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-muted-foreground">34 employees</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-muted-foreground">38 employees</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Significant workforce growth of 153% from 2020 to 2023, with the largest
                  increase occurring between 2021 and 2022.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Staff Costs</CardTitle>
            <CardDescription>Annual staff costs in ISK (2020-2023)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                staffCosts: {
                  label: "Staff Costs",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-[4/3]"
            >
              <AreaChart data={employeeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatToMillions(value)} />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                />
                <Area
                  type="monotone"
                  dataKey="staffCosts"
                  fill="var(--color-staffCosts)"
                  fillOpacity={0.3}
                  stroke="var(--color-staffCosts)"
                />
              </AreaChart>
            </ChartContainer>
            <div className="mt-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">2020</p>
                  <p className="text-muted-foreground">ISK 142.6M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2021</p>
                  <p className="text-muted-foreground">ISK 259.3M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2022</p>
                  <p className="text-muted-foreground">ISK 443.9M</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2023</p>
                  <p className="text-muted-foreground">ISK 544.1M</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="text-xs">
                  <strong>Note:</strong> Staff costs nearly quadrupled from 2020 to 2023, reflecting both increased
                  headcount and potentially higher compensation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee Growth vs. Staff Costs</CardTitle>
          <CardDescription>Comparative view of workforce expansion and associated costs</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              employees: {
                label: "Employees",
                color: "hsl(var(--chart-1))",
              },
              staffCosts: {
                label: "Staff Costs",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="aspect-[21/9]"
          >
            <LineChart data={employeeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => formatToMillions(value)} />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) =>
                      name === "employees" ? `${value} FTE` : `ISK ${(Number(value)).toLocaleString()}`
                    }
                  />
                }
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="employees"
                stroke="var(--color-employees)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="staffCosts"
                stroke="var(--color-staffCosts)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 text-sm">
            <p className="text-muted-foreground">
              The company has significantly expanded its workforce, with staff costs growing at an even faster rate.
              This investment in human resources has supported the company's revenue growth but also contributed to
              increased operational costs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

