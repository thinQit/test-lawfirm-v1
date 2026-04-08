export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import SiteShell from "@/components/SiteShell";
import SectionHeader from "@/components/SectionHeader";
import AttorneyCard from "@/components/AttorneyCard";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function AttorneysPage() {
  return (
    <SiteShell>
      <HeroBeams
        title="Partner-led counsel, built for board-level decisions"
        highlightText="senior attention"
        subtitle="A focused corporate team that brings structure, responsiveness, and negotiation discipline."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Notable Matters", href: "/cases" }}
      />
      <section className="animate-fade-in-up py-16 md:py-20">
        <SectionHeader headline="Our attorneys" subheadline="Representative profiles and experience highlights." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AttorneyCard name="Evelyn Harper" title="Managing Partner" />
          <AttorneyCard name="Daniel Cho" title="Partner" />
          <AttorneyCard name="Priya Nair" title="Counsel" />
          <AttorneyCard name="Michael Stein" title="Associate" />
        </div>
      </section>
      <section className="animate-fade-in-up py-16 md:py-20">
        <ConsultationCTA
          headline="Talk to an M&A attorney today"
          subheadline="Share your timeline and counterparties—we’ll confirm conflicts and propose next steps."
          primaryCta={{ label: "Request a Consultation", href: "/contact" }}
          secondaryCta={{ label: "Call (212) 555-0147", href: "/contact" }}
        />
      </section>
    </SiteShell>
  );
}
