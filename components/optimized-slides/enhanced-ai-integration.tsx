"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { FileCheck, Heart, Stethoscope, Brain, Cpu, Clock, TrendingUp } from "lucide-react"

const revenueProjectionData = [
  { year: "2023", current: 2810223878, projected: 2810223878 },
  { year: "2024", current: 3091246265, projected: 3399883204 },
  { year: "2025", current: 3245808578, projected: 3569877364 },
]

// Format large numbers to millions with 1 decimal place
const formatToMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`
}

export default function EnhancedAIIntegration() {
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
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                    <Brain className="h-3 w-3" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Personalized treatment plans</p>
                    <p className="text-xs text-muted-foreground">
                      AI analyzes patient history to recommend customized care approaches
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
            <CardTitle>AI-Powered Patient Journey</CardTitle>
            <CardDescription>How Ása AI transforms the entire patient experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-border"></div>
              <ol className="space-y-6">
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <Cpu className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Initial Contact & Triage</span>
                    <span className="text-xs text-muted-foreground">
                      AI-powered symptom assessment determines urgency and appropriate specialist
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <Clock className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Optimized Scheduling</span>
                    <span className="text-xs text-muted-foreground">
                      AI matches patient needs with available resources for optimal timing
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <Brain className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Personalized Treatment Planning</span>
                    <span className="text-xs text-muted-foreground">
                      AI analyzes medical history and similar cases to recommend optimal treatment approaches
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <Heart className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Post-Treatment Monitoring</span>
                    <span className="text-xs text-muted-foreground">
                      AI-powered remote monitoring detects complications early and adjusts recovery plans
                    </span>
                  </div>
                </li>
                <li className="ml-8">
                  <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <TrendingUp className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Preventive Care Recommendations</span>
                    <span className="text-xs text-muted-foreground">
                      AI identifies risk factors and suggests preventive measures for long-term health
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">The Ása AI Advantage</h3>
              <p className="text-sm mb-6">
                By integrating Ása AI, Klíníkin Ármúla will become Iceland's first AI-powered private healthcare
                provider, creating a sustainable competitive advantage that will be difficult for competitors to
                replicate.
              </p>
              <div className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                Estimated ROI: 200-300% within 24 months
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

