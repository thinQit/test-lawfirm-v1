'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  firmName?: string
  links?: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
}

export default function Navbar({
  firmName = 'Harper & Associates',
  links = [
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Attorneys', href: '#attorneys' },
    { label: 'Case Results', href: '#case-results' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Request Consultation',
  ctaHref = '#consultation',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/10 transition-all',
        scrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Scale className="h-5 w-5 text-[#B8860B]" />
          <span className="font-serif text-lg md:text-xl">{firmName}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/85 hover:text-white">
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-[#B8860B] text-black hover:bg-[#d19a19]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0D1B2A] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/90" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-[#B8860B] text-black hover:bg-[#d19a19]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
