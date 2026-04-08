export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import SiteShell from "@/components/SiteShell";
import SectionHeader from "@/components/SectionHeader";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import AttorneyProfileRow from "@/components/AttorneyProfileRow";
import CaseResultCard from "@/components/CaseResultCard";
import ConsultationCTA from "@/components/ConsultationCTA";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import OfficeInfoCard from "@/components/OfficeInfoCard";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";

export default function HomePage() {
  return (
    <SiteShell>
      <HeroBeams
        title="M&A counsel that keeps deals moving—and risk contained."
        highlightText="decisive outcomes"
        subtitle="Harper & Associates advises founders, boards, and private equity sponsors on acquisitions, divestitures, and strategic combinations across the U.S. and cross-border markets."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Notable Matters", href: "/cases" }}
      />

      <ScrollReveal>
        <section className="animate-fade-in-up py-16 md:py-20">
          <SectionHeader
            headline="Practice areas built for complex transactions"
            subheadline="From diligence to closing, we structure, negotiate, and execute deals with disciplined process and clear communication."
            primaryCta={{ label: "Explore Services", href: "/practice-areas" }}
            secondaryCta={{ label: "Meet the Team", href: "/attorneys" }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PracticeAreaCard title="Mergers & Acquisitions" />
            <PracticeAreaCard title="Private Equity & Sponsor Deals" />
            <PracticeAreaCard title="Corporate Governance" />
            <PracticeAreaCard title="Securities & Disclosure" />
            <PracticeAreaCard title="Commercial Contracts (Deal Support)" />
            <PracticeAreaCard title="Cross-Border Transactions" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted/40 py-16 md:py-20">
          <SectionHeader
            headline="Attorneys who combine precision with deal sense"
            subheadline="Senior-led teams, partner accessibility, and drafting that anticipates the next question—before it becomes a negotiation."
            primaryCta={{ label: "View All Attorneys", href: "/attorneys" }}
            secondaryCta={{ label: "Schedule a Call", href: "/contact" }}
          />
          <div className="mt-10 space-y-6">
            <AttorneyProfileRow name="Evelyn Harper" title="Managing Partner" />
            <AttorneyProfileRow name="Daniel Cho" title="Partner" />
            <AttorneyProfileRow name="Priya Nair" title="Counsel" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-16 md:py-20">
          <SectionHeader
            headline="Notable matters (representative experience)"
            subheadline="A selection of transactions illustrating our approach. Prior results do not guarantee a similar outcome."
            primaryCta={{ label: "See More Matters", href: "/cases" }}
            secondaryCta={{ label: "Discuss Your Deal", href: "/contact" }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CaseResultCard title="$620M strategic sale of healthcare services platform" />
            <CaseResultCard title="$310M sponsor-backed platform acquisition" />
            <CaseResultCard title="Cross-border acquisition of EU manufacturing supplier" />
            <CaseResultCard title="Carve-out divestiture of consumer brand unit" />
            <CaseResultCard title="Board advisory on conflicted transaction" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-16 md:py-20">
          <ConsultationCTA
            headline="Need counsel for an acquisition, sale, or strategic combination?"
            subheadline="We can step in at any stage—LOI, diligence, definitive agreements, or closing."
            primaryCta={{ label: "Request a Consultation", href: "/contact" }}
            secondaryCta={{ label: "Call (212) 555-0147", href: "/contact" }}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted/40 py-16 md:py-20">
          <FAQAccordion
            headline="Frequently asked questions"
            subheadline="Straight answers to common M&A questions—so you can move forward with confidence."
            items={[
              {
                question: "When should we involve counsel—before or after signing an LOI?",
                answer:
                  "Ideally before the LOI is signed so legal structure and economics align from the outset.",
              },
              {
                question: "Do you handle both buy-side and sell-side transactions?",
                answer:
                  "Yes. We represent buyers, sellers, and boards with role-specific strategy and drafting.",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-16 md:py-20">
          <TestimonialsAnimated
            title="Client feedback"
            subtitle="What executives and in-house teams value most: clarity, speed, and closing certainty."
            autoplay
            testimonials={[
              {
                quote:
                  "They anticipated issues before they hit the negotiation table—and we closed on schedule.",
                name: "Chief Executive Officer",
                designation: "Healthcare Services Company (Confidential)",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577325/site-images/team-people/10347164.jpg",
              },
              {
                quote: "Clear, calm, and extremely responsive throughout a board-sensitive process.",
                name: "General Counsel",
                designation: "Fintech Company (Confidential)",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted/40 py-16 md:py-20">
          <SectionHeader
            headline="Request a consultation"
            subheadline="Tell us about your transaction. We’ll confirm conflicts and respond the same business day."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <OfficeInfoCard title="New York Office" />
            <OfficeInfoCard title="Phone" />
            <OfficeInfoCard title="Email" />
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </section>
      </ScrollReveal>
    </SiteShell>
  );
}
