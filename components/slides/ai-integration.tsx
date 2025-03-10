"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Check, Clock, Cpu, FileCheck, Heart, LineChartIcon, Stethoscope, TrendingUp } from "lucide-react"

const revenueProjectionData = [
  { year: "2023", current: 2810223878, projected: 2810223878 },
  { year: "2024", current: 3091246265, projected: 3399883204 },
  { year: "2025", current: 3245808578, projected: 3569877364 },
]

const savingsData = [
  { category: "Administrative Labor", savings: 67500000 },
  { category: "Surgical Room Efficiency", savings: 7500000 },
  { category: "Reduced In-Person Visits", savings: 12500000 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function AIIntegration() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ása AI Healthcare Integration</h2>
        <p className="text-muted-foreground mt-2">AI-Powered Enhancement for Klíníkin Ármúla ehf.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alignment with Vision</CardTitle>
            <CardDescription>How Ása AI supports Klíníkin's mission & goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Heart className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">"Best possible quality of life for every patient"</p>
                  <p className="text-sm text-muted-foreground">Faster, more accurate diagnostics via AI.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <FileCheck className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">"Leading in safe, high-quality medical care"</p>
                  <p className="text-sm text-muted-foreground">
                    AI-assisted triage reduces errors and speeds up treatment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Stethoscope className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">"State-of-the-art surgical facilities"</p>
                  <p className="text-sm text-muted-foreground">
                    AI can optimize surgical scheduling for better utilization.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Cpu className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">"Only private surgery provider with an inpatient ward"</p>
                  <p className="text-sm text-muted-foreground">
                    AI-assisted patient recovery tracking can improve post-op care.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impact on Surgical & Inpatient Services</CardTitle>
            <CardDescription>AI-driven improvements to core services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">AI-Driven Prioritization for Surgery Scheduling</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ása can optimize the surgical schedule by analyzing urgency, doctor availability, and predicted
                  recovery time.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">10-20% higher efficiency in surgical scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Reduced downtime of operating rooms</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold">AI-Enhanced Post-Surgery Care</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ása can monitor patient-reported symptoms after surgery and predict complications, readiness for
                  discharge, and need for extended monitoring.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Faster patient recovery through AI-assisted tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Reduced risk of readmissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Better patient satisfaction and post-op care quality</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financial & Business Impact</CardTitle>
          <CardDescription>Projected revenue growth and cost savings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2">Potential Revenue Growth</h3>
              <ChartContainer
                config={{
                  current: {
                    label: "Without AI",
                    color: "hsl(var(--chart-1))",
                  },
                  projected: {
                    label: "With AI",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="aspect-[21/9]"
              >
                <LineChart data={revenueProjectionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => formatToMillions(value)} />
                  <ChartTooltip
                    content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                  />
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="var(--color-current)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projected"
                    stroke="var(--color-projected)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Revenue drivers:</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Increased patient volume by reducing wait times</li>
                  <li>Better scheduling of surgeries leading to fewer empty time slots</li>
                  <li>AI-powered remote consultations reducing unnecessary in-person visits</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Cost Savings</h3>
              <ChartContainer
                config={{
                  savings: {
                    label: "Annual Savings",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="aspect-[21/9]"
              >
                <BarChart data={savingsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => formatToMillions(value)} />
                  <YAxis dataKey="category" type="category" width={150} />
                  <ChartTooltip
                    content={<ChartTooltipContent formatter={(value) => `ISK ${(Number(value)).toLocaleString()}`} />}
                  />
                  <Bar dataKey="savings" fill="var(--color-savings)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ChartContainer>
              <div className="mt-4 text-sm">
                <div className="rounded-md bg-muted p-2">
                  <p className="text-xs">
                    <strong>Total estimated savings:</strong> ISK 69M - 106M per year
                  </p>
                  <p className="text-xs mt-1">
                    <strong>ROI:</strong> Full AI investment could pay for itself within 1 year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Competitive Advantage</CardTitle>
            <CardDescription>Market positioning with AI integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">Iceland's First AI-Powered Private Hospital</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No other private clinic in Iceland currently has an AI-powered patient prioritization system,
                  positioning Klíníkin Ármúla as a pioneer.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">AI-Powered Personalized Medicine</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  AI can analyze medical histories and suggest customized treatments based on past cases, leading to
                  more accurate, data-driven medical decisions.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Expansion into AI-Assisted Telemedicine</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ása's remote assessment capability enables new revenue streams through virtual consultations and
                  partnerships with insurance providers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Roadmap</CardTitle>
            <CardDescription>Phased approach to AI integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-border"></div>
              <ol className="space-y-4">
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Phase 1 (Next 3-6 Months): Pilot AI System</span>
                    <span className="text-xs text-muted-foreground">
                      Test Ása for patient prioritization & documentation in a limited department.
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Phase 2 (6-12 Months): Full AI Integration</span>
                    <span className="text-xs text-muted-foreground">
                      Scale AI to all patient intake & medical history documentation.
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Phase 3 (12-18 Months): AI-Powered Telemedicine</span>
                    <span className="text-xs text-muted-foreground">
                      Enable virtual consultations via Ása AI and develop AI-powered post-op monitoring.
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Phase 4 (18+ Months): AI-Driven Expansion</span>
                    <span className="text-xs text-muted-foreground">
                      Introduce AI-assisted preventive care and expand inpatient ward using AI-driven recovery
                      prediction models.
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Final Recommendation</CardTitle>
          <CardDescription>Should Klíníkin Ármúla Implement Ása AI?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border-2 border-primary p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/20 p-2 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">YES</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              AI integration aligns perfectly with Klíníkin Ármúla's goals of high-quality, patient-focused healthcare.
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-3">
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-medium">Competitive Edge</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">First AI-powered private hospital in Iceland.</p>
              </div>
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2">
                  <LineChartIcon className="h-4 w-4 text-primary" />
                  <span className="font-medium">Financial Gains</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  ISK 69-106M in yearly savings + revenue growth potential.
                </p>
              </div>
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Scalability</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  AI optimizes current operations and supports future expansion.
                </p>
              </div>
            </div>
            <div className="mt-4 text-sm font-medium">
              <p>
                🚀 Recommendation: Klíníkin Ármúla should proceed with pilot testing Ása AI immediately to measure its
                impact before full integration.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

