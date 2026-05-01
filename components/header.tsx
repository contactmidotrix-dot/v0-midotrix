"use client"

import { useState, useRef, useEffect } from "react"
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
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === lang)

  // FIX 1: Logo click handler - scroll to top + navigate to /
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    router.push("/")
  }

  // FIX 2d: Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    if (langDropdownOpen) document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [langDropdownOpen])

  // Home link translation
  const homeLabel = lang === "en" ? "Home" : lang === "fr" ? "Accueil" : "الرئيسية"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(8,8,16,0.85)] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* FIX 1: Logo - clickable to scroll to top + navigate to / */}
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
            {/* Nav Links */}
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

            {/* FIX 2: Language Toggle - Redesigned */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/[0.15] hover:border-white/25 transition-colors"
                style={{ fontSize: "0.88rem" }}
              >
                <span className="text-white font-medium">{currentLang?.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-white/60 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute top-full mt-2 right-0 min-w-[140px] p-1.5 rounded-[10px] animate-fade-slide-up"
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
                        className="flex items-center w-full px-3.5 py-2.5 text-white/85 hover:text-white rounded-[7px] transition-colors"
                        style={{
                          fontSize: "0.88rem",
                          fontFamily: "Inter, sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(83,27,107,0.4)"
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

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              {t.nav.cta}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* FIX 3: Mobile Menu Overlay - Dark Opaque Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(8, 5, 20, 0.98)", backdropFilter: "blur(20px)" }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} h-full w-[280px] p-6 animate-fade-slide-up`}
            style={{
              background: "#0D0818",
              borderLeft: isRTL ? "none" : "1px solid rgba(255,255,255,0.1)",
              borderRight: isRTL ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mt-12 flex flex-col gap-6">
              {/* FIX 3b: Add Home link at top */}
              <button
                onClick={() => {
                  handleLogoClick()
                  setMobileMenuOpen(false)
                }}
                className="text-lg text-white hover:text-white transition-colors text-left"
              >
                {homeLabel}
              </button>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-white hover:text-white transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-white hover:text-white transition-colors"
              >
                {t.nav.faq}
              </Link>

              {/* Language Toggle Mobile - FIX 2: No flags, show full names only */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code)
                        setMobileMenuOpen(false)
                      }}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        lang === l.code
                          ? "bg-[rgba(83,27,107,0.5)] border border-[#531B6B] text-[#00FFA3]"
                          : "bg-white/5 border border-white/10 text-white/70 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Button Mobile */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-center mt-4"
              >
                {t.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
