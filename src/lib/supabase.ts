import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables not set. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env'
  )
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')

export async function saveConversation(conversation: {
  id: string
  title: string
  topic: string
  persona: string
  messages: unknown[]
}) {
  const { data, error } = await supabase
    .from('conversations')
    .upsert({
      id: conversation.id,
      title: conversation.title,
      topic: conversation.topic,
      persona: conversation.persona,
      messages: conversation.messages,
      updated_at: new Date().toISOString()
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function fetchConversations() {
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .order('updated_at', { ascending: false })

  if (error) throw error
  return data
}

export async function deleteConversation(id: string) {
  const { error } = await supabase.from('conversations').delete().eq('id', id)
  if (error) throw error
}

export async function saveVocabularyWord(word: {
  id: string
  word: string
  definition: string
  translation?: string
  example?: string
  context?: string
  favorite?: boolean
  mastery?: number
}) {
  const { data, error } = await supabase
    .from('vocabulary')
    .upsert(word)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function fetchVocabulary() {
  const { data, error } = await supabase
    .from('vocabulary')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function deleteVocabularyWord(id: string) {
  const { error } = await supabase.from('vocabulary').delete().eq('id', id)
  if (error) throw error
}
