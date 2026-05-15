"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;

        mouseX.set(x * 0.05); // Move 5% of mouse distance
        mouseY.set(y * 0.05);
    }

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, opacity }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

                <motion.div
                    className="w-full h-full relative"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    style={{ x: springX, y: springY }}
                >
                    <Image
                        src="/media/photos/school/playground-children.webp"
                        alt="Children playing at Sri Gnanodaya School"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </motion.div>
            </motion.div>

            {/* Content */}
            <div className="container-wide relative z-20 text-center text-white pt-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-heading font-medium tracking-[0.2em] uppercase mb-8 text-gold/90 animate-pulse">
                        Admissions Open for 2025-26
                    </span>
                </motion.div>

                <motion.h1
                    className="font-display text-4xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    Excellence <br />
                    <span className="italic font-light text-white/80">Redefined</span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    With a <strong className="text-white font-normal">strong commitment towards academics</strong>,
                    we provide a world-class foundation for your child's future.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="#programs"
                        className="group relative px-8 py-4 rounded-full bg-gold text-charcoal font-heading font-bold tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.6)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Campus
                        </span>
                    </a>
                    <a
                        href="#video-tour"
                        className="group px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-heading font-medium tracking-wide hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-3"
                    >
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors">
                            <Play size={12} fill="currentColor" />
                        </span>
                        <span>Watch Video</span>
                    </a>
                </motion.div>
            </div >

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="text-[10px] tracking-[0.2em] uppercase">Scroll</div>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div >
        </section >
    );
}
