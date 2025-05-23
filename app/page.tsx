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
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Bell,
  ChevronDown,
  Container,
  Download,
  Github,
  Globe,
  Heart,
  LogOut,
  Mail,
  Moon,
  Play,
  Plus,
  Settings,
  Share2,
  Star,
  Sun,
  Terminal,
  Zap,
} from "lucide-react"

export default function DockerShowcase() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [progress, setProgress] = useState(65)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`min-h-screen bg-background p-6 ${theme === "dark" ? "dark" : ""}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Header with Docker Logo */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <img src="/logo/LogoPrimary.svg" alt="Docker Logo" className="w-full h-full object-contain dark:hidden" />
              <img
                src="/logo/LogoWhite.svg"
                alt="Docker Logo"
                className="w-full h-full object-contain hidden dark:block"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Docker Design System</h1>
              <p className="text-muted-foreground">Container-first UI components</p>
            </div>
          </div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </header>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {/* Hero Docker Logo Card */}
          <Card className="break-inside-avoid bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-0">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <img src="/logo/LogoWhite.svg" alt="Docker Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Docker</h2>
              <p className="text-blue-100 mb-4">Accelerate how you build, share, and run applications</p>
              <Button variant="secondary" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Interactive Buttons */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Interactive Elements
              </CardTitle>
              <CardDescription>Buttons, badges, and controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Running</Badge>
                <Badge variant="secondary">Stopped</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="outline">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark Mode</span>
                <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
              </div>
            </CardContent>
          </Card>

          {/* Docker Hub Card */}
          <Card className="break-inside-avoid bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img
                      src="/sub-marks/subMarkPrimary.svg"
                      alt="Docker Submark"
                      className="w-full h-full object-contain dark:hidden"
                    />
                    <img
                      src="/sub-marks/subMarkWhite.svg"
                      alt="Docker Submark"
                      className="w-full h-full object-contain hidden dark:block"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Docker Hub</CardTitle>
                    <CardDescription>Container registry</CardDescription>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-24 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/List w Users.png"
                  alt="Docker Hub Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>nginx</span>
                  <span className="text-muted-foreground">1B+ pulls</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>redis</span>
                  <span className="text-muted-foreground">500M+ pulls</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>postgres</span>
                  <span className="text-muted-foreground">100M+ pulls</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Globe className="mr-2 h-4 w-4" /> Browse Registry
              </Button>
            </CardFooter>
          </Card>

          {/* Modal Dialog Demo */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Container Actions</CardTitle>
              <CardDescription>Manage your containers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-16 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/Mock Panels.png"
                  alt="Container Management"
                  className="w-full h-full object-contain"
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Container className="mr-2 h-4 w-4" /> Deploy Container
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Deploy New Container</DialogTitle>
                    <DialogDescription>Configure your container deployment settings.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Container name" />
                    <Input placeholder="Image (e.g., nginx:latest)" />
                    <Input placeholder="Port mapping (e.g., 80:80)" />
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Progress & Stats */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>System Resources</CardTitle>
              <CardDescription>Container resource usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>CPU Usage</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Memory</span>
                  <span>2.1GB / 8GB</span>
                </div>
                <Progress value={26} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Storage</span>
                  <span>45GB / 100GB</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setProgress(Math.floor(Math.random() * 100))}
              >
                Refresh Stats
              </Button>
            </CardContent>
          </Card>

          {/* Toast Demo */}
          <Card className="break-inside-avoid bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-green-600" />
                Notifications
              </CardTitle>
              <CardDescription>System alerts and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Container Started",
                    description: "nginx:latest is now running on port 80",
                    action: <ToastAction altText="View logs">View Logs</ToastAction>,
                  })
                }}
              >
                <Play className="mr-2 h-4 w-4" /> Start Container
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Image Pulled",
                    description: "Successfully pulled redis:7-alpine",
                    action: <ToastAction altText="Run image">Run Image</ToastAction>,
                  })
                }}
              >
                <Download className="mr-2 h-4 w-4" /> Pull Image
              </Button>
            </CardContent>
          </Card>

          {/* Dropdown Menu */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Container management shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-16 mb-4">
                <img
                  src="/illustrations/Product Illustration/Sm/Run Image.png"
                  alt="Quick Actions"
                  className="w-full h-full object-contain"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Container Menu <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Container Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Play className="mr-2 h-4 w-4" /> Start Container
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Terminal className="mr-2 h-4 w-4" /> Open Terminal
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" /> Configure
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" /> Remove Container
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          {/* Tabbed Interface */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Container Logs</CardTitle>
              <CardDescription>Real-time container output</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="logs" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                  <TabsTrigger value="stats">Stats</TabsTrigger>
                  <TabsTrigger value="env">Env</TabsTrigger>
                </TabsList>
                <TabsContent value="logs" className="mt-4">
                  <div className="bg-black text-green-400 p-3 rounded font-mono text-xs">
                    <div>2024-01-15 10:30:15 [INFO] Server started</div>
                    <div>2024-01-15 10:30:16 [INFO] Listening on port 80</div>
                    <div>2024-01-15 10:30:17 [INFO] Ready to accept connections</div>
                  </div>
                </TabsContent>
                <TabsContent value="stats" className="mt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span>12.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory:</span>
                      <span>256MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network I/O:</span>
                      <span>1.2MB/s</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="env" className="mt-4">
                  <div className="space-y-1 text-xs font-mono">
                    <div>NODE_ENV=production</div>
                    <div>PORT=3000</div>
                    <div>DATABASE_URL=***</div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Sheet Demo */}
          <Card className="break-inside-avoid bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Container className="h-5 w-5 text-purple-600" />
                Image Library
              </CardTitle>
              <CardDescription>Browse container images</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-20 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                  alt="Image Library"
                  className="w-full h-full object-contain"
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Browse Images
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Container Images</SheetTitle>
                    <SheetDescription>Select an image to deploy</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">nginx</div>
                        <div className="text-sm text-muted-foreground">Web server</div>
                      </div>
                      <Button size="sm">Deploy</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">redis</div>
                        <div className="text-sm text-muted-foreground">In-memory database</div>
                      </div>
                      <Button size="sm">Deploy</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">postgres</div>
                        <div className="text-sm text-muted-foreground">SQL database</div>
                      </div>
                      <Button size="sm">Deploy</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          {/* App Icons Showcase */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Docker Apps</CardTitle>
              <CardDescription>Integrated development tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2">
                    <img src="/app icons/Primary.svg" alt="Docker Desktop" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xs">Desktop</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2">
                    <img src="/app icons/Secondary.svg" alt="Docker Compose" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xs">Compose</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2">
                    <img src="/app icons/Tertiary.svg" alt="Docker Scout" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xs">Scout</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="break-inside-avoid bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Community
              </CardTitle>
              <CardDescription>Join the Docker community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">GitHub Stars</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">65.2k</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Docker Hub Pulls</span>
                <span className="text-sm font-medium">50B+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Users</span>
                <span className="text-sm font-medium">20M+</span>
              </div>
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" /> Contribute
              </Button>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Get Support</CardTitle>
              <CardDescription>Need help with Docker?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-16 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/Option Select.png"
                  alt="Support Options"
                  className="w-full h-full object-contain"
                />
              </div>
              <Input placeholder="Your email" />
              <Input placeholder="Subject" />
              <Input placeholder="How can we help?" />
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Toaster />
    </div>
  )
}
