"use client";

import { Card } from '@/components/ui/card'
import { MapPin, Clock3, Phone, Mail, LucideIcon } from 'lucide-react'

interface OfficeInfoCardProps {
  type?: string
  label?: string
  value?: string
  imageSrc?: string
}

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Clock3,
  Phone,
  Mail,
}

export default function OfficeInfoCard({
  type = 'MapPin',
  label = 'Address',
  value = '200 Park Avenue, Suite 4200, New York, NY 10166',
}: Partial<OfficeInfoCardProps>) {
  const Icon = iconMap[type] || MapPin

  return (
    <Card className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-[#B8860B]/15 p-2">
          <Icon className="h-5 w-5 text-[#B8860B]" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-white/60">{label}</p>
          <p className="mt-1 text-sm text-white/90">{value}</p>
        </div>
      </div>
    </Card>
  )
}
