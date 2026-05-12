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
            {/* Premium Studio Background Layers */}
            <div className="absolute inset-0 bg-[#050505]" />

            {/* Soft Studio Lighting (Using Gradients for Capture Stability) */}
            <div 
                className="absolute top-[-20%] right-[-10%] w-[70%] h-[120%] opacity-40" 
                style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.1) 0%, transparent 70%)' }}
            />
            <div 
                className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] opacity-40" 
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
            />

            {/* Subtle Diagonal Light Leak */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rotate-12 opacity-50" />

            {/* Professional Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-gradient-to-tr from-white/5 to-transparent" />

            {/* Vignette for Focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Content Area */}
            <div className="relative z-10 flex w-full h-full p-12 gap-12 items-center">
                {/* Profile Section */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-[48px] overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#111]">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                            style={{ imageRendering: '-webkit-optimize-contrast' }}
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col flex-grow min-w-0 h-full justify-center">
                    {/* Logo Area - Enhanced Visibility */}
                    <div className="relative h-24 w-64 mb-8 flex items-center justify-start overflow-visible">
                        {/* Premium Glow using Gradients instead of Blurs for Capture Stability */}
                        <div 
                            className="absolute -inset-10 opacity-30" 
                            style={{ 
                                background: 'radial-gradient(circle, rgba(225,29,72,0.15) 0%, transparent 70%)'
                            }} 
                        />
                        <div 
                            className="absolute -inset-4 opacity-20" 
                            style={{ 
                                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)'
                            }} 
                        />

                        <img
                            src={logoSrc}
                            alt={company}
                            className="relative z-10 max-h-full max-w-full object-contain"
                            style={{
                                display: 'block',
                                imageRendering: '-webkit-optimize-contrast',
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
