import { useState, useEffect, useRef } from 'react'
import { Send, Bot, User, X } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your CampusGo assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: 'user',
        timestamp: new Date(),
      }
      setMessages([...messages, userMessage])
      setInput('')

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: getBotResponse(input),
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
    
    if (lowerInput.includes('food') || lowerInput.includes('restaurant')) {
      return "You can find restaurants in our Food section. We have pizza, burgers, sushi, and more! Would you like me to help you order?"
    }
    if (lowerInput.includes('delivery') || lowerInput.includes('order')) {
      return "To place an order, browse our categories and add items to your cart. Delivery typically takes 20-40 minutes depending on the vendor."
    }
    if (lowerInput.includes('track') || lowerInput.includes('status')) {
      return "You can track your orders in the Profile section under 'Recent Orders'. Is there a specific order you're looking for?"
    }
    if (lowerInput.includes('help') || lowerInput.includes('support')) {
      return "I'm here to help! You can ask me about ordering, tracking, account issues, or any other CampusGo services."
    }
    if (lowerInput.includes('payment') || lowerInput.includes('card')) {
      return "You can manage your payment methods in the Settings section. We accept Visa, Mastercard, and PayPal."
    }
    
    return "I understand. Is there anything specific about CampusGo I can help you with? I can assist with ordering, tracking, account settings, and more."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold">Chat Support</h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-surface rounded-lg transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="bg-surface rounded-xl border border-gray-700 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-primary/20 p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold">CampusGo Assistant</h2>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-text-muted">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start gap-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' ? 'bg-primary' : 'bg-secondary'
                        }`}
                      >
                        {message.sender === 'user' ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-background text-text'
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isOpen && (
            <div className="bg-surface rounded-xl p-8 border border-gray-700 text-center">
              <Bot className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Chat is Closed</h2>
              <p className="text-text-muted mb-4">Click the button above to open the chat</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
