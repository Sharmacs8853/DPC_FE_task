import { useState } from 'react'
import { Search, Bell, Mail, Heart, ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = ['Live Match', 'Scorecard', 'Commentary', 'Players', 'My Matches']

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [selected, setSelected] = useState('Live Match')
  return (
    <header className="header-bg fixed top-0 right-0 left-[72px] h-[68px] flex items-center px-6 z-40">

      <nav className="flex items-center gap-8 mr-auto">
        {navLinks.map(link => (
          <button
            key={link}
            onClick={() => setSelected(link)}
            className={`relative text-sm font-medium transition-colors ${selected === link
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
              }`}
          >
            {link}
            {selected === link && (
              <span className="absolute -top-6 left-0 right-0 h-0.5 bg-[var(--live-indicator)] rounded-full" />
            )}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
          <input
            type="text"
            placeholder="Search Matches, Players, Stats ..."
            className="h-10 w-[320px] rounded-full border border-[var(--card-border)] bg-transparent pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)]"
          />
        </div>
        <button
          className="relative text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button className="relative text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--live-indicator)]" />
        </button>

        <button className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
          <Mail size={20} />
        </button>

        <button className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
          <Heart size={20} />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-[var(--avatar-bg)] overflow-hidden">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Jane Doe"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-[var(--text-primary)]">Jane Doe</span>
          <ChevronDown size={16} className="text-[var(--text-secondary)]" />
        </div>
      </div>
    </header>
  )
}
