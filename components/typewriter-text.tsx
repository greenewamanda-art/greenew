"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
  pauseDuration?: number
  colors?: string[]
  /** Entrance animation applied to the wrapper. "slideUp" reveals + starts typing on scroll into view. */
  animation?: "slideUp"
  /** Loops through `texts` forever (erase/retype). Defaults to true only when multiple texts are given. */
  loop?: boolean
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 100,
  pauseDuration = 2000,
  colors = [],
  animation,
  loop = texts.length > 1,
}: TypewriterTextProps) {
  const [started, setStarted] = useState(animation !== "slideUp")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!started || finished) return
    const targetText = texts[currentTextIndex]

    if (isTyping) {
      if (currentText.length < targetText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, speed)
        return () => clearTimeout(timeout)
      } else if (!loop) {
        setFinished(true)
      } else {
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
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [started, finished, currentText, currentTextIndex, isTyping, texts, speed, pauseDuration, loop])

  useEffect(() => {
    if (finished) return
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(interval)
  }, [finished])

  const currentColor = colors[currentTextIndex] || "currentColor"

  const content = (
    <span className={className}>
      <span style={{ color: currentColor }}>{currentText}</span>
      {!finished && (
        <span
          className={`ml-1 inline-block h-[1em] w-0.5 bg-current align-middle transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </span>
  )

  if (animation === "slideUp") {
    return (
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onViewportEnter={() => setStarted(true)}
      >
        {content}
      </motion.span>
    )
  }

  return content
}
