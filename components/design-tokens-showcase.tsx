"use client"

import { useEffect, useRef } from "react"

export function DesignTokensShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset when we've scrolled past the content
      if (scrollPosition >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        scrollPosition = 0
      }

      scrollContainer.scrollTop = scrollPosition
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const colorTokens = [
    { name: "Primary", class: "bg-primary" },
    { name: "Secondary", class: "bg-secondary" },
    { name: "Muted", class: "bg-muted" },
    { name: "Accent", class: "bg-accent" },
    { name: "Destructive", class: "bg-destructive" },
    { name: "Card", class: "bg-card border" },
    { name: "Background", class: "bg-background border" },
  ]

  const spacingTokens = [
    { name: "XS", class: "w-2 h-2 bg-primary" },
    { name: "SM", class: "w-4 h-4 bg-primary" },
    { name: "MD", class: "w-6 h-6 bg-primary" },
    { name: "LG", class: "w-8 h-8 bg-primary" },
    { name: "XL", class: "w-12 h-12 bg-primary" },
  ]

  const borderTokens = [
    { name: "None", class: "bg-muted border-0" },
    { name: "Default", class: "bg-muted rounded-[var(--border-radius)] border" },
    { name: "MD", class: "bg-muted rounded-[calc(var(--border-radius)*2)] border" },
    { name: "LG", class: "bg-muted rounded-[calc(var(--border-radius)*3)] border" },
  ]

  return (
    <div ref={scrollRef} className="h-full overflow-hidden">
      <div className="grid grid-cols-3 gap-5 p-5" style={{ minHeight: "200%" }}>
        {/* Colors */}
        {colorTokens.map((token) => (
          <div key={`color-${token.name}`} className="flex flex-col items-center">
            <div className={`w-[66px] h-[66px] rounded-[var(--border-radius)] ${token.class}`} />
            <span className="text-xs mt-2 text-center">{token.name}</span>
          </div>
        ))}

        {/* Typography */}
        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted rounded-[var(--border-radius)] flex items-center justify-center">
            <span className="font-heading text-lg font-bold">Aa</span>
          </div>
          <span className="text-xs mt-2 text-center">Heading</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted rounded-[var(--border-radius)] flex items-center justify-center">
            <span className="font-sans text-sm">Aa</span>
          </div>
          <span className="text-xs mt-2 text-center">Body</span>
        </div>

        {/* Spacing */}
        {spacingTokens.map((token) => (
          <div key={`spacing-${token.name}`} className="flex flex-col items-center">
            <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
              <div className={token.class} />
            </div>
            <span className="text-xs mt-2 text-center">{token.name}</span>
          </div>
        ))}

        {/* Borders */}
        {borderTokens.map((token) => (
          <div key={`border-${token.name}`} className="flex flex-col items-center">
            <div className="w-[66px] h-[66px] flex items-center justify-center">
              <div className={`w-12 h-12 ${token.class}`} />
            </div>
            <span className="text-xs mt-2 text-center">{token.name}</span>
          </div>
        ))}

        {/* Logos */}
        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
            <img src="/logo/LogoPrimary.svg" alt="Docker Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-xs mt-2 text-center">Logo</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
            <img src="/sub-marks/subMarkPrimary.svg" alt="Docker Submark" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs mt-2 text-center">Submark</span>
        </div>

        {/* Icons */}
        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
            <img src="/app icons/Primary.svg" alt="App Icon" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs mt-2 text-center">App Icon</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
            <img src="/app icons/Secondary.svg" alt="App Icon" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs mt-2 text-center">Secondary</span>
        </div>

        {/* Illustrations */}
        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
            <img
              src="/illustrations/Product Illustration/Sm/Run Image.png"
              alt="Illustration"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-xs mt-2 text-center">Run Image</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[66px] h-[66px] bg-muted/30 rounded-[var(--border-radius)] flex items-center justify-center">
            <img
              src="/illustrations/Product Illustration/Md/Option Select.png"
              alt="Illustration"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-xs mt-2 text-center">Options</span>
        </div>

        {/* Duplicate content for seamless loop */}
        {colorTokens.map((token) => (
          <div key={`color-dup-${token.name}`} className="flex flex-col items-center">
            <div className={`w-[66px] h-[66px] rounded-[var(--border-radius)] ${token.class}`} />
            <span className="text-xs mt-2 text-center">{token.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
