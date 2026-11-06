import Image from 'next/image'
import { Clock, MapPinOff, EyeOff, Heart } from 'lucide-react'
import { Section, Eyebrow } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const CARDS = [
  [
    Clock,
    'The 12-Hour Timezone Void',
    'Critical property decisions, contractor handovers, and doctor visits happen while you sleep. Waking up to unread crises across oceans leaves you reacting instead of managing.',
  ],
  [
    MapPinOff,
    'The Fatigue of "Casual Favors"',
    'Relying on busy relatives, informal brokers, and unverified vendors for multi-crore homes and parental health creates friction, awkward obligations, and zero legal accountability.',
  ],
  [
    EyeOff,
    'The Information Black Box',
    'Vague WhatsApp updates and handwritten bills replace genuine transparency. You never truly know if maintenance was done correctly or if a parent is hiding a worsening illness to spare you worry.',
  ],
  [
    Heart,
    'Distance Guilt & Silent Decline',
    'The constant internal conflict between excelling in your global career and knowing your ancestral roots and aging parents are navigating life entirely alone.',
  ],
] as const

// Where the NRI hubs sit on the globe artwork (percent of the 1983x793 picture). Decorative only.
const HUBS = [
  { name: 'USA', x: 54.5, y: 69, side: 'left' },
  { name: 'UK', x: 68.6, y: 58.5, side: 'left' },
  { name: 'Australia', x: 95.3, y: 88.5, side: 'left' },
] as const

// /public/brand/nri-world.webp is a transparent cut-out (1983x793): gold ribbons and a plane across the top,
// the globe rising from the bottom right. It is pinned to the bottom of the section at its natural ratio, so the
// globe is never cropped, and the copy and cards sit on the clear space above the globe.
export function Problem() {
  return (
    <Section
      containerClassName="lg:max-w-[1820px]"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#FCFAF4] pb-0 pt-14 sm:pt-20 lg:!pt-[52px] lg:!pb-0 min-h-[100svh] lg:min-h-fit"
    >
      <div className="relative z-10 grid gap-8 lg:gap-0 items-start lg:grid-cols-[30%_66%] lg:justify-between pb-6 lg:pb-0">
        <div className="lg:max-w-none">
          <Eyebrow>The Global Indian Reality</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.45rem] font-bold leading-[1.18] text-sc-marine">
            Distance Shouldn’t Mean Uncertainty.
          </h2>
          <p className="mt-5 max-w-none text-base sm:text-lg text-slate-700 leading-relaxed">
            Focus on your life abroad while we protect what matters most back home: your property and your loved ones.
          </p>
          <Button href="/about" arrow className="mt-7">Learn More</Button>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-5 items-stretch [grid-auto-rows:1fr] w-full">
          {CARDS.map(([Icon, t, d]) => (
            <li
              key={t}
              className="flex flex-col h-full rounded-[16px] border border-[rgba(212,175,55,0.25)] bg-[rgba(255,255,255,0.96)] p-[28px] lg:py-[28px] lg:px-[32px] shadow-[0_10px_30px_rgba(15,30,70,0.08)] transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(15,30,70,0.14)]"
            >
              <Icon aria-hidden className="h-7 w-7 text-[#C9A227] shrink-0 mb-4 lg:mb-[14px]" strokeWidth={1.5} />
              <h3 className="font-display text-[20px] lg:text-[20px] lg:whitespace-nowrap font-bold leading-snug text-sc-marine mb-2">{t}</h3>
              <p className="text-[15px] leading-[1.6] text-slate-600 text-left max-w-none">{d}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* The artwork breaks out of the page container to run edge to edge along the bottom of the section. */}
      <div
        aria-hidden
        className="relative -mx-5 sm:-mx-8 lg:mx-[calc(50%-50vw)] lg:w-screen lg:max-w-screen pointer-events-none z-0 mt-8 lg:mt-[calc(32px-18.8vw)] overflow-visible"
      >
        <Image
          src="/brand/nri-world.webp"
          alt=""
          width={1983}
          height={793}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
        {HUBS.map((h) => (
          <span
            key={h.name}
            className="absolute hidden -translate-y-1/2 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 [text-shadow:0_1px_4px_rgba(5,13,32,.9)] sm:flex lg:text-xs"
            style={{ left: `${h.x}%`, top: `${h.y}%`, transform: 'translate(-100%, -50%)' }}
          >
            {h.name}
            <i className="block h-1.5 w-1.5 translate-x-[3px] rounded-full bg-sc-gold shadow-[0_0_8px_2px_rgba(212,175,55,.8)]" />
          </span>
        ))}
      </div>
    </Section>
  )
}
