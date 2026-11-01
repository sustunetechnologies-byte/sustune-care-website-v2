import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Phone,
  CalendarPlus,
  ShoppingBag,
  Users,
  Check,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { SPARSH_PILLARS, TYPICAL_DAY } from '@/lib/content'
import { STORY_VIDEO, waLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Sparsh parental care',
  description:
    '24/7 emergency SOS, doctor escorts, daily errands and regular companionship for your parents in Hyderabad, Bengaluru and Delhi NCR.',
}

const HERO_ICONS = [
  [Phone, '24/7 Emergency SOS'],
  [CalendarPlus, 'Doctor Escort & Appointments'],
  [ShoppingBag, 'Daily Errands & Daily Living Support'],
  [Users, 'Regular Companionship Visits'],
] as const

export default function SparshPage() {
  return (
    <div data-sparsh-page="true" className="snap-y snap-proximity scroll-pt-[84px] text-white">
      {/* 1. HERO SECTION: Full Screen (min-h-[calc(100svh-84px)]), Deep Forest Green, Cream Panel for Illustration */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#0B3D2E] via-[#0E4736] to-[#0F5240] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(20px,3.5vh,44px)]"
      >
        {/* Soft Ambient Illumination */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-[500px] w-[500px] rounded-full bg-sc-gold/[0.08] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-emerald-400/[0.07] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              {/* Gold-tinted SPARSH badge */}
              <span className="inline-block rounded-md border border-sc-gold/40 bg-sc-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sc-gold shadow-sm backdrop-blur-sm">
                Sparsh
              </span>

              {/* Heading: White, clamp sized */}
              <h1 className="mt-3 font-display text-[clamp(2.2rem,3.8vw,3.2rem)] font-bold leading-[1.12] text-white tracking-tight">
                Compassionate Care. Everyday Support.
              </h1>

              {/* Subtext: Soft white (rgba(255,255,255,0.88)), clamp sized */}
              <p
                className="mt-2.5 max-w-xl text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.88)' }}
              >
                A trusted presence for your loved ones back home. Person-centred care, professional support, and complete peace of mind for your family.
              </p>

              {/* 4-Icon Strip: White/glass card with dark readable text and deep green icons */}
              <ul className="mt-5 sm:mt-6 grid max-w-3xl grid-cols-2 divide-slate-200/80 rounded-2xl border border-white/30 bg-white/95 p-2 shadow-2xl backdrop-blur-md sm:grid-cols-4 sm:divide-x">
                {HERO_ICONS.map(([Icon, label]) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-1.5 px-3 py-2.5 sm:py-3 text-center text-xs sm:text-[14px] font-semibold text-sc-marine leading-snug"
                  >
                    <Icon
                      aria-hidden
                      className="h-5.5 w-5.5 sm:h-6 sm:w-6 text-[#0F6B4F]"
                      strokeWidth={1.5}
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero Visual: Golden Family Sculpture Emblem - Scaled up by 20-25% */}
            <div aria-hidden className="pointer-events-none flex items-center justify-end overflow-visible">
              <div className="relative flex items-center justify-end overflow-visible">
                {/* Scaled ambient soft gold glow behind the emblem */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] max-w-[440px] max-h-[440px] rounded-full bg-sc-gold/20 blur-3xl"
                />
                <Image
                  src="/brand/sparsh-emblem-cropped.webp"
                  alt="Sparsh family and elder care emblem"
                  width={914}
                  height={914}
                  priority
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="sparsh-hero-emblem relative z-10 drop-shadow-[0_15px_35px_rgba(212,175,55,0.28)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR WAYS SPARSH HELPS SECTION: Sized to Content, Centered in Viewport, Deep Green Tick Marks */}
      <section
        id="pillars"
        className="relative overflow-hidden bg-gradient-to-b from-[#0F4A38] via-[#11523E] to-[#135A44] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(20px,3.5vh,44px)]"
      >
        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          {/* Heading Block: ~10px between heading and subtext, clamp(16px, 2.5vh, 28px) to cards */}
          <div className="mb-[clamp(16px,2.5vh,28px)] max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4.6vh,2.8rem)] font-bold leading-tight text-white">
              Four ways Sparsh helps
            </h2>
            <p
              className="mt-2.5 text-[clamp(1.05rem,2.3vh,1.3rem)] leading-snug max-w-[900px]"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Each is delivered by the same companion, so your parents come to know and trust them.
            </p>
          </div>

          {/* 2-Column Grid: normal block cards, gap clamp(14px, 2vh, 22px), top-stacked content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(14px,2vh,22px)] items-stretch">
            {SPARSH_PILLARS.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/20 bg-white py-[clamp(14px,2.3vh,24px)] px-[clamp(18px,2vw,28px)] text-sc-slate shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* 1. Icon + Title on the SAME LINE (icon left, ~28px) */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <m.icon
                    aria-hidden
                    className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 text-[#0F6B4F]"
                    strokeWidth={1.75}
                  />
                  <h3 className="font-display text-[clamp(1.2rem,2.8vh,1.5rem)] font-bold text-sc-marine leading-snug">
                    {m.title}
                  </h3>
                </div>

                {/* 2. Description (no empty space below title) */}
                <p className="mt-2 text-[clamp(0.92rem,1.95vh,1.05rem)] text-slate-600 leading-snug">
                  {m.lead}
                </p>

                {/* 3. Checklist (compact, deep green ticks, line-height 1.32, gap clamp(3px, 0.8vh, 7px)) */}
                <ul className="mt-2.5 space-y-[clamp(3px,0.8vh,7px)]">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-[clamp(0.88rem,1.9vh,1.02rem)] leading-[1.32] text-sc-slate"
                    >
                      <Check
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0F6B4F]"
                        strokeWidth={2}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cream 112 Notice directly below the cards */}
          <div className="mt-[clamp(12px,2vh,20px)] rounded-xl border border-sc-gold bg-sc-goldtint py-3 px-4 text-xs sm:text-sm text-sc-slate shadow-sm">
            <b>In a life-threatening emergency, call 112 first.</b> Sparsh coordinates the response, the hospital and the family, but it does not replace the national emergency number.
          </div>
        </div>
      </section>

      {/* 3. STORY SECTION: Full Screen, Video on Left, Timeline on Right */}
      <section
        id="story"
        className="relative overflow-hidden bg-gradient-to-b from-[#135A44] via-[#0E4736] to-[#0B3D2E] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(20px,3.5vh,44px)]"
      >
        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          {/* Left-Aligned Heading Block (same left edge as video below) */}
          <div className="mb-[clamp(16px,2.5vh,28px)] max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4.6vh,2.8rem)] font-bold leading-tight text-white">
              A trusted presence back home
            </h2>
            <p
              className="mt-2.5 text-[clamp(1.05rem,2.3vh,1.3rem)] leading-snug max-w-[900px]"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Technology lets you talk to your parents. A person who turns up lets you stop worrying between calls.
            </p>
          </div>

          {/* Two Columns: Video on Left, Timeline on Right (Vertically Centered) */}
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] xl:gap-12">
            {/* Video Player: Portrait ratio, height min(54vh, 520px), same left edge as heading */}
            <div className="relative aspect-[9/16] w-[clamp(180px,calc(54vh*0.5625),295px)] h-[min(54vh,520px)] rounded-xl shadow-[0_0_35px_rgba(212,175,55,0.2)] border border-[rgba(212,175,55,0.35)] overflow-hidden shrink-0 [&_figure]:h-full [&_figure>div]:h-full">
              <VideoPlayer src={STORY_VIDEO} title="A trusted presence back home" ratio="tall" />
            </div>

            {/* Timeline: A typical visiting day */}
            <div className="max-w-2xl">
              <h3 className="font-display text-[clamp(1.25rem,2.8vh,1.6rem)] font-bold text-white mb-3 sm:mb-4">
                A typical visiting day
              </h3>
              <ol className="border-l-2 border-sc-gold pl-5 sm:pl-6 space-y-3.5 sm:space-y-4">
                {TYPICAL_DAY.map(([time, title, text]) => (
                  <li key={time} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[27px] sm:-left-[31px] top-1.5 h-3 w-3 rounded-full bg-sc-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    />
                    <p className="text-xs sm:text-sm font-semibold text-[#E6C65C] leading-none">
                      {time}
                    </p>
                    <p className="font-display font-semibold text-white text-[15px] sm:text-[16px] leading-snug mt-1">
                      {title}
                    </p>
                    <p
                      className="text-xs sm:text-[13.5px] leading-relaxed mt-1"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BAND: Darker Green Gradient (#0B3D2E to #072A20), Centered, Never Taller than One Screen */}
      <section
        id="cta"
        className="relative overflow-hidden bg-gradient-to-b from-[#0B3D2E] to-[#072A20] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(24px,4vh,48px)]"
      >
        <div className="relative z-10 mx-auto max-w-2xl text-center px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight">
            Give your parents someone to rely on.
          </h2>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.88)' }}
          >
            Book a free call. We start with a gentle assessment of their health, routine and preferences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button
              href="/contact?interest=sparsh"
              variant="gold"
              arrow
              className="shadow-lg h-11 px-6 text-sm font-semibold"
            >
              Book a free consultation
            </Button>
            <Button
              href={waLink('Hi Sustune Care, I would like to discuss care for my parents in India.')}
              external
              variant="light"
              className="shadow-lg h-11 px-6 text-sm font-semibold inline-flex items-center gap-2"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
