"use client";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function Footer({ scrollTo }) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
