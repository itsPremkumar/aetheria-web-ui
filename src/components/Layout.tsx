import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, BarChart3, Palette, Layers, Activity, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

const navItems = [
  { to: '/', icon: BarChart3, label: 'Dashboard' },
  { to: '/design-system', icon: Palette, label: 'Design System' },
  { to: '/verticals', icon: Layers, label: 'Verticals' },
  { to: '/analytics', icon: Activity, label: 'Analytics' },
  { to: '/realtime', icon: Zap, label: 'Real-Time' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-surface-200 dark:border-surface-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-lg text-surface-900 dark:text-white">Aetheria</span>
            </div>
            <div className="flex items-center gap-1">
              {navItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{label}</span>
                </NavLink>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
