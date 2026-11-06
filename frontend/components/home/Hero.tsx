'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { HERO_IMAGE, INTRO_VIDEO } from '@/lib/config'

// /public/brand/hero.webp is a transparent cut-out (1672x941): the emblem sculpture, arches, trees and the
// gold waves, with no background. The navy backdrop is painted by this component, so the artwork is never
// cropped or zoomed. It is shown at its natural aspect ratio and the hero grows to fit it.
const HERO_SRC = HERO_IMAGE || '/brand/hero.webp'

// Navy backdrop with a soft blue glow behind the emblem and a faint gold glow on the floor.
const BACKDROP = [
  'radial-gradient(ellipse 52% 70% at 74% 46%, rgba(36,84,170,.55) 0%, rgba(20,48,110,.28) 45%, transparent 72%)',
  'radial-gradient(ellipse 60% 22% at 74% 94%, rgba(212,175,55,.14) 0%, transparent 70%)',
  'linear-gradient(180deg, #050D20 0%, #0A1A3C 55%, #08163A 100%)',
].join(',')

export function Hero() {
  const [video, setVideo] = useState(false)
  return (
    <section className="relative flex min-h-[100svh] lg:min-h-0 lg:[min-height:auto] flex-col justify-center lg:justify-start overflow-x-hidden text-white border-0 m-0 box-border lg:pt-[185px] lg:pb-[465px]" style={{ background: BACKDROP }}>
      {/* Subtle glow overlay on left to maintain text contrast */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-[55%] bg-gradient-to-r from-sc-deep/80 via-sc-deep/30 to-transparent lg:block" />

      {/* Hero Artwork: Anchored to top-right on desktop, unconstrained by column limits, rising behind navbar */}
      <div className="pointer-events-none select-none absolute z-0 right-[-15px] sm:right-[-25px] lg:right-[-35px] xl:right-[-40px] bottom-0 lg:bottom-auto lg:top-0 w-[95vw] sm:w-[85vw] lg:w-[78vw] max-w-[1540px] min-w-[700px] flex items-end justify-end lg:items-start hero-artwork-container">
        <Image
          src={HERO_SRC}
          alt="Sustune Care emblem"
          width={1672}
          height={941}
          priority
          sizes="(max-width: 1024px) 100vw, 78vw"
          className="h-auto w-full object-contain drop-shadow-2xl hero-artwork-image"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, #000 28%), linear-gradient(to bottom, #000 92%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, #000 28%), linear-gradient(to bottom, #000 92%, transparent 100%)',
            WebkitMaskComposite: 'destination-in',
            maskComposite: 'intersect',
          }}
        />
      </div>
      
      {/* Content Area: Left text column on z-20, fully interactive above the artwork */}
      <div className="relative z-20 mx-auto flex w-full max-w-page flex-1 lg:flex-initial items-center lg:items-start px-5 sm:px-8 pt-[96px] sm:pt-[112px] lg:pt-0 pb-12 sm:pb-16 lg:pb-0 min-w-0">
        
        {/* Left Column: Headline, Paragraph, Buttons */}
        <div className="relative z-20 py-2 sm:py-4 lg:py-0 max-w-[640px] w-full min-w-0">
          <div className="max-w-[640px] min-w-0">
            {/* 1. HEADLINE: text-4xl sm:text-5xl, nowrap on desktop, line-height 1.15, margin 0 */}
            <h1
              className="font-display font-serif font-bold text-white tracking-tight m-0 p-0 text-4xl sm:text-5xl"
              style={{ lineHeight: 1.15 }}
            >
              <span className="block m-0 p-0 whitespace-normal lg:whitespace-nowrap">Guarding your property.</span>
              <span className="block m-0 p-0 whitespace-normal lg:whitespace-nowrap">Caring for your parents.</span>
              <span className="block m-0 p-0 text-sc-gold whitespace-normal lg:whitespace-nowrap">Peace of mind for you.</span>
            </h1>

            {/* 2. PARAGRAPH: 20px spacing from headline, 28px spacing to buttons, max-w 640px */}
            <p
              className="mt-[20px] mb-[28px] max-w-[640px] font-normal text-[clamp(1rem,1.15vw,1.15rem)]"
              style={{
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.82)',
              }}
            >
              Sustune Care bridges the anxiety of distance for Global Indians through institutional asset guardianship and extended family care back home.
            </p>

            {/* 3. BUTTONS: height about 56px, 32px gap, vertically centered on same horizontal line */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px] sm:gap-[24px] lg:flex-row lg:items-center lg:gap-[32px]">
              <Button
                href="#pillars"
                arrow
                className="h-[56px] min-h-[56px] px-7 text-[15px] sm:text-[16px] font-semibold rounded-lg shadow-md flex items-center justify-center shrink-0"
              >
                Explore Our Services
              </Button>
              <button
                type="button"
                onClick={() => setVideo(true)}
                className="group flex h-[56px] min-h-[56px] items-center gap-3.5 text-left px-0 shrink-0"
              >
                <span className="flex h-11 w-11 lg:h-[56px] lg:w-[56px] shrink-0 items-center justify-center rounded-full border border-sc-gold/70 bg-sc-deep/60 text-white transition-colors group-hover:bg-sc-gold group-hover:text-sc-marine shadow-md">
                  <Play aria-hidden className="h-4 w-4 lg:h-5 lg:w-5 fill-current ml-0.5" />
                </span>
                <span className="flex flex-col justify-center">
                  <span className="block text-[15px] sm:text-[16px] font-semibold text-white leading-tight">Watch Our Story</span>
                  <span className="block text-[13px] sm:text-[14px] text-slate-300 leading-tight mt-0.5">2 min</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal open={video} onClose={() => setVideo(false)} title="Our story" wide>
        <VideoPlayer src={INTRO_VIDEO} title="Sustune Care: our story" ratio="tall" />
      </Modal>
    </section>
  )
}
