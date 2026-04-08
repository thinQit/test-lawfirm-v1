"use client";

export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import SiteShell from "@/components/SiteShell";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import OfficeInfoCard from "@/components/OfficeInfoCard";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";

export default function ContactPage() {
  return (
    <SiteShell>
      <HeroBeams
        title="Request a consultation"
        highlightText="confidential intake"
        subtitle="Confidential intake for M&A and corporate governance matters. Same business day response."
        primaryCta={{ label: "Send Consultation Request", href: "/contact" }}
        secondaryCta={{ label: "Call (212) 555-0147", href: "/contact" }}
      />
      <section className="animate-fade-in-up py-16 md:py-20">
        <SectionHeader
          headline="Tell us about your matter"
          subheadline="We’ll confirm conflicts and follow up with next steps."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <OfficeInfoCard title="Office" />
          <OfficeInfoCard title="Phone" />
          <OfficeInfoCard title="Email" />
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
      <section className="animate-fade-in-up py-16 md:py-20">
        <TestimonialsAnimated
          title="Trusted by executives and in-house teams"
          subtitle="Clarity, responsiveness, and closing certainty—especially when timelines are tight."
          testimonials={[
            {
              quote: "Fast, precise, and calm under pressure.",
              name: "Chief Financial Officer",
              designation: "Industrial Services Company (Confidential)",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577351/site-images/team-people/12903244.jpg",
            },
          ]}
        />
      </section>
    </SiteShell>
  );
}
