export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import SiteShell from "@/components/SiteShell";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/ui/card";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function AboutPage() {
  return (
    <SiteShell>
      <HeroBeams
        title="A corporate law firm built around transaction outcomes"
        highlightText="outcomes"
        subtitle="Harper & Associates is a focused M&A practice serving founders, boards, and investors."
        primaryCta={{ label: "Meet Our Attorneys", href: "/attorneys" }}
        secondaryCta={{ label: "Request a Consultation", href: "/contact" }}
      />
      <section className="animate-fade-in-up py-16 md:py-20">
        <SectionHeader headline="Our mission" subheadline="To deliver clear, decisive counsel that helps clients close transactions with confidence." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="card-hover p-6">Authoritative guidance</Card>
          <Card className="card-hover p-6">Structured execution</Card>
          <Card className="card-hover p-6">Distinguished client service</Card>
        </div>
      </section>
      <section className="animate-fade-in-up py-16 md:py-20">
        <ConsultationCTA
          headline="Let’s talk about your transaction"
          subheadline="We’ll confirm conflicts and respond the same business day with next steps."
          primaryCta={{ label: "Request a Consultation", href: "/contact" }}
          secondaryCta={{ label: "Call (212) 555-0147", href: "/contact" }}
        />
      </section>
    </SiteShell>
  );
}
