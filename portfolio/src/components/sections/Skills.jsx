"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { skills } from "../data/skills";

export default function Skills({ scrollTo }) {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
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
      </div>
    </section>
  );
}
