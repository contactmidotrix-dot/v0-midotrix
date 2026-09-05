"use client"

import { useState } from "react"
import { useForm } from "@formspree/react"
import Link from "next/link"
import { CheckCircle, UploadCloud, Play, ShieldCheck, FileCheck2, MailCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

interface QualData {
  restaurantName: string
  branchCount: string
  country: string
  platforms: string[]
  posSystem: string
  currentProcess: string
  email: string
  whatsapp: string
  role: string
}

interface FormErrors {
  [key: string]: string
}

const stepIcons = [FileCheck2, UploadCloud, MailCheck]

// Drop the real Loom embed/share URL here when available.
const LOOM_VIDEO_URL: string | null = null

export default function FreeAnalysisPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const f = t.freeAnalysis.form
  const [state, handleFormspreeSubmit] = useForm("xpqkvzje")

  const [data, setData] = useState<QualData>({
    restaurantName: "",
    branchCount: "",
    country: "",
    platforms: [],
    posSystem: "",
    currentProcess: "",
    email: "",
    whatsapp: "",
    role: "",
  })
  const [posFile, setPosFile] = useState<File | null>(null)
  const [platformFile, setPlatformFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (field: keyof QualData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const togglePlatform = (option: string) => {
    setData((prev) => {
      const has = prev.platforms.includes(option)
      return { ...prev, platforms: has ? prev.platforms.filter((p) => p !== option) : [...prev.platforms, option] }
    })
    if (errors.platforms) setErrors((prev) => ({ ...prev, platforms: "" }))
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!data.restaurantName.trim()) newErrors.restaurantName = f.required
    if (!data.branchCount) newErrors.branchCount = f.required
    if (!data.country) newErrors.country = f.required
    if (data.platforms.length === 0) newErrors.platforms = f.required
    if (!data.currentProcess) newErrors.currentProcess = f.required
    if (!data.email.trim()) {
      newErrors.email = f.required
    } else if (!validateEmail(data.email)) {
      newErrors.email = f.invalidEmail
    }
    if (!data.whatsapp.trim()) newErrors.whatsapp = f.required
    if (!data.role) newErrors.role = f.required
    if (!posFile && !platformFile) newErrors.files = f.required
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const formspreeData = new FormData()
      formspreeData.append("restaurant_name", data.restaurantName)
      formspreeData.append("branch_count", data.branchCount)
      formspreeData.append("country", data.country)
      formspreeData.append("platforms", data.platforms.join(", "))
      formspreeData.append("pos_system", data.posSystem)
      formspreeData.append("current_process", data.currentProcess)
      formspreeData.append("email", data.email)
      formspreeData.append("whatsapp", data.whatsapp)
      formspreeData.append("role", data.role)
      if (posFile) formspreeData.append("pos_file", posFile)
      if (platformFile) formspreeData.append("platform_file", platformFile)
      formspreeData.append("_subject", "New Free Analysis Request — Midotrix")
      await handleFormspreeSubmit(formspreeData)
    } catch (error) {
      console.error("Free analysis submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const btnSelect = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm border transition-colors ${
      active
        ? "bg-[#531B6B]/40 border-[#00FFA3] text-white"
        : "bg-white/[0.02] border-white/15 text-white/60 hover:border-white/30"
    }`

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#080810]">
        <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="fixed inset-0 bg-purple-atmosphere pointer-events-none" />
        <Header />
        <main className="relative z-10 pt-28 lg:pt-36 pb-20 flex items-center justify-center min-h-[80vh]">
          <div className="glass-card p-10 max-w-lg mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-[#00FFA3] mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">{f.success.title}</h2>
            <p className="text-white/65 leading-relaxed">{f.success.body}</p>
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
          {/* Heading */}
          <p className="text-center text-[#00FFA3] text-xs font-semibold tracking-wider mb-4">
            {t.freeAnalysis.preTitle}
          </p>
          <h1
            className="text-center text-[clamp(1.9rem,4.5vw,2.8rem)] leading-[1.15] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.freeAnalysis.heading}
          </h1>
          <p className="text-center text-white/60 text-sm max-w-[560px] mx-auto mb-10">
            {t.freeAnalysis.subheading}
          </p>

          {/* Compact video reminder */}
          <div className="glass-card relative aspect-video w-full max-w-xl mx-auto overflow-hidden mb-12">
            {LOOM_VIDEO_URL ? (
              <iframe src={LOOM_VIDEO_URL} className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(83,27,107,0.22) 0%, rgba(8,8,16,0.9) 70%)" }}
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white/50 ml-0.5" fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* What happens after */}
          <div className="mb-12">
            <h3 className="text-white text-lg font-bold text-center mb-6">{t.freeAnalysis.whatHappens.heading}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.freeAnalysis.whatHappens.steps.map((step, index) => {
                const Icon = stepIcons[index]
                return (
                  <div key={index} className="glass-card p-5 text-center">
                    <Icon className="w-6 h-6 text-[#00FFA3] mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-white text-sm font-semibold mb-1">{step.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{step.body}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 lg:p-10">
            {/* Section: Qualification */}
            <h3 className="text-white font-bold mb-5">{f.sectionQualification}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.restaurantName}</label>
                <input
                  type="text"
                  value={data.restaurantName}
                  onChange={(e) => handleChange("restaurantName", e.target.value)}
                  placeholder={f.restaurantNamePlaceholder}
                  className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00FFA3] transition-colors"
                />
                {errors.restaurantName && <p className="text-red-400 text-xs mt-1">{errors.restaurantName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.posSystem}</label>
                <input
                  type="text"
                  value={data.posSystem}
                  onChange={(e) => handleChange("posSystem", e.target.value)}
                  placeholder={f.posSystemPlaceholder}
                  className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00FFA3] transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">{f.branchCount}</label>
              <div className="flex flex-wrap gap-2">
                {f.branchCountOptions.map((opt) => (
                  <button key={opt} type="button" onClick={() => handleChange("branchCount", opt)} className={btnSelect(data.branchCount === opt)}>
                    {opt}
                  </button>
                ))}
              </div>
              {errors.branchCount && <p className="text-red-400 text-xs mt-1">{errors.branchCount}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">{f.country}</label>
              <div className="flex flex-wrap gap-2">
                {f.countryOptions.map((opt) => (
                  <button key={opt} type="button" onClick={() => handleChange("country", opt)} className={btnSelect(data.country === opt)}>
                    {opt}
                  </button>
                ))}
              </div>
              {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">{f.platforms}</label>
              <div className="flex flex-wrap gap-2">
                {f.platformsOptions.map((opt) => (
                  <button key={opt} type="button" onClick={() => togglePlatform(opt)} className={btnSelect(data.platforms.includes(opt))}>
                    {opt}
                  </button>
                ))}
              </div>
              {errors.platforms && <p className="text-red-400 text-xs mt-1">{errors.platforms}</p>}
            </div>

            <div className="mb-10">
              <label className="block text-sm font-semibold text-white mb-2">{f.currentProcess}</label>
              <div className="flex flex-wrap gap-2">
                {f.currentProcessOptions.map((opt) => (
                  <button key={opt} type="button" onClick={() => handleChange("currentProcess", opt)} className={btnSelect(data.currentProcess === opt)}>
                    {opt}
                  </button>
                ))}
              </div>
              {errors.currentProcess && <p className="text-red-400 text-xs mt-1">{errors.currentProcess}</p>}
            </div>

            {/* Section: Contact */}
            <h3 className="text-white font-bold mb-5 pt-6 border-t border-white/10">{f.sectionContact}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.email}</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder={f.emailPlaceholder}
                  className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00FFA3] transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.whatsapp}</label>
                <input
                  type="tel"
                  value={data.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  placeholder={f.whatsappPlaceholder}
                  className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00FFA3] transition-colors"
                />
                {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.role}</label>
                <div className="flex flex-wrap gap-2">
                  {f.roleOptions.map((opt) => (
                    <button key={opt} type="button" onClick={() => handleChange("role", opt)} className={btnSelect(data.role === opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
              </div>
            </div>

            {/* Section: Files */}
            <h3 className="text-white font-bold mb-5 pt-6 border-t border-white/10">{f.sectionFiles}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-3">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.posFile}</label>
                <label className="flex items-center gap-3 w-full bg-white/[0.03] border border-dashed border-white/20 rounded-lg px-4 py-4 text-sm cursor-pointer hover:border-[#00FFA3]/60 transition-colors">
                  <UploadCloud className="w-5 h-5 text-[#00FFA3] shrink-0" strokeWidth={1.5} />
                  <span className="text-white/60 truncate">{posFile ? posFile.name : f.posFileHint}</span>
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    className="hidden"
                    onChange={(e) => setPosFile(e.target.files?.[0] ?? null)}
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">{f.platformFile}</label>
                <label className="flex items-center gap-3 w-full bg-white/[0.03] border border-dashed border-white/20 rounded-lg px-4 py-4 text-sm cursor-pointer hover:border-[#00FFA3]/60 transition-colors">
                  <UploadCloud className="w-5 h-5 text-[#00FFA3] shrink-0" strokeWidth={1.5} />
                  <span className="text-white/60 truncate">{platformFile ? platformFile.name : f.platformFileHint}</span>
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    className="hidden"
                    onChange={(e) => setPlatformFile(e.target.files?.[0] ?? null)}
                  />
                </label>
              </div>
            </div>
            {errors.files && <p className="text-red-400 text-xs mb-2">{errors.files}</p>}
            <p className="text-white/35 text-xs mb-8">{f.noSecondFileYet}</p>

            {/* Trust note */}
            <div className="flex items-start gap-2 mb-8 text-white/45 text-xs">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#00FFA3]" strokeWidth={1.5} />
              <p>{f.trustNote}</p>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary w-full !py-3.5 disabled:opacity-60"
            >
              {isSubmitting ? f.submitting : f.submit}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
