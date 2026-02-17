"use client";

import Image from "next/image";
import { MapPin, Phone, Building2 } from "lucide-react";

interface BusinessCardProps {
    name: string;
    title: string;
    branch?: string;
    phone: string;
    image: string;
    logoSrc: string;
    company: string;
    qrCodeDataUrl?: string;
}

export function BusinessCard({ name, title, branch, phone, image, logoSrc, company, qrCodeDataUrl }: BusinessCardProps) {
    return (
        <div
            id="business-card-capture"
            style={{
                width: '800px',
                height: '450px',
                backgroundColor: '#0a0a0a',
                color: 'white',
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                fontFamily: 'sans-serif'
            }}
        >
            {/* Background Decor */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: '#0a0a0a' }}
            />
            <div
                className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
                style={{ backgroundColor: 'rgba(225, 29, 72, 0.05)' }}
            />

            {/* Content Area */}
            <div className="relative z-10 flex w-full h-full p-12 gap-12 items-center">
                {/* Profile Section */}
                <div className="relative flex-shrink-0 flex flex-col items-center gap-6">
                    <div className="relative w-44 h-44">
                        <div
                            className="absolute inset-0 rounded-full scale-110"
                            style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}
                        />
                        <div
                            className="relative w-44 h-44 rounded-[40px] overflow-hidden border border-white/10"
                            style={{ backgroundColor: '#000' }}
                        >
                            <img
                                src={image}
                                alt={name}
                                crossOrigin="anonymous"
                                className="w-full h-full object-cover"
                                style={{ display: 'block', width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col flex-grow min-w-0 h-full justify-center">
                    {/* Logo Area - Transparent with Refined Breathing Glow */}
                    <div className="relative h-20 w-52 mb-6 flex items-center justify-center overflow-visible">
                        {/* Static Subtle Ambient Glow */}
                        <div className="absolute inset-0 bg-white/[0.02] blur-2xl rounded-full" />

                        <img
                            src={logoSrc}
                            alt={company}
                            crossOrigin="anonymous"
                            className="relative z-10 max-h-full max-w-full object-contain brightness-105 animate-[pulse_4s_ease-in-out_infinite]"
                            style={{
                                display: 'block',
                                filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.4))'
                            }}
                        />
                    </div>

                    <h3
                        className="text-4xl font-black text-white mb-2 tracking-tight truncate leading-tight"
                        style={{ color: 'white' }}
                    >
                        {name}
                    </h3>

                    <p
                        className="text-rose-500 text-sm font-black tracking-[0.3em] uppercase mb-6"
                        style={{ color: '#e11d48' }}
                    >
                        {title}
                    </p>

                    <div className="flex justify-between items-end">
                        <div className="space-y-4">
                            {branch && (
                                <div className="flex items-center gap-4 text-zinc-300 text-base font-bold">
                                    <span style={{ color: '#e11d48' }}>📍</span>
                                    <span className="uppercase tracking-wider" style={{ color: '#d4d4d8' }}>{branch}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-4 text-zinc-300 text-base font-bold">
                                <span style={{ color: '#e11d48' }}>📞</span>
                                <span className="tracking-widest" style={{ color: '#d4d4d8' }}>{phone}</span>
                            </div>
                        </div>

                        {/* QR Code Section */}
                        {qrCodeDataUrl && (
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-br from-rose-500/20 to-blue-500/20 blur-lg opacity-50" />
                                <div className="relative bg-white p-2 rounded-xl shadow-2xl">
                                    <img
                                        src={qrCodeDataUrl}
                                        alt="QR Code"
                                        className="w-24 h-24 block"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
