import { cn } from "@/lib/utils"

type ProductIllustrationType =
  | "folder-docs"
  | "list-users"
  | "mock-panels-lg"
  | "list-panel"
  | "mock-panels"
  | "option-select"
  | "run-image"

type ProductIllustrationProps = {
  className?: string
  size?: "sm" | "md" | "lg"
  type: ProductIllustrationType
}

export function ProductIllustration({ className, size = "md", type }: ProductIllustrationProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  // Using the actual file paths from the repo structure
  const illustrationSrc = {
    "folder-docs": "/components/illustrations/Product Illustration/Lg/Folder w Docs.png",
    "list-users": "/components/illustrations/Product Illustration/Lg/List w Users.png",
    "mock-panels-lg": "/components/illustrations/Product Illustration/Lg/Mock Panels.png",
    "list-panel": "/components/illustrations/Product Illustration/Md/List Panel.png",
    "mock-panels": "/components/illustrations/Product Illustration/Md/Mock Panels.png",
    "option-select": "/components/illustrations/Product Illustration/Md/Option Select.png",
    "run-image": "/components/illustrations/Product Illustration/Sm/Run Image.png",
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <img
        src={illustrationSrc[type] || "/placeholder.svg"}
        alt="Product Illustration"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
