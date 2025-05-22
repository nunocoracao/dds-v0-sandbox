import { cn } from "@/lib/utils"

export interface CardProps {
  className?: string
}

const Card = (props: CardProps) => {
  return {
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      props.className
    )
  }
}

const CardHeader = (props: CardProps) => {
  return {
    className: cn("flex flex-col space-y-1.5 p-6", props.className)
  }
}

const CardTitle = (props: CardProps) => {
  return {
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      props.className
    )
  }
}

const CardDescription = (props: CardProps) => {
  return {
    className: cn("text-sm text-muted-foreground", props.className)
  }
}

const CardContent = (props: CardProps) => {
  return {
    className: cn("p-6 pt-0", props.className)
  }
}

const CardFooter = (props: CardProps) => {
  return {
    className: cn("flex items-center p-6 pt-0", props.className)
  }
}

export default Card
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
