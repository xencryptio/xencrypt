import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
title: {
  default: "XEncrypt",
  template: "%s | XEncrypt",
},
description:
  "Future-proof your data with Post-Quantum Cryptography. XEncrypt provides NIST-aligned, enterprise-grade security.",
applicationName: "XEncrypt",
openGraph: {
  title: "XEncrypt",
  description:
    "Future-proof your data with Post-Quantum Cryptography. XEncrypt provides NIST-aligned, enterprise-grade security.",
  url: "/",
  siteName: "XEncrypt",
},
    generator: 'v0.dev'
}

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode
}>) {
return (
  <html lang="en">
    <head>
      <style>{`
html {
font-family: ${GeistSans.style.fontFamily};
--font-sans: ${GeistSans.variable};
--font-mono: ${GeistMono.variable};
}
      `}</style>
    </head>
    <body>{children}</body>
  </html>
)
}
