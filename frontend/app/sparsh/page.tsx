import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Phone,
  CalendarPlus,
  ShoppingBag,
  Users,
  Check,
  MessageCircle,
  Play,
  Stethoscope,
  Siren,
  HeartHandshake,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
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

const SPARSH_CARDS = [
  {
    title: 'Doctor & Medical Care',
    icon: Stethoscope,
    tagline: 'Timely doctor visits, doorstep tests, and daily medicines managed with complete care.',
    points: [
      'Accompanied Doctor & Specialist Visits',
      'Home Blood Tests & Routine BP/Sugar Checks',
      'Monthly Medicine Orders & Pill Organising',
      'Home Nursing & Bedside Attendants',
      'Easy Digital Health Records',
    ],
    cta: 'Book a Health Check Visit',
  },
  {
    title: '24/7 Emergency & Hospital Support',
    icon: Siren,
    tagline: 'Immediate emergency help, quick ambulance coordination, and someone by their side at the hospital.',
    points: [
      '24/7 SOS Helpline & Fast Ambulance Dispatch',
      'Care Manager at the Hospital',
      'Clear Doctor Updates for the Family',
      'Cashless Insurance & Mediclaim Assistance',
      'Admission to Discharge Care',
    ],
    cta: 'Set Up Emergency Shield',
  },
  {
    title: 'Everyday Chores & Home Help',
    icon: ShoppingBag,
    tagline: 'Smooth household maintenance, safe errand runs, and zero daily hassles for parents.',
    points: [
      'Elder-Friendly Home Safety Setup',
      'Supervised Electricians & Plumbers',
      'Grocery, Sabz Veggies & Household Errands',
      'Bank Work, Pension & Life Certificate (Jeevan Pramaan)',
      'Accompanied Cabs for Outings',
    ],
    cta: 'Book a Home Safety Check',
  },
  {
    title: 'Companionship & Emotional Wellbeing',
    icon: HeartHandshake,
    tagline: 'Warm companionship, happy conversations, and festive celebrations so parents never feel lonely.',
    points: [
      'Friendly Home Visits & Chai Conversations',
      'Mandir Visits & Evening Outings',
      'Festival & Birthday Celebrations',
      'WhatsApp & Smartphone Coaching',
      'Light Morning Walks & Brain Games',
    ],
    cta: 'Arrange a Friendly Visit',
  },
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
                  alt="Sparsh extended family care emblem"
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
        <div className="relative z-10 mx-auto max-w-[1520px] w-full px-5 sm:px-8">
          {/* Heading Block: ~10px between heading and subtext, clamp(16px, 2.5vh, 28px) to cards */}
          <div className="mb-[clamp(16px,2.5vh,28px)]">
            <h2 className="font-display text-[clamp(2rem,4.6vh,2.8rem)] font-bold leading-tight text-white">
              Four ways Sparsh helps
            </h2>
            <p
              className="mt-2.5 text-[clamp(1.05rem,2.3vh,1.3rem)] leading-snug"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Each is delivered by the same companion, so your parents come to know and trust them.
            </p>
          </div>

          {/* 4 Cards Grid: 4 in 1 row on desktop >= 1280px, 2x2 on tablet 768-1279px, 1 column below 768px */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[clamp(14px,1.4vw,24px)] items-stretch">
            {SPARSH_CARDS.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/20 bg-white py-[clamp(14px,2.2vh,24px)] px-[clamp(16px,1.4vw,24px)] text-sc-slate shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                {/* 1. Icon + Title on the SAME LINE */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <m.icon
                    aria-hidden
                    className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 text-[#0F6B4F]"
                    strokeWidth={1.75}
                  />
                  <h3 className="font-display text-[clamp(1.1rem,2.6vh,1.4rem)] font-bold text-sc-marine leading-snug">
                    {m.title}
                  </h3>
                </div>

                {/* 2. Tagline directly under title */}
                <p className="mt-2 text-[clamp(0.9rem,1.9vh,1.02rem)] text-slate-600 leading-snug">
                  {m.tagline}
                </p>

                {/* 3. Checklist directly under tagline */}
                <ul className="mt-3 space-y-2">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-[clamp(0.86rem,1.85vh,1rem)] leading-[1.32] text-sc-slate"
                    >
                      <Check
                        aria-hidden
                        className="mt-[2px] h-4 w-4 shrink-0 text-[#0F6B4F]"
                        strokeWidth={2}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* 4. Full-width Gold CTA Button pinned to bottom */}
                <div className="mt-auto pt-4 sm:pt-5">
                  <Button
                    href={`/contact?interest=sparsh&topic=${encodeURIComponent(m.title)}`}
                    variant="primary"
                    arrow
                    className="w-full h-[44px] sm:h-[46px] text-xs sm:text-[13px] font-bold rounded-lg shadow-sm"
                  >
                    {m.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Cream 112 Notice directly below the cards */}
          <div className="mt-[clamp(10px,1.6vh,18px)] rounded-xl border border-sc-gold bg-sc-goldtint py-2.5 sm:py-3 px-4 text-[clamp(0.78rem,1.5vh,0.875rem)] text-sc-slate shadow-sm leading-normal">
            <b>In a life-threatening emergency, call 112 first.</b> Sparsh coordinates the response, the hospital and the family, but it does not replace the national emergency number.
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION: Full Screen, Centered Header, 3-Card Row (Adapted from Aegis) */}
      <section
        id="video"
        className="relative overflow-hidden bg-gradient-to-b from-[#135A44] via-[#0E4736] to-[#0B3D2E] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto max-md:min-h-0 max-md:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(16px,3vh,32px)]"
      >
        {/* Anchor for #story hash link */}
        <span id="story" className="sr-only scroll-mt-[84px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
          {/* Centered Heading Block (~10px between heading and subtext, clamp(14px, 2.5vh, 28px) to row) */}
          <div className="mb-[clamp(14px,2.5vh,28px)] text-center max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(2rem,4.6vh,2.8rem)] font-bold leading-tight text-white">
              See Sparsh in action
            </h2>
            <p
              className="mt-2.5 text-[clamp(1.05rem,2.3vh,1.3rem)] leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              How we care for your parents while you are far away.
            </p>
          </div>

          {/* Row of THREE portrait video cards, centered: [placeholder] [EXISTING VIDEO] [placeholder] */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[clamp(20px,3vw,48px)]">
            {/* <!-- VIDEO PLACEHOLDER: replace with real video --> */}
            {/* VIDEO PLACEHOLDER 1: 88% height of center video (~58vh), 9/16 ratio, dim dashed border */}
            <div className="order-2 md:order-1 relative aspect-[9/16] w-[clamp(170px,calc(58vh*0.5625),315px)] h-[min(58vh,560px)] max-w-full rounded-xl border border-dashed border-white/25 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center pointer-events-none select-none shadow-lg shrink-0">
              <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-sc-gold/40 bg-sc-gold/20 text-sc-gold/40 shadow-inner">
                <Play aria-hidden className="h-6 w-6 sm:h-7 sm:w-7 fill-current ml-0.5" />
              </span>
            </div>

            {/* EXISTING FEATURED VIDEO: min(66vh, 640px), 9/16 ratio, soft gold glow, subtle 1px gold border */}
            <div className="order-1 md:order-2 relative aspect-[9/16] w-[clamp(195px,calc(66vh*0.5625),360px)] h-[min(66vh,640px)] max-w-full rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.25)] border border-[rgba(212,175,55,0.35)] overflow-hidden shrink-0 [&_figure]:h-full [&_figure>div]:h-full">
              <VideoPlayer src={STORY_VIDEO} title="See Sparsh in action" ratio="tall" />
            </div>

            {/* <!-- VIDEO PLACEHOLDER: replace with real video --> */}
            {/* VIDEO PLACEHOLDER 2: 88% height of center video (~58vh), 9/16 ratio, dim dashed border */}
            <div className="order-3 md:order-3 relative aspect-[9/16] w-[clamp(170px,calc(58vh*0.5625),315px)] h-[min(58vh,560px)] max-w-full rounded-xl border border-dashed border-white/25 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center pointer-events-none select-none shadow-lg shrink-0">
              <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-sc-gold/40 bg-sc-gold/20 text-sc-gold/40 shadow-inner">
                <Play aria-hidden className="h-6 w-6 sm:h-7 sm:w-7 fill-current ml-0.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OLD SECTION - kept for reference
          -------------------------------------------------------------------------
          Heading: "A trusted presence back home"
          Subtext: "Technology lets you talk to your parents. A person who turns up lets you stop worrying between calls."
          Portrait video (woman at laptop with gold play button) + "A typical visiting day" timeline (8:30 am, 11:00 am, 4:30 pm, 8:00 pm).
          Also preserved as component in: frontend/components/sparsh/OldStorySection.tsx
      ========================================================================= */}
      {/*
      <section
        id="story-old"
        className="relative overflow-hidden bg-gradient-to-b from-[#135A44] via-[#0E4736] to-[#0B3D2E] min-h-[calc(100svh-84px)] [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:h-auto snap-start flex flex-col justify-center scroll-mt-[84px] py-[clamp(20px,3.5vh,44px)]"
      >
        <div className="relative z-10 mx-auto max-w-page w-full px-5 sm:px-8">
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

          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] xl:gap-12">
            <div className="relative aspect-[9/16] w-[clamp(180px,calc(54vh*0.5625),295px)] h-[min(54vh,520px)] rounded-xl shadow-[0_0_35px_rgba(212,175,55,0.2)] border border-[rgba(212,175,55,0.35)] overflow-hidden shrink-0 [&_figure]:h-full [&_figure>div]:h-full">
              <VideoPlayer src={STORY_VIDEO} title="A trusted presence back home" ratio="tall" />
            </div>

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
      */}

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
