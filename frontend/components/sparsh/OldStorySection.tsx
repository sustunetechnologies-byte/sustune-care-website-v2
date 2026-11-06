// OLD SECTION - kept for reference
// Original "A trusted presence back home" section from Sparsh page with timeline and portrait video.

import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { TYPICAL_DAY } from '@/lib/content'
import { STORY_VIDEO } from '@/lib/config'

export function OldStorySection() {
  return (
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
  )
}
