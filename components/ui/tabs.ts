"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {}

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>(({ ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} {...props} />
))
Tabs.displayName = "Tabs"
export default Tabs
