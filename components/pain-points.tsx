"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function PainPoints() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [translateY, setTranslateY] = useState(16)

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

      // FIX 6: Each statement occupies exactly 20% of progress (0.2 range each)
      // With dead zones between statements to prevent overlap
      const statementIndex = Math.floor(clampedProgress * 5)
      const indexClamped = Math.min(statementIndex, 4)

      // Calculate progress within each statement's 20% range
      const rangeStart = indexClamped * 0.2
      const rangeEnd = (indexClamped + 1) * 0.2
      const progressWithinRange = (clampedProgress - rangeStart) / 0.2

      // FIX 6: Adjusted timing:
      // 0% → 15%: fade IN (opacity 0→1, translateY 16→0)
      // 15% → 70%: fully VISIBLE (opacity 1)
      // 70% → 97%: fade OUT (opacity 1→0, translateY 0→-16)
      // 97% → 100%: dead zone (nothing visible) to prevent overlap
      
      let calculatedOpacity = 0
      let calculatedTranslateY = 16

      if (progressWithinRange <= 0.15) {
        // Fade in phase
        const fadeInProgress = progressWithinRange / 0.15
        calculatedOpacity = fadeInProgress
        calculatedTranslateY = 16 * (1 - fadeInProgress)
      } else if (progressWithinRange <= 0.70) {
        // Fully visible phase
        calculatedOpacity = 1
        calculatedTranslateY = 0
      } else if (progressWithinRange <= 0.97) {
        // Fade out phase (except for last statement which stays visible)
        if (indexClamped < 4) {
          const fadeOutProgress = (progressWithinRange - 0.70) / 0.27
          calculatedOpacity = 1 - fadeOutProgress
          calculatedTranslateY = -16 * fadeOutProgress
        } else {
          // Last statement stays visible
          calculatedOpacity = 1
          calculatedTranslateY = 0
        }
      } else {
        // Dead zone - nothing visible to ensure no overlap
        if (indexClamped < 4) {
          calculatedOpacity = 0
          calculatedTranslateY = -16
        } else {
          calculatedOpacity = 1
          calculatedTranslateY = 0
        }
      }

      setCurrentIndex(indexClamped)
      setOpacity(Math.max(0, Math.min(1, calculatedOpacity)))
      setTranslateY(calculatedTranslateY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // FIX 6: Increased container height to 600vh for more breathing room
    <section ref={containerRef} className="relative h-[600vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className={`text-[clamp(1.3rem,3vw,2rem)] font-bold leading-snug ${
              currentIndex === 4 ? "text-[#00FFA3]" : "text-white"
            }`}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              transition: "none", // Smooth scroll-driven, no CSS transition
            }}
          >
            {t.painPoints[currentIndex]}
          </p>
        </div>
      </div>
    </section>
  )
}
