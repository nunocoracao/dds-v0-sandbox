"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

interface SheetProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root> {}

const Sheet = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Root>, SheetProps>(({ ...props }, ref) => 
  React.createElement(SheetPrimitive.Root, { ...props, ref: ref as React.Ref<HTMLDivElement> })
)
Sheet.displayName = "Sheet"

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => 
  React.createElement(SheetPrimitive.Overlay, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "fixed inset-0 z-50 bg-[var(--colorGrey900)]/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )
  })
)
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 border border-[var(--colorGrey200)] font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)]",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top rounded-b-[var(--borderRadiusLg)]",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom rounded-t-[var(--borderRadiusLg)]",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm rounded-r-[var(--borderRadiusLg)]",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm rounded-l-[var(--borderRadiusLg)]",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => 
  React.createElement(SheetPortal, null,
    React.createElement(SheetOverlay),
    React.createElement(SheetPrimitive.Content, {
      ...props,
      ref: ref as React.Ref<HTMLDivElement>,
      className: cn(sheetVariants({ side }), className)
    },
      children,
      React.createElement(SheetPrimitive.Close, {
        className: "absolute right-4 top-4 rounded-[var(--borderRadiusSm)] opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--colorBlue500)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--colorGrey100)]"
      },
        React.createElement(X, { className: "h-4 w-4" }),
        React.createElement("span", { className: "sr-only" }, "Close")
      )
    )
  )
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => 
  React.createElement("div", {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  })
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => 
  React.createElement("div", {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  })
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => 
  React.createElement(SheetPrimitive.Title, {
    ...props,
    ref: ref as React.Ref<HTMLHeadingElement>,
    className: cn("text-lg font-semibold text-[var(--colorGrey900)] font-[var(--fontFamiliesInter)]", className)
  })
)
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => 
  React.createElement(SheetPrimitive.Description, {
    ...props,
    ref: ref as React.Ref<HTMLParagraphElement>,
    className: cn("text-sm text-[var(--colorGrey600)] font-[var(--fontFamiliesInter)]", className)
  })
)
SheetDescription.displayName = SheetPrimitive.Description.displayName

export default Sheet
