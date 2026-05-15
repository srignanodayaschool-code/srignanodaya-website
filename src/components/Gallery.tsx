"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/media/photos/school/playground-children.webp",
        alt: "Children at Play",
        category: "Play Area",
        color: "bg-blue-600"
    },
    {
        src: "/media/photos/school/classroom-guided-learning.webp",
        alt: "Guided Classroom Learning",
        category: "Academics",
        color: "bg-amber-500"
    },
    {
        src: "/media/photos/school/slide-play.webp",
        alt: "Slide Play",
        category: "Activities",
        color: "bg-rose-500"
    },
    {
        src: "/media/photos/school/classroom-reading.webp",
        alt: "Early Reading Room",
        category: "Facilities",
        color: "bg-emerald-500"
    },
    {
        src: "/media/photos/school/activity-table.webp",
        alt: "Activity Table",
        category: "Creative Work",
        color: "bg-purple-500"
    },
    {
        src: "/media/photos/school/school-playground-campus.webp",
        alt: "School Play Campus",
        category: "Campus",
        color: "bg-orange-500"
    },
    {
        src: "/media/photos/school/classroom-teacher.webp",
        alt: "Teacher With Students",
        category: "Classroom",
        color: "bg-cyan-600"
    },
    {
        src: "/media/photos/school/group-activity.webp",
        alt: "Group Learning Activity",
        category: "Learning",
        color: "bg-lime-600"
    },
    {
        src: "/media/photos/school/green-campus.webp",
        alt: "Green Campus",
        category: "Environment",
        color: "bg-green-700"
    },
    {
        src: "/media/photos/school/classroom-study.webp",
        alt: "Classroom Study Time",
        category: "Academics",
        color: "bg-indigo-600"
    },
    {
        src: "/media/photos/school/classroom-wall.webp",
        alt: "Learning Wall",
        category: "Classroom",
        color: "bg-pink-600"
    },
    {
        src: "/media/photos/school/play-area-empty.webp",
        alt: "Outdoor Play Equipment",
        category: "Play Area",
        color: "bg-teal-600"
    }
];

export default function Gallery() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Life at Gnanodaya
                    </motion.span>
                    <motion.h2
                        className="text-display text-4xl md:text-5xl text-charcoal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Moments of <span className="text-gold italic">Joy & Learning</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 1 || index === 5 || index === 7 ? "md:col-span-2" : ""}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                            {/* Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 ${img.color} mix-blend-multiply`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-sm font-bold tracking-widest uppercase mb-2">{img.category}</span>
                                <h3 className="text-2xl font-display">{img.alt}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
