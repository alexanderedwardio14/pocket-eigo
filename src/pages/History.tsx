import { Clock } from 'lucide-react'

export default function History() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-surface-100">Conversation History</h1>
        <p className="text-surface-400">Resume past conversations</p>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center rounded-xl border border-surface-800 bg-surface-900/50 py-16">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-800">
          <Clock className="h-7 w-7 text-surface-500" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-surface-200">No conversation history</h3>
        <p className="max-w-sm text-center text-sm text-surface-500">
          Your completed conversations will appear here so you can review and resume them anytime.
        </p>
      </div>
    </div>
  )
}
