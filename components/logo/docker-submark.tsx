import { cn } from "@/lib/utils"
import Image from "next/image"

type DockerSubmarkProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "black" | "white"
}

export function DockerSubmark({ className, size = "md", variant = "primary" }: DockerSubmarkProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const submarkSrc = {
    primary: "/components/sub-marks/subMarkPrimary.svg",
    black: "/components/sub-marks/subMarkBlack.svg",
    white: "/components/sub-marks/subMarkWhite.svg",
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <Image
        src={submarkSrc[variant] || "/placeholder.svg"}
        alt="Docker Submark"
        width={64}
        height={64}
        className="w-full h-full"
      />
    </div>
  )
}
