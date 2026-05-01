"use client"

import { useState, useRef, useEffect } from "react"
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
  const [scrollProgress, setScrollProgress] = useState(0)
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

  // Scroll progress for the indicator bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(Math.min(progress, 1))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

      {/* ── Modern Scroll Indicator — glowing purple pill on right ── */}
      <div
        style={{
          position: "fixed",
          right: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 40,
          width: "3px",
          height: "80px",
          borderRadius: "99px",
          background: "rgba(83,27,107,0.2)",
          overflow: "hidden",
        }}
      >
        {/* Moving fill */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: `${scrollProgress * 100}%`,
            borderRadius: "99px",
            background: "linear-gradient(180deg, #7B2FBE 0%, #00FFA3 100%)",
            boxShadow: "0 0 8px rgba(0,255,163,0.6), 0 0 16px rgba(83,27,107,0.8)",
            transition: "height 0.1s ease",
          }}
        />
      </div>

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

          {/* ── Tabs — FIX: padding-left so "D" is never clipped ── */}
          <div ref={tabsSectionRef} className="scroll-mt-28 lg:scroll-mt-36">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "40px",
                overflowX: "auto",
                // FIX: padding so first letter is never clipped
                paddingLeft: "8px",
                paddingRight: "8px",
                paddingBottom: "2px",
                // Hide scrollbar — all browsers
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`
                .tabs-scroll-row::-webkit-scrollbar { display: none; }
              `}</style>

              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  style={{
                    flexShrink: 0,
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.25s ease",
                    fontFamily: "Inter, sans-serif",
                    ...(activeTab === tab.key
                      ? {
                          background: "rgba(83,27,107,0.3)",
                          borderBottom: "2px solid #00FFA3",
                          color: "white",
                        }
                      : {
                          background: "transparent",
                          borderBottom: "2px solid transparent",
                          color: "rgba(255,255,255,0.45)",
                        }),
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.key)
                      e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.key)
                      e.currentTarget.style.color = "rgba(255,255,255,0.45)"
                  }}
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