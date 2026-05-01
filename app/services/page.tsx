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
  // FIX 5: Reference to the tabs section for scroll-to-top on tab change
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

  // FIX 5: Handle tab change with scroll to top of tabs section
  const handleTabChange = (newTab: Tab) => {
    setActiveTab(newTab)
    setTimeout(() => {
      tabsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-[#080810]">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      {/* Purple Atmosphere */}
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

          {/* FIX 5: Tab Navigation - with ref for scroll target */}
          <div ref={tabsSectionRef} className="scroll-mt-28 lg:scroll-mt-36">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-2 lg:gap-4 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-250 ${
                    activeTab === tab.key
                      ? "bg-[rgba(83,27,107,0.3)] border-b-2 border-[#00FFA3] text-white"
                      : "text-white/45 hover:text-white bg-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div
            key={activeTab}
            className="glass-card p-8 lg:p-10 animate-fade-slide-up"
          >
            {/* Sub-heading */}
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
              {currentContent.subheading}
            </h2>

            {/* Body */}
            <p className="text-white/65 text-base leading-[1.7] mb-6">
              {currentContent.body}
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-6">
              {currentContent.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#00FFA3] mt-1">•</span>
                  <span className="text-white/65 text-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Separator */}
            <div className="border-t border-white/[0.06] my-6" />

            {/* FIX 5: Navigation with scroll-to-top on "Next" click */}
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
