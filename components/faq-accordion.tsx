"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

interface FAQAccordionProps {
  showHeading?: boolean
}

export function FAQAccordion({ showHeading = true }: FAQAccordionProps) {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  // FIX 7: Track hovered index for chevron color change
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        {showHeading && (
          <h2 className="text-[1.6rem] lg:text-[2.2rem] font-bold text-white text-center mb-10">
            {t.faq.heading}
          </h2>
        )}

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="border-b border-white/[0.07]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-white font-semibold text-base pr-4">
                  {item.question}
                </span>
                {/* FIX 7: ChevronDown turns #00FFA3 on hover */}
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0"
                  style={{
                    color: hoveredIndex === index ? "#00FFA3" : "rgba(255,255,255,0.5)",
                    transition: "color 0.2s ease, transform 0.3s ease",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-350 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-white/65 text-[0.95rem] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
