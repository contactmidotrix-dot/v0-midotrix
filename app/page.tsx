"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { LoomShowcase } from "@/components/loom-showcase"
import { ReconflowShowcase } from "@/components/reconflow-showcase"
import { SampleResults } from "@/components/sample-results"
import { About } from "@/components/about"
import { Framework } from "@/components/framework"
import { FAQAccordion } from "@/components/faq-accordion"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080810]">
      {/* Background Grid - Fixed */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      
      <Header />
      
      <main>
        <Hero />
        <PainPoints />
        <LoomShowcase />
        <ReconflowShowcase />
        <SampleResults />
        <About />
        <Framework />
        <FAQAccordion />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}
