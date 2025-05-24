"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
  Moon,
  Play,
  Plus,
  Search,
  Settings,
  Shield,
  Star,
  Sun,
  User,
  Zap,
  Database,
  Network,
  HardDrive,
  Cpu,
  Activity,
  Code,
  Lock,
  Rocket,
  BarChart3,
  Camera,
  CheckCircle,
  XCircle,
  RefreshCw,
  Trash2,
} from "lucide-react"

export default function DockerApp() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [progress, setProgress] = useState(65)
  const [containerCount, setContainerCount] = useState(3)
  const [isScanning, setIsScanning] = useState(false)
  const [networkStatus, setNetworkStatus] = useState("connected")
  const [buildStatus, setBuildStatus] = useState("idle")
  const [storageUsed, setStorageUsed] = useState(2.1)
  const [uptime, setUptime] = useState(99.9)
  const [pullCount, setPullCount] = useState(0)
  const [starCount, setStarCount] = useState(65200)
  const [isLiked, setIsLiked] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    toast({
      title: `Switched to ${newTheme} mode`,
      description: `Interface is now in ${newTheme} theme`,
    })
  }

  const deployContainer = () => {
    setContainerCount((prev) => prev + 1)
    toast({
      title: "Container Deployed! 🚀",
      description: `New container is starting up. Total: ${containerCount + 1}`,
    })
  }

  const runSecurityScan = () => {
    setIsScanning(true)
    toast({
      title: "Security Scan Started",
      description: "Scanning for vulnerabilities...",
    })
    setTimeout(() => {
      setIsScanning(false)
      toast({
        title: "Security Scan Complete ✅",
        description: "No critical vulnerabilities found!",
      })
    }, 3000)
  }

  const toggleNetwork = () => {
    const newStatus = networkStatus === "connected" ? "disconnected" : "connected"
    setNetworkStatus(newStatus)
    toast({
      title: `Network ${newStatus}`,
      description: `Container network is now ${newStatus}`,
    })
  }

  const triggerBuild = () => {
    setBuildStatus("building")
    toast({
      title: "Build Started 🔨",
      description: "Building your container image...",
    })
    setTimeout(() => {
      setBuildStatus("success")
      toast({
        title: "Build Complete! ✅",
        description: "Container image built successfully",
      })
      setTimeout(() => setBuildStatus("idle"), 2000)
    }, 4000)
  }

  const pullImage = () => {
    setPullCount((prev) => prev + 1)
    toast({
      title: "Image Pulled! 📦",
      description: `Downloaded latest image. Total pulls: ${pullCount + 1}`,
    })
  }

  const refreshStats = () => {
    setProgress(Math.floor(Math.random() * 100))
    setUptime(99.5 + Math.random() * 0.4)
    toast({
      title: "Stats Refreshed 📊",
      description: "System metrics updated",
    })
  }

  const clearStorage = () => {
    setStorageUsed(0.5)
    toast({
      title: "Storage Cleared! 🧹",
      description: "Freed up 1.6GB of space",
    })
  }

  const starProject = () => {
    if (!isLiked) {
      setStarCount((prev) => prev + 1)
      setIsLiked(true)
      toast({
        title: "Thanks for starring! ⭐",
        description: "You're now following Docker updates",
      })
    } else {
      setStarCount((prev) => prev - 1)
      setIsLiked(false)
      toast({
        title: "Unstarred",
        description: "Removed from your starred repositories",
      })
    }
  }

  return (
    <div className={`min-h-screen bg-background ${theme === "dark" ? "dark" : ""}`}>
      {/* Application Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-blue-600">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-32 h-10">
                <img src="/logo/LogoWhite.svg" alt="Docker" className="w-full h-full object-contain" />
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => toast({ title: "Containers", description: "Viewing container management" })}
              >
                Containers
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => toast({ title: "Images", description: "Viewing image registry" })}
              >
                Images
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => toast({ title: "Volumes", description: "Viewing volume storage" })}
              >
                Volumes
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => toast({ title: "Networks", description: "Viewing network configuration" })}
              >
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
                onFocus={() => toast({ title: "Search Active", description: "Start typing to search..." })}
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
                <div className="p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      toast({ title: "Notifications Cleared", description: "All notifications marked as read" })
                    }
                  >
                    Mark all as read
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
                <DropdownMenuItem onClick={() => toast({ title: "Profile", description: "Opening user profile..." })}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => toast({ title: "Settings", description: "Opening settings panel..." })}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => toast({ title: "Signed Out", description: "Successfully logged out" })}
                >
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
          <Card className="md:col-span-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white border-0 overflow-hidden relative">
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
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        toast({ title: "HDI Info", description: "Opening Docker Hardened Images documentation..." })
                      }
                    >
                      <Shield className="mr-2 h-5 w-5" />
                      Learn More
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      onClick={() => toast({ title: "HDI Download", description: "Starting HDI image download..." })}
                    >
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
          <Card className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 text-white border-0 overflow-hidden relative">
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
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => toast({ title: "v0 + DDS", description: "Opening design system resources..." })}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Explore Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DDS NEXT GEN Announcement */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white border-0 overflow-hidden relative">
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
                  <p className="text-orange-100 text-lg">
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
                  <Button
                    variant="secondary"
                    onClick={() =>
                      toast({
                        title: "Notification Set!",
                        description: "You'll be notified when DDS Next Gen launches",
                      })
                    }
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notify Me
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Masonry Grid - Only 3 colored cards! */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {/* 1. Container Management - BLUE (only blue card) */}
          <Card className="break-inside-avoid bg-blue-600 text-white border-0 overflow-hidden relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 opacity-20">
              <img
                src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                alt="Container Management"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-white">
                <Container className="h-5 w-5" />
                Active Containers ({containerCount})
              </CardTitle>
              <CardDescription className="text-blue-100">Manage running containers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 relative z-10">
              <div className="w-full h-40 mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="/illustrations/Product Illustration/Lg/List w Users.png"
                  alt="Container Management"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="flex items-center justify-between p-3 border border-white/20 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white">nginx-web</div>
                    <div className="text-sm text-blue-100">nginx:latest</div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() =>
                    toast({ title: "Container Settings", description: "Opening nginx-web configuration..." })
                  }
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button className="w-full" variant="secondary" onClick={deployContainer}>
                <Plus className="mr-2 h-4 w-4" /> Deploy New Container
              </Button>
            </CardFooter>
          </Card>

          {/* 2. Security Scanner - GREEN (only green card) */}
          <Card className="break-inside-avoid bg-green-600 text-white border-0 overflow-hidden relative">
            <div className="absolute -top-8 -left-8 w-48 h-48 opacity-15">
              <img
                src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                alt="Security Background"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5" />
                Security Scanner
              </CardTitle>
              <CardDescription className="text-green-100">Vulnerability detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="w-full h-40 mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="/illustrations/Product Illustration/Lg/List w Users.png"
                  alt="Security Scanner"
                  className="w-full h-full object-contain scale-120"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {isScanning ? "Scanning..." : "Secure"}
                  </Badge>
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
            <CardFooter className="relative z-10">
              <Button className="w-full" variant="secondary" onClick={runSecurityScan} disabled={isScanning}>
                {isScanning ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Scanning...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" /> Run Security Scan
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* 3. Build Pipeline - PURPLE (only purple card) */}
          <Card className="break-inside-avoid bg-purple-600 text-white border-0 overflow-hidden relative">
            <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-20">
              <img
                src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                alt="Build Background"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-white">
                <Rocket className="h-5 w-5" />
                Build Pipeline
              </CardTitle>
              <CardDescription className="text-purple-100">CI/CD automation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="w-full h-36 mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="/illustrations/Product Illustration/Md/Option Select.png"
                  alt="Build Pipeline"
                  className="w-full h-full object-contain scale-125"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${buildStatus === "success" ? "bg-green-400" : buildStatus === "building" ? "bg-yellow-400 animate-pulse" : "bg-gray-400"}`}
                  ></div>
                  <span className="text-sm">
                    Build:{" "}
                    {buildStatus === "building" ? "Building..." : buildStatus === "success" ? "Success" : "Ready"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Test: Passed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">Deploy: Ready</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button
                className="w-full"
                variant="secondary"
                onClick={triggerBuild}
                disabled={buildStatus === "building"}
              >
                {buildStatus === "building" ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Building...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" /> Trigger Build
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* All remaining cards are WHITE with interactions */}

          {/* Tech Photo Card - WHITE */}
          <Card className="break-inside-avoid overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-blue-600" />
                Development Environment
              </CardTitle>
              <CardDescription>Modern containerized workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-56 mb-4 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
                  alt="Development Setup"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16">
                  <img src="/logo/LogoPrimary.svg" alt="Docker Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamlined development with Docker containers, VS Code, and modern tooling for maximum productivity.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({ title: "Environment Setup", description: "Initializing development environment..." })
                }
              >
                <Code className="mr-2 h-4 w-4" /> Setup Environment
              </Button>
            </CardFooter>
          </Card>

          {/* Volume Storage - WHITE */}
          <Card className="break-inside-avoid overflow-hidden relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
              <img src="/sub-marks/subMarkPrimary.svg" alt="Docker Submark" className="w-full h-full object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-purple-600" />
                Volume Storage
              </CardTitle>
              <CardDescription>Persistent data management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="w-full h-28 mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="/illustrations/Product Illustration/Md/Option Select.png"
                  alt="Volume Storage"
                  className="w-full h-full object-contain scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>postgres_data</span>
                  <span className="text-muted-foreground">{storageUsed.toFixed(1)}GB</span>
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
            <CardFooter className="relative z-10 flex gap-2">
              <Button
                className="flex-1"
                variant="outline"
                onClick={() =>
                  toast({ title: "Volume Manager", description: "Opening volume management interface..." })
                }
              >
                <Database className="mr-2 h-4 w-4" /> Manage
              </Button>
              <Button variant="outline" size="icon" onClick={clearStorage}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* System Resources - WHITE */}
          <Card className="break-inside-avoid overflow-hidden relative">
            <div className="absolute -bottom-4 -left-4 w-36 h-36 opacity-10">
              <img
                src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                alt="System Background"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-blue-600" />
                System Resources
              </CardTitle>
              <CardDescription>Real-time monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="w-full h-32 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/Mock Panels.png"
                  alt="System Monitoring"
                  className="w-full h-full object-contain scale-125"
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
            <CardFooter className="relative z-10">
              <Button variant="outline" size="sm" className="w-full" onClick={refreshStats}>
                <RefreshCw className="mr-2 h-4 w-4" /> Refresh Stats
              </Button>
            </CardFooter>
          </Card>

          {/* Cute Kitten Card - WHITE */}
          <Card className="break-inside-avoid overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className={`h-5 w-5 ${isLiked ? "text-red-500" : "text-gray-400"}`} />
                Container Mascot
              </CardTitle>
              <CardDescription>Every good app needs a mascot!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative">
                <img
                  src="https://placekitten.com/400/300"
                  alt="Docker Kitten"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full p-1">
                  <img src="/logo/LogoPrimary.svg" alt="Docker Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Meet Docker Cat! 🐱 The unofficial mascot of containerized applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => {
                  setIsLiked(!isLiked)
                  toast({
                    title: isLiked ? "Unadopted 😿" : "Adopted! 🎉",
                    description: isLiked ? "Docker Cat is sad to see you go" : "Docker Cat is now part of your team!",
                  })
                }}
              >
                <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
                {isLiked ? "Adopted!" : "Adopt Container"}
              </Button>
            </CardFooter>
          </Card>

          {/* Image Registry - WHITE */}
          <Card className="break-inside-avoid overflow-hidden relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 opacity-10">
              <img
                src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                alt="Registry Background"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader className="relative z-10">
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
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => toast({ title: "Search Hub", description: "Opening Docker Hub search..." })}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="/illustrations/Product Illustration/Lg/List w Users.png"
                  alt="Docker Hub Registry"
                  className="w-full h-full object-contain scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Images</span>
                  <span className="text-muted-foreground">15M+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Your Pulls</span>
                  <span className="text-muted-foreground">{pullCount}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button className="w-full" variant="outline" onClick={pullImage}>
                <Download className="mr-2 h-4 w-4" /> Pull Latest Image
              </Button>
            </CardFooter>
          </Card>

          {/* Analytics Dashboard - WHITE */}
          <Card className="break-inside-avoid overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Analytics Dashboard
              </CardTitle>
              <CardDescription>Container performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-44 mb-4 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute bottom-2 left-2 w-12 h-12 bg-white/90 rounded-lg p-2">
                  <img src="/app icons/Primary.svg" alt="Docker App" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg">{uptime.toFixed(1)}%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">2.3s</div>
                  <div className="text-muted-foreground">Avg Response</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => toast({ title: "Analytics", description: "Opening detailed performance metrics..." })}
              >
                <Activity className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardFooter>
          </Card>

          {/* Network Status - WHITE */}
          <Card className="break-inside-avoid overflow-hidden relative">
            <div className="absolute -top-4 -right-4 w-28 h-28 opacity-10">
              <img src="/app icons/Secondary.svg" alt="Docker Compose" className="w-full h-full object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-green-600" />
                Network Status
              </CardTitle>
              <CardDescription>Container connectivity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="w-full h-20 mb-4">
                <img
                  src="/illustrations/Product Illustration/Md/List Panel.png"
                  alt="Network Status"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status</span>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${networkStatus === "connected" ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                    <span className="text-sm capitalize">{networkStatus}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Bridge Network</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">DNS Resolution</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button className="w-full" variant="outline" onClick={toggleNetwork}>
                {networkStatus === "connected" ? (
                  <>
                    <XCircle className="mr-2 h-4 w-4" /> Disconnect
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" /> Connect
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Community Stats - WHITE */}
          <Card className="break-inside-avoid overflow-hidden relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
              <img src="/app icons/Tertiary.svg" alt="Docker Scout" className="w-full h-full object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Community
              </CardTitle>
              <CardDescription>Join the Docker ecosystem</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-sm">GitHub Stars</span>
                <div className="flex items-center gap-1">
                  <Star className={`h-4 w-4 ${isLiked ? "text-yellow-500 fill-current" : "text-gray-400"}`} />
                  <span className="text-sm font-medium">{(starCount / 1000).toFixed(1)}k</span>
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
              <Button variant="outline" className="w-full" onClick={starProject}>
                <Star className={`mr-2 h-4 w-4 ${isLiked ? "fill-current text-yellow-500" : ""}`} />
                {isLiked ? "Starred!" : "Star Project"}
              </Button>
            </CardContent>
          </Card>

          {/* Support Contact Form - WHITE */}
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
              <Input
                placeholder="Your email"
                onFocus={() => toast({ title: "Support Form", description: "Fill out the form for assistance" })}
              />
              <Input placeholder="Subject" />
              <Input placeholder="How can we help?" />
              <Button
                className="w-full"
                onClick={() =>
                  toast({ title: "Message Sent! 📧", description: "Our support team will respond within 24 hours" })
                }
              >
                <Github className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
