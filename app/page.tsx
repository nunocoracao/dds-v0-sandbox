"use client"

import { useState } from "react"
import OnboardingUX101 from "./onboarding-ux101"
import ComponentShowcase from "./component-showcase"
import DockerMCPApp from "./docker-mcp-app"

export default function IndexPage() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [currentView, setCurrentView] = useState<"mcp" | "showcase" | "onboarding">("onboarding")
  const [justCompleted, setJustCompleted] = useState(false)

  const handleOnboardingComplete = () => {
    setCurrentView("showcase")
    setJustCompleted(true)
  }

  const handleRestartOnboarding = () => {
    setCurrentView("onboarding")
    setJustCompleted(false)
  }

  if (currentView === "onboarding") {
    return <OnboardingUX101 onComplete={handleOnboardingComplete} onRestartOnboarding={handleRestartOnboarding} />
  }

  if (currentView === "showcase") {
    return <ComponentShowcase showWelcomeMessage={justCompleted} onRestartOnboarding={handleRestartOnboarding} />
  }

  return <DockerMCPApp />
}
