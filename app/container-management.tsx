"use client"

import { useEffect } from "react"
import { toast } from "@/components/ui/use-toast"

interface ContainerManagementProps {
  showWelcomeMessage?: boolean
  onWelcomeMessageSeen?: () => void
}

export default function ContainerManagement({
  showWelcomeMessage = false,
  onWelcomeMessageSeen,
}: ContainerManagementProps) {
  useEffect(() => {
    if (showWelcomeMessage) {
      const timer = setTimeout(() => {
        toast({
          title: "🎉 Training Complete! You're in the playground now!",
          description:
            "Start chatting below to create your first Docker component prototype. Try: 'Create a container status card with Docker branding'",
          duration: 8000,
        })
        onWelcomeMessageSeen?.()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [showWelcomeMessage, onWelcomeMessageSeen])

  return <div>{/* Container Management Content */}</div>
}
