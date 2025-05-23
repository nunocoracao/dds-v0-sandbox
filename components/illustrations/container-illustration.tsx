import { cn } from "@/lib/utils"

type ContainerIllustrationProps = {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function ContainerIllustration({
  className,
  primaryColor = "var(--primary)",
  secondaryColor = "var(--secondary)",
  size = "md",
}: ContainerIllustrationProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64",
  }

  // This is a placeholder SVG - replace with your actual Docker container illustration
  return (
    <div className={cn(sizeClasses[size], className)}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="40" y="60" width="120" height="80" rx="4" fill={primaryColor} fillOpacity="0.2" />
        <rect x="40" y="60" width="120" height="20" rx="4" fill={primaryColor} />
        <circle cx="50" cy="70" r="4" fill="white" />
        <circle cx="60" cy="70" r="4" fill="white" />
        <circle cx="70" cy="70" r="4" fill="white" />
        <rect x="50" y="90" width="100" height="10" rx="2" fill={secondaryColor} />
        <rect x="50" y="110" width="80" height="10" rx="2" fill={secondaryColor} />
      </svg>
    </div>
  )
}
