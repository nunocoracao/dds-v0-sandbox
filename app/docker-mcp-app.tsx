"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import {
  Search,
  Download,
  Play,
  Square,
  Settings,
  Terminal,
  Globe,
  Star,
  Clock,
  CheckCircle,
  HardDrive,
  Container,
  Code,
  Bot,
  Zap,
  ExternalLink,
  ArrowRight,
  DockIcon as Docker,
} from "lucide-react"

interface DockerImage {
  id: string
  name: string
  tag: string
  description: string
  stars: number
  pulls: string
  size: string
  lastUpdated: string
  official: boolean
  mcpTools: string[]
  category: string
}

interface RunningContainer {
  id: string
  name: string
  image: string
  status: "running" | "stopped" | "starting" | "error"
  uptime: string
  ports: string[]
  mcpEndpoint?: string
  resources: {
    cpu: number
    memory: number
    network: string
  }
}

const mockDockerImages: DockerImage[] = [
  {
    id: "mcp-toolkit-official",
    name: "docker/mcp-toolkit",
    tag: "latest",
    description: "Official MCP (Model Context Protocol) toolkit with comprehensive AI model integration tools",
    stars: 2847,
    pulls: "10M+",
    size: "1.2 GB",
    lastUpdated: "2 days ago",
    official: true,
    mcpTools: ["OpenAI Connector", "Anthropic Claude", "Local LLM Server", "Vector Database", "RAG Pipeline"],
    category: "AI/ML",
  },
  {
    id: "mcp-dev-stack",
    name: "mcpdev/full-stack",
    tag: "v2.1.0",
    description: "Complete MCP development environment with pre-configured AI models and development tools",
    stars: 1523,
    pulls: "5M+",
    size: "2.8 GB",
    lastUpdated: "1 week ago",
    official: false,
    mcpTools: ["VS Code Server", "Jupyter Lab", "Model Training", "API Gateway", "Monitoring Dashboard"],
    category: "Development",
  },
  {
    id: "mcp-lightweight",
    name: "alpine/mcp-minimal",
    tag: "3.18",
    description: "Lightweight Alpine-based MCP runtime for production deployments",
    stars: 892,
    pulls: "2M+",
    size: "256 MB",
    lastUpdated: "3 days ago",
    official: false,
    mcpTools: ["Core MCP Runtime", "REST API", "WebSocket Server"],
    category: "Production",
  },
  {
    id: "mcp-research",
    name: "research/mcp-experimental",
    tag: "beta",
    description: "Experimental MCP features and cutting-edge AI model integrations",
    stars: 445,
    pulls: "500K+",
    size: "3.1 GB",
    lastUpdated: "5 hours ago",
    official: false,
    mcpTools: ["GPT-4 Turbo", "DALL-E 3", "Whisper", "Code Interpreter", "Multi-modal AI"],
    category: "Research",
  },
]

const mockRunningContainers: RunningContainer[] = [
  {
    id: "mcp-prod-001",
    name: "mcp-production",
    image: "docker/mcp-toolkit:latest",
    status: "running",
    uptime: "2d 14h 32m",
    ports: ["8080:8080", "9090:9090"],
    mcpEndpoint: "http://localhost:8080/mcp",
    resources: { cpu: 45, memory: 68, network: "2.3 MB/s" },
  },
  {
    id: "mcp-dev-002",
    name: "mcp-development",
    image: "mcpdev/full-stack:v2.1.0",
    status: "running",
    uptime: "6h 15m",
    ports: ["3000:3000", "8888:8888"],
    mcpEndpoint: "http://localhost:3000/api/mcp",
    resources: { cpu: 23, memory: 34, network: "1.1 MB/s" },
  },
]

