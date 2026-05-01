"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, type Language } from "@/lib/i18n"

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "عربية", flag: "🇸🇦" },
]

export function Header() {
  const { lang, setLang, isRTL } = useLanguage()
  const t = translations[lang]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const currentLang = languages.find((l) => l.code === lang)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(8,8,16,0.85)] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Midotrix Logo"
              width={36}
              height={36}
              className="rounded-full object-contain"
            />
            <span className="font-bold text-lg text-white">Midotrix</span>
          </Link>

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

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-sm"
              >
                <span>{currentLang?.flag}</span>
                <span className="text-white/80">{currentLang?.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-white/60 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 glass-card p-2 min-w-[140px] animate-fade-slide-up">
                  {languages
                    .filter((l) => l.code !== lang)
                    .map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code)
                          setLangDropdownOpen(false)
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} h-full w-[280px] bg-[#0D0D1A] border-${isRTL ? "r" : "l"} border-white/10 p-6 animate-fade-slide-up`}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mt-12 flex flex-col gap-6">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-white/80 hover:text-white transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-white/80 hover:text-white transition-colors"
              >
                {t.nav.faq}
              </Link>

              {/* Language Toggle Mobile */}
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
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                        lang === l.code
                          ? "bg-[rgba(83,27,107,0.5)] border border-[#531B6B] text-white"
                          : "bg-white/5 border border-white/10 text-white/70 hover:text-white"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
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
