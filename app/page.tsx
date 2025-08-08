'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lock, Zap, Globe, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'

export default function XencryptLanding() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [email, setEmail] = useState('')

const scrollToSection = (sectionId: string) => {
document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
setIsMenuOpen(false)
}

const handleGetStarted = () => {
alert('Redirecting to sign up... (Demo)')
}

const handleContactSales = () => {
alert('Opening contact form... (Demo)')
}

const handleNewsletterSignup = (e: React.FormEvent) => {
e.preventDefault()
if (email) {
  alert(`Thank you for subscribing with ${email}! (Demo)`)
  setEmail('')
}
}

return (
<div className="flex min-h-screen flex-col bg-white">
  {/* Header */}
  <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => scrollToSection('top')}
        className="group flex items-center gap-3 focus:outline-none"
        aria-label="Go to top"
      >
        <Image
          src="/images/xencrypt-logo.png"
          alt="xencrypt logo"
          width={48}
          height={48}
          className="rounded-md object-contain shadow-sm ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105"
          priority
        />
        <span className="text-2xl md:text-[28px] font-extrabold tracking-tight text-gray-900">
          XEncrypt
        </span>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden items-center space-x-8 md:flex">
        <button onClick={() => scrollToSection('features')} className="text-sm font-medium transition-colors hover:text-fuchsia-600">
          Features
        </button>
        <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium transition-colors hover:text-fuchsia-600">
          Solutions
        </button>
        <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium transition-colors hover:text-fuchsia-600">
          Pricing
        </button>
        <button onClick={() => scrollToSection('about')} className="text-sm font-medium transition-colors hover:text-fuchsia-600">
          About
        </button>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden items-center space-x-3 md:flex">
        <Button variant="ghost" onClick={handleContactSales}>
          Contact Sales
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            window.location.href = 'https://xencrypt.netlify.app/'
          }}
          aria-label="Try xencrypt now"
        >
          Try Now
        </Button>
        <Button onClick={handleGetStarted}>Get Started</Button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="border-t bg-white md:hidden">
        <div className="mx-auto w-full max-w-7xl space-y-4 px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection('features')} className="block text-sm font-medium hover:text-fuchsia-600">
            Features
          </button>
          <button onClick={() => scrollToSection('solutions')} className="block text-sm font-medium hover:text-fuchsia-600">
            Solutions
          </button>
          <button onClick={() => scrollToSection('pricing')} className="block text-sm font-medium hover:text-fuchsia-600">
            Pricing
          </button>
          <button onClick={() => scrollToSection('about')} className="block text-sm font-medium hover:text-fuchsia-600">
            About
          </button>
          <div className="flex flex-col space-y-2 pt-4">
            <Button variant="ghost" onClick={handleContactSales}>
              Contact Sales
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                window.location.href = 'https://xencrypt.netlify.app/'
              }}
              aria-label="Try xencrypt now"
            >
              Try Now
            </Button>
            <Button onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
      </div>
    )}
  </header>

  <main id="top" className="flex-1">
    {/* Hero Section (copy from poster, no full poster image) */}
    <section className="w-full bg-gradient-to-br from-violet-900 via-fuchsia-800 to-purple-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white backdrop-blur">
            {'🚀 Now Supporting NIST Post-Quantum Standards'}
          </Badge>

          <h1 className="max-w-5xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {'Future-Proof Your Data with '}
            <span className="text-amber-400">{'Post-Quantum Cryptography'}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base text-purple-100 sm:text-lg md:text-xl">
            {"Secure your organization with Xencrypt’s post-quantum cryptography solutions"}
          </p>
          <p className="mt-1 text-fuchsia-200">{'Defend your data at the Speed of the Future'}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={handleGetStarted} className="px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('features')}
              className="border-white/50 bg-white/10 px-8 py-4 text-lg text-white hover:bg-white hover:text-fuchsia-700"
            >
              Learn More
            </Button>
          </div>

          {/* Feature bubbles from poster copy */}
          <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-white">Quantum-Resistant</h3>
              <p className="mt-1 text-sm text-purple-100">
                {'Identify NIST approved & deprecated algorithms at one place'}
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Globe className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-semibold text-white">Seamless Migration</h3>
              <p className="mt-1 text-sm text-purple-100">
                {'From Classical to Quantum-Safe We Make It Effortless'}
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-white">Easy Integration</h3>
              <p className="mt-1 text-sm text-purple-100">
                {'Seamless APIs & agents to enable rapid Migration'}
              </p>
            </div>
          </div>

          <div className="mt-8 text-purple-100">
            <a href="https://xencrypt.io" target="_blank" rel="noreferrer" className="underline decoration-amber-400 underline-offset-4">
              https://xencrypt.io
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Comprehensive Post-Quantum Security
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-gray-600 md:text-lg">
            Our platform provides end-to-end post-quantum cryptographic solutions for enterprises of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 transition-colors hover:border-fuchsia-200">
            <CardHeader>
              <Lock className="mb-2 h-10 w-10 text-fuchsia-600" />
              <CardTitle>Key Management</CardTitle>
              <CardDescription>
                Secure generation, distribution, and lifecycle management of post-quantum cryptographic keys.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  Hardware Security Module (HSM) integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  Automated key rotation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  Multi-tenant architecture
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 transition-colors hover:border-fuchsia-200">
            <CardHeader>
              <CheckCircle className="mb-2 h-10 w-10 text-emerald-600" />
              <CardTitle>Digital Signatures</CardTitle>
              <CardDescription>
                NIST-standardized post-quantum digital signature algorithms for document integrity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  CRYSTALS-Dilithium support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  FALCON algorithm integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  Batch verification capabilities
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 transition-colors hover:border-fuchsia-200">
            <CardHeader>
              <Zap className="mb-2 h-10 w-10 text-purple-600" />
              <CardTitle>Encryption Services</CardTitle>
              <CardDescription>High-performance post-quantum encryption for data at rest and in transit.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  CRYSTALS-Kyber implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  Hybrid classical-quantum approach
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  Real-time encryption/decryption
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Solutions Section (no poster, keep exact copy) */}
    <section id="solutions" className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Industry Solutions</h2>
          <p className="mx-auto mt-3 max-w-3xl text-gray-600 md:text-lg">
            {'Tailored post-quantum cryptography solutions for your industry\'s specific security requirements.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="p-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Financial Services</CardTitle>
              <CardDescription className="text-lg">
                Protect financial transactions & customer data against quantum threats.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Quantum-safe payment processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Regulatory compliance (PCI DSS, SOX)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>High-frequency trading security</span>
                </li>
              </ul>
              <Button className="mt-6" onClick={handleContactSales}>
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Healthcare</CardTitle>
              <CardDescription className="text-lg">
                Secure patient data & medical records with quantum-resistant encryption.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>HIPAA-compliant encryption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Medical device security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Telemedicine protection</span>
                </li>
              </ul>
              <Button className="mt-6" onClick={handleContactSales}>
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Government</CardTitle>
              <CardDescription className="text-lg">
                Meet federal security standards with NIST-approved post-quantum algorithms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>FIPS 140-2 Level 3 compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Classified data protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Critical infrastructure security</span>
                </li>
              </ul>
              <Button className="mt-6" onClick={handleContactSales}>
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Technology</CardTitle>
              <CardDescription className="text-lg">
                Integrate quantum-safe security into your applications & infrastructure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>API-first architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Cloud-native deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>Developer-friendly SDKs</span>
                </li>
              </ul>
              <Button className="mt-6" onClick={handleContactSales}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-800">
            {'Even quantum has limits — and we are that limit'}
          </p>
        </div>
      </div>
    </section>

    
    {/* About / Signup Section */}
    <section id="about" className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose xencrypt?</h2>
            <p className="text-gray-600 md:text-lg">
              As quantum computing advances, traditional cryptographic methods become vulnerable. xencrypt provides the
              security infrastructure you need to protect your data against both current and future threats.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-6 w-6 text-emerald-500" />
                <div>
                  <h3 className="font-semibold">NIST-Approved Algorithms</h3>
                  <p className="text-gray-600">Built on standardized post-quantum cryptographic algorithms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-6 w-6 text-emerald-500" />
                <div>
                  <h3 className="font-semibold">Enterprise-Grade Security</h3>
                  <p className="text-gray-600">Military-grade encryption with quantum-resistant protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-6 w-6 text-emerald-500" />
                <div>
                  <h3 className="font-semibold">Seamless Integration</h3>
                  <p className="text-gray-600">Easy-to-use APIs and SDKs for rapid deployment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold">Ready to Get Started?</h3>
            <form onSubmit={handleNewsletterSignup} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Start Free Trial
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">No credit card required. 30-day free trial.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full bg-fuchsia-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Don&apos;t Wait for Quantum Computers</h2>
          <p className="mx-auto mt-3 max-w-3xl text-fuchsia-100 md:text-lg">
            The quantum threat is real and approaching fast. Secure your organization&apos;s future with post-quantum
            cryptography today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" onClick={handleGetStarted} className="px-8 py-4 text-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="w-full bg-gray-900 text-white">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/images/xencrypt-logo.png" alt="xencrypt logo" width={28} height={28} className="rounded" />
            <span className="text-xl font-bold">xencrypt</span>
          </div>
          <p className="text-gray-400">Leading the future of quantum-safe cryptography for enterprises worldwide.</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => scrollToSection('features')} className="transition-colors hover:text-white">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('pricing')} className="transition-colors hover:text-white">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                API Documentation
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Security
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                About Us
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Careers
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Blog
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Compliance
              </button>
            </li>
            <li>
              <button onClick={handleContactSales} className="transition-colors hover:text-white">
                Cookie Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>{`© ${new Date().getFullYear()} xencrypt. All rights reserved.`}</p>
      </div>
    </div>
  </footer>
</div>
)
}
