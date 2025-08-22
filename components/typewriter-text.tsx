"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
  pauseDuration?: number
  colors?: string[]
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 100,
  pauseDuration = 2000,
  colors = [],
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const targetText = texts[currentTextIndex]

    if (isTyping) {
      if (currentText.length < targetText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseDuration)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, speed / 2)
        return () => clearTimeout(timeout)
      } else {
        // Finished erasing, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, speed, pauseDuration])

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const currentColor = colors[currentTextIndex] || "currentColor"

  return (
    <span className={className}>
      <span className="text-5xl sm:text-[68px]" style={{ color: currentColor }}>{currentText}</span>
      <span
        className={`inline-block w-0.5 h-[1.6em] bg-current ml-1  ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
        style={{ backgroundColor: 'white' }}
      />
    </span>
  )
}
