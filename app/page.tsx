"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/components/ui/use-toast"

import { Code, FileText, Github, Info, Rocket, Settings, Star } from "lucide-react"

export default function IndexPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-blue-600">
        <div className="container flex h-16 items-center justify-between space-x-4">
          <a href="#" className="flex items-center font-semibold">
            DDS + v0.dev
          </a>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* 100vh Onboarding Hero */}
      <section className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

        <div className="flex-1 container mx-auto px-6 py-12 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
            {/* Left Side - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  <Rocket className="w-3 h-3 mr-1" />
                  Docker + v0.dev Partnership
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-inter">
                  Superhuman
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Docker UI{" "}
                  </span>
                  Building Powers
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get your team building DDS-compliant components in v0.dev in under 2 minutes. No setup, no
                  configuration—just fork, connect, and start shipping.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2 min</div>
                  <div className="text-sm text-gray-500">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-500">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-500">DDS Compliant</div>
                </div>
              </div>

              {/* Role Tabs */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur">
                  <TabsTrigger value="all">All Teams</TabsTrigger>
                  <TabsTrigger value="designers">Designers</TabsTrigger>
                  <TabsTrigger value="pms">PMs</TabsTrigger>
                  <TabsTrigger value="engineers">Engineers</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <p className="text-gray-600">
                    Perfect for cross-functional teams building Docker interfaces with consistent design system
                    compliance.
                  </p>
                </TabsContent>
                <TabsContent value="designers" className="mt-4">
                  <p className="text-gray-600">
                    Generate pixel-perfect components that automatically use Docker Design System tokens and typography.
                  </p>
                </TabsContent>
                <TabsContent value="pms" className="mt-4">
                  <p className="text-gray-600">
                    Rapidly prototype features and validate concepts with production-ready, brand-compliant components.
                  </p>
                </TabsContent>
                <TabsContent value="engineers" className="mt-4">
                  <p className="text-gray-600">
                    Skip the styling overhead—focus on functionality while v0.dev handles DDS implementation
                    automatically.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Side - Interactive Stepper */}
            <div className="space-y-6">
              <Card className="p-8 bg-white/80 backdrop-blur border-0 shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">Get Started in 4 Steps</CardTitle>
                  <CardDescription className="text-gray-600">
                    From zero to superhuman Docker UI building in under 2 minutes
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Step 1 */}
                  <div
                    className="flex gap-4 group cursor-pointer"
                    onClick={() =>
                      toast({
                        title: "Step 1",
                        description: "Fork the dds-v0-sandbox repository to your GitHub account",
                      })
                    }
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Fork Repository
                      </h3>
                      <p className="text-sm text-gray-600">Fork dds-v0-sandbox to your GitHub account</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          30 sec
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4" />
                    </Button>
                  </div>

                  <Separator />

                  {/* Step 2 */}
                  <div
                    className="flex gap-4 group cursor-pointer"
                    onClick={() =>
                      toast({ title: "Step 2", description: "Connect your GitHub account to v0.dev platform" })
                    }
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        Connect to v0.dev
                      </h3>
                      <p className="text-sm text-gray-600">Link your GitHub account with v0.dev</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          <Code className="w-3 h-3 mr-1" />
                          v0.dev
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          30 sec
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4" />
                    </Button>
                  </div>

                  <Separator />

                  {/* Step 3 */}
                  <div
                    className="flex gap-4 group cursor-pointer"
                    onClick={() =>
                      toast({
                        title: "Step 3",
                        description: "Select your forked repository as the active project in v0.dev",
                      })
                    }
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        Select Project
                      </h3>
                      <p className="text-sm text-gray-600">Choose your forked repo as the active project</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          <Settings className="w-3 h-3 mr-1" />
                          Project Setup
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          30 sec
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4" />
                    </Button>
                  </div>

                  <Separator />

                  {/* Step 4 */}
                  <div
                    className="flex gap-4 group cursor-pointer"
                    onClick={() =>
                      toast({ title: "Step 4", description: "Start generating DDS-compliant components with AI!" })
                    }
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold group-hover:scale-110 transition-transform">
                      4
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        Start Building
                      </h3>
                      <p className="text-sm text-gray-600">Generate DDS-compliant components automatically</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          AI Powered
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          ∞ possibilities
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>

                <CardFooter className="pt-6 flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Rocket className="w-4 h-4 mr-2" />
                        Get Started Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Quick Start Guide</DialogTitle>
                        <DialogDescription>Detailed instructions for each step of the setup process</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 py-4">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="step-1">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                  1
                                </div>
                                Fork Repository
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-9 space-y-3">
                              <p>Navigate to the dds-v0-sandbox repository and click the "Fork" button.</p>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <code className="text-sm">https://github.com/docker/dds-v0-sandbox</code>
                              </div>
                              <p className="text-sm text-gray-600">
                                This creates your own copy of the Docker Design System + v0.dev integration.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step-2">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                  2
                                </div>
                                Connect to v0.dev
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-9 space-y-3">
                              <p>Go to v0.dev and sign in with your GitHub account.</p>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <code className="text-sm">https://v0.dev</code>
                              </div>
                              <p className="text-sm text-gray-600">
                                This allows v0.dev to access your repositories and generate code directly into your
                                projects.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step-3">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                  3
                                </div>
                                Select Project
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-9 space-y-3">
                              <p>In v0.dev, select your forked dds-v0-sandbox repository as your active project.</p>
                              <p className="text-sm text-gray-600">
                                This tells v0.dev to use the Docker Design System tokens and configuration when
                                generating components.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step-4">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                  4
                                </div>
                                Start Building
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-9 space-y-3">
                              <p>
                                Start generating components! Every component will automatically use Docker Design System
                                tokens.
                              </p>
                              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                <p className="text-sm text-blue-800">
                                  💡 Try: "Create a login form with Docker branding" or "Build a dashboard card
                                  component"
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">
                          <FileText className="w-4 h-4 mr-2" />
                          View Full Docs
                        </Button>
                        <Button>
                          <Github className="w-4 h-4 mr-2" />
                          Go to Repository
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Docs
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[600px] sm:w-[800px]">
                      <SheetHeader>
                        <SheetTitle>Documentation</SheetTitle>
                        <SheetDescription>
                          Everything you need to know about Docker Design System + v0.dev
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-6">
                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                            <TabsTrigger value="tokens">Token Pipeline</TabsTrigger>
                          </TabsList>
                          <TabsContent value="overview" className="space-y-4 mt-6">
                            <h3 className="text-lg font-semibold">Docker Design System + v0.dev</h3>
                            <p className="text-gray-600">
                              This project bridges Docker Design System (DDS) with v0.dev's AI-powered component
                              generation, enabling teams to rapidly create DDS-compliant interfaces.
                            </p>
                            <div className="space-y-3">
                              <h4 className="font-medium">What This Enables:</h4>
                              <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                  • <strong>Instant DDS Compliance:</strong> Every component uses Docker Design System
                                  tokens
                                </li>
                                <li>
                                  • <strong>Rapid Prototyping:</strong> Build production-ready UI with natural language
                                </li>
                                <li>
                                  • <strong>Design Consistency:</strong> Maintain Docker's visual identity automatically
                                </li>
                                <li>
                                  • <strong>Team Autonomy:</strong> Anyone can generate on-brand components
                                </li>
                              </ul>
                            </div>
                          </TabsContent>
                          <TabsContent value="getting-started" className="space-y-4 mt-6">
                            <h3 className="text-lg font-semibold">Getting Started</h3>
                            <div className="space-y-4">
                              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="font-medium text-blue-900 mb-2">Quick Setup</h4>
                                <ol className="space-y-2 text-sm text-blue-800">
                                  <li>1. Fork this repository to your GitHub account</li>
                                  <li>2. Go to v0.dev and connect your GitHub account</li>
                                  <li>3. Select your forked repository as your project</li>
                                  <li>
                                    4. Start generating components - they'll automatically use Docker Design System!
                                  </li>
                                </ol>
                              </div>
                              <div className="space-y-3">
                                <h4 className="font-medium">Need a Fresh Start?</h4>
                                <p className="text-sm text-gray-600">
                                  If you want to start over, simply delete your forked repository and fork again. It's
                                  like getting a fresh canvas while keeping all the Docker Design System goodness!
                                </p>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="tokens" className="space-y-4 mt-6">
                            <h3 className="text-lg font-semibold">Token Pipeline</h3>
                            <p className="text-gray-600">
                              A token pipeline that transforms Figma design tokens into multiple target formats for the
                              Docker Design System.
                            </p>
                            <div className="space-y-3">
                              <h4 className="font-medium">Pipeline Outputs:</h4>
                              <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Style Dictionary transformations</li>
                                <li>• shadcn/ui theme variables</li>
                                <li>• CSS custom properties</li>
                                <li>• MUI theme configuration</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium mb-2">Live Demo</h4>
                              <p className="text-sm text-gray-600">See the pipeline in action at our live deployment</p>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </SheetContent>
                  </Sheet>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center pb-8">
          <div className="inline-flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm font-medium">Explore Interactive Components</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto mt-12 px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Component Generation</CardTitle>
              <CardDescription>Generate components with Docker Design System tokens using AI.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="prompt">Describe your component:</Label>
                <Input id="prompt" placeholder="e.g., 'Create a primary button with Docker blue'" />
                <Button>Generate</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Token Playground</CardTitle>
              <CardDescription>Explore and customize Docker Design System tokens.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="primary-color">Primary Color:</Label>
                <Input id="primary-color" type="color" defaultValue="#007bff" />
                <Label htmlFor="font-size">Font Size:</Label>
                <Input id="font-size" type="number" defaultValue="16" />
                <Button>Apply Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>See your components in action.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Click me</Button>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Interactive Elements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Form Example</CardTitle>
                <CardDescription>A simple form with DDS styling.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
                  </div>
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Toggle settings with a switch.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <Switch id="dark-mode" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="container mx-auto mt-12 px-6 py-8 text-center text-gray-500">
        <p>&copy; 2024 Docker. All rights reserved.</p>
      </footer>
    </>
  )
}
