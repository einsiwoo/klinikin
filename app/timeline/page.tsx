"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Timeline } from "@/components/ui/timeline"
import { SiteHeader } from "@/components/ui/site-header"

export default function TimelinePage() {
  const timelineData = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Navigating the challenges of the COVID-19 pandemic and its impact on healthcare operations.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ January-March: Normal business operations with steady patient flow
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ❌ April-May: COVID-19 restrictions forced a 6-week halt to elective surgeries
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ June-August: Implemented new safety protocols and gradually resumed operations
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ September-December: Focused on rebuilding patient volume
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ❌ Year-end: Small financial loss of ISK 1.5 million
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-blue-600">
              <h4 className="font-medium text-sm mb-2">COVID-19 Impact</h4>
              <p className="text-xs text-muted-foreground">
                Elective surgeries halted for 6 weeks, leading to significant revenue loss.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-blue-600">
              <h4 className="font-medium text-sm mb-2">Safety Protocols</h4>
              <p className="text-xs text-muted-foreground">
                Implemented comprehensive safety measures to protect patients and staff.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Recovery and return to profitability after the initial COVID-19 impact.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q1: Assisted Landspítali (National Hospital) during COVID-19 crisis
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q2: Increased staff from 15 to 18.5 full-time equivalent employees
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q3-Q4: Strong financial recovery with ISK 63 million in profit
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Year-end: Revenue grew by 63% compared to 2020
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-green-600">
              <h4 className="font-medium text-sm mb-2">National Hospital Collaboration</h4>
              <p className="text-xs text-muted-foreground">
                Strengthened relationships with the public healthcare system through collaboration.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-green-600">
              <h4 className="font-medium text-sm mb-2">Financial Turnaround</h4>
              <p className="text-xs text-muted-foreground">
                Achieved ISK 63 million in profit, marking a significant recovery.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Peak financial performance and strategic expansion planning.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q1-Q2: Continued strong performance with significant increase in patient volume
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ July: Nearly doubled staff to 34 full-time equivalent employees
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ September: Signed facility expansion agreement with Reitir
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q4: Record profit of ISK 216.6 million
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Year-end: Fully repaid all long-term debt
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-purple-600">
              <h4 className="font-medium text-sm mb-2">Workforce Expansion</h4>
              <p className="text-xs text-muted-foreground">
                Nearly doubled staff to 34 full-time equivalent employees compared to 2021.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-purple-600">
              <h4 className="font-medium text-sm mb-2">Expansion Agreement</h4>
              <p className="text-xs text-muted-foreground">
                Signed facility expansion agreement with Reitir to significantly increase capacity.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Continued growth and beginning of facility expansion construction.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q1: Started construction on facility expansion project with Reitir
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q2: Increased workforce to 38 full-time equivalent employees
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Q3-Q4: Revenue grew to ISK 2.81 billion
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Year-end: ISK 115.9 million in profit and equity ratio improved to 49.3%
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-amber-600">
              <h4 className="font-medium text-sm mb-2">Expansion Construction</h4>
              <p className="text-xs text-muted-foreground">
                Started construction on facility expansion project with Reitir.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-amber-600">
              <h4 className="font-medium text-sm mb-2">Financial Performance</h4>
              <p className="text-xs text-muted-foreground">
                Revenue continued growing to ISK 2.81 billion with ISK 115.9 million in profit.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            AI integration and operational optimization plans.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 Q1-Q2: Launch pilot testing of Ása AI for patient triage and documentation
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 Q3: Scale AI to all patient intake and medical history documentation
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 Q4: Implement AI-driven optimization of surgical schedules
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-cyan-600">
              <h4 className="font-medium text-sm mb-2">Ása AI Pilot Program</h4>
              <p className="text-xs text-muted-foreground">
                Launch pilot testing of Ása AI for patient triage and documentation in a limited department.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-cyan-600">
              <h4 className="font-medium text-sm mb-2">AI-Powered Surgical Scheduling</h4>
              <p className="text-xs text-muted-foreground">
                Implement AI-driven optimization of surgical schedules to improve operating room utilization.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Facility expansion completion and introduction of new services.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 Q1-Q2: Complete and open expanded facility, increasing patient capacity by ~30%
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 Q2: Launch virtual consultations via Ása AI and AI-powered post-op monitoring
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 Q3-Q4: Introduce additional medical specialties and services
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-indigo-600">
              <h4 className="font-medium text-sm mb-2">Expansion Completion</h4>
              <p className="text-xs text-muted-foreground">
                Complete and open expanded facility, increasing patient capacity by approximately 30%.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-indigo-600">
              <h4 className="font-medium text-sm mb-2">AI-Powered Telemedicine</h4>
              <p className="text-xs text-muted-foreground">
                Launch virtual consultations via Ása AI and develop AI-powered post-op monitoring.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2026+",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Long-term vision for strategic growth and innovation.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 2026: Launch personalized preventive health programs powered by AI
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 2027: Develop additional strategic partnerships with healthcare institutions
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              🔄 2028+: Establish Klíníkin Ármúla as Iceland's leading AI-powered healthcare provider
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-pink-600">
              <h4 className="font-medium text-sm mb-2">AI-Driven Preventive Healthcare</h4>
              <p className="text-xs text-muted-foreground">
                Launch personalized preventive health programs powered by AI analysis of patient histories.
              </p>
            </Card>
            <Card className="p-4 border-l-4 border-l-pink-600">
              <h4 className="font-medium text-sm mb-2">Market Leadership</h4>
              <p className="text-xs text-muted-foreground">
                Establish Klíníkin Ármúla as Iceland's leading AI-powered private healthcare provider.
              </p>
            </Card>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader showBackButton backButtonText="Back to Home" />

      <Timeline data={timelineData} />

      <div className="container mx-auto py-8 px-4 flex justify-center">
        <Link href="/pitch-deck">
          <Button className="rounded-full">
            View Full Pitch Deck
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

