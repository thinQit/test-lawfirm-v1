export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import SiteShell from "@/components/SiteShell";
import SectionHeader from "@/components/SectionHeader";
import CaseResultCard from "@/components/CaseResultCard";
import Testimonials from "@/components/Testimonials";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function CasesPage() {
  return (
    <SiteShell>
      <HeroBeams
        title="Representative transactions and board advisory work"
        highlightText="proven execution"
        subtitle="Selected matters demonstrating our experience across industries and deal structures."
        primaryCta={{ label: "Discuss a Matter", href: "/contact" }}
        secondaryCta={{ label: "Meet the Team", href: "/attorneys" }}
      />
      <section className="animate-fade-in-up py-16 md:py-20">
        <SectionHeader headline="Notable matters" subheadline="A cross-section of M&A, sponsor deals, carve-outs, and governance engagements." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseResultCard title="$620M strategic sale of healthcare services platform" />
          <CaseResultCard title="$310M sponsor-backed platform acquisition" />
          <CaseResultCard title="Cross-border acquisition of EU manufacturing supplier" />
        </div>
      </section>
      <section className="animate-fade-in-up py-16 md:py-20">
        <Testimonials />
      </section>
      <section className="animate-fade-in-up py-16 md:py-20">
        <ConsultationCTA
          headline="Ready to move your deal forward?"
          subheadline="Tell us where you are in the process—LOI, diligence, drafting, or closing."
          primaryCta={{ label: "Request a Consultation", href: "/contact" }}
          secondaryCta={{ label: "Call (212) 555-0147", href: "/contact" }}
        />
      </section>
    </SiteShell>
  );
}
