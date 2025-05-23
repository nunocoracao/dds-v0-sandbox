import { cn } from "@/lib/utils"
import Image from "next/image"

type AppIconProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "secondary" | "tertiary"
}

export function AppIcon({ className, size = "md", variant = "primary" }: AppIconProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const iconSrc = {
    primary: "/components/app icons/Primary.svg",
    secondary: "/components/app icons/Secondary.svg",
    tertiary: "/components/app icons/Tertiary.svg",
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <Image
        src={iconSrc[variant] || "/placeholder.svg"}
        alt={`Docker App Icon (${variant})`}
        width={64}
        height={64}
        className="w-full h-full"
      />
    </div>
  )
}
