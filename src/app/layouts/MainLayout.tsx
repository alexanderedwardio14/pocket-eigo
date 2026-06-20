import { Outlet, NavLink } from 'react-router'
import { MessageSquare, BookOpen, History, BarChart3, Settings, Home } from 'lucide-react'

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Dashboard' },
  { to: '/chat', icon: MessageSquare, label: 'Chat' },
  { to: '/vocabulary', icon: BookOpen, label: 'Vocabulary' },
  { to: '/history', icon: History, label: 'History' },
  { to: '/statistics', icon: BarChart3, label: 'Statistics' },
  { to: '/settings', icon: Settings, label: 'Settings' }
]

export function MainLayout() {
  return (
    <div className="flex h-screen bg-surface-950">
      {/* Sidebar */}
      <aside className="flex w-16 flex-col items-center gap-2 border-r border-surface-800 bg-surface-900 py-4 md:w-56 md:items-stretch md:px-3">
        <div className="mb-4 hidden items-center gap-2 px-2 md:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold">
            PE
          </div>
          <span className="text-lg font-semibold text-surface-100">PocketEigo</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-600/20 text-primary-400'
                    : 'text-surface-400 hover:bg-surface-800 hover:text-surface-200'
                }`
              }
            >
              <Icon className="h-5 w-5 shrink-0 md:mx-0 mx-auto" />
              <span className="hidden md:inline">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
