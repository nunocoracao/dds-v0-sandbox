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
    <div className={cn(sizeClasses[size], className, "relative")}>
      {/* Light mode submark */}
      <img src="/submark-primary.svg" alt="Docker Submark" className="w-full h-full object-contain dark:hidden" />

      {/* Dark mode submark */}
      <img src="/submark-white.svg" alt="Docker Submark" className="w-full h-full object-contain hidden dark:block" />
    </div>
  )
}
