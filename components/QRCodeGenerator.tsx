"use client";

import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export function QRCodeGenerator({ url }: { url: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-32 h-32 bg-white/5 rounded-xl animate-pulse" />;

    return (
        <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500">
                <QRCodeCanvas
                    value={url}
                    size={160}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"H"}
                    includeMargin={false}
                />
            </div>
            <p className="mt-4 text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Profil Linki</p>
        </div>
    );
}
