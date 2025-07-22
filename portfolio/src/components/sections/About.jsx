"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Palette, Smartphone, Globe } from "lucide-react";

export default function About({ scrollTo }) {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-lg mb-8">
            I'm a passionate frontend developer with over 5 years of experience
            in modern JavaScript frameworks. My journey in web development
            started with curiosity and has evolved into a deep love for creating
            intuitive, performant web applications.
          </p>
          <p className="text-muted-foreground md:text-lg mb-8">
            With strong skills in React, Vue.js, and Svelte, I enjoy exploring
            different approaches to solving complex problems. While I'm still
            developing my backend skills with Node.js, I'm committed to becoming
            a well-rounded full-stack developer.
          </p>
          <Card>
            <div className="grid gap-6 md:grid-cols-2">
              <li>🎯 Frontend Development Specialist</li>
              <li>⚡ React, Vue.js & Svelte Expert</li>
              <li>🚀 MERN Stack Developer</li>
              <li>🎨 UI/UX Enthusiast</li>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
