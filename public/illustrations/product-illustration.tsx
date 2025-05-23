import { cn } from "@/lib/utils"

type ProductIllustrationType =
  | "folder-docs"
  | "list-users"
  | "mock-panels-lg"
  | "mock-panels-md"
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

  const getIllustrationPath = () => {
    switch (type) {
      case "folder-docs":
        return "/illustrations/lg/folder-w-docs.png"
      case "list-users":
        return "/illustrations/lg/list-w-users.png"
      case "mock-panels-lg":
        return "/illustrations/lg/mock-panels.png"
      case "mock-panels-md":
        return "/illustrations/md/mock-panels.png"
      case "list-panel":
        return "/illustrations/md/list-panel.png"
      case "option-select":
        return "/illustrations/md/option-select.png"
      case "run-image":
        return "/illustrations/sm/run-image.png"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <img
        src={getIllustrationPath() || "/placeholder.svg"}
        alt={`Docker ${type} illustration`}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
