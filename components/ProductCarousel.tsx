"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ShoppingBag, X, Maximize2 } from "lucide-react";
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

    // Duplicate products to ensure smooth infinite scrolling without gaps
    // Embla needs enough content to cover the viewport + buffer for seamless looping
    const loopCount = products.length < 6 ? 4 : 2;
    const items = Array(loopCount).fill(products).flat();

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start", // 'start' usually prevents gaps better than 'center' for continuous loops
            dragFree: true,
            skipSnaps: false,
            containScroll: false // key for infinite loop without gaps
        },
        [
            AutoScroll({
                speed: 2, // Faster speed
                stopOnInteraction: false, // Don't stop permanently on drag
                stopOnMouseEnter: true, // Pause on hover
                stopOnFocusIn: false
            })
        ]
    );

    // No need for manual interval anymore, AutoScroll handles continuous flow

    return (
        <div className="relative py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-2">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Ürün Portföyü
                    </h2>
                    <p className="text-zinc-400 font-medium italic">Seçkin ürün listemiz ve güncel stok bilgileri.</p>
                </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="flex -ml-6"
                >
                    {items.map((product, index) => (
                        <motion.div
                            key={`${product.id}-${index}`}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_33.33%] min-w-0"
                        >
                            <div className="bg-[#0f0f0f] border border-white/10 rounded-[32px] overflow-hidden flex flex-col group hover:border-rose-500/30 transition-all duration-500 h-full">
                                {/* Image / Collage Container */}
                                <div
                                    className="relative h-80 w-full overflow-hidden bg-[#111] p-4 cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {product.variants && product.variants.length > 0 ? (
                                        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full">
                                            {product.variants.slice(0, 4).map((variant: string, idx: number) => (
                                                <div key={idx} className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
                                                    <Image
                                                        src={variant}
                                                        alt={`${product.title} variant ${idx}`}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                        sizes="(max-width: 768px) 25vw, 15vw"
                                                        quality={50}
                                                        priority={index < 3}
                                                        loading={index >= 3 ? "lazy" : undefined}
                                                    />
                                                </div>
                                            ))}
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-full font-bold text-xs">
                                                    <Maximize2 className="w-3 h-3" />
                                                    Koltuk Kartelası
                                                </div>
                                            </div>
                                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 border border-white/10 uppercase tracking-tighter">
                                                {product.title.split(' ')[0]} SERİSİ
                                            </div>
                                        </div>
                                    ) : (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={50}
                                            priority={index < 3}
                                            loading={index >= 3 ? "lazy" : undefined}
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
                        </motion.div>
                    ))}
                </motion.div>
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
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            quality={40}
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md rounded-xl text-[10px] font-black text-rose-500 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 border border-rose-500/30 uppercase">
                                            {variant.split('/').pop()?.split('.')[0] || `V-${idx + 1}`}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute bottom-4 left-4 text-white font-bold text-xs">
                                                ByFabric Premium
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
