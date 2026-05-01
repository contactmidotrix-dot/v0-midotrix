"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./i18n"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")
  const isRTL = lang === "ar"

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
  }, [lang, isRTL])

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
