'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function ContactSection() {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <CardHeader className="relative">
        <CardTitle className="text-2xl">Get In Touch!</CardTitle>
        <CardDescription>
          Get started with your crypto journey today!
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Business Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="border-muted"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="task">Add your interests!</Label>
            <Textarea
              id="task"
              className="min-h-[120px] border-muted"
              placeholder="Give a few details about your interests and what you hope to achieve!"
              required
            />
          </div>
          <Button className="w-full" size="lg">
            Request Consultation
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

