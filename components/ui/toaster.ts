"use client"

import * as React from "react"

const Toaster = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
Toaster.displayName = "Toaster"
export default Toaster
