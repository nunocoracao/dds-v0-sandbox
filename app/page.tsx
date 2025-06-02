"use client"

import { useState } from "react"
import { AppHeader } from "@/components/layout/app-header"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertCircle,
  Clock,
  CreditCard,
  FileText,
  Filter,
  Info,
  LayoutDashboard,
  MessageSquare,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Terminal,
  Users,
  Zap,
} from "lucide-react"

export default function AdminConsole() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")
  const [timeRange, setTimeRange] = useState("7d")
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [autoScalingEnabled, setAutoScalingEnabled] = useState(true)
  const [debugModeEnabled, setDebugModeEnabled] = useState(false)

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@acmecorp.com",
      role: "Admin",
      lastActive: "5 mins ago",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@acmecorp.com",
      role: "Developer",
      lastActive: "27 mins ago",
      status: "Active",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma@acmecorp.com",
      role: "DevOps",
      lastActive: "1 hour ago",
      status: "Active",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james@acmecorp.com",
      role: "Developer",
      lastActive: "3 hours ago",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Olivia Taylor",
      email: "olivia@acmecorp.com",
      role: "Admin",
      lastActive: "Yesterday",
      status: "Active",
    },
  ]

  const recentActivity = [
    { id: 1, user: "Sarah Johnson", action: "Created new container", resource: "web-server-prod", time: "5 mins ago" },
    {
      id: 2,
      user: "Gordon AI",
      action: "Optimized resource allocation",
      resource: "database-cluster",
      time: "27 mins ago",
    },
    { id: 3, user: "Michael Chen", action: "Updated image", resource: "frontend-app:v2.3", time: "1 hour ago" },
    { id: 4, user: "Gordon AI", action: "Security scan completed", resource: "All containers", time: "2 hours ago" },
    { id: 5, user: "Emma Rodriguez", action: "Added new user", resource: "James Wilson", time: "3 hours ago" },
    { id: 6, user: "Gordon AI", action: "Automated backup", resource: "volume-data-prod", time: "5 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r min-h-[calc(100vh-64px)] p-4">
          <div className="mb-8 px-4">
            <div className="flex items-center gap-2">
              <img src="/sub-marks/subMarkPrimary.svg" alt="Docker Gordon" className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Gordon</h3>
                <p className="text-xs text-muted-foreground">AI Agent for Docker</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            <Button
              variant={activeTab === "dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboards
            </Button>
            <Button
              variant={activeTab === "models" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("models")}
            >
              <Zap className="mr-2 h-4 w-4" />
              Models
            </Button>
            <Button
              variant={activeTab === "integrations" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("integrations")}
            >
              <Search className="mr-2 h-4 w-4" />
              Integrations
            </Button>
            <Button
              variant={activeTab === "channels" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("channels")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Channels
            </Button>
            <Button
              variant={activeTab === "mcpservers" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("mcpservers")}
            >
              <Terminal className="mr-2 h-4 w-4" />
              MCP Servers
            </Button>
            <Button
              variant={activeTab === "settings" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>

          <div className="mt-auto">
            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm">Gordon Pro</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Upgrade to access advanced AI features and priority support.
                </p>
                <Button size="sm" className="w-full">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                  <p className="text-muted-foreground">Overall insights for Gordon AI across your organization.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">Last 24 hours</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Status cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gordon AI Status</CardTitle>
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <p className="text-xs text-muted-foreground">Operational</p>
                    </div>
                    <div className="mt-3 flex items-center">
                      <p className="text-2xl font-bold">99.9%</p>
                      <Badge className="ml-2" variant="secondary">
                        Uptime
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,543</div>
                    <p className="text-xs text-muted-foreground">+19% from last period</p>
                    <Progress className="mt-3" value={78} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Channels</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">Desktop, VSCode, Web, CLI</p>
                    <Progress className="mt-3" value={92} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">237</div>
                    <p className="text-xs text-muted-foreground">+12 new today</p>
                    <Progress className="mt-3" value={65} />
                  </CardContent>
                </Card>
              </div>

              {/* Feature Usage Overview */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Model Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                      <div className="space-y-4 w-full px-8">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>GPT-4o</span>
                            <span>68%</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Claude 3 Opus</span>
                            <span>22%</span>
                          </div>
                          <Progress value={22} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Llama 3</span>
                            <span>8%</span>
                          </div>
                          <Progress value={8} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Other Models</span>
                            <span>2%</span>
                          </div>
                          <Progress value={2} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Channel Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                      <div className="space-y-4 w-full px-8">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Docker Desktop</span>
                            <span>45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>VS Code Extension</span>
                            <span>30%</span>
                          </div>
                          <Progress value={30} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Web Interface</span>
                            <span>15%</span>
                          </div>
                          <Progress value={15} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>CLI</span>
                            <span>10%</span>
                          </div>
                          <Progress value={10} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Integration Health and Recent Activity */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex justify-between">
                    <CardTitle>Integration Health</CardTitle>
                    <Button variant="ghost" size="sm">
                      View all
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-2 rounded-md bg-green-50">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="font-medium">GitHub</span>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Healthy
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-md bg-green-50">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="font-medium">Docker Hub</span>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Healthy
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-md bg-amber-50">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-500" />
                          <span className="font-medium">Jira</span>
                        </div>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Degraded
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-md bg-red-50">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          <span className="font-medium">AWS CloudWatch</span>
                        </div>
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          Error
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex justify-between">
                    <CardTitle>Recent Activity</CardTitle>
                    <Button variant="ghost" size="sm">
                      View all
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.slice(0, 5).map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 h-2 w-2 rounded-full ${activity.user === "Gordon AI" ? "bg-primary" : "bg-muted-foreground"}`}
                          />
                          <div>
                            <p className="text-sm font-medium">
                              {activity.user}{" "}
                              <span className="font-normal text-muted-foreground">{activity.action}</span>
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{activity.resource}</span>
                              <span>•</span>
                              <span>{activity.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Governance and Compliance */}
              {/* Overview of Key Sections */}
              <Card>
                <CardHeader>
                  <CardTitle>System Overview</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Quick overview of your Gordon AI configuration across all sections
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">AI Models</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            4 Active
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">GPT-4o primary, 3 fallback models configured</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Integrations</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            8 Connected
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">6 healthy, 2 need attention</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Channels</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            6 Active
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Desktop, GitHub, Web, VS Code, CLI, Slack</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">MCP Servers</h3>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            8 Configured
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">1 server needs attention</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Models Tab */}
          {activeTab === "models" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Models</h1>
                  <p className="text-muted-foreground">
                    Configure AI models available to Gordon and view usage analytics.
                  </p>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Model
                </Button>
              </div>

              {/* Model Usage Overview */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Models</CardTitle>
                    <Zap className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">2 primary, 2 fallback</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231</div>
                    <p className="text-xs text-muted-foreground">+23% from last week</p>
                    <Progress className="mt-3" value={85} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.8s</div>
                    <p className="text-xs text-muted-foreground">-0.2s improvement</p>
                    <Progress className="mt-3" value={75} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cost This Month</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,247</div>
                    <p className="text-xs text-muted-foreground">Within budget limit</p>
                    <Progress className="mt-3" value={62} />
                  </CardContent>
                </Card>
              </div>

              {/* Model Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Model Configuration</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Configure which AI models Gordon can use and their priority order
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Model</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Usage (7d)</TableHead>
                        <TableHead>Avg Response</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            GPT-4o
                          </div>
                        </TableCell>
                        <TableCell>OpenAI</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Primary</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={68} className="w-16 h-2" />
                            <span className="text-sm">68%</span>
                          </div>
                        </TableCell>
                        <TableCell>1.2s</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Model</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            Claude 3 Opus
                          </div>
                        </TableCell>
                        <TableCell>Anthropic</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Fallback</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={22} className="w-16 h-2" />
                            <span className="text-sm">22%</span>
                          </div>
                        </TableCell>
                        <TableCell>2.1s</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Model</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            Llama 3.1 70B
                          </div>
                        </TableCell>
                        <TableCell>Meta (via Groq)</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Fallback</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={8} className="w-16 h-2" />
                            <span className="text-sm">8%</span>
                          </div>
                        </TableCell>
                        <TableCell>0.8s</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Model</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500" />
                            GPT-3.5 Turbo
                          </div>
                        </TableCell>
                        <TableCell>OpenAI</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Standby
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Emergency</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={2} className="w-16 h-2" />
                            <span className="text-sm">2%</span>
                          </div>
                        </TableCell>
                        <TableCell>0.6s</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Model</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Activate</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Usage Analytics and Model Settings */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Analytics</CardTitle>
                    <p className="text-sm text-muted-foreground">Model usage distribution over the last 7 days</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                      <div className="space-y-4 w-full px-8">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-sm bg-blue-500" />
                              GPT-4o
                            </span>
                            <span>30,742 requests</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-sm bg-purple-500" />
                              Claude 3 Opus
                            </span>
                            <span>9,951 requests</span>
                          </div>
                          <Progress value={22} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-sm bg-green-500" />
                              Llama 3.1 70B
                            </span>
                            <span>3,618 requests</span>
                          </div>
                          <Progress value={8} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-sm bg-gray-500" />
                              GPT-3.5 Turbo
                            </span>
                            <span>920 requests</span>
                          </div>
                          <Progress value={2} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Model Settings</CardTitle>
                    <p className="text-sm text-muted-foreground">Global configuration for model behavior</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fallback-strategy">Fallback Strategy</Label>
                      <Select defaultValue="priority">
                        <SelectTrigger id="fallback-strategy">
                          <SelectValue placeholder="Select fallback strategy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="priority">Priority Order</SelectItem>
                          <SelectItem value="fastest">Fastest Response</SelectItem>
                          <SelectItem value="cheapest">Lowest Cost</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeout">Request Timeout (seconds)</Label>
                      <Input id="timeout" type="number" defaultValue="30" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="retry-attempts">Max Retry Attempts</Label>
                      <Input id="retry-attempts" type="number" defaultValue="3" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-failover</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically switch to fallback models on failure
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cost Monitoring</Label>
                        <p className="text-sm text-muted-foreground">Alert when monthly costs exceed budget</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Configuration</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Gordon AI Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Gordon AI Recommendations</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    AI-powered suggestions for optimizing your model configuration
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Info className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Cost Optimization Opportunity</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Consider using Llama 3.1 70B for more routine queries. It's 60% cheaper than GPT-4o with
                          similar performance for basic Docker tasks.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Not Now
                          </Button>
                          <Button size="sm">Configure Auto-routing</Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Performance Alert</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Claude 3 Opus response times have increased by 15% this week. Consider adjusting the fallback
                          threshold or checking API status.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Ignore
                          </Button>
                          <Button size="sm">Check Status</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "integrations" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
                  <p className="text-muted-foreground">
                    Connect external tools and data sources that Gordon can access in real-time.
                  </p>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Integration
                </Button>
              </div>

              {/* Integration Status Overview */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Integrations</CardTitle>
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">6 healthy, 2 need attention</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.2M</div>
                    <p className="text-xs text-muted-foreground">Documents indexed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">API Calls Today</CardTitle>
                    <RefreshCw className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,847</div>
                    <p className="text-xs text-muted-foreground">+12% from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5m</div>
                    <p className="text-xs text-muted-foreground">ago</p>
                  </CardContent>
                </Card>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search integrations..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Integrations</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="error">Needs Attention</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Integrations Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Connected Integrations</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Manage external data sources and tools that Gordon can access
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Sync</TableHead>
                        <TableHead>Documents</TableHead>
                        <TableHead>Usage</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">N</span>
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">Notion</div>
                              <div className="text-sm text-muted-foreground">Engineering Wiki</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Documentation</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>2 mins ago</TableCell>
                        <TableCell>1,247</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={78} className="w-16 h-2" />
                            <span className="text-sm">High</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Force Sync</DropdownMenuItem>
                              <DropdownMenuItem>View Logs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <MessageSquare className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-medium">Slack</div>
                              <div className="text-sm text-muted-foreground">#engineering, #devops</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Communication</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>1 min ago</TableCell>
                        <TableCell>8,432</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={92} className="w-16 h-2" />
                            <span className="text-sm">High</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Force Sync</DropdownMenuItem>
                              <DropdownMenuItem>View Logs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Users className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">Confluence</div>
                              <div className="text-sm text-muted-foreground">Product Documentation</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Documentation</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>5 mins ago</TableCell>
                        <TableCell>892</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={45} className="w-16 h-2" />
                            <span className="text-sm">Medium</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Force Sync</DropdownMenuItem>
                              <DropdownMenuItem>View Logs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">Google Drive</div>
                              <div className="text-sm text-muted-foreground">Shared Documents</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>File Storage</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Syncing
                          </Badge>
                        </TableCell>
                        <TableCell>15 mins ago</TableCell>
                        <TableCell>2,156</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={23} className="w-16 h-2" />
                            <span className="text-sm">Low</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Force Sync</DropdownMenuItem>
                              <DropdownMenuItem>View Logs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="h-4 w-4 text-orange-600" />
                            </div>
                            <div>
                              <div className="font-medium">Salesforce</div>
                              <div className="text-sm text-muted-foreground">Customer Data</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>CRM</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            Error
                          </Badge>
                        </TableCell>
                        <TableCell>2 hours ago</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={0} className="w-16 h-2" />
                            <span className="text-sm">None</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Retry Connection</DropdownMenuItem>
                              <DropdownMenuItem>View Logs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Available Integrations and Sync Settings */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Integrations</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Popular tools and services you can connect to Gordon
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Jira</div>
                            <div className="text-sm text-muted-foreground">Project Management</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Connect
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">GitHub</div>
                            <div className="text-sm text-muted-foreground">Code Repository</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Connect
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Microsoft Teams</div>
                            <div className="text-sm text-muted-foreground">Communication</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Connect
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">SharePoint</div>
                            <div className="text-sm text-muted-foreground">Document Management</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sync Settings</CardTitle>
                    <p className="text-sm text-muted-foreground">Configure how Gordon syncs and indexes your data</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sync-frequency">Sync Frequency</Label>
                      <Select defaultValue="15min">
                        <SelectTrigger id="sync-frequency">
                          <SelectValue placeholder="Select sync frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5min">Every 5 minutes</SelectItem>
                          <SelectItem value="15min">Every 15 minutes</SelectItem>
                          <SelectItem value="1hour">Every hour</SelectItem>
                          <SelectItem value="6hours">Every 6 hours</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="index-depth">Index Depth</Label>
                      <Select defaultValue="full">
                        <SelectTrigger id="index-depth">
                          <SelectValue placeholder="Select index depth" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="metadata">Metadata only</SelectItem>
                          <SelectItem value="summary">Summary + metadata</SelectItem>
                          <SelectItem value="full">Full content</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Real-time Updates</Label>
                        <p className="text-sm text-muted-foreground">Enable webhooks for instant updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-retry Failed Syncs</Label>
                        <p className="text-sm text-muted-foreground">Automatically retry failed synchronizations</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Settings</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Gordon AI Integration Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Gordon AI Integration Insights</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    AI-powered recommendations for optimizing your integrations
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Info className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Salesforce Connection Issue</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The Salesforce integration has been failing for 2 hours. This appears to be due to an expired
                          API token. Gordon recommends refreshing the authentication.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Ignore
                          </Button>
                          <Button size="sm">Refresh Token</Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">High Usage Detected</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Slack integration is generating high API usage. Consider adjusting sync frequency or filtering
                          channels to reduce costs and improve performance.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Not Now
                          </Button>
                          <Button size="sm">Optimize Settings</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Channels Tab */}
          {activeTab === "channels" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Channels</h1>
                  <p className="text-muted-foreground">
                    Configure where Gordon can interact with users and manage channel-specific capabilities.
                  </p>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Channel
                </Button>
              </div>

              {/* Channel Status Overview */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Channels</CardTitle>
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6</div>
                    <p className="text-xs text-muted-foreground">4 fully configured</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,543</div>
                    <p className="text-xs text-muted-foreground">+19% from last week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Proactive Actions</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">847</div>
                    <p className="text-xs text-muted-foreground">Gordon-initiated</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.2s</div>
                    <p className="text-xs text-muted-foreground">Average across channels</p>
                  </CardContent>
                </Card>
              </div>

              {/* Channel Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Channel Configuration</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Manage where Gordon can interact and what capabilities are available on each channel
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Channel</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Capabilities</TableHead>
                        <TableHead>Proactive Mode</TableHead>
                        <TableHead>Usage (7d)</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Terminal className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">Docker Desktop</div>
                              <div className="text-sm text-muted-foreground">Native integration</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              Chat
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Commands
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Monitoring
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={68} className="w-16 h-2" />
                            <span className="text-sm">5,234</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Channel</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Users className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-medium">GitHub PRs</div>
                              <div className="text-sm text-muted-foreground">Pull request reviews</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              Reviews
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Comments
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Suggestions
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={45} className="w-16 h-2" />
                            <span className="text-sm">2,891</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Channel</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <MessageSquare className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">Web Interface</div>
                              <div className="text-sm text-muted-foreground">Browser-based chat</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              Chat
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              File Upload
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Dashboard
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={32} className="w-16 h-2" />
                            <span className="text-sm">1,847</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Channel</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-4 w-4 text-orange-600" />
                            </div>
                            <div>
                              <div className="font-medium">VS Code Extension</div>
                              <div className="text-sm text-muted-foreground">IDE integration</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              Code Help
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Debugging
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Suggestions
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={28} className="w-16 h-2" />
                            <span className="text-sm">1,523</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Channel</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Terminal className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <div className="font-medium">CLI</div>
                              <div className="text-sm text-muted-foreground">Command line interface</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              Commands
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Scripts
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={15} className="w-16 h-2" />
                            <span className="text-sm">892</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Test Channel</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <MessageSquare className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">Slack</div>
                              <div className="text-sm text-muted-foreground">Team communication</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Configured
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              Mentions
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Alerts
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={8} className="w-16 h-2" />
                            <span className="text-sm">234</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Activate</DropdownMenuItem>
                              <DropdownMenuItem>Test Channel</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Channel Settings and Available Channels */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Channels</CardTitle>
                    <p className="text-sm text-muted-foreground">Additional channels you can enable for Gordon</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Jira</div>
                            <div className="text-sm text-muted-foreground">Issue tracking & project management</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Microsoft Teams</div>
                            <div className="text-sm text-muted-foreground">Team collaboration</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Terminal className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">JetBrains IDEs</div>
                            <div className="text-sm text-muted-foreground">IntelliJ, PyCharm, etc.</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Discord</div>
                            <div className="text-sm text-muted-foreground">Community support</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Enable
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Global Channel Settings</CardTitle>
                    <p className="text-sm text-muted-foreground">Configure default behavior across all channels</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="response-style">Default Response Style</Label>
                      <Select defaultValue="helpful">
                        <SelectTrigger id="response-style">
                          <SelectValue placeholder="Select response style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="concise">Concise</SelectItem>
                          <SelectItem value="helpful">Helpful</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="proactive-frequency">Proactive Suggestion Frequency</Label>
                      <Select defaultValue="moderate">
                        <SelectTrigger id="proactive-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">Minimal</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="frequent">Frequent</SelectItem>
                          <SelectItem value="aggressive">Aggressive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cross-channel Learning</Label>
                        <p className="text-sm text-muted-foreground">Share context between channels</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-escalation</Label>
                        <p className="text-sm text-muted-foreground">Escalate complex issues to human support</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Usage Analytics</Label>
                        <p className="text-sm text-muted-foreground">Collect interaction data for improvements</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Global Settings</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Gordon AI Channel Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Gordon AI Channel Insights</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    AI-powered recommendations for optimizing channel performance
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Info className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">High Engagement on GitHub PRs</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Gordon's proactive suggestions on GitHub PRs have a 89% acceptance rate. Consider enabling
                          similar proactive features on other development channels like VS Code.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Not Now
                          </Button>
                          <Button size="sm">Enable Proactive Mode</Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Slack Channel Underutilized</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The Slack channel is configured but has low usage. Consider activating it and promoting
                          Gordon's capabilities to your team, or enabling proactive notifications for important events.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Keep Inactive
                          </Button>
                          <Button size="sm">Activate & Promote</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* MCP Servers Tab */}
          {activeTab === "mcpservers" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">MCP Servers</h1>
                  <p className="text-muted-foreground">
                    Configure Model Context Protocol servers that Gordon can access for enhanced capabilities.
                  </p>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add MCP Server
                </Button>
              </div>

              {/* MCP Status Overview */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active MCPs</CardTitle>
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">6 healthy, 2 need attention</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">15,847</div>
                    <p className="text-xs text-muted-foreground">+24% from last week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Available Tools</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47</div>
                    <p className="text-xs text-muted-foreground">Across all MCPs</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0.8s</div>
                    <p className="text-xs text-muted-foreground">Across all servers</p>
                  </CardContent>
                </Card>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search MCP servers..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Servers</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="error">Needs Attention</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* MCP Servers Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Configured MCP Servers</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Manage Model Context Protocol servers and their access permissions
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>MCP Server</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Tools</TableHead>
                        <TableHead>Channels</TableHead>
                        <TableHead>Teams/Users</TableHead>
                        <TableHead>Usage (7d)</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">GitHub</div>
                              <div className="text-sm text-muted-foreground">Repository management & code analysis</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              12 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Desktop
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              CLI
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">All teams</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={78} className="w-16 h-2" />
                            <span className="text-sm">4,231</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                              <FileText className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Atlassian</div>
                              <div className="text-sm text-muted-foreground">Jira & Confluence integration</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              8 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Desktop
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Slack
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">Engineering, Product</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={45} className="w-16 h-2" />
                            <span className="text-sm">1,892</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                                <span className="text-black text-xs font-bold">N</span>
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">Notion</div>
                              <div className="text-sm text-muted-foreground">Knowledge base & documentation</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              6 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Desktop
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              VS Code
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">All teams</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={62} className="w-16 h-2" />
                            <span className="text-sm">2,847</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                              <MessageSquare className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Slack</div>
                              <div className="text-sm text-muted-foreground">Team communication & workflow</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              9 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Slack
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">Engineering, DevOps</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={34} className="w-16 h-2" />
                            <span className="text-sm">1,456</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                              <CreditCard className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Salesforce</div>
                              <div className="text-sm text-muted-foreground">CRM & customer data</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Limited Access
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              5 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">Sales team only</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={12} className="w-16 h-2" />
                            <span className="text-sm">234</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                              <Terminal className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Docker</div>
                              <div className="text-sm text-muted-foreground">Container management & registry</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              15 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Desktop
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              CLI
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              VS Code
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">All teams</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={89} className="w-16 h-2" />
                            <span className="text-sm">5,892</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                              <ShieldCheck className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Docker Scout</div>
                              <div className="text-sm text-muted-foreground">Security & vulnerability scanning</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              7 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Desktop
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              CLI
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              GitHub
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">DevOps, Security</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={56} className="w-16 h-2" />
                            <span className="text-sm">1,234</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Manage Access</DropdownMenuItem>
                              <DropdownMenuItem>View Tools</DropdownMenuItem>
                              <DropdownMenuItem>Test Connection</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                              <FileText className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Docker Hub Insights</div>
                              <div className="text-sm text-muted-foreground">Registry analytics & recommendations</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            Error
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="secondary" className="text-xs">
                              4 tools
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">
                              Desktop
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Web
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">DevOps team</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={0} className="w-16 h-2" />
                            <span className="text-sm">0</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Configure</DropdownMenuItem>
                              <DropdownMenuItem>Retry Connection</DropdownMenuItem>
                              <DropdownMenuItem>View Logs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Available MCPs and Access Management */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Available MCP Servers</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Popular MCP servers from Docker Hub that you can add
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Microsoft Teams</div>
                            <div className="text-sm text-muted-foreground">Team collaboration & meetings</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Add
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Linear</div>
                            <div className="text-sm text-muted-foreground">Issue tracking & project management</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Add
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">GitLab</div>
                            <div className="text-sm text-muted-foreground">DevOps platform & CI/CD</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Add
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Terminal className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Kubernetes</div>
                            <div className="text-sm text-muted-foreground">Container orchestration</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Access Management</CardTitle>
                    <p className="text-sm text-muted-foreground">Configure team and user access to MCP servers</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="default-access">Default Access Level</Label>
                      <Select defaultValue="team-based">
                        <SelectTrigger id="default-access">
                          <SelectValue placeholder="Select default access" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-users">All Users</SelectItem>
                          <SelectItem value="team-based">Team-based</SelectItem>
                          <SelectItem value="admin-only">Admin Only</SelectItem>
                          <SelectItem value="explicit">Explicit Permission</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="audit-logging">Audit Logging</Label>
                      <Select defaultValue="detailed">
                        <SelectTrigger id="audit-logging">
                          <SelectValue placeholder="Select logging level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                          <SelectItem value="full">Full Debug</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Rate Limiting</Label>
                        <p className="text-sm text-muted-foreground">Limit requests per user/team</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cross-MCP Data Sharing</Label>
                        <p className="text-sm text-muted-foreground">Allow MCPs to share context</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-discovery</Label>
                        <p className="text-sm text-muted-foreground">Automatically detect new MCP servers</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Access Settings</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Gordon AI MCP Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Gordon AI MCP Insights</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    AI-powered recommendations for optimizing your MCP server configuration
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Docker Hub Insights Connection Issue</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The Docker Hub Insights MCP server has been failing for 2 hours. This appears to be due to an
                          API rate limit. Gordon recommends upgrading your Docker Hub plan or implementing request
                          throttling.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Ignore
                          </Button>
                          <Button size="sm">Configure Throttling</Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Info className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">High Usage on GitHub MCP</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The GitHub MCP server is your most used integration with 4,231 requests this week. Consider
                          enabling it on additional channels like Slack to maximize its value across your team.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Not Now
                          </Button>
                          <Button size="sm">Enable on Slack</Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Salesforce Access Optimization</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Salesforce MCP is currently limited to the Sales team only, but Gordon has detected DevOps
                          queries that could benefit from customer context. Consider expanding access with appropriate
                          permissions.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">
                            Keep Restricted
                          </Button>
                          <Button size="sm">Review Access</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Configure your Docker Gordon AI agent settings.</p>
              </div>

              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="ai">AI Configuration</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" defaultValue="Acme Corporation" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Admin Email</Label>
                        <Input id="admin-email" defaultValue="admin@acmecorp.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                            <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                            <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                            <SelectItem value="cet">CET (Central European Time)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="notifications">Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications for important events
                          </p>
                        </div>
                        <Switch
                          id="notifications"
                          checked={notificationsEnabled}
                          onCheckedChange={setNotificationsEnabled}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="ai" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="auto-scaling">Auto-scaling</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow Gordon AI to automatically scale resources
                          </p>
                        </div>
                        <Switch
                          id="auto-scaling"
                          checked={autoScalingEnabled}
                          onCheckedChange={setAutoScalingEnabled}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="debug-mode">Debug Mode</Label>
                          <p className="text-sm text-muted-foreground">Enable detailed logging for troubleshooting</p>
                        </div>
                        <Switch id="debug-mode" checked={debugModeEnabled} onCheckedChange={setDebugModeEnabled} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ai-model">AI Model</Label>
                        <Select defaultValue="gpt4">
                          <SelectTrigger id="ai-model">
                            <SelectValue placeholder="Select AI model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gpt4">GPT-4 (Recommended)</SelectItem>
                            <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
                            <SelectItem value="claude">Claude 3 Opus</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="response-style">Response Style</Label>
                        <Select defaultValue="balanced">
                          <SelectTrigger id="response-style">
                            <SelectValue placeholder="Select response style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="concise">Concise</SelectItem>
                            <SelectItem value="balanced">Balanced</SelectItem>
                            <SelectItem value="detailed">Detailed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline">Reset to Defaults</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Security Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified about security vulnerabilities</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Performance Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified about performance issues</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>System Updates</Label>
                          <p className="text-sm text-muted-foreground">Get notified about system updates</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Weekly Reports</Label>
                          <p className="text-sm text-muted-foreground">Receive weekly usage and performance reports</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="billing" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Current Plan</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge>Pro</Badge>
                              <p className="text-sm text-muted-foreground">$99/month</p>
                            </div>
                          </div>
                          <Button variant="outline">Change Plan</Button>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Next billing date</span>
                            <span className="font-medium">June 15, 2025</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Payment method</span>
                            <span className="font-medium">Visa ending in 4242</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Usage This Month</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>API Queries</span>
                              <span>8,432 / 10,000</span>
                            </div>
                            <Progress value={84} className="h-2 mt-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Container Management</span>
                              <span>24 / 50</span>
                            </div>
                            <Progress value={48} className="h-2 mt-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Storage</span>
                              <span>45 GB / 100 GB</span>
                            </div>
                            <Progress value={45} className="h-2 mt-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        View Invoices
                      </Button>
                      <Button className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Update Payment Method
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
