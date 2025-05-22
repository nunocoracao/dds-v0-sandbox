import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => 
  React.createElement("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => 
  React.createElement("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => 
  React.createElement("h3", { ref: ref as any, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => 
  React.createElement("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => 
  React.createElement("div", { ref, className: cn("p-6 pt-0", className), ...props })
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => 
  React.createElement("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
)
CardFooter.displayName = "CardFooter"

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export default Card
