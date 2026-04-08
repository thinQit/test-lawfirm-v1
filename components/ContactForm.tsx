'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ContactFormProps {
  recipientEmail?: string
  imageSrc?: string
}

export default function ContactForm({
  recipientEmail = 'intake@harperassociateslaw.com',
}: Partial<ContactFormProps>) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message || !consent) {
      setError('Please complete all required fields and consent.')
      return
    }
    setError('')
    const subject = encodeURIComponent('Consultation Request - Harper & Associates')
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nCompany: ' + company + '\n\nDetails:\n' + message)
    window.location.href = 'mailto:' + recipientEmail + '?subject=' + subject + '&body=' + body
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 text-white">
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name *" />
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Business email *" />
      <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Briefly describe your matter *"
        className="min-h-28 w-full rounded-md border border-white/20 bg-[#0D1B2A]/70 px-3 py-2 text-sm outline-none"
      />
      <label className="flex items-start gap-2 text-sm text-white/80">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
        I consent to being contacted regarding this request and understand this does not create an attorney-client relationship.
      </label>
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <Button type="submit" className="w-full bg-[#B8860B] text-black hover:bg-[#d19a19]">Submit Request</Button>
    </form>
  )
}
