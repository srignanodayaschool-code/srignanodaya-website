"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import VideoTour from "@/components/VideoTour";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-off-white selection:bg-gold selection:text-charcoal">
      <Header />
      <Hero />
      <VideoTour />
      <Stats />
      <Programs />
      <Facilities />
      <Services />
      <Gallery />
      <Testimonials />
      <Admissions />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
