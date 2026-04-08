"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
  firmName?: string
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
}

export default function Footer({
  className = '',
  firmName = 'Harper & Associates',
  ctaLabel = 'Schedule a Consultation',
  ctaHref = '#consultation',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t border-white/10 bg-[#1B1B1E] text-white', className)}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-xl">{firmName}</h3>
          <p className="mt-3 text-sm text-white/75">
            Corporate law counsel for complex mergers, acquisitions, governance, and strategic transactions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#B8860B]">Office</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#B8860B]" /> 200 Park Avenue, Suite 4200, New York, NY</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-[#B8860B]" /> (212) 555-0199</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-[#B8860B]" /> intake@harperassociateslaw.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#B8860B]">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="#practice-areas">Practice Areas</Link></li>
            <li><Link href="#attorneys">Attorneys</Link></li>
            <li><Link href="#case-results">Case Results</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#B8860B]">Start Here</h4>
          <p className="mt-3 text-sm text-white/75">Speak with a corporate attorney about your transaction timeline and risk profile.</p>
          <Button asChild className="mt-4 bg-[#B8860B] text-black hover:bg-[#d19a19]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60 md:px-6">
        © {new Date().getFullYear()} {firmName}. Attorney Advertising. Prior results do not guarantee a similar outcome.
      </div>
    </footer>
  )
}
