"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function SampleResults() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label + Heading */}
        <div
          className={`text-center mb-10 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[#00FFA3] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            {t.sampleResults.label}
          </p>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.sampleResults.heading}
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">{t.sampleResults.subtitle}</p>
        </div>

        {/* Results Card */}
        <div
          className={`glass-card p-6 lg:p-10 transition-all duration-600 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Card header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8 pb-6 border-b border-white/10">
            <div>
              <p className="text-white font-bold">{t.sampleResults.restaurantLabel}</p>
              <p className="text-white/40 text-xs">
                {t.sampleResults.periodLabel}: {t.sampleResults.periodValue}
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center sm:text-right">
                <p className="text-white/40 text-xs">{t.sampleResults.ordersProcessed}</p>
                <p className="text-white font-bold text-lg">{t.sampleResults.ordersProcessedValue}</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-white/40 text-xs">{t.sampleResults.matched}</p>
                <p className="text-white font-bold text-lg">{t.sampleResults.matchedValue}</p>
              </div>
            </div>
          </div>

          {/* Hero number */}
          <div className="text-center mb-10">
            <p className="text-white/50 text-sm mb-2">{t.sampleResults.totalLabel}</p>
            <p
              className="text-[clamp(2.2rem,6vw,3.5rem)] font-bold mb-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#00FFA3" }}
            >
              {t.sampleResults.totalValue}
            </p>
            <p className="text-white/40 text-xs">{t.sampleResults.casesLabel}</p>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {t.sampleResults.breakdown.map((row, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <p className="text-white text-sm font-semibold mb-1">{row.category}</p>
                <p className="text-white/40 text-xs mb-2">{row.count}</p>
                <p className="text-[#00FFA3] font-bold">{row.amount}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/free-analysis" className="btn-primary inline-block">
              {t.sampleResults.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
