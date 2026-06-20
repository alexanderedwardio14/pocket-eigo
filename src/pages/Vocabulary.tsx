import { useState } from 'react'
import { Search, Star, BookOpen } from 'lucide-react'

export default function Vocabulary() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'favorite'>('all')

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-surface-100">Vocabulary</h1>
          <p className="text-surface-400">Your saved words and phrases</p>
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-surface-800 p-1">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-surface-700 text-surface-100'
                : 'text-surface-400 hover:text-surface-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('favorite')}
            className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === 'favorite'
                ? 'bg-surface-700 text-surface-100'
                : 'text-surface-400 hover:text-surface-200'
            }`}
          >
            <Star className="h-3.5 w-3.5" />
            Favorites
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search vocabulary..."
          className="w-full rounded-lg border border-surface-700 bg-surface-800 py-2.5 pl-10 pr-4 text-sm text-surface-100 placeholder-surface-500 outline-none transition-colors focus:border-primary-600"
        />
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center rounded-xl border border-surface-800 bg-surface-900/50 py-16">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-800">
          <BookOpen className="h-7 w-7 text-surface-500" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-surface-200">No words saved yet</h3>
        <p className="max-w-sm text-center text-sm text-surface-500">
          Words you save during conversations will appear here. Start a chat to begin building your
          vocabulary!
        </p>
      </div>
    </div>
  )
}
