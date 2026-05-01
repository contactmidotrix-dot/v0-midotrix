"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

type Tab = "discover" | "engineer" | "deploy"

export default function ServicesPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [activeTab, setActiveTab] = useState<Tab>("discover")
  const tabsSectionRef = useRef<HTMLDivElement>(null)

  const tabs: { key: Tab; label: string }[] = [
    { key: "discover", label: t.services.tabs[0] },
    { key: "engineer", label: t.services.tabs[1] },
    { key: "deploy", label: t.services.tabs[2] },
  ]

  const content = {
    discover: t.services.discover,
    engineer: t.services.engineer,
    deploy: t.services.deploy,
  }

  const currentContent = content[activeTab]

  const handleTabChange = (newTab: Tab) => {
    setActiveTab(newTab)
    setTimeout(() => {
      tabsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-[#080810]">
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-purple-atmosphere pointer-events-none" />
      <Header />

      <main className="relative z-10 pt-28 lg:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Headline */}
          <h1
            className="text-center text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.services.heading}
          </h1>

          {/* Subtitle */}
          <p className="text-center text-white/60 text-base max-w-[540px] mx-auto mb-12">
            {t.services.subtitle}
          </p>

          {/* Tabs — horizontal on all screens, scrollbar hidden */}
          <div ref={tabsSectionRef} className="scroll-mt-28 lg:scroll-mt-36">
            <div
              className="flex flex-row items-center justify-center gap-2 mb-10"
              style={{
                overflowX: "auto",
                // Hide scrollbar — all browsers
                scrollbarWidth: "none",        /* Firefox */
                msOverflowStyle: "none",       /* IE / Edge legacy */
              }}
            >
              {/* Hide scrollbar for Chrome / Safari */}
              <style>{`
                .tabs-row::-webkit-scrollbar { display: none; }
              `}</style>

              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`
                    flex-shrink-0
                    px-4 py-2.5
                    sm:px-6 sm:py-3
                    rounded-lg
                    text-xs sm:text-sm
                    font-medium
                    transition-all duration-250
                    whitespace-nowrap
                    ${
                      activeTab === tab.key
                        ? "bg-[rgba(83,27,107,0.3)] border-b-2 border-[#00FFA3] text-white"
                        : "text-white/45 hover:text-white bg-transparent"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div
            key={activeTab}
            className="glass-card p-6 sm:p-8 lg:p-10 animate-fade-slide-up"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
              {currentContent.subheading}
            </h2>
            <p className="text-white/65 text-base leading-[1.7] mb-6">
              {currentContent.body}
            </p>
            <ul className="space-y-3 mb-6">
              {currentContent.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#00FFA3] mt-1">•</span>
                  <span className="text-white/65 text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/[0.06] my-6" />
            {activeTab !== "deploy" ? (
              <button
                onClick={() =>
                  handleTabChange(activeTab === "discover" ? "engineer" : "deploy")
                }
                className="text-white/40 text-sm font-medium hover:text-white transition-colors"
              >
                {currentContent.next}
              </button>
            ) : (
              <Link href="/contact" className="btn-primary inline-block">
                {t.nav.cta}
              </Link>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}