"use client"

import { useState, useEffect } from "react"
import { AppHeader } from "@/components/layout/app-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stepper } from "@/components/ui/stepper"
import {
  GitFork,
  Zap,
  Code,
  Palette,
  Layers,
  Sparkles,
  Users,
  Copy,
  Check,
  Star,
  Heart,
  Bell,
  Search,
  Upload,
} from "lucide-react"
import { SimpleChatBubbles } from "@/components/simple-chat-bubbles"
import { DesignTokensShowcase } from "@/components/design-tokens-showcase"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)

  // Show welcome modal when component showcase loads
  useEffect(() => {
    if (currentStep === 3) {
      setShowWelcomeModal(true)
    }
  }, [currentStep])

  const steps = [
    {
      title: "Welcome, Dockhand!",
      content: "welcome",
    },
    {
      title: "Learn v0",
      content: "learn-v0",
    },
    {
      title: "DDS Integration & Advanced Gen UI",
      content: "dds-integration",
    },
  ]

  const handlePrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1))
  }

  const handleNext = () => {
    if (currentStep === 2) {
      setCurrentStep(3)
      setShowConfetti(true)
    } else {
      setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
    }
  }

  const handleStepClick = (step: number) => {
    setCurrentStep(step)
  }

  const handleBackToStepper = () => {
    setCurrentStep(2)
  }

  const handleConfettiComplete = () => {
    setShowConfetti(false)
  }

  const copyToClipboard = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopiedPrompt(prompt)
      setTimeout(() => setCopiedPrompt(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const componentCards = [
    {
      title: "Primary Button",
      prompt: "Create a primary button using shadcn/ui Button component",
      component: <Button className="w-full">Get Started</Button>,
    },
    {
      title: "Secondary Button",
      prompt: "Make a secondary button using shadcn/ui Button variant",
      component: (
        <Button variant="secondary" className="w-full">
          Secondary
        </Button>
      ),
    },
    {
      title: "Outline Button",
      prompt: "Create an outline button using shadcn/ui Button variant",
      component: (
        <Button variant="outline" className="w-full">
          Outline
        </Button>
      ),
    },
    {
      title: "Icon Button",
      prompt: "Make an icon button using shadcn/ui Button with icon size",
      component: (
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      ),
    },
    {
      title: "Button Group",
      prompt: "Create a group of shadcn/ui buttons with different variants",
      component: (
        <div className="flex gap-2">
          <Button size="sm">Save</Button>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </div>
      ),
    },
    {
      title: "Card Component",
      prompt: "Build a card using shadcn/ui Card with header and content",
      component: (
        <Card className="w-full rounded-[var(--border-radius)]">
          <CardContent className="p-4">
            <h4 className="font-medium mb-2">Card Title</h4>
            <p className="text-sm text-muted-foreground">Card content goes here</p>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Card with Header",
      prompt: "Create a card using shadcn/ui Card with CardHeader and CardTitle",
      component: (
        <Card className="w-full rounded-[var(--border-radius)]">
          <div className="p-4 pb-2">
            <h4 className="font-medium">Header Title</h4>
          </div>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground">Content area</p>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Ghost Button",
      prompt: "Make a ghost button using shadcn/ui Button ghost variant",
      component: (
        <Button variant="ghost" className="w-full">
          Ghost Button
        </Button>
      ),
    },
    {
      title: "Link Button",
      prompt: "Create a link-style button using shadcn/ui Button link variant",
      component: (
        <Button variant="link" className="w-full">
          Link Button
        </Button>
      ),
    },
    {
      title: "Destructive Button",
      prompt: "Build a destructive button using shadcn/ui Button destructive variant",
      component: (
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
      ),
    },
    {
      title: "Small Button",
      prompt: "Create a small button using shadcn/ui Button sm size",
      component: (
        <Button size="sm" className="w-full">
          Small Button
        </Button>
      ),
    },
    {
      title: "Large Button",
      prompt: "Make a large button using shadcn/ui Button lg size",
      component: (
        <Button size="lg" className="w-full">
          Large Button
        </Button>
      ),
    },
    {
      title: "Card with Footer",
      prompt: "Build a card using shadcn/ui Card with CardFooter for actions",
      component: (
        <Card className="w-full rounded-[var(--border-radius)]">
          <CardContent className="p-4 pb-2">
            <p className="text-sm">Card with footer</p>
          </CardContent>
          <div className="p-4 pt-0">
            <Button size="sm" className="w-full">
              Action
            </Button>
          </div>
        </Card>
      ),
    },
    {
      title: "Compact Card",
      prompt: "Create a compact card using shadcn/ui Card with minimal padding",
      component: (
        <Card className="w-full rounded-[var(--border-radius)]">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Compact Layout</span>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Button with Icon",
      prompt: "Make a button with icon using shadcn/ui Button and Lucide icons",
      component: (
        <Button className="w-full">
          <Upload className="h-4 w-4 mr-2" />
          Upload File
        </Button>
      ),
    },
    {
      title: "Icon-only Buttons",
      prompt: "Create icon-only buttons using shadcn/ui Button icon size variant",
      component: (
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
    {
      title: "Card Grid Layout",
      prompt: "Build a card grid using shadcn/ui Card components",
      component: (
        <div className="grid grid-cols-2 gap-2">
          <Card className="rounded-[var(--border-radius)]">
            <CardContent className="p-3 text-center">
              <p className="text-xs">Card 1</p>
            </CardContent>
          </Card>
          <Card className="rounded-[var(--border-radius)]">
            <CardContent className="p-3 text-center">
              <p className="text-xs">Card 2</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "Interactive Card",
      prompt: "Create an interactive card using shadcn/ui Card with hover effects",
      component: (
        <Card className="w-full cursor-pointer hover:shadow-md transition-shadow rounded-[var(--border-radius)]">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Interactive Card</span>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Button Loading State",
      prompt: "Show button loading state using shadcn/ui Button with disabled prop",
      component: (
        <Button disabled className="w-full">
          Loading...
        </Button>
      ),
    },
    {
      title: "Card with Stats",
      prompt: "Build a stats card using shadcn/ui Card with typography",
      component: (
        <Card className="w-full rounded-[var(--border-radius)]">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
          </CardContent>
        </Card>
      ),
    },
  ]

  const renderCardContent = (step: number) => {
    if (step === 0) {
      return (
        <div className="flex h-full gap-6">
          <div className="flex-1 flex flex-col">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <GitFork className="h-8 w-8 text-primary" />
                <h4 className="font-medium">Step 1: Fork the Project</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Create your own copy of the DDS starter project to begin building. Click the fork button in v0 to get
                your own workspace.
              </p>
            </div>

            <div className="mt-4 flex justify-center flex-1 overflow-hidden">
              <div className="bg-muted/30 rounded-lg flex items-center justify-center min-h-[200px] w-full">
                <img
                  src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                  alt="Docker Design System illustration"
                  className="max-h-full w-auto object-contain opacity-0 transition-opacity duration-300"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = "1"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-stretch h-full">
            <div className="w-full h-full">
              <div className="rounded-lg overflow-hidden w-full h-full">
                <div className="rounded-lg overflow-hidden border shadow-md h-full bg-muted/30 flex items-center justify-center">
                  <img
                    src="/v0-fork-gif.gif"
                    alt="Fork project demo"
                    className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (step === 1) {
      return (
        <div className="grid grid-cols-2 gap-6 h-full">
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-6 w-6 text-primary" />
                <h4 className="font-medium">AI-Powered Building</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Describe what you want to build in plain English. v0.dev generates React components using DDS tokens
                with shadcn/ui.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-6 w-6 text-primary" />
                <h4 className="font-medium">Instant Prototypes</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Type "Create a dashboard with user stats" in the v0.dev chat. Review the generated prototype, then push
                directly to your GitHub branch.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="h-6 w-6 text-primary" />
                <h4 className="font-medium">Design System Ready</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Built with Docker Design System tokens and components. Consistent styling and behavior out of the box.
              </p>
            </div>
          </div>

          <div className="h-full">
            <SimpleChatBubbles />
          </div>
        </div>
      )
    }

    if (step === 2) {
      return (
        <div className="flex h-full gap-6">
          <div className="flex-1 space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-sm">App Tree Assets</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Docker logos, icons, and illustrations ready to use. Just ask v0: "Add the Docker logo"
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-sm">shadcn/ui Components</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Full component library knowledge. Request tables, forms, dialogs - it's all built-in.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-sm">DDS Foundation Tokens</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Colors, typography, spacing - all Docker Design System tokens are pre-configured.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-sm text-primary">Deep Interactions</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>v0.dev + DDS is fully versed!</strong> Complex interactions, animations, advanced patterns -
                just ask.
              </p>
            </div>
          </div>

          <div className="w-1/3">
            <DesignTokensShowcase />
          </div>
        </div>
      )
    }

    return null
  }

  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-primary">
        <ConfettiOverlay isActive={showConfetti} onComplete={handleConfettiComplete} />

        <AppHeader />

        <main className="p-6">
          <div className="mb-6">
            <Button variant="outline" onClick={handleBackToStepper} className="mb-4">
              ← Back to Onboarding
            </Button>
            <h1 className="text-3xl font-bold text-white mb-2">Component Showcase</h1>
            <p className="text-white/80">
              Copy these prompts to generate components with Docker Design System styling in v0.dev chat.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {componentCards.map((card, index) => (
              <Card key={index} className="flex flex-col h-fit rounded-[var(--border-radius)] break-inside-avoid mb-4">
                <CardContent className="flex-1 p-4">
                  <h4 className="font-medium text-sm mb-2">{card.title}</h4>
                  <p className="text-xs text-muted-foreground mb-4">{card.prompt}</p>

                  <div className="bg-muted/30 rounded-md p-3 mb-4 flex items-center justify-center min-h-[60px]">
                    {card.component}
                  </div>
                </CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Button variant="secondary" size="sm" className="w-full" onClick={() => copyToClipboard(card.prompt)}>
                    {copiedPrompt === card.prompt ? (
                      <>
                        <Check className="h-3 w-3 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
            <DialogContent className="sm:max-w-[500px] rounded-[var(--border-radius)]">
              <DialogHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">v0.dev + DDS</Badge>
                </div>
                <DialogTitle className="text-2xl font-bold">Welcome to the Showcase, Dockhand! 🚢</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  You're now ready to build beautiful UI components with the power of v0.dev and Docker Design System.
                  <br />
                  <br />
                  <strong>Copy any prompt below</strong> and paste it into v0.dev chat to generate components with
                  perfect DDS styling.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center pt-2">
                <Button onClick={() => setShowWelcomeModal(false)} size="lg">
                  Start Building
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    )
  }

  return (
    <div className="h-screen bg-primary flex flex-col">
      <AppHeader />

      <main className="flex-1 p-6 min-h-0">
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex w-[300%] h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentStep * 33.333}%)` }}
          >
            {[0, 1, 2].map((index) => (
              <div key={index} className="w-1/3 h-full px-3 flex-shrink-0">
                <Card className="w-full h-full flex flex-col">
                  <div className="py-3 px-6 flex-shrink-0">
                    <h2 className="text-xl font-semibold">{steps[index].title}</h2>
                  </div>

                  <CardContent className="flex-1 p-6 overflow-y-auto min-h-0">{renderCardContent(index)}</CardContent>

                  <div className="flex justify-between py-3 px-6 flex-shrink-0">
                    <Button variant="outline" size="lg" disabled={currentStep === 0} onClick={handlePrevious}>
                      Previous
                    </Button>

                    <Button size="lg" onClick={handleNext}>
                      {currentStep === 2 ? "Get Started" : "Next"}
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="flex justify-center py-5 flex-shrink-0">
        <Stepper steps={steps.length} currentStep={currentStep} onStepClick={handleStepClick} />
      </div>
    </div>
  )
}
