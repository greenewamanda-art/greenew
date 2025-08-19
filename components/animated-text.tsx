"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function AnimatedText({ text, className = "", as: Component = "span" }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const renderAnimatedText = () => {
    if (!isVisible) {
      return (
        <Component ref={ref} className={className}>
          {text}
        </Component>
      )
    }

    return (
      <Component ref={ref} className={className}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="animated-text inline-block"
            style={{ "--char-index": index } as React.CSSProperties}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Component>
    )
  }

  return renderAnimatedText()
}
