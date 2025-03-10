"use client"

import { motion } from "framer-motion"
import { Building, MapPin, CrossIcon as MedicalCross, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompanyOverview() {
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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Klíníkin Ármúla ehf.</h2>
        <p className="text-muted-foreground mt-2">Iceland's Leading Private Healthcare Provider</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Company Profile</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">About</h3>
                  <p className="text-sm text-muted-foreground">
                    Private healthcare provider offering specialized medical services and elective surgeries, with four
                    surgical theaters and the only private inpatient ward in Iceland.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Ármúla, Reykjavík, Iceland</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover-lift h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Key Highlights</CardTitle>
              <MedicalCross className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 text-primary">
                    <TrendingUp className="h-3 w-3" />
                  </span>
                  <span>Revenue growth of 130% from 2020 to 2023</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 text-primary">
                    <TrendingUp className="h-3 w-3" />
                  </span>
                  <span>Turned profitable in 2021 after COVID-19 impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 text-primary">
                    <TrendingUp className="h-3 w-3" />
                  </span>
                  <span>Equity ratio improved from negative to 49.3%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 text-primary">
                    <TrendingUp className="h-3 w-3" />
                  </span>
                  <span>Expanding facilities with completion expected in 2025</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Company Timeline</CardTitle>
            <CardDescription>Key milestones in our journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-lg font-bold">2020</div>
                <div className="text-xs text-muted-foreground mb-2">COVID-19 Impact</div>
                <p className="text-xs">Navigated pandemic challenges with temporary halt to elective surgeries</p>
              </div>
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-lg font-bold">2021</div>
                <div className="text-xs text-muted-foreground mb-2">Recovery</div>
                <p className="text-xs">Returned to profitability with ISK 63M profit</p>
              </div>
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-lg font-bold">2022</div>
                <div className="text-xs text-muted-foreground mb-2">Peak Performance</div>
                <p className="text-xs">Record profit of ISK 216.6M and signed expansion agreement</p>
              </div>
              <div className="rounded-lg border p-4 text-center hover-lift">
                <div className="text-lg font-bold">2023</div>
                <div className="text-xs text-muted-foreground mb-2">Continued Growth</div>
                <p className="text-xs">Revenue grew to ISK 2.81B with ongoing expansion plans</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

