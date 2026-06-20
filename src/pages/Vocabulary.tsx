import { useState, useEffect } from 'react'
import { Search, Star, BookOpen } from 'lucide-react'
import { useVocabStore } from '../stores/vocabStore'
import { fetchVocabulary } from '../lib/supabase'
import type { VocabularyWord } from '../types'

export default function Vocabulary() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'favorite'>('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const words = useVocabStore((s) => s.words)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const data = await fetchVocabulary()
        if (cancelled) return
        // Replace store words with fetched data
        useVocabStore.setState({ words: data as VocabularyWord[] })
      } catch (err) {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load vocabulary')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const filtered = words.filter((w) => {
    if (filter === 'favorite' && !w.favorite) return false
    if (search.trim()) {
      const q = search.toLowerCase()
      return (
        w.word.toLowerCase().includes(q) ||
        w.definition.toLowerCase().includes(q) ||
        w.translation?.toLowerCase().includes(q)
      )
    }
    return true
  })

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

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
          <span className="ml-3 text-sm text-surface-400">Loading vocabulary...</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-lg border border-red-900/30 bg-red-950/20 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Word List */}
      {!loading && !error && filtered.length > 0 && (
        <div className="space-y-3">
          {filtered.map((w) => (
            <div
              key={w.id}
              className="rounded-xl border border-surface-800 bg-surface-900/50 p-4 transition-colors hover:border-surface-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-surface-100">{w.word}</h3>
                    {w.favorite && <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />}
                  </div>
                  <p className="mt-1 text-sm text-surface-400">{w.definition}</p>
                  {w.translation && (
                    <p className="mt-0.5 text-xs text-surface-500">ID: {w.translation}</p>
                  )}
                  {w.example && (
                    <p className="mt-2 text-xs italic text-surface-500">"{w.example}"</p>
                  )}
                </div>
                <div className="ml-4 flex flex-col items-end gap-1">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-800">
                    <div
                      className="h-full rounded-full bg-primary-500 transition-all"
                      style={{ width: `${w.mastery}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-surface-600">{w.mastery}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-surface-800 bg-surface-900/50 py-16">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-800">
            <BookOpen className="h-7 w-7 text-surface-500" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-surface-200">
            {search ? 'No matching words' : 'No words saved yet'}
          </h3>
          <p className="max-w-sm text-center text-sm text-surface-500">
            {search
              ? 'Try a different search term.'
              : 'Words you save during conversations will appear here. Start a chat to begin building your vocabulary!'}
          </p>
        </div>
      )}
    </div>
  )
}
