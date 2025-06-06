"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface MenuBarItem {
  // @ts-ignore
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  label: string
}

interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuBarItem[]
}

const springConfig = {
  duration: 0.3,
  ease: "easeInOut"
}

export function MenuBar({ items, className, ...props }: MenuBarProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const [tooltipLeft, setTooltipLeft] = React.useState(0)
  const tooltipRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (activeIndex !== null && menuRef.current && tooltipRef.current) {
      const menuItem = menuRef.current.children[activeIndex] as HTMLElement
      const menuRect = menuRef.current.getBoundingClientRect()
      const itemRect = menuItem.getBoundingClientRect()

      const left = itemRect.left - menuRect.left + itemRect.width / 2

      setTooltipLeft(left)
    }
  }, [activeIndex])

  return (
    <div className={cn("relative w-full", className)} {...props}>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={springConfig}
            className="absolute left-0 right-0 -top-[31px] pointer-events-none z-50"
          >
            <motion.div
              ref={tooltipRef}
              className={cn(
                "h-7 px-3 rounded-lg absolute top-0 transform -translate-x-1/2",
                "bg-background/95 backdrop-blur",
                "border border-border/50",
                "shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
                "dark:border-border/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              )}
              initial={{ x: tooltipLeft }}
              animate={{ x: tooltipLeft }}
              transition={springConfig}
            >
              <p className="text-[13px] font-medium leading-tight whitespace-nowrap">
                {items[activeIndex].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={menuRef}
        className={cn(
          "h-10 px-1.5 w-full flex justify-between items-center z-10",
          "rounded-full bg-background/95 backdrop-blur",
          "border border-border/50",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(0,0,0,0.1)]",
          "dark:border-border/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_16px_-4px_rgba(0,0,0,0.2)]"
        )}
      >
        {items.map((item, index) => (
          <button
            key={index}
            className="flex-1 h-8 flex justify-center items-center gap-2 rounded-full hover:bg-muted/80 transition-colors"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <item.icon className="w-5 h-5" />
            <span className="sr-only">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
