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
  Copy,
  Check,
  Star,
  Heart,
  Bell,
  Search,
  Upload,
  Menu,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { SimpleChatBubbles } from "@/components/simple-chat-bubbles"
import { DesignTokensShowcase } from "@/components/design-tokens-showcase"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)
  const [heartLiked, setHeartLiked] = useState(false)
  const [containerRunning, setContainerRunning] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [volumeMounted, setVolumeMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState("nginx:latest")
  const [deploymentProgress, setDeploymentProgress] = useState(0)
  const [largeIllustration, setLargeIllustration] = useState(false)
  const [mediumIllustration, setMediumIllustration] = useState(false)
  const [smallIllustration, setSmallIllustration] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  // Show welcome modal when component showcase loads
  useEffect(() => {
    if (currentStep === 3) {
      setShowWelcomeModal(true)
    }
  }, [currentStep])

  useEffect(() => {
    if (containerRunning && deploymentProgress < 100) {
      const timer = setTimeout(() => {
        setDeploymentProgress((prev) => Math.min(prev + 10, 100))
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [containerRunning, deploymentProgress])

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
    // Navigation demo card that opens the same nav as header
    {
      title: "v0.dev+DDS Navigation",
      prompt:
        "Create a complex v0.dev+DDS navigation with fly-out panel and nested menus using shadcn/ui Sheet and DropdownMenu",
      component: (
        <div className="flex items-center gap-2">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Navigate through the Docker Design System onboarding</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Onboarding Steps</h4>
                  <nav className="space-y-1">
                    <a href="#step-1" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                      Step 1: Welcome
                    </a>
                    <a href="#step-2" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                      Step 2: Learn v0
                    </a>
                    <a href="#step-3" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                      Step 3: DDS Integration
                    </a>
                    <a href="#step-4" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                      Step 4: Get Started
                    </a>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" onClick={() => setSheetOpen(!sheetOpen)}>
            Open v0.dev+DDS Nav
          </Button>
        </div>
      ),
    },
    // Rest of the cards...
    {
      title: "Primary Button",
      prompt: "Create a primary button using shadcn/ui Button component",
      component: <Button className="w-full">Get Started</Button>,
    },
    {
      title: "Delete with Confirmation",
      prompt: "Build a destructive button with double confirmation modal using shadcn/ui Dialog",
      component: (
        <>
          <Button variant="destructive" className="w-full" onClick={() => setShowDeleteModal(true)}>
            Delete Container
          </Button>
          <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
            <DialogContent className="sm:max-w-[400px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this container? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={() => setShowDeleteModal(false)}>
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </>
      ),
    },
    {
      title: "Heart Icon Toggle",
      prompt: "Create a heart icon button that changes color when clicked using shadcn/ui Button",
      component: (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setHeartLiked(!heartLiked)}
          className={heartLiked ? "text-pink-500 border-pink-500" : ""}
        >
          <Heart className={`h-4 w-4 ${heartLiked ? "fill-current" : ""}`} />
        </Button>
      ),
    },
    {
      title: "Container Status Toggle",
      prompt: "Build an interactive container status card with start/stop toggle using shadcn/ui Switch",
      component: (
        <Card className="w-full cursor-pointer hover:shadow-md transition-shadow rounded-[var(--border-radius)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${containerRunning ? "bg-green-500" : "bg-gray-400"}`} />
                <span className="text-sm font-medium">{containerRunning ? "Running" : "Stopped"}</span>
              </div>
              <Switch
                checked={containerRunning}
                onCheckedChange={(checked) => {
                  setContainerRunning(checked)
                  if (checked) setDeploymentProgress(0)
                }}
              />
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Docker Image Selector",
      prompt: "Create a Docker image selector dropdown using shadcn/ui Select component",
      component: (
        <Select value={selectedImage} onValueChange={setSelectedImage}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select image" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nginx:latest">nginx:latest</SelectItem>
            <SelectItem value="node:18-alpine">node:18-alpine</SelectItem>
            <SelectItem value="postgres:15">postgres:15</SelectItem>
            <SelectItem value="redis:7-alpine">redis:7-alpine</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      title: "Volume Mount Toggle",
      prompt: "Build a volume mounting interface using shadcn/ui Checkbox and labels",
      component: (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="volume-mount" checked={volumeMounted} onCheckedChange={setVolumeMounted} />
            <label htmlFor="volume-mount" className="text-sm font-medium">
              Mount /data volume
            </label>
          </div>
          <p className="text-xs text-muted-foreground">
            {volumeMounted ? "Volume mounted at /data" : "No volumes mounted"}
          </p>
        </div>
      ),
    },
    {
      title: "Deployment Progress",
      prompt: "Show deployment progress using shadcn/ui Progress component with animations",
      component: (
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Deploying...</span>
            <span>{deploymentProgress}%</span>
          </div>
          <Progress value={deploymentProgress} className="w-full" />
        </div>
      ),
    },
    {
      title: "Docker Services Tabs",
      prompt: "Create service management tabs using shadcn/ui Tabs component",
      component: (
        <Tabs defaultValue="containers" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="containers">Containers</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="volumes">Volumes</TabsTrigger>
          </TabsList>
          <TabsContent value="containers" className="text-center py-2">
            <p className="text-xs text-muted-foreground">3 running</p>
          </TabsContent>
          <TabsContent value="images" className="text-center py-2">
            <p className="text-xs text-muted-foreground">12 images</p>
          </TabsContent>
          <TabsContent value="volumes" className="text-center py-2">
            <p className="text-xs text-muted-foreground">5 volumes</p>
          </TabsContent>
        </Tabs>
      ),
    },
    {
      title: "Container Actions Menu",
      prompt: "Build a container actions dropdown menu using shadcn/ui DropdownMenu with nested options",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              Container Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Container Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Start</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Stop</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Restart</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Logs</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>View Logs</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Download Logs</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    // Asset cards with toggle buttons
    {
      title: "Docker Logo",
      prompt: "Display the Docker logo using the design system assets",
      component: (
        <div className="flex items-center justify-center p-4">
          <img src="/logo/LogoPrimary.svg" alt="Docker Logo" className="w-full h-auto object-contain" />
        </div>
      ),
    },
    {
      title: "Docker Submark",
      prompt: "Show the Docker submark logo for compact layouts",
      component: (
        <div className="flex items-center justify-center p-4">
          <img src="/sub-marks/subMarkPrimary.svg" alt="Docker Submark" className="w-full h-auto object-contain" />
        </div>
      ),
    },
    {
      title: "Large Illustration",
      prompt: "Use large Docker product illustrations for hero sections",
      component: (
        <div className="space-y-3">
          <div className="flex items-center justify-center p-4">
            <img
              src="/illustrations/Product Illustration/Lg/Mock Panels.png"
              alt="Docker Large Illustration"
              className={`w-full h-auto object-contain ${largeIllustration ? "scale-150 transform-gpu" : ""}`}
              style={{ transformOrigin: "center" }}
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLargeIllustration(!largeIllustration)}
              className="flex items-center gap-1"
            >
              {largeIllustration ? (
                <>
                  <Minimize2 className="h-3 w-3" />
                  <span>Normal Size</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3 w-3" />
                  <span>Enlarge</span>
                </>
              )}
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Medium Illustration",
      prompt: "Display medium-sized Docker illustrations for content sections",
      component: (
        <div className="space-y-3">
          <div className="flex items-center justify-center p-4">
            <img
              src="/illustrations/Product Illustration/Md/Option Select.png"
              alt="Docker Medium Illustration"
              className={`w-full h-auto object-contain ${mediumIllustration ? "scale-150 transform-gpu" : ""}`}
              style={{ transformOrigin: "center" }}
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMediumIllustration(!mediumIllustration)}
              className="flex items-center gap-1"
            >
              {mediumIllustration ? (
                <>
                  <Minimize2 className="h-3 w-3" />
                  <span>Normal Size</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3 w-3" />
                  <span>Enlarge</span>
                </>
              )}
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Small Illustration",
      prompt: "Use small Docker illustrations for icons and compact spaces",
      component: (
        <div className="space-y-3">
          <div className="flex items-center justify-center p-4">
            <img
              src="/illustrations/Product Illustration/Sm/Run Image.png"
              alt="Docker Small Illustration"
              className={`w-full h-auto object-contain ${smallIllustration ? "scale-150 transform-gpu" : ""}`}
              style={{ transformOrigin: "center" }}
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSmallIllustration(!smallIllustration)}
              className="flex items-center gap-1"
            >
              {smallIllustration ? (
                <>
                  <Minimize2 className="h-3 w-3" />
                  <span>Normal Size</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3 w-3" />
                  <span>Enlarge</span>
                </>
              )}
            </Button>
          </div>
        </div>
      ),
    },
    // Continue with more enhanced cards...
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
      title: "Button with Icon",
      prompt: "Make a button with icon using shadcn/ui Button and Lucide icons",
      component: (
        <Button className="w-full">
          <Upload className="h-4 w-4 mr-2" />
          Upload File
        </Button>
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

  const typographyCard = {
    title: "Typography Showcase",
    prompt: "Display comprehensive typography examples using Docker Design System tokens",
    component: (
      <div className="space-y-4 text-left">
        <div>
          <h1 className="text-4xl font-bold font-heading mb-2">The quick brown fox</h1>
          <p className="text-sm text-muted-foreground">H1 Heading - font-heading, text-4xl, font-bold</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold font-heading mb-2">jumps over the lazy dog</h2>
          <p className="text-sm text-muted-foreground">H2 Heading - font-heading, text-2xl, font-semibold</p>
        </div>
        <div>
          <h3 className="text-lg font-medium font-heading mb-2">The five boxing wizards</h3>
          <p className="text-sm text-muted-foreground">H3 Heading - font-heading, text-lg, font-medium</p>
        </div>
        <div>
          <p className="text-base font-sans mb-2">
            Body text using the Docker Design System font stack. Perfect for paragraphs and content.
          </p>
          <p className="text-sm text-muted-foreground">Body Text - font-sans, text-base</p>
        </div>
        <div>
          <a href="#" className="text-primary hover:underline font-medium">
            This is a link example
          </a>
          <p className="text-sm text-muted-foreground mt-1">Link - text-primary, hover:underline</p>
        </div>
        <div>
          <label className="text-sm font-medium">Form Label</label>
          <p className="text-sm text-muted-foreground mt-1">Label - text-sm, font-medium</p>
        </div>
      </div>
    ),
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
            <p className="text-white/80 flex items-center gap-2">
              Your first prompt could say something like, "get rid of the onboarding UX and show me a DHI utility view"
              <Button
                variant="secondary"
                size="sm"
                className="whitespace-nowrap flex items-center gap-1"
                onClick={() => copyToClipboard("get rid of the onboarding UX and show me a DHI utility view")}
              >
                <Copy className="h-3 w-3" />
                Copy
              </Button>
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

          {/* Typography showcase card - full width at bottom */}
          <div className="mt-8">
            <Card className="w-full rounded-[var(--border-radius)]">
              <CardContent className="p-6">
                <h4 className="font-medium text-lg mb-4">{typographyCard.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{typographyCard.prompt}</p>

                <div className="bg-muted/30 rounded-md p-6">{typographyCard.component}</div>

                <div className="mt-4">
                  <Button variant="secondary" onClick={() => copyToClipboard(typographyCard.prompt)}>
                    {copiedPrompt === typographyCard.prompt ? (
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
              </CardContent>
            </Card>
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
