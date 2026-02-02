"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { reps } from "@/data/reps";
import { ProductCarousel } from "@/components/ProductCarousel";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";
import { Phone, Mail, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RepPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = use(params);
  const rep = reps.find((r) => r.username === username);

  if (!rep) {
    notFound();
  }

  const currentUrl = typeof window !== "undefined"
    ? window.location.href
    : `https://netfly.com/${rep.username}`;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-8 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Large Profile Image */}
          <div className="relative shrink-0">
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
          </div>

          {/* Info Block */}
          <div className="flex-grow text-center lg:text-left">
            {/* Company Logo Area */}
            <div className="mb-10 flex justify-center lg:justify-start">
              <div className="relative h-32 w-80 md:h-40 md:w-96">
                <Image
                  src={rep.companyLogo}
                  alt={rep.company || "Company Logo"}
                  fill
                  className="object-contain object-center lg:object-left brightness-125"
                  priority
                />
              </div>
            </div>

            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest">
              {rep.title}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              {rep.name}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-medium">
              {rep.bio}
            </p>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
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
              <a
                href={`mailto:${rep.contactInfo.email}`}
                className="flex items-center justify-center gap-3 bg-zinc-800 text-white px-6 py-4 rounded-2xl font-bold border border-white/5 hover:bg-zinc-700 transition-all active:scale-95 shadow-xl"
              >
                <Mail className="w-5 h-5" />
                E-posta
              </a>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="hidden xl:block shrink-0 bg-white/5 p-6 rounded-[32px] border border-white/10 backdrop-blur-xl">
            <div className="mb-4 text-center">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Profil Paylaş</p>
            </div>
            <QRCodeGenerator url={currentUrl} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 bg-zinc-950/50 backdrop-blur-sm border-t border-white/5 py-24">
        <div className="container mx-auto px-6">

          {/* Mobile/Tablet QR (Visible on smaller screens) */}
          <div className="xl:hidden flex flex-col items-center mb-20">
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/10 backdrop-blur-xl">
              <div className="mb-4 text-center">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Profil QR Kodu</p>
              </div>
              <QRCodeGenerator url={currentUrl} />
            </div>
          </div>

          {rep.products && rep.products.length > 0 && (
            <ProductCarousel products={rep.products} />
          )}

          <div className="mt-32 text-center text-zinc-600 text-sm font-medium">
            <p>© {new Date().getFullYear()} Netfly Sales. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
