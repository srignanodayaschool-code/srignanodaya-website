"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mail, Menu, X, Phone } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Programs", href: "#programs" },
        { name: "Facilities", href: "#facilities" },
        { name: "Admissions", href: "#admissions" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div className="bg-charcoal text-white/80 text-xs py-2 hidden md:block border-b border-white/10 relative z-50">
                <div className="container-wide flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Phone size={12} className="text-gold" /> 9390017772, 9397961714</span>
                        <span className="flex items-center gap-2"><Mail size={12} className="text-gold" /> srignanodayaschool@gmail.com</span>
                    </div>
                    <div className="flex gap-4">
                        <span>Kanuru, Vijayawada</span>
                        <span className="text-gold">Reg: 2637/A5/2022</span>
                    </div>
                </div>
            </div>

            <motion.header
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "py-4 bg-white/90 backdrop-blur-md"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container-wide flex items-center justify-between">
                    <Link href="/" className="relative z-50 flex items-center gap-3 group">
                        <div className="relative w-12 h-12 rounded-full bg-white overflow-hidden shadow-lg ring-1 ring-gold/40">
                            <Image
                                src="/media/logo/sri-gnanodaya-school-logo.webp"
                                alt="Sri Gnanodaya logo"
                                fill
                                className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                                sizes="48px"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold uppercase tracking-wider leading-none text-charcoal transition-colors">
                                Sri Gnanodaya
                            </span>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-slate/80 font-medium">
                                Little Soldiers & Concept School
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-widest relative group text-charcoal hover:text-gold transition-colors"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gold" />
                            </a>
                        ))}

                        <a
                            href="#admissions"
                            className="px-6 py-2.5 rounded-full font-heading font-medium text-sm tracking-wide transition-all hover:-translate-y-0.5 bg-charcoal text-white hover:bg-gold hover:shadow-lg"
                        >
                            Apply Now
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-charcoal"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col items-center justify-center gap-8"
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none"
                }}
                transition={{ duration: 0.3 }}
            >
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        className="text-display text-4xl text-charcoal"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                            y: isMobileMenuOpen ? 0 : 20,
                            opacity: isMobileMenuOpen ? 1 : 0
                        }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </motion.a>
                ))}

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                        y: isMobileMenuOpen ? 0 : 20,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    transition={{ delay: 0.6 }}
                >
                    <a
                        href="#admissions"
                        className="px-8 py-3 rounded-full bg-charcoal text-white font-heading font-medium tracking-wide"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Start Admission
                    </a>
                </motion.div>
            </motion.div>
        </>
    );
}
