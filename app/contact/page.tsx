import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Paribesh Shrestha - Full Stack Developer. Contact me for projects, collaborations, or opportunities.",
    keywords: [
        "Paribesh Shrestha contact",
        "Full Stack Developer contact",
        "Web Developer email",
        "APS.NET Developer contact",
        "Next.js Developer contact"
    ],
};

export default function ContactPage() {
    return (
        <main>
            <section id="contact" aria-label="Contact Paribesh Shrestha">
                <div className="min-h-screen flex items-center justify-center bg-black text-white">
                    <div className="max-w-2xl mx-auto p-8 text-center">
                        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Get in touch for projects, collaborations, or opportunities
                        </p>

                        <div className="space-y-4 text-gray-400">
                            <p>
                                <strong>Email:</strong> contact@paribeshshrestha.com.np
                            </p>
                            <p>
                                <strong>LinkedIn:</strong>{" "}
                                <a
                                    href="https://www.linkedin.com/in/paribesh-shrestha-092483259/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    linkedin.com/in/paribesh-shrestha-092483259
                                </a>
                            </p>
                            <p>
                                <strong>GitHub:</strong>{" "}
                                <a
                                    href="https://github.com/KingCodeX01"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    github.com/KingCodeX01
                                </a>
                            </p>
                        </div>

                        <div className="mt-12">
                            <p className="text-gray-400">
                                Available for freelance projects and full-time opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}