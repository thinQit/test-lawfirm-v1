"use client";

import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

interface FAQAccordionProps {
  faqs?: { question: string; answer: string }[]
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
}

export default function FAQAccordion({
  faqs = [
    { question: 'When should we involve M&A counsel?', answer: 'As early as term sheet discussions. Early legal strategy reduces risk, preserves leverage, and helps avoid costly restructuring later.' },
    { question: 'Do you handle cross-border deals?', answer: 'Yes. We coordinate with local counsel and advise on jurisdictional, regulatory, and transactional issues across multi-country transactions.' },
    { question: 'How do you structure fees?', answer: 'We offer transparent matter budgets with phased billing tied to milestones such as diligence, definitive agreements, and closing.' },
  ],
  ctaLabel = 'Request a Consultation',
  ctaHref = '#consultation',
}: Partial<FAQAccordionProps>) {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem value={'item-' + i} key={i} className="border-white/15">
            <AccordionTrigger className="text-left text-white">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-white/75">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm text-white/80">Have a time-sensitive transaction?</p>
        <Button asChild className="bg-[#B8860B] text-black hover:bg-[#d19a19]">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </div>
  )
}
