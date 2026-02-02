"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface RepCardProps {
    username: string;
    name: string;
    title: string;
    image: string;
    phone: string;
}

export function RepCard({ username, name, title, image, phone }: RepCardProps) {
    const isOguzhan = image.includes('oguzhan');
    const logoSrc = isOguzhan ? '/bymalzeme_final.png' : '/byfabric_final.png';

    return (
        <Link href={`/${username}`} className="block group">
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-blue-500/50 transition-all duration-500 p-8 flex flex-col items-center text-center h-full">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Company Logo Mini - Ultra Large */}
                <div className="relative h-24 w-64 mb-8 opacity-100 transition-opacity">
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        fill
                        className="object-contain brightness-110"
                    />
                </div>

                {/* Profile Image Container */}
                <div className="relative w-40 h-40 mb-6 rounded-3xl overflow-hidden border-2 border-white/5 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-[#111]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 160px, 160px"
                    />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {name}
                </h3>
                <p className="text-blue-400/80 text-sm font-medium tracking-wide uppercase mb-4">{title}</p>
                <p className="text-zinc-500 text-sm mb-8">{phone}</p>

                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white/60 bg-white/5 px-6 py-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    Profili Görüntüle <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
