"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Crafting high-performance web experiences."

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Abdul Rafae
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6">
              Frontend Software Engineer
            </h2>
            <div className="h-8 mb-8">
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed">
              Frontend Software Engineer specialising in React and Next.js, with experience building high-performance,
              user-facing web applications and modern e-commerce interfaces. Focused on delivering responsive, accessible,
              and conversion-driven digital experiences.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <Button asChild className="animate-scale-in animate-delay-300">
                <Link href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="animate-scale-in animate-delay-400">
                <a
                  href="https://drive.google.com/file/d/1Xs4G5ISIZvawIKcwstrMCRjSKnRlns8s/view?usp=sharing"
                  download="Abdul_Rafae_CV.pdf"
                >
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex space-x-6 animate-fade-in animate-delay-500">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/LDMark1" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/abdulrafae2" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="mailto:abdul.rafae221@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in animate-delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                <img src="https://i.ibb.co/fz2fdYYL/picofme.png" alt="Abdul Rafae" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
