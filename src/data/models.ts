import type { ModelOption } from '../types'

export const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: 'openai/gpt-4o-mini',
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    description: 'Fast and affordable, great for conversation practice',
    contextLength: 128000,
    recommended: true
  },
  {
    id: 'openai/gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    description: 'Most capable OpenAI model, excellent quality',
    contextLength: 128000
  },
  {
    id: 'anthropic/claude-sonnet-4-20250514',
    name: 'Claude Sonnet 4',
    provider: 'Anthropic',
    description: 'Great for nuanced conversation and detailed feedback',
    contextLength: 200000
  },
  {
    id: 'anthropic/claude-haiku-4-20250514',
    name: 'Claude Haiku 4',
    provider: 'Anthropic',
    description: 'Fast and efficient, good for quick practice',
    contextLength: 200000
  },
  {
    id: 'google/gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google',
    description: 'Fast Google model with good reasoning',
    contextLength: 1000000
  },
  {
    id: 'google/gemini-2.5-flash-preview',
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    description: 'Latest Google model with improved capabilities',
    contextLength: 1000000
  },
  {
    id: 'meta-llama/llama-4-maverick',
    name: 'Llama 4 Maverick',
    provider: 'Meta',
    description: 'Open-weight model with strong performance',
    contextLength: 1000000
  }
]
