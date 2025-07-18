"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "../ui/card";
import { Code, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header({ scrollTo }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-7xl mx-auto px-4">
        <div className="mr-4 flex">
          <button
            onClick={() => scrollToSection("hero")}
            className="mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Code className="h-6 w-6" />
            <span className="font-bold">Alex Johnson</span>
          </button>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-foreground/80"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="transition-colors hover:text-foreground/80"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="transition-colors hover:text-foreground/80"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="transition-colors hover:text-foreground/80"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="transition-colors hover:text-foreground/80"
          >
            Contact
          </button>
        </nav>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
