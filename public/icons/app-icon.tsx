import { cn } from "@/lib/utils"

type AppIconProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "secondary" | "tertiary"
}

export function AppIcon({ className, size = "md", variant = "primary" }: AppIconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  }

  const getIconPath = () => {
    switch (variant) {
      case "primary":
        return "/app-icons/Primary.svg"
      case "secondary":
        return "/app-icons/Secondary.svg"
      case "tertiary":
        return "/app-icons/Tertiary.svg"
      default:
        return "/app-icons/Primary.svg"
    }
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <img
        src={getIconPath() || "/placeholder.svg"}
        alt={`Docker App Icon ${variant}`}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
