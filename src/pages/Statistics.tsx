import { TrendingUp, BookOpen, MessageSquare, Calendar } from 'lucide-react'

export default function Statistics() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-surface-100">Statistics</h1>
        <p className="text-surface-400">Track your learning progress</p>
      </div>

      {/* Overview Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Messages', value: '0', icon: MessageSquare, color: 'text-primary-400' },
          { label: 'Words Learned', value: '0', icon: BookOpen, color: 'text-green-400' },
          { label: 'Study Days', value: '0', icon: Calendar, color: 'text-orange-400' },
          { label: 'Avg. Session', value: '0m', icon: TrendingUp, color: 'text-purple-400' }
        ].map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="rounded-xl border border-surface-800 bg-surface-900/50 p-5"
          >
            <Icon className={`mb-3 h-5 w-5 ${color}`} />
            <p className="text-2xl font-bold text-surface-100">{value}</p>
            <p className="mt-1 text-xs text-surface-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-6">
          <h3 className="mb-4 text-sm font-semibold text-surface-200">Daily Activity</h3>
          <div className="flex h-48 items-center justify-center text-sm text-surface-600">
            Chart placeholder — connect to statsStore
          </div>
        </div>

        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-6">
          <h3 className="mb-4 text-sm font-semibold text-surface-200">Words Over Time</h3>
          <div className="flex h-48 items-center justify-center text-sm text-surface-600">
            Chart placeholder — connect to statsStore
          </div>
        </div>
      </div>
    </div>
  )
}
