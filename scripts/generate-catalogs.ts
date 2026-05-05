// @ts-nocheck
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { reps } from '../data/reps';
import { PDFCatalog } from '../components/PDFCatalog';
import path from 'path';
import fs from 'fs';
import QRCode from 'qrcode';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const outputDir = path.join(publicDir, 'catalogs');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(p: string, width: number = 800) {
    const fullPath = p.startsWith('/') ? path.join(publicDir, p) : p;
    if (!fs.existsSync(fullPath)) {
        console.warn(`Image not found: ${fullPath}`);
        return null;
    }

    try {
        // Compress image using sharp for much smaller PDF size
        return await sharp(fullPath)
            .resize(width, null, { withoutEnlargement: true })
            .jpeg({ quality: 70 })
            .toBuffer();
    } catch (err) {
        console.error(`Failed to optimize image ${p}:`, err);
        return fs.readFileSync(fullPath); // Fallback to raw buffer
    }
}

async function generate() {
    console.log('Starting OPTIMIZED PDF generation for all representatives...');

    for (const rep of reps) {
        try {
            console.log(`Generating catalog for ${rep.name} (${rep.username})...`);

            // Generate QR Code as data URL
            const qrCodeDataUrl = await QRCode.toDataURL(
                `https://byfabric.netlify.app/${rep.username}`,
                { width: 300, margin: 2 }
            );

            // Optimize all images
            const pImage = await optimizeImage(rep.profileImage, 400);
            const lLogo = await optimizeImage(rep.companyLogo, 400);

            const preparedProducts = await Promise.all((rep.products as any[]).map(async p => {
                const mainImg = await optimizeImage(p.image, 800);
                const variants = p.variants ? await Promise.all(p.variants.map(v => optimizeImage(v, 400))) : [];
                
                return {
                    ...p,
                    image: mainImg,
                    variants: variants.filter(v => v !== null)
                };
            }));

            const outputPath = path.join(outputDir, `${rep.username}.pdf`);

            await ReactPDF.renderToFile(
                React.createElement(PDFCatalog, {
                    repName: rep.name,
                    repTitle: rep.title,
                    repBranch: rep.branch,
                    repPhone: rep.contactInfo.phone,
                    repCompany: rep.company,
                    repProfileImage: pImage,
                    companyLogo: lLogo,
                    profileUrl: `https://byfabric.netlify.app/${rep.username}`,
                    products: preparedProducts as any,
                    qrCodeDataUrl: qrCodeDataUrl
                }),
                outputPath
            );

            const stats = fs.statSync(outputPath);
            console.log(`Successfully saved to ${outputPath} (${Math.round(stats.size / 1024)} KB)`);
        } catch (error) {
            console.error(`Failed to generate catalog for ${rep.name}:`, error);
        }
    }

    console.log('Done!');
}

generate();
