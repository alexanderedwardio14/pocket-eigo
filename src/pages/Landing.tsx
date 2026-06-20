import { Link } from 'react-router'
import { MessageSquare, Mic, BookOpen, ArrowRight } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-surface-950">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
            PE
          </div>
          <span className="text-xl font-bold text-surface-100">PocketEigo</span>
        </div>
        <Link
          to="/dashboard"
          className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          Get Started
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 md:text-6xl">
          Practice English with
          <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            {' '}AI Conversations
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-400">
          Your personal English conversation partner. Practice speaking, get real-time corrections,
          and build vocabulary — all powered by AI.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Start Practicing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MessageSquare,
              title: 'Natural Conversations',
              description: 'Chat with AI personas in real-world scenarios — from coffee shops to job interviews.'
            },
            {
              icon: Mic,
              title: 'Voice Practice',
              description: 'Speak naturally with speech recognition and get instant pronunciation feedback.'
            },
            {
              icon: BookOpen,
              title: 'Smart Vocabulary',
              description: 'Save words during chat, review them with spaced repetition, and track progress.'
            }
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-surface-800 bg-surface-900/50 p-6 transition-colors hover:border-surface-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20">
                <Icon className="h-5 w-5 text-primary-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-surface-100">{title}</h3>
              <p className="text-sm leading-relaxed text-surface-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-800 py-6 text-center text-sm text-surface-500">
        PocketEigo — AI English Conversation Practice
      </footer>
    </div>
  )
}
