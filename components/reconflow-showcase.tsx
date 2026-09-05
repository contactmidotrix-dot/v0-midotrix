"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft, FileSpreadsheet, Cpu, AlertTriangle, FileCheck2, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

const flowIcons = [FileSpreadsheet, Cpu, AlertTriangle, FileCheck2]

export function ReconflowShowcase() {
  const { lang, isRTL } = useLanguage()
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

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section ref={sectionRef} id="reconflow" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label + Heading */}
        <div
          className={`text-center mb-6 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[#00FFA3] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            {t.reconflow.label}
          </p>
          <h2
            className="text-[clamp(2rem,4vw,2.8rem)] font-bold text-white mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.reconflow.heading}
          </h2>
          <p className="text-white/50 text-sm uppercase tracking-wide mb-4">{t.reconflow.subheading}</p>
          <div className="mx-auto w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[#531B6B] to-[#00FFA3] to-transparent mb-6" />
          <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto">{t.reconflow.body}</p>
        </div>

        {/* Data Flow Diagram */}
        <div
          className={`flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-2 my-16 transition-all duration-600 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t.reconflow.flowSteps.map((step, index) => {
            const Icon = flowIcons[index]
            const isLast = index === t.reconflow.flowSteps.length - 1
            return (
              <div key={index} className="flex items-center lg:flex-1">
                <div className="glass-card p-5 flex-1 text-center flex flex-col items-center gap-2 min-h-[140px] justify-center">
                  <Icon className="w-7 h-7 text-[#00FFA3]" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-sm">{step.label}</h4>
                  <p className="text-white/50 text-xs leading-snug">{step.detail}</p>
                </div>
                {!isLast && (
                  <div className="hidden lg:flex items-center justify-center px-2 shrink-0">
                    <ArrowIcon className="w-5 h-5 text-[#531B6B]" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* What It Finds */}
        <div
          className={`mb-16 transition-all duration-600 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-white text-xl font-bold text-center mb-8">{t.reconflow.whatItFinds.heading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {t.reconflow.whatItFinds.items.map((item, index) => (
              <div key={index} className="glass-card p-6">
                <h4 className="text-[#00FFA3] font-bold text-base mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div
          className={`glass-card p-8 lg:p-10 transition-all duration-600 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-white text-xl font-bold mb-6 text-center">{t.reconflow.whatYouGet.heading}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {t.reconflow.whatYouGet.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-white/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
