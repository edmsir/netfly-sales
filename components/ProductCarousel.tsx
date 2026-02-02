"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

type Product = {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
};

interface ProductCarouselProps {
    products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [AutoScroll({ speed: 2, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!products || products.length === 0) return null;

    return (
        <div className="relative py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-2">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Ürün Portföyü
                    </h2>
                    <p className="text-zinc-400 font-medium italic">Seçkin ürün listemiz ve güncel stok bilgileri.</p>
                </div>

                <div className="flex gap-3 mt-6 md:mt-0">
                    <button
                        onClick={scrollPrev}
                        className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/10 transition-all hover:scale-105"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/10 transition-all hover:scale-105"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex -ml-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_33.33%] min-w-0 transform-gpu backface-hidden"
                        >
                            <div className="bg-[#0f0f0f] border border-white/10 rounded-[32px] overflow-hidden flex flex-col group hover:border-blue-500/30 transition-all duration-500 h-full">
                                <div className="relative h-80 w-full overflow-hidden bg-[#111] p-4">
                                    {product.image && (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    )}
                                    {product.price && (
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-blue-400 font-bold">
                                            {product.price}
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                        {product.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-8 leading-relaxed line-clamp-3">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto">
                                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold transition-all group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                            <ShoppingBag className="w-5 h-5" />
                                            Satın Al / Bilgi Al
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
