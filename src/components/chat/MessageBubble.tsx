// Chat-specific components

import type { Message } from '../../types'

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-primary-600 text-white'
            : 'bg-surface-800 text-surface-100 border border-surface-700'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        {message.correction && (
          <div className="mt-2 border-t border-white/10 pt-2">
            <p className="text-xs opacity-80">
              <span className="font-medium">Correction:</span> {message.correction.corrected}
            </p>
            <p className="mt-0.5 text-xs opacity-60">{message.correction.explanation}</p>
          </div>
        )}
        <p className={`mt-1 text-xs ${isUser ? 'text-white/50' : 'text-surface-500'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </div>
  )
}

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  onVoiceToggle: () => void
  isRecording: boolean
  disabled?: boolean
}

export function ChatInput({
  value,
  onChange,
  onSend,
  onVoiceToggle,
  isRecording,
  disabled
}: ChatInputProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onVoiceToggle}
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
          isRecording
            ? 'bg-red-500/20 text-red-400'
            : 'bg-surface-800 text-surface-400 hover:bg-surface-700'
        }`}
      >
        {isRecording ? '⏹' : '🎤'}
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-1 rounded-lg border border-surface-700 bg-surface-800 px-4 py-2.5 text-sm text-surface-100 placeholder-surface-500 outline-none focus:border-primary-600 disabled:opacity-50"
      />
      <button
        onClick={onSend}
        disabled={!value.trim() || disabled}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white disabled:opacity-40"
      >
        ↑
      </button>
    </div>
  )
}

interface CorrectionPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function CorrectionPanel({ isOpen, onClose }: CorrectionPanelProps) {
  if (!isOpen) return null

  return (
    <div className="border-t border-surface-800 bg-surface-900/80 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-surface-200">Corrections</h4>
        <button onClick={onClose} className="text-xs text-surface-500 hover:text-surface-300">
          Close
        </button>
      </div>
      <p className="text-sm text-surface-500">No corrections yet. Start chatting!</p>
    </div>
  )
}
