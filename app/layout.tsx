import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Harper & Associates | M&A and Corporate Counsel",
  description:
    "Harper & Associates is a corporate law firm specializing in mergers and acquisitions, private equity transactions, and board advisory. Partner-led counsel with disciplined deal execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}>
        <Navbar
          logo="Harper & Associates"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Practice Areas", href: "/practice-areas" },
            { label: "Attorneys", href: "/attorneys" },
            { label: "Notable Matters", href: "/cases" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Request a Consultation"
          ctaHref="/contact"
        />
        {children}
        <Footer
          brand="Harper & Associates"
          description="Corporate counsel for decisive deals. Partner-led M&A and board advisory with disciplined execution."
          columns={[
            {
              title: "Office",
              links: [
                { label: "200 Park Avenue, Suite 1700, New York, NY 10166", href: "/contact" },
                { label: "(212) 555-0147", href: "/contact" },
                { label: "intake@harperassociates.com", href: "/contact" },
              ],
            },
            {
              title: "Firm",
              links: [
                { label: "Practice Areas", href: "/practice-areas" },
                { label: "Attorneys", href: "/attorneys" },
                { label: "Notable Matters", href: "/cases" },
                { label: "About", href: "/about" },
              ],
            },
          ]}
          copyright="© 2026 Harper & Associates. All rights reserved."
        />
      </body>
    </html>
  );
}
