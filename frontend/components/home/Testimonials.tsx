'use client'
import { useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Lock,
  Receipt,
  Check,
} from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SampleBadge } from '@/components/ui/SampleBadge'
import { Stars } from '@/components/ui/Art'
import { COMMITMENTS, SAMPLE_TESTIMONIALS } from '@/lib/content'
import { SHOW_SAMPLE_PROOF } from '@/lib/config'

const COMMITMENT_ICONS = [UserCheck, ShieldCheck, Lock, Receipt]

const COMMITMENT_TAGS = [
  'Named Steward & Companion',
  'Police & Background Verified',
  'DPDP Act Compliant',
  '100% Written Approval',
]

const COUNTRY_FLAGS: Record<string, string> = {
  USA: '🇺🇸 USA',
  UAE: '🇦🇪 UAE',
  Germany: '🇩🇪 Germany',
  UK: '🇬🇧 UK',
}

export function Testimonials() {
  const rail = useRef<HTMLUListElement>(null)
  const scroll = (dir: 1 | -1) => {
    rail.current?.scrollBy({
      left: dir * (rail.current.clientWidth * 0.8),
      behavior: 'smooth',
    })
  }

  return (
    <Section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F4F7FC] to-[#EAEFF7] !pt-6 sm:!pt-8 lg:!pt-10 !pb-12 sm:!pb-14 lg:!pb-16 min-h-[100svh] min-h-screen flex flex-col justify-center"
    >
      {/* Soft Ambient Illumination */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-sc-gold/[0.06] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-sc-marine/[0.06] blur-3xl"
      />

      <div className="relative z-10 flex flex-col justify-between gap-6 sm:gap-7 lg:gap-8">
        {/* Top Part: Verified Client Testimonials */}
        {SHOW_SAMPLE_PROOF && (
          <div>
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-[0.75fr_2.25fr] items-center">
              {/* Header & Controls */}
              <div className="flex flex-col justify-center">
                <span className="inline-block rounded-full bg-sc-gold/15 border border-sc-gold/40 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-sc-bronze mb-2.5 w-fit">
                  Client Experiences
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-sc-marine leading-tight">
                  Trusted by Global Indians
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
                  Real stories and genuine peace of mind from NRI families across the world.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <SampleBadge>Sample Feedback</SampleBadge>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => scroll(-1)}
                      aria-label="Previous testimonials"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-sc-line bg-white shadow-sm hover:bg-sc-mist transition-colors"
                    >
                      <ChevronLeft aria-hidden className="h-4 w-4 text-sc-marine" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scroll(1)}
                      aria-label="Next testimonials"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-sc-gold bg-sc-gold text-sc-marine shadow-sm hover:bg-sc-goldhover transition-colors"
                    >
                      <ChevronRight aria-hidden className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Testimonial Cards Carousel (Clean, no clunky scrollbar) */}
              <ul
                ref={rail}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 pt-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {SAMPLE_TESTIMONIALS.map((t) => (
                  <li
                    key={t.quote}
                    className="w-[85%] shrink-0 snap-start sm:w-[48%] xl:w-[32%]"
                  >
                    <div className="flex h-full min-h-[220px] sm:min-h-[230px] flex-col justify-between rounded-2xl border border-white/80 bg-white/95 p-5 sm:p-6 shadow-card hover:shadow-lg transition-all">
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            aria-hidden
                            className="font-display text-3xl font-bold leading-none text-sc-gold"
                          >
                            “
                          </span>
                          <span className="rounded-full bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                            {COUNTRY_FLAGS[t.where] || t.where}
                          </span>
                        </div>
                        <p className="mt-2.5 text-xs sm:text-[14px] leading-relaxed text-sc-slate italic">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-sc-marine">
                            {t.who}
                          </p>
                          <p className="text-[11px] text-slate-500 font-medium">{t.where}</p>
                        </div>
                        <Stars />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Subtle Section Divider */}
        <div className="relative flex items-center justify-center my-0.5">
          <div className="w-full border-t border-slate-200/90" />
          <span className="absolute bg-[#F4F7FC] px-4 text-[11px] font-semibold uppercase tracking-widest text-sc-bronze">
            Institutional Standards
          </span>
        </div>

        {/* Bottom Part: What you can hold us to */}
        <div>
          <div className="mb-3.5 sm:mb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-sc-marine">
              What you can hold us to
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Four foundational standards built into every client agreement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map(([t, d], i) => {
              const Icon = COMMITMENT_ICONS[i] || ShieldCheck
              const tag = COMMITMENT_TAGS[i]
              return (
                <div
                  key={t}
                  className="rounded-2xl border border-white/80 bg-white/95 p-5 sm:p-5.5 shadow-card hover:border-sc-gold/60 hover:shadow-lift transition-all flex flex-col justify-between min-h-[175px]"
                >
                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sc-emerald/10 text-sc-emerald">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <h4 className="mt-3 font-display text-sm sm:text-base font-bold text-sc-marine">
                      {t}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {d}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-sc-emerald">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                    <span>{tag}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
