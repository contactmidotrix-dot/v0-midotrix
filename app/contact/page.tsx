"use client"

import { useState } from "react"
import { useForm } from "@formspree/react"
import Link from "next/link"
import { MapPin, Mail, Globe, Loader2, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [state, handleFormspreeSubmit] = useForm("xpqkvzje")

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = t.contact.form.required
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.required
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.form.invalidEmail
    }
    if (!formData.message.trim()) newErrors.message = t.contact.form.required
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const formspreeData = new FormData()
      formspreeData.append("name", formData.name)
      formspreeData.append("email", formData.email)
      formspreeData.append("message", formData.message)
      formspreeData.append("_subject", "New General Inquiry — Midotrix")
      await handleFormspreeSubmit(formspreeData)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#080810]">
        <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="fixed inset-0 bg-purple-atmosphere pointer-events-none" />
        <Header />
        <main className="relative z-10 pt-28 lg:pt-36 pb-20 flex items-center justify-center min-h-[80vh]">
          <div className="glass-card p-10 max-w-lg mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-[#00FFA3] mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">{t.contact.form.success.title}</h2>
            <p className="text-white/65 leading-relaxed">{t.contact.form.success.body}</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080810]">
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-purple-atmosphere pointer-events-none" />
      <Header />

      <main className="relative z-10 pt-28 lg:pt-36 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#00FFA3] text-xs font-semibold tracking-wider mb-4">
            {t.contact.preTitle}
          </p>
          <h1
            className="text-center text-[clamp(2rem,5vw,3rem)] leading-[1.1] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.contact.heading}
          </h1>
          <p className="text-center text-white/60 text-sm max-w-[520px] mx-auto mb-4">{t.contact.subtitle}</p>
          <p className="text-center text-white/50 text-sm mb-10">
            {t.contact.freeAnalysisPrompt}{" "}
            <Link href="/free-analysis" className="text-[#00FFA3] hover:underline font-medium">
              {t.contact.freeAnalysisLink}
            </Link>
          </p>

          {/* Info Strip */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#00FFA3]" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-white/40">{t.contact.info.headquarters}</p>
                <p className="text-sm text-white">{t.contact.info.headquartersValue}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#00FFA3]" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-white/40">{t.contact.info.email}</p>
                <a href="mailto:contact@midotrix.com" className="text-sm text-white hover:text-[#00FFA3] transition-colors">
                  {t.contact.info.emailValue}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#00FFA3]" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-white/40">{t.contact.info.global}</p>
                <p className="text-sm text-white">{t.contact.info.globalValue}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 lg:p-10">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">{t.contact.form.fullName}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t.contact.form.fullNamePlaceholder}
                className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors ${
                  errors.name ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">{t.contact.form.workEmail}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t.contact.form.workEmailPlaceholder}
                className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors ${
                  errors.email ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-white mb-2">{t.contact.form.message}</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={t.contact.form.messagePlaceholder}
                rows={5}
                className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || state.submitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting || state.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>...</span>
                </>
              ) : (
                t.contact.form.submit
              )}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
