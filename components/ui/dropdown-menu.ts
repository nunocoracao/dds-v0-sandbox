"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

interface DropdownMenuProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {}

const DropdownMenu = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Root>, DropdownMenuProps>(({ ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.Root, { ...props, ref: ref as React.Ref<HTMLDivElement> })
)
DropdownMenu.displayName = "DropdownMenu"
export default DropdownMenu

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.SubTrigger, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-[var(--borderRadiusSm)] px-2 py-1.5 text-sm font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] outline-none focus:bg-[var(--colorGrey100)] data-[state=open]:bg-[var(--colorGrey100)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )
  },
    children,
    React.createElement(ChevronRight, { className: "ml-auto" })
  )
)
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.SubContent, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-[var(--borderRadiusMd)] border border-[var(--colorGrey200)] bg-white p-1 text-[var(--colorGrey900)] shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    )
  })
)
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.Portal, null,
    React.createElement(DropdownMenuPrimitive.Content, {
      ...props,
      ref: ref as React.Ref<HTMLDivElement>,
      sideOffset,
      className: cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-[var(--borderRadiusMd)] border border-[var(--colorGrey200)] bg-white p-1 text-[var(--colorGrey900)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )
    })
  )
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.Item, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-[var(--borderRadiusSm)] px-2 py-1.5 text-sm font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] outline-none transition-colors focus:bg-[var(--colorGrey100)] focus:text-[var(--colorBlue500)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )
  })
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.CheckboxItem, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-[var(--borderRadiusSm)] py-1.5 pl-8 pr-2 text-sm font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] outline-none transition-colors focus:bg-[var(--colorGrey100)] focus:text-[var(--colorBlue500)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked
  },
    React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
      React.createElement(DropdownMenuPrimitive.ItemIndicator, null,
        React.createElement(Check, { className: "h-4 w-4" })
      )
    ),
    children
  )
)
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.RadioItem, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-[var(--borderRadiusSm)] py-1.5 pl-8 pr-2 text-sm font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] outline-none transition-colors focus:bg-[var(--colorGrey100)] focus:text-[var(--colorBlue500)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )
  },
    React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
      React.createElement(DropdownMenuPrimitive.ItemIndicator, null,
        React.createElement(Circle, { className: "h-2 w-2 fill-current" })
      )
    ),
    children
  )
)
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.Label, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold text-[var(--colorGrey700)] font-[var(--fontFamiliesInter)]",
      inset && "pl-8",
      className
    )
  })
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => 
  React.createElement(DropdownMenuPrimitive.Separator, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn("-mx-1 my-1 h-px bg-[var(--colorGrey200)]", className)
  })
)
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => 
  React.createElement("span", {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  })
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
