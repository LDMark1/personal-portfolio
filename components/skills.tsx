import { Card, CardContent } from "@/components/ui/card"
import { Layers, Zap, Paintbrush, Plug, Code, Component } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["React", "Next.js (SSR / SSG)", "Angular", "TypeScript", "JavaScript (ES6+)"],
    },
    {
      category: "React & Architecture",
      icon: <Component className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Component-based Architecture", "Custom Hooks", "Context API", "Client-side Routing", "State Management"],
    },
    {
      category: "Performance & Optimisation",
      icon: <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Code-splitting", "Lazy Loading", "SSR / SSG (Next.js)", "Performance Tuning", "SEO Optimisation"],
    },
    {
      category: "Styling & UI",
      icon: <Paintbrush className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["TailwindCSS", "MUI", "CSS3", "HTML5", "Shopify Liquid", "Responsive (Mobile-first) Design"],
    },
    {
      category: "Integration & Tooling",
      icon: <Plug className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["REST API Integration (Axios / Fetch)", "Form Validation", "Role-based UI Rendering", "Git", "Vercel", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-bottom">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical and professional skills that I've developed throughout my career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300 reveal-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
