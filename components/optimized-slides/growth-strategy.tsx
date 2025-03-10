"use client"

import { motion } from "framer-motion"
import { Building, TrendingUp, Users, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GrowthStrategy() {
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
        <h2 className="text-3xl font-bold tracking-tight">Growth Strategy</h2>
        <p className="text-muted-foreground mt-2">Strategic Initiatives for Continued Expansion</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Facility Expansion</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">2025 Expansion Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Partnership with Reitir to significantly increase facility size, enabling higher patient capacity
                    and expanded service offerings.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-xl font-bold text-primary">+30%</div>
                    <div className="text-xs text-muted-foreground">Patient Capacity</div>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-xl font-bold text-primary">2025</div>
                    <div className="text-xs text-muted-foreground">Completion Year</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Workforce Development</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Strategic Talent Acquisition</h3>
                  <p className="text-sm text-muted-foreground">
                    Continued investment in specialized medical professionals to support growth and maintain service
                    quality.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-xl font-bold text-primary">153%</div>
                    <div className="text-xs text-muted-foreground">Staff Growth (2020-2023)</div>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-xl font-bold text-primary">45+</div>
                    <div className="text-xs text-muted-foreground">Projected Staff by 2025</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Strategic Growth Initiatives</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Service Diversification</h3>
                <p className="text-sm text-muted-foreground">
                  Expanding medical specialties and service offerings to capture additional market segments.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Operational Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Implementing process improvements and technology solutions to optimize costs while maintaining
                  quality.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Strategic Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Building on successful collaborations with the National Hospital to establish additional strategic
                  partnerships.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Technology Integration</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Leveraging cutting-edge technology to enhance patient care and operational efficiency, with a focus on
                AI integration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-3 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Cpu className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">AI-Powered Healthcare</div>
                    <div className="text-xs text-muted-foreground">Ása AI integration for enhanced patient care</div>
                  </div>
                </div>
                <div className="rounded-lg border p-3 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Digital Transformation</div>
                    <div className="text-xs text-muted-foreground">Streamlining operations with digital solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

