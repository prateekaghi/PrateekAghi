"use client";
import { Button } from "@/components/ui/button";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="container py-24 md:py-32 max-w-7xl mx-auto px-4"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I'm Alex Johnson
            </h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl">
              Front-End Developer & UI/UX Enthusiast
            </h2>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code, user experience, and
            bringing creative ideas to life through code.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-80 h-80 rounded-full border-4 border-background shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
