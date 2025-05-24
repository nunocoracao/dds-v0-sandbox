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
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
  Container,
  Github,
  Moon,
  Play,
  Plus,
  Search,
  Settings,
  Shield,
  Star,
  Sun,
  User,
  Database,
  Activity,
  Code,
  Lock,
  Rocket,
  BarChart3,
  Camera,
  XCircle,
  RefreshCw,
  Trash2,
  CalendarIcon,
  Check,
  Terminal,
  Layers,
  FileText,
  AlertTriangle,
  Info,
  ChevronDown,
  Bold,
  Italic,
  Underline,
} from "lucide-react"

export default function ComponentShowcase() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [progress, setProgress] = useState(65)
  const [buildProgress, setBuildProgress] = useState(0)
  const [scanProgress, setScanProgress] = useState(0)
  const [isBuilding, setIsBuilding] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [containerCount, setContainerCount] = useState(3)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [sliderValue, setSliderValue] = useState([50])
  const [switchValue, setSwitchValue] = useState(false)
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [selectValue, setSelectValue] = useState("")
  const [toggleStates, setToggleStates] = useState({
    bold: false,
    italic: false,
    underline: false,
  })

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    toast({
      title: `Switched to ${newTheme} mode`,
      description: `Interface is now in ${newTheme} theme`,
    })
  }

  const runBuild = () => {
    setIsBuilding(true)
    setBuildProgress(0)
    toast({
      title: "Build Started 🔨",
      description: "Building Docker container...",
    })

    const interval = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsBuilding(false)
          toast({
            title: "Build Complete! ✅",
            description: "Container built successfully",
          })
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const runSecurityScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    toast({
      title: "Security Scan Started 🔍",
      description: "Scanning for vulnerabilities...",
    })

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          toast({
            title: "Security Scan Complete ✅",
            description: "No critical vulnerabilities found!",
          })
          return 100
        }
        return prev + 8
      })
    }, 200)
  }

  const deployContainer = () => {
    setContainerCount((prev) => prev + 1)
    toast({
      title: "Container Deployed! 🚀",
      description: `New container is starting up. Total: ${containerCount + 1}`,
    })
  }

  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]

  const containerData = [
    { id: "1", name: "nginx-web", image: "nginx:latest", status: "Running", ports: "80:80" },
    { id: "2", name: "redis-cache", image: "redis:7-alpine", status: "Running", ports: "6379:6379" },
    { id: "3", name: "postgres-db", image: "postgres:15", status: "Running", ports: "5432:5432" },
    { id: "4", name: "api-server", image: "node:18-alpine", status: "Building", ports: "3000:3000" },
  ]

  return (
    <TooltipProvider>
      <div className={`min-h-screen bg-background ${theme === "dark" ? "dark" : ""}`}>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-blue-600">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-32 h-10">
                  <img src="/logo/LogoWhite.svg" alt="Docker" className="w-full h-full object-contain" />
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  + v0.dev
                </Badge>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                  onClick={() => toast({ title: "Components", description: "Viewing component showcase" })}
                >
                  Components
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                  onClick={() => toast({ title: "Design System", description: "Viewing DDS tokens" })}
                >
                  Design System
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                  onClick={() => toast({ title: "Showcase", description: "Interactive component demos" })}
                >
                  Showcase
                </Button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white hover:bg-white/10">
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              <Button variant="secondary" size="sm">
                Sign In
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Sign Up
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Docker Design System + v0.dev</h1>
            <p className="text-xl text-blue-100 mb-8">
              Interactive component showcase powered by DDS tokens and shadcn/ui. Every component, every interaction,
              all in one place.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Code className="mr-2 h-5 w-5" />
                Explore Components
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Github className="mr-2 h-5 w-5" />
                View Source
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto p-6 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Interactive Component Library</h2>
            <p className="text-muted-foreground text-lg">
              Every shadcn/ui component with real interactions, powered by Docker Design System tokens.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {/* Build Pipeline Card - BLUE */}
            <Card className="break-inside-avoid bg-blue-600 text-white border-0 overflow-hidden relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 opacity-20">
                <img
                  src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                  alt="Build Pipeline"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Rocket className="h-5 w-5" />
                  Build Pipeline
                </CardTitle>
                <CardDescription className="text-blue-100">Progress & Button Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="w-full h-32 mb-4">
                  <img
                    src="/illustrations/Product Illustration/Md/Option Select.png"
                    alt="Build Pipeline"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Build Progress</span>
                    <span>{buildProgress}%</span>
                  </div>
                  <Progress value={buildProgress} className="h-2" />
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${isBuilding ? "bg-yellow-400 animate-pulse" : buildProgress === 100 ? "bg-green-400" : "bg-gray-400"}`}
                    ></div>
                    <span className="text-sm">
                      Status: {isBuilding ? "Building..." : buildProgress === 100 ? "Complete" : "Ready"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button className="w-full" variant="secondary" onClick={runBuild} disabled={isBuilding}>
                  {isBuilding ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Building...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" /> Start Build
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {/* Security Scanner Card - GREEN */}
            <Card className="break-inside-avoid bg-green-600 text-white border-0 overflow-hidden relative">
              <div className="absolute -top-8 -left-8 w-48 h-48 opacity-15">
                <img
                  src="/illustrations/Product Illustration/Lg/List w Users.png"
                  alt="Security Background"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Shield className="h-5 w-5" />
                  Security Scanner
                </CardTitle>
                <CardDescription className="text-green-100">Alert & Progress Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <Alert className="bg-white/10 border-white/20">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="text-white">Security Status</AlertTitle>
                  <AlertDescription className="text-green-100">
                    {isScanning ? "Scanning in progress..." : "System secure"}
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Scan Progress</span>
                    <span>{scanProgress}%</span>
                  </div>
                  <Progress value={scanProgress} className="h-2" />
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

            {/* Container Management Sheet - PURPLE */}
            <Card className="break-inside-avoid bg-purple-600 text-white border-0 overflow-hidden relative">
              <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-20">
                <img
                  src="/illustrations/Product Illustration/Lg/Folder w Docs.png"
                  alt="Container Background"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Container className="h-5 w-5" />
                  Container Management ({containerCount})
                </CardTitle>
                <CardDescription className="text-purple-100">Sheet & Table Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="w-full h-32 mb-4">
                  <img
                    src="/illustrations/Product Illustration/Lg/Mock Panels.png"
                    alt="Container Management"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Running</span>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {containerCount}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Stopped</span>
                    <Badge variant="outline" className="border-white/30 text-white">
                      1
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="relative z-10 flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="flex-1" variant="secondary">
                      <Database className="mr-2 h-4 w-4" /> View All
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[600px] sm:w-[800px]">
                    <SheetHeader>
                      <SheetTitle>Container Management</SheetTitle>
                      <SheetDescription>Manage all your Docker containers in one place</SheetDescription>
                    </SheetHeader>
                    <div className="py-6">
                      <ScrollArea className="h-[400px]">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Image</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Ports</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {containerData.map((container) => (
                              <TableRow key={container.id}>
                                <TableCell className="font-medium">{container.name}</TableCell>
                                <TableCell>{container.image}</TableCell>
                                <TableCell>
                                  <Badge variant={container.status === "Running" ? "default" : "secondary"}>
                                    {container.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>{container.ports}</TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="sm">
                                        <Settings className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                      <DropdownMenuItem
                                        onClick={() =>
                                          toast({
                                            title: "Container Started",
                                            description: `${container.name} is now running`,
                                          })
                                        }
                                      >
                                        <Play className="mr-2 h-4 w-4" />
                                        Start
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={() =>
                                          toast({
                                            title: "Container Stopped",
                                            description: `${container.name} has been stopped`,
                                          })
                                        }
                                      >
                                        <XCircle className="mr-2 h-4 w-4" />
                                        Stop
                                      </DropdownMenuItem>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem
                                        onClick={() =>
                                          toast({
                                            title: "Container Logs",
                                            description: `Opening logs for ${container.name}`,
                                          })
                                        }
                                      >
                                        <FileText className="mr-2 h-4 w-4" />
                                        View Logs
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </div>
                  </SheetContent>
                </Sheet>
                <Button variant="secondary" onClick={deployContainer}>
                  <Plus className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Form Components Card */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  Form Components
                </CardTitle>
                <CardDescription>Input, Label, Textarea & Form Elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 mb-4">
                  <img
                    src="/illustrations/Product Illustration/Md/Option Select.png"
                    alt="Form Components"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="container-name">Container Name</Label>
                    <Input
                      id="container-name"
                      placeholder="my-awesome-container"
                      onFocus={() => toast({ title: "Input Focus", description: "Container name field is active" })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your container..."
                      onFocus={() => toast({ title: "Textarea Focus", description: "Description field is active" })}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="auto-restart"
                      checked={checkboxValue}
                      onCheckedChange={(checked) => {
                        setCheckboxValue(checked as boolean)
                        toast({
                          title: "Checkbox Toggled",
                          description: `Auto-restart is now ${checked ? "enabled" : "disabled"}`,
                        })
                      }}
                    />
                    <Label htmlFor="auto-restart">Auto-restart container</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => toast({ title: "Form Submitted", description: "Container configuration saved!" })}
                >
                  Save Configuration
                </Button>
              </CardFooter>
            </Card>

            {/* Dialog & Command Components */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-green-600" />
                  Search & Commands
                </CardTitle>
                <CardDescription>Dialog, Command & Popover Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-28 mb-4">
                  <img
                    src="/illustrations/Product Illustration/Sm/Run Image.png"
                    alt="Search Commands"
                    className="w-full h-full object-contain scale-150"
                  />
                </div>
                <div className="space-y-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Open Search Dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Search Containers</DialogTitle>
                        <DialogDescription>Find and manage your Docker containers</DialogDescription>
                      </DialogHeader>
                      <Command>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Containers">
                            <CommandItem
                              onSelect={() =>
                                toast({ title: "Container Selected", description: "nginx-web container selected" })
                              }
                            >
                              <Container className="mr-2 h-4 w-4" />
                              nginx-web
                            </CommandItem>
                            <CommandItem
                              onSelect={() =>
                                toast({ title: "Container Selected", description: "redis-cache container selected" })
                              }
                            >
                              <Database className="mr-2 h-4 w-4" />
                              redis-cache
                            </CommandItem>
                            <CommandItem
                              onSelect={() =>
                                toast({ title: "Container Selected", description: "postgres-db container selected" })
                              }
                            >
                              <Database className="mr-2 h-4 w-4" />
                              postgres-db
                            </CommandItem>
                          </CommandGroup>
                          <CommandGroup heading="Actions">
                            <CommandItem
                              onSelect={() => toast({ title: "Deploy Action", description: "Starting deployment..." })}
                            >
                              <Rocket className="mr-2 h-4 w-4" />
                              Deploy New Container
                            </CommandItem>
                            <CommandItem
                              onSelect={() =>
                                toast({ title: "Build Action", description: "Starting build process..." })
                              }
                            >
                              <Code className="mr-2 h-4 w-4" />
                              Build Image
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Execute</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Framework Selector
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                onSelect={() => {
                                  setSelectValue(framework.value)
                                  toast({
                                    title: "Framework Selected",
                                    description: `Selected ${framework.label}`,
                                  })
                                }}
                              >
                                <Check
                                  className={`mr-2 h-4 w-4 ${selectValue === framework.value ? "opacity-100" : "opacity-0"}`}
                                />
                                {framework.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            {/* Calendar & Date Components */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-purple-600" />
                  Calendar & Dates
                </CardTitle>
                <CardDescription>Calendar, Popover & Date Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                        toast({
                          title: "Date Selected",
                          description: `Selected ${date?.toDateString()}`,
                        })
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {selectedDate ? `Deployment scheduled for ${selectedDate.toDateString()}` : "No date selected"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Slider & Switch Components */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-600" />
                  Controls & Inputs
                </CardTitle>
                <CardDescription>Slider, Switch & Toggle Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>CPU Allocation: {sliderValue[0]}%</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={(value) => {
                      setSliderValue(value)
                      toast({
                        title: "CPU Allocation Changed",
                        description: `Set to ${value[0]}%`,
                      })
                    }}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-scale">Auto-scaling</Label>
                  <Switch
                    id="auto-scale"
                    checked={switchValue}
                    onCheckedChange={(checked) => {
                      setSwitchValue(checked)
                      toast({
                        title: "Auto-scaling Toggled",
                        description: `Auto-scaling is now ${checked ? "enabled" : "disabled"}`,
                      })
                    }}
                  />
                </div>
                <div className="flex gap-2">
                  <Toggle
                    pressed={toggleStates.bold}
                    onPressedChange={(pressed) => {
                      setToggleStates((prev) => ({ ...prev, bold: pressed }))
                      toast({
                        title: "Bold Toggle",
                        description: `Bold is now ${pressed ? "on" : "off"}`,
                      })
                    }}
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    pressed={toggleStates.italic}
                    onPressedChange={(pressed) => {
                      setToggleStates((prev) => ({ ...prev, italic: pressed }))
                      toast({
                        title: "Italic Toggle",
                        description: `Italic is now ${pressed ? "on" : "off"}`,
                      })
                    }}
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    pressed={toggleStates.underline}
                    onPressedChange={(pressed) => {
                      setToggleStates((prev) => ({ ...prev, underline: pressed }))
                      toast({
                        title: "Underline Toggle",
                        description: `Underline is now ${pressed ? "on" : "off"}`,
                      })
                    }}
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </CardContent>
            </Card>

            {/* Radio Group & Select */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  Selection Components
                </CardTitle>
                <CardDescription>Radio Group & Select Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label>Container Restart Policy</Label>
                  <RadioGroup
                    value={radioValue}
                    onValueChange={(value) => {
                      setRadioValue(value)
                      toast({
                        title: "Restart Policy Changed",
                        description: `Selected ${value}`,
                      })
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No restart</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="always" id="always" />
                      <Label htmlFor="always">Always restart</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unless-stopped" id="unless-stopped" />
                      <Label htmlFor="unless-stopped">Unless stopped</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Base Image</Label>
                  <Select
                    value={selectValue}
                    onValueChange={(value) => {
                      setSelectValue(value)
                      toast({
                        title: "Base Image Selected",
                        description: `Selected ${value}`,
                      })
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a base image" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alpine">Alpine Linux</SelectItem>
                      <SelectItem value="ubuntu">Ubuntu</SelectItem>
                      <SelectItem value="debian">Debian</SelectItem>
                      <SelectItem value="node">Node.js</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Component */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-600" />
                  Tabs & Navigation
                </CardTitle>
                <CardDescription>Tabs Component with Multiple Panels</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                    <TabsTrigger value="metrics">Metrics</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Container className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-semibold">Container Overview</h3>
                      <p className="text-sm text-muted-foreground">Status: Running</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="logs" className="space-y-4">
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-xs">
                      <div>2024-01-15 10:30:15 [INFO] Server started</div>
                      <div>2024-01-15 10:30:16 [INFO] Listening on port 80</div>
                      <div>2024-01-15 10:30:17 [INFO] Ready to accept connections</div>
                    </div>
                  </TabsContent>
                  <TabsContent value="metrics" className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>CPU Usage</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Memory</span>
                        <span>1.2GB / 4GB</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Accordion Component */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                  Accordion & Collapsible
                </CardTitle>
                <CardDescription>Expandable Content Sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      onClick={() => toast({ title: "Accordion Expanded", description: "Container settings opened" })}
                    >
                      Container Settings
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Memory Limit</span>
                          <span>2GB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CPU Limit</span>
                          <span>1.5 cores</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Network Mode</span>
                          <span>Bridge</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger
                      onClick={() =>
                        toast({ title: "Accordion Expanded", description: "Environment variables opened" })
                      }
                    >
                      Environment Variables
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>NODE_ENV</span>
                          <span>production</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PORT</span>
                          <span>3000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>DATABASE_URL</span>
                          <span>postgres://...</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger
                      onClick={() => toast({ title: "Accordion Expanded", description: "Volume mounts opened" })}
                    >
                      Volume Mounts
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>/app/data</span>
                          <span>volume_data</span>
                        </div>
                        <div className="flex justify-between">
                          <span>/app/logs</span>
                          <span>volume_logs</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Avatar & Badge Components */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-green-600" />
                  Avatar & Badges
                </CardTitle>
                <CardDescription>User Display Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Docker Admin</p>
                    <p className="text-xs text-muted-foreground">admin@docker.com</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Role</span>
                    <Badge variant="secondary">Administrator</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Containers</span>
                    <Badge variant="outline">{containerCount} Active</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => toast({ title: "Profile Updated", description: "User profile has been refreshed" })}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Profile
                </Button>
              </CardFooter>
            </Card>

            {/* Tooltip & Alert Dialog */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Tooltips & Alerts
                </CardTitle>
                <CardDescription>Tooltip & Alert Dialog Components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Start container</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Stop container</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Restart container</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="w-full">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Container
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the container and remove all
                        associated data.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() =>
                          toast({
                            title: "Container Deleted",
                            description: "The container has been permanently removed",
                          })
                        }
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            {/* Dropdown Menu Showcase */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                  Dropdown Menus
                </CardTitle>
                <CardDescription>Complex Menu Interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Container Actions
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Container Management</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => toast({ title: "Container Started", description: "Container is now running" })}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Start Container
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => toast({ title: "Container Stopped", description: "Container has been stopped" })}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Stop Container
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <Settings className="mr-2 h-4 w-4" />
                        Advanced Options
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          onClick={() => toast({ title: "Logs Opened", description: "Viewing container logs" })}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          View Logs
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => toast({ title: "Terminal Opened", description: "Opening container shell" })}
                        >
                          <Terminal className="mr-2 h-4 w-4" />
                          Open Shell
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => toast({ title: "Stats Opened", description: "Viewing container statistics" })}
                        >
                          <BarChart3 className="mr-2 h-4 w-4" />
                          View Stats
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={checkboxValue}
                      onCheckedChange={(checked) => {
                        setCheckboxValue(checked)
                        toast({
                          title: "Auto-restart Toggled",
                          description: `Auto-restart is now ${checked ? "enabled" : "disabled"}`,
                        })
                      }}
                    >
                      Auto-restart
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={radioValue} onValueChange={setRadioValue}>
                      <DropdownMenuRadioItem value="development">Development</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="staging">Staging</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="production">Production</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            {/* Tech Photo with Interactions */}
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

            {/* Final Analytics Card */}
            <Card className="break-inside-avoid overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Component Analytics
                </CardTitle>
                <CardDescription>Showcase Statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=200&fit=crop"
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-lg">25+</div>
                    <div className="text-muted-foreground">Components</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">100%</div>
                    <div className="text-muted-foreground">Interactive</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-lg">DDS</div>
                    <div className="text-muted-foreground">Design Tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">v0.dev</div>
                    <div className="text-muted-foreground">Powered</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() =>
                    toast({
                      title: "Showcase Complete! 🎉",
                      description: "You've explored all components in the Docker Design System!",
                    })
                  }
                >
                  <Star className="mr-2 h-4 w-4" /> Complete Showcase
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>

        <Toaster />
      </div>
    </TooltipProvider>
  )
}
