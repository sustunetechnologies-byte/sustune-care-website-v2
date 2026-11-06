import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Founders } from '@/components/about/Founders'
import { SITE, waLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who is behind Sustune Care and what the emblem stands for.',
}

const MEANING = [
  ['Guiding star', 'A fixed point to navigate by: clear standards and honest reporting.'],
  ['Sheltering roof', 'Home. The property you own and the parents who live in it.'],
  ['The S ribbon', 'Continuity: care that keeps moving, month after month.'],
  ['Supporting hands', 'The person at the bedside. Warmth and dignity come before process.'],
]

export default function About() {
  return (
    <div className="[scroll-padding-top:84px] sm:[scroll-padding-top:88px] snap-y snap-proximity">
      {/* 1. Hero: "Protected care. Sustained dignity." */}
      <section className="scroll-mt-[84px] sm:scroll-mt-[88px] bg-sc-canvas py-[clamp(24px,4vh,48px)] min-h-0 md:min-h-[calc(100svh-88px)] flex flex-col justify-center snap-start">
        <div className="mx-auto w-full max-w-page px-5 sm:px-8">
          <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="max-w-2xl font-display text-4xl sm:text-[42px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-sc-marine leading-[1.15]">
                Protected care. Sustained dignity.
              </h1>
              <p className="mt-5 max-w-2xl text-[19px] leading-[1.65] text-slate-600">
                Sustune Care exists for families whose lives are in one country and whose roots, homes and parents are in another. We combine careful oversight with people who treat your family’s home and your parents as they would their own.
              </p>
              <p className="mt-4 max-w-2xl text-[17px] leading-[1.6] text-slate-600">
                We are based in {SITE.location}, and our executive team brings more than 20 years of combined professional experience.
              </p>
            </div>
            {/* Emblem ~25% larger, maintaining aspect ratio */}
            <div className="flex justify-center shrink-0">
              <Image
                src="/brand/emblem.png"
                alt="Sustune Care emblem: a shield holding a house, an S ribbon and supporting hands"
                width={280}
                height={280}
                priority
                className="mx-auto h-auto w-60 sm:w-64 lg:w-[280px] drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. "What the emblem says about us" + 4 cards */}
      <section className="scroll-mt-[84px] sm:scroll-mt-[88px] bg-sc-mist py-[clamp(24px,4vh,48px)] min-h-0 md:min-h-[calc(100svh-88px)] flex flex-col justify-center snap-start">
        <div className="mx-auto w-full max-w-page px-5 sm:px-8">
          <div className="mb-[clamp(16px,3vh,32px)]">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl text-sc-marine">
              What the emblem says about us
            </h2>
          </div>
          {/* 4 cards: tablet 2x2, desktop 4 columns, mobile 1 column. Natural height without forced stretch */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {MEANING.map(([t, d]) => (
              <Card key={t} className="h-auto p-5 sm:p-6 rounded-2xl border border-sc-line bg-sc-card shadow-card">
                <h3 className="font-display text-lg font-semibold text-sc-marine">{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "Meet the founders" + 3 founder placeholder cards */}
      {/* TODO: add leadership names, photos and short bios here when the team approves them. */}
      <Founders />

      {/* 4. "Talk to the team" CTA band */}
      <section className="scroll-mt-24 bg-sc-marine text-white py-[clamp(48px,8vh,88px)]">
        <div className="mx-auto w-full max-w-page px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Talk to the team</h2>
            <p className="mt-4 text-lg text-slate-200">
              Tell us about your property or your parents. We will tell you honestly whether we can help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact?interest=both" variant="gold" arrow>
                Book a free consultation
              </Button>
              <Button href={waLink('Hi Sustune Care, I would like to know more about your team.')} external variant="light">
                <MessageCircle aria-hidden className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
