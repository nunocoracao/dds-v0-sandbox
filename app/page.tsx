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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
  Trash2,
  User,
  Zap,
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
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-6">
            <div className="w-[200px]">
              <img src="/logo/LogoWhite.svg" alt="Docker" className="w-full h-full object-contain" />
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search containers, images..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
              />
            </div>
          </div>

          {/* Right side - Actions and Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    5
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                    Mark all as read
                  </Button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Notification 1 */}
                <div className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Container className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Container Started</p>
                      <p className="text-xs text-muted-foreground">nginx-web is now running on port 80</p>
                      <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                    </div>
                  </div>
                </div>

                {/* Notification 2 */}
                <div className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Download className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Image Pulled</p>
                      <p className="text-xs text-muted-foreground">Successfully pulled redis:7-alpine</p>
                      <p className="text-xs text-muted-foreground mt-1">15 minutes ago</p>
                    </div>
                  </div>
                </div>

                {/* Notification 3 */}
                <div className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Security Update</p>
                      <p className="text-xs text-muted-foreground">New security patches available</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </div>
                  </div>
                </div>

                {/* Notification 4 */}
                <div className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Container Removed</p>
                      <p className="text-xs text-muted-foreground">postgres-db was removed</p>
                      <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                    </div>
                  </div>
                </div>

                {/* Notification 5 */}
                <div className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">System Update</p>
                      <p className="text-xs text-muted-foreground">Docker Desktop updated to v4.25.0</p>
                      <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>

                <DropdownMenuSeparator />
                <div className="p-2">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    View all notifications
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* App Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-sm" />
                    ))}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60" align="end">
                <DropdownMenuLabel>Docker Apps</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="grid grid-cols-3 gap-2 p-2">
                  {/* App 1 */}
                  <div className="flex flex-col items-center justify-center p-2 hover:bg-muted rounded cursor-pointer">
                    <div className="w-10 h-10 mb-1">
                      <img src="/app icons/Primary.svg" alt="Docker Desktop" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs">Desktop</span>
                  </div>

                  {/* App 2 */}
                  <div className="flex flex-col items-center justify-center p-2 hover:bg-muted rounded cursor-pointer">
                    <div className="w-10 h-10 mb-1">
                      <img
                        src="/app icons/Secondary.svg"
                        alt="Docker Compose"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs">Compose</span>
                  </div>

                  {/* App 3 */}
                  <div className="flex flex-col items-center justify-center p-2 hover:bg-muted rounded cursor-pointer">
                    <div className="w-10 h-10 mb-1">
                      <img src="/app icons/Tertiary.svg" alt="Docker Scout" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs">Scout</span>
                  </div>

                  {/* App 4 */}
                  <div className="flex flex-col items-center justify-center p-2 hover:bg-muted rounded cursor-pointer">
                    <div className="w-10 h-10 mb-1 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Container className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-xs">Hub</span>
                  </div>

                  {/* App 5 */}
                  <div className="flex flex-col items-center justify-center p-2 hover:bg-muted rounded cursor-pointer">
                    <div className="w-10 h-10 mb-1 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-xs">Security</span>
                  </div>

                  {/* App 6 */}
                  <div className="flex flex-col items-center justify-center p-2 hover:bg-muted rounded cursor-pointer">
                    <div className="w-10 h-10 mb-1 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-xs">Settings</span>
                  </div>
                </div>

                <DropdownMenuSeparator />
                <div className="p-2">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    View all apps
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white hover:bg-white/10">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full border-2 border-white/30 hover:bg-white/10"
                >
                  <Avatar className="h-7 w-7">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>DU</AvatarFallback>
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
        {/* Docker Hardened Images Bento Box Announcement */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-700/90" />
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
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {/* Container Management with Modal */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Container className="h-5 w-5 text-blue-600" />
                Active Containers
              </CardTitle>
              <CardDescription>Manage running containers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">nginx-web</div>
                    <div className="text-sm text-muted-foreground">nginx:latest</div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
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

              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">redis-cache</div>
                    <div className="text-sm text-muted-foreground">redis:7-alpine</div>
                  </div>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Remove Container</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to remove the "redis-cache" container? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Remove Container
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Deploy New Container
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Deploy New Container</DialogTitle>
                    <DialogDescription>Configure and deploy a new container instance</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Container Name</label>
                        <Input placeholder="my-container" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Image</label>
                        <Input placeholder="nginx:latest" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Port Mapping</label>
                      <Input placeholder="8080:80" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Environment Variables</label>
                      <Input placeholder="KEY=value" />
                    </div>
                    <div className="w-full h-24">
                      <img
                        src="/illustrations/Product Illustration/Md/Option Select.png"
                        alt="Container Configuration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy Container</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          {/* Image Registry with Sheet */}
          <Card className="break-inside-avoid bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
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
                        <div className="flex items-center justify-between p-4 border rounded">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                              <Container className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <div className="font-medium">redis</div>
                              <div className="text-sm text-muted-foreground">Official build</div>
                              <div className="text-xs text-muted-foreground">500M+ downloads</div>
                            </div>
                          </div>
                          <Button size="sm">Pull</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                              <Container className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">postgres</div>
                              <div className="text-sm text-muted-foreground">Official build</div>
                              <div className="text-xs text-muted-foreground">100M+ downloads</div>
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
                <div className="flex justify-between text-sm">
                  <span>Verified Publishers</span>
                  <span className="text-muted-foreground">500+</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Globe className="mr-2 h-4 w-4" /> Browse Registry
              </Button>
            </CardFooter>
          </Card>

          {/* System Monitoring with Interactive Progress */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                System Resources
              </CardTitle>
              <CardDescription>Real-time monitoring</CardDescription>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Settings className="mr-2 h-4 w-4" /> Resource Settings
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Resource Allocation</DialogTitle>
                    <DialogDescription>Configure Docker Desktop resource limits</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">CPU Cores</label>
                      <Input type="number" defaultValue="4" min="1" max="16" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Memory (GB)</label>
                      <Input type="number" defaultValue="8" min="2" max="32" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Disk Space (GB)</label>
                      <Input type="number" defaultValue="100" min="20" max="500" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Apply Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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

          {/* Notification Center */}
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
                className="w-full justify-start"
                onClick={() => {
                  toast({
                    title: "Container Started",
                    description: "nginx:latest is now running on port 80",
                    action: <ToastAction altText="View logs">View Logs</ToastAction>,
                  })
                }}
              >
                <Play className="mr-2 h-4 w-4" /> Start Container Notification
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  toast({
                    title: "Image Pulled Successfully",
                    description: "redis:7-alpine (15.2MB) downloaded",
                    action: <ToastAction altText="Run image">Run Image</ToastAction>,
                  })
                }}
              >
                <Download className="mr-2 h-4 w-4" /> Pull Complete Notification
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  toast({
                    title: "Security Alert",
                    description: "Vulnerability detected in base image",
                    action: <ToastAction altText="View details">View Details</ToastAction>,
                  })
                }}
              >
                <Shield className="mr-2 h-4 w-4" /> Security Alert
              </Button>
            </CardContent>
          </Card>

          {/* Docker Apps with Modal Details */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle>Docker Ecosystem</CardTitle>
              <CardDescription>Integrated development tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="text-center cursor-pointer hover:bg-muted/50 p-2 rounded">
                      <div className="w-12 h-12 mx-auto mb-2">
                        <img
                          src="/app icons/Primary.svg"
                          alt="Docker Desktop"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xs">Desktop</div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <img src="/app icons/Primary.svg" alt="Docker Desktop" className="w-6 h-6" />
                        Docker Desktop
                      </DialogTitle>
                      <DialogDescription>The fastest way to containerize applications</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="w-full h-32">
                        <img
                          src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                          alt="Docker Desktop"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-2">Features</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Container management</li>
                            <li>• Image building</li>
                            <li>• Kubernetes integration</li>
                            <li>• Dev environments</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Stats</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 20M+ downloads</li>
                            <li>• 4.5/5 rating</li>
                            <li>• Cross-platform</li>
                            <li>• Free for personal use</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Learn More</Button>
                      <Button>Download</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

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

          {/* Terminal/Logs with Sheet */}
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Container Logs
              </CardTitle>
              <CardDescription>Real-time output monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-3 rounded font-mono text-xs mb-4">
                <div>2024-01-15 10:30:15 [INFO] Server started</div>
                <div>2024-01-15 10:30:16 [INFO] Listening on port 80</div>
                <div>2024-01-15 10:30:17 [INFO] Ready to accept connections</div>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Terminal className="mr-2 h-4 w-4" /> Full Terminal
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

          {/* Community Stats */}
          <Card className="break-inside-avoid bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
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
