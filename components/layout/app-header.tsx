"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Menu, ExternalLink, Github, Code, Palette, BookOpen, Rocket, MessageSquarePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

// Context for shared navigation state
const NavigationContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
} | null>(null)

// Provider component
export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      {/* Single Sheet instance */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-[350px] p-0">
          <ScrollArea className="h-full">
            <div className="p-6">
              <SheetHeader className="text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">v0</span>
                  </div>
                  <SheetTitle className="text-xl">v0.dev + DDS</SheetTitle>
                  <Badge variant="outline" className="ml-auto">
                    Beta
                  </Badge>
                </div>
              </SheetHeader>

              <Separator className="my-6" />

              <div className="space-y-6">
                {/* Active Project */}
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">Active Project</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium">ai-design-system</span>
                      </div>
                      <Badge variant="secondary" size="sm">
                        Active
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Resources</h3>
                  <div className="grid gap-2">
                    <Button variant="ghost" className="justify-start h-9" asChild>
                      <a href="https://v0.dev" target="_blank" rel="noopener noreferrer">
                        <Rocket className="mr-2 h-4 w-4" />
                        <span>v0.dev Platform</span>
                        <ExternalLink className="ml-auto h-3 w-3 opacity-60" />
                      </a>
                    </Button>
                    <Button variant="ghost" className="justify-start h-9" asChild>
                      <a href="https://github.com/docker/design" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        <span>Docker Design GitHub</span>
                        <ExternalLink className="ml-auto h-3 w-3 opacity-60" />
                      </a>
                    </Button>
                    <Button variant="ghost" className="justify-start h-9" asChild>
                      <a href="#docs">
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>Documentation</span>
                      </a>
                    </Button>
                    <Button variant="ghost" className="justify-start h-9" asChild>
                      <a href="#components">
                        <Palette className="mr-2 h-4 w-4" />
                        <span>Design System</span>
                      </a>
                    </Button>
                    <Button variant="ghost" className="justify-start h-9" asChild>
                      <a href="#api">
                        <Code className="mr-2 h-4 w-4" />
                        <span>API Reference</span>
                      </a>
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Invitation Card */}
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Join the Docker Design Team</CardTitle>
                    <CardDescription>Help build the next generation of design tools</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground pb-2">
                    This is a proof of concept showcasing the integration of v0.dev with the Docker Design System. We're
                    exploring new ways to create powerful, consistent interfaces.
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button size="sm" className="w-full" asChild>
                      <a href="https://www.docker.com/careers/" target="_blank" rel="noopener noreferrer">
                        <MessageSquarePlus className="mr-2 h-4 w-4" />
                        Get Involved
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Version Footer */}
                <div className="pt-4 text-center">
                  <div className="inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    v0.1.0-alpha
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">&copy; {new Date().getFullYear()} Docker, Inc.</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </NavigationContext.Provider>
  )
}

// Hook to use navigation
function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider")
  }
  return context
}

// Navigation trigger button - just a button that opens the sheet
export function NavigationTrigger() {
  const { setIsOpen } = useNavigation()

  return (
    <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
      <Menu className="h-4 w-4" />
    </Button>
  )
}

// App header component
export function AppHeader() {
  const { setIsOpen } = useNavigation()

  return (
    <header className="h-20 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Open menu</span>
        </Button>

        <div className="flex items-center gap-3">
          <img src="/sub-marks/subMarkWhite.svg" alt="Docker" className="h-8" />
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 flex items-center h-5">
            <span className="text-white text-xs font-medium leading-none">v0.dev+DDS</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Documentation
        </Button>
        <Button size="sm">Open v0 Chat</Button>
      </div>
    </header>
  )
}
