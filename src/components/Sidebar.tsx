import { useState } from 'react'
// import { useTheme } from '../context/ThemeContext'
import {
  LayoutGrid,
  Users,
  BarChart3,
  Volleyball,
  PenLine,
  Drama,
  Disc,
  Baseline,
  Plus,
  Menu,
} from 'lucide-react'

const topIcons = [
  { icon: LayoutGrid, label: 'Dashboard' },
  { icon: Users, label: 'Users' },
  { icon: BarChart3, label: 'Stats' },
  { icon: Volleyball, label: 'Sports' },
  { icon: PenLine, label: 'Edit' },
  { icon: Drama, label: 'Theater' },
  { icon: Disc, label: 'Disc' },
  { icon: Baseline, label: 'Baseball' },
]

export default function Sidebar() {
  // const { theme, toggleTheme } = useTheme()
  const [selected, setSelected] = useState('Dashboard')

  return (
    <aside className="sidebar-bg fixed left-0 top-0 h-screen w-[72px] flex flex-col items-center py-4 z-50">
      <button
        className="mb-6 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--white)]"
      >
        <Menu size={20} />
      </button>

      <div className="flex flex-col items-center gap-5 flex-1">
        {topIcons.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setSelected(label)}
            className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              selected === label
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
            }`}
            title={label}
          >
            <Icon size={20} strokeWidth={1.5} />
            {selected === label && (
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-[var(--live-indicator)] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <button
        className="mt-auto w-10 h-10 flex items-center justify-center rounded-full bg-[var(--accent2)] text-black transition-colors"
        title="Add"
      >
        <Plus size={20} />
      </button>
    </aside>
  )
}
