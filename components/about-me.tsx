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
              I'm a Frontend Engineer specialising in React and Next.js, with a strong focus on building
              high-performance, user-facing web applications and modern e-commerce interfaces. My expertise spans
              TypeScript, component architecture, reusable UI systems, and API-driven frontend development.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Throughout my career, I've worked on high-traffic dashboards, Shopify storefronts, and SEO-optimised
              applications. From achieving sub-2s page load performance to contributing to ~200% traffic growth through
              frontend optimisation, I'm committed to delivering measurable results.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm currently pursuing my MSc in Advanced Computer Science at the University of Chester, exploring
              topics like secure password storage alternatives. I'm always eager to learn and build experiences
              that make a real impact.
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
