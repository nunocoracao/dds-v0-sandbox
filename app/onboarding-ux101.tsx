"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Palette,
  Lightbulb,
  CheckCircle,
  Play,
  Zap,
  Star,
  Code,
  Layers,
  Target,
  Sparkles,
  FolderOpen,
  Wand2,
} from "lucide-react"

interface OnboardingUX101Props {
  onComplete: () => void
  onRestartOnboarding: () => void
}

export default function OnboardingUX101({ onComplete, onRestartOnboarding }: OnboardingUX101Props) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Blue Header with Docker Submark */}
      <header className="bg-primary text-primary-foreground border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onRestartOnboarding}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8">
                <img src="/sub-marks/subMarkWhite.svg" alt="Docker" className="w-full h-full" />
              </div>
              <div className="text-left">
                <h1 className="text-lg font-heading font-semibold">Docker + v0.dev Training</h1>
                <p className="text-sm text-primary-foreground/80">UX 101 Onboarding</p>
              </div>
            </button>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Step {currentStep} of {totalSteps}
              </Badge>
              <div className="text-right">
                <div className="text-sm font-medium">{Math.round(progress)}% Complete</div>
                <Progress value={progress} className="w-32 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-6 py-5" style={{ height: "calc(100vh - 120px)" }}>
        <div className="w-full max-w-4xl h-full mx-auto">
          <Card className="h-full flex flex-col bg-white/80 backdrop-blur border-0 shadow-2xl">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentStep}
                </div>
                <div>
                  <CardTitle className="text-2xl font-heading">
                    {currentStep === 1 && "Welcome to v0.dev + DDS"}
                    {currentStep === 2 && "Understanding Your Workspace"}
                    {currentStep === 3 && "Assets at Your Disposal"}
                    {currentStep === 4 && "Targeted Component Editing"}
                    {currentStep === 5 && "Creating Complete Layouts"}
                    {currentStep === 6 && "Refining Your Layouts"}
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    {currentStep === 1 && "Your AI-powered design system companion"}
                    {currentStep === 2 && "File structure and configuration overview"}
                    {currentStep === 3 && "Discover your design resources"}
                    {currentStep === 4 && "Precision component modifications"}
                    {currentStep === 5 && "Building complete page structures"}
                    {currentStep === 6 && "Fine-tuning your layouts"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            {/* Scrollable Content Area */}
            <CardContent className="flex-1 overflow-y-auto px-8 pb-4">
              {/* Step 1: Welcome */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-left space-y-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">
                      Ready to build superhuman Docker interfaces?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      This 6-step journey will teach you everything you need to know about using v0.dev with Docker's
                      Design System.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-6 text-left">
                        <Wand2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h3 className="font-heading font-semibold text-lg mb-2">AI-Powered</h3>
                        <p className="text-sm text-gray-600">Generate components with natural language</p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 bg-purple-50">
                      <CardContent className="p-6 text-left">
                        <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                        <h3 className="font-heading font-semibold text-lg mb-2">DDS Ready</h3>
                        <p className="text-sm text-gray-600">Automatic Docker branding & tokens</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert className="bg-blue-50 border-blue-200">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800">
                      <strong>What makes this special?</strong> Every component you generate automatically uses Docker's
                      design tokens, typography, and branding. No manual styling required!
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-left space-y-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-heading font-semibold">Lightning Fast</h3>
                      <p className="text-sm text-gray-600">Generate components in seconds with AI</p>
                    </div>
                    <div className="text-left space-y-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                        <Star className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-heading font-semibold">DDS Compliant</h3>
                      <p className="text-sm text-gray-600">Automatically uses Docker Design System</p>
                    </div>
                    <div className="text-left space-y-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                        <Target className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="font-heading font-semibold">Production Ready</h3>
                      <p className="text-sm text-gray-600">Ship directly to your Docker projects</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: File Structure */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-left space-y-4">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Your v0.dev + DDS workspace comes pre-configured with everything you need to build Docker
                      interfaces.
                    </p>
                  </div>

                  <Tabs defaultValue="structure" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                      <TabsTrigger value="structure">File Structure</TabsTrigger>
                      <TabsTrigger value="config">Configuration</TabsTrigger>
                      <TabsTrigger value="tokens">DDS Tokens</TabsTrigger>
                    </TabsList>

                    <TabsContent value="structure" className="space-y-4 mt-6">
                      <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <FolderOpen className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold">app/</span>
                            <Badge variant="outline" className="text-xs">
                              Your components
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 ml-6">
                            <FileText className="w-4 h-4 text-green-600" />
                            <span>globals.css</span>
                            <Badge variant="secondary" className="text-xs">
                              DDS tokens
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 ml-6">
                            <FileText className="w-4 h-4 text-green-600" />
                            <span>layout.tsx</span>
                          </div>
                          <div className="flex items-center space-x-2 ml-6">
                            <FileText className="w-4 h-4 text-green-600" />
                            <span>page.tsx</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FolderOpen className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold">public/</span>
                            <Badge variant="outline" className="text-xs">
                              Assets & logos
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 ml-6">
                            <FolderOpen className="w-4 h-4 text-blue-600" />
                            <span>logo/</span>
                          </div>
                          <div className="flex items-center space-x-2 ml-6">
                            <FolderOpen className="w-4 h-4 text-blue-600" />
                            <span>illustrations/</span>
                          </div>
                          <div className="flex items-center space-x-2 ml-6">
                            <FolderOpen className="w-4 h-4 text-blue-600" />
                            <span>fonts/</span>
                          </div>
                        </div>
                      </div>
                      <Alert>
                        <Code className="h-4 w-4" />
                        <AlertDescription>
                          v0.dev automatically understands this structure and will use the correct assets and tokens
                          when generating components.
                        </AlertDescription>
                      </Alert>
                    </TabsContent>

                    <TabsContent value="config" className="space-y-4 mt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">tailwind.config.ts</CardTitle>
                            <CardDescription>Pre-configured with DDS tokens</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div>✅ Docker color palette</div>
                              <div>✅ Typography scale</div>
                              <div>✅ Spacing system</div>
                              <div>✅ Border radius tokens</div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">components/ui/</CardTitle>
                            <CardDescription>shadcn/ui with DDS styling</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div>✅ Button variants</div>
                              <div>✅ Form components</div>
                              <div>✅ Layout components</div>
                              <div>✅ Feedback components</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="tokens" className="space-y-4 mt-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="text-left space-y-2">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto"></div>
                          <div className="text-sm font-medium">Primary Blue</div>
                          <div className="text-xs text-gray-500">#2496ED</div>
                        </div>
                        <div className="text-left space-y-2">
                          <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto"></div>
                          <div className="text-sm font-medium">Secondary Purple</div>
                          <div className="text-xs text-gray-500">#6366F1</div>
                        </div>
                        <div className="text-left space-y-2">
                          <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto"></div>
                          <div className="text-sm font-medium">Success Green</div>
                          <div className="text-xs text-gray-500">#10B981</div>
                        </div>
                        <div className="text-left space-y-2">
                          <div className="w-12 h-12 bg-red-600 rounded-lg mx-auto"></div>
                          <div className="text-sm font-medium">Error Red</div>
                          <div className="text-xs text-gray-500">#EF4444</div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {/* Step 3: Assets */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-left space-y-4">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Your workspace includes Docker logos, illustrations, and fonts ready to use in any component.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <div className="w-6 h-6">
                            <img src="/sub-marks/subMarkPrimary.svg" alt="Docker" className="w-full h-full" />
                          </div>
                          <span>Docker Logos</span>
                        </CardTitle>
                        <CardDescription>Official Docker branding assets</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-sm">Primary Logo</span>
                          <div className="w-8 h-8">
                            <img src="/logo/LogoPrimary.svg" alt="Docker Primary" className="w-full h-full" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-sm">White Logo</span>
                          <div className="w-8 h-8 bg-gray-800 rounded p-1">
                            <img src="/logo/LogoWhite.svg" alt="Docker White" className="w-full h-full" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-sm">Submarks</span>
                          <div className="w-6 h-6">
                            <img src="/sub-marks/subMarkPrimary.svg" alt="Docker Submark" className="w-full h-full" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Palette className="w-5 h-5" />
                          <span>Illustrations</span>
                        </CardTitle>
                        <CardDescription>Product illustrations for interfaces</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="aspect-square bg-white rounded-lg p-2">
                            <img
                              src="/illustrations/Product Illustration/Sm/Run Image.png"
                              alt="Run Image"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="aspect-square bg-white rounded-lg p-2">
                            <img
                              src="/illustrations/Product Illustration/Md/List Panel.png"
                              alt="List Panel"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 text-center">Small, Medium & Large sizes available</div>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <FileText className="w-5 h-5" />
                          <span>Typography</span>
                        </CardTitle>
                        <CardDescription>Docker Design System fonts</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-lg font-heading font-bold">Poppins Bold</div>
                          <div className="text-sm text-gray-600">For headings and titles</div>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <div className="text-base font-sans">Inter Regular</div>
                          <div className="text-sm text-gray-600">For body text and UI</div>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <div className="text-sm font-mono">Roboto Mono</div>
                          <div className="text-sm text-gray-600">For code and data</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert className="bg-purple-50 border-purple-200">
                    <Star className="h-4 w-4 text-purple-600" />
                    <AlertDescription className="text-purple-800">
                      <strong>Magic Moment:</strong> When you ask v0.dev to "add a Docker logo", it automatically knows
                      which assets to use and where to find them!
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              {/* Step 4: Component Editing */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-left space-y-4">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Learn how to use chat to make precise edits to specific components without affecting the rest of
                      your layout.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-xl">💬 Chat Examples for Component Editing</CardTitle>
                      <CardDescription>Try these prompts to edit specific parts of your interface</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-4 bg-white rounded-lg border border-blue-200">
                          <div className="font-medium text-blue-900 mb-2">🎯 Targeting Specific Elements</div>
                          <div className="text-sm text-gray-700 space-y-1">
                            <div>"Make the header button blue instead of gray"</div>
                            <div>"Change the card title to use Poppins font"</div>
                            <div>"Add a Docker logo to the navigation bar"</div>
                          </div>
                        </div>

                        <div className="p-4 bg-white rounded-lg border border-purple-200">
                          <div className="font-medium text-purple-900 mb-2">🎨 Styling Adjustments</div>
                          <div className="text-sm text-gray-700 space-y-1">
                            <div>"Make the sidebar darker with white text"</div>
                            <div>"Add more padding to the content area"</div>
                            <div>"Change the button to use Docker blue gradient"</div>
                          </div>
                        </div>

                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <div className="font-medium text-green-900 mb-2">⚡ Adding Interactions</div>
                          <div className="text-sm text-gray-700 space-y-1">
                            <div>"Add a hover effect to the cards"</div>
                            <div>"Make the button show a loading state when clicked"</div>
                            <div>"Add a tooltip to the help icon"</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>✅ Best Practices</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Be Specific</div>
                            <div className="text-sm text-gray-600">
                              Reference exact elements: "the submit button", "the main heading"
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Use Docker Terms</div>
                            <div className="text-sm text-gray-600">
                              "Docker blue", "container card", "primary branding"
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Describe the Change</div>
                            <div className="text-sm text-gray-600">
                              Explain what you want to achieve, not just what to change
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>🚀 Pro Tips</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Chain Requests</div>
                            <div className="text-sm text-gray-600">
                              Make multiple small changes rather than one big request
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Reference DDS</div>
                            <div className="text-sm text-gray-600">
                              v0.dev knows Docker Design System - just mention "DDS compliant"
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Ask for Alternatives</div>
                            <div className="text-sm text-gray-600">"Show me 3 different button styles" for options</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Step 5: Layout Creation */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <div className="text-left space-y-4">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Learn how to use chat to build entire page layouts and complex component structures from scratch.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-xl">🏗️ Layout Building Prompts</CardTitle>
                      <CardDescription>Start with these prompts to create complete Docker interfaces</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Tabs defaultValue="dashboards" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-white">
                          <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
                          <TabsTrigger value="forms">Forms</TabsTrigger>
                          <TabsTrigger value="landing">Landing Pages</TabsTrigger>
                        </TabsList>

                        <TabsContent value="dashboards" className="space-y-3 mt-4">
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="font-medium mb-2">📊 Container Dashboard</div>
                            <div className="text-sm text-gray-700 italic">
                              "Create a Docker container management dashboard with a header, sidebar navigation, stats
                              cards, and a container list table"
                            </div>
                          </div>
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="font-medium mb-2">📈 Analytics Overview</div>
                            <div className="text-sm text-gray-700 italic">
                              "Build a Docker Hub analytics page with usage charts, download metrics, and repository
                              performance cards"
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="forms" className="space-y-3 mt-4">
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="font-medium mb-2">🔐 Login Interface</div>
                            <div className="text-sm text-gray-700 italic">
                              "Create a Docker-branded login page with email/password fields, Docker logo, and forgot
                              password link"
                            </div>
                          </div>
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="font-medium mb-2">⚙️ Settings Panel</div>
                            <div className="text-sm text-gray-700 italic">
                              "Build a user settings page with tabs for profile, security, notifications, and Docker
                              preferences"
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="landing" className="space-y-3 mt-4">
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="font-medium mb-2">🚀 Product Landing</div>
                            <div className="text-sm text-gray-700 italic">
                              "Create a Docker product landing page with hero section, features grid, testimonials, and
                              CTA buttons"
                            </div>
                          </div>
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="font-medium mb-2">📚 Documentation Site</div>
                            <div className="text-sm text-gray-700 italic">
                              "Build a Docker docs homepage with search, navigation menu, quick start guides, and API
                              reference links"
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Layers className="w-5 h-5" />
                          <span>Layout Structure</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-blue-600">1</span>
                            </div>
                            <div>
                              <div className="font-medium">Header/Navigation</div>
                              <div className="text-sm text-gray-600">Logo, menu, user actions</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-purple-600">2</span>
                            </div>
                            <div>
                              <div className="font-medium">Main Content</div>
                              <div className="text-sm text-gray-600">Primary interface elements</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-green-600">3</span>
                            </div>
                            <div>
                              <div className="font-medium">Sidebar/Actions</div>
                              <div className="text-sm text-gray-600">Secondary navigation, tools</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">4</span>
                            </div>
                            <div>
                              <div className="font-medium">Footer</div>
                              <div className="text-sm text-gray-600">Links, legal, contact info</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Target className="w-5 h-5" />
                          <span>Layout Tips</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Alert>
                          <Lightbulb className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Start Big, Then Refine:</strong> Ask for the overall layout first, then use
                            component editing to perfect the details.
                          </AlertDescription>
                        </Alert>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Mention responsive design needs</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Specify Docker branding requirements</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Include accessibility considerations</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Ask for interactive elements</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Step 6: Layout Refinement */}
              {currentStep === 6 && (
                <div className="space-y-8">
                  <div className="text-left space-y-4">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Master the art of iterative improvement - how to polish and perfect your Docker interfaces through
                      targeted refinements.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
                    <CardHeader>
                      <CardTitle className="text-xl">✨ Refinement Strategies</CardTitle>
                      <CardDescription>Advanced techniques for perfecting your Docker interfaces</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-heading font-semibold text-lg">🎨 Visual Polish</h3>
                          <div className="space-y-3">
                            <div className="p-3 bg-white rounded-lg border">
                              <div className="font-medium text-sm mb-1">Spacing & Layout</div>
                              <div className="text-xs text-gray-600">"Add more breathing room between the cards"</div>
                            </div>
                            <div className="p-3 bg-white rounded-lg border">
                              <div className="font-medium text-sm mb-1">Color Harmony</div>
                              <div className="text-xs text-gray-600">
                                "Make the accent colors more consistent with Docker blue"
                              </div>
                            </div>
                            <div className="p-3 bg-white rounded-lg border">
                              <div className="font-medium text-sm mb-1">Typography Hierarchy</div>
                              <div className="text-xs text-gray-600">"Make the section headings more prominent"</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-heading font-semibold text-lg">⚡ Interaction Design</h3>
                          <div className="space-y-3">
                            <div className="p-3 bg-white rounded-lg border">
                              <div className="font-medium text-sm mb-1">Hover States</div>
                              <div className="text-xs text-gray-600">
                                "Add subtle hover effects to the navigation items"
                              </div>
                            </div>
                            <div className="p-3 bg-white rounded-lg border">
                              <div className="font-medium text-sm mb-1">Loading States</div>
                              <div className="text-xs text-gray-600">"Show a spinner when the form is submitting"</div>
                            </div>
                            <div className="p-3 bg-white rounded-lg border">
                              <div className="font-medium text-sm mb-1">Feedback</div>
                              <div className="text-xs text-gray-600">"Add success toast when action completes"</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
                    <CardContent className="p-6 text-left">
                      <div className="space-y-4">
                        <h3 className="font-heading font-bold text-xl">You're Ready to Build!</h3>
                        <p className="text-blue-100">
                          You now have all the skills to create amazing Docker-branded interfaces with v0.dev + DDS.
                          Time to build something incredible!
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-blue-100 max-w-md mx-auto">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-300" />
                            <span>File structure</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-300" />
                            <span>Asset utilization</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-300" />
                            <span>Component editing</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-300" />
                            <span>Layout creation</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-300" />
                            <span>Layout refinement</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-300" />
                            <span>DDS integration</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>

            {/* Sticky Footer with Navigation */}
            <div className="flex-shrink-0 border-t bg-white/50 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalSteps }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index + 1)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index + 1 === currentStep ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button onClick={nextStep} className="flex items-center space-x-2">
                  <span>{currentStep === totalSteps ? "Enter Playground" : "Next"}</span>
                  {currentStep === totalSteps ? <Play className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
