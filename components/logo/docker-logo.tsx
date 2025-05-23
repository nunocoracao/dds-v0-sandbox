import { cn } from "@/lib/utils"

type DockerLogoProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function DockerLogo({ className, size = "md" }: DockerLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  return (
    <div className={cn(sizeClasses[size], className, "relative")}>
      {/* Light mode logo */}
      <img
        src="/components/logo/LogoPrimary.svg"
        alt="Docker Logo"
        className="w-full h-full object-contain dark:hidden"
      />

      {/* Dark mode logo */}
      <img
        src="/components/logo/LogoWhite.svg"
        alt="Docker Logo"
        className="w-full h-full object-contain hidden dark:block"
      />
    </div>
  )
}
