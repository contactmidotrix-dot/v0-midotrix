"use client"

import { useState } from "react"
import { useForm } from "@formspree/react"
import { MapPin, Mail, Globe, Loader2, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

interface FormData {
  name: string
  email: string
  website: string
  role: string
  budget: string
  company_size: string
  challenge: string
  expectation: string
  ai_vision: string
}

interface FormErrors {
  [key: string]: string
}

const getLocalTimestamp = () => {
  const now = new Date()
  return now.toLocaleString("en-GB", {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

// ─── FIX: Budget labels — words instead of < > symbols ───────────────────────
const getBudgetOptions = (lang: string) => {
  if (lang === "ar") {
    return [
      "أقل من 10,000$",
      "10,000$ – 50,000$",
      "أكثر من 50,000$",
      "لست متأكداً بعد",
    ]
  }
  if (lang === "fr") {
    return [
      "Moins de 10 000$",
      "10 000$ – 50 000$",
      "Plus de 50 000$",
      "Pas encore sûr",
    ]
  }
  return [
    "Less than $10k",
    "$10k – $50k",
    "More than $50k",
    "Not sure yet",
  ]
}

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [state, handleFormspreeSubmit] = useForm("xpqkvzje")

  const budgetOptions = getBudgetOptions(lang)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    role: "",
    budget: "",
    company_size: "",
    challenge: "",
    expectation: "",
    ai_vision: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = t.contact.form.required
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.required
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.form.invalidEmail
    }
    if (!formData.role) newErrors.role = t.contact.form.required
    if (!formData.budget) newErrors.budget = t.contact.form.required
    if (!formData.company_size) newErrors.company_size = t.contact.form.required
    if (!formData.challenge.trim()) newErrors.challenge = t.contact.form.required
    if (!formData.ai_vision) newErrors.ai_vision = t.contact.form.required
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const timestamp = getLocalTimestamp()
      await fetch("https://api.sheetmonkey.io/form/5vCAPkuDuo8YfQWQrzMnmZ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _timestamp: timestamp }),
      })
      const formspreeData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formspreeData.append(key, value)
      })
      formspreeData.append("_subject", "New Project Request from Midotrix")
      formspreeData.append("_timestamp", timestamp)
      await handleFormspreeSubmit(formspreeData)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
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
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.contact.form.success.title}
            </h2>
            <p className="text-white/65 leading-relaxed">
              {t.contact.form.success.body}
            </p>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#00FFA3] text-xs font-semibold tracking-wider mb-4">
            {t.contact.preTitle}
          </p>
          <h1
            className="text-center text-[clamp(2rem,5vw,3rem)] leading-[1.1] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.contact.heading}
          </h1>
          <p className="text-center text-white/60 text-sm max-w-[580px] mx-auto mb-10">
            {t.contact.subtitle}
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
                <a
                  href="mailto:contact@midotrix.com"
                  className="text-sm text-white hover:text-[#00FFA3] transition-colors"
                >
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  {t.contact.form.fullName}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder={t.contact.form.fullNamePlaceholder}
                  className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors ${
                    errors.name ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  {t.contact.form.workEmail}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder={t.contact.form.workEmailPlaceholder}
                  className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors ${
                    errors.email ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Company Website */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  {t.contact.form.website}
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  placeholder={t.contact.form.websitePlaceholder}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  {t.contact.form.role}
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors appearance-none ${
                    errors.role ? "border-red-500" : "border-white/10"
                  }`}
                >
                  <option value="" className="bg-[#0D0D1A]">Select...</option>
                  {t.contact.form.roleOptions.map((option, i) => (
                    <option key={i} value={option} className="bg-[#0D0D1A]">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.role && (
                  <p className="mt-1 text-xs text-red-500">{errors.role}</p>
                )}
              </div>
            </div>

            {/* ── Budget Range — FIX: words instead of < > symbols ── */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-white mb-3">
                {t.contact.form.budget}
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((option, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleChange("budget", option)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      formData.budget === option
                        ? "bg-[rgba(83,27,107,0.5)] border border-[#531B6B] text-white"
                        : "bg-white/[0.04] border border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p className="mt-1 text-xs text-red-500">{errors.budget}</p>
              )}
            </div>

            {/* Company Size */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-white mb-3">
                {t.contact.form.companySize}
              </label>
              <div className="flex flex-wrap gap-2">
                {t.contact.form.companySizeOptions.map((option, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleChange("company_size", option)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      formData.company_size === option
                        ? "bg-[rgba(83,27,107,0.5)] border border-[#531B6B] text-white"
                        : "bg-white/[0.04] border border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.company_size && (
                <p className="mt-1 text-xs text-red-500">{errors.company_size}</p>
              )}
            </div>

            {/* Challenge */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-white mb-2">
                {t.contact.form.challenge}
              </label>
              <textarea
                value={formData.challenge}
                onChange={(e) => handleChange("challenge", e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 bg-white/[0.04] border rounded-lg text-white focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors resize-none ${
                  errors.challenge ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.challenge && (
                <p className="mt-1 text-xs text-red-500">{errors.challenge}</p>
              )}
            </div>

            {/* Expectation */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-white mb-2">
                {t.contact.form.expectation}{" "}
                <span className="text-white/35 font-normal">
                  {t.contact.form.optional}
                </span>
              </label>
              <textarea
                value={formData.expectation}
                onChange={(e) => handleChange("expectation", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[rgba(83,27,107,0.6)] transition-colors resize-none"
              />
            </div>

            {/* AI Vision */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-white mb-3">
                {t.contact.form.aiVision}
              </label>
              <div className="space-y-2">
                {t.contact.form.aiVisionOptions.map((option, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleChange("ai_vision", option)}
                    className={`w-full px-4 py-3 rounded-lg text-sm text-left transition-all ${
                      formData.ai_vision === option
                        ? "bg-[rgba(83,27,107,0.5)] border border-[#531B6B] text-white"
                        : "bg-white/[0.04] border border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.ai_vision && (
                <p className="mt-1 text-xs text-red-500">{errors.ai_vision}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || state.submitting}
              className="btn-primary w-full mt-8 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting || state.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
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