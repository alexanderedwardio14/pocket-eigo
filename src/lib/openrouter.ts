const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1'

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface OpenRouterModel {
  id: string
  name: string
  description: string
  contextLength: number
  pricing: string
}

export async function streamChat(
  messages: ChatMessage[],
  model: string,
  apiKey: string,
  onChunk: (chunk: string) => void,
  onError: (error: Error) => void
): Promise<string> {
  const effectiveApiKey = apiKey || import.meta.env.VITE_OPENROUTER_API_KEY

  if (!effectiveApiKey) {
    throw new Error(
      'OpenRouter API key not configured. Add it in Settings or set VITE_OPENROUTER_API_KEY in .env'
    )
  }

  try {
    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${effectiveApiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'PocketEigo'
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 1024
      })
    })

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(`OpenRouter API error (${response.status}): ${errorBody}`)
    }

    const reader = response.body?.getReader()
    if (!reader) throw new Error('No response body')

    const decoder = new TextDecoder()
    let fullContent = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value, { stream: true })
      const lines = chunk.split('\n').filter((line) => line.trim().startsWith('data: '))

      for (const line of lines) {
        const data = line.replace('data: ', '').trim()
        if (data === '[DONE]') continue

        try {
          const parsed = JSON.parse(data)
          const content = parsed.choices?.[0]?.delta?.content
          if (content) {
            fullContent += content
            onChunk(content)
          }
        } catch {
          // Skip malformed JSON chunks
        }
      }
    }

    return fullContent
  } catch (error) {
    onError(error instanceof Error ? error : new Error(String(error)))
    throw error
  }
}

export async function fetchModels(apiKey: string): Promise<OpenRouterModel[]> {
  const effectiveApiKey = apiKey || import.meta.env.VITE_OPENROUTER_API_KEY

  const response = await fetch(`${OPENROUTER_BASE_URL}/models`, {
    headers: {
      Authorization: `Bearer ${effectiveApiKey}`
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch models: ${response.status}`)
  }

  const data = await response.json()
  return data.data.map((m: { id: string; name?: string; context_length: number; pricing: { prompt: string } }) => ({
    id: m.id,
    name: m.name || m.id,
    description: '',
    contextLength: m.context_length,
    pricing: m.pricing?.prompt || '0'
  }))
}
