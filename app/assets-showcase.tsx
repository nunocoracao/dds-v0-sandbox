"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DockerLogo } from "@/components/logo/docker-logo"
import { DockerSubmark } from "@/components/logo/docker-submark"
import { ProductIllustration } from "@/components/illustrations/product-illustration"
import { AppIcon } from "@/components/icons/app-icon"
import { Moon, Sun } from "lucide-react"

export default function AssetsShowcase() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Docker Logos</CardTitle>
              <CardDescription>Theme-aware Docker branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Small</h3>
                <DockerLogo size="sm" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Medium</h3>
                <DockerLogo size="md" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Large</h3>
                <DockerLogo size="lg" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Extra Large</h3>
                <DockerLogo size="xl" />
              </div>
            </CardContent>
          </Card>

          {/* Submark Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Docker Submarks</CardTitle>
              <CardDescription>Compact branding elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Small</h3>
                <DockerSubmark size="sm" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Medium</h3>
                <DockerSubmark size="md" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Large</h3>
                <DockerSubmark size="lg" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Extra Large</h3>
                <DockerSubmark size="xl" />
              </div>
            </CardContent>
          </Card>

          {/* App Icons Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>App Icons</CardTitle>
              <CardDescription>Docker application icons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Primary</h3>
                <div className="flex items-center gap-4">
                  <AppIcon variant="primary" size="sm" />
                  <AppIcon variant="primary" size="md" />
                  <AppIcon variant="primary" size="lg" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Secondary</h3>
                <div className="flex items-center gap-4">
                  <AppIcon variant="secondary" size="sm" />
                  <AppIcon variant="secondary" size="md" />
                  <AppIcon variant="secondary" size="lg" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Tertiary</h3>
                <div className="flex items-center gap-4">
                  <AppIcon variant="tertiary" size="sm" />
                  <AppIcon variant="tertiary" size="md" />
                  <AppIcon variant="tertiary" size="lg" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Large Illustrations */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Large Illustrations</CardTitle>
              <CardDescription>High-impact product illustrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <ProductIllustration type="folder-docs" size="lg" />
                  <p className="mt-2 text-sm font-medium">Folder with Docs</p>
                </div>
                <div className="flex flex-col items-center">
                  <ProductIllustration type="list-users" size="lg" />
                  <p className="mt-2 text-sm font-medium">List with Users</p>
                </div>
                <div className="flex flex-col items-center">
                  <ProductIllustration type="mock-panels-lg" size="lg" />
                  <p className="mt-2 text-sm font-medium">Mock Panels (Large)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medium Illustrations */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Medium Illustrations</CardTitle>
              <CardDescription>Versatile medium-sized graphics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <ProductIllustration type="list-panel" size="md" />
                  <p className="mt-2 text-sm font-medium">List Panel</p>
                </div>
                <div className="flex flex-col items-center">
                  <ProductIllustration type="mock-panels" size="md" />
                  <p className="mt-2 text-sm font-medium">Mock Panels</p>
                </div>
                <div className="flex flex-col items-center">
                  <ProductIllustration type="option-select" size="md" />
                  <p className="mt-2 text-sm font-medium">Option Select</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Small Illustrations */}
          <Card>
            <CardHeader>
              <CardTitle>Small Illustrations</CardTitle>
              <CardDescription>Compact visual elements</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="flex flex-col items-center">
                <ProductIllustration type="run-image" size="sm" />
                <p className="mt-2 text-sm font-medium">Run Image</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo Variants */}
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

          {/* Submark Variants */}
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
        </div>
      </div>
    </div>
  )
}
