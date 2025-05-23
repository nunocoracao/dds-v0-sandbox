import { cn } from "@/lib/utils"

type DockerSubmarkProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function DockerSubmark({ className, size = "md" }: DockerSubmarkProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      {/* Light mode - show primary submark */}
      <img src="/components/sub-marks/subMarkPrimary.svg" alt="Docker Submark" className="w-full h-full dark:hidden" />
      {/* Dark mode - show white submark */}
      <img
        src="/components/sub-marks/subMarkWhite.svg"
        alt="Docker Submark"
        className="w-full h-full hidden dark:block"
      />
    </div>
  )
}
