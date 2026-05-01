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
      className="relative py-24 lg:py-32"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(83,27,107,0.12),transparent)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          className={`text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-white mb-6 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="border-b border-[rgba(0,255,163,0.3)] pb-1">
            {t.about.heading}
          </span>
        </h2>

        {/* Body */}
        <p
          className={`text-white/65 text-[1.05rem] leading-[1.7] max-w-[620px] mx-auto mb-8 transition-all duration-600 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t.about.body}
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-600 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
