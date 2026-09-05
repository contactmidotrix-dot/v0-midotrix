"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

// BONUS A: Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 1.5 + 1.5,
    opacity: Math.random() * 0.14 + 0.06,
    duration: Math.random() * 5 + 4,
    delay: Math.random() * 5,
  }))
}

export function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [loaded, setLoaded] = useState(false)
  
  // BONUS A: Memoize particles to prevent re-generation
  const particles = useMemo(() => generateParticles(22), [])

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Split headline using the explicit headlineHighlight prefix (language-safe:
  // does not assume a fixed word count, since translations vary in length)
  const headline = t.hero.headline
  const highlight = t.hero.headlineHighlight
  const startsWithHighlight = highlight && headline.startsWith(highlight)
  const gradientWords = startsWithHighlight ? highlight : headline
  const whiteWords = startsWithHighlight ? headline.slice(highlight.length) : ""

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Purple Atmospheric Glow */}
      <div className="absolute inset-0 bg-purple-atmosphere" />

      {/* BONUS A: Large soft purple orb behind hero text */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(83,27,107,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* BONUS A: Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: `rgba(255,255,255,${p.opacity})`,
              animation: `heroFloat ${p.duration}s linear infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-10">
        {/* FIX 4 & 10: Headline with reduced size and purple gradient on first 4 words */}
        <h1
          className={`hero-headline leading-[1.05] tracking-[0.02em] mb-6 ${
            loaded ? "animate-fade-slide-up" : "opacity-0"
          }`}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="hero-gradient-text">{gradientWords}</span>
          <span className="text-white">{whiteWords}</span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`hero-subtext text-white/65 leading-relaxed max-w-[580px] mx-auto mb-8 ${
            loaded ? "animate-fade-slide-up animation-delay-200" : "opacity-0"
          }`}
        >
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            loaded ? "animate-fade-slide-up animation-delay-400" : "opacity-0"
          }`}
        >
          <Link href="/free-analysis" className="btn-primary inline-block">
            {t.nav.cta}
          </Link>
          <a
            href="#reconflow"
            className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-colors"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* Inline styles for hero particles animation */}
      <style jsx>{`
        @keyframes heroFloat {
          0% {
            transform: translateY(-20px);
            opacity: 0.06;
          }
          100% {
            transform: translateY(20px);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  )
}
