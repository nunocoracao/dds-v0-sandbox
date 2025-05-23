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

  const iconSrc = {
    primary: "/components/app icons/Primary.svg",
    secondary: "/components/app icons/Secondary.svg",
    tertiary: "/components/app icons/Tertiary.svg",
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <img src={iconSrc[variant] || "/placeholder.svg"} alt={`Docker App Icon ${variant}`} className="w-full h-full" />
    </div>
  )
}
