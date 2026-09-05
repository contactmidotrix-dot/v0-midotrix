"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function About() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* BONUS B: Grid mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(83,27,107,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(83,27,107,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* BONUS B: Centered glassmorphism glow blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(83,27,107,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* BONUS C: Heading with refined size */}
        <h2
          className={`about-heading font-bold text-white mb-6 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="border-b border-[rgba(0,255,163,0.3)] pb-1">
            {t.about.heading}
          </span>
        </h2>

        {/* BONUS D: Body with improved readability (font-weight 500, opacity 0.7) */}
        <p
          className={`text-white/70 about-body leading-[1.7] max-w-[620px] mx-auto mb-8 transition-all duration-600 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontWeight: 500 }}
        >
          {t.about.body}
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-600 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link href="/free-analysis" className="btn-primary inline-block">
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
