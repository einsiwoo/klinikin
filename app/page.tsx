"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { WavyBackground } from "@/components/ui/wavy-background"
import { StarBorder } from "@/components/ui/star-border"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AsaLogoWhite-5A2bHa9BKtYinRhkgNXDItXYEaIoFy.png"
              alt="Ása Logo"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <span className="text-lg font-semibold text-white hidden sm:inline">Ása ehf.</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center">
        <WavyBackground
          colors={["#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"]}
          backgroundFill="#020617"
          containerClassName="w-full"
          className="container px-4 md:px-6 py-10 md:py-14"
        >
          <div className="flex flex-col items-center space-y-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 max-w-3xl"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                Klíníkin Ármúla ehf.
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">Investor Pitch Deck 2020-2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 p-6">
                  <h2 className="text-2xl font-bold text-white">Financial Performance & Growth Strategy</h2>
                  <p className="text-white/80 max-w-lg mx-auto">
                    Explore our financial journey from 2020 to 2023, including our strategic AI integration plan with
                    Ása AI Healthcare.
                  </p>
                  <Link href="/pitch-deck">
                    <StarBorder as="div" color="white" speed="8s" className="inline-block">
                      <Button className="relative z-10 rounded-full px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-blue-900 hover:bg-white/90 border-none">
                        View Pitch Deck
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </StarBorder>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"
            >
              <div className="rounded-xl border border-white/20 p-4 bg-white/10 backdrop-blur-sm shadow-sm">
                <div className="text-2xl font-bold text-white">130%</div>
                <div className="text-sm text-white/70">Revenue Growth</div>
              </div>
              <div className="rounded-xl border border-white/20 p-4 bg-white/10 backdrop-blur-sm shadow-sm">
                <div className="text-2xl font-bold text-white">49.3%</div>
                <div className="text-sm text-white/70">Equity Ratio</div>
              </div>
              <div className="rounded-xl border border-white/20 p-4 bg-white/10 backdrop-blur-sm shadow-sm">
                <div className="text-2xl font-bold text-white">2025</div>
                <div className="text-sm text-white/70">Expansion Year</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
              <Link href="/timeline">
                <Button variant="outline" className="rounded-full px-6 border-white/20 text-white hover:bg-white/10">
                  View Detailed Timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </WavyBackground>
      </main>
    </div>
  )
}

