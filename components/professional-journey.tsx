import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function ProfessionalJourney() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "MonetizeMore",
      location: "Remote",
      period: "June 2023 – Present",
      description: [
        "Optimized fetchers, indexers, and various components, improving data retrieval time by 70% and implementing server-side sorting & pagination for large datasets.",
        "Improved test coverage by 15% using TDD, ensuring software reliability, and conducted thorough code reviews to maintain high-quality standards.",
        "Built interactive dashboards with efficient data fetching and visualization, ensuring sub-2-second load times while maintaining UI consistency.",
        "Developed automated ads.txt validation & self-correction, enhancing file integrity and compliance.",
        "Enhanced system performance by integrating threading for database interactions and implementing dynamic color-coded dashboards for better UX.",
      ],
    },
    {
      title: "Software Engineer",
      company: "ReconVault",
      location: "Islamabad, PK",
      period: "October 2022 – May 2023",
      description: [
        "Designed and developed a professional, static one-page website",
        "Coded custom scrapers to collect and analyze DNS records, AAAA records, and other relevant data",
        "Collaborated on refining backend infrastructure, ensuring smooth data flow and enhancing overall system performance.",
      ],
    },
  ]

  return (
    <section id="journey" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-bottom">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Professional Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/50 transform md:translate-x-px"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-blue-600 transform -translate-x-2 md:-translate-x-2.5 z-10"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                >
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <Briefcase className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-slate-700 dark:text-slate-300">
                          {exp.company}, {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
