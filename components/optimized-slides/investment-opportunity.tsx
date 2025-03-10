"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Check, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestmentOpportunity() {
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
        <h2 className="text-3xl font-bold tracking-tight">Investment Opportunity</h2>
        <p className="text-muted-foreground mt-2">Why Invest in Klíníkin Ármúla ehf.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader>
              <CardTitle>Strong Financial Foundation</CardTitle>
              <CardDescription>Proven track record of growth and stability</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Revenue growth of 130% from 2020 to 2023</span>
                    <p className="text-xs text-muted-foreground">
                      Consistent year-over-year growth despite market challenges
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Equity ratio improved from negative to 49.3%</span>
                    <p className="text-xs text-muted-foreground">Significantly strengthened financial position</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Zero long-term debt since 2022</span>
                    <p className="text-xs text-muted-foreground">Reduced financial risk and increased flexibility</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Strong cash position of ISK 250.2M in 2023</span>
                    <p className="text-xs text-muted-foreground">Ample liquidity to fund operations and growth</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader>
              <CardTitle>Growth Potential</CardTitle>
              <CardDescription>Strategic initiatives driving future growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Facility expansion set to complete in 2025</span>
                    <p className="text-xs text-muted-foreground">Increasing capacity and service offerings</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Ása AI integration</span>
                    <p className="text-xs text-muted-foreground">First-mover advantage in AI-powered healthcare</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">Growing healthcare demand in Iceland</span>
                    <p className="text-xs text-muted-foreground">Favorable market conditions for private healthcare</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="font-medium">New revenue streams through telemedicine</span>
                    <p className="text-xs text-muted-foreground">Expanding reach beyond physical location</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Competitive Advantages</CardTitle>
            <CardDescription>What sets us apart in the market</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-primary" />
                  <div className="font-medium">Only Private Inpatient Ward</div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Unique capability for post-operative care among private providers
                </p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-primary" />
                  <div className="font-medium">AI-Powered Healthcare</div>
                </div>
                <p className="text-xs text-muted-foreground">
                  First-mover advantage in AI integration for patient care
                </p>
              </div>
              <div className="rounded-lg border p-4 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-primary" />
                  <div className="font-medium">Strategic Partnerships</div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Collaboration with National Hospital and other healthcare institutions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Investment Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Financial Projections</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>10-15% annual revenue growth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>ISK 69-106M annual savings from AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>Continued improvement in profitability</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Strategic Vision</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>Iceland's leading AI-powered private hospital</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>Expanded facility with increased capacity by 2025</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>Pioneer in AI-assisted preventive healthcare</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="font-bold text-lg">Join us in revolutionizing healthcare delivery in Iceland</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

