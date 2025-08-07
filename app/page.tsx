'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Zap, Globe, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function XencryptLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleGetStarted = () => {
    alert("Redirecting to sign up... (Demo)")
  }

  const handleContactSales = () => {
    alert("Opening contact form... (Demo)")
  }

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with ${email}! (Demo)`)
      setEmail("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">xencrypt</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium hover:text-blue-600 transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={handleContactSales}>
              Contact Sales
            </Button>
            <Button onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block text-sm font-medium hover:text-blue-600">
                Features
              </button>
              <button onClick={() => scrollToSection('solutions')} className="block text-sm font-medium hover:text-blue-600">
                Solutions
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block text-sm font-medium hover:text-blue-600">
                Pricing
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-sm font-medium hover:text-blue-600">
                About
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" onClick={handleContactSales}>
                  Contact Sales
                </Button>
                <Button onClick={handleGetStarted}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Badge variant="secondary" className="px-4 py-2">
                🚀 Now Supporting NIST Post-Quantum Standards
              </Badge>
              
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Future-Proof Your Data with{" "}
                  <span className="text-blue-600">Post-Quantum Cryptography</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  Protect your organization against quantum computing threats with xencrypt's cutting-edge 
                  post-quantum cryptographic solutions. Secure today, quantum-safe tomorrow.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleGetStarted} className="px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('features')} className="px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl">
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Quantum-Resistant</h3>
                  <p className="text-sm text-gray-600 text-center">NIST-approved algorithms that withstand quantum attacks</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">High Performance</h3>
                  <p className="text-sm text-gray-600 text-center">Optimized for speed without compromising security</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Easy Integration</h3>
                  <p className="text-sm text-gray-600 text-center">Seamless APIs and SDKs for rapid deployment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Post-Quantum Security
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our platform provides end-to-end post-quantum cryptographic solutions for enterprises of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <Lock className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Key Management</CardTitle>
                  <CardDescription>
                    Secure generation, distribution, and lifecycle management of post-quantum cryptographic keys.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Hardware Security Module (HSM) integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Automated key rotation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Multi-tenant architecture
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <Shield className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Digital Signatures</CardTitle>
                  <CardDescription>
                    NIST-standardized post-quantum digital signature algorithms for document integrity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      CRYSTALS-Dilithium support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      FALCON algorithm integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Batch verification capabilities
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <Zap className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Encryption Services</CardTitle>
                  <CardDescription>
                    High-performance post-quantum encryption for data at rest and in transit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      CRYSTALS-Kyber implementation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Hybrid classical-quantum approach
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Real-time encryption/decryption
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Industry Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Tailored post-quantum cryptography solutions for your industry's specific security requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Financial Services</CardTitle>
                  <CardDescription className="text-lg">
                    Protect financial transactions and customer data against quantum threats.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Quantum-safe payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Regulatory compliance (PCI DSS, SOX)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
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
                    Secure patient data and medical records with quantum-resistant encryption.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>HIPAA-compliant encryption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Medical device security</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
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
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>FIPS 140-2 Level 3 compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Classified data protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
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
                    Integrate quantum-safe security into your applications and infrastructure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>API-first architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Cloud-native deployment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Developer-friendly SDKs</span>
                    </li>
                  </ul>
                  <Button className="mt-6" onClick={handleContactSales}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Choose the plan that fits your organization's post-quantum security needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="text-4xl font-bold">$99<span className="text-lg font-normal text-gray-600">/month</span></div>
                  <CardDescription>Perfect for small teams and startups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Up to 1,000 operations/month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Basic key management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Standard SLA</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" onClick={handleGetStarted}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 hover:border-blue-600 transition-colors relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <div className="text-4xl font-bold">$499<span className="text-lg font-normal text-gray-600">/month</span></div>
                  <CardDescription>Ideal for growing businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Up to 10,000 operations/month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Advanced key management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>99.9% uptime SLA</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Custom integrations</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" onClick={handleGetStarted}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="text-4xl font-bold">Custom</div>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Unlimited operations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Enterprise key management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>99.99% uptime SLA</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>On-premise deployment</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" onClick={handleContactSales}>
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose xencrypt?
                </h2>
                <p className="text-gray-600 md:text-lg">
                  As quantum computing advances, traditional cryptographic methods become vulnerable. 
                  xencrypt provides the security infrastructure you need to protect your data against 
                  both current and future threats.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">NIST-Approved Algorithms</h3>
                      <p className="text-gray-600">Built on standardized post-quantum cryptographic algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Enterprise-Grade Security</h3>
                      <p className="text-gray-600">Military-grade encryption with quantum-resistant protection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Seamless Integration</h3>
                      <p className="text-gray-600">Easy-to-use APIs and SDKs for rapid deployment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
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
                <p className="text-sm text-gray-600 mt-4 text-center">
                  No credit card required. 30-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Don't Wait for Quantum Computers
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                The quantum threat is real and approaching fast. Secure your organization's future with 
                post-quantum cryptography today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={handleGetStarted} className="px-8 py-4 text-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={handleContactSales} className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">xencrypt</span>
              </div>
              <p className="text-gray-400">
                Leading the future of quantum-safe cryptography for enterprises worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">API Documentation</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Security</button></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Careers</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Blog</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Compliance</button></li>
                <li><button onClick={handleContactSales} className="hover:text-white transition-colors">Cookie Policy</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} xencrypt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
