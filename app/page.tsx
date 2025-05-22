"use client"

import { useState } from "react"
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
  Bell,
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
          <h1 className="text-3xl font-bold">Docker Design System</h1>
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

          {/* Tabs Showcase */}
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Tabbed interface for content organization</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4 space-y-4">
                  <h3 className="text-lg font-medium">Account Settings</h3>
                  <p className="text-sm text-muted-foreground">Manage your account information and preferences.</p>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Email" defaultValue="example@docker.com" />
                    <Button size="sm">Save</Button>
                  </div>
                </TabsContent>
                <TabsContent value="password" className="mt-4 space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  <p className="text-sm text-muted-foreground">Update your password to keep your account secure.</p>
                  <div className="space-y-2">
                    <Input type="password" placeholder="Current password" />
                    <Input type="password" placeholder="New password" />
                    <Button className="w-full">Update Password</Button>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="mt-4 space-y-4">
                  <h3 className="text-lg font-medium">Notification Settings</h3>
                  <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Email Notifications</span>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Push Notifications</span>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
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

          {/* Docker-themed Card */}
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <CardTitle>Docker Design System</CardTitle>
              <CardDescription className="text-blue-100">Powerful components for container management</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Build beautiful interfaces for Docker container management with our design system components.</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Button>
            </CardFooter>
          </Card>

          {/* Button Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>Different button size variants</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Bell className="h-4 w-4" />
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
