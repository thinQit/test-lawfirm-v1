"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  centered?: boolean
  imageSrc?: string
}

export default function SectionHeader({
  eyebrow = 'Harper & Associates',
  headline = 'Strategic Counsel for High-Stakes Transactions',
  subheadline = 'Trusted corporate legal guidance for M&A, governance, and risk management.',
  primaryCtaLabel = '',
  primaryCtaHref = '#',
  secondaryCtaLabel = '',
  secondaryCtaHref = '#',
  centered = false,
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('space-y-4', centered && 'text-center')}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl">{headline}</h2>
      <p className="max-w-3xl text-white/75">{subheadline}</p>
      {(primaryCtaLabel || secondaryCtaLabel) && (
        <div className={cn('flex flex-wrap gap-3', centered && 'justify-center')}>
          {primaryCtaLabel ? (
            <Button asChild className="bg-[#B8860B] text-black hover:bg-[#d19a19]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
          ) : null}
          {secondaryCtaLabel ? (
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          ) : null}
        </div>
      )}
    </div>
  )
}
