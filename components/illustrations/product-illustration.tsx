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
        return "/components/illustrations/Product Illustration/Lg/Folder w Docs.png"
      case "list-users":
        return "/components/illustrations/Product Illustration/Lg/List w Users.png"
      case "mock-panels-lg":
        return "/components/illustrations/Product Illustration/Lg/Mock Panels.png"
      case "mock-panels-md":
        return "/components/illustrations/Product Illustration/Md/Mock Panels.png"
      case "list-panel":
        return "/components/illustrations/Product Illustration/Md/List Panel.png"
      case "option-select":
        return "/components/illustrations/Product Illustration/Md/Option Select.png"
      case "run-image":
        return "/components/illustrations/Product Illustration/Sm/Run Image.png"
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
