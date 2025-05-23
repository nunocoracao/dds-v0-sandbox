import { cn } from "@/lib/utils"
import Image from "next/image"

type ProductIllustrationType =
  | "folder-docs"
  | "list-users"
  | "mock-panels"
  | "list-panel"
  | "option-select"
  | "run-image"

type ProductIllustrationProps = {
  className?: string
  size?: "sm" | "md" | "lg"
  type: ProductIllustrationType
}

export function ProductIllustration({ className, size = "md", type }: ProductIllustrationProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  }

  // Map illustration types to their file paths
  const illustrationPaths: Record<ProductIllustrationType, Record<string, string>> = {
    "folder-docs": {
      lg: "/components/illustrations/Product Illustration/Lg/Folder w Docs.png",
      md: "/components/illustrations/Product Illustration/Md/Mock Panels.png", // Fallback
      sm: "/components/illustrations/Product Illustration/Sm/Run Image.png", // Fallback
    },
    "list-users": {
      lg: "/components/illustrations/Product Illustration/Lg/List w Users.png",
      md: "/components/illustrations/Product Illustration/Md/List Panel.png", // Similar fallback
      sm: "/components/illustrations/Product Illustration/Sm/Run Image.png", // Fallback
    },
    "mock-panels": {
      lg: "/components/illustrations/Product Illustration/Lg/Mock Panels.png",
      md: "/components/illustrations/Product Illustration/Md/Mock Panels.png",
      sm: "/components/illustrations/Product Illustration/Sm/Run Image.png", // Fallback
    },
    "list-panel": {
      lg: "/components/illustrations/Product Illustration/Lg/List w Users.png", // Similar fallback
      md: "/components/illustrations/Product Illustration/Md/List Panel.png",
      sm: "/components/illustrations/Product Illustration/Sm/Run Image.png", // Fallback
    },
    "option-select": {
      lg: "/components/illustrations/Product Illustration/Lg/Mock Panels.png", // Fallback
      md: "/components/illustrations/Product Illustration/Md/Option Select.png",
      sm: "/components/illustrations/Product Illustration/Sm/Run Image.png", // Fallback
    },
    "run-image": {
      lg: "/components/illustrations/Product Illustration/Lg/Mock Panels.png", // Fallback
      md: "/components/illustrations/Product Illustration/Md/Mock Panels.png", // Fallback
      sm: "/components/illustrations/Product Illustration/Sm/Run Image.png",
    },
  }

  const imagePath = illustrationPaths[type][size]

  return (
    <div className={cn(sizeClasses[size], className)}>
      <Image
        src={imagePath || "/placeholder.svg"}
        alt={`Docker ${type.replace(/-/g, " ")} illustration`}
        width={size === "lg" ? 256 : size === "md" ? 192 : 128}
        height={size === "lg" ? 256 : size === "md" ? 192 : 128}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
