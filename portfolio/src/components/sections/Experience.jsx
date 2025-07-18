"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { experiences } from "../data/expirience";

export default function Experience({ scrollTo }) {
  return (
    <section id="experience" className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl">
            My journey in frontend development, from freelancing to leading
            development teams at innovative companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative mb-12 last:mb-0">
                <div
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                    {experience.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              {experience.position}
                            </CardTitle>
                            {experience.current && (
                              <Badge variant="default" className="ml-2">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              {experience.company}
                            </span>
                            <span>{experience.location}</span>
                          </div>
                          <span className="text-sm font-medium">
                            {experience.duration}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
