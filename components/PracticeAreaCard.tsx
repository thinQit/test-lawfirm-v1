"use client";

import { Card } from '@/components/ui/card'
import { ChevronRight, Scale, Briefcase, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PracticeAreaCardProps {
  title?: string
  description?: string
  highlights?: string[]
  iconName?: string
  imageSrc?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Briefcase,
  Building2,
}

export default function PracticeAreaCard({
  title = 'Mergers & Acquisitions',
  description = 'End-to-end legal guidance for buy-side and sell-side transactions from LOI through close.',
  highlights = ['Deal structuring', 'Due diligence', 'Closing and post-close obligations'],
  iconName = 'Scale',
}: Partial<PracticeAreaCardProps>) {
  const Icon = iconMap[iconName] || Scale

  return (
    <Card className={cn('rounded-xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg')}>
      <div className="mb-4 inline-flex rounded-lg bg-[#B8860B]/15 p-2">
        <Icon className="h-5 w-5 text-[#B8860B]" />
      </div>
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{description}</p>
      <ul className="mt-4 space-y-2">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-white/85">
            <ChevronRight className="mt-0.5 h-4 w-4 text-[#B8860B]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
