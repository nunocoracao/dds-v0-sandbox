"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import {
  ArrowRight,
  Bot,
  CheckCircle,
  Code,
  Lightbulb,
  MessageSquare,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Target,
  Wand2,
  Zap,
} from "lucide-react"

interface OnboardingStep {
  id: string
  title: string
  description: string
  prompt: string
  expectedResult: string
  tips: string[]
  demoComponent?: React.ReactNode
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "welcome",
    title: "Welcome to v0.dev + Docker DDS",
    description:
      "You're about to learn how to build Docker-branded components using AI. This is meta - we'll teach you by having you actually use v0.dev!",
    prompt: "Create a welcome card component with Docker blue gradient background",
    expectedResult: "A card with Docker's signature blue gradient and proper DDS typography",
    tips: [
      "Use natural language - be specific about Docker branding",
      "Mention colors, fonts, or spacing when needed",
      "v0.dev automatically uses your DDS tokens from globals.css",
    ],
  },
  {
    id: "typography",
    title: "Master DDS Typography",
    description:
      "Learn how v0.dev automatically applies Poppins for headings and Inter for body text using your DDS tokens.",
    prompt: "Create a typography showcase with h1, h2, h3 headings and body text showing Docker's font hierarchy",
    expectedResult: "Headings in Poppins, body text in Inter, all properly sized",
    tips: [
      "Headings automatically use Poppins (font-heading)",
      "Body text uses Inter (font-sans)",
      "Ask for specific heading levels to see the hierarchy",
    ],
  },
  {
    id: "colors",
    title: "Explore DDS Color System",
    description: "Discover how v0.dev uses your Docker Design System color tokens for consistent branding.",
    prompt: "Create a color palette card showing Docker's primary, secondary, and accent colors with labels",
    expectedResult: "A visual color guide using DDS color tokens",
    tips: [
      "Use 'Docker blue', 'Docker primary', or 'brand colors'",
      "v0.dev maps these to your CSS custom properties",
      "Try gradients with 'Docker blue gradient'",
    ],
  },
  {
    id: "components",
    title: "Build Interactive Components",
    description: "Create functional UI components that automatically inherit Docker's design system.",
    prompt: "Create a Docker container status dashboard with cards showing running, stopped, and pending containers",
    expectedResult: "Interactive dashboard with proper DDS styling and Docker branding",
    tips: [
      "Be specific about functionality you want",
      "Mention Docker-specific terminology",
      "Ask for interactions like hover states or animations",
    ],
  },
  {
    id: "advanced",
    title: "Advanced DDS Integration",
    description: "Learn to create complex layouts that showcase the full power of v0.dev + Docker DDS.",
    prompt: "Create a Docker Hub-style repository card with image, title, description, stars, and pull count",
    expectedResult: "Professional repository card matching Docker Hub's design language",
    tips: [
      "Reference real Docker products for context",
      "Ask for specific layouts or arrangements",
      "Combine multiple DDS elements in one request",
    ],
  },
]

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [userPrompt, setUserPrompt] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  const currentStepData = onboardingSteps[currentStep]
  const progress = ((currentStep + 1) / onboardingSteps.length) * 100

  useEffect(() => {
    // Pre-fill the suggested prompt
    setUserPrompt(currentStepData.prompt)
  }, [currentStep, currentStepData.prompt])

  const handleGenerate = async () => {
    setIsGenerating(true)

    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsGenerating(false)
    setCompletedSteps([...completedSteps, currentStepData.id])

    toast({
      title: "Component Generated! 🎉",
      description: currentStepData.expectedResult,
    })

    // Auto-advance after a moment
    setTimeout(() => {
      if (currentStep < onboardingSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }, 1500)
  }

  const handleSkipToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  if (showWelcome) {
    return (
      <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-heading flex items-center gap-3">
              <Rocket className="w-8 h-8 text-blue-600" />
              Welcome to v0.dev + Docker DDS
            </DialogTitle>
            <DialogDescription className="text-lg">
              You're about to learn the most powerful way to build Docker-branded components using AI.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                This is Meta Learning
              </h3>
              <p className="text-gray-700 mb-4">
                We'll teach you how to use v0.dev + Docker Design System by having you actually use it. You'll generate
                real components while learning the workflow.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Learn by doing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Real DDS tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Live AI generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Docker branding</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-medium">What You'll Master:</h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-blue-500" />
                  <span>Docker Design System integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-500" />
                  <span>Effective AI prompting for UI components</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-green-500" />
                  <span>Production-ready component generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-500" />
                  <span>Docker-specific design patterns</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={() => setShowWelcome(false)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Progress Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Bot className="w-3 h-3 mr-1" />
                v0.dev + DDS Training
              </Badge>
              <span className="text-sm text-gray-600">
                Step {currentStep + 1} of {onboardingSteps.length}
              </span>
            </div>
            <div className="text-sm text-gray-500">{completedSteps.length} completed</div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Learning Path
                </CardTitle>
                <CardDescription>Your journey to mastering v0.dev + Docker DDS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {onboardingSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      index === currentStep
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : completedSteps.includes(step.id)
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    }`}
                    onClick={() => handleSkipToStep(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                          completedSteps.includes(step.id)
                            ? "bg-green-500 text-white"
                            : index === currentStep
                              ? "bg-blue-500 text-white"
                              : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {completedSteps.includes(step.id) ? <CheckCircle className="w-4 h-4" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-2">{step.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Step */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-heading text-2xl flex items-center gap-3">
                      <Wand2 className="w-6 h-6 text-purple-500" />
                      {currentStepData.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">{currentStepData.description}</CardDescription>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setShowHint(!showHint)}>
                          <Lightbulb className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Show tips & hints</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Tips Section */}
                {showHint && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-heading font-medium text-yellow-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      {currentStepData.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-yellow-500 mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Prompt Input */}
                <div className="space-y-3">
                  <Label htmlFor="prompt" className="text-base font-medium">
                    Your v0.dev Prompt
                  </Label>
                  <Textarea
                    id="prompt"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder="Describe the component you want to create..."
                    className="min-h-[100px] text-base"
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">💡 Edit the prompt or use the suggested one</div>
                    <Button
                      onClick={handleGenerate}
                      disabled={!userPrompt.trim() || isGenerating}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Generate Component
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Expected Result */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-heading font-medium text-blue-800 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    What You'll Get
                  </h4>
                  <p className="text-sm text-blue-700">{currentStepData.expectedResult}</p>
                </div>
              </CardContent>
            </Card>

            {/* Generated Component Preview */}
            {completedSteps.includes(currentStepData.id) && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Generated Component
                  </CardTitle>
                  <CardDescription>Your AI-generated component using Docker Design System</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto flex items-center justify-center">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg">Component Generated!</h3>
                      <p className="text-gray-600">
                        In the real v0.dev interface, your component would appear here with full DDS styling.
                      </p>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Step Complete
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous Step
              </Button>

              {currentStep === onboardingSteps.length - 1 ? (
                <Button
                  onClick={() =>
                    toast({
                      title: "Congratulations! 🎉",
                      description: "You've mastered v0.dev + Docker DDS! Start building amazing components.",
                    })
                  }
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Complete Training
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentStep(Math.min(onboardingSteps.length - 1, currentStep + 1))}
                  disabled={!completedSteps.includes(currentStepData.id)}
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
