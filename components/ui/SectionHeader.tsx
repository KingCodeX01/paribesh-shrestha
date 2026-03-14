"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
    variant?: "light" | "dark"
}

export function SectionHeader({
    title,
    subtitle,
    className,
    variant = "light",
}: SectionHeaderProps) {
    const isDark = variant === "dark"

    return (
        <div className={cn("relative flex flex-col gap-2", className)}>

            {/* Subtitle */}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={cn(
                        "text-xs tracking-[6px] uppercase font-mono",
                        isDark ? "text-zinc-500" : "text-zinc-400"
                    )}
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "text-5xl md:text-7xl font-bold tracking-tighter",
                    isDark
                        ? "text-black dark:text-white"
                        : "bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent"
                )}
            >
                {title}
            </motion.h2>

            {/* Line */}
            <div
                className={cn(
                    "h-px w-20",
                    isDark
                        ? "bg-zinc-300 dark:bg-zinc-700"
                        : "bg-gradient-to-r from-white/30 to-transparent"
                )}
            />
        </div>
    )
}