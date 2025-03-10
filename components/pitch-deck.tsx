"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Download, Home } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CompanyOverview from "@/components/slides/company-overview"
import FinancialHighlights from "@/components/slides/financial-highlights"
import EquityLiabilities from "@/components/slides/equity-liabilities"
import EmployeeGrowth from "@/components/slides/employee-growth"
import CashFlow from "@/components/slides/cash-flow"
import Shareholders from "@/components/slides/shareholders"
import FinancialRatios from "@/components/slides/financial-ratios"
import BusinessDevelopments from "@/components/slides/business-developments"
import AIIntegration from "@/components/slides/ai-integration"
import AIRoadmap from "@/components/slides/ai-roadmap"
import FutureOutlook from "@/components/slides/future-outlook"

const slides = [
  { id: "overview", label: "Overview", component: CompanyOverview },
  { id: "financial", label: "Financial Highlights", component: FinancialHighlights },
  { id: "equity", label: "Equity & Liabilities", component: EquityLiabilities },
  { id: "employees", label: "Employee Growth", component: EmployeeGrowth },
  { id: "cash-flow", label: "Cash Flow", component: CashFlow },
  { id: "shareholders", label: "Shareholders", component: Shareholders },
  { id: "ratios", label: "Financial Ratios", component: FinancialRatios },
  { id: "developments", label: "Business Developments", component: BusinessDevelopments },
  { id: "ai-integration", label: "Ása AI", component: AIIntegration },
  { id: "ai-roadmap", label: "AI Roadmap", component: AIRoadmap },
  { id: "future", label: "Future Outlook", component: FutureOutlook },
]

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Klíníkin Ármúla ehf. Pitch Deck</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="hidden md:block">
              <Tabs
                defaultValue={slides[currentSlide].id}
                onValueChange={(value) => setCurrentSlide(slides.findIndex((slide) => slide.id === value))}
              >
                <TabsList className="grid w-full grid-cols-11">
                  {slides.map((slide) => (
                    <TabsTrigger key={slide.id} value={slide.id}>
                      {slide.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {slides.map((slide) => (
                  <TabsContent key={slide.id} value={slide.id}>
                    <slide.component />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            <div className="md:hidden">
              <Card className="p-6">
                <CurrentSlideComponent />
              </Card>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} of {slides.length}
              </span>
              <Button variant="outline" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

