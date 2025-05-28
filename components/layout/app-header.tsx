"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Palette, Code, Settings } from "lucide-react"

// Single navigation component with shared state
export function AppNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const NavigationContent = () => (
    <SheetContent side="left" className="w-80">
      <SheetHeader>
        <SheetTitle className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">v0</span>
          </div>
          <span>v0.dev + DDS</span>
          <Badge variant="outline" className="ml-2">
            Beta
          </Badge>
        </SheetTitle>
        <SheetDescription>Navigate through the Docker Design System onboarding</SheetDescription>
      </SheetHeader>
      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Projects</h4>
          <nav className="space-y-1">
            <div className="flex items-center justify-between px-3 py-2 bg-muted rounded-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">ai-design-system</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            </div>
            <a href="#" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
              docker-dashboard
            </a>
            <a href="#" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
              container-ui
            </a>
          </nav>
        </div>

        <div className="space-y-2 pt-4">
          <h4 className="font-medium text-sm">Resources</h4>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <HelpCircle className="h-4 w-4" />
              <span>Documentation</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <Palette className="h-4 w-4" />
              <span>Design System</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <Code className="h-4 w-4" />
              <span>API Reference</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>
    </SheetContent>
  )

  return { isOpen, setIsOpen, NavigationContent }
}

export function AppHeader() {
  const { isOpen, setIsOpen, NavigationContent } = AppNavigation()

  return (
    <header className="h-20 flex items-center justify-between px-6">
      {/* Left side - Hamburger menu */}
      <div className="flex items-center gap-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <NavigationContent />
        </Sheet>

        {/* White submark and chip */}
        <div className="flex items-center gap-3">
          <img src="/sub-marks/subMarkWhite.svg" alt="Docker" className="h-8" />
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 flex items-center h-5">
            <span className="text-white text-xs font-medium leading-none">v0.dev+DDS</span>
          </div>
        </div>
      </div>

      {/* Right side - Future actions */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Documentation
        </Button>
        <Button size="sm">Open v0 Chat</Button>
      </div>
    </header>
  )
}

// Export the navigation trigger for use in showcase cards
export function NavigationTrigger() {
  const { isOpen, setIsOpen, NavigationContent } = AppNavigation()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <NavigationContent />
    </Sheet>
  )
}
