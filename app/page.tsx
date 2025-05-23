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
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
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
  Search,
  Settings,
  Shield,
  Star,
  Sun,
  Terminal,
  User,
  Zap,
  Database,
  Network,
  HardDrive,
  Cpu,
  Activity,
  Code,
  Layers,
  Package,
  Cloud,
  Lock,
  Rocket,
  BarChart3,
  FileText,
  Camera,
  Wifi,
  Monitor,
} from "lucide-react"

export default function DockerApp() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [progress, setProgress] = useState(65)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`min-h-screen bg-background ${theme === "dark" ? "dark" : ""}`}>
      {/* Application Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-blue-600 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-32 h-10">
                <img src="/logo/LogoWhite.svg" alt="Docker" className="w-full h-full object-contain" />
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Containers
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Images
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Volumes
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Networks
              </Button>
            </nav>
          </div>

          {/* Center - Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search containers, images..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
              />
            </div>
          </div>

          {/* Right side - Actions and Profile */}
          <div className="flex items-center gap-3">
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Badge variant="secondary">3 new</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Notification Cards */}
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-3 hover:bg-muted/50 border-b">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Container Started</span>
                          <span className="text-xs text-muted-foreground">2m ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">nginx-web is now running on port 80</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-muted/50 border-b">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Image Pulled</span>
                          <span className="text-xs text-muted-foreground">5m ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">redis:7-alpine downloaded successfully</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-muted/50 border-b">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Security Scan</span>
                          <span className="text-xs text-muted-foreground">10m ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Vulnerability scan completed for postgres:15</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-muted/50 border-b">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Update Available</span>
                          <span className="text-xs text-muted-foreground">1h ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Docker Desktop 4.26.1 is available</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-muted/50">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Container Stopped</span>
                          <span className="text-xs text-muted-foreground">2h ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">mysql-db container exited with code 0</p>
                      </div>
                    </div>
                  </div>
                </div>

                <DropdownMenuSeparator />
                <div className="p-2 flex justify-between items-center">
                  <Button variant="ghost" size="sm" className="text-xs">
                    Mark all as read
                  </Button>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      ←
                    </Button>
                    <span className="text-xs text-muted-foreground px-2">1 of 3</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      →
                    </Button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* App Switcher Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                    <div className="w-1 h-1 bg-current rounded-sm"></div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72" align="end">
                <DropdownMenuLabel>Docker Apps</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Docker Desktop */}
                    <div className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="w-12 h-12 mb-2">
                        <img
                          src="/app icons/Primary.svg"
                          alt="Docker Desktop"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-center">Desktop</span>
                      <span className="text-xs text-muted-foreground">Current</span>
                    </div>

                    {/* Docker Compose */}
                    <div className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="w-12 h-12 mb-2">
                        <img
                          src="/app icons/Secondary.svg"
                          alt="Docker Compose"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-center">Compose</span>
                      <span className="text-xs text-muted-foreground">v2.24</span>
                    </div>

                    {/* Docker Scout */}
                    <div className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="w-12 h-12 mb-2">
                        <img
                          src="/app icons/Tertiary.svg"
                          alt="Docker Scout"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-center">Scout</span>
                      <span className="text-xs text-muted-foreground">Security</span>
                    </div>

                    {/* Docker Hub */}
                    <div className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="w-12 h-12 mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-center">Hub</span>
                      <span className="text-xs text-muted-foreground">Registry</span>
                    </div>

                    {/* Docker Build */}
                    <div className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="w-12 h-12 mb-2 bg-green-100 rounded-lg flex items-center justify-center">
                        <Container className="h-6 w-6 text-green-600" />
                      </div>
                      <span className="text-xs font-medium text-center">Build</span>
                      <span className="text-xs text-muted-foreground">CI/CD</span>
                    </div>

                    {/* Docker Extensions */}
                    <div className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="w-12 h-12 mb-2 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Plus className="h-6 w-6 text-purple-600" />
                      </div>
                      <span className="text-xs font-medium text-center">Extensions</span>
                      <span className="text-xs text-muted-foreground">Marketplace</span>
                    </div>
                  </div>
                </div>

                <DropdownMenuSeparator />
                <div className="p-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Apps
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white hover:bg-white/10">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="bg-white/20 text-white">DU</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Docker User</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 max-w-7xl">
        {/* Docker Announcements Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {/* Main HDI Announcement */}
          <Card className="md:col-span-2 bg-blue-600 text-white border-0 overflow-hidden relative">
            <CardContent className="relative p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      NEW
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">Docker Hardened Images</h2>
                  <p className="text-blue-100 mb-6 text-lg">
                    Enterprise-grade security with DDS + v0.dev integration. Pre-configured, vulnerability-scanned
                    images ready for production.
                  </p>
                  <div className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="lg">
                          <Shield className="mr-2 h-5 w-5" />
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Shield className="h-6 w-6 text-blue-600" />
                            Docker Hardened Images (HDI)
                          </DialogTitle>
                          <DialogDescription>
                            Enterprise-grade container images with enhanced security and DDS integration
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-semibold">Security Features</h4>
                              <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>• Vulnerability scanning</li>
                                <li>• SBOM generation</li>
                                <li>• Compliance reporting</li>
                                <li>• Zero-day protection</li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold">DDS + v0.dev Integration</h4>
                              <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>• Design system components</li>
                                <li>• AI-powered development</li>
                                <li>• Automated deployments</li>
                                <li>• Real-time collaboration</li>
                              </ul>
                            </div>
                          </div>
                          <div className="w-full h-32">
                            <img
                              src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                              alt="HDI Dashboard"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Documentation</Button>
                          <Button>Get Started</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <Download className="mr-2 h-4 w-4" />
                      Try Now
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-full h-48">
                    <img
                      src="/illustrations/Product Illustration/Lg/List w Users.png"
                      alt="Docker Hardened Images"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* v0 + DDS Resources Box */}
          <Card className="bg-green-600 text-white border-0 overflow-hidden relative">
            <CardContent className="relative p-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src="/illustrations/Product Illustration/Md/Option Select.png"
                    alt="v0 + DDS Resources"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="h-6 w-6" />
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    LIVE
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">v0 + DDS Resources</h3>
                <p className="text-green-100 mb-4 text-sm">
                  AI-powered design system components with instant deployment and real-time collaboration.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  Explore Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DDS NEXT GEN Announcement */}
        <div className="mb-8">
          <Card className="bg-purple-600 text-white border-0 overflow-hidden relative">
            <CardContent className="relative p-6">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="h-6 w-6" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      COMING SOON
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">DDS NEXT GEN</h2>
                  <p className="text-purple-100 text-lg">
                    Revolutionary design system with AI-native components, quantum-fast rendering, and neural design
                    patterns. The future of containerized UI development starts here.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3">
                    <img
                      src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                      alt="DDS Next Gen"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button variant="secondary">
                    <Bell className="mr-2 h-4 w-4" />
                    Notify Me
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Masonry Grid - DOUBLED! */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {/* Container Management */}
          <Card className="break-inside-avoid bg-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Container className="h-5 w-5" />
                Active Containers
              </CardTitle>
              <CardDescription className="text-purple-100">Manage running containers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="w-full h-32 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                  alt="Container Management"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between p-3 border border-white/20 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white">nginx-web</div>
                    <div className="text-sm text-purple-100">nginx:latest</div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Container Settings: nginx-web</DialogTitle>
                      <DialogDescription>Configure container runtime settings</DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="general" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="network">Network</TabsTrigger>
                        <TabsTrigger value="volumes">Volumes</TabsTrigger>
                      </TabsList>
                      <TabsContent value="general" className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Container Name</label>
                          <Input defaultValue="nginx-web" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Image</label>
                          <Input defaultValue="nginx:latest" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Restart Policy</label>
                          <Input defaultValue="unless-stopped" />
                        </div>
                      </TabsContent>
                      <TabsContent value="network" className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Port Mapping</label>
                          <Input defaultValue="80:80" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Network</label>
                          <Input defaultValue="bridge" />
                        </div>
                      </TabsContent>
                      <TabsContent value="volumes" className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Volume Mounts</label>
                          <Input placeholder="/host/path:/container/path" />
                        </div>
                      </TabsContent>
                    </Tabs>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Plus className="mr-2 h-4 w-4" /> Deploy New Container
              </Button>
            </CardFooter>
          </Card>

          {/* Tech Photo Card */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-blue-600" />
                Development Environment
              </CardTitle>
              <CardDescription>Modern containerized workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
                  alt="Development Setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Streamlined development with Docker containers, VS Code, and modern tooling for maximum productivity.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Code className="mr-2 h-4 w-4" /> Setup Environment
              </Button>
            </CardFooter>
          </Card>

          {/* Network Management */}
          <Card className="break-inside-avoid bg-green-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Network className="h-5 w-5" />
                Network Management
              </CardTitle>
              <CardDescription className="text-green-100">Container networking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-24 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/List Panel.png"
                  alt="Network Management"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">bridge</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Active
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">host</span>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Available
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">none</span>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Available
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Plus className="mr-2 h-4 w-4" /> Create Network
              </Button>
            </CardFooter>
          </Card>

          {/* Volume Storage */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-purple-600" />
                Volume Storage
              </CardTitle>
              <CardDescription>Persistent data management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-20 mb-4">
                <img
                  src="/illustrations/Product Illustration/Sm/Run Image.png"
                  alt="Volume Storage"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>postgres_data</span>
                  <span className="text-muted-foreground">2.1GB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>redis_cache</span>
                  <span className="text-muted-foreground">156MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>app_logs</span>
                  <span className="text-muted-foreground">45MB</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Database className="mr-2 h-4 w-4" /> Manage Volumes
              </Button>
            </CardFooter>
          </Card>

          {/* System Resources */}
          <Card className="break-inside-avoid bg-blue-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Cpu className="h-5 w-5" />
                System Resources
              </CardTitle>
              <CardDescription className="text-blue-100">Real-time monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-28 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/Mock Panels.png"
                  alt="System Monitoring"
                  className="w-full h-full object-contain"
                />
              </div>
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
            </CardContent>
            <CardFooter>
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => setProgress(Math.floor(Math.random() * 100))}
              >
                Refresh Stats
              </Button>
            </CardFooter>
          </Card>

          {/* Cute Kitten Card */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                Container Mascot
              </CardTitle>
              <CardDescription>Every good app needs a mascot!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                <img src="https://placekitten.com/300/240" alt="Docker Kitten" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Meet Docker Cat! 🐱 The unofficial mascot of containerized applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Heart className="mr-2 h-4 w-4" /> Adopt a Container
              </Button>
            </CardFooter>
          </Card>

          {/* Image Registry */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img
                      src="/sub-marks/subMarkPrimary.svg"
                      alt="Docker Hub"
                      className="w-full h-full object-contain dark:hidden"
                    />
                    <img
                      src="/sub-marks/subMarkWhite.svg"
                      alt="Docker Hub"
                      className="w-full h-full object-contain hidden dark:block"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Docker Hub</CardTitle>
                    <CardDescription>Official image registry</CardDescription>
                  </div>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Search className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <SheetTitle>Browse Docker Hub</SheetTitle>
                      <SheetDescription>Search and pull container images</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search images..." className="pl-10" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border rounded">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                              <Container className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">nginx</div>
                              <div className="text-sm text-muted-foreground">Official build</div>
                              <div className="text-xs text-muted-foreground">1B+ downloads</div>
                            </div>
                          </div>
                          <Button size="sm">Pull</Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-24 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                  alt="Docker Hub Registry"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Images</span>
                  <span className="text-muted-foreground">15M+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Official Images</span>
                  <span className="text-muted-foreground">150+</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Globe className="mr-2 h-4 w-4" /> Browse Registry
              </Button>
            </CardFooter>
          </Card>

          {/* Security Scanner */}
          <Card className="break-inside-avoid bg-green-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5" />
                Security Scanner
              </CardTitle>
              <CardDescription className="text-green-100">Vulnerability detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-32 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/List w Users.png"
                  alt="Security Scanner"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last Scan</span>
                  <span className="text-sm text-green-100">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Vulnerabilities</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    0 Critical
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Compliance</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    ✓ SOC2
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Lock className="mr-2 h-4 w-4" /> Run Security Scan
              </Button>
            </CardFooter>
          </Card>

          {/* Build Pipeline */}
          <Card className="break-inside-avoid bg-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Rocket className="h-5 w-5" />
                Build Pipeline
              </CardTitle>
              <CardDescription className="text-purple-100">CI/CD automation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-28 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/Option Select.png"
                  alt="Build Pipeline"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Build: Success</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Test: Passed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Deploy: In Progress</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Play className="mr-2 h-4 w-4" /> Trigger Build
              </Button>
            </CardFooter>
          </Card>

          {/* Analytics Dashboard */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Analytics Dashboard
              </CardTitle>
              <CardDescription>Container performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-36 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">2.3s</div>
                  <div className="text-muted-foreground">Avg Response</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Activity className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardFooter>
          </Card>

          {/* Cloud Integration */}
          <Card className="break-inside-avoid bg-blue-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Cloud className="h-5 w-5" />
                Cloud Integration
              </CardTitle>
              <CardDescription className="text-blue-100">Multi-cloud deployment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-24 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/List Panel.png"
                  alt="Cloud Integration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">AWS ECS</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Connected
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Google Cloud Run</span>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Available
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Azure Container</span>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Available
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Plus className="mr-2 h-4 w-4" /> Add Provider
              </Button>
            </CardFooter>
          </Card>

          {/* Package Manager */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-green-600" />
                Package Manager
              </CardTitle>
              <CardDescription>Dependency management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-20 mb-4">
                <img
                  src="/illustrations/Product Illustration/Sm/Run Image.png"
                  alt="Package Manager"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>node_modules</span>
                  <span className="text-muted-foreground">245MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>pip packages</span>
                  <span className="text-muted-foreground">89MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>apt packages</span>
                  <span className="text-muted-foreground">156MB</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" /> Update Packages
              </Button>
            </CardFooter>
          </Card>

          {/* Layer Inspector */}
          <Card className="break-inside-avoid bg-green-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Layers className="h-5 w-5" />
                Layer Inspector
              </CardTitle>
              <CardDescription className="text-green-100">Image layer analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-28 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                  alt="Layer Inspector"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Base Layer</span>
                  <span className="text-green-100">72MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Dependencies</span>
                  <span className="text-green-100">156MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Application</span>
                  <span className="text-green-100">23MB</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Search className="mr-2 h-4 w-4" /> Analyze Layers
              </Button>
            </CardFooter>
          </Card>

          {/* Terminal Interface */}
          <Card className="break-inside-avoid bg-gray-900 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Terminal className="h-5 w-5" />
                Container Terminal
              </CardTitle>
              <CardDescription className="text-gray-300">Interactive shell access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-24 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/Mock Panels.png"
                  alt="Terminal Interface"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-black text-green-400 p-3 rounded font-mono text-xs mb-4">
                <div>root@container:/app# ls -la</div>
                <div>total 64</div>
                <div>drwxr-xr-x 1 root root 4096 Jan 15 10:30 .</div>
                <div>-rw-r--r-- 1 root root 245 Jan 15 10:30 package.json</div>
                <div>
                  root@container:/app# <span className="animate-pulse">_</span>
                </div>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    <Terminal className="mr-2 h-4 w-4" /> Open Full Terminal
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[600px] sm:w-[800px]">
                  <SheetHeader>
                    <SheetTitle>Container Terminal: nginx-web</SheetTitle>
                    <SheetDescription>Interactive terminal session</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="bg-black text-green-400 p-4 rounded font-mono text-sm h-96 overflow-y-auto">
                      <div>root@nginx-web:/# ls -la</div>
                      <div>total 80</div>
                      <div>drwxr-xr-x 1 root root 4096 Jan 15 10:30 .</div>
                      <div>drwxr-xr-x 1 root root 4096 Jan 15 10:30 ..</div>
                      <div>drwxr-xr-x 2 root root 4096 Dec 11 17:25 bin</div>
                      <div>drwxr-xr-x 2 root root 4096 Dec 11 17:25 boot</div>
                      <div>drwxr-xr-x 5 root root 360 Jan 15 10:30 dev</div>
                      <div>drwxr-xr-x 1 root root 4096 Jan 15 10:30 etc</div>
                      <div>root@nginx-web:/# ps aux</div>
                      <div>USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND</div>
                      <div>root 1 0.0 0.1 10648 5312 ? Ss 10:30 0:00 nginx: master process</div>
                      <div>nginx 29 0.0 0.0 11076 2560 ? S 10:30 0:00 nginx: worker process</div>
                      <div>
                        root@nginx-web:/# <span className="animate-pulse">_</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Input placeholder="Enter command..." className="font-mono" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          {/* Documentation Hub */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Documentation Hub
              </CardTitle>
              <CardDescription>Guides and references</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-32 mb-4">
                <img
                  src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                  alt="Documentation Hub"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  📚 Getting Started Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  🔧 Configuration Reference
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  🚀 Deployment Examples
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Globe className="mr-2 h-4 w-4" /> Browse Docs
              </Button>
            </CardFooter>
          </Card>

          {/* Monitoring Dashboard */}
          <Card className="break-inside-avoid bg-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Monitor className="h-5 w-5" />
                Live Monitoring
              </CardTitle>
              <CardDescription className="text-purple-100">Real-time container health</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
                  alt="Monitoring Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg text-green-300">●</div>
                  <div className="text-purple-100">All Systems</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">24/7</div>
                  <div className="text-purple-100">Monitoring</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                <Activity className="mr-2 h-4 w-4" /> View Metrics
              </Button>
            </CardFooter>
          </Card>

          {/* Network Connectivity */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-blue-600" />
                Network Status
              </CardTitle>
              <CardDescription>Container connectivity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-20 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/List Panel.png"
                  alt="Network Status"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">External Access</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Internal Network</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">DNS Resolution</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Network className="mr-2 h-4 w-4" /> Test Connectivity
              </Button>
            </CardFooter>
          </Card>

          {/* Community Stats */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Community
              </CardTitle>
              <CardDescription>Join the Docker ecosystem</CardDescription>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" /> Contribute
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contribute to Docker</DialogTitle>
                    <DialogDescription>Help improve Docker for millions of developers worldwide</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-20 flex-col">
                        <Github className="h-6 w-6 mb-2" />
                        <span className="text-sm">Code</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <Mail className="h-6 w-6 mb-2" />
                        <span className="text-sm">Documentation</span>
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Ways to contribute:</p>
                      <ul className="mt-2 space-y-1">
                        <li>• Submit bug reports and feature requests</li>
                        <li>• Improve documentation and tutorials</li>
                        <li>• Contribute code to Docker projects</li>
                        <li>• Help other users in the community</li>
                      </ul>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">View Guidelines</Button>
                    <Button>Get Started</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Support Contact Form */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Get Support</CardTitle>
              <CardDescription>Need help with Docker?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-16 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/List Panel.png"
                  alt="Support"
                  className="w-full h-full object-contain"
                />
              </div>
              <Input placeholder="Your email" />
              <Input placeholder="Subject" />
              <Input placeholder="How can we help?" />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Message Sent!</DialogTitle>
                    <DialogDescription>We'll get back to you within 24 hours</DialogDescription>
                  </DialogHeader>
                  <div className="text-center py-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your support request has been submitted. Our team will review it and respond as soon as possible.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button className="w-full">Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
