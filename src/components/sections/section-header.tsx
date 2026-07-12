import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (

    <div className={cn("top-[70px] sticky mb-96", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-4xl text-center md:text-7xl font-bold font-display tracking-tight",
              "text-gradient pb-2"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      <div className="mx-auto mt-1 mb-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-[var(--brand-from)] via-[var(--brand-via)] to-[var(--brand-to)] opacity-80" />
      <p className="mx-auto line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}
