import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/cn'

// Brand rule: never below 48px tall on screen. Replace /public/brand/emblem.png with the true vector or
// high-resolution file (keep the file name) and nothing else changes.
export function Logo({ light, className }: { size?: number; light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn('flex shrink-0 items-center gap-3 sm:gap-3.5 min-w-0 group', className)} aria-label="Sustune Care home">
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/brand/emblem.png"
          alt="Sustune Care emblem"
          width={56}
          height={56}
          priority
          className="h-11 w-auto sm:h-12 lg:h-[50px] object-contain drop-shadow-md transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className={cn('font-display text-[21px] sm:text-[23px] lg:text-[25px] font-bold tracking-wider leading-none', light ? 'text-white' : 'text-sc-marine')}>
          SUSTUNE CARE
        </span>
        <span className={cn('text-[17px] max-[768px]:text-[14px] font-medium tracking-[0.06em] mt-1 leading-none', light ? 'text-sc-gold' : 'text-sc-bronze')}>
          For Global Indians
        </span>
      </div>
    </Link>
  )
}
