import { ChevronRight } from "lucide-react"

interface TeamRow {
  rank: number
  team: string
  logo: string
  d: number
  l: number
  ga: number
  gd: number
  pts: number
}

interface Props {
  title: string
  flag: string
  country: string
  data: TeamRow[]
}

export default function LeagueTable({ title, flag, country, data }: Props) {
  return (
    <>
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={flag} alt={flag} className="w-8 h-8" />
          <span className="text-sm font-semibold text-[var(--text-primary)]">{title}</span>
          <span className="text-xs text-[var(--text-secondary)]">{country}</span>
        </div>
        <span className="text-[var(--text-secondary)]">
          <ChevronRight size={18} strokeWidth={2  } />
        </span>
      </div>
      <div className="card-bg rounded-lg overflow-hidden shadow-sm border border-[var(--card-border)]">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 text-xs font-medium text-[var(--text-secondary)]">Team</th>
              <th className="text-center py-3 px-2 text-xs font-medium text-[var(--text-secondary)]">D</th>
              <th className="text-center py-3 px-2 text-xs font-medium text-[var(--text-secondary)]">L</th>
              <th className="text-center py-3 px-2 text-xs font-medium text-[var(--text-secondary)]">Ga</th>
              <th className="text-center py-3 px-2 text-xs font-medium text-[var(--text-secondary)]">Gd</th>
              <th className="text-center py-3 px-2 text-xs font-medium text-[var(--text-secondary)]">Pts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.rank} className="border-t border-[var(--card-border)]">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img src={row.logo} alt={row.team} className="w-5 h-5" />
                    <span className="text-xs font-medium text-[var(--text-primary)]">{row.team}</span>
                  </div>
                </td>
                <td className="text-center py-2 text-xs text-[var(--text-primary)]">{row.d}</td>
                <td className="text-center py-2 text-xs text-[var(--text-primary)]">{row.l}</td>
                <td className="text-center py-2 text-xs text-[var(--text-primary)]">{row.ga}</td>
                <td className="text-center py-2 text-xs text-[var(--text-primary)]">{row.gd}</td>
                <td className="text-center py-2 text-xs font-semibold text-[var(--text-primary)]">{row.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
