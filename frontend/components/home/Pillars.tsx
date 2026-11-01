'use client'
import { ArrowRight, Home, Users, ShieldCheck, Smartphone, Globe2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/cn'

const DATA = {
  aegis: {
    Icon: Home,
    name: 'Aegis',
    sub: 'Institutional Property Stewardship',
    blurb:
      'Professional management for your most valuable assets, so you can stay focused on what matters, no matter where you are.',
    pts: [
      'Tenant Scouting & Verification',
      'Rental Management',
      'Maintenance & Turnkey Interiors',
      'Global Sourcing & Reporting',
    ],
    href: '/aegis',
    cta: 'More About Aegis',
    bg: 'bg-[#0B1B3D]',
    border: 'border-2 border-sc-gold shadow-[0_0_30px_rgba(212,175,55,0.18)]',
  },
  sparsh: {
    Icon: Users,
    name: 'Sparsh',
    sub: 'Family & Elder Care',
    blurb:
      'A trusted presence for your loved ones back home with professional support, regular care and complete peace of mind.',
    pts: [
      '24/7 Emergency SOS',
      'Doctor Escort & Appointments',
      'Daily Errands & Daily Living Support',
      'Regular Companionship Visits',
    ],
    href: '/sparsh',
    cta: 'More About Sparsh',
    bg: 'bg-[#12432B]',
    border: 'border border-white/15',
  },
} as const

export function Pillars() {
  return (
    <Section
      id="pillars"
      className="relative overflow-hidden bg-gradient-to-b from-[#EAEFF7] via-[#F4F7FC] to-[#EAEFF7] !pt-2 sm:!pt-3 lg:!pt-4 !pb-6 sm:!pb-7 lg:!pb-8 min-h-[100svh] flex flex-col justify-center"
    >
      {/* Soft Ambient Illumination so the background has depth and never looks flat */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-6 h-[550px] w-[550px] rounded-full bg-sc-marine/[0.08] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-6 h-[550px] w-[550px] rounded-full bg-sc-emerald/[0.08] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[800px] rounded-full bg-sc-gold/[0.06] blur-3xl" />

      {/* Section Header */}
      <div className="relative z-10 mb-2.5 sm:mb-3.5 text-center mx-auto max-w-3xl px-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sc-gold/40 bg-sc-gold/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-sc-bronze mb-1">
          Dual-Pillar Ecosystem
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.05rem] font-bold text-sc-marine leading-tight">
          Complete Care
        </h2>
        <p className="mt-1 text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          Institutional property stewardship and compassionate elder care in India. Choose the service you need or combine both for total cross-border peace of mind.
        </p>
      </div>

      {/* Two Flagship Cards - Increased size with balanced spacing */}
      <div className="relative z-10 grid gap-4 lg:gap-6 lg:grid-cols-2">
        {(Object.keys(DATA) as ('aegis' | 'sparsh')[]).map((k) => {
          const c = DATA[k]
          return (
            <article
              key={k}
              className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] p-6 sm:p-7 lg:p-7.5 text-white shadow-xl transition-all duration-300 min-h-[420px] sm:min-h-[430px] lg:min-h-[440px]',
                c.bg,
                c.border
              )}
            >
              {/* Background Artworks - Resized and repositioned with clear text clearance */}
              {k === 'aegis' ? (
                <div className="pointer-events-none absolute bottom-1 sm:bottom-2 right-0 z-0 flex items-end justify-end w-[48%] sm:w-[48%] xl:w-[60%] max-w-[365px] pr-3 [mask-image:linear-gradient(to_right,transparent_0%,black_28%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_28%)]">
                  <Image
                    src="/brand/aegis-card.webp"
                    alt=""
                    width={1530}
                    height={917}
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 40vw, 365px"
                    className="h-auto w-full object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="pointer-events-none absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 lg:bottom-4.5 lg:right-4.5 z-0 flex items-center justify-center w-[36%] sm:w-[35%] xl:w-[45%] max-w-[265px] aspect-square">
                  <Image
                    src="/brand/sparsh-card-new.webp"
                    alt=""
                    width={1024}
                    height={1024}
                    sizes="(max-width: 768px) 35vw, (max-width: 1280px) 30vw, 265px"
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(212,175,55,0.22)]"
                  />
                </div>
              )}

              {/* Content Body */}
              <div className="relative z-10">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <span className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-sc-gold/75 text-sc-gold shrink-0">
                    <c.Icon aria-hidden className="h-5.5 w-5.5 sm:h-6 sm:w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-serif text-2xl sm:text-[1.95rem] lg:text-[2.05rem] font-bold tracking-tight text-white leading-tight">
                      {c.name}
                    </h3>
                    <p className="font-serif text-xs sm:text-[14px] lg:text-[14.5px] font-medium text-white/90 leading-tight mt-0.5">
                      {c.sub}
                    </p>
                  </div>
                </div>

                <p className="mt-3.5 sm:mt-4 max-w-[85%] sm:max-w-[70%] lg:max-w-[62%] text-xs sm:text-[14px] lg:text-[14.5px] leading-relaxed text-white/90 font-normal">
                  {c.blurb}
                </p>

                {/* Capability Highlights */}
                <ul className="mt-4 sm:mt-4.5 space-y-2 sm:space-y-2.5 text-xs sm:text-[13.5px] lg:text-[14px] max-w-[88%] sm:max-w-[72%] lg:max-w-[62%]">
                  {c.pts.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sc-gold text-sc-marine">
                        <ArrowRight aria-hidden className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span className="text-white font-medium leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA Button */}
              <div className="relative z-10 mt-6 pt-1">
                <Button
                  href={c.href}
                  arrow
                  className="h-10.5 px-5.5 text-xs sm:text-[13.5px] font-semibold bg-sc-gold hover:bg-sc-goldhover text-sc-marine rounded-lg shadow-md inline-flex items-center"
                >
                  {c.cta}
                </Button>
              </div>
            </article>
          )
        })}
      </div>

      {/* Unified Ecosystem Reassurance Bar - Gently shifted down with balanced margins */}
      <div className="relative z-10 mt-4 sm:mt-5 lg:mt-6 rounded-2xl border border-white/80 bg-white/92 p-4 sm:p-5 lg:py-4.5 lg:px-6 backdrop-blur-md shadow-lg">
        <div className="grid gap-4 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="flex items-start gap-3.5 pt-3 md:pt-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sc-gold/40 bg-sc-marine/5 text-sc-marine shadow-sm">
              <ShieldCheck className="h-5.5 w-5.5 text-sc-bronze" />
            </span>
            <div>
              <h4 className="font-display text-sm sm:text-[15px] font-bold text-sc-marine">Single Point of Contact</h4>
              <p className="mt-0.5 text-xs sm:text-[12.5px] text-slate-600 leading-snug">
                A named steward for your property and a named companion for your parents — no rotating call-center staff.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5 pt-3 md:pt-0 md:pl-5 lg:pl-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sc-gold/40 bg-sc-marine/5 text-sc-marine shadow-sm">
              <Smartphone className="h-5.5 w-5.5 text-sc-bronze" />
            </span>
            <div>
              <h4 className="font-display text-sm sm:text-[15px] font-bold text-sc-marine">Unified Digital Portal</h4>
              <p className="mt-0.5 text-xs sm:text-[12.5px] text-slate-600 leading-snug">
                Photo inspections, rent ledgers, companion visit notes, and parents&apos; vitals in one real-time secure app.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5 pt-3 md:pt-0 md:pl-5 lg:pl-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sc-gold/40 bg-sc-marine/5 text-sc-marine shadow-sm">
              <Globe2 className="h-5.5 w-5.5 text-sc-bronze" />
            </span>
            <div>
              <h4 className="font-display text-sm sm:text-[15px] font-bold text-sc-marine">Aligned to NRI Time Zones</h4>
              <p className="mt-0.5 text-xs sm:text-[12.5px] text-slate-600 leading-snug">
                Proactive WhatsApp updates and evening review calls scheduled across US, UK, Middle East &amp; Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
