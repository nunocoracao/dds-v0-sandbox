import { cn } from "@/lib/utils"

type DockerLogoProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "black" | "white"
}

export function DockerLogo({ className, size = "md", variant = "primary" }: DockerLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  // Using the actual file paths from the repo structure
  const logoSrc = {
    primary: "/components/logo/LogoPrimary.svg",
    black: "/components/logo/LogoBlack.svg",
    white: "/components/logo/LogoWhite.svg",
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <img src={logoSrc[variant] || "/placeholder.svg"} alt="Docker Logo" className="w-full h-full" />
    </div>
  )
}
