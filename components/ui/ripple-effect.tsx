"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"
import type { Ripple } from "@/types"

const RippleEffect = () => {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        // Only create ripple if mouse is within the container's bounds
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          const newRipple = {
            id: Date.now(),
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          }
          setRipples((prevRipples) => [...prevRipples, newRipple])
        }
      }
    }

    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  const handleAnimationEnd = (id: number) => {
    setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id))
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-[20]">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={cn("absolute rounded-full bg-purple-300/30 animate-ripple-effect pointer-events-none", "w-0 h-0")}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
          onAnimationEnd={() => handleAnimationEnd(ripple.id)}
        />
      ))}
    </div>
  )
}

export default RippleEffect
