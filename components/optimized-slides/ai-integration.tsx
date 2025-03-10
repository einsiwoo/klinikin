"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Check, FileCheck, Heart, Stethoscope } from "lucide-react"

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
        <h2 className="text-3xl font-bold tracking-tight">Ása AI Integration</h2>
        <p className="text-muted-foreground mt-2">Transforming Healthcare Delivery with AI</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
              <CardDescription>How Ása AI enhances our operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                    <Stethoscope className="h-3 w-3" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">10-20% higher efficiency in surgical scheduling</p>
                    <p className="text-xs text-muted-foreground">
                      AI optimizes scheduling based on urgency, doctor availability, and predicted recovery time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                    <FileCheck className="h-3 w-3" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">20-40% reduction in administrative workload</p>
                    <p className="text-xs text-muted-foreground">
                      AI-assisted documentation and patient triage frees up medical staff time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                    <Heart className="h-3 w-3" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Improved post-operative care</p>
                    <p className="text-xs text-muted-foreground">
                      AI monitors patient recovery and predicts potential complications
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader>
              <CardTitle>Financial Impact</CardTitle>
              <CardDescription>Projected revenue with AI integration</CardDescription>
            </CardHeader>
            <CardContent>
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
                className="aspect-[4/3]"
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
              <div className="mt-2 text-xs text-muted-foreground">
                <p>Projected additional revenue: ISK 300-500M by 2025</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Implementation Roadmap</CardTitle>
            <CardDescription>Phased approach to AI integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="rounded-lg border p-4 hover-lift">
                <div className="text-sm font-bold mb-2">Phase 1: Pilot</div>
                <div className="text-xs text-muted-foreground mb-2">0-6 Months</div>
                <p className="text-xs">Test AI in limited department, measure impact on efficiency</p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="text-sm font-bold mb-2">Phase 2: Integration</div>
                <div className="text-xs text-muted-foreground mb-2">6-12 Months</div>
                <p className="text-xs">Scale AI across departments, optimize surgical scheduling</p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="text-sm font-bold mb-2">Phase 3: Telemedicine</div>
                <div className="text-xs text-muted-foreground mb-2">12-18 Months</div>
                <p className="text-xs">Launch AI-assisted remote consultations and monitoring</p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="text-sm font-bold mb-2">Phase 4: Expansion</div>
                <div className="text-xs text-muted-foreground mb-2">18+ Months</div>
                <p className="text-xs">Use AI insights for facility expansion and preventive care</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Competitive Advantage</CardTitle>
            <CardDescription>Becoming Iceland's first AI-powered private hospital</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-primary" />
                  <div className="font-medium">Market Leadership</div>
                </div>
                <p className="text-xs text-muted-foreground">
                  First private clinic in Iceland with AI-powered patient prioritization
                </p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-primary" />
                  <div className="font-medium">Personalized Medicine</div>
                </div>
                <p className="text-xs text-muted-foreground">
                  AI-driven customized treatments based on patient history
                </p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-primary" />
                  <div className="font-medium">New Revenue Streams</div>
                </div>
                <p className="text-xs text-muted-foreground">AI-assisted telemedicine and preventive care offerings</p>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-primary/10 p-3">
              <p className="text-sm font-medium text-center">
                Estimated annual savings: ISK 69-106M with full AI implementation
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

