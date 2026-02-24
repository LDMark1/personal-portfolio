import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Languages() {
  const languages = [
    { name: "Python", proficiency: 95 },
    { name: "JavaScript", proficiency: 90 },
    { name: "SQL", proficiency: 85 },
    { name: "HTML/CSS", proficiency: 80 },
    { name: "TypeScript", proficiency: 75 },
  ]

  const frameworks = [
    { name: "Flask", proficiency: 90 },
    { name: "Django", proficiency: 85 },
    { name: "ReactJS", proficiency: 85 },
    { name: "Next.js", proficiency: 80 },
    { name: "Express.js", proficiency: 75 },
  ]

  return (
    <section id="languages" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Languages & Frameworks</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
                Programming Languages
              </h3>

              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{lang.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{lang.proficiency}%</span>
                    </div>
                    <Progress value={lang.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
                Frameworks & Libraries
              </h3>

              <div className="space-y-6">
                {frameworks.map((framework, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{framework.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{framework.proficiency}%</span>
                    </div>
                    <Progress value={framework.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