export default function DockerMCPApp() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredImages, setFilteredImages] = useState(mockDockerImages)
  const [runningContainers, setRunningContainers] = useState(mockRunningContainers)
  const [selectedImage, setSelectedImage] = useState<DockerImage | null>(null)
  const [isStarting, setIsStarting] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("hub")

  useEffect(() => {
    const filtered = mockDockerImages.filter((image) => {
      const matchesSearch =
        image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || image.category.toLowerCase() === selectedCategory.toLowerCase()
      return matchesSearch && matchesCategory
    })
    setFilteredImages(filtered)
  }, [searchTerm, selectedCategory])

  const handleStartContainer = async (image: DockerImage) => {
    setIsStarting(image.id)

    // Simulate container startup
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const newContainer: RunningContainer = {
      id: `mcp-${Date.now()}`,
      name: `mcp-${image.name.split("/")[1] || image.name}`,
      image: `${image.name}:${image.tag}`,
      status: "running",
      uptime: "0m",
      ports: ["8080:8080"],
      mcpEndpoint: `http://localhost:8080/mcp`,
      resources: { cpu: 15, memory: 25, network: "0.5 MB/s" },
    }

    setRunningContainers([...runningContainers, newContainer])
    setIsStarting(null)

    toast({
      title: "Container Started! 🚀",
      description: `${image.name} is now running with MCP toolkit available`,
    })
  }

  const handleStopContainer = (containerId: string) => {
    setRunningContainers((containers) =>
      containers.map((c) => (c.id === containerId ? { ...c, status: "stopped" as const } : c)),
    )
    toast({
      title: "Container Stopped",
      description: "MCP services have been gracefully shut down",
    })
  }

  const categories = ["all", "AI/ML", "Development", "Production", "Research"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Container className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-gray-900">Docker MCP Hub</h1>
                <p className="text-sm text-gray-600">Deploy AI toolsets with Model Context Protocol</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Bot className="w-3 h-3 mr-1" />
                MCP Ready
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hub" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Docker Hub
            </TabsTrigger>
            <TabsTrigger value="containers" className="flex items-center gap-2">
              <Container className="w-4 h-4" />
              Running Containers
            </TabsTrigger>
            <TabsTrigger value="mcp" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              MCP Dashboard
            </TabsTrigger>
          </TabsList>

          {/* Docker Hub Tab */}
          <TabsContent value="hub" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Browse MCP-Enabled Images
                </CardTitle>
                <CardDescription>Find and deploy Docker images with Model Context Protocol support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search">Search Images</Label>
                    <Input
                      id="search"
                      placeholder="Search for MCP toolkits, AI models, or frameworks..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div className="w-48">
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat === "all" ? "All Categories" : cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Results */}
            <div className="grid gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Docker className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-heading font-semibold">{image.name}</h3>
                              {image.official && (
                                <Badge className="bg-blue-100 text-blue-700">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Official
                                </Badge>
                              )}
                              <Badge variant="outline">{image.tag}</Badge>
                            </div>
                            <p className="text-gray-600 mt-1">{image.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{image.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{image.pulls}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <HardDrive className="w-4 h-4" />
                            <span>{image.size}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Updated {image.lastUpdated}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium">MCP Tools Included:</Label>
                          <div className="flex flex-wrap gap-2">
                            {image.mcpTools.map((tool, index) => (
                              <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                                <Bot className="w-3 h-3 mr-1" />
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 ml-6">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <Docker className="w-5 h-5" />
                                {image.name}:{image.tag}
                              </DialogTitle>
                              <DialogDescription>{image.description}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <Label>Category</Label>
                                  <p className="text-gray-600">{image.category}</p>
                                </div>
                                <div>
                                  <Label>Image Size</Label>
                                  <p className="text-gray-600">{image.size}</p>
                                </div>
                                <div>
                                  <Label>Stars</Label>
                                  <p className="text-gray-600">{image.stars.toLocaleString()}</p>
                                </div>
                                <div>
                                  <Label>Downloads</Label>
                                  <p className="text-gray-600">{image.pulls}</p>
                                </div>
                              </div>
                              <div>
                                <Label>MCP Capabilities</Label>
                                <div className="mt-2 space-y-2">
                                  {image.mcpTools.map((tool, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                      <CheckCircle className="w-4 h-4 text-green-500" />
                                      <span>{tool}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button
                          onClick={() => handleStartContainer(image)}
                          disabled={isStarting === image.id}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          {isStarting === image.id ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Starting...
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Start Container
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Running Containers Tab */}
          <TabsContent value="containers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Container className="w-5 h-5" />
                  Active MCP Containers
                </CardTitle>
                <CardDescription>Manage your running Docker containers with MCP toolsets</CardDescription>
              </CardHeader>
              <CardContent>
                {runningContainers.length === 0 ? (
                  <div className="text-center py-12">
                    <Container className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No containers running</h3>
                    <p className="text-gray-500 mb-4">Start a container from the Docker Hub tab to get started</p>
                    <Button onClick={() => setActiveTab("hub")} variant="outline">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Browse Images
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {runningContainers.map((container) => (
                      <Card key={container.id} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-heading font-semibold">{container.name}</h3>
                                <Badge
                                  className={
                                    container.status === "running"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-gray-100 text-gray-700"
                                  }
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full mr-2 ${
                                      container.status === "running" ? "bg-green-500" : "bg-gray-500"
                                    }`}
                                  />
                                  {container.status}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                                <div>
                                  <Label className="text-xs">Image</Label>
                                  <p className="font-mono">{container.image}</p>
                                </div>
                                <div>
                                  <Label className="text-xs">Uptime</Label>
                                  <p>{container.uptime}</p>
                                </div>
                                <div>
                                  <Label className="text-xs">Ports</Label>
                                  <p className="font-mono">{container.ports.join(", ")}</p>
                                </div>
                                <div>
                                  <Label className="text-xs">MCP Endpoint</Label>
                                  <p className="font-mono text-blue-600">{container.mcpEndpoint}</p>
                                </div>
                              </div>

                              <div className="mt-4 grid grid-cols-3 gap-4">
                                <div>
                                  <Label className="text-xs">CPU Usage</Label>
                                  <Progress value={container.resources.cpu} className="mt-1" />
                                  <p className="text-xs text-gray-500 mt-1">{container.resources.cpu}%</p>
                                </div>
                                <div>
                                  <Label className="text-xs">Memory Usage</Label>
                                  <Progress value={container.resources.memory} className="mt-1" />
                                  <p className="text-xs text-gray-500 mt-1">{container.resources.memory}%</p>
                                </div>
                                <div>
                                  <Label className="text-xs">Network I/O</Label>
                                  <p className="text-sm font-medium mt-1">{container.resources.network}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 ml-6">
                              <Button variant="outline" size="sm">
                                <Terminal className="w-4 h-4 mr-2" />
                                Shell
                              </Button>
                              <Button variant="outline" size="sm">
                                <Code className="w-4 h-4 mr-2" />
                                MCP API
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleStopContainer(container.id)}>
                                <Square className="w-4 h-4 mr-2" />
                                Stop
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* MCP Dashboard Tab */}
          <TabsContent value="mcp" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    MCP Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Active Endpoints</span>
                    <Badge className="bg-green-100 text-green-700">
                      {runningContainers.filter((c) => c.status === "running").length} Running
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total Requests</span>
                    <span className="font-mono">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average Response Time</span>
                    <span className="font-mono">142ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Error Rate</span>
                    <span className="font-mono text-green-600">0.02%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    AI Model Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>OpenAI GPT-4</span>
                      <Badge className="bg-green-100 text-green-700">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Anthropic Claude</span>
                      <Badge className="bg-green-100 text-green-700">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Local LLM</span>
                      <Badge className="bg-yellow-100 text-yellow-700">Loading</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Vector Database</span>
                      <Badge className="bg-green-100 text-green-700">Ready</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common MCP operations and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Terminal className="w-6 h-6" />
                    <span>Open MCP Console</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Code className="w-6 h-6" />
                    <span>API Documentation</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Settings className="w-6 h-6" />
                    <span>Configure Models</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
