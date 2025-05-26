"use client"

import { DialogDescription } from "@/components/ui/dialog"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  Rocket,
  Heart,
  Zap,
  Play,
  Pause,
  Settings,
  Edit,
  Target,
  GraduationCap,
  MessageSquare,
  Users,
  Activity,
  Bell,
  CheckCircle,
  AlertCircle,
  Database,
  Shield,
  Cpu,
  HardDrive,
  Network,
  Terminal,
  FileText,
  Send,
  MoreHorizontal,
  CalendarIcon,
  RefreshCw,
  TrendingUp,
  UserPlus,
  Container,
  Layers,
} from "lucide-react"

interface ComponentShowcaseProps {
  showWelcomeMessage?: boolean
  onRestartOnboarding: () => void
}

export default function ComponentShowcase({ showWelcomeMessage = false, onRestartOnboarding }: ComponentShowcaseProps) {
  // Global state for cross-card interactions
  const [deploymentProgress, setDeploymentProgress] = useState(0)
  const [containerCount, setContainerCount] = useState(12)
  const [activeUsers, setActiveUsers] = useState(8)
  const [systemHealth, setSystemHealth] = useState(98)
  const [notifications, setNotifications] = useState(3)
  const [isDeploying, setIsDeploying] = useState(false)
  const [cpuUsage, setCpuUsage] = useState(45)
  const [memoryUsage, setMemoryUsage] = useState(67)
  const [networkActivity, setNetworkActivity] = useState(23)
  const [likeCount, setLikeCount] = useState(142)
  const [isLiked, setIsLiked] = useState(false)
  const [teamMembers, setTeamMembers] = useState([
    { name: "Alex Chen", status: "online", avatar: "AC" },
    { name: "Sarah Kim", status: "away", avatar: "SK" },
    { name: "Mike Johnson", status: "online", avatar: "MJ" },
    { name: "Emma Davis", status: "offline", avatar: "ED" },
  ])
  const [chatMessages, setChatMessages] = useState([
    { user: "Alex", message: "Deployment looking good! 🚀", time: "2m ago" },
    { user: "Sarah", message: "CPU usage is optimal", time: "5m ago" },
  ])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Auto-animations and random events
  useEffect(() => {
    if (showWelcomeMessage) {
      setTimeout(() => {
        toast({
          title: "🎉 Welcome to the Living Playground!",
          description: "Watch as components come alive and interact with each other!",
          duration: 6000,
        })
      }, 1000)
    }

    // Random events interval
    const randomEvents = setInterval(() => {
      const events = [
        () => {
          toast({
            title: "🐳 Container deployed successfully",
            description: `Container ${Math.floor(Math.random() * 1000)} is now running`,
          })
          setContainerCount((prev) => prev + 1)
        },
        () => {
          toast({
            title: "👥 New team member joined",
            description: "Welcome to the Docker team!",
          })
          setActiveUsers((prev) => prev + 1)
        },
        () => {
          toast({
            title: "📊 System metrics updated",
            description: "Performance is looking great!",
          })
          setSystemHealth((prev) => Math.min(100, prev + Math.floor(Math.random() * 3)))
        },
        () => {
          setNotifications((prev) => prev + 1)
          toast({
            title: "🔔 New notification",
            description: "Check your dashboard for updates",
          })
        },
        () => {
          setChatMessages((prev) => [
            ...prev,
            {
              user: ["Alex", "Sarah", "Mike", "Emma"][Math.floor(Math.random() * 4)],
              message: [
                "Looking good! 👍",
                "Deployment successful ✅",
                "System running smoothly",
                "Great work team! 🎉",
                "Metrics are optimal",
              ][Math.floor(Math.random() * 5)],
              time: "now",
            },
          ])
        },
      ]

      const randomEvent = events[Math.floor(Math.random() * events.length)]
      randomEvent()
    }, 8000)

    // Continuous metrics updates
    const metricsInterval = setInterval(() => {
      setCpuUsage((prev) => Math.max(20, Math.min(90, prev + (Math.random() - 0.5) * 10)))
      setMemoryUsage((prev) => Math.max(30, Math.min(95, prev + (Math.random() - 0.5) * 8)))
      setNetworkActivity((prev) => Math.max(10, Math.min(80, prev + (Math.random() - 0.5) * 15)))
    }, 3000)

    return () => {
      clearInterval(randomEvents)
      clearInterval(metricsInterval)
    }
  }, [showWelcomeMessage])

  // Deployment simulation
  const handleDeploy = useCallback(() => {
    if (isDeploying) return

    setIsDeploying(true)
    setDeploymentProgress(0)

    toast({
      title: "🚀 Deployment started",
      description: "Deploying containers across the cluster...",
    })

    const deployInterval = setInterval(() => {
      setDeploymentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(deployInterval)
          setIsDeploying(false)
          setContainerCount((prevCount) => prevCount + 3)
          toast({
            title: "✅ Deployment complete!",
            description: "All containers are running successfully",
          })
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 500)
  }, [isDeploying])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    toast({
      title: isLiked ? "💔 Unliked" : "❤️ Liked!",
      description: isLiked ? "Thanks for the feedback" : "Thanks for the love!",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header without border */}
      <header className="bg-primary text-primary-foreground shadow-sm">
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
                <h1 className="text-lg font-heading font-semibold">Docker + v0.dev Playground</h1>
                <p className="text-sm text-primary-foreground/80">Living Component Showcase</p>
              </div>
            </button>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="animate-pulse">
                {containerCount} Containers
              </Badge>
              <Badge variant="secondary">{activeUsers} Users Online</Badge>
              <Button variant="secondary" size="sm" onClick={onRestartOnboarding}>
                <GraduationCap className="w-4 h-4 mr-2" />
                Restart Training
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-heading font-bold leading-tight">Start by telling v0 chat...</h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-2xl sm:text-3xl font-heading font-semibold leading-relaxed">
                "As a <span className="bg-white/20 px-3 py-1 rounded-lg text-yellow-300">[role]</span>, I want{" "}
                <span className="bg-white/20 px-3 py-1 rounded-lg text-green-300">[feature]</span>
                <br className="hidden sm:block" />
                so that I can <span className="bg-white/20 px-3 py-1 rounded-lg text-blue-300">[benefit]</span>"
              </div>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-white/90 leading-relaxed">
                Use this prompt template in v0.dev chat to generate Docker interfaces with DDS foundations automatically
                applied.
              </p>
              <p className="text-lg text-white/80">
                Every component below demonstrates shadcn/ui styled with Docker Design System tokens - ready for your UX
                workflows.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6" />
                <span>Natural language prompts</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>DDS foundations included</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Network className="w-6 h-6" />
                <span>UX workflow ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Living Masonry Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Every Component is Alive & Interactive</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click, hover, and watch as components interact with each other in real-time. This is the power of shadcn/ui
            + Docker DDS!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Hero Welcome Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-blue-600" />
                <span>Welcome to the Living Playground</span>
              </CardTitle>
              <CardDescription>Every interaction ripples through the ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{containerCount}</div>
                    <div className="text-sm text-gray-600">Active Containers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{systemHealth}%</div>
                    <div className="text-sm text-gray-600">System Health</div>
                  </div>
                </div>
                <Button onClick={handleDeploy} disabled={isDeploying} className="w-full" size="lg">
                  {isDeploying ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Deploying...
                    </>
                  ) : (
                    <>
                      <Container className="w-4 h-4 mr-2" />
                      Deploy New Container
                    </>
                  )}
                </Button>
                {isDeploying && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Deployment Progress</span>
                      <span>{Math.round(deploymentProgress)}%</span>
                    </div>
                    <Progress value={deploymentProgress} className="w-full" />
                  </div>
                )}
              </div>
              <Button variant="secondary" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Button Playground */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <span>Button Playground</span>
              </CardTitle>
              <CardDescription>Every button variant in action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button className="w-full" onClick={() => toast({ title: "Primary clicked!" })}>
                    Primary
                  </Button>
                  <Button variant="secondary" className="w-full" onClick={() => setActiveUsers((prev) => prev + 1)}>
                    Secondary ({activeUsers})
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setNotifications((prev) => prev + 1)}>
                    <Bell className="w-4 h-4 mr-2" />
                    Outline ({notifications})
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setCpuUsage((prev) => Math.max(20, prev - 10))}
                  >
                    Ghost
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => toast({ title: "Small action!" })}>
                    Small
                  </Button>
                  <Button onClick={() => toast({ title: "Default action!" })}>Default</Button>
                  <Button size="lg" onClick={() => toast({ title: "Large action!" })}>
                    Large
                  </Button>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                More Buttons
              </Button>
            </CardContent>
          </Card>

          {/* System Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-green-600" />
                <span>Live Metrics</span>
              </CardTitle>
              <CardDescription>Real-time system monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CPU Usage</span>
                    <span>{Math.round(cpuUsage)}%</span>
                  </div>
                  <Progress value={cpuUsage} className="w-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Memory</span>
                    <span>{Math.round(memoryUsage)}%</span>
                  </div>
                  <Progress value={memoryUsage} className="w-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Network</span>
                    <span>{Math.round(networkActivity)}%</span>
                  </div>
                  <Progress value={networkActivity} className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Badge variant="outline" className="justify-center">
                    <Cpu className="w-3 h-3 mr-1" />
                    {Math.round(cpuUsage)}%
                  </Badge>
                  <Badge variant="outline" className="justify-center">
                    <HardDrive className="w-3 h-3 mr-1" />
                    {Math.round(memoryUsage)}%
                  </Badge>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                View Full Report
              </Button>
            </CardContent>
          </Card>

          {/* Team Dashboard */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span>Team Dashboard</span>
              </CardTitle>
              <CardDescription>Live team collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarFallback
                          className={`${
                            member.status === "online"
                              ? "bg-green-100 text-green-700"
                              : member.status === "away"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{member.name}</div>
                        <div
                          className={`text-xs ${
                            member.status === "online"
                              ? "text-green-600"
                              : member.status === "away"
                                ? "text-yellow-600"
                                : "text-gray-600"
                          }`}
                        >
                          {member.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => {
                    setActiveUsers((prev) => prev + 1)
                    toast({ title: "👥 Invited new team member!", description: "They'll join the workspace soon" })
                  }}
                  className="w-full"
                  variant="outline"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite Team Member
                </Button>
              </div>
              <Button variant="secondary" className="w-full">
                Manage Team
              </Button>
            </CardContent>
          </Card>

          {/* Form Playground */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Edit className="w-5 h-5" />
                <span>Form Controls</span>
              </CardTitle>
              <CardDescription>Interactive form elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="container-name">Container Name</Label>
                  <Input
                    id="container-name"
                    placeholder="my-awesome-app"
                    onChange={(e) => {
                      if (e.target.value.length > 5) {
                        toast({ title: "✅ Valid container name!", description: "Ready for deployment" })
                      }
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="environment">Environment</Label>
                  <Select onValueChange={(value) => toast({ title: `Environment set to ${value}` })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="staging">Staging</SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your container..."
                    onChange={(e) => {
                      if (e.target.value.length > 20) {
                        toast({ title: "📝 Great description!", description: "Very detailed!" })
                      }
                    }}
                  />
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setContainerCount((prev) => prev + 1)
                    toast({ title: "🚀 Container created!", description: "Your container is being deployed" })
                  }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Create Container
                </Button>
              </div>
              <Button variant="secondary" className="w-full">
                Reset Form
              </Button>
            </CardContent>
          </Card>

          {/* Interactive Like Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <span>Community Love</span>
              </CardTitle>
              <CardDescription>Show some appreciation!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-pink-600">{likeCount}</div>
                <div className="text-sm text-gray-600">Community Likes</div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLike}
                  className={`w-full transition-all duration-300 ${
                    isLiked
                      ? "bg-pink-500 text-white border-pink-500 scale-105"
                      : "hover:bg-pink-50 hover:border-pink-300"
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? "fill-current" : ""}`} />
                  {isLiked ? "Loved!" : "Show Love"}
                </Button>
                <div className="flex justify-center space-x-2">
                  <Badge className="bg-pink-500">Popular</Badge>
                  <Badge variant="outline">Interactive</Badge>
                  <Badge variant="outline">Community</Badge>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                Share the Love
              </Button>
            </CardContent>
          </Card>

          {/* Settings Control Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Control Panel</span>
              </CardTitle>
              <CardDescription>System configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-scale">Auto Scaling</Label>
                  <Switch
                    id="auto-scale"
                    onCheckedChange={(checked) => {
                      toast({
                        title: checked ? "🔄 Auto-scaling enabled" : "⏸️ Auto-scaling disabled",
                        description: checked ? "Containers will scale automatically" : "Manual scaling required",
                      })
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="monitoring">Health Monitoring</Label>
                  <Switch
                    id="monitoring"
                    defaultChecked
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSystemHealth((prev) => Math.min(100, prev + 5))
                      }
                      toast({
                        title: checked ? "📊 Monitoring active" : "📊 Monitoring paused",
                      })
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Resource Allocation</Label>
                  <Slider
                    defaultValue={[70]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      if (value[0] > 80) {
                        toast({ title: "⚡ High performance mode", description: "Maximum resources allocated" })
                      }
                    }}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="backup"
                      onCheckedChange={(checked) => {
                        if (checked) {
                          toast({ title: "💾 Backup enabled", description: "Daily backups scheduled" })
                        }
                      }}
                    />
                    <Label htmlFor="backup">Enable Backups</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ssl"
                      defaultChecked
                      onCheckedChange={(checked) => {
                        toast({
                          title: checked ? "🔒 SSL enabled" : "⚠️ SSL disabled",
                          description: checked ? "Secure connections active" : "Security warning!",
                        })
                      }}
                    />
                    <Label htmlFor="ssl">SSL/TLS Encryption</Label>
                  </div>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                Apply Settings
              </Button>
            </CardContent>
          </Card>

          {/* Notification Center */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-red-600" />
                <span>Notifications</span>
                {notifications > 0 && <Badge className="bg-red-500 text-white">{notifications}</Badge>}
              </CardTitle>
              <CardDescription>System alerts and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Deployment Successful</AlertTitle>
                  <AlertDescription>Container "web-app-v2" is now running</AlertDescription>
                </Alert>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Resource Alert</AlertTitle>
                  <AlertDescription>CPU usage is approaching 80%</AlertDescription>
                </Alert>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setNotifications(0)
                    toast({ title: "🔔 Notifications cleared", description: "All alerts dismissed" })
                  }}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear All Notifications
                </Button>
              </div>
              <Button variant="secondary" className="w-full">
                View All
              </Button>
            </CardContent>
          </Card>

          {/* Data Table */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5" />
                <span>Container Registry</span>
              </CardTitle>
              <CardDescription>Live container status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Container</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>CPU</TableHead>
                    <TableHead>Memory</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">web-app-v2</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Running</Badge>
                    </TableCell>
                    <TableCell>{Math.round(cpuUsage)}%</TableCell>
                    <TableCell>{Math.round(memoryUsage)}%</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => toast({ title: "📊 Viewing logs..." })}>
                            View logs
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast({ title: "🔄 Restarting container..." })}>
                            Restart
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => toast({ title: "🗑️ Container stopped" })}>
                            Stop container
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">api-service</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Running</Badge>
                    </TableCell>
                    <TableCell>23%</TableCell>
                    <TableCell>45%</TableCell>
                    <TableCell>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">database</TableCell>
                    <TableCell>
                      <Badge variant="outline">Stopped</Badge>
                    </TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button variant="secondary" className="w-full">
                Manage Containers
              </Button>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Team Chat</span>
              </CardTitle>
              <CardDescription>Live collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32 w-full border rounded p-2 mb-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="mb-2 text-sm">
                    <span className="font-medium text-blue-600">{msg.user}:</span>
                    <span className="ml-2">{msg.message}</span>
                    <span className="text-xs text-gray-500 ml-2">{msg.time}</span>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex space-x-2">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button
                  size="sm"
                  onClick={() => {
                    setChatMessages((prev) => [
                      ...prev,
                      {
                        user: "You",
                        message: "Great work everyone! 🎉",
                        time: "now",
                      },
                    ])
                    toast({ title: "💬 Message sent!" })
                  }}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="secondary" className="w-full">
                Open Chat
              </Button>
            </CardContent>
          </Card>

          {/* Calendar & Scheduling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5" />
                <span>Deployment Schedule</span>
              </CardTitle>
              <CardDescription>Plan your releases</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? selectedDate.toDateString() : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date)
                      if (date) {
                        toast({
                          title: "📅 Deployment scheduled",
                          description: `Scheduled for ${date.toDateString()}`,
                        })
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Next deployment:</span>
                  <Badge variant="outline">Tomorrow</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Maintenance window:</span>
                  <Badge variant="outline">Sunday 2AM</Badge>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                Set Reminder
              </Button>
            </CardContent>
          </Card>

          {/* Tabs Navigation */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="w-5 h-5" />
                <span>Service Overview</span>
              </CardTitle>
              <CardDescription>Multi-service dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                  <TabsTrigger value="metrics">Metrics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-blue-600">{containerCount}</div>
                      <div className="text-sm text-gray-600">Active Services</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="logs">
                  <ScrollArea className="h-24 w-full border rounded p-2">
                    <div className="text-xs font-mono space-y-1">
                      <div>[INFO] Container started successfully</div>
                      <div>[INFO] Health check passed</div>
                      <div>[WARN] High memory usage detected</div>
                      <div>[INFO] Auto-scaling triggered</div>
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="metrics">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Response Time</span>
                      <span>45ms</span>
                    </div>
                    <Progress value={85} />
                    <div className="flex justify-between text-sm">
                      <span>Throughput</span>
                      <span>1.2k req/s</span>
                    </div>
                    <Progress value={60} />
                  </div>
                </TabsContent>
                <TabsContent value="settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Auto-restart</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Load balancing</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <Button variant="secondary" className="w-full">
                Service Details
              </Button>
            </CardContent>
          </Card>

          {/* Accordion FAQ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Quick Help</span>
              </CardTitle>
              <CardDescription>Common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How to deploy?</AccordionTrigger>
                  <AccordionContent>Use the deploy button to start a new container deployment.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Monitor resources?</AccordionTrigger>
                  <AccordionContent>Check the metrics dashboard for real-time resource usage.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Scale services?</AccordionTrigger>
                  <AccordionContent>Enable auto-scaling in the control panel for automatic scaling.</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button variant="secondary" className="w-full">
                More Help
              </Button>
            </CardContent>
          </Card>

          {/* Loading States */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5" />
                <span>Loading States</span>
              </CardTitle>
              <CardDescription>Skeleton components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[160px]" />
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => toast({ title: "🔄 Refreshing data...", description: "Loading latest information" })}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Data
                </Button>
              </div>
              <Button variant="secondary" className="w-full">
                Try Again
              </Button>
            </CardContent>
          </Card>

          {/* Dialog Showcase */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="w-5 h-5" />
                <span>Dialogs & Modals</span>
              </CardTitle>
              <CardDescription>Interactive overlays</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Open Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Container Settings</DialogTitle>
                      <DialogDescription>Configure your container deployment settings.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="port">Port</Label>
                        <Input id="port" defaultValue="3000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="env">Environment</Label>
                        <Select defaultValue="production">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="staging">Staging</SelectItem>
                            <SelectItem value="production">Production</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full">Save Settings</Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Target className="w-4 h-4 mr-2" />
                      Quick Actions
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start">
                          <Play className="w-4 h-4 mr-2" />
                          Start Container
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Pause className="w-4 h-4 mr-2" />
                          Stop Container
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Restart Container
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Button variant="secondary" className="w-full">
                More Options
              </Button>
            </CardContent>
          </Card>

          {/* Status Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Status Indicators</span>
              </CardTitle>
              <CardDescription>System status badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500">Healthy</Badge>
                  <Badge className="bg-yellow-500">Warning</Badge>
                  <Badge className="bg-red-500">Critical</Badge>
                  <Badge variant="outline">Maintenance</Badge>
                  <Badge variant="secondary">Offline</Badge>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Gateway</span>
                    <Badge className="bg-green-500">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-green-500">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cache</span>
                    <Badge className="bg-yellow-500">Degraded</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CDN</span>
                    <Badge className="bg-green-500">Optimal</Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSystemHealth((prev) => Math.min(100, prev + 2))
                    toast({ title: "🔧 System optimized", description: "All services running smoothly" })
                  }}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Optimize System
                </Button>
              </div>
              <Button variant="secondary" className="w-full">
                Check Status
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
