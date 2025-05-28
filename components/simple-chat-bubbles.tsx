"use client"

import { useEffect, useState } from "react"

type Message = {
  id: number
  text: string
  sender: "user" | "assistant"
}

export function SimpleChatBubbles() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const conversation = [
    { text: "make me a thing", sender: "user" as const },
    { text: "A 'thing'? That's... specific. What kind of thing are we talking about here?", sender: "assistant" as const },
    { text: "you know, like a website thing", sender: "user" as const },
    { text: "Ah yes, a 'website thing.' Let me guess - it should look good and do stuff?", sender: "assistant" as const },
    { text: "exactly! make it blue", sender: "user" as const },
    { text: "Blue it is! Any particular shade, or should I just close my eyes and pick?", sender: "assistant" as const },
    { text: "the good blue", sender: "user" as const },
    { text: "Right, 'the good blue.' I'll use Docker blue since you're clearly a design expert.", sender: "assistant" as const },
    { text: "can you add some boxes", sender: "user" as const },
    { text: "Boxes! Revolutionary. Square ones or are we feeling adventurous with rectangles?", sender: "assistant" as const },
    { text: "big boxes with stuff in them", sender: "user" as const },
    { text: "Let me create a dashboard with cards. That's what we call 'big boxes with stuff' in the biz.", sender: "assistant" as const },
    { text: "perfect! now make it better", sender: "user" as const },
    { text: "Ah, the classic 'make it better' request. I'll add some charts and call it a day.", sender: "assistant" as const },
    { text: "why is it so complicated", sender: "user" as const },
    { text: "Because you asked for 'a thing' and I'm not a mind reader. Try being specific next time! 😉", sender: "assistant" as const },
  ]

  useEffect(() => {
    const addMessage = () => {
      if (currentIndex < conversation.length) {
        const newMessage = {
          id: Date.now() + currentIndex,
          ...conversation[currentIndex],
        }

        setMessages((prev) => {
          const updated = [...prev, newMessage]
          // Keep only the last 5 messages
          return updated.length > 5 ? updated.slice(-5) : updated
        })
        
        setCurrentIndex(prev => prev + 1)
      } else {
        // Reset to start the conversation over
        setCurrentIndex(0)
        setMessages([])
      }
    }

    const timer = setTimeout(addMessage, 2500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div className="h-full w-full overflow-hidden flex flex-col justify-end">
      <div className="space-y-4 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex animate-slide-up ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                rounded-lg p-3 max-w-[80%] border text-sm
                ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-card-foreground border-border"
                }
              `}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
