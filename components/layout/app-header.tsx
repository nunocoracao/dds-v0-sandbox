import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function AppHeader() {
  return (
    <header className="h-20 flex items-center justify-between px-6">
      {/* Left side - Hamburger menu */}
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Navigate through the Docker Design System onboarding</SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Onboarding Steps</h4>
                <nav className="space-y-1">
                  <a href="#step-1" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                    Step 1: Welcome
                  </a>
                  <a href="#step-2" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                    Step 2: Learn v0
                  </a>
                  <a href="#step-3" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                    Step 3: DDS Integration
                  </a>
                  <a href="#step-4" className="block px-3 py-2 text-sm rounded-md hover:bg-accent">
                    Step 4: Get Started
                  </a>
                </nav>
              </div>
            </div>
          </SheetContent>
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
