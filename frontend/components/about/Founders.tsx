import Image from 'next/image'
import { FOUNDERS, type Founder } from '@/lib/content'
import { cn } from '@/lib/cn'

export function Founders({ founders = FOUNDERS }: { founders?: Founder[] }) {
  const count = founders.length

  const gridCols =
    count === 1
      ? 'max-w-md mx-auto grid-cols-1'
      : count === 2
      ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
      : count === 4
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-3'

  return (
    <section className="scroll-mt-[84px] sm:scroll-mt-[88px] bg-sc-mist py-[clamp(24px,4vh,48px)] min-h-0 md:min-h-[calc(100svh-88px)] flex flex-col justify-center snap-start">
      <div className="mx-auto w-full max-w-page px-5 sm:px-8">
        {/* Heading: left edge aligns with emblem section heading */}
        <div className="mb-[clamp(16px,3vh,32px)]">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl text-sc-marine">
            Meet the founders
          </h2>
        </div>

        {/* Founder cards grid: spans same container as emblem cards, 3 columns on tablet and desktop */}
        <div className={cn('grid gap-5', gridCols)}>
          {founders.map((founder, index) => (
            <div
              key={`${founder.name}-${index}`}
              className="h-auto w-full rounded-2xl border border-sc-line bg-sc-card shadow-card p-[clamp(14px,2.4vh,26px)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              {/* 1. Portrait photo placeholder: 4:5 aspect ratio, gold ring, silhouette, max clamp(160px, 30vh, 300px) */}
              <div className="relative mx-auto aspect-[4/5] h-[clamp(160px,30vh,300px)] w-auto max-w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#0B1B3D]/10 via-[#F2F4F8] to-[#FAFBFD] ring-1 ring-sc-gold/40 border border-sc-gold/30 flex items-center justify-center">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 380px"
                    className="object-cover"
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-14 w-14 sm:h-16 sm:w-16 text-sc-marine/25"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 20a8 8 0 0116 0H4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {/* 2. Name: serif card-title style used in emblem cards */}
              <h3 className="mt-[clamp(6px,1.2vh,12px)] font-display text-lg font-semibold text-sc-marine">
                {founder.name}
              </h3>

              {/* 3. Designation: small, gold, letter-spaced */}
              <p className="mt-[clamp(4px,0.8vh,8px)] text-xs font-semibold uppercase tracking-[0.14em] text-sc-bronze">
                {founder.role}
              </p>

              {/* 4. Bio or skeleton lines */}
              {/* FOUNDER PLACEHOLDER: replace name, role, bio and photo in lib/content.ts */}
              <div className="mt-[clamp(6px,1.2vh,12px)] w-full">
                {founder.bio ? (
                  <p className="text-sm leading-relaxed text-slate-600">
                    {founder.bio}
                  </p>
                ) : (
                  <div className="flex w-full flex-col items-center gap-1.5" aria-hidden="true">
                    <div className="h-2 w-28 max-w-[70%] rounded-full bg-slate-200" />
                    <div className="h-2 w-16 max-w-[45%] rounded-full bg-slate-200" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
