"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function Footer() {
  const router = useRouter()
  const { lang } = useLanguage()
  const t = translations[lang]
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  // FIX 1: Logo click handler - scroll to top + navigate to /
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    router.push("/")
  }

  return (
    <footer className="border-t border-white/[0.06] bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* FIX 1: Logo & Tagline - clickable */}
          <div className="text-center md:text-start">
            <button
              onClick={handleLogoClick}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/logo.jpg"
                alt="Midotrix Logo"
                width={32}
                height={32}
                className="rounded-full object-contain"
              />
              <span className="font-bold text-lg text-white">Midotrix</span>
            </button>
            <p className="mt-3 text-sm text-white/40 max-w-[280px] mx-auto md:mx-0">
              {t.footer.tagline}
            </p>
          </div>

          {/* FIX 3c: Explore Links - renamed section */}
          <div className="text-center md:text-start">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.explore}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleLogoClick}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {lang === "en" ? "Home" : lang === "fr" ? "Accueil" : "الرئيسية"}
                </button>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* FIX 9: Connect - Social Icons with brand colors on hover */}
          <div className="text-center md:text-start">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/company/midotrix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Linkedin
                  className="w-5 h-5 transition-colors duration-200"
                  style={{
                    color: hoveredIcon === "linkedin" ? "#0A66C2" : "rgba(255,255,255,0.55)",
                  }}
                />
              </a>
              <a
                href="mailto:contact@Midotrix.com"
                aria-label="Email"
                onMouseEnter={() => setHoveredIcon("email")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Mail
                  className="w-5 h-5 transition-colors duration-200"
                  style={{
                    color: hoveredIcon === "email" ? "#00FFA3" : "rgba(255,255,255,0.55)",
                  }}
                />
              </a>
              <a
                href="https://wa.me/213798118017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onMouseEnter={() => setHoveredIcon("whatsapp")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <MessageCircle
                  className="w-5 h-5 transition-colors duration-200"
                  style={{
                    color: hoveredIcon === "whatsapp" ? "#25D366" : "rgba(255,255,255,0.55)",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-xs text-white/20">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
