"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header"); 
    const sidebar = document.getElementById("sidebar")
    if (!header) return;
    if (!sidebar) return;

    const moveCursor = (e: MouseEvent) => {
      // ignora se o mouse está dentro do header
      if (header.contains(e.target as Node) || sidebar.contains(e.target as Node)) {
        if (innerRef.current) innerRef.current.style.display = "none";
        if (outerRef.current) outerRef.current.style.display = "none";
        return;
      } else {
        if (innerRef.current) innerRef.current.style.display = "block";
        if (outerRef.current) outerRef.current.style.display = "block";
      }

      const { clientX: x, clientY: y } = e;
      if (innerRef.current) {
        innerRef.current.style.left = `${x}px`;
        innerRef.current.style.top = `${y}px`;
      }
      if (outerRef.current) {
        outerRef.current.style.left = `${x}px`;
        outerRef.current.style.top = `${y}px`;
      }
    };

    const hoverElements = document.querySelectorAll(
      "a, button, .cursor-pointer"
    );

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={innerRef}
        className={`fixed z-[9999] w-2 h-2 rounded-full bg-[#0a5f04] pointer-events-none transition-all duration-300 ease-out
        ${hovering ? "w-20 h-20 opacity-30" : ""}`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={outerRef}
        className={`fixed z-[9998] w-10 h-10 rounded-full border border-[#b19777] pointer-events-none transition-all duration-75
        ${hovering ? "opacity-0" : "opacity-50"}`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
