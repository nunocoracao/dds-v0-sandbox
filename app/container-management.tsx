"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Play,
  Square,
  RotateCcw,
  Trash2,
  MoreHorizontal,
  Plus,
  Filter,
  Download,
  Upload,
  Settings,
  Activity,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Clock,
  User,
  Bell,
} from "lucide-react"

// Mock container data
const containers = [
  {
    id: "c1a2b3c4d5e6",
    name: "nginx-web-server",
    image: "nginx:latest",
    status: "running",
    created: "2 hours ago",
    ports: "80:8080, 443:8443",
    cpu: 15,
    memory: 45,
    network: "2.1 MB",
  },
  {
    id: "f7g8h9i0j1k2",
    name: "postgres-db",
    image: "postgres:13",
    status: "running",
    created: "1 day ago",
    ports: "5432:5432",
    cpu: 8,
    memory: 62,
    network: "1.8 MB",
  },
  {
    id: "l3m4n5o6p7q8",
    name: "redis-cache",
    image: "redis:alpine",
    status: "stopped",
    created: "3 days ago",
    ports: "6379:6379",
    cpu: 0,
    memory: 0,
    network: "0 MB",
  },
  {
    id: "r9s0t1u2v3w4",
    name: "node-api",
    image: "node:16-alpine",
    status: "running",
    created: "5 hours ago",
    ports: "3000:3000",
    cpu: 22,
    memory: 38,
    network: "5.2 MB",
  },
  {
    id: "x5y6z7a8b9c0",
    name: "mongodb",
    image: "mongo:latest",
    status: "exited",
    created: "1 week ago",
    ports: "27017:27017",
    cpu: 0,
    memory: 0,
    network: "0 MB",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "running":
      return "bg-green-500"
    case "stopped":
      return "bg-yellow-500"
    case "exited":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "running":
      return "default"
    case "stopped":
      return "secondary"
    case "exited":
      return "destructive"
    default:
      return "outline"
  }
}

export default function ContainerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContainer, setSelectedContainer] = useState<string | null>(null)

  const filteredContainers = containers.filter(
    (container) =>
      container.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      container.image.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const runningContainers = containers.filter((c) => c.status === "running").length
  const totalContainers = containers.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Docker White Submark */}
              <div className="w-8 h-8">
                <img src="/sub-marks/subMarkWhite.svg" alt="Docker" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-xl font-heading font-semibold">Container Management</h1>
                <p className="text-sm text-primary-foreground/80">Manage your Docker containers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="secondary" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Containers</CardTitle>
              <HardDrive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalContainers}</div>
              <p className="text-xs text-muted-foreground">Across all environments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Running</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{runningContainers}</div>
              <p className="text-xs text-muted-foreground">Active containers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
              <Cpu className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23%</div>
              <Progress value={23} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
              <MemoryStick className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67%</div>
              <Progress value={67} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="containers" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="containers">Containers</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="networks">Networks</TabsTrigger>
              <TabsTrigger value="volumes">Volumes</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Container
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <TabsContent value="containers" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Container List</CardTitle>
                    <CardDescription>Manage and monitor your Docker containers</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search containers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Container</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Ports</TableHead>
                      <TableHead>Resources</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContainers.map((container) => (
                      <TableRow key={container.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{container.name}</div>
                            <div className="text-sm text-muted-foreground">{container.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(container.status)}`} />
                            <Badge variant={getStatusVariant(container.status)}>{container.status}</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-mono text-sm">{container.image}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{container.created}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-mono text-sm">{container.ports}</div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-sm">
                              <Cpu className="h-3 w-3" />
                              <span>{container.cpu}%</span>
                              <MemoryStick className="h-3 w-3 ml-2" />
                              <span>{container.memory}%</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Network className="h-3 w-3" />
                              <span>{container.network}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            {container.status === "running" ? (
                              <>
                                <Button variant="outline" size="sm">
                                  <Square className="h-3 w-3" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <RotateCcw className="h-3 w-3" />
                                </Button>
                              </>
                            ) : (
                              <Button variant="outline" size="sm">
                                <Play className="h-3 w-3" />
                              </Button>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <MoreHorizontal className="h-3 w-3" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Settings className="mr-2 h-4 w-4" />
                                  Configure
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Upload className="mr-2 h-4 w-4" />
                                  View Logs
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Activity className="mr-2 h-4 w-4" />
                                  Stats
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Docker Images</CardTitle>
                <CardDescription>Manage your Docker images and repositories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <HardDrive className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Images Management</h3>
                  <p className="text-muted-foreground mb-4">View and manage your Docker images here</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Pull Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="networks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Docker Networks</CardTitle>
                <CardDescription>Configure and manage container networks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Network className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Network Management</h3>
                  <p className="text-muted-foreground mb-4">Create and configure Docker networks</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Network
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="volumes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Docker Volumes</CardTitle>
                <CardDescription>Manage persistent data storage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <HardDrive className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Volume Management</h3>
                  <p className="text-muted-foreground mb-4">Create and manage Docker volumes</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Volume
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
