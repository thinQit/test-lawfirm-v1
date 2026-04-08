"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Client Testimonials",
  subheadline = "Professional guidance, clear communication, and proven results for clients who need dependable legal support.",
  testimonials = [
    {
      quote:
        "Their litigation team was meticulous from day one. We always understood our options, and their preparation gave us complete confidence in court.",
      name: "Margaret Holloway",
      designation: "Business Owner",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577325/site-images/team-people/10347164.jpg",
    },
    {
      quote:
        "From estate planning to final documentation, every step was handled with care and precision. I felt protected and informed throughout.",
      name: "Daniel Reeves",
      designation: "Estate Planning Client",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg",
    },
    {
      quote:
        "When our contract dispute escalated, Harrington & Vale moved quickly and strategically. Their counsel saved us substantial time and risk.",
      name: "Olivia Tran",
      designation: "Operations Director",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577351/site-images/team-people/12903244.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
