"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}

const Select = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Root>, SelectProps>(({ ...props }, ref) => 
  React.createElement(SelectPrimitive.Root, { ...props, ref: ref as React.Ref<HTMLDivElement> })
)
Select.displayName = "Select"
export default Select

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => 
  React.createElement(SelectPrimitive.Trigger, {
    ...props,
    ref: ref as React.Ref<HTMLButtonElement>,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-[var(--borderRadiusMd)] border border-[var(--colorGrey300)] bg-white px-3 py-2 text-sm font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] ring-offset-background data-[placeholder]:text-[var(--colorGrey500)] focus:outline-none focus:ring-2 focus:ring-[var(--colorBlue500)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )
  },
    children,
    React.createElement(SelectPrimitive.Icon, { asChild: true },
      React.createElement(ChevronDown, { className: "h-4 w-4 opacity-50" })
    )
  )
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => 
  React.createElement(SelectPrimitive.ScrollUpButton, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )
  },
    React.createElement(ChevronUp, { className: "h-4 w-4" })
  )
)
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => 
  React.createElement(SelectPrimitive.ScrollDownButton, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )
  },
    React.createElement(ChevronDown, { className: "h-4 w-4" })
  )
)
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => 
  React.createElement(SelectPrimitive.Portal, null,
    React.createElement(SelectPrimitive.Content, {
      ...props,
      ref: ref as React.Ref<HTMLDivElement>,
      className: cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-[var(--borderRadiusMd)] border border-[var(--colorGrey300)] bg-white text-[var(--colorGrey900)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    },
      React.createElement(SelectScrollUpButton),
      React.createElement(SelectPrimitive.Viewport, {
        className: cn(
          "p-1 font-[var(--fontFamiliesInter)]",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )
      }, children),
      React.createElement(SelectScrollDownButton)
    )
  )
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => 
  React.createElement(SelectPrimitive.Label, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold text-[var(--colorGrey700)] font-[var(--fontFamiliesInter)]", className)
  })
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => 
  React.createElement(SelectPrimitive.Item, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-[var(--borderRadiusSm)] py-1.5 pl-8 pr-2 text-sm font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] outline-none focus:bg-[var(--colorGrey100)] focus:text-[var(--colorBlue500)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )
  },
    React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
      React.createElement(SelectPrimitive.ItemIndicator, null,
        React.createElement(Check, { className: "h-4 w-4" })
      )
    ),
    React.createElement(SelectPrimitive.ItemText, null, children)
  )
)
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => 
  React.createElement(SelectPrimitive.Separator, {
    ...props,
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn("-mx-1 my-1 h-px bg-[var(--colorGrey200)]", className)
  })
)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
