import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-[var(--borderRadiusMd)] border border-[var(--colorGrey300)] bg-white px-3 py-2 text-base font-[var(--fontFamiliesInter)] text-[var(--colorGrey900)] ring-offset-background placeholder:text-[var(--colorGrey500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--colorBlue500)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
