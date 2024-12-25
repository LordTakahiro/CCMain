import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function Header() {
  return (
    <header className="flex items-center gap-6 pt-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-sm opacity-25" />
        <Image
          src="/CCLOGO2.svg"
          alt="Company logo"
          width={100}
          height={100}
          className="relative w-20 h-20 rounded-lg"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">CRYPTO CAPITAL</h1>
          <Badge variant="secondary" className="font-mono text-xs">
            EST. 2022
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Your guide to Crypto
        </p>
        <div className="h-px w-48 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
    </header>
  )
}

