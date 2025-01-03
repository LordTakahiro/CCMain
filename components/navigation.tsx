'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Navigation() {
  const sections = [
    {
      title: 'Enterprise Solutions',
      content: 'Discover our range of enterprise-grade AI solutions and services.',
    },
    {
      title: 'Partnerships',
      content: 'Learn about our strategic partnerships and collaboration opportunities.',
    },
    {
      title: 'Resources',
      content: 'Access documentation, case studies, and implementation guides.',
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

