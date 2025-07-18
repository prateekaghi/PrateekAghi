"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Contact({ scrollTo }) {
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground md:text-lg mb-8">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:alex.johnson@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://linkedin.com/in/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:alex.johnson@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
