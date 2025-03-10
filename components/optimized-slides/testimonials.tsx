"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
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

  const testimonials = [
    {
      quote:
        "Klíníkin Ármúla's integration of Ása AI has significantly improved our surgical scheduling efficiency. We've seen a 15% increase in patient throughput with the same resources.",
      name: "Dr. Jón Gunnarsson",
      title: "Chief Surgeon",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The financial turnaround since 2020 has been remarkable. Their strategic investments in technology and facility expansion position them well for continued growth.",
      name: "Helga Björnsdóttir",
      title: "Healthcare Investment Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a patient, I've experienced firsthand how their AI-assisted care has improved the quality and personalization of treatment. The future of healthcare is here.",
      name: "Magnús Ólafsson",
      title: "Patient",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">What People Are Saying</h2>
        <p className="text-muted-foreground mt-2">Testimonials from healthcare professionals and patients</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={item}>
            <Card className="hover-lift h-full">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

