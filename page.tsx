import { Header } from './components/header'
import { SocialLinks } from './components/social-links'
import { Navigation } from './components/navigation'
import { ContactSection } from './components/contact-section'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        <Header />
        <SocialLinks />
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <p className="text-lg text-muted-foreground mb-8">
            Innovative AI Solutions for Enterprise Development
          </p>
          <Navigation />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactSection />
          <div className="relative overflow-hidden rounded-lg border bg-card shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Professional illustration representing AI development"
              width={600}
              height={600}
              className="w-full h-auto mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

