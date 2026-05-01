import type { Metadata, Viewport } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Midotrix | Intelligent Chat Agents for Ambitious Businesses",
  description:
    "We engineer bespoke AI chat agents that integrate directly into your business operations. Build, train, and deploy a digital mind tailored to your unique workflow.",
  keywords: [
    "AI chat agents",
    "conversational AI",
    "business automation",
    "chatbot development",
    "AI agency",
    "customer service automation",
  ],
  authors: [{ name: "Midotrix" }],
  creator: "Midotrix",
  openGraph: {
    title: "Midotrix | Intelligent Chat Agents for Ambitious Businesses",
    description:
      "We engineer bespoke AI chat agents that integrate directly into your business operations.",
    url: "https://midotrix.com",
    siteName: "Midotrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midotrix | Intelligent Chat Agents",
    description:
      "We engineer bespoke AI chat agents that integrate directly into your business operations.",
  },
}

export const viewport: Viewport = {
  themeColor: "#080810",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} bg-[#080810]`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TEB8JJBV9S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TEB8JJBV9S');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-[#080810] text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
