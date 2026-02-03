"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { reps } from "@/data/reps";
import { ProductCarousel } from "@/components/ProductCarousel";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";
import { Phone, MessageCircle, ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RepPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = use(params);
  const rep = (reps as any[]).find((r) => r.username === username);

  if (!rep) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Decor - Optimized for Performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.08)_0%,transparent_50%)]" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-50 container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 pt-4 md:pt-8 pb-12 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">

          {/* Large Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl bg-[#111]">
              <Image
                src={rep.profileImage}
                alt={rep.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </motion.div>

          {/* Info Block */}
          <div className="flex-grow text-center lg:text-left">
            {/* Company Logo Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8 md:mb-10 flex justify-center lg:justify-start"
            >
              <div className="relative h-32 w-80 md:h-40 md:w-96 bg-white/5 rounded-[32px] p-6 backdrop-blur-sm border border-white/5">
                <Image
                  src={rep.companyLogo}
                  alt={rep.company || "Company Logo"}
                  fill
                  className="object-contain object-center lg:object-left brightness-125"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
            >
              {rep.title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-5xl md:text-7xl font-black mb-2 tracking-tight"
            >
              {rep.name}
            </motion.h1>

            {rep.branch && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-zinc-400 text-lg mb-8 font-medium italic"
              >
                <MapPin className="w-5 h-5 text-blue-500" />
                {rep.branch}
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8 md:mb-10 leading-relaxed font-medium"
            >
              {rep.bio}
            </motion.p>

            {/* Quick Contact Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0"
            >
              <a
                href={`tel:${rep.contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Ara
              </a>
              <a
                href={`https://wa.me/${rep.contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all active:scale-95 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="hidden xl:block shrink-0 bg-white/5 p-6 rounded-[32px] border border-white/10 backdrop-blur-xl"
          >
            <div className="mb-4 text-center">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Profil Paylaş</p>
            </div>
            <QRCodeGenerator url={`https://byfabric.netlify.app/${rep.username}`} />
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 bg-zinc-950/50 backdrop-blur-sm border-t border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-6">

          {/* Mobile/Tablet QR (Visible on smaller screens) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:hidden flex flex-col items-center mb-20"
          >
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/10 backdrop-blur-xl">
              <div className="mb-4 text-center">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Profil QR Kodu</p>
              </div>
              <QRCodeGenerator url={`https://byfabric.netlify.app/${rep.username}`} />
            </div>
          </motion.div>

          {rep.products && rep.products.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <ProductCarousel products={rep.products} />
            </motion.div>
          )}

          <div className="mt-20 md:mt-32 text-center text-zinc-600 text-sm font-medium">
            <p>© {new Date().getFullYear()} Netfly Sales. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
