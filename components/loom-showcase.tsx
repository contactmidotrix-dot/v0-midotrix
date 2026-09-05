"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

// Drop the real Loom embed/share URL here when available.
// Until then, this section renders a clearly-labeled placeholder
// instead of a fake or misleading video player.
const LOOM_VIDEO_URL: string | null = null

export function LoomShowcase() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[#00FFA3] text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.loom.label}</p>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.loom.heading}
          </h2>
          <p className="text-white/60 text-sm mb-10">{t.loom.subtitle}</p>
        </div>

        {/* Video Frame */}
        <div
          className={`glass-card relative aspect-video w-full overflow-hidden transition-all duration-600 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {LOOM_VIDEO_URL ? (
            <iframe
              src={LOOM_VIDEO_URL}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(83,27,107,0.25) 0%, rgba(8,8,16,0.9) 70%)",
              }}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                <Play className="w-6 h-6 text-white/60 ml-0.5" fill="currentColor" />
              </div>
              <p className="text-white/40 text-sm">{t.loom.placeholderNote}</p>
            </div>
          )}
        </div>

        {/* CTA After Video */}
        <div
          className={`mt-10 transition-all duration-600 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/free-analysis"
            className="btn-primary inline-block"
            style={{ boxShadow: "0 0 40px rgba(83,27,107,0.7), 0 0 80px rgba(83,27,107,0.3)" }}
          >
            {t.loom.ctaAfter}
          </Link>
        </div>
      </div>
    </section>
  )
}
