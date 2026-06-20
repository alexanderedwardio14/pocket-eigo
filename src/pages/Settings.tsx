import { useState } from 'react'
import { Moon, Sun, Key, User, Download, Trash2 } from 'lucide-react'

export default function Settings() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('openai/gpt-4o-mini')
  const [persona, setPersona] = useState('friendly-tutor')

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-2 text-2xl font-bold text-surface-100">Settings</h1>
      <p className="mb-8 text-surface-400">Customize your PocketEigo experience</p>

      {/* Appearance */}
      <section className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-500">
          Appearance
        </h2>
        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-surface-400" />
              ) : (
                <Sun className="h-5 w-5 text-surface-400" />
              )}
              <div>
                <p className="text-sm font-medium text-surface-200">Theme</p>
                <p className="text-xs text-surface-500">Choose your preferred color scheme</p>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-surface-800 p-1">
              <button
                onClick={() => setTheme('dark')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  theme === 'dark' ? 'bg-surface-700 text-surface-100' : 'text-surface-400'
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  theme === 'light' ? 'bg-surface-700 text-surface-100' : 'text-surface-400'
                }`}
              >
                Light
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* API Configuration */}
      <section className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-500">
          API Configuration
        </h2>
        <div className="space-y-4 rounded-xl border border-surface-800 bg-surface-900/50 p-5">
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-surface-200">
              <Key className="h-4 w-4 text-surface-400" />
              OpenRouter API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-or-v1-..."
              className="w-full rounded-lg border border-surface-700 bg-surface-800 px-3 py-2 text-sm text-surface-100 placeholder-surface-500 outline-none transition-colors focus:border-primary-600"
            />
            <p className="mt-1 text-xs text-surface-500">
              Your personal API key. Stored locally, never sent to our servers.
            </p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-surface-200">Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full rounded-lg border border-surface-700 bg-surface-800 px-3 py-2 text-sm text-surface-100 outline-none transition-colors focus:border-primary-600"
            >
              <option value="openai/gpt-4o-mini">GPT-4o Mini</option>
              <option value="openai/gpt-4o">GPT-4o</option>
              <option value="anthropic/claude-sonnet-4">Claude Sonnet 4</option>
              <option value="google/gemini-2.0-flash">Gemini 2.0 Flash</option>
            </select>
          </div>
        </div>
      </section>

      {/* Persona Defaults */}
      <section className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-500">
          Persona Defaults
        </h2>
        <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-5">
          <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-surface-200">
            <User className="h-4 w-4 text-surface-400" />
            Default Persona
          </label>
          <select
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            className="w-full rounded-lg border border-surface-700 bg-surface-800 px-3 py-2 text-sm text-surface-100 outline-none transition-colors focus:border-primary-600"
          >
            <option value="friendly-tutor">Friendly Tutor</option>
            <option value="business-partner">Business Partner</option>
            <option value="casual-friend">Casual Friend</option>
            <option value="strict-teacher">Strict Teacher</option>
          </select>
        </div>
      </section>

      {/* Data */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-500">
          Data
        </h2>
        <div className="space-y-3">
          <button className="flex w-full items-center gap-3 rounded-xl border border-surface-800 bg-surface-900/50 px-5 py-3 text-left text-sm font-medium text-surface-200 transition-colors hover:border-surface-700">
            <Download className="h-4 w-4 text-surface-400" />
            Export All Data
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl border border-red-900/30 bg-red-950/20 px-5 py-3 text-left text-sm font-medium text-red-400 transition-colors hover:border-red-900/50">
            <Trash2 className="h-4 w-4" />
            Clear All Data
          </button>
        </div>
      </section>
    </div>
  )
}
