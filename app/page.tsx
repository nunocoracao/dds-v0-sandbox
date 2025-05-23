"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DockerLogo } from "@/components/logo/docker-logo"
import { DockerSubmark } from "@/components/logo/docker-submark"
import { ProductIllustration } from "@/components/illustrations/product-illustration"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToastAction } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import {
  ChevronDown,
  CreditCard,
  Download,
  Github,
  Laptop,
  LogOut,
  Mail,
  MessageSquare,
  Moon,
  Plus,
  Settings,
  Sun,
  User,
} from "lucide-react"

export default function ComponentShowcase() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`min-h-screen bg-background p-6 ${theme === "dark" ? "dark" : ""}`}>
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <DockerLogo size="lg" />
            <h1 className="text-3xl font-bold">Docker Design System</h1>
          </div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* Button Showcase */}
          <Card className="row-span-1">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Interactive button elements in various styles</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          {/* Input Showcase */}
          <Card className="row-span-1">
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Form input elements for user data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
              <div className="flex items-center space-x-2">
                <Input placeholder="With button" />
                <Button>Send</Button>
              </div>
            </CardContent>
          </Card>

          {/* Card Showcase */}
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>Versatile content containers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Cards can contain various elements and are perfect for organizing content into discrete sections.</p>
              <div className="mt-4 space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Nested Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs">Cards can be nested within other cards.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Another Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs">Multiple cards can be used together.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View More Cards
              </Button>
            </CardFooter>
          </Card>

          {/* Dialog Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialog windows</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a dialog window that appears over the page content.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Dialogs are perfect for important notifications or actions that require user attention.</p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Dropdown Menu Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
              <CardDescription>Contextual dropdown menus</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Options <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" /> Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          {/* Container Management Card with Illustration */}
          <Card className="row-span-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <DockerSubmark size="md" />
                <div>
                  <CardTitle>Container Management</CardTitle>
                  <CardDescription>Manage your Docker containers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <ProductIllustration type="mock-panels-md" size="lg" />
              </div>
              <p className="text-sm text-muted-foreground">
                View and manage all your running containers from a unified dashboard interface.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Running Containers</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Stopped Containers</span>
                  <span className="text-sm font-medium">3</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View All Containers</Button>
            </CardFooter>
          </Card>

          {/* Sheet Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
              <CardDescription>Slide-in panels from any edge</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 justify-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>Sheets slide in from the edge of the screen.</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Sheets are perfect for side panels, drawers, and mobile menus.</p>
                  </div>
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          {/* Toast Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Toast</CardTitle>
              <CardDescription>Temporary notifications</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                onClick={() => {
                  toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
                  })
                }}
              >
                Show Toast
              </Button>
            </CardContent>
          </Card>

          {/* Docker Hub Card with Illustration */}
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <DockerSubmark size="sm" />
                <CardTitle>Docker Hub</CardTitle>
              </div>
              <CardDescription className="text-blue-100">Find and share container images</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <ProductIllustration type="list-users" size="md" />
              </div>
              <p className="text-sm">Discover millions of container images from the Docker community.</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                <Github className="mr-2 h-4 w-4" /> Browse Images
              </Button>
            </CardFooter>
          </Card>

          {/* File Management Card */}
          <Card>
            <CardHeader>
              <CardTitle>File Management</CardTitle>
              <CardDescription>Organize your Docker files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <ProductIllustration type="folder-docs" size="md" />
              </div>
              <p className="text-sm text-muted-foreground">Keep your Dockerfiles and configurations organized.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Manage Files
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common Docker operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <ProductIllustration type="run-image" size="md" />
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" /> Run New Container
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" /> Pull Image
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Message" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardFooter>
          </Card>

          {/* Device Switcher */}
          <Card>
            <CardHeader>
              <CardTitle>Device Preview</CardTitle>
              <CardDescription>View your site on different devices</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="desktop">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="desktop">
                    <Laptop className="mr-2 h-4 w-4" /> Desktop
                  </TabsTrigger>
                  <TabsTrigger value="tablet">Tablet</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                </TabsList>
                <TabsContent value="desktop" className="mt-4">
                  <div className="border rounded p-4 aspect-video flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Desktop Preview (1920×1080)</p>
                  </div>
                </TabsContent>
                <TabsContent value="tablet" className="mt-4">
                  <div className="border rounded p-4 aspect-[4/3] max-w-[768px] mx-auto flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Tablet Preview (768×1024)</p>
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="mt-4">
                  <div className="border rounded p-4 aspect-[9/16] max-w-[390px] mx-auto flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Mobile Preview (390×844)</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Chat UI Card */}
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle>Chat Interface</CardTitle>
              <CardDescription>Message component examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <User className="h-4 w-4" />
                </div>
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Hey there! How are you doing today?</p>
                  <span className="text-xs text-muted-foreground mt-1 block">10:24 AM</span>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-primary p-3 rounded-lg rounded-tr-none max-w-[80%] text-primary-foreground">
                  <p className="text-sm">I'm doing great! Just checking out these new components.</p>
                  <span className="text-xs text-primary-foreground/80 mt-1 block">10:26 AM</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                  <MessageSquare className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <User className="h-4 w-4" />
                </div>
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">They look amazing! The design system is really coming together.</p>
                  <span className="text-xs text-muted-foreground mt-1 block">10:28 AM</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button>Send</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Toaster />
    </div>
  )
}
