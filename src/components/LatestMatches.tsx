import { Clock, MapPin, Heart, ChevronRight } from 'lucide-react'
import { latestMatches } from '../data/mockData'

export default function LatestMatches() {
  return (
    <div className="flex flex-col gap-4">
      {/* Filter bar */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Latest Matches</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-[var(--text-secondary)]">Filter :</span>
          <span className="px-3 py-1.5 rounded-full border border-[var(--card-border)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer">
            Football
          </span>
          <span className="px-3 py-1.5 rounded-full border border-[var(--card-border)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer">
            Anywhere
          </span>
          <span className="text-sm text-[var(--text-secondary)]">View All</span>
        </div>
      </div>

      {/* Match cards */}
      <div className="flex flex-col gap-3">
        {latestMatches.map((match) => (
          <div
            key={match.id}
            className='flex items-center justify-between px-5 py-4 rounded-md border bg-[var(--table-card-bg)] hover:bg-[var(--accent)] border-[var(--table-card-border)] hover:border-gray-400'
          >
            {/* Home team */}
            <div className="flex items-center gap-8 min-w-35">
              <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-10 h-10 rounded-full" />
              <span className={`text-sm font-medium ${match.featured ? 'text-[var(--white)]' : 'text-[var(--text-primary)]'}`}>
                {match.homeTeam.name}
              </span>
            </div>

            {/* VS with vertical line */}
            <div className="relative flex items-center justify-center h-12">
              <div className={`absolute w-px h-full ${match.featured ? 'bg-[var(--white)]/30' : 'bg-[var(--card-border)]'}`} />
              <div className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full border text-[10px] font-bold ${
                match.featured
                  ? 'border-[var(--white)]/60 text-[var(--white)]'
                  : 'border-[var(--card-border)] text-[var(--text-secondary)]'
              }`}>
                VS
              </div>
            </div>

            {/* Away team */}
            <div className="flex items-center gap-8 min-w-35 justify-end">
              <span className={`text-sm font-medium ${match.featured ? 'text-[var(--white)]' : 'text-[var(--text-primary)]'}`}>
                {match.awayTeam.name}
              </span>
              <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-10 h-10 rounded-full" />
            </div>

            {/* Meta */}
            <div className={`flex items-center gap-8 text-sm ${match.featured ? 'text-[var(--white)]/90' : 'text-[var(--text-secondary)]'}`}>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {match.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {match.location}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-10">
              <Heart
                size={24}
                className={match.liked ? 'text-[var(--heart-color)] fill-[var(--heart-color)]' : 'text-[var(--text-secondary)]'}
              />
              <a
                href="#"
                className={`flex items-center gap-1 text-sm font-medium ${
                  match.featured ? 'text-[var(--white)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                View Details
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
