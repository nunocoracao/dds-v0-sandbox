import { cn } from "@/lib/utils"

type ProductIllustrationType =
  | "folder-docs"
  | "list-users"
  | "mock-panels"
  | "list-panel"
  | "option-select"
  | "run-image"

type ProductIllustrationProps = {
  type: ProductIllustrationType
  className?: string
  size?: "sm" | "md" | "lg"
}

export function ProductIllustration({ type, className, size = "md" }: ProductIllustrationProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  const illustrationPath = `/illustration-${type}.png`

  return (
    <div className={cn(sizeClasses[size], className, "relative")}>
      <img
        src={illustrationPath || "/placeholder.svg"}
        alt={`Docker ${type} illustration`}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
