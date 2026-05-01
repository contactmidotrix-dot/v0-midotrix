"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, type Language } from "@/lib/i18n"

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "عربية" },
]

export function Header() {
  const router = useRouter()
  const { lang, setLang, isRTL } = useLanguage()
  const t = translations[lang]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === lang)

  // Portal requires client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    router.push("/")
  }

  // Close language dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    if (langDropdownOpen) document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [langDropdownOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const homeLabel =
    lang === "en" ? "Home" : lang === "fr" ? "Accueil" : "الرئيسية"

  // ─── Mobile Menu via React Portal ────────────────────────────────────────────
  // Rendered directly into document.body — completely outside <header>
  // This bypasses the backdrop-filter stacking context that made bg transparent
  const mobileMenu =
    mounted && mobileMenuOpen
      ? createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
            }}
          >
            {/* Backdrop */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(5, 3, 15, 0.97)",
              }}
            />

            {/* Slide-in Panel */}
            <div
              style={{
                position: "absolute",
                top: 0,
                ...(isRTL ? { left: 0 } : { right: 0 }),
                height: "100%",
                width: "280px",
                padding: "24px",
                backgroundColor: "#0A0514",
                borderLeft: isRTL ? "none" : "1px solid rgba(83,27,107,0.3)",
                borderRight: isRTL
                  ? "1px solid rgba(83,27,107,0.3)"
                  : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  padding: "8px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.8)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#00FFA3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
                }
              >
                <X size={22} />
              </button>

              {/* Nav Links */}
              <div
                style={{
                  marginTop: "56px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Home */}
                <button
                  onClick={() => {
                    handleLogoClick()
                    setMobileMenuOpen(false)
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: isRTL ? "right" : "left",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                    padding: 0,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00FFA3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "white")
                  }
                >
                  {homeLabel}
                </button>

                {/* Services */}
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00FFA3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "white")
                  }
                >
                  {t.nav.services}
                </Link>

                {/* FAQ */}
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00FFA3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "white")
                  }
                >
                  {t.nav.faq}
                </Link>

                {/* Language Toggle */}
                <div
                  style={{
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: "12px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Language
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code)
                          setMobileMenuOpen(false)
                        }}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "8px",
                          fontSize: "0.88rem",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          background:
                            lang === l.code
                              ? "rgba(83,27,107,0.45)"
                              : "rgba(255,255,255,0.05)",
                          border:
                            lang === l.code
                              ? "1px solid #531B6B"
                              : "1px solid rgba(255,255,255,0.1)",
                          color: lang === l.code ? "#00FFA3" : "white",
                        }}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary"
                  style={{ textAlign: "center", marginTop: "8px" }}
                >
                  {t.nav.cta}
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )
      : null

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(8,8,16,0.85)] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/logo.jpg"
                alt="Midotrix Logo"
                width={36}
                height={36}
                className="rounded-full object-contain"
              />
              <span className="font-bold text-lg text-white">Midotrix</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium relative group"
                >
                  {t.nav.services}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFA3] transition-all group-hover:w-full" />
                </Link>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium relative group"
                >
                  {t.nav.faq}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFA3] transition-all group-hover:w-full" />
                </Link>
              </div>

              {/* Language Toggle Desktop */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/[0.15] hover:border-white/25 transition-colors"
                  style={{ fontSize: "0.88rem" }}
                >
                  <span className="text-white font-medium">
                    {currentLang?.label}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white/60 transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langDropdownOpen && (
                  <div
                    className="absolute top-full mt-2 right-0 min-w-[140px] p-1.5 rounded-[10px]"
                    style={{
                      background: "#1A0D24",
                      border: "1px solid rgba(83,27,107,0.5)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                    }}
                  >
                    {languages
                      .filter((l) => l.code !== lang)
                      .map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code)
                            setLangDropdownOpen(false)
                          }}
                          className="flex items-center w-full px-3.5 py-2.5 text-white rounded-[7px] transition-colors"
                          style={{
                            fontSize: "0.88rem",
                            fontFamily: "Inter, sans-serif",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(83,27,107,0.4)"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent"
                          }}
                        >
                          {l.label}
                        </button>
                      ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="btn-primary !py-2.5 !px-5 text-sm"
              >
                {t.nav.cta}
              </Link>
            </nav>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white/80 hover:text-white"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — rendered outside <header> via Portal */}
      {mobileMenu}
    </>
  )
}