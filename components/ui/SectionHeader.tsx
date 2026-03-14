// components/SectionHeader.tsx
"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
    return (
        <div className={`relative flex flex-col gap-2 ${className}`}>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xs tracking-[6px] uppercase text-zinc-500 font-mono"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent"
            >
                {title}
            </motion.h2>
            <div className="h-px w-20 bg-gradient-to-r from-white/30 to-transparent" />
        </div>
    )
}