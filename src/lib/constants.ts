import { AVAILABLE_TOPICS } from '../data/topics'
import { AVAILABLE_PERSONAS } from '../data/personas'
import { AVAILABLE_MODELS } from '../data/models'

export { AVAILABLE_TOPICS, AVAILABLE_PERSONAS, AVAILABLE_MODELS }

export const APP_NAME = 'PocketEigo'
export const APP_VERSION = '0.0.1'

export const MAX_MESSAGE_LENGTH = 2000
export const MAX_VOCABULARY_WORDS = 10000

export const STORAGE_KEYS = {
  SETTINGS: 'pocket-eigo-settings',
  CHAT_HISTORY: 'pocket-eigo-chat-history',
  VOCABULARY: 'pocket-eigo-vocabulary',
  STATS: 'pocket-eigo-stats'
} as const

export const DEFAULT_SYSTEM_PROMPT = `You are a helpful English conversation partner for Japanese learners.
- Respond naturally in English at an appropriate level
- Gently correct mistakes by modeling correct usage
- Ask follow-up questions to keep the conversation going
- Use simple vocabulary when appropriate, but don't be condescending
- Occasionally introduce new words with explanations
- Be encouraging and patient`
