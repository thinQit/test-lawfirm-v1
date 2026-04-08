"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = "Harrington & Vale Law",
  description = "Strategic legal counsel for businesses, families, and individuals seeking trusted representation with integrity and precision.",
  columns = [
    {
      title: "Legal Services",
      links: [
        { label: "Corporate Law", href: "#" },
        { label: "Civil Litigation", href: "#" },
        { label: "Estate Planning", href: "#" },
        { label: "Real Estate Law", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Firm", href: "#" },
        { label: "Attorneys", href: "#" },
        { label: "Case Results", href: "#" },
        { label: "Testimonials", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Schedule Consultation", href: "#" },
        { label: "office@harringtonvale.com", href: "mailto:office@harringtonvale.com" },
        { label: "(212) 555-0147", href: "tel:+12125550147" },
        { label: "100 Park Ave, New York, NY", href: "#" },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="animate-fade-in-up grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-background/70 transition-all duration-200 hover:scale-105 hover:text-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
