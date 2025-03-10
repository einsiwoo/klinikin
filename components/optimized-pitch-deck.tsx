"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Download, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Import optimized slides
import CompanyOverview from "@/components/optimized-slides/company-overview"
import FinancialHighlights from "@/components/optimized-slides/financial-highlights"
import GrowthStrategy from "@/components/optimized-slides/growth-strategy"
import EnhancedAIIntegration from "@/components/optimized-slides/enhanced-ai-integration"
import InvestmentOpportunity from "@/components/optimized-slides/investment-opportunity"
import Testimonials from "@/components/optimized-slides/testimonials"
import WhyNow from "@/components/optimized-slides/why-now"

const slides = [
  { id: "overview", label: "Overview", component: CompanyOverview },
  { id: "financial", label: "Financial Performance", component: FinancialHighlights },
  { id: "growth", label: "Growth Strategy", component: GrowthStrategy },
  { id: "ai-integration", label: "Ása AI Integration", component: EnhancedAIIntegration },
  { id: "why-now", label: "Why Now", component: WhyNow },
  { id: "testimonials", label: "Testimonials", component: Testimonials },
  { id: "investment", label: "Investment Opportunity", component: InvestmentOpportunity },
]

export default function OptimizedPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AsaLogoWhite-5A2bHa9BKtYinRhkgNXDItXYEaIoFy.png"
                  alt="Ása Logo"
                  fill
                  className="object-contain dark:invert"
                  priority
                />
              </div>
              <span className="text-lg font-semibold hidden sm:inline">Ása ehf.</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {slides.map((slide, index) => (
              <Button
                key={slide.id}
                variant={currentSlide === index ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full px-3 transition-all ${
                  currentSlide === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {slide.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="rounded-full hidden sm:flex">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-semibold">Navigation</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    <div className="space-y-1 px-2">
                      {slides.map((slide, index) => (
                        <Button
                          key={slide.id}
                          variant={currentSlide === index ? "default" : "ghost"}
                          className={`w-full justify-start ${
                            currentSlide === index ? "bg-primary text-primary-foreground" : ""
                          }`}
                          onClick={() => {
                            setCurrentSlide(index)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          {slide.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <Button className="w-full rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6"
            >
              <Card className="overflow-hidden border rounded-xl shadow-lg bg-card/50 backdrop-blur-sm">
                <div className="p-6">
                  <CurrentSlideComponent />
                </div>
              </Card>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="rounded-full shadow-sm hover:shadow transition-all"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                <div className="flex items-center">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 mx-1 rounded-full transition-all ${
                        currentSlide === index ? "bg-primary w-4" : "bg-muted hover:bg-muted-foreground/50"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="rounded-full shadow-sm hover:shadow transition-all"
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

