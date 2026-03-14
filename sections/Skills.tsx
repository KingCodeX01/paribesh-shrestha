import { SectionHeader } from '@/components/ui/SectionHeader'
import { Marquee } from "@/components/ui/marquee"
import React from 'react'

export default function Skills() {
    return (
        <>
            <div>
                <SectionHeader title="Skills" subtitle="02" />
                <Marquee>
                    <span>Next.js</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Tailwind CSS</span>
                </Marquee>
            </div>
        </>
    )
}
