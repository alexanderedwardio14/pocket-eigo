import type { Topic } from '../types'

export const AVAILABLE_TOPICS: Topic[] = [
  {
    id: 'free-chat',
    name: 'Free Chat',
    nameJa: 'フリーチャット',
    description: 'Talk about anything you want',
    icon: '💬',
    systemPrompt: `You are having a casual conversation. Talk about any topic the user brings up.
Keep the conversation natural and engaging. Ask follow-up questions.
Gently correct any English mistakes by modeling correct usage.`
  },
  {
    id: 'daily-life',
    name: 'Daily Life',
    nameJa: '日常生活',
    description: 'Practice everyday situations',
    icon: '🏠',
    systemPrompt: `You are roleplaying everyday situations like ordering food, shopping, asking for directions,
or having casual conversations with neighbors and coworkers. Keep it practical and realistic.
Help the user practice common phrases they would use in daily life.`
  },
  {
    id: 'business',
    name: 'Business English',
    nameJa: 'ビジネス英語',
    description: 'Professional communication',
    icon: '💼',
    systemPrompt: `You are a business colleague or client. Practice professional English for meetings,
presentations, emails, and workplace conversations. Use appropriate business vocabulary.
Help the user sound professional and confident in business settings.`
  },
  {
    id: 'travel',
    name: 'Travel',
    nameJa: '旅行',
    description: 'Airports, hotels, sightseeing',
    icon: '✈️',
    systemPrompt: `You are helping the user practice English for travel situations.
Roleplay scenarios like checking into hotels, asking for directions, ordering at restaurants,
and interacting with locals while traveling. Include cultural tips where relevant.`
  },
  {
    id: 'interview',
    name: 'Job Interview',
    nameJa: '面接',
    description: 'Interview practice',
    icon: '🎯',
    systemPrompt: `You are conducting a job interview. Ask common interview questions and help the user
practice answering them confidently. Provide feedback on their answers and suggest improvements.
Cover questions about experience, strengths, weaknesses, and situational scenarios.`
  },
  {
    id: 'grammar',
    name: 'Grammar Focus',
    nameJa: '文法',
    description: 'Targeted grammar practice',
    icon: '📝',
    systemPrompt: `You are a grammar tutor. Focus on helping the user understand and practice specific
grammar points. Create exercises, explain rules clearly with examples, and provide gentle corrections.
Ask the user which grammar topic they want to focus on.`
  }
]
