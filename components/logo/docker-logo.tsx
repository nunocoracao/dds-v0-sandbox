import { cn } from "@/lib/utils"

type DockerLogoProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "mono" | "outline"
  color?: "primary" | "secondary" | "accent" | "muted" | "foreground"
}

export function DockerLogo({ className, size = "md", variant = "default", color = "primary" }: DockerLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted",
    foreground: "text-foreground",
  }

  // This is a placeholder SVG - replace with your actual Docker logo SVG
  return (
    <div className={cn(sizeClasses[size], colorClasses[color], className)}>
      {variant === "default" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M13.983 6h2.017v2.017h-2.017v-2.017zM10.483 6h2.017v2.017h-2.017v-2.017zM6.983 6h2.017v2.017h-2.017v-2.017zM3.483 6h2.017v2.017h-2.017v-2.017zM6.983 2.5h2.017v2.017h-2.017v-2.017zM13.983 9.5h2.017v2.017h-2.017v-2.017zM10.483 9.5h2.017v2.017h-2.017v-2.017zM6.983 9.5h2.017v2.017h-2.017v-2.017zM3.483 9.5h2.017v2.017h-2.017v-2.017zM10.483 2.5h2.017v2.017h-2.017v-2.017z"
            fill="currentColor"
          />
          <path
            d="M22.5 10.5c0-.469-.123-.937-.37-1.403-.493-.74-1.333-1.333-2.53-1.716l-.863-.246-.246-.863c-.493-1.727-1.333-2.963-3.06-3.703-1.48-.617-3.333-.617-5.06.123-1.727.74-2.963 2.097-3.58 4.07h-.493c-1.48 0-2.717.493-3.703 1.48-.987.987-1.48 2.223-1.48 3.703 0 2.84 2.347 5.187 5.187 5.187h11.603c2.84 0 5.187-2.347 5.187-5.187 0-.493-.123-.987-.246-1.357-.123-.37-.246-.617-.37-.987z"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
      )}

      {variant === "mono" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M13.983 6h2.017v2.017h-2.017v-2.017zM10.483 6h2.017v2.017h-2.017v-2.017zM6.983 6h2.017v2.017h-2.017v-2.017zM3.483 6h2.017v2.017h-2.017v-2.017zM6.983 2.5h2.017v2.017h-2.017v-2.017zM13.983 9.5h2.017v2.017h-2.017v-2.017zM10.483 9.5h2.017v2.017h-2.017v-2.017zM6.983 9.5h2.017v2.017h-2.017v-2.017zM3.483 9.5h2.017v2.017h-2.017v-2.017zM10.483 2.5h2.017v2.017h-2.017v-2.017z"
            fill="currentColor"
          />
        </svg>
      )}

      {variant === "outline" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M13.983 6h2.017v2.017h-2.017v-2.017zM10.483 6h2.017v2.017h-2.017v-2.017zM6.983 6h2.017v2.017h-2.017v-2.017zM3.483 6h2.017v2.017h-2.017v-2.017zM6.983 2.5h2.017v2.017h-2.017v-2.017zM13.983 9.5h2.017v2.017h-2.017v-2.017zM10.483 9.5h2.017v2.017h-2.017v-2.017zM6.983 9.5h2.017v2.017h-2.017v-2.017zM3.483 9.5h2.017v2.017h-2.017v-2.017zM10.483 2.5h2.017v2.017h-2.017v-2.017z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M22.5 10.5c0-.469-.123-.937-.37-1.403-.493-.74-1.333-1.333-2.53-1.716l-.863-.246-.246-.863c-.493-1.727-1.333-2.963-3.06-3.703-1.48-.617-3.333-.617-5.06.123-1.727.74-2.963 2.097-3.58 4.07h-.493c-1.48 0-2.717.493-3.703 1.48-.987.987-1.48 2.223-1.48 3.703 0 2.84 2.347 5.187 5.187 5.187h11.603c2.84 0 5.187-2.347 5.187-5.187 0-.493-.123-.987-.246-1.357-.123-.37-.246-.617-.37-.987z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )}
    </div>
  )
}
