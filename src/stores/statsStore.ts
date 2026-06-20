import { create } from 'zustand'

export interface DailyStats {
  date: string
  messageCount: number
  wordCount: number
  sessionMinutes: number
  wordsLearned: number
}

interface StatsState {
  dailyStats: DailyStats[]
  currentStreak: number
  longestStreak: number
  totalMessages: number
  totalWords: number
  totalSessions: number

  // Actions
  recordMessage: (wordCount: number) => void
  recordWordsLearned: (count: number) => void
  endSession: (minutes: number) => void
  calculateStreak: () => void
  getTodayStats: () => DailyStats
  getWeekStats: () => DailyStats[]
}

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

export const useStatsStore = create<StatsState>((set, get) => ({
  dailyStats: [],
  currentStreak: 0,
  longestStreak: 0,
  totalMessages: 0,
  totalWords: 0,
  totalSessions: 0,

  recordMessage: (wordCount) =>
    set((state) => {
      const today = getToday()
      const existing = state.dailyStats.find((s) => s.date === today)
      const updated = existing
        ? state.dailyStats.map((s) =>
            s.date === today
              ? {
                  ...s,
                  messageCount: s.messageCount + 1,
                  wordCount: s.wordCount + wordCount
                }
              : s
          )
        : [
            ...state.dailyStats,
            {
              date: today,
              messageCount: 1,
              wordCount,
              sessionMinutes: 0,
              wordsLearned: 0
            }
          ]
      return {
        dailyStats: updated,
        totalMessages: state.totalMessages + 1,
        totalWords: state.totalWords + wordCount
      }
    }),

  recordWordsLearned: (count) =>
    set((state) => {
      const today = getToday()
      const existing = state.dailyStats.find((s) => s.date === today)
      const updated = existing
        ? state.dailyStats.map((s) =>
            s.date === today
              ? { ...s, wordsLearned: s.wordsLearned + count }
              : s
          )
        : [
            ...state.dailyStats,
            {
              date: today,
              messageCount: 0,
              wordCount: 0,
              sessionMinutes: 0,
              wordsLearned: count
            }
          ]
      return { dailyStats: updated }
    }),

  endSession: (minutes) =>
    set((state) => {
      const today = getToday()
      const existing = state.dailyStats.find((s) => s.date === today)
      const updated = existing
        ? state.dailyStats.map((s) =>
            s.date === today
              ? { ...s, sessionMinutes: s.sessionMinutes + minutes }
              : s
          )
        : [
            ...state.dailyStats,
            {
              date: today,
              messageCount: 0,
              wordCount: 0,
              sessionMinutes: minutes,
              wordsLearned: 0
            }
          ]
      return {
        dailyStats: updated,
        totalSessions: state.totalSessions + 1
      }
    }),

  calculateStreak: () =>
    set((state) => {
      const sorted = [...state.dailyStats].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      let streak = 0
      const today = new Date()

      for (let i = 0; i < sorted.length; i++) {
        const expected = new Date(today)
        expected.setDate(expected.getDate() - i)
        const expectedStr = expected.toISOString().split('T')[0]
        if (sorted[i]?.date === expectedStr && sorted[i].messageCount > 0) {
          streak++
        } else {
          break
        }
      }

      return {
        currentStreak: streak,
        longestStreak: Math.max(state.longestStreak, streak)
      }
    }),

  getTodayStats: () => {
    const today = getToday()
    return (
      get().dailyStats.find((s) => s.date === today) || {
        date: today,
        messageCount: 0,
        wordCount: 0,
        sessionMinutes: 0,
        wordsLearned: 0
      }
    )
  },

  getWeekStats: () => {
    const stats = get().dailyStats
    const today = new Date()
    const week: DailyStats[] = []

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().split('T')[0]
      const existing = stats.find((s) => s.date === dateStr)
      week.push(
        existing || {
          date: dateStr,
          messageCount: 0,
          wordCount: 0,
          sessionMinutes: 0,
          wordsLearned: 0
        }
      )
    }

    return week
  }
}))
