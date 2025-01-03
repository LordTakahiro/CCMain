import { Header } from '@/components/header'
import { SocialLinks } from '@/components/social-links'
import { Navigation } from '@/components/navigation'
import { ContactSection } from '@/components/contact-section'
import { ThemeToggle } from "@/components/theme-toggle"  // Add this import
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Add this div for the header and theme toggle */}
        <div className="flex justify-between items-center">
          <Header />
          <ThemeToggle />
        </div>
        <SocialLinks />
        <div className="rounded-lg border bg-card dark:bg-gray-800 dark:border-gray-700 p-8 shadow-sm">
          <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
            Your guide to Crypto
          </p>
          <Navigation />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactSection />
          <div className="relative overflow-hidden rounded-lg border bg-card dark:bg-gray-800 dark:border-gray-700 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
            <Image
              src="/Will.jpg"
              alt="Professional illustration representing AI development"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}