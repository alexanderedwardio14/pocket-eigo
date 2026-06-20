import { create } from 'zustand'
import type { VocabularyWord } from '../types'

interface VocabState {
  words: VocabularyWord[]
  searchQuery: string
  filter: 'all' | 'favorite' | 'learning' | 'mastered'

  // Actions
  addWord: (word: VocabularyWord) => void
  removeWord: (id: string) => void
  toggleFavorite: (id: string) => void
  updateMastery: (id: string, delta: number) => void
  setSearchQuery: (query: string) => void
  setFilter: (filter: VocabState['filter']) => void
  getFilteredWords: () => VocabularyWord[]
}

export const useVocabStore = create<VocabState>((set, get) => ({
  words: [],
  searchQuery: '',
  filter: 'all',

  addWord: (word) =>
    set((state) => ({
      words: [
        {
          ...word,
          mastery: Math.min(100, Math.max(0, word.mastery))
        },
        ...state.words
      ]
    })),

  removeWord: (id) =>
    set((state) => ({ words: state.words.filter((w) => w.id !== id) })),

  toggleFavorite: (id) =>
    set((state) => ({
      words: state.words.map((w) =>
        w.id === id ? { ...w, favorite: !w.favorite } : w
      )
    })),

  updateMastery: (id, delta) =>
    set((state) => ({
      words: state.words.map((w) =>
        w.id === id
          ? { ...w, mastery: Math.min(100, Math.max(0, w.mastery + delta)) }
          : w
      )
    })),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setFilter: (filter) => set({ filter }),

  getFilteredWords: () => {
    const { words, searchQuery, filter } = get()
    let filtered = words

    if (filter === 'favorite') {
      filtered = filtered.filter((w) => w.favorite)
    } else if (filter === 'learning') {
      filtered = filtered.filter((w) => w.mastery < 70)
    } else if (filter === 'mastered') {
      filtered = filtered.filter((w) => w.mastery >= 70)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.definition.toLowerCase().includes(q) ||
          w.translation?.toLowerCase().includes(q)
      )
    }

    return filtered
  }
}))
