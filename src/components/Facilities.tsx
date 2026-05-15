"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Brush, HeartHandshake, MapPinned, Palette, ShieldCheck } from "lucide-react";

const facilities = [
    {
        icon: BookOpen,
        title: "Interactive Classrooms",
        desc: "Bright learning rooms with child-friendly seating and visual learning walls.",
        image: "/media/photos/school/classroom-guided-learning.webp",
        colSpan: "md:col-span-2"
    },
    {
        icon: ShieldCheck,
        title: "Safe Play Area",
        desc: "Colorful outdoor play equipment in a supervised campus environment.",
        image: "/media/photos/school/play-area-empty.webp",
        colSpan: "md:col-span-1"
    },
    {
        icon: Brush,
        title: "Creative Learning",
        desc: "Hands-on activities that help children learn through color, play, and practice.",
        image: "/media/photos/school/activity-table.webp",
        colSpan: "md:col-span-1"
    },
    {
        icon: HeartHandshake,
        title: "Guided Attention",
        desc: "Teachers work closely with young learners during classroom activities.",
        image: "/media/photos/school/group-activity.webp",
        colSpan: "md:col-span-2"
    },
    {
        icon: MapPinned,
        title: "Green Campus",
        desc: "A welcoming school setting with greenery and open movement areas.",
        image: "/media/photos/school/green-campus.webp",
        colSpan: "md:col-span-1"
    },
    {
        icon: Palette,
        title: "Colorful Learning Rooms",
        desc: "Playful classroom murals and activity corners designed for early learners.",
        image: "/media/photos/school/classroom-wall.webp",
        colSpan: "md:col-span-2"
    }
];

export default function Facilities() {
    return (
        <section id="facilities" className="py-24 bg-white">
            <div className="container-wide">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        World-Class Infrastructure
                    </motion.span>
                    <motion.h2
                        className="text-display text-5xl md:text-6xl text-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Facilities Designed <br />
                        <span className="italic text-slate-400">for Holistic Growth</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-500 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We believe that the environment plays a crucial role in learning.
                        Our campus is equipped with modern amenities to ensure a comfortable
                        and stimulating atmosphere for every student.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer group ${facility.colSpan}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                                <Image
                                    src={facility.image}
                                    alt={facility.title}
                                    fill
                                    className="object-cover filter brightness-[0.8] group-hover:brightness-100 transition-all duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 z-10" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-20">
                                <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0 drop-shadow-lg">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-fit mb-4 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                                        <facility.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold mb-2">{facility.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {facility.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
