import { Clock, MapPin, ChevronRight } from 'lucide-react'

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[335px] rounded-[5px] bg-[var(--hero-bg)] flex items-center">

      {/* Player image on left */}
      <div className="absolute -left-4 bottom-0 h-full z-0">
        <img
          src="/man_lion.svg"
          alt="Player"
          className="relative z-10 h-[362px] w-full object-top"
        />
      </div>

      {/* Decorative ellipse on right */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none">
        <svg viewBox="0 0 500 335" className="w-full h-full" preserveAspectRatio="none">
          <ellipse
            cx="450"
            cy="190"
            rx="230"
            ry="160"
            fill="var(--hero-shape)"
            className="origin-right -rotate-80" // Rotates 12 degrees
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-[70%] flex justify-between items-end pl-[22%] pr-8">

        {/* Match Info */}
        <div className="flex flex-col w-[470px]">
          {/* Team Names with staggered offsets */}
          <div className="flex flex-col mb-4">
            <h2 className="text-[var(--hero-text)] text-left text-[42px] font-black tracking-tight leading-none">
              BARCELONA
            </h2>

            {/* Three slanted slashes - offset right */}
            {/* <div className="flex items-center h-8 opacity-40 ml-20"> */}
              <span className="text-gray-500 text-center text-3xl font-light italic">///</span>
            {/* </div> */}

            <h2 className="text-[var(--hero-text)] text-right text-[42px] font-black tracking-tight leading-none">
              REAL MADRID
            </h2>
          </div>

          {/* VS Section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-10 flex items-center justify-end">
              <img src="/barcelona.svg" alt="Barcelona" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[var(--hero-text)]/90 text-[10px] font-bold tracking-widest">VS</span>
            </div>
            <div className="w-10 h-10 flex items-center justify-start">
              <img src="/g3843.svg" alt="Real Madrid" className="w-8 h-8 object-contain" />
            </div>
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-center gap-8 text-[var(--hero-text)]/90">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[var(--hero-text)]/60" />
              <span className="text-sm font-semibold uppercase">5:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[var(--hero-text)]/60" />
              <span className="text-sm font-semibold uppercase">Spain</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-1">
          <div className="mb-4">
            <p className="text-[var(--hero-text)] text-[30px] font-medium leading-tight">Up To $50</p>
            <p className="text-[var(--hero-text)] text-[30px] font-medium leading-tight">Free Matched</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 bg-[var(--white)] text-[var(--hero-cta-text)] px-10 py-3 rounded-full text-[15px] font-bold hover:shadow-lg transition-all"
          >
            Join Now
            <ChevronRight size={18} strokeWidth={3} />
          </a>
        </div>

      </div>
    </div>
  )
}