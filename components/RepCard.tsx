"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

interface RepCardProps {
    username: string;
    name: string;
    title: string;
    image: string;
    phone: string;
    branch?: string;
    logoSrc?: string;
}

export function RepCard({ username, name, title, image, phone, branch, logoSrc = "/branding/byfabric.PNG" }: RepCardProps) {
    return (
        <Link href={`/${username}`} className="block group h-full">
            <div className="relative bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-rose-500/30 group-hover:shadow-[0_0_50px_-12px_rgba(225,29,72,0.2)] will-change-transform, border-color, box-shadow">
                {/* Advanced Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-710" />

                {/* Animated Background Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] pointer-events-none transition-opacity duration-500 bg-[url('/noise.svg')]" />

                {/* Company Logo Container - Refined Breathing Glow Design */}
                <div className="relative h-14 w-36 mb-10 flex items-center justify-center overflow-visible">
                    {/* Refined Subtle Breathing Glow */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.25, 0.1],
                            scale: [0.95, 1.05, 0.95]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-white/10 blur-xl rounded-full pointer-events-none z-0"
                    />
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        fill
                        className="relative z-10 object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] brightness-105 transition-all duration-500"
                        loading="lazy"
                        quality={60}
                        sizes="160px"
                    />
                </div>

                {/* Profile Image Container - 3D Effect */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-blue-500 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 scale-90 will-change-transform" />
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 bg-[#0a0a0a] will-change-transform">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 144px, 176px"
                            quality={60}
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="relative">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                        {name}
                    </h3>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-rose-500/70 text-[10px] font-black tracking-[0.3em] uppercase">{title}</p>

                        {branch && (
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] rounded-full border border-white/5 group-hover:border-rose-500/20 transition-colors">
                                <MapPin className="w-3 h-3 text-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.5)]" />
                                <span className="text-zinc-500 text-[10px] font-bold tracking-wide uppercase">{branch}</span>
                            </div>
                        )}
                    </div>
                </div>

                <p className="mt-6 text-zinc-500 text-sm font-medium tracking-tight mb-8">
                    {phone}
                </p>

                <div className="mt-auto w-full relative overflow-hidden group/btn">
                    <div className="flex items-center justify-center gap-3 text-sm font-black text-white/40 bg-white/[0.02] border border-white/5 px-8 py-4 rounded-2xl transition-all duration-500 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500 will-change-transform, background-color">
                        PROFİLİ İNCELE
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
