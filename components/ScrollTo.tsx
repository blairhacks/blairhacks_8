"use client";
import { ReactNode } from "react";

interface ScrollToProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function ScrollTo({ id, className = "", children }: ScrollToProps) {
  return (
    <span
      className={className + " hover:cursor-pointer"}
      onClick={() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </span>
  );
}
