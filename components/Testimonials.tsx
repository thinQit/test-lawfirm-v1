'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

interface TestimonialsProps {
  items?: { quote: string; name: string; designation: string; src: string }[]
  imageSrc?: string
}

export default function Testimonials({
  items = [
    {
      quote: 'Harper & Associates delivered precise counsel through every phase of our acquisition and helped us close ahead of schedule.',
      name: 'General Counsel',
      designation: 'Manufacturing Company',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577351/site-images/team-people/12903244.jpg',
    },
    {
      quote: 'Their diligence and deal strategy were exceptional. We felt protected, informed, and prepared at every turn.',
      name: 'Chief Executive Officer',
      designation: 'Private Equity Portfolio Company',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg',
    },
  ],
}: Partial<TestimonialsProps>) {
  return <AnimatedTestimonials testimonials={items} autoplay />
}
