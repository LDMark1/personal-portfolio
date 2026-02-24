import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, Code, GitBranch, Cloud, Users, Clock, MessageSquare } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Software Architecture",
      icon: <Server className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["SOLID Principles", "Design Patterns", "RESTful API Design", "Microservices"],
    },
    {
      category: "Technologies",
      icon: <Cloud className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["AWS", "Redis", "Docker", "Google Ad Manager (GAM)"],
    },
    {
      category: "Version Control",
      icon: <GitBranch className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Git", "GitHub", "Collaborative Development", "CI/CD"],
    },
    {
      category: "Database",
      icon: <Database className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["SQL", "NoSQL", "Database Design", "Query Optimization"],
    },
    {
      category: "Development Tools",
      icon: <Code className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Postman", "Notion", "Jira", "Confluence"],
    },
    {
      category: "Soft Skills",
      icon: <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Problem-solving", "Effective Communication", "Client Relationship", "Team Collaboration"],
    },
    {
      category: "Time Management",
      icon: <Clock className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Project Planning", "Task Prioritization", "Deadline Management", "Agile Methodologies"],
    },
    {
      category: "Communication",
      icon: <MessageSquare className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      items: ["Technical Documentation", "Client Presentations", "Team Meetings", "Knowledge Sharing"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
