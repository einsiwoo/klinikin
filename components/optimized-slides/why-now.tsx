"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, TrendingUp, Zap, Award } from "lucide-react"

export default function WhyNow() {
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
        <h2 className="text-3xl font-bold tracking-tight">Why Now?</h2>
        <p className="text-muted-foreground mt-2">The perfect timing for investment</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Opportunity</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The Icelandic healthcare market is experiencing a significant shift toward private care, with demand
                  outpacing supply. Our expansion in 2025 positions us perfectly to capture this growing market.
                </p>
                <div className="rounded-lg border p-3 text-center">
                  <div className="text-xl font-bold text-primary">18%</div>
                  <div className="text-xs text-muted-foreground">Annual Growth in Private Healthcare Demand</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Adoption Timing</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We're at the inflection point of AI adoption in healthcare. Early movers will establish competitive
                  advantages that will be difficult for followers to overcome. Our Ása AI integration puts us ahead of
                  the curve.
                </p>
                <div className="rounded-lg border p-3 text-center">
                  <div className="text-xl font-bold text-primary">First Mover</div>
                  <div className="text-xs text-muted-foreground">In AI-Powered Private Healthcare in Iceland</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Competitive Advantages</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold">Strong Financial Position</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Zero long-term debt and 49.3% equity ratio provide a solid foundation for growth investments.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold">Expansion Underway</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Facility expansion already in progress, with completion expected in 2025.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold">AI Integration Ready</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Partnership with Ása AI already established, with pilot testing beginning in 2024.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

