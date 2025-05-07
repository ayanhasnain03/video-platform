"use client"

import { Banner } from "@/components/ui/banner"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eclipse } from "lucide-react"
import { useState } from "react"

function BannerHome() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Banner
      variant="muted"
      className="dark text-foreground"
      isClosable
      onClose={() => setIsVisible(false)}
    >
      <div className="flex grow gap-3">
        <Eclipse
          className="mt-0.5 shrink-0 opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <div className="flex grow flex-col justify-between gap-2 md:flex-row">
          <p className="text-sm">
            We just added something awesome to make your experience even better.
          </p>
          <a href="#" className="group whitespace-nowrap text-sm font-medium">
            Learn more
            <ArrowRight
              className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </Banner>
  )
}

export { BannerHome }
