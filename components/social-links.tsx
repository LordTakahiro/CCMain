import { MessageSquare, Twitter, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import Link from 'next/link'

const SOCIAL_LINKS = {
  discord: 'https://discord.gg/ZJcnaxNn',
  twitter: 'https://x.com/CriptoCapitalMX',
  instagram: 'https://www.instagram.com/cripto.capital'
}

export function SocialLinks() {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="grid md:grid-cols-3 gap-4 p-0">
        <Button
          asChild
          variant="outline"
          className="h-12 gap-2 hover:bg-primary/5"
        >
          <Link href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">Discord</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 gap-2 hover:bg-primary/5"
        >
          <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5" />
            <span className="font-semibold">Twitter</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 gap-2 hover:bg-primary/5"
        >
          <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5" />
            <span className="font-semibold">Instagram</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

