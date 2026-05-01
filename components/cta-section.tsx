"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function CTASection() {
  const { lang } = useLanguage()
  const t = translations[lang]

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
        {/* Headline */}
        <h2
          className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-10"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-white">{t.cta.line1}</span>
          <span className="block text-white">{t.cta.line2}</span>
          <span className="block text-white">
            {t.cta.line3}
            <span className="text-[#00FFA3]">{t.cta.highlight}</span>
          </span>
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
