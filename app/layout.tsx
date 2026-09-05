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
  title: "Midotrix | Financial Reconciliation for Restaurants — ReconFlow",
  description:
    "Midotrix builds ReconFlow, a financial reconciliation system for restaurants and restaurant chains in the Gulf. We compare your POS and delivery platform data to find the revenue you're silently losing.",
  keywords: [
    "restaurant reconciliation",
    "revenue leakage restaurants",
    "delivery platform settlement",
    "POS reconciliation",
    "ReconFlow",
    "restaurant finance automation Gulf",
  ],
  authors: [{ name: "Midotrix" }],
  creator: "Midotrix",
  openGraph: {
    title: "Midotrix | Financial Reconciliation for Restaurants — ReconFlow",
    description:
      "ReconFlow compares your restaurant's POS and delivery platform data to uncover missing settlements, unexpected settlements, and revenue leakage.",
    url: "https://midotrix.com",
    siteName: "Midotrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midotrix | Financial Reconciliation for Restaurants",
    description:
      "ReconFlow compares your restaurant's POS and delivery platform data to uncover revenue leakage — free trial analysis available.",
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
          {/*
           * ── GLOBAL PURPLE GLOW — top of every page ──────────────────────
           * A single soft radial glow at the very top-center of the viewport.
           * Looks like a subtle light source bleeding from above.
           * NOT a grid. NOT full-page color. Just atmosphere.
           */}
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "900px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, rgba(83,27,107,0.28) 0%, rgba(83,27,107,0.08) 45%, transparent 72%)",
              pointerEvents: "none",
              zIndex: 0,
              // No grid — clean atmosphere only
            }}
          />
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}