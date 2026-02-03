"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, ShoppingBag, X, Maximize2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Product = {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    variants?: string[];
};

interface ProductCarouselProps {
    products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
                            <div className="bg-[#0f0f0f] border border-white/10 rounded-[32px] overflow-hidden flex flex-col group hover:border-rose-500/30 transition-all duration-500 h-full">
                                {/* Image / Collage Container */}
                                <div
                                    className="relative h-80 w-full overflow-hidden bg-[#111] p-4 cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {product.variants && product.variants.length > 0 ? (
                                        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full">
                                            {product.variants.slice(0, 4).map((variant, idx) => (
                                                <div key={idx} className="relative w-full h-full rounded-xl overflow-hidden">
                                                    <Image
                                                        src={variant}
                                                        alt={`${product.title} variant ${idx}`}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>
                                            ))}
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                                                    <Maximize2 className="w-4 h-4" />
                                                    Tüm Renkleri Gör
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    )}

                                    {product.price && (
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-rose-400 font-bold z-10">
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
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white py-4 rounded-2xl font-bold transition-all group-hover:shadow-[0_0_20px_rgba(231,31,99,0.3)]"
                                        >
                                            <ShoppingBag className="w-5 h-5" />
                                            {product.variants ? "Renk Seçenekleri" : "Satın Al / Bilgi Al"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedProduct && selectedProduct.variants && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-[110]"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-zinc-900 w-full max-w-6xl max-h-[90vh] rounded-[40px] overflow-hidden border border-white/10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8 border-b border-white/5">
                                <h3 className="text-3xl font-black text-white">{selectedProduct.title} - Renk Kartelası</h3>
                                <p className="text-zinc-400 mt-2">{selectedProduct.description}</p>
                            </div>

                            <div className="flex-grow overflow-y-auto p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 custom-scrollbar">
                                {selectedProduct.variants.map((variant, idx) => (
                                    <div key={idx} className="group relative aspect-square bg-black rounded-3xl overflow-hidden border border-white/5 hover:border-rose-500/50 transition-all duration-300">
                                        <Image
                                            src={variant}
                                            alt={`${selectedProduct.title} variant ${idx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute bottom-4 left-4 text-white font-bold text-sm">
                                                {variant.split('/').pop()?.split('.')[0] || `V-${idx + 1}`}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
