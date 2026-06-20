import { create } from 'zustand'

interface SettingsState {
  theme: 'dark' | 'light'
  apiKey: string
  model: string
  defaultPersona: string
  defaultTopic: string
  correctionEnabled: boolean
  voiceEnabled: boolean
  autoSave: boolean

  // Actions
  setTheme: (theme: 'dark' | 'light') => void
  setApiKey: (key: string) => void
  setModel: (model: string) => void
  setDefaultPersona: (persona: string) => void
  setDefaultTopic: (topic: string) => void
  toggleCorrection: () => void
  toggleVoice: () => void
  toggleAutoSave: () => void
  exportSettings: () => string
  importSettings: (json: string) => boolean
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  theme: 'dark',
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY || '',
  model: 'openai/gpt-4o-mini',
  defaultPersona: 'friendly-tutor',
  defaultTopic: 'free-chat',
  correctionEnabled: true,
  voiceEnabled: true,
  autoSave: true,

  setTheme: (theme) => set({ theme }),

  setApiKey: (key) => set({ apiKey: key }),

  setModel: (model) => set({ model }),

  setDefaultPersona: (persona) => set({ defaultPersona: persona }),

  setDefaultTopic: (topic) => set({ defaultTopic: topic }),

  toggleCorrection: () =>
    set((state) => ({ correctionEnabled: !state.correctionEnabled })),

  toggleVoice: () =>
    set((state) => ({ voiceEnabled: !state.voiceEnabled })),

  toggleAutoSave: () =>
    set((state) => ({ autoSave: !state.autoSave })),

  exportSettings: () => {
    const state = get()
    return JSON.stringify(
      {
        theme: state.theme,
        model: state.model,
        defaultPersona: state.defaultPersona,
        defaultTopic: state.defaultTopic,
        correctionEnabled: state.correctionEnabled,
        voiceEnabled: state.voiceEnabled,
        autoSave: state.autoSave
      },
      null,
      2
    )
  },

  importSettings: (json) => {
    try {
      const parsed = JSON.parse(json)
      set((state) => ({
        ...state,
        ...parsed
      }))
      return true
    } catch {
      return false
    }
  }
}))
