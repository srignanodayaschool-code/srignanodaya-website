"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function VideoTour() {
    return (
        <section id="video-tour" className="py-24 bg-off-white relative overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-flex items-center gap-2 text-gold font-heading font-bold tracking-widest uppercase text-sm mb-4">
                            <PlayCircle size={18} />
                            Campus Video
                        </span>
                        <h2 className="text-display text-4xl md:text-5xl text-charcoal mb-6">
                            See Sri Gnanodaya <span className="text-gold italic">in Motion</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                            Watch a glimpse of our learning environment, activities, and campus life.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative aspect-video overflow-hidden rounded-2xl bg-charcoal shadow-2xl ring-1 ring-black/10"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube-nocookie.com/embed/w5TeVXCNL5M?rel=0&modestbranding=1"
                            title="Sri Gnanodaya School video tour"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
