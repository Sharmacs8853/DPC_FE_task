import { liveMatch } from '../data/mockData'

export default function LiveMatchWidget() {
  const { homeTeam, awayTeam, time, odds } = liveMatch

  return (
    <div className="rounded-lg p-4 shadow-sm border border-(--card-border)">
      <div className='flex justify-between px-4 py-2'>
        <div>
          <img src={homeTeam.logo} alt={homeTeam.name} className="w-15 h-15" />
          <span className="text-sm font-medium text-[var(--text-primary)]">{homeTeam.name}</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <span className="text-xs text-(--text-secondary)">{liveMatch.league}</span>
          <div className="flex items-center gap-1 text-2xl font-bold text-[var(--text-primary)]">
            <span>{homeTeam.score}</span>
            <span className="text-[var(--text-secondary)]">:</span>
            <span>{awayTeam.score}</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--live-indicator)] animate-pulse" />
            <span className="text-xs text-[var(--live-indicator)] font-medium">{time}</span>
          </div>
        </div>
        <div>
          <img src={awayTeam.logo} alt={awayTeam.name} className="w-15 h-15" />
          <span className="text-sm font-medium text-[var(--text-primary)]">{awayTeam.name}</span>
        </div>
      </div>
      

      <div className="flex gap-2">
        <div className="flex-1 text-center py-2 rounded-lg bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)]">
          {odds.home}
        </div>
        <div className="flex-1 text-center py-2 rounded-lg bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)]">
          {odds.draw}
        </div>
        <div className="flex-1 text-center py-2 rounded-lg bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)]">
          {odds.away}
        </div>
      </div>
    </div>
  )
}
