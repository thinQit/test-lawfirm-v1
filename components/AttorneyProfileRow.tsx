"use client";

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AttorneyProfileRowProps {
  name?: string
  title?: string
  bio?: string
  highlights?: string[]
  photoSrc?: string
  reversed?: boolean
}

export default function AttorneyProfileRow({
  name = 'Michael Chen',
  title = 'Partner, Corporate Transactions',
  bio = 'Michael advises boards and executive teams on middle-market and enterprise acquisitions with an emphasis on regulatory coordination and post-closing integration.',
  highlights = ['$1.2B multi-jurisdiction acquisition', 'Private equity platform roll-up strategy', 'Lead counsel on 40+ closed transactions'],
  photoSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg',
  reversed = false,
}: Partial<AttorneyProfileRowProps>) {
  return (
    <div className={cn('grid items-center gap-6 md:grid-cols-2 md:gap-10', reversed && 'md:[&>*:first-child]:order-2')}>
      <Image src={photoSrc} alt={name} width={1000} height={700} className="h-72 w-full rounded-xl object-cover md:h-96" unoptimized />
      <div className="space-y-4 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-[#B8860B]">{title}</p>
        <h3 className="font-serif text-3xl">{name}</h3>
        <p className="text-white/80">{bio}</p>
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="text-sm text-white/85">• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
