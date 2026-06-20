import { useState } from 'react'
import { useParams } from 'react-router'
import { Send, Mic, MicOff, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

export default function Chat() {
  const { conversationId } = useParams<{ conversationId?: string }>()
  const [input, setInput] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    // TODO: Send message via chatStore
    setInput('')
  }

  const toggleRecording = () => {
    setIsRecording((prev) => !prev)
    // TODO: Integrate useSpeechToText hook
  }

  return (
    <div className="flex h-full flex-col">
      {/* Chat Header */}
      <header className="flex items-center gap-3 border-b border-surface-800 bg-surface-900/50 px-4 py-3">
        <Link to="/dashboard" className="text-surface-400 hover:text-surface-200">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-sm font-semibold text-surface-100">
            {conversationId ? 'Conversation' : 'New Chat'}
          </h2>
          <p className="text-xs text-surface-500">AI English Partner</p>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600/20">
              <Send className="h-7 w-7 text-primary-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-surface-200">Start a conversation</h3>
            <p className="max-w-sm text-sm text-surface-500">
              Type a message or use the microphone to start speaking. The AI will respond and help
              you practice English.
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-surface-800 bg-surface-900/50 p-4">
        <div className="mx-auto flex max-w-2xl items-center gap-2">
          <button
            onClick={toggleRecording}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
              isRecording
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                : 'bg-surface-800 text-surface-400 hover:bg-surface-700 hover:text-surface-200'
            }`}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message in English..."
            className="flex-1 rounded-lg border border-surface-700 bg-surface-800 px-4 py-2.5 text-sm text-surface-100 placeholder-surface-500 outline-none transition-colors focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          />

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white transition-colors hover:bg-primary-700 disabled:opacity-40 disabled:hover:bg-primary-600"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
