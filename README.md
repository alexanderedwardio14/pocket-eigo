# PocketEigo

AI-powered English conversation practice app. Talk to AI personas, get grammar corrections, build vocabulary — all in your browser.

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS 4** — utility-first styling
- **Zustand** — lightweight state management
- **React Router v7** — client-side routing
- **Supabase** — PostgreSQL backend (conversations, vocabulary)
- **OpenRouter** — multi-model AI API (GPT, Claude, Gemini, DeepSeek, etc.)
- **vite-plugin-pwa** — installable, offline-capable
- **Lucide React** — icon library

## Features

| Feature | Status |
|---------|--------|
| AI Chat with streaming | Done |
| Topic selection | Done |
| AI Persona modes | Done |
| Grammar correction panel | Stub |
| Vocabulary extraction | Stub |
| Saved vocabulary with search/filter | Stub |
| Conversation history | Stub |
| Learning statistics | Stub |
| Voice input (Web Speech API) | Hook ready |
| Text-to-Speech output | Hook ready |
| Custom API key | Done |
| Model selection | Done |
| Dark/Light theme | Done |
| PWA installable | Done |
| Offline cache | Stub |

## Project Structure

```
src/
  app/
    App.tsx              # Router setup
    layouts/
      MainLayout.tsx     # Sidebar + header + outlet
  pages/
    Landing.tsx          # Hero, CTA, features
    Dashboard.tsx        # Quick actions, stats, recent topics
    Chat.tsx             # Message list, input, voice, corrections
    Vocabulary.tsx       # Saved words, search, favorites
    History.tsx          # Conversation list, resume
    Statistics.tsx       # Charts, daily activity
    Settings.tsx         # Theme, API key, model, persona, export
  components/
    ui/                  # Button, Input, Modal, Card
    chat/                # MessageBubble, ChatInput, CorrectionPanel
    vocabulary/          # VocabCard, VocabSearch
  stores/
    chatStore.ts         # Chat state, streaming, model/persona/topic
    vocabStore.ts        # Vocabulary CRUD, favorites, search
    settingsStore.ts     # Theme, API key, model, persona defaults
    statsStore.ts        # Daily stats, streak, session tracking
  lib/
    supabase.ts          # Supabase client + DB helpers
    openrouter.ts        # OpenRouter streaming API
    constants.ts         # App config, storage keys, system prompt
  types/
    index.ts             # TypeScript interfaces
  hooks/
    useSpeechToText.ts   # Web Speech API hook
    useTextToSpeech.ts   # SpeechSynthesis hook
  data/
    topics.ts            # Topic definitions + system prompts
    personas.ts          # AI persona definitions
    models.ts            # Available AI models
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Supabase project (free tier works)

### Setup

```bash
# Clone
git clone <repo-url>
cd pocket-eigo

# Install deps
npm install

# Environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase + OpenRouter keys

# Run dev server
npm run dev
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | Yes | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Yes | Supabase anon key |
| `VITE_OPENROUTER_API_KEY` | No | Default OpenRouter API key (user can override in Settings) |

### Supabase Schema

```sql
-- Conversations
create table conversations (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  topic text not null default 'free-chat',
  persona text not null default 'friendly-tutor',
  messages jsonb not null default '[]'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Vocabulary
create table vocabulary (
  id uuid primary key default gen_random_uuid(),
  word text not null,
  definition text not null,
  translation text,
  example text,
  context text,
  favorite boolean default false,
  mastery integer default 0,
  created_at timestamptz default now()
);
```

## AI Personas

| Persona | Style |
|---------|-------|
| Friendly Tutor | Encouraging, explains mistakes gently |
| Business Partner | Professional, formal tone |
| Casual Friend | Relaxed, slang, everyday English |
| Strict Teacher | Direct corrections, grammar focus |

## Available Models

- GPT-4o Mini / GPT-4o (OpenAI)
- Claude Sonnet 4 (Anthropic)
- Gemini 2.0 Flash (Google)
- DeepSeek V3 (DeepSeek)
- Qwen 3 (Alibaba)
- Mistral 7B (Mistral AI)

User can pick model in Settings or use API key from OpenRouter.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Roadmap

### V2
- AI pronunciation scoring
- Flashcards with spaced repetition
- Translation mode
- Export vocabulary (CSV/Anki)

### V3
- Real-time voice conversation
- Multi-language support
- Daily missions
- AI-generated quizzes
- Personalized study plan

## License

MIT
