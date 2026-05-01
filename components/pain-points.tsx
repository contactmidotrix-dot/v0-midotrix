"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function PainPoints() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate scroll progress within this section
      const scrollProgress = -rect.top / (containerHeight - viewportHeight)
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

      // Each statement occupies 20% of progress
      const statementIndex = Math.floor(clampedProgress * 5)
      const indexClamped = Math.min(statementIndex, 4)

      // Calculate opacity within each statement's range
      const progressWithinStatement = (clampedProgress * 5) % 1

      let calculatedOpacity = 1
      if (progressWithinStatement < 0.3) {
        // Fade in
        calculatedOpacity = progressWithinStatement / 0.3
      } else if (progressWithinStatement > 0.7) {
        // Fade out (except for last statement)
        if (indexClamped < 4) {
          calculatedOpacity = (1 - progressWithinStatement) / 0.3
        }
      }

      setCurrentIndex(indexClamped)
      setOpacity(Math.max(0, Math.min(1, calculatedOpacity)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className={`text-[clamp(1.3rem,3vw,2rem)] font-bold leading-snug transition-opacity duration-300 ${
              currentIndex === 4 ? "text-[#00FFA3]" : "text-white"
            }`}
            style={{ opacity }}
          >
            {t.painPoints[currentIndex]}
          </p>
        </div>
      </div>
    </section>
  )
}
