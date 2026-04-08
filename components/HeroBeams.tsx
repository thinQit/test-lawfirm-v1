"use client";
import { BackgroundBeams } from "@/components/ui/backgrounds/background-beams";
import { Highlight } from "@/components/ui/text/hero-highlight";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroBeamsProps {
  headline: string;
  highlightText: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroBeams({
  headline = "Trusted Legal Advocacy for Life's Most Important Matters",
  highlightText = "Built on Integrity",
  subheadline = "Harrington & Vale Law delivers strategic counsel and courtroom-ready representation across business, estate, and civil matters.",
  primaryCta = { label: "Book a Consultation", href: "#" },
  secondaryCta = { label: "View Practice Areas", href: "#" },
}: Partial<HeroBeamsProps>) {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-background antialiased md:min-h-[700px]">
      <BackgroundBeams beamColors={["#1e3a8a", "#f59e42", "#2563eb", "#fbbf24", "#64748b"]} />
      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline} <Highlight className="text-foreground">{highlightText}</Highlight>
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-primary px-8 py-6 text-lg text-foreground transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
