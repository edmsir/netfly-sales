"use client";

import { use, useEffect, Suspense, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { reps } from "@/data/reps";
import { Phone, MessageCircle, ArrowLeft, MapPin, Share2, FileDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Dynamic imports for code splitting
const ProductCarousel = dynamic(() => import("@/components/ProductCarousel").then(mod => ({ default: mod.ProductCarousel })), {
  loading: () => <div className="py-12 text-center text-zinc-500">Ürünler yükleniyor...</div>,
  ssr: false // Heavy component, load only on client
});

const QRCodeGenerator = dynamic(() => import("@/components/QRCodeGenerator").then(mod => ({ default: mod.QRCodeGenerator })), {
  loading: () => <div className="w-32 h-32 bg-white/10 rounded-2xl animate-pulse" />,
});

const BusinessCard = dynamic(() => import("@/components/BusinessCard").then(mod => ({ default: mod.BusinessCard })), {
  ssr: false // Only needed for image generation
});

export default function RepPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = use(params);
  const rep = reps.find((r) => r.username === username);
  const [isSharing, setIsSharing] = useState(false);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Generate QR code on mount
    const generateQR = async () => {
      if (!rep) return;
      try {
        const QRCode = (await import('qrcode')).default;
        const url = await QRCode.toDataURL(
          `https://byfabric.netlify.app/${rep.username}`,
          { width: 300, margin: 2, color: { dark: '#000000', light: '#ffffff' } }
        );
        setQrDataUrl(url);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
      }
    };
    generateQR();
  }, [username]);

  if (!rep) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-rose-500/30 overflow-x-hidden relative">
      {/* Premium Studio Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Deep Base Background */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Studio Lighting - Static Auras */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-rose-600/5 blur-[160px] rounded-full" />

        {/* Subtle Noise Texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Center Spotlight & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-50 container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 pt-4 md:pt-8 pb-12 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">

          {/* Large Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl bg-[#111] will-change-transform">
              <Image
                src={rep.profileImage}
                alt={rep.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 224px, 320px"
                quality={85}
              />
            </div>
          </motion.div>

          {/* Info Block */}
          <div className="flex-grow text-center lg:text-left">
            {/* Company Logo Area - No Box, Pure Glow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 md:mb-10 flex justify-center lg:justify-start"
            >
              <div className="relative h-20 w-48 md:h-24 md:w-64 flex items-center justify-center overflow-visible">
                {/* Refined Subtle Breathing Glow Layer */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [0.98, 1.02, 0.98]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-white blur-3xl rounded-full pointer-events-none"
                />

                <Image
                  src={rep.companyLogo}
                  alt={rep.company || "Company Logo"}
                  fill
                  className="relative z-10 object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] brightness-[1.02]"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
            >
              {rep.title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-4xl md:text-7xl font-black mb-2 tracking-tight"
            >
              {rep.name}
            </motion.h1>

            {rep.branch && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-zinc-400 text-lg mb-8 font-medium italic"
              >
                <MapPin className="w-5 h-5 text-blue-500" />
                {rep.branch}
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8 md:mb-10 leading-relaxed font-medium"
            >
              {rep.bio}
            </motion.p>

            {/* Quick Contact Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0"
            >
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
            </motion.div>
          </div>

          {/* Business Card (HIDDEN for capture - using extreme off-screen instead of hidden for rendering accuracy) */}
          <div
            id="business-card-capture-container"
            className="fixed top-0 left-0 pointer-events-none"
            style={{
              width: '800px',
              height: '450px',
              zIndex: -100,
              opacity: 0.01,
              backgroundColor: '#0a0a0a'
            }}
          >
            <BusinessCard
              name={rep.name}
              title={rep.title}
              branch={rep.branch}
              phone={rep.contactInfo.phone}
              image={rep.profileImage}
              logoSrc={rep.companyLogo}
              company={rep.company}
              qrCodeDataUrl={qrDataUrl}
            />
          </div>

          {/* Sharing Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="w-full xl:w-auto flex flex-col items-center gap-4"
          >
            {/* PDF Download Button */}
            <button
              disabled={isDownloadingPDF}
              className="relative group bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 text-white px-8 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 border-2 border-white/20 overflow-hidden w-full xl:w-auto"
              onClick={async () => {
                setIsDownloadingPDF(true);
                try {
                  // Lazy load PDF libraries
                  const { pdf } = await import('@react-pdf/renderer');
                  const { PDFCatalog } = await import('@/components/PDFCatalog');
                  const { compressImage } = await import('@/lib/utils');

                  // Generate QR code as data URL
                  const QRCode = (await import('qrcode')).default;
                  const qrDataUrl = await QRCode.toDataURL(
                    `https://byfabric.netlify.app/${rep.username}`,
                    { width: 300, margin: 2 }
                  );

                  // Compress product images
                  const compressedProducts = await Promise.all(
                    ((rep.products || []) as any[]).map(async (p: any) => {
                      const compressedMain = await compressImage(p.image, 0.6, 800);

                      let compressedVariants: string[] = [];
                      let variantNames: string[] = [];

                      if (p.variants) {
                        // Extract names BEFORE compression
                        variantNames = p.variants.map((v: string) => {
                          const filename = v.split('/').pop() || "";
                          return filename.split('.')[0].replace(/-/g, ' ');
                        });

                        compressedVariants = await Promise.all(
                          p.variants.map((v: string) => compressImage(v, 0.6, 400))
                        );
                      }

                      return {
                        ...p,
                        image: compressedMain,
                        variants: p.variants ? compressedVariants : undefined,
                        variantNames: p.variants ? variantNames : undefined,
                      };
                    })
                  );

                  // Generate and download PDF
                  const blob = await pdf(
                    <PDFCatalog
                      repName={rep.name}
                      repTitle={rep.title}
                      repBranch={rep.branch}
                      repPhone={rep.contactInfo.phone}
                      repCompany={rep.company}
                      repProfileImage={rep.profileImage}
                      companyLogo={rep.companyLogo}
                      profileUrl={`byfabric.netlify.app/${rep.username}`}
                      products={compressedProducts as any}
                      qrCodeDataUrl={qrDataUrl}
                    />
                  ).toBlob();

                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = `${rep.name.replace(/\s+/g, '-')}_Katalog.pdf`;
                  link.click();
                  URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('PDF generation failed:', error);
                  alert('PDF oluşturulurken bir hata oluştu.');
                } finally {
                  setIsDownloadingPDF(false);
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center justify-center gap-3">
                <FileDown className="w-6 h-6" />
                {isDownloadingPDF ? 'PDF Hazırlanıyor...' : 'PDF Katalog İndir'}
              </div>
            </button>

            {/* Share Profile Button */}
            <button
              disabled={isSharing}
              className="relative group bg-gradient-to-br from-rose-600 via-rose-500 to-red-500 text-white px-8 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 border-2 border-white/20 overflow-hidden w-full xl:w-auto"
              onClick={async () => {
                setIsSharing(true);
                try {
                  // Lazy load html-to-image only when needed (reduces initial bundle)
                  const htmlToImage = await import('html-to-image');

                  const container = document.getElementById('business-card-capture-container');
                  if (!container) throw new Error('Card not found');

                  // Add much longer delay for final attempt to ensure all images/fonts are rock solid
                  await new Promise(resolve => setTimeout(resolve, 1500));

                  const dataUrl = await htmlToImage.toPng(container, {
                    quality: 1.0,
                    pixelRatio: 3,
                    cacheBust: true,
                    backgroundColor: '#0a0a0a',
                    skipFonts: false,
                    style: {
                      opacity: '1',
                      visibility: 'visible',
                      transform: 'none',
                    }
                  });

                  const blob = await (await fetch(dataUrl)).blob();
                  const file = new File([blob], `${rep.name.replace(/\s+/g, '-')}_BusinessCard.png`, { type: 'image/png' });

                  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                      title: `${rep.name} - ${rep.title}`,
                      text: `Merhaba! Ben ${rep.name}, ${rep.title}. Benimle iletişime geçmek için: ${rep.contactInfo.phone}`,
                      files: [file],
                    });
                  } else {
                    // Fallback: Download the image
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = `${rep.name.replace(/\s+/g, '-')}_BusinessCard.png`;
                    link.click();
                    alert('Paylaşım bu cihazda desteklenmiyor. Kartvizit cihazınıza indirildi.');
                  }
                } catch (error) {
                  console.error('Sharing failed:', error);
                  alert('Paylaşım sırasında bir hata oluştu.');
                } finally {
                  setIsSharing(false);
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center justify-center gap-3">
                <Share2 className={`w-6 h-6 ${isSharing ? 'animate-pulse' : 'group-hover:rotate-12'} transition-transform`} />
                {isSharing ? 'HAZIRLANIYOR...' : 'PROFİLİ PAYLAŞ'}
              </div>
            </button>

            {/* QR Code Section - Re-styled */}
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/10 backdrop-blur-xl w-full max-w-xl xl:max-w-md">
              <div className="mb-4 text-center">
                <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">Hızlı Erişim QR</p>
              </div>
              <div className="flex justify-center">
                <QRCodeGenerator url={`https://byfabric.netlify.app/${rep.username}`} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 bg-zinc-950/50 backdrop-blur-sm border-t border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-6">


          {rep.products && rep.products.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <ProductCarousel products={rep.products} />
            </motion.div>
          )}

          <div className="mt-20 md:mt-32 text-center text-zinc-600 text-sm font-medium">
            <p>© {new Date().getFullYear()} Netfly Sales. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
