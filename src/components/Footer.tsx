"use client";

import React from "react";
import Image from "next/image";
import { Heart, MapPin, Phone, Mail, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-8 border-t border-white/10">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-14 h-14 rounded-full bg-white overflow-hidden ring-1 ring-gold/40">
                                <Image
                                    src="/media/logo/sri-gnanodaya-school-logo.webp"
                                    alt="Sri Gnanodaya logo"
                                    fill
                                    className="object-contain p-0.5"
                                    sizes="56px"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold uppercase tracking-wider leading-none text-white">
                                    Sri Gnanodaya
                                </span>
                                <span className="text-[10px] tracking-widest uppercase opacity-60">
                                    Little Soldiers & Concept School
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 leading-relaxed max-w-xs text-sm">
                            "Intelligence + Character is the goal of true education."<br />
                            Sri Manikanta Rural Educational Society (Reg No. 126/10)
                        </p>

                        <div className="space-y-2 text-sm text-white/80">
                            <p className="flex items-start gap-3">
                                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                                <a
                                    href="https://maps.google.com/?q=D.No: 2-75, Near Penthu Coast Church, Gandhi Bomma Centre, Kanuru - 520007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition-colors"
                                >
                                    D.No: 2-75, Near Penthu Coast Church,<br />Gandhi Bomma Centre, Kanuru - 520007
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone size={16} className="text-gold shrink-0" />
                                <a href="tel:+919390017772" className="hover:text-gold transition-colors">9390017772</a>, <a href="tel:+919397961714" className="hover:text-gold transition-colors">9397961714</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Mail size={16} className="text-gold shrink-0" />
                                <a href="mailto:srignanodayaschool@gmail.com" className="hover:text-gold transition-colors">srignanodayaschool@gmail.com</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Youtube size={16} className="text-gold shrink-0" />
                                <a
                                    href="https://www.youtube.com/@SriGnanodayaLittleSoldiers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition-colors"
                                >
                                    Sri Gnanodaya Little Soldiers
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-gold">Management</h4>
                        <div className="space-y-4 text-white/70 text-sm">
                            <div>
                                <strong className="block text-white">V. Sambasiva Rao, M.Sc., B.Ed.</strong>
                                <span className="text-xs uppercase tracking-wider opacity-70">Correspondent</span>
                            </div>
                            <div>
                                <strong className="block text-white">V. Udaya Lakshmi, B.A.</strong>
                                <span className="text-xs uppercase tracking-wider opacity-70">Treasurer & Care Taker</span>
                            </div>
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-gold">Our Offerings</h4>
                        <ul className="space-y-3 text-sm">
                            {["Baby Care & Daycare", "Nursery", "Pre-Primary (PPI & PPII)", "Primary (1st - 7th)", "Computer Education", "Van Facility", "No Term Fees"].map((link) => (
                                <li key={link} className="flex items-center gap-2 text-white/60">
                                    <span className="w-1 h-1 rounded-full bg-gold" />
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recognition */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-gold">Recognition</h4>
                        <div className="space-y-4 text-white/60 text-sm">
                            <p className="border-l-2 border-gold/50 pl-4 py-1">
                                <strong className="block text-white mb-1">Little Soldiers</strong>
                                Recognised by Govt. of A.P.<br />
                                <span className="font-mono text-xs opacity-80">RC No. 2637/A5/2022</span>
                            </p>
                            <p className="border-l-2 border-gold/50 pl-4 py-1">
                                <strong className="block text-white mb-1">Concept School</strong>
                                Recognised by Govt. of A.P.<br />
                                <span className="font-mono text-xs opacity-80">RC No. 230/A5/2024</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>Copyright 2026 Sri Gnanodaya Educational Society. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={12} className="text-red-500 fill-red-500" /> for Education
                    </p>
                </div>
            </div>
        </footer>
    );
}
