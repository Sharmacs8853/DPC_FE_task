import { ArrowLeft, ArrowRight } from 'lucide-react'
import LiveMatchWidget from './LiveMatchWidget'
import LeagueTable from './LeagueTable'
import TrendingWidget from './TrendingWidget'
import { premierLeagueTable, laLigaTable } from '../data/mockData'

export default function LeftPanel() {
  return (
    <div className="w-[340px] flex flex-col gap-4">
      {/* Live Matches header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[var(--text-primary)]">Live Matches</h3>
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <button className="hover:text-[var(--accent)] transition-colors">
            <ArrowLeft size={18} />
          </button>
          <button className="hover:text-[var(--accent)] text-red-500 transition-colors">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <LiveMatchWidget />

      <LeagueTable
        title="Premier League"
        flag='/flag2.png'
        country="England"
        data={premierLeagueTable}
      />

      <LeagueTable
        title="La Liga"
        flag='/flag1.png'
        country="Spain"
        data={laLigaTable}
      />

      <TrendingWidget />
    </div>
  )
}
