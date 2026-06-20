import { create } from 'zustand'
import type { Message, Conversation } from '../types'

interface ChatState {
  conversations: Conversation[]
  activeConversationId: string | null
  messages: Message[]
  isStreaming: boolean
  selectedModel: string
  selectedPersona: string
  selectedTopic: string
  correctionEnabled: boolean

  // Actions
  setActiveConversation: (id: string | null) => void
  addMessage: (message: Message) => void
  updateLastAssistantMessage: (content: string) => void
  setStreaming: (streaming: boolean) => void
  setModel: (model: string) => void
  setPersona: (persona: string) => void
  setTopic: (topic: string) => void
  toggleCorrection: () => void
  startNewConversation: () => string
  clearMessages: () => void
}

export const useChatStore = create<ChatState>((set, get) => ({
  conversations: [],
  activeConversationId: null,
  messages: [],
  isStreaming: false,
  selectedModel: 'openai/gpt-4o-mini',
  selectedPersona: 'friendly-tutor',
  selectedTopic: 'free-chat',
  correctionEnabled: true,

  setActiveConversation: (id) => set({ activeConversationId: id, messages: [] }),

  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),

  updateLastAssistantMessage: (content) =>
    set((state) => {
      const messages = [...state.messages]
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].role === 'assistant') {
          messages[i] = { ...messages[i], content }
          break
        }
      }
      return { messages }
    }),

  setStreaming: (streaming) => set({ isStreaming: streaming }),

  setModel: (model) => set({ selectedModel: model }),

  setPersona: (persona) => set({ selectedPersona: persona }),

  setTopic: (topic) => set({ selectedTopic: topic }),

  toggleCorrection: () =>
    set((state) => ({ correctionEnabled: !state.correctionEnabled })),

  startNewConversation: () => {
    const id = crypto.randomUUID()
    const newConversation: Conversation = {
      id,
      title: 'New Conversation',
      topic: get().selectedTopic,
      persona: get().selectedPersona,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messageCount: 0
    }
    set((state) => ({
      conversations: [newConversation, ...state.conversations],
      activeConversationId: id,
      messages: []
    }))
    return id
  },

  clearMessages: () => set({ messages: [], activeConversationId: null })
}))
