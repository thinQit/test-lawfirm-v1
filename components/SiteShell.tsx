"use client";

import React from 'react'
import { cn } from '@/lib/utils'
import { BackgroundBeams } from '@/components/ui/backgrounds/background-beams'

interface SiteShellProps {
  children?: React.ReactNode
  className?: string
  imageSrc?: string
}

export default function SiteShell({
  children = null,
  className = '',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771578398/site-images/legal/10475006.jpg',
}: Partial<SiteShellProps>) {
  return (
    <div
      className={cn(
        'min-h-screen bg-[#0D1B2A] text-white',
        'bg-gradient-to-b from-[#0D1B2A] via-[#12263A] to-[#1B1B1E]',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(rgba(13,27,42,0.9), rgba(13,27,42,0.95)), url(' + imageSrc + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <BackgroundBeams className="opacity-20" />
      <div className="relative z-10">
        <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">{children}</main>
      </div>
    </div>
  )
}
