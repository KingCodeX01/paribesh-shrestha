import { About } from '@/sections/About'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Paribesh Shrestha - Full Stack Developer. Discover my background, skills, experience, and passion for web development.",
    keywords: [
        "Paribesh Shrestha about",
        "Full Stack Developer background",
        "Web Developer experience",
        "Software Engineer skills",
        "React Developer portfolio"
    ],
};

export default function AboutPage() {
    return (
        <main>
            <section id="about" aria-label="About Paribesh Shrestha">
                <About />
            </section>
        </main>
    )
}
