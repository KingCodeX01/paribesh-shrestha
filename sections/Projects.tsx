import { SectionHeader } from "@/components/ui/SectionHeader";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Projects() {
    return (
        <div className="w-full bg-slate-950 flex flex-col items-center py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <SectionHeader
                    title="Projects"
                    subtitle="03"
                    variant="light"
                />
                <div className="mx-auto">
                    <HoverEffect items={projectsDetails} />
                </div>
            </div>
        </div>
    );
}
export const projectsDetails = [
    {
        title: "Mango Classification System",
        description:
            "An AI-powered image classification system built using Convolutional Neural Networks (CNN) to identify and categorize different varieties of mangoes with high accuracy. The project focuses on practical computer vision implementation, model training optimization, and real-world dataset handling.",
        link: "https://github.com/KingCodeX01/Mango-Classification-System-Using-CNN",
    },
    {
        title: "REPL Solutions Pvt. Ltd.",
        description:
            "A modern, responsive corporate website developed to enhance the company's digital presence. The platform focuses on clean UI/UX, performance optimization, and scalable frontend architecture to effectively showcase services and business solutions.",
        link: "https://replsolutions.com.np/",
    },
    {
        title: "Sagarmatha Tent And Tarpaulin",
        description:
            "A business website designed to present products and services in a structured and visually engaging way. The project emphasizes responsive design, accessibility, and smooth user experience to support customer engagement and brand visibility.",
        link: "https://sagarmathatent.com/",
    },
    {
        title: "Coming Soon",
        description:
            "Stay tuned 🚀 New innovative projects are currently in development. Exciting ideas focused on modern web technologies, performance, and user-centric design will be launched soon.",
        link: "#",
    },
    {
        title: "Coming Soon",
        description:
            "Stay tuned 🚀 More creative and technically challenging projects are on the way. Continuous learning and building to deliver impactful digital experiences.",
        link: "#",
    },
    {
        title: "Coming Soon",
        description:
            "Stay tuned 🚀 Upcoming projects will explore advanced concepts in frontend engineering, full-stack architecture, and interactive UI development.",
        link: "#",
    },
];

