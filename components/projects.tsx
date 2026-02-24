import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import poetryImage from "@/assets/poetry.png"
import flipAndFreshImage from "@/assets/flipandfresh.png"
import telePsychiatryImage from "@/assets/tele-psychiatry-app.png"

export default function Projects() {
  const projects = [
    {
      title: "Parcel Logistics Management Platform",
      description:
        "Built a full-featured parcel tracking application using Next.js with dynamic routing, API-driven tracking updates, status visualisation components, and reusable UI modules for shipment history and notifications.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "SSR", "ISR"],
      image: poetryImage.src,
      github: "https://github.com/LDMark1/",
    },
    {
      title: "Flip & Fresh",
      description:
        "Developed a modern e-commerce frontend using Next.js with responsive product listing and detail pages, dynamic routing, clean component hierarchy, and a focus on performance and mobile responsiveness.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "E-commerce"],
      image: flipAndFreshImage.src,
      github: "https://github.com/LDMark1/",
    },
    {
      title: "Tele-Psychiatry App",
      description:
        "Built a real-time 1-to-1 consultation interface enabling direct conversations between clients and psychiatrists, with role-based dashboards, secure appointment booking, and responsive layouts.",
      technologies: ["React.js", "TypeScript", "MUI", "Real-time Chat"],
      image: telePsychiatryImage.src,
      github: "https://github.com/LDMark1/Tele-psychiatry-app",
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
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
