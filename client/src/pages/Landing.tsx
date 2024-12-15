import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/Navbar'
import { Feature } from '@/components/sections/Feature'
import { Contact } from '@/components/sections/Contact'
import { Gadgets } from '@/components/sections/Gadgets'

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature />

      {/* Gadgets Section */}
      <Gadgets />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}
