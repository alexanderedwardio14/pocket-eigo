import { Link } from 'react-router'
import { MessageSquare, BookOpen, Flame, TrendingUp, ArrowRight } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-2 text-2xl font-bold text-surface-100">Dashboard</h1>
      <p className="mb-8 text-surface-400">Welcome back! Continue your English learning journey.</p>

      {/* Quick Actions */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Link
          to="/chat"
          className="group flex items-center gap-4 rounded-xl border border-surface-800 bg-surface-900/50 p-5 transition-colors hover:border-primary-600/50 hover:bg-surface-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600/20">
            <MessageSquare className="h-6 w-6 text-primary-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-surface-100">Start New Chat</h3>
            <p className="text-sm text-surface-400">Begin a conversation with an AI partner</p>
          </div>
          <ArrowRight className="h-5 w-5 text-surface-600 transition-colors group-hover:text-primary-400" />
        </Link>

        <Link
          to="/vocabulary"
          className="group flex items-center gap-4 rounded-xl border border-surface-800 bg-surface-900/50 p-5 transition-colors hover:border-primary-600/50 hover:bg-surface-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600/20">
            <BookOpen className="h-6 w-6 text-primary-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-surface-100">Review Vocabulary</h3>
            <p className="text-sm text-surface-400">Practice your saved words</p>
          </div>
          <ArrowRight className="h-5 w-5 text-surface-600 transition-colors group-hover:text-primary-400" />
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-5">
          <div className="mb-2 flex items-center gap-2 text-surface-400">
            <Flame className="h-4 w-4 text-orange-400" />
            <span className="text-sm font-medium">Current Streak</span>
          </div>
          <p className="text-3xl font-bold text-surface-100">0</p>
          <p className="mt-1 text-xs text-surface-500">days</p>
        </div>

        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-5">
          <div className="mb-2 flex items-center gap-2 text-surface-400">
            <BookOpen className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium">Words Learned</span>
          </div>
          <p className="text-3xl font-bold text-surface-100">0</p>
          <p className="mt-1 text-xs text-surface-500">total</p>
        </div>

        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-5">
          <div className="mb-2 flex items-center gap-2 text-surface-400">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium">Conversations</span>
          </div>
          <p className="text-3xl font-bold text-surface-100">0</p>
          <p className="mt-1 text-xs text-surface-500">completed</p>
        </div>
      </div>

      {/* Recent Topics */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-surface-100">Recent Topics</h2>
        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-8 text-center">
          <p className="text-surface-500">No conversations yet. Start your first chat!</p>
        </div>
      </div>
    </div>
  )
}
