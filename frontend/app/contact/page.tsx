import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Phone, Mail, MessageCircle, Globe } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { SITE, waLink } from '@/lib/config'

export const metadata: Metadata = { title: 'Contact', description: 'Tell us about your property or your parents. A Sustune Care director will respond within 24 hours, at a time that suits your time zone.' }

export default function ContactPage() {
  return (
    <>
      <PageHero tag="Get in touch" title="Let’s Start Your Peace of Mind Journey" sub="Tell us about your needs and we’ll get back to you within 24 hours." className="[&>div]:pb-2" />
      <Section className="pt-4">
        <Suspense fallback={<p>Loading form…</p>}><ContactForm /></Suspense>
        <div className="mt-8 rounded-2xl border border-sc-line bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-bold text-sc-marine">Quick Contact</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <li className="flex items-center gap-3"><Phone aria-hidden className="h-4 w-4 text-sc-bronze" /><a className="hover:underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
            <li className="flex items-center gap-3"><MessageCircle aria-hidden className="h-4 w-4 text-sc-bronze" /><a className="hover:underline" href={waLink('Hi Sustune Care')} target="_blank" rel="noreferrer">{SITE.whatsappDisplay}</a></li>
            <li className="flex items-center gap-3"><Mail aria-hidden className="h-4 w-4 text-sc-bronze" /><a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-center gap-3"><Globe aria-hidden className="h-4 w-4 text-sc-bronze" /><a className="hover:underline" href={`https://${SITE.web}`}>{SITE.web}</a></li>
          </ul>
        </div>
      </Section>
    </>
  )
}
