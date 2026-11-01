import type { Metadata } from 'next'
import Image from 'next/image'
import { ClipboardList, Globe2, Home, Wrench, Check, Play } from 'lucide-react'
import { CtaBand } from '@/components/ui/CtaBand'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { AEGIS_MODULES } from '@/lib/content'
import { AEGIS_VIDEO } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Aegis property stewardship',
  description: 'Tenant scouting, rental management, maintenance and interiors for NRI-owned property in Hyderabad, Bengaluru and Delhi NCR.',
}

const HERO_ICONS = [
  [Home, 'Tenant Scouting & Verification'],
  [ClipboardList, 'Active Rental Management'],
  [Wrench, 'Maintenance & Turnkey Interiors'],
  [Globe2, 'Global Sourcing & Reporting'],
] as const

export default function AegisPage() {
  return (
    <div className="snap-y snap-proximity scroll-pt-[84px] text-white">
      {/* 1. HERO SECTION: Full Screen (min-h-[calc(100svh-84px)]), Deep Navy, Gold Accents */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#060F24] via-[#0B1B3D] to-[#10264F] min-h-[calc(100svh-84px)] snap-start flex flex-col justify-center scroll-mt-[84px] !pt-2 sm:!pt-3 lg:!pt-4 !pb-6 sm:!pb-8 lg:!pb-10"
      >
        {/* Ambient Illumination */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-[500px] w-[500px] rounded-full bg-sc-gold/[0.08] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-sc-cerulean/[0.08] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              {/* Gold-tinted AEGIS badge */}
              <span className="inline-block rounded-md border border-sc-gold/40 bg-sc-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sc-gold shadow-sm backdrop-blur-sm">
                Aegis
              </span>

              {/* Heading: White, clamp sized */}
              <h1 className="mt-3 font-display text-[clamp(2.2rem,3.8vw,3.2rem)] font-bold leading-[1.12] text-white tracking-tight">
                Institutional Property Stewardship
              </h1>

              {/* Subtext: Light text, increased size */}
              <p className="mt-2.5 max-w-xl text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-slate-200/95">
                Professional management for your most valuable assets, so you can stay focused on what matters, no matter where you are.
              </p>

              {/* 4-Icon Strip: Glass / White card style for high readability */}
              <ul className="mt-5 sm:mt-6 grid max-w-3xl grid-cols-2 divide-slate-200/80 rounded-2xl border border-white/30 bg-white/95 p-2 shadow-2xl backdrop-blur-md sm:grid-cols-4 sm:divide-x">
                {HERO_ICONS.map(([Icon, label]) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-1.5 px-3 py-2.5 sm:py-3 text-center text-xs sm:text-[14px] font-semibold text-sc-marine leading-snug"
                  >
                    <Icon aria-hidden className="h-5.5 w-5.5 sm:h-6 sm:w-6 text-sc-marine" strokeWidth={1.5} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gold building illustration: Scaled up by 25-30% */}
            <div aria-hidden className="pointer-events-none flex items-center justify-center lg:justify-end overflow-visible">
              <div className="relative flex items-center justify-center lg:justify-end overflow-visible w-full lg:w-auto">
                {/* Scaled ambient soft glow behind the illustration */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[440px] w-[440px] rounded-full bg-sc-gold/[0.12] blur-3xl"
                />
                <Image
                  src="/brand/aegis-hero.webp"
                  alt=""
                  width={1530}
                  height={917}
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 45vw, 780px"
                  className="aegis-hero-illustration relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR MODULES SECTION: Top-Stacked Content, Sized to Content, Centered in Viewport */}
      <section
        id="modules"
        className="relative overflow-hidden bg-gradient-to-b from-[#0B1B3F] to-[#10285A] scroll-mt-[84px] snap-start flex flex-col justify-center min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto py-[clamp(24px,4vh,44px)]"
      >
        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          {/* Heading Block: sits directly above the cards, ~10px between heading & subtext, clamp(16px, 2.5vh, 28px) to cards */}
          <div className="mb-[clamp(16px,2.5vh,28px)] max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4.6vh,2.8rem)] font-bold leading-tight text-white">
              Four modules, one steward
            </h2>
            <p
              className="mt-2.5 text-[clamp(1.05rem,2.3vh,1.3rem)] leading-snug"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Use the ones you need. Each is delivered by the same named steward.
            </p>
          </div>

          {/* 2-Column Grid: normal block cards, gap clamp(14px, 2vh, 22px), top-aligned content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(14px,2vh,22px)] items-stretch">
            {AEGIS_MODULES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/20 bg-white py-[clamp(16px,2.6vh,28px)] px-[clamp(20px,2vw,30px)] text-sc-slate shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* 1. Icon + Title on one line */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <m.icon
                    aria-hidden
                    className="h-7 w-7 shrink-0 text-sc-cerulean"
                    strokeWidth={1.75}
                  />
                  <h3 className="font-display text-[clamp(1.25rem,2.9vh,1.6rem)] font-bold text-sc-marine leading-snug">
                    {m.title}
                  </h3>
                </div>

                {/* 2. Description (no empty space below title) */}
                <p className="mt-2 text-[clamp(0.95rem,2vh,1.1rem)] text-slate-600 leading-snug">
                  {m.lead}
                </p>

                {/* 3. Checklist (~12px gap from description, ~6-8px gap between items) */}
                <ul className="mt-3 space-y-2">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-[clamp(0.92rem,2vh,1.08rem)] leading-[1.35] text-sc-slate"
                    >
                      <Check
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-sc-emerald"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION: Full Screen, Centered Header, Enlarged 3-Card Row */}
      <section
        id="video"
        className="relative overflow-hidden bg-gradient-to-b from-[#10285A] via-[#0B1B3D] to-[#07132C] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(16px,3vh,32px)]"
      >
        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          {/* Centered Heading Block (~10px between heading and subtext, clamp(14px, 2.5vh, 28px) to row) */}
          <div className="mb-[clamp(14px,2.5vh,28px)] text-center max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(2rem,4.6vh,2.8rem)] font-bold leading-tight text-white">
              See Aegis in action
            </h2>
            <p
              className="mt-2.5 text-[clamp(1.05rem,2.3vh,1.3rem)] leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              How we look after a property while you are abroad.
            </p>
          </div>

          {/* Row of THREE portrait video cards, centered: [placeholder] [EXISTING VIDEO] [placeholder] */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[clamp(20px,3vw,48px)]">
            {/* VIDEO PLACEHOLDER 1: 88% height of center video (~58vh), 9/16 ratio, dim dashed border */}
            <div className="order-2 sm:order-1 relative aspect-[9/16] w-[clamp(170px,calc(58vh*0.5625),315px)] h-[min(58vh,560px)] rounded-xl border border-dashed border-white/25 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center pointer-events-none select-none shadow-lg shrink-0">
              <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-sc-gold/40 bg-sc-gold/20 text-sc-gold/40 shadow-inner">
                <Play aria-hidden className="h-6 w-6 sm:h-7 sm:w-7 fill-current ml-0.5" />
              </span>
            </div>

            {/* EXISTING FEATURED VIDEO: min(66vh, 640px), 9/16 ratio, soft gold glow, subtle 1px gold border */}
            <div className="order-1 sm:order-2 relative aspect-[9/16] w-[clamp(195px,calc(66vh*0.5625),360px)] h-[min(66vh,640px)] rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.25)] border border-[rgba(212,175,55,0.35)] overflow-hidden shrink-0 [&_figure]:h-full [&_figure>div]:h-full">
              <VideoPlayer src={AEGIS_VIDEO} title="See Aegis in action" ratio="tall" />
            </div>

            {/* VIDEO PLACEHOLDER 2: 88% height of center video (~58vh), 9/16 ratio, dim dashed border */}
            <div className="order-3 sm:order-3 relative aspect-[9/16] w-[clamp(170px,calc(58vh*0.5625),315px)] h-[min(58vh,560px)] rounded-xl border border-dashed border-white/25 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center pointer-events-none select-none shadow-lg shrink-0">
              <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-sc-gold/40 bg-sc-gold/20 text-sc-gold/40 shadow-inner">
                <Play aria-hidden className="h-6 w-6 sm:h-7 sm:w-7 fill-current ml-0.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BAND */}
      <CtaBand
        title="Have a property in India?"
        sub="Book a free call and we will walk through your property, your rent and what Aegis would cover."
        interest="aegis"
        waText="Hi Sustune Care, I have a property in India and would like to know about Aegis."
      />
    </div>
  )
}