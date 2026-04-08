"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CaseResultCardProps {
  matter?: string
  role?: string
  industry?: string
  year?: string
  highlights?: string[]
  disclaimer?: string
  imageSrc?: string
}

export default function CaseResultCard({
  matter = 'Acquisition of regional logistics network',
  role = 'Lead M&A Counsel to Buyer',
  industry = 'Transportation & Logistics',
  year = '2025',
  highlights = ['Structured asset purchase with escrow protections', 'Negotiated risk allocation on legacy liabilities', 'Closed on accelerated timeline with lender coordination'],
  disclaimer = 'Representative matter. Results depend on specific facts and law.',
}: Partial<CaseResultCardProps>) {
  return (
    <Card className={cn('rounded-xl border border-white/10 bg-white/5 p-6 text-white')}>
      <p className="text-xs uppercase tracking-[0.18em] text-[#B8860B]">{industry} • {year}</p>
      <h3 className="mt-2 font-serif text-2xl">{matter}</h3>
      <p className="mt-1 text-sm text-white/80">{role}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {highlights.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
      <p className="mt-4 rounded-md border border-[#B8860B]/30 bg-[#B8860B]/10 px-3 py-2 text-xs text-[#f6df9a]">{disclaimer}</p>
    </Card>
  )
}
