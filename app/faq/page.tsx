"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq-accordion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export default function FAQPage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-[#080810]">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      {/* Purple Atmosphere */}
      <div className="fixed inset-0 bg-purple-atmosphere pointer-events-none" />

      <Header />

      <main className="relative z-10 pt-28 lg:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pre-title */}
          <p className="text-center text-[#00FFA3] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
            {t.faqPage.preTitle}
          </p>

          {/* Page Headline */}
          <h1
            className="text-center text-[clamp(2rem,5vw,3rem)] leading-[1.1] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.faqPage.heading}
          </h1>

          {/* Intro text */}
          <p className="text-center text-white/60 text-base max-w-[560px] mx-auto mb-8">
            {t.faq.pageIntro}
          </p>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion showHeading={false} />

        {/* CTA Button */}
        <div className="text-center pb-20">
          <Link href="/free-analysis" className="btn-primary inline-block">
            {t.nav.cta}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
