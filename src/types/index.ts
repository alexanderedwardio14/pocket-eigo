export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: string
  correction?: Correction | null
}

export interface Correction {
  original: string
  corrected: string
  explanation: string
}

export interface Conversation {
  id: string
  title: string
  topic: string
  persona: string
  createdAt: string
  updatedAt: string
  messageCount: number
}

export interface VocabularyWord {
  id: string
  word: string
  definition: string
  translation?: string
  example?: string
  context?: string
  favorite: boolean
  mastery: number // 0-100
  createdAt: string
  lastReviewed?: string
}

export interface Topic {
  id: string
  name: string
  nameJa: string
  description: string
  icon: string
  systemPrompt: string
}

export interface Persona {
  id: string
  name: string
  nameJa: string
  description: string
  avatar: string
  systemPrompt: string
  traits: string[]
}

export interface ModelOption {
  id: string
  name: string
  provider: string
  description: string
  contextLength: number
  recommended?: boolean
}

export interface UserSettings {
  theme: 'dark' | 'light'
  apiKey: string
  model: string
  defaultPersona: string
  defaultTopic: string
  correctionEnabled: boolean
  voiceEnabled: boolean
  autoSave: boolean
}
