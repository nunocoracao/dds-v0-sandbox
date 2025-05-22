"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {}

const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, ToastProps>(({ ...props }, ref) => 
  React.createElement(ToastPrimitives.Root, { ...props, ref: ref as React.Ref<HTMLLIElement> })
)
Toast.displayName = "Toast"
export default Toast
