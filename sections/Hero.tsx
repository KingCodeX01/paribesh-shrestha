"use client";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export function Hero() {
    return (
        <section className="bg-slate-950">
            <div className="relative">
                <LampContainer className="min-h-[450px]">
                    <div></div>
                </LampContainer>
                <div className="relative mx-auto -mt-64 flex max-w-7xl flex-col items-center justify-center px-4 pb-20">

                    <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl dark:text-slate-300">
                        {"Hello, I am Paribesh Shrestha."
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                    className="mr-2 inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg text-white dark:text-neutral-400"
                    >
                        Backend Developer and Data Enginner with a passion for creating innovative solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <button className="w-60 rounded-lg bg-black px-6 py-2 font-medium text-white">
                            Coming Soon
                        </button>

                        <button className="w-60 rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black">
                            Coming Soon
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}