"use client";

import Link from "next/link";
import Image from "next/image";
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

export function RepCard({ username, name, title, image, phone, branch, logoSrc = "/branding/byfabric_final.png" }: RepCardProps) {
    return (
        <Link href={`/${username}`} className="block group">
            <div className="relative bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 p-8 flex flex-col items-center text-center h-full hover:border-rose-500/30 group-hover:shadow-[0_0_50px_-12px_rgba(225,29,72,0.2)]">
                {/* Advanced Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-710" />

                {/* Animated Grain/Noise Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Company Logo Container - Refined */}
                <div className="relative h-16 w-40 mb-10 bg-white/[0.03] rounded-2xl p-4 backdrop-blur-md border border-white/5 group-hover:bg-white/[0.07] transition-colors duration-500">
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        fill
                        className="object-contain brightness-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Profile Image Container - 3D Effect */}
                <div className="relative w-44 h-44 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-blue-500 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 scale-90" />
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 bg-[#0a0a0a]">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 176px, 176px"
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
                    <div className="flex items-center justify-center gap-3 text-sm font-black text-white/40 bg-white/[0.02] border border-white/5 px-8 py-4 rounded-2xl transition-all duration-500 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500">
                        PROFİLİ İNCELE
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
