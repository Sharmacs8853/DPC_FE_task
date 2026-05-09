import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import LeftPanel from './components/LeftPanel'
import HeroBanner from './components/HeroBanner'
import LatestMatches from './components/LatestMatches'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-main)] font-roboto">
        <Sidebar />
        <Header />
        <main className="pt-[80px] pl-[88px] pr-6 pb-6">
          <div className="flex gap-6">
            <LeftPanel />
            <div className="flex-1 flex flex-col gap-6">
              <HeroBanner />
              <LatestMatches />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
