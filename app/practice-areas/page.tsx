export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import SiteShell from "@/components/SiteShell";
import SectionHeader from "@/components/SectionHeader";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import ConsultationCTA from "@/components/ConsultationCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function PracticeAreasPage() {
  return (
    <SiteShell>
      <HeroBeams
        title="Corporate law services for high-stakes transactions"
        highlightText="structured execution"
        subtitle="Focused expertise in M&A and related corporate matters—delivered with partner-level attention."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Meet Our Attorneys", href: "/attorneys" }}
      />
      <ScrollReveal>
        <section className="animate-fade-in-up py-16 md:py-20">
          <SectionHeader headline="What we do" subheadline="A disciplined approach across the transaction lifecycle." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PracticeAreaCard title="Mergers & Acquisitions" />
            <PracticeAreaCard title="Private Equity Transactions" />
            <PracticeAreaCard title="Governance & Special Committees" />
            <PracticeAreaCard title="Deal Support: Contracts & Disclosure" />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="animate-fade-in-up py-16 md:py-20">
          <ConsultationCTA
            headline="Get a clear plan for your transaction"
            subheadline="Share your timeline and goals—we’ll respond the same business day with next steps."
            primaryCta={{ label: "Request a Consultation", href: "/contact" }}
            secondaryCta={{ label: "Call (212) 555-0147", href: "/contact" }}
          />
        </section>
      </ScrollReveal>
    </SiteShell>
  );
}
