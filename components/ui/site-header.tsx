"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface SiteHeaderProps {
  showBackButton?: boolean
  backButtonText?: string
  backButtonHref?: string
}

export function SiteHeader({ showBackButton = false, backButtonText = "Back", backButtonHref = "/" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AsaLogoWhite-5A2bHa9BKtYinRhkgNXDItXYEaIoFy.png"
                alt="Ása Logo"
                fill
                className="object-contain dark:invert"
                priority
              />
            </div>
            <span className="font-semibold hidden sm:inline">Ása ehf.</span>
          </Link>
          {showBackButton && (
            <Link
              href={backButtonHref}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← {backButtonText}
            </Link>
          )}
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

