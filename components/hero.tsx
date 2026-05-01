"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Split headline into highlighted and regular parts
  const highlightWords = t.hero.headlineHighlight
  const fullHeadline = t.hero.headline
  const highlightIndex = fullHeadline.indexOf(highlightWords)
  const afterHighlight = fullHeadline.slice(highlightIndex + highlightWords.length)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Purple Atmospheric Glow */}
      <div className="absolute inset-0 bg-purple-atmosphere" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-10">
        {/* Headline */}
        <h1
          className={`font-[var(--font-bebas)] text-[clamp(2rem,8vw,2.8rem)] lg:text-[clamp(3.2rem,5.5vw,5rem)] leading-[1.05] tracking-[0.02em] mb-6 ${
            loaded ? "animate-fade-slide-up" : "opacity-0"
          }`}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="gradient-text">{highlightWords}</span>
          <span className="text-white">{afterHighlight}</span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`text-[0.88rem] lg:text-[1.05rem] text-white/65 leading-relaxed max-w-[580px] mx-auto mb-8 ${
            loaded ? "animate-fade-slide-up animation-delay-200" : "opacity-0"
          }`}
        >
          {t.hero.subheadline}
        </p>

        {/* CTA Button */}
        <div
          className={`${
            loaded ? "animate-fade-slide-up animation-delay-400" : "opacity-0"
          }`}
        >
          <Link href="/contact" className="btn-primary inline-block">
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
