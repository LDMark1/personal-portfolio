"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import ProfessionalJourney from "@/components/professional-journey"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Languages from "@/components/languages"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  // Scroll reveal animation and scroll position tracking
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Reveal animations
      const reveals = document.querySelectorAll(".reveal, .reveal-bottom, .reveal-left, .reveal-right")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
        }
      }

      // Check if at bottom of page
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      // Consider "at bottom" when within 100px of the bottom
      const buffer = 100
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - buffer)
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <ProfessionalJourney />
        <Education />
        <Projects />
        <Languages />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Scroll down indicator - hidden at bottom of page */}
      {!isAtBottom && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center text-slate-500 dark:text-slate-400 z-10">
          <span className="text-xs mb-1">Scroll Down</span>
          <ChevronDown size={20} />
        </div>
      )}
    </div>
  )
}
