import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Masters in Advanced Computer Science",
      institution: "University of Chester",
      location: "Chester, UK",
      period: "January 2025 - Present",
      courses: [
        "Research Methods",
        "Concepts of UX",
        "Bio-Inspired Computing",
        "Digital Forensics and Incident Response",
        "Penetration Testing and Active Defense",
      ],
    },
    {
      degree: "Bachelors in Information Technology",
      institution: "Air University",
      location: "Islamabad, PK",
      period: "Graduated June 2023",
      courses: [],
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Python Professional Certification",
      issuer: "Python Institute",
      date: "2022",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900 border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">{edu.degree}</h4>

                    <div className="flex items-center text-slate-700 dark:text-slate-300 mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>
                        {edu.institution}, {edu.location}
                      </span>
                    </div>

                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>{edu.period}</span>
                    </div>

                    {edu.courses.length > 0 && (
                      <>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Relevant Coursework:
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{edu.courses.join(", ")}</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400"
              >
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
                <path d="M15 7a3 3 0 1 0-6 0c0 1.66 1.34 3 3 3s3-1.34 3-3z" />
                <path d="M17.24 3.56c.87.35 1.63.86 2.26 1.49" />
                <path d="M21 12c0-2.21-.72-4.25-1.94-5.89" />
                <path d="M9 1.05C5.33 1.57 2.48 4.42 2 8.05" />
                <path d="M12 1c-1.96 0-3.81.51-5.41 1.41" />
                <path d="M2 12c0 3.37 1.66 6.36 4.21 8.21" />
                <path d="M19 15.79c1.37-1.53 2.22-3.53 2.24-5.73" />
              </svg>
              Certifications
            </h3>

            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900 border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">{cert.name}</h4>

                    <div className="flex items-center text-slate-700 dark:text-slate-300 mb-2">
                      <span className="font-medium">Issuing Organization:</span>
                      <span className="ml-2">{cert.issuer}</span>
                    </div>

                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Additional certifications placeholder */}
              <div className="text-center py-4">
                <p className="text-slate-600 dark:text-slate-400 italic">
                  Additional certifications and continuous learning...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
