"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, GraduationCap, Baby } from "lucide-react";

const programs = [
    {
        title: "Little Soldiers",
        subtitle: "The Foundational School",
        grade: "Baby Care - Daycare - Nursery - PP1 - PP2",
        description: "A nurturing environment recognised by Govt. of A.P. (RC No. 2637/A5/2022). We offer A/C and Non-A/C classrooms with a focus on holistic child development.",
        color: "bg-gold",
        icon: Baby,
        features: ["A/C & Non-A/C Rooms", "Spacious Play Area", "Caring Staff", "R.O. Water"],
        image: "/media/photos/school/school-playground-campus.webp"
    },
    {
        title: "Concept School",
        subtitle: "Primary Education (1st - 7th)",
        grade: "Class 1 to 7 (English Medium)",
        description: "The best school in primary education, committed to strong academics and character building. Featuring computer education and audio-visual aids at low cost.",
        color: "bg-charcoal",
        icon: GraduationCap,
        features: ["Computer Lab", "A.V. Aids", "No Donations / No Term Fees", "Van Facility"],
        image: "/media/photos/school/classroom-guided-learning.webp"
    }
];

export default function Programs() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="programs" ref={targetRef} className="relative md:h-[300vh] bg-off-white">
            <div className="md:sticky top-0 flex flex-col md:flex-row md:h-screen items-center overflow-hidden">

                {/* Section Header (Absolute for stickiness inside sticky container) */}
                <div className="absolute top-10 left-8 md:top-20 md:left-20 z-20 max-w-sm">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Programs
                    </motion.span>
                    <motion.h2
                        className="text-display text-5xl md:text-6xl text-charcoal mt-4 leading-none"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Academic Pathways
                    </motion.h2>
                </div>

                <motion.div
                    style={{ x: isMobile ? 0 : x }}
                    className="flex flex-col md:flex-row gap-10 pl-4 pr-4 md:pl-[30vw] min-w-full md:min-w-max py-20 md:py-0 overflow-y-auto md:overflow-visible"
                >
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group relative h-[60vh] md:h-[70vh] w-full md:w-[60vw] lg:w-[45vw] overflow-hidden rounded-3xl bg-white shadow-xl transition-transform hover:-translate-y-2 shrink-0"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 h-1/2 overflow-hidden relative">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10" />
                            </div>

                            {/* Content Card */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-lg h-2/3 flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl ${program.color} text-white`}>
                                            <program.icon size={28} />
                                        </div>
                                        <span className="font-heading font-medium text-slate uppercase tracking-wider text-sm">
                                            {program.grade}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-display text-charcoal mb-2">{program.title}</h3>
                                    <p className="text-gold font-medium mb-6">{program.subtitle}</p>

                                    <p className="text-slate text-lg mb-8 leading-relaxed line-clamp-3">
                                        {program.description}
                                    </p>

                                    <ul className="flex flex-wrap gap-3 mb-auto">
                                        {program.features.map(f => (
                                            <li key={f} className="px-3 py-1 bg-off-white rounded-md text-xs font-semibold text-charcoal uppercase tracking-wide">
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 flex justify-end">
                                        <button className="flex items-center gap-2 text-charcoal font-bold group-hover:gap-4 transition-all">
                                            Learn More <ArrowRight className="text-gold" size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card at the end */}
                    <div className="min-h-[50vh] md:h-[70vh] w-full md:w-[40vw] flex items-center justify-center py-10 md:py-0">
                        <div className="text-center p-6 md:p-10 w-full">
                            <h3 className="text-display text-4xl md:text-5xl text-charcoal mb-6">Join Us Today</h3>
                            <p className="text-slate text-lg md:text-xl mb-8 max-w-md mx-auto">
                                Take the first step towards a bright future for your child.
                            </p>
                            <a href="#admissions" className="btn-primary w-full md:w-auto">
                                Start Admission
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
