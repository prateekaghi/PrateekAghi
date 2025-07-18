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
            With over 5 years of experience in front-end development, I
            specialize in creating exceptional digital experiences. I'm
            passionate about modern web technologies, performance optimization,
            and crafting intuitive user interfaces.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 mb-2 text-blue-500 mx-auto" />
                <CardTitle className="text-lg">Design-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I believe great code starts with great design. I work closely
                  with designers to bring pixel-perfect interfaces to life.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 mb-2 text-green-500 mx-auto" />
                <CardTitle className="text-lg">Mobile-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every project I build is responsive and optimized for all
                  devices, ensuring a seamless experience across platforms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-purple-500 mx-auto" />
                <CardTitle className="text-lg">Performance-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I optimize for speed and accessibility, following best
                  practices to deliver fast, inclusive web experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
