import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import parcelDeliveryImage from "@/assets/parcel-delivery-app.png"
import flipAndFreshImage from "@/assets/flipandfresh.png"
import telePsychiatryImage from "@/assets/tele-psychiatry-app.png"
import pricingCalculatorImage from "@/assets/pricing-calculator.png"
import phishingAwarenessImage from "@/assets/phishing-awareness.png"
import ticTacToeImage from "@/assets/tictactoe.png"

export default function Projects() {
  const projects = [
    {
      title: "Parcel Tracking App",
      description:
        "Built a full-featured parcel tracking application using Next.js with dynamic routing, API-driven tracking updates, status visualisation components, and reusable UI modules for shipment history and notifications.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "SSR", "ISR"],
      image: parcelDeliveryImage.src,
      github: "https://github.com/LDMark1/parcel-tracking-app",
    },
    {
      title: "Flip & Fresh",
      description:
        "Developed a modern e-commerce frontend using Next.js with responsive product listing and detail pages, dynamic routing, clean component hierarchy, and a focus on performance and mobile responsiveness.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "E-commerce"],
      image: flipAndFreshImage.src,
      github: "https://github.com/LDMark1/flip-and-fresh-portfolio",
      site: "https://flip-and-fresh-portfolio.vercel.app/",
    },
    {
      title: "Tele-Psychiatry App",
      description:
        "Built a real-time 1-to-1 consultation interface enabling direct conversations between clients and psychiatrists, with role-based dashboards, secure appointment booking, and responsive layouts.",
      technologies: ["React.js", "TypeScript", "MUI", "Real-time Chat"],
      image: telePsychiatryImage.src,
      github: "https://github.com/LDMark1/Tele-psychiatry-app",
    },
    {
      title: "Freelancing Pricing Calculator",
      description:
        "Created a pricing calculator tailored for freelancers to estimate project costs based on scope, timeline, revisions, and service packages with a clean, responsive interface.",
      technologies: ["React.js", "TypeScript", "TailwindCSS", "Form Logic"],
      image: pricingCalculatorImage.src,
      github: "https://github.com/LDMark1/freelancer-pricing-calculator",
    },
    {
      title: "PhishGuard",
      description:
        "Developed a phishing awareness website focused on educating users about common email and website phishing patterns through interactive content and practical safety guidance.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Cybersecurity Awareness"],
      image: phishingAwarenessImage.src,
      github: "https://github.com/LDMark1/phishing-awareness-website",
      site: "https://phishing-awareness-website-six.vercel.app",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Built an interactive Tic-Tac-Toe game with clean state management, winner and draw detection, and responsive gameplay across devices.",
      technologies: ["React.js", "TypeScript", "Game Logic", "Responsive UI"],
      image: ticTacToeImage.src,
      imageClassName: "object-contain scale-60",
      github: "https://github.com/LDMark1/tic-tac-toe",
      site: "https://tic-tac-toe-snowy-one-23.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-bottom">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on throughout my career and education. Each project demonstrates
            different skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 reveal-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden h-48 relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 hover:scale-110 ${project.imageClassName || "object-cover"}`}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View GitHub
                    </a>
                  </Button>
                  {project.site && (
                    <Button size="sm" asChild>
                      <a href={project.site} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Site
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <a href="https://github.com/LDMark1" target="_blank" rel="noopener noreferrer">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
