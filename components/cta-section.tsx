"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function CTASection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  // FIX 8: Render the CTA headline with "build" and "growth" highlighted in mint
  const renderHighlightedLine3 = () => {
    // The structure: "We build for those who seek growth."
    // Highlight "build" and "growth" in #00FFA3
    if (lang === "en") {
      return (
        <>
          We <span style={{ color: "#00FFA3" }}>build</span> for those who seek{" "}
          <span style={{ color: "#00FFA3" }}>growth</span>.
        </>
      )
    } else if (lang === "fr") {
      // French: "Nous construisons pour ceux qui cherchent la croissance."
      // Highlight "construisons" and "croissance"
      return (
        <>
          Nous <span style={{ color: "#00FFA3" }}>construisons</span> pour ceux qui cherchent la{" "}
          <span style={{ color: "#00FFA3" }}>croissance</span>.
        </>
      )
    } else {
      // Arabic: "نحن نبني لمن يسعون للنمو."
      // Highlight "نبني" and "للنمو"
      return (
        <>
          نحن <span style={{ color: "#00FFA3" }}>نبني</span> لمن يسعون{" "}
          <span style={{ color: "#00FFA3" }}>للنمو</span>.
        </>
      )
    }
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-cta-mesh" />
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 120px rgba(83,27,107,0.25)",
        }}
      />
      {/* Edge fade */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* FIX 8: Headline with multi-word mint highlight */}
        <h2
          className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-10"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-white">{t.cta.line1}</span>
          <span className="block text-white">{t.cta.line2}</span>
          <span className="block text-white">{renderHighlightedLine3()}</span>
        </h2>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="btn-primary inline-block !py-4 !px-10 !text-base"
          style={{
            boxShadow:
              "0 0 40px rgba(83,27,107,0.7), 0 0 80px rgba(83,27,107,0.3)",
          }}
        >
          {t.nav.cta}
        </Link>
      </div>
    </section>
  )
}
