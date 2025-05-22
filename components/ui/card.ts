import { cn } from "@/lib/utils"

export interface CardProps {
  className?: string
}

export const getCardClasses = (props: CardProps) => {
  return cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    props.className
  )
}

export const getCardHeaderClasses = (props: CardProps) => {
  return cn("flex flex-col space-y-1.5 p-6", props.className)
}

export const getCardTitleClasses = (props: CardProps) => {
  return cn(
    "text-2xl font-semibold leading-none tracking-tight",
    props.className
  )
}

export const getCardDescriptionClasses = (props: CardProps) => {
  return cn("text-sm text-muted-foreground", props.className)
}

export const getCardContentClasses = (props: CardProps) => {
  return cn("p-6 pt-0", props.className)
}

export const getCardFooterClasses = (props: CardProps) => {
  return cn("flex items-center p-6 pt-0", props.className)
}
