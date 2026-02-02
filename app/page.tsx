"use client";

import { reps } from "@/data/reps";
import { RepCard } from "@/components/RepCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.1)_0%,transparent_50%)]" />
      </div>

      <section className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            NETFLY <span className="text-blue-600">SALES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed"
          >
            Profesyonel çözüm ortaklarımızla tüm ihtiyaçlarınıza <br className="hidden md:block" /> hızla cevap veriyoruz.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full"
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

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-32 text-center text-zinc-600 text-sm font-medium"
        >
          <p>© {new Date().getFullYear()} Netfly Digital. Tüm hakları saklıdır.</p>
        </motion.footer>
      </section>
    </main>
  );
}
