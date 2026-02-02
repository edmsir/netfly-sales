"use client";

import { reps } from "@/data/reps";
import { RepCard } from "@/components/RepCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.1)_0%,transparent_50%)]" />
      </div>

      <section className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            NETFLY <span className="text-blue-600">SALES</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
            Profesyonel çözüm ortaklarımızla tüm ihtiyaçlarınıza <br className="hidden md:block" /> hızla cevap veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
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
        </div>

        <footer className="mt-32 text-center text-zinc-600 text-sm font-medium">
          <p>© {new Date().getFullYear()} Netfly Digital. Tüm hakları saklıdır.</p>
        </footer>
      </section>
    </main>
  );
}
