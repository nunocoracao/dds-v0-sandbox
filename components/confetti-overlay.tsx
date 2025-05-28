"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ConfettiOverlayProps {
  isActive: boolean
  onComplete: () => void
}

export function ConfettiOverlay({ isActive, onComplete }: ConfettiOverlayProps) {
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{
      id: number
      color: string
      left: number
      delay: number
      duration: number
      size: number
      shape: "circle" | "square"
    }>
  >([])

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        color: [
          "#FF6B6B",
          "#4ECDC4",
          "#45B7D1",
          "#96CEB4",
          "#FFEAA7",
          "#DDA0DD",
          "#98D8C8",
          "#F7DC6F",
          "#BB8FCE",
          "#85C1E9",
          "#F8C471",
          "#82E0AA",
          "#F1948A",
          "#85C1E9",
          "#D7BDE2",
        ][Math.floor(Math.random() * 15)],
        left: Math.random() * 100,
        delay: Math.random() * 500,
        duration: 4000 + Math.random() * 2000,
        size: 6 + Math.random() * 4,
        shape: Math.random() > 0.5 ? "circle" : "square",
      }))

      setConfettiPieces(pieces)

      // Clean up after 2000ms
      const timer = setTimeout(() => {
        setConfettiPieces([])
        onComplete()
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])

  if (!isActive || confettiPieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={
            {
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}ms`,
              animationDuration: `${piece.duration}ms`,
              "--confetti-color": piece.color,
              "--confetti-size": `${piece.size}px`,
            } as React.CSSProperties
          }
        >
          <div
            className={`confetti-piece ${piece.shape === "circle" ? "rounded-full" : "rounded-sm"}`}
            style={{
              backgroundColor: piece.color,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-200vh) translateX(0px) rotate(0deg);
            opacity: 1;
          }
          10% {
            transform: translateY(-160vh) translateX(10px) rotate(36deg);
            opacity: 1;
          }
          20% {
            transform: translateY(-120vh) translateX(-5px) rotate(72deg);
            opacity: 1;
          }
          30% {
            transform: translateY(-80vh) translateX(15px) rotate(108deg);
            opacity: 0.9;
          }
          40% {
            transform: translateY(-40vh) translateX(-10px) rotate(144deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(0vh) translateX(8px) rotate(180deg);
            opacity: 0.7;
          }
          60% {
            transform: translateY(40vh) translateX(-12px) rotate(216deg);
            opacity: 0.6;
          }
          70% {
            transform: translateY(80vh) translateX(6px) rotate(252deg);
            opacity: 0.5;
          }
          80% {
            transform: translateY(120vh) translateX(-8px) rotate(288deg);
            opacity: 0.4;
          }
          90% {
            transform: translateY(160vh) translateX(4px) rotate(324deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(200vh) translateX(-2px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }

        .confetti-piece {
          animation: confetti-spin 1s linear infinite;
        }

        @keyframes confetti-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
