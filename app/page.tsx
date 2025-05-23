"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DockerLogo } from "@/components/logo/docker-logo"
import { DockerSubmark } from "@/components/logo/docker-submark"
import { ProductIllustration } from "@/components/illustrations/product-illustration"
import { AppIcon } from "@/components/icons/app-icon"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { Download, Github, Moon, Plus, Sun } from "lucide-react"

export default function ComponentShowcase() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`min-h-screen bg-background p-6 ${theme === "dark" ? "dark" : ""}`}>
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <DockerLogo size="lg" />
            <h1 className="text-3xl font-bold">Docker Design System</h1>
          </div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* Logo Showcase */}
          <Card className="row-span-1">
            <CardHeader>
              <CardTitle>Docker Logos</CardTitle>
              <CardDescription>Theme-aware Docker branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <DockerLogo size="sm" />
                <DockerLogo size="md" />
                <DockerLogo size="lg" />
                <DockerLogo size="xl" />
              </div>
              <div className="flex items-center gap-4">
                <DockerSubmark size="sm" />
                <DockerSubmark size="md" />
                <DockerSubmark size="lg" />
                <DockerSubmark size="xl" />
              </div>
            </CardContent>
          </Card>

          {/* App Icons Showcase */}
          <Card className="row-span-1">
            <CardHeader>
              <CardTitle>App Icons</CardTitle>
              <CardDescription>Docker application icons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <AppIcon variant="primary" size="lg" />
                <AppIcon variant="secondary" size="lg" />
                <AppIcon variant="tertiary" size="lg" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <AppIcon variant="primary" size="sm" />
                <AppIcon variant="secondary" size="sm" />
                <AppIcon variant="tertiary" size="sm" />
              </div>
            </CardContent>
          </Card>

          {/* Large Illustrations */}
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle>Large Illustrations</CardTitle>
              <CardDescription>High-impact product illustrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <ProductIllustration type="folder-docs" size="lg" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Document Management</h3>
                <p className="text-sm text-muted-foreground">Organize your Docker files and documentation</p>
              </div>
              <div className="flex justify-center">
                <ProductIllustration type="list-users" size="lg" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">Share and collaborate on container projects</p>
              </div>
            </CardContent>
          </Card>

          {/* Container Management Card */}
          <Card className="row-span-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <DockerSubmark size="md" />
                <div>
                  <CardTitle>Container Management</CardTitle>
                  <CardDescription>Manage your Docker containers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <ProductIllustration type="mock-panels-lg" size="lg" />
              </div>
              <p className="text-sm text-muted-foreground">
                View and manage all your running containers from a unified dashboard interface.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Running Containers</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Stopped Containers</span>
                  <span className="text-sm font-medium">3</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <AppIcon variant="primary" size="sm" className="mr-2" />
                View All Containers
              </Button>
            </CardFooter>
          </Card>

          {/* Medium Illustrations */}
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle>Medium Illustrations</CardTitle>
              <CardDescription>Versatile medium-sized graphics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <ProductIllustration type="list-panel" size="md" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">List Management</h3>
                <p className="text-sm text-muted-foreground">Organize and filter your containers</p>
              </div>
              <div className="flex justify-center">
                <ProductIllustration type="mock-panels-md" size="md" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Dashboard Panels</h3>
                <p className="text-sm text-muted-foreground">Customizable dashboard views</p>
              </div>
              <div className="flex justify-center">
                <ProductIllustration type="option-select" size="md" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Configuration</h3>
                <p className="text-sm text-muted-foreground">Easy option selection interface</p>
              </div>
            </CardContent>
          </Card>

          {/* Docker Hub Card */}
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AppIcon variant="secondary" size="sm" />
                <CardTitle>Docker Hub</CardTitle>
              </div>
              <CardDescription className="text-blue-100">Find and share container images</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <ProductIllustration type="list-users" size="md" />
              </div>
              <p className="text-sm">Discover millions of container images from the Docker community.</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                <Github className="mr-2 h-4 w-4" /> Browse Images
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AppIcon variant="tertiary" size="sm" />
                <div>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common Docker operations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <ProductIllustration type="run-image" size="md" />
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" /> Run New Container
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" /> Pull Image
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* All Logo Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Logo Variants</CardTitle>
              <CardDescription>All available logo styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">PRIMARY LOGO</p>
                <div className="flex justify-center p-4 bg-muted rounded">
                  <img src="/components/logo/LogoPrimary.svg" alt="Primary Logo" className="h-8" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">BLACK LOGO</p>
                <div className="flex justify-center p-4 bg-muted rounded">
                  <img src="/components/logo/LogoBlack.svg" alt="Black Logo" className="h-8" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">WHITE LOGO</p>
                <div className="flex justify-center p-4 bg-gray-800 rounded">
                  <img src="/components/logo/LogoWhite.svg" alt="White Logo" className="h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* All Submark Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Submark Variants</CardTitle>
              <CardDescription>Compact branding elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">PRIMARY SUBMARK</p>
                <div className="flex justify-center p-4 bg-muted rounded">
                  <img src="/components/sub-marks/subMarkPrimary.svg" alt="Primary Submark" className="h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">BLACK SUBMARK</p>
                <div className="flex justify-center p-4 bg-muted rounded">
                  <img src="/components/sub-marks/subMarkBlack.svg" alt="Black Submark" className="h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">WHITE SUBMARK</p>
                <div className="flex justify-center p-4 bg-gray-800 rounded">
                  <img src="/components/sub-marks/subMarkWhite.svg" alt="White Submark" className="h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Button Showcase */}
          <Card className="row-span-1">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Interactive button elements</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          {/* Input Showcase */}
          <Card className="row-span-1">
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Form input elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
              <div className="flex items-center space-x-2">
                <Input placeholder="With button" />
                <Button>Send</Button>
              </div>
            </CardContent>
          </Card>

          {/* Dialog Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialog windows</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a dialog window that appears over the page content.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Dialogs are perfect for important notifications or actions that require user attention.</p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>

      <Toaster />
    </div>
  )
}
