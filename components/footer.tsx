import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Abdul<span className="text-blue-500">Rafae</span>
            </Link>
            <p className="mt-2 text-slate-400 max-w-md">
              Frontend Software Engineer specialising in React, Next.js, and modern web experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/LDMark1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/abdulrafae2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:abdul.rafae221@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="text-slate-500 text-sm">&copy; {currentYear} Abdul Rafae. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
            <Link href="#hero" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#journey" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
