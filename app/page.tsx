import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "JavaScript", "OpenWeather API", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather-app",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Framer Motion", "Styled Components", "Gatsby"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Angular", "TypeScript", "D3.js", "Firebase", "Material UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/social-dashboard",
    featured: false,
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description:
      "A recipe discovery application with ingredient-based search, meal planning, and nutritional information.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Redux", "Spoonacular API", "SQLite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/recipe-finder",
    featured: false,
  },
]

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 88 },
  { name: "Vue.js", level: 82 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Python", level: 78 },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Alex Johnson</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm Alex Johnson</h1>
              <h2 className="text-xl text-muted-foreground sm:text-2xl">Front-End Developer & UI/UX Enthusiast</h2>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I create beautiful, responsive web applications with modern technologies. Passionate about clean code,
              user experience, and bringing creative ideas to life through code.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Alex Johnson"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground md:text-lg mb-8">
            With over 5 years of experience in front-end development, I specialize in creating exceptional digital
            experiences. I'm passionate about modern web technologies, performance optimization, and crafting intuitive
            user interfaces.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 mb-2 text-blue-500" />
                <CardTitle className="text-lg">Design-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I believe great code starts with great design. I work closely with designers to bring pixel-perfect
                  interfaces to life.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 mb-2 text-green-500" />
                <CardTitle className="text-lg">Mobile-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every project I build is responsive and optimized for all devices, ensuring a seamless experience
                  across platforms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-purple-500" />
                <CardTitle className="text-lg">Performance-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I optimize for speed and accessibility, following best practices to deliver fast, inclusive web
                  experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="container py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional web
            experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* All Projects Grid */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">More Projects</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={200}
                    className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground md:text-lg">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground md:text-lg mb-8">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:alex.johnson@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com/in/alexjohnson" target="_blank">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
          <Separator className="my-8" />
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/alexjohnson"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:alex.johnson@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © 2024 Alex Johnson.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
