import React, { memo } from "react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

// Skill data
const skills = [
    { name: "Next.js", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "GraphQL", level: "Beginner" },
    { name: "Python", level: "Intermediate" },
    { name: "Docker", level: "Beginner" },
    { name: "Figma", level: "Intermediate" },
    { name: "ASP.NET", level: "Beginner" },
    { name: "MySql", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
]

// Split rows
const mid = Math.ceil(skills.length / 2)
const firstRow = skills.slice(0, mid)
const secondRow = skills.slice(mid)

// Gradient presets (moved outside = perf win ✅)
const gradients = [
    "from-blue-500/20 via-blue-500/5 to-transparent",
    "from-purple-500/20 via-purple-500/5 to-transparent",
    "from-pink-500/20 via-pink-500/5 to-transparent",
    "from-cyan-500/20 via-cyan-500/5 to-transparent",
    "from-emerald-500/20 via-emerald-500/5 to-transparent",
    "from-orange-500/20 via-orange-500/5 to-transparent",
]

const getGradient = (skill: string) =>
    gradients[skill.length % gradients.length]

// Memoized card 🔥
const SkillCard = memo(({ name }: { name: string }) => {
    return (
        <div
            className={cn(
                "relative mx-2 flex h-20 w-40 items-center justify-center overflow-hidden",
                "rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50",
                "bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800",
                "shadow-lg shadow-zinc-200/20 dark:shadow-zinc-950/50",
                "transition-all duration-300 hover:scale-105 hover:shadow-xl",
                "hover:border-zinc-300 dark:hover:border-zinc-700",
                "cursor-default"
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-40",
                    getGradient(name)
                )}
            />

            <span className="relative z-10 text-base font-semibold text-zinc-800 dark:text-zinc-200">
                {name}
            </span>

            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
            </div>
        </div>
    )
})

SkillCard.displayName = "SkillCard"

export default function Skills() {
    return (
        <section className="relative w-full bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950 py-10 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Skills"
                    subtitle="02"
                    variant="dark"
                />

                <div className="mt-16 space-y-8 relative">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        {[...firstRow, ...firstRow].map((skill, i) => (
                            <SkillCard key={skill.name + i} name={skill.name} />
                        ))}
                    </Marquee>

                    <Marquee reverse pauseOnHover className="[--duration:35s]">
                        {[...secondRow, ...secondRow].map((skill, i) => (
                            <SkillCard key={skill.name + i} name={skill.name} />
                        ))}
                    </Marquee>

                    {/* Edge fades (now safely scoped ✅) */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />
                </div>

            </div>
        </section>
    )
}