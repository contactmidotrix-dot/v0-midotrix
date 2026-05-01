"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <footer className="border-t border-white/[0.06] bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="text-center md:text-start">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Midotrix Logo"
                width={32}
                height={32}
                className="rounded-full object-contain"
              />
              <span className="font-bold text-lg text-white">Midotrix</span>
            </Link>
            <p className="mt-3 text-sm text-white/40 max-w-[280px] mx-auto md:mx-0">
              {t.footer.tagline}
            </p>
          </div>

          {/* Explore Links */}
          <div className="text-center md:text-start">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.explore}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center md:text-start">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/company/midotrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@Midotrix.com"
                className="text-white/60 hover:text-white transition-opacity"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/213798118017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
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
