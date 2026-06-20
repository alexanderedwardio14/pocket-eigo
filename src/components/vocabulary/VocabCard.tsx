// Vocabulary-specific components

import { Star, Volume2, Trash2 } from 'lucide-react'
import type { VocabularyWord } from '../../types'

interface VocabCardProps {
  word: VocabularyWord
  onToggleFavorite: (id: string) => void
  onDelete: (id: string) => void
  onSpeak: (text: string) => void
}

export function VocabCard({ word, onToggleFavorite, onDelete, onSpeak }: VocabCardProps) {
  return (
    <div className="group rounded-xl border border-surface-800 bg-surface-900/50 p-4 transition-colors hover:border-surface-700">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-surface-100">{word.word}</h3>
            {word.translation && (
              <span className="text-sm text-surface-500">({word.translation})</span>
            )}
          </div>
          <p className="mt-1 text-sm text-surface-400">{word.definition}</p>
          {word.example && (
            <p className="mt-2 text-xs italic text-surface-500">"{word.example}"</p>
          )}

          {/* Mastery bar */}
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-surface-800">
              <div
                className="h-full rounded-full bg-primary-500 transition-all"
                style={{ width: `${word.mastery}%` }}
              />
            </div>
            <span className="text-xs text-surface-500">{word.mastery}%</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={() => onSpeak(word.word)}
            className="rounded-lg p-1.5 text-surface-500 hover:bg-surface-800 hover:text-surface-300"
            title="Listen"
          >
            <Volume2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onToggleFavorite(word.id)}
            className={`rounded-lg p-1.5 hover:bg-surface-800 ${
              word.favorite ? 'text-yellow-400' : 'text-surface-500 hover:text-surface-300'
            }`}
            title="Favorite"
          >
            <Star className="h-4 w-4" fill={word.favorite ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => onDelete(word.id)}
            className="rounded-lg p-1.5 text-surface-500 hover:bg-red-900/30 hover:text-red-400"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

interface VocabSearchProps {
  value: string
  onChange: (value: string) => void
}

export function VocabSearch({ value, onChange }: VocabSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search words, definitions, or translations..."
        className="w-full rounded-lg border border-surface-700 bg-surface-800 py-2.5 pl-10 pr-4 text-sm text-surface-100 placeholder-surface-500 outline-none focus:border-primary-600"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500">🔍</span>
    </div>
  )
}
