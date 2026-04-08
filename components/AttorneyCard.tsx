"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AttorneyCardProps {
  name?: string
  title?: string
  focus?: string
  admissions?: string[]
  education?: string
  email?: string
  phone?: string
  photoSrc?: string
}

export default function AttorneyCard({
  name = 'Alexandra Harper',
  title = 'Managing Partner',
  focus = 'Cross-border M&A and strategic corporate transactions',
  admissions = ['New York', 'Delaware'],
  education = 'J.D., Columbia Law School',
  email = 'aharper@harperassociateslaw.com',
  phone = '(212) 555-0199',
  photoSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577325/site-images/team-people/10347164.jpg',
}: Partial<AttorneyCardProps>) {
  return (
    <Card className={cn('overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white')}>
      <Image src={photoSrc} alt={name} width={800} height={600} className="h-56 w-full object-cover" unoptimized />
      <div className="p-6">
        <h3 className="font-serif text-2xl">{name}</h3>
        <p className="text-[#B8860B]">{title}</p>
        <p className="mt-3 text-sm text-white/80">{focus}</p>
        <p className="mt-3 text-sm text-white/70"><span className="font-semibold text-white">Admissions:</span> {admissions.join(', ')}</p>
        <p className="text-sm text-white/70"><span className="font-semibold text-white">Education:</span> {education}</p>
        <div className="mt-4 space-y-2 text-sm">
          <a href={'mailto:' + email} className="flex items-center gap-2 text-white/85 hover:text-white"><Mail className="h-4 w-4 text-[#B8860B]" />{email}</a>
          <a href={'tel:' + phone} className="flex items-center gap-2 text-white/85 hover:text-white"><Phone className="h-4 w-4 text-[#B8860B]" />{phone}</a>
        </div>
      </div>
    </Card>
  )
}
