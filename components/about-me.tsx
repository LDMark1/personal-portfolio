import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, Phone, Mail } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-bottom">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Hello, I'm Abdul Rafae</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I'm a Software Engineer with a passion for building scalable and efficient systems. With expertise in
              Python, JavaScript, Flask, and ReactJS, I specialize in creating solutions that optimize performance and
              enhance user experience.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Throughout my career, I've worked on a variety of projects, from optimizing data retrieval systems to
              building interactive dashboards and developing automated validation tools. I'm committed to continuous
              learning and staying at the forefront of technology trends.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and solving
              complex problems that make a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-right">
            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Name</h4>
                  <p className="text-slate-600 dark:text-slate-400">Abdul Rafae</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">Chester, United Kingdom</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+44 7417547395</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">abdul.rafae221@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
