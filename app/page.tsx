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

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-rose-500/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(233,30,99,0.15)_0%,transparent_70%)] blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      </div>

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex justify-center mb-12"
          >
            <div className="relative h-32 w-80 md:h-40 md:w-[450px]">
              <Image
                src="/byfabric_final.png"
                alt="ByFabric Logo"
                fill
                className="object-contain filter drop-shadow-[0_0_15px_rgba(233,30,99,0.3)]"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Toptan <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Züccaciye & Döşeme</span><br />
              <span className="text-zinc-400">Malzemelerinde Uzman Kadromuz</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-12">
              Sektörün öncü markalarını, tecrübeli satış temsilcilerimizle <br className="hidden md:block" />
              ihtiyaç duyduğunuz her an kapınıza getiriyoruz.
            </p>
          </motion.div>

          {/* Call to Action Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-px h-24 bg-gradient-to-b from-rose-500/50 to-transparent" />
            <span className="text-zinc-600 text-xs font-bold uppercase tracking-[0.2em]">Temsilcilerimiz</span>
          </motion.div>
        </motion.div>

        {/* Reps Grid */}
        <div className="w-full max-w-7xl mx-auto mt-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {(reps as any[]).map((rep) => (
              <RepCard
                key={rep.id}
                username={rep.username}
                name={rep.name}
                title={rep.title}
                branch={rep.branch}
                image={rep.profileImage}
                phone={rep.contactInfo.phone}
              />
            ))}
          </motion.div>
        </div>

        {/* Improved Footer */}
        <footer className="mt-40 py-12 border-t border-white/5 w-full">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="h-8 w-24 relative opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image src="/byfabric_final.png" alt="ByFabric" fill className="object-contain" />
              </div>
              <span className="text-zinc-600 text-sm">| Professional Sales Platform</span>
            </div>

            <p className="text-zinc-500 text-sm font-medium">
              © {new Date().getFullYear()} ByFabric. Tüm hakları saklıdır.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-zinc-600 hover:text-rose-500 transition-colors text-xs font-bold uppercase tracking-wider">Gizlilik Politikası</a>
              <a href="#" className="text-zinc-600 hover:text-rose-500 transition-colors text-xs font-bold uppercase tracking-wider">İletişim</a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
