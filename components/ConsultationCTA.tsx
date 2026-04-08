"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ConsultationCTAProps {
  title?: string
  bullets?: string[]
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
}

export default function ConsultationCTA({
  title = 'Prepare for a Focused Initial Consultation',
  bullets = ['Transaction goals and target timeline', 'Key risk areas and counterpart profile', 'Document readiness and stakeholder map'],
  ctaLabel = 'Book Consultation',
  ctaHref = '#contact',
}: Partial<ConsultationCTAProps>) {
  return (
    <section className="rounded-2xl border border-[#B8860B]/40 bg-gradient-to-r from-[#1B1B1E] to-[#0D1B2A] p-8 md:p-10">
      <h3 className="font-serif text-3xl text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-white/85">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
      <Button asChild className="mt-6 bg-[#B8860B] text-black hover:bg-[#d19a19]">
        <Link href={ctaHref}>{ctaLabel}</Link>
      </Button>
    </section>
  )
}
