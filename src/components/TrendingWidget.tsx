import { trendingMatch } from '../data/mockData'

export default function TrendingWidget() {
  const { homeTeam, awayTeam, time, league } = trendingMatch

  return (
    <div className="card-bg rounded-xl p-4 shadow-sm border border-[var(--card-border)]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-[var(--text-primary)]">Trending Now</span>
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-1">
          <img src={homeTeam.logo} alt={homeTeam.name} className="w-10 h-10" />
          <span className="text-xs text-[var(--text-secondary)]">{homeTeam.name}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-[var(--text-secondary)]">{league}</span>
          <div className="flex items-center gap-1 text-lg font-bold text-[var(--text-primary)]">
            <span>{homeTeam.score}</span>
            <span className="text-[var(--text-secondary)]">:</span>
            <span>{awayTeam.score}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--live-indicator)] animate-pulse" />
            <span className="text-xs text-[var(--live-indicator)]">{time}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={awayTeam.logo} alt={awayTeam.name} className="w-10 h-10" />
          <span className="text-xs text-[var(--text-secondary)]">{awayTeam.name}</span>
        </div>
      </div>
    </div>
  )
}
