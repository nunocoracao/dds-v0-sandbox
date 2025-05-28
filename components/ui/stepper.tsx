"use client"

import { cn } from "@/lib/utils"

interface StepperProps {
  steps: number
  currentStep: number
  onStepClick?: (step: number) => void
  className?: string
}

export function Stepper({ steps, currentStep, onStepClick, className }: StepperProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length: steps }).map((_, index) => (
        <button
          key={index}
          onClick={() => onStepClick?.(index)}
          className={cn(
            "w-2 h-2 rounded-full transition-all",
            currentStep === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/70",
          )}
          aria-label={`Go to step ${index + 1}`}
        />
      ))}
    </div>
  )
}
