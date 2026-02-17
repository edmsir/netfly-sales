"use client";

import { reps } from "@/data/reps";
import { RepCard } from "@/components/RepCard";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white selection:bg-rose-500/30 overflow-x-hidden">
      {/* Dynamic Interactive Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.15)_0%,transparent_70%)] blur-[120px] will-change-transform"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] blur-[120px] will-change-transform"
        />

        {/* Scanning Line Effect */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-transparent h-[50%]"
        />

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      </div>

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-6">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo Container - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-rose-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative h-28 w-64 md:h-44 md:w-[480px] flex items-center justify-center overflow-visible">
                {/* Refined Subtle Breathing Glow Layer */}
                <motion.div
                  animate={{
                    opacity: [0.08, 0.2, 0.08],
                    scale: [0.98, 1.05, 0.98]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-x-0 inset-y-8 bg-white blur-[60px] rounded-full pointer-events-none"
                />

                <Image
                  src="/branding/byfabric.PNG"
                  alt="ByFabric Logo"
                  fill
                  className="relative z-10 object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] brightness-105"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-[1000] mb-8 tracking-tighter leading-[0.9] uppercase italic">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 bg-[length:200%_auto] animate-gradient">Tekstil</span><br />
              <span className="text-zinc-500/50">Çözümleri</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-bold leading-relaxed mb-12 tracking-tight">
              Koltuk döşemelik kumaşlar ve mobilya imalatı için profesyonel <br className="hidden md:block" />
              ekibimizle en trend koleksiyonları kapınıza getiriyoruz.
            </p>
          </motion.div>

          {/* Call to Action Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative w-px h-24 bg-zinc-800">
              <motion.div
                animate={{ y: [0, 96, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[-1px] w-[3px] h-8 bg-rose-500 blur-[2px]"
              />
            </div>
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">Temsilcilerimiz</span>
          </motion.div>
        </motion.div>

        {/* Reps Grid - Staggered */}
        <div className="w-full max-w-7xl mx-auto mt-24 md:mt-48 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {reps.map((rep) => (
              <motion.div key={rep.id} variants={itemVariants}>
                <RepCard
                  username={rep.username}
                  name={rep.name}
                  title={rep.title}
                  branch={rep.branch}
                  image={rep.profileImage}
                  phone={rep.contactInfo.phone}
                  logoSrc={rep.companyLogo}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Improved Footer */}
        <footer className="mt-32 md:mt-64 py-16 border-t border-white/5 w-full bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="h-10 w-32 relative opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image src="/branding/byfabric.PNG" alt="ByFabric" fill className="object-contain" />
              </div>
              <p className="text-zinc-700 text-[10px] font-black tracking-widest uppercase">Professional Sales Ecosystem</p>
            </div>

            <p className="text-zinc-600 text-xs font-bold tracking-tight">
              © {new Date().getFullYear()} BYFABRIC. GLOBAL TEXTILE SOLUTIONS.
            </p>

            <div className="flex gap-8">
              {['Gizlilik', 'İletişim', 'Katalog'].map((link) => (
                <a key={link} href="#" className="text-zinc-700 hover:text-rose-500 transition-all text-[10px] font-black uppercase tracking-[0.2em]">{link}</a>
              ))}
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
