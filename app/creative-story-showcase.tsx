"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Rocket,
  Play,
  Pause,
  Download,
  Code,
  MessageSquare,
  Coffee,
  Bug,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Server,
  Shield,
  Globe,
  Terminal,
  Package,
  GitBranch,
  Activity,
  TrendingUp,
  Bell,
  Star,
  ThumbsUp,
  Share2,
  Filter,
  Plus,
  Minus,
  RefreshCw,
  Eye,
  Music,
} from "lucide-react"

interface CreativeStoryShowcaseProps {
  onRestartOnboarding: () => void
}

export default function CreativeStoryShowcase({ onRestartOnboarding }: CreativeStoryShowcaseProps) {
  // Story state management
  const [currentStory, setCurrentStory] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)
  const [isStoryPlaying, setIsStoryPlaying] = useState(false)
  const [charactersTyped, setCharactersTyped] = useState(0)
  const [codeLines, setCodeLines] = useState(0)
  const [bugsFixed, setBugsFixed] = useState(0)
  const [coffeeCups, setCoffeeCups] = useState(3)
  const [teamMembers, setTeamMembers] = useState([])
  const [deploymentStatus, setDeploymentStatus] = useState("idle")
  const [serverLoad, setServerLoad] = useState([45])
  const [isNightMode, setIsNightMode] = useState(false)
  const [notifications, setNotifications] = useState(12)
  const [activeContainers, setActiveContainers] = useState(8)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [musicVolume, setMusicVolume] = useState([75])
  const [focusMode, setFocusMode] = useState(false)
  const [deploymentLogs, setDeploymentLogs] = useState([])
  const [selectedFramework, setSelectedFramework] = useState("")

  // Auto-progress story
  useEffect(() => {
    if (isStoryPlaying) {
      const interval = setInterval(() => {
        setStoryProgress((prev) => {
          if (prev >= 100) {
            setCurrentStory((story) => (story + 1) % 6)
            return 0
          }
          return prev + 2
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [isStoryPlaying])

  const stories = [
    {
      title: "Chapter 1: The Developer's Dawn",
      subtitle: "A new day begins in the Docker ecosystem",
      icon: Coffee,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Chapter 2: Building the Foundation",
      subtitle: "Crafting containers with precision",
      icon: Package,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Chapter 3: The Bug Hunt",
      subtitle: "Debugging in the containerized world",
      icon: Bug,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Chapter 4: Team Assembly",
      subtitle: "Collaboration across the development lifecycle",
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Chapter 5: The Great Deployment",
      subtitle: "Shipping code to production",
      icon: Rocket,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Chapter 6: Victory & Metrics",
      subtitle: "Celebrating success and monitoring health",
      icon: TrendingUp,
      color: "from-emerald-500 to-cyan-500",
    },
  ]

  const handleStoryAction = (action: string) => {
    switch (action) {
      case "drink_coffee":
        setCoffeeCups((prev) => Math.max(0, prev - 1))
        setCharactersTyped((prev) => prev + Math.floor(Math.random() * 50) + 25)
        toast({
          title: "☕ Coffee Break!",
          description: `Energy restored! You've typed ${charactersTyped + 35} characters today.`,
        })
        break
      case "write_code":
        setCodeLines((prev) => prev + Math.floor(Math.random() * 10) + 5)
        toast({
          title: "💻 Code Written!",
          description: `Added ${Math.floor(Math.random() * 10) + 5} lines. Total: ${codeLines + 7} lines today.`,
        })
        break
      case "fix_bug":
        setBugsFixed((prev) => prev + 1)
        toast({
          title: "🐛 Bug Squashed!",
          description: `Bug eliminated! Total bugs fixed today: ${bugsFixed + 1}`,
        })
        break
      case "deploy":
        setDeploymentStatus("deploying")
        setTimeout(() => {
          setDeploymentStatus("success")
          toast({
            title: "🚀 Deployment Complete!",
            description: "Your Docker containers are live and healthy!",
          })
        }, 3000)
        break
      case "add_teammate":
        const newMember = `Dev ${Math.floor(Math.random() * 100)}`
        setTeamMembers((prev) => [...prev, newMember])
        toast({
          title: "👥 Team Member Added!",
          description: `Welcome ${newMember} to the Docker squad!`,
        })
        break
    }
  }

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${
        isNightMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Animated Header */}
      <header
        className={`border-b shadow-lg transition-all duration-500 ${
          isNightMode ? "bg-slate-800 text-white border-slate-700" : "bg-primary text-primary-foreground"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onRestartOnboarding}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8">
                <img
                  src={isNightMode ? "/sub-marks/subMarkWhite.svg" : "/sub-marks/subMarkWhite.svg"}
                  alt="Docker"
                  className="w-full h-full"
                />
              </div>
              <div className="text-left">
                <h1 className="text-lg font-heading font-semibold">Docker Interactive Stories</h1>
                <p className={`text-sm ${isNightMode ? "text-slate-300" : "text-primary-foreground/80"}`}>
                  Component Adventures
                </p>
              </div>
            </button>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <Badge variant="secondary">{notifications}</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span className="text-sm">{activeContainers} active</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsNightMode(!isNightMode)}
                className="transition-all duration-300"
              >
                {isNightMode ? "🌞" : "🌙"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Story Progress Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => setIsStoryPlaying(!isStoryPlaying)}>
                {isStoryPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <div className="text-sm font-medium">{stories[currentStory].title}</div>
            </div>
            <div className="text-xs text-gray-500">
              Chapter {currentStory + 1} of {stories.length}
            </div>
          </div>
          <Progress value={storyProgress} className="h-2" />
        </div>
      </div>

      {/* Main Story Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Story Header */}
        <div className={`text-center mb-12 p-8 rounded-3xl bg-gradient-to-r ${stories[currentStory].color} text-white`}>
          <div className="flex justify-center mb-4">
            {React.createElement(stories[currentStory].icon, { className: "w-16 h-16" })}
          </div>
          <h1 className="text-4xl font-heading font-bold mb-2">{stories[currentStory].title}</h1>
          <p className="text-xl opacity-90">{stories[currentStory].subtitle}</p>
          <div className="mt-6 flex justify-center space-x-2">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Story Chapters */}
        <Tabs value={`chapter-${currentStory}`} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            {stories.map((story, index) => (
              <TabsTrigger
                key={index}
                value={`chapter-${index}`}
                onClick={() => setCurrentStory(index)}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {React.createElement(story.icon, { className: "w-4 h-4" })}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Chapter 1: Developer's Dawn */}
          <TabsContent value="chapter-0" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Coffee className="w-5 h-5 text-orange-500" />
                    <span>Morning Routine Setup</span>
                  </CardTitle>
                  <CardDescription>Every great Docker developer starts their day right</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Coffee Level</Label>
                      <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <Coffee
                            key={i}
                            className={`w-6 h-6 ${i < coffeeCups ? "text-orange-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <Button onClick={() => handleStoryAction("drink_coffee")}>Drink Coffee ☕</Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Focus Mode</Label>
                      <Switch checked={focusMode} onCheckedChange={setFocusMode} />
                    </div>

                    <div className="space-y-2">
                      <Label>Music Volume: {musicVolume[0]}%</Label>
                      <Slider
                        value={musicVolume}
                        onValueChange={setMusicVolume}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Music className="w-4 h-4" />
                        <span>Lo-fi Docker beats to code to</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-lg">
                    <div className="text-sm font-medium mb-2">Daily Stats</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Characters Typed</div>
                        <div className="font-bold text-2xl">{charactersTyped.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Lines of Code</div>
                        <div className="font-bold text-2xl">{codeLines}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Today's Schedule</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>9:00 AM - Team Standup</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Code className="w-4 h-4" />
                      <span>10:00 AM - Container Development</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Bug className="w-4 h-4" />
                      <span>2:00 PM - Bug Hunting Session</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapter 2: Building Foundation */}
          <TabsContent value="chapter-1" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="w-5 h-5 text-blue-500" />
                    <span>Container Builder</span>
                  </CardTitle>
                  <CardDescription>Craft your perfect Docker environment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Framework Selection</Label>
                    <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your base framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="node">Node.js</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="golang">Go</SelectItem>
                        <SelectItem value="rust">Rust</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="redis" />
                      <Label htmlFor="redis">Add Redis Cache</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="postgres" />
                      <Label htmlFor="postgres">PostgreSQL Database</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nginx" />
                      <Label htmlFor="nginx">Nginx Load Balancer</Label>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => handleStoryAction("write_code")}
                    disabled={!selectedFramework}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Generate Dockerfile
                  </Button>

                  {selectedFramework && (
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div># Generated Dockerfile for {selectedFramework}</div>
                      <div>FROM {selectedFramework}:latest</div>
                      <div>WORKDIR /app</div>
                      <div>COPY . .</div>
                      <div>RUN npm install</div>
                      <div>EXPOSE 3000</div>
                      <div>CMD ["npm", "start"]</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="w-5 h-5" />
                    <span>Resource Monitor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Server Load: {serverLoad[0]}%</Label>
                    <Slider value={serverLoad} onValueChange={setServerLoad} max={100} step={1} className="w-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>CPU Usage</Label>
                      <Progress value={serverLoad[0]} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <Label>Memory</Label>
                      <Progress value={serverLoad[0] * 0.8} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Active Containers</Label>
                    <div className="flex flex-wrap gap-2">
                      {[...Array(activeContainers)].map((_, i) => (
                        <Badge key={i} variant="outline">
                          container-{i + 1}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setActiveContainers((prev) => prev + 1)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveContainers((prev) => Math.max(0, prev - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapter 3: Bug Hunt */}
          <TabsContent value="chapter-2" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bug className="w-5 h-5 text-red-500" />
                    <span>Debug Command Center</span>
                  </CardTitle>
                  <CardDescription>Hunt down those pesky container issues</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-red-500">{bugsFixed}</div>
                      <div className="text-sm text-gray-500">Bugs Fixed</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-green-500">{Math.floor(Math.random() * 50) + 150}</div>
                      <div className="text-sm text-gray-500">Tests Passed</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-blue-500">98.5%</div>
                      <div className="text-sm text-gray-500">Code Coverage</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <div>
                          <div className="font-medium">Container Memory Leak</div>
                          <div className="text-sm text-gray-500">High priority • Node.js app</div>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => handleStoryAction("fix_bug")}>
                        Fix Bug
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <div>
                          <div className="font-medium">Slow Database Queries</div>
                          <div className="text-sm text-gray-500">Medium priority • PostgreSQL</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Investigate
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <div>
                          <div className="font-medium">Container Health Check</div>
                          <div className="text-sm text-gray-500">Fixed • All services healthy</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Resolved</Badge>
                    </div>
                  </div>

                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>$ docker logs webapp-container</div>
                    <div>2024-01-15 10:30:15 [INFO] Application started</div>
                    <div>2024-01-15 10:30:16 [WARN] Database connection slow</div>
                    <div>2024-01-15 10:30:17 [ERROR] Memory usage at 85%</div>
                    <div className="text-yellow-400">$ docker exec -it webapp bash</div>
                    <div className="animate-pulse">investigating...</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Security Scan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Vulnerability Scan</span>
                      <Badge variant="outline" className="text-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Clean
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">License Check</span>
                      <Badge variant="outline" className="text-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Valid
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Secret Detection</span>
                      <Badge variant="outline" className="text-red-600">
                        <AlertTriangle className="w-3 h-3 mr-1" />1 Issue
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Scan Progress</Label>
                    <Progress value={85} className="h-2" />
                    <div className="text-xs text-gray-500">Scanning 1,247 dependencies...</div>
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="w-full">
                        View Security Report
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Security Scan Results</AlertDialogTitle>
                        <AlertDialogDescription>
                          1 potential security issue found in your containers. Would you like to auto-fix this issue?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Review Later</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleStoryAction("fix_bug")}>
                          Auto-Fix Issue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapter 4: Team Assembly */}
          <TabsContent value="chapter-3" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>Team Collaboration Hub</span>
                  </CardTitle>
                  <CardDescription>Building better together with Docker</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Team Size: {teamMembers.length + 3} developers</Label>
                    <Button size="sm" onClick={() => handleStoryAction("add_teammate")}>
                      <Plus className="w-4 h-4 mr-2" />
                      Invite Developer
                    </Button>
                  </div>

                  <ScrollArea className="h-48 w-full border rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Sarah (Lead)</div>
                          <div className="text-sm text-gray-500">Container Architecture</div>
                        </div>
                        <Badge className="ml-auto">Online</Badge>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Mike (DevOps)</div>
                          <div className="text-sm text-gray-500">CI/CD Pipeline</div>
                        </div>
                        <Badge variant="outline">Away</Badge>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>AL</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Alex (Backend)</div>
                          <div className="text-sm text-gray-500">API Development</div>
                        </div>
                        <Badge className="ml-auto">Online</Badge>
                      </div>

                      {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{member.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{member}</div>
                            <div className="text-sm text-gray-500">Docker Enthusiast</div>
                          </div>
                          <Badge className="ml-auto">Online</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Team Communication</Label>
                    <RadioGroup defaultValue="slack">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="slack" id="slack" />
                        <Label htmlFor="slack">Slack Integration</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="teams" id="teams" />
                        <Label htmlFor="teams">Microsoft Teams</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="discord" id="discord" />
                        <Label htmlFor="discord">Discord</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GitBranch className="w-5 h-5" />
                    <span>Project Workflow</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                          <div className="font-medium">Feature: User Auth</div>
                          <div className="text-sm text-gray-500">In Progress</div>
                        </div>
                      </div>
                      <Avatar>
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="font-medium">Docker Compose</div>
                          <div className="text-sm text-gray-500">Ready for Review</div>
                        </div>
                      </div>
                      <Avatar>
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div>
                          <div className="font-medium">API Endpoints</div>
                          <div className="text-sm text-gray-500">Testing</div>
                        </div>
                      </div>
                      <Avatar>
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Sprint Progress</Label>
                    <Progress value={67} className="h-2" />
                    <div className="text-sm text-gray-500">12 of 18 story points completed</div>
                  </div>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Team Chat
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Docker Team Chat</SheetTitle>
                        <SheetDescription>Real-time collaboration space</SheetDescription>
                      </SheetHeader>
                      <div className="mt-6 space-y-4">
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="font-medium text-sm">Sarah</div>
                          <div className="text-sm">Just pushed the auth container updates! 🚀</div>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <div className="font-medium text-sm">Mike</div>
                          <div className="text-sm">Pipeline is looking good, nice work team!</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="font-medium text-sm">Alex</div>
                          <div className="text-sm">API tests are all green ✅</div>
                        </div>
                        <div className="flex space-x-2">
                          <Input placeholder="Type a message..." className="flex-1" />
                          <Button size="sm">Send</Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapter 5: Deployment */}
          <TabsContent value="chapter-4" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-purple-500" />
                    <span>Deployment Mission Control</span>
                  </CardTitle>
                  <CardDescription>Launch your containers to production</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-blue-500">5</div>
                      <div className="text-sm text-gray-500">Environments</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-green-500">
                        {deploymentStatus === "success" ? "✅" : "⚡"}
                      </div>
                      <div className="text-sm text-gray-500">Status</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-purple-500">12</div>
                      <div className="text-sm text-gray-500">Containers</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Deployment Environment</Label>
                      <Select defaultValue="production">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="staging">Staging</SelectItem>
                          <SelectItem value="production">Production</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="health-check" defaultChecked />
                        <Label htmlFor="health-check">Health Check Enabled</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-rollback" defaultChecked />
                        <Label htmlFor="auto-rollback">Auto Rollback on Failure</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="blue-green" />
                        <Label htmlFor="blue-green">Blue-Green Deployment</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {deploymentStatus === "deploying" && (
                      <div className="space-y-2">
                        <Label>Deployment Progress</Label>
                        <Progress value={60} className="h-2" />
                        <div className="text-sm text-gray-500">Deploying containers... (2 of 12 complete)</div>
                      </div>
                    )}

                    <Button
                      className="w-full"
                      onClick={() => handleStoryAction("deploy")}
                      disabled={deploymentStatus === "deploying"}
                    >
                      {deploymentStatus === "deploying" ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Deploying...
                        </>
                      ) : deploymentStatus === "success" ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Deployed Successfully
                        </>
                      ) : (
                        <>
                          <Rocket className="w-4 h-4 mr-2" />
                          Deploy to Production
                        </>
                      )}
                    </Button>
                  </div>

                  {deploymentStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <div className="font-medium">Deployment Successful!</div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        All containers are healthy and receiving traffic.
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Globe className="w-4 h-4 mr-2" />
                          View Live Site
                        </Button>
                        <Button size="sm" variant="outline">
                          <Activity className="w-4 h-4 mr-2" />
                          Monitor Health
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Terminal className="w-5 h-5" />
                    <span>Deployment Logs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64 w-full">
                    <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-xs space-y-1">
                      <div>$ docker-compose up -d</div>
                      <div>Creating network "app_default"</div>
                      <div>Creating volume "app_db_data"</div>
                      <div>Creating app_db_1 ... done</div>
                      <div>Creating app_redis_1 ... done</div>
                      <div>Creating app_web_1 ... done</div>
                      <div>Creating app_nginx_1 ... done</div>
                      <div className="text-blue-400">✓ Health check passed</div>
                      <div className="text-blue-400">✓ Load balancer configured</div>
                      <div className="text-blue-400">✓ SSL certificates valid</div>
                      {deploymentStatus === "success" && <div className="text-green-400">🚀 Deployment complete!</div>}
                    </div>
                  </ScrollArea>

                  <div className="mt-4 space-y-2">
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Logs
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View in Terminal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapter 6: Victory & Metrics */}
          <TabsContent value="chapter-5" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <span>Success Metrics</span>
                  </CardTitle>
                  <CardDescription>Celebrating your Docker achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center space-y-2 p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-gray-500">Uptime</div>
                    </div>
                    <div className="text-center space-y-2 p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">2.1s</div>
                      <div className="text-sm text-gray-500">Response Time</div>
                    </div>
                    <div className="text-center space-y-2 p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">10K+</div>
                      <div className="text-sm text-gray-500">Daily Users</div>
                    </div>
                    <div className="text-center space-y-2 p-4 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600">{bugsFixed}</div>
                      <div className="text-sm text-gray-500">Bugs Fixed</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Performance Score</span>
                      <Badge className="bg-green-500">A+</Badge>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm">Featured in Docker Hub</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ThumbsUp className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Team Productivity +40%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Zero Downtime Deployments</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Success Story
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Share Your Docker Journey</DialogTitle>
                        <DialogDescription>
                          Tell the world about your amazing containerization success!
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Textarea placeholder="What made your Docker project successful?" />
                        <div className="flex space-x-2">
                          <Button variant="outline" className="flex-1">
                            <Share2 className="w-4 h-4 mr-2" />
                            Twitter
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Share2 className="w-4 h-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Live Dashboard</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Container Health</span>
                      <div className="flex space-x-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-green-500 rounded-full"></div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Traffic Distribution</span>
                      <div className="flex space-x-1">
                        <div className="w-8 h-3 bg-blue-500 rounded"></div>
                        <div className="w-6 h-3 bg-green-500 rounded"></div>
                        <div className="w-4 h-3 bg-yellow-500 rounded"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Resource Usage</span>
                      <Progress value={serverLoad[0]} className="w-20 h-2" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Achievement Unlocked! 🏆</Label>
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border border-yellow-200">
                      <div className="font-medium">Docker Master</div>
                      <div className="text-sm text-gray-600">
                        Successfully deployed {codeLines} lines of containerized code
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Next Milestone</Label>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Kubernetes Migration</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Filter className="w-4 h-4 mr-2" />
                        Customize Dashboard
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-3">
                        <div className="font-medium">Dashboard Widgets</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="metrics" defaultChecked />
                            <Label htmlFor="metrics">Performance Metrics</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="logs" defaultChecked />
                            <Label htmlFor="logs">System Logs</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="alerts" />
                            <Label htmlFor="alerts">Alert Center</Label>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Story Navigation */}
        <div className="flex justify-center space-x-4 mt-12">
          <Button
            variant="outline"
            onClick={() => setCurrentStory(Math.max(0, currentStory - 1))}
            disabled={currentStory === 0}
          >
            Previous Chapter
          </Button>
          <Button onClick={() => setCurrentStory(Math.min(5, currentStory + 1))} disabled={currentStory === 5}>
            Next Chapter
          </Button>
        </div>
      </div>
    </div>
  )
}
