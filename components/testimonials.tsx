"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Abdul consistently delivered high-quality React dashboards that handled complex data workflows. His focus on performance optimisation resulted in sub-2s load times that our users love.",
    author: "Sarah Johnson",
    position: "CTO, MonetizeMore",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Working with Abdul on our Shopify storefronts was a pleasure. His deep knowledge of frontend development and responsive design helped us achieve ~200% traffic growth through optimised user experiences.",
    author: "Michael Chen",
    position: "Director, WebCartCentral",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "Abdul's attention to detail and problem-solving skills are impressive. He built a responsive, SEO-optimised application that achieved ~1s load time, significantly improving our monitoring capabilities.",
    author: "Emily Rodriguez",
    position: "Lead Engineer, ReconVault",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-bottom">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">What People Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with throughout my career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial cards */}
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 bg-slate-50 dark:bg-slate-900 border-none shadow-lg ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0 scale-100 z-10"
                    : "opacity-0 translate-x-full scale-95 z-0"
                }`}
              >
                <CardContent className="p-8 md:p-12 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="h-10 w-10 text-blue-200 dark:text-blue-900 mb-6" />
                    <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl italic mb-8">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-slate-200 dark:bg-slate-700 flex-shrink-0">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setActiveIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-blue-600 dark:bg-blue-400 w-4" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
