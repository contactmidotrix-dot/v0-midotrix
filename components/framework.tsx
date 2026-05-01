"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Search, Cpu, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

const icons = [Search, Cpu, Rocket]

export function Framework() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p
          className={`text-center text-[#00FFA3] text-xs font-semibold tracking-[0.15em] uppercase mb-4 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t.framework.label}
        </p>

        {/* Section Heading */}
        <div className={`text-center mb-12 transition-all duration-600 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <h2 className="text-[2.2rem] lg:text-[2.2rem] font-bold text-white mb-4">
            {t.framework.heading}
          </h2>
          {/* Gradient underline */}
          <div className="mx-auto w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[#531B6B] to-[#00FFA3] to-transparent" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {t.framework.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Link
                key={index}
                href="/services"
                className={`glass-card p-6 lg:p-8 card-interactive group cursor-pointer transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon
                    className="w-8 h-8 text-[rgba(0,255,163,0.7)] group-hover:text-[#00FFA3] transition-colors"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[1.1rem] font-bold text-white mb-3">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-white/65 text-sm leading-relaxed">
                  {card.body}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
