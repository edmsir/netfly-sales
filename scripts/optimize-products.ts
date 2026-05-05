
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const productsDir = path.join(process.cwd(), 'public', 'products');
const optimizedDir = path.join(process.cwd(), 'public', 'products_new');

async function getFiles(dir: string): Promise<string[]> {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

async function optimize() {
    console.log('Searching for images in public/products...');
    const allFiles = await getFiles(productsDir);
    const imageFiles = allFiles.filter(f => /\.(jpe?g|png|webp)$/i.test(f));

    console.log(`Found ${imageFiles.length} images. Starting optimization into public/products_new...`);

    if (!fs.existsSync(optimizedDir)) {
        fs.mkdirSync(optimizedDir, { recursive: true });
    }

    let totalSaved = 0;

    for (const file of imageFiles) {
        try {
            const relPath = path.relative(productsDir, file);
            const targetFile = path.join(optimizedDir, relPath);
            const targetDir = path.dirname(targetFile);

            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }

            const stats = await fs.promises.stat(file);
            const originalSize = stats.size;

            await sharp(file)
                .resize(1200, null, { withoutEnlargement: true })
                .jpeg({ quality: 80, progressive: true, mozjpeg: true })
                .toFile(targetFile);

            const newStats = await fs.promises.stat(targetFile);
            const saved = originalSize - newStats.size;
            totalSaved += saved;
            console.log(`Optimized: ${relPath} (${Math.round(saved / 1024)} KB saved)`);
            
            // Small sleep to avoid hammering the disk on Windows
            await new Promise(resolve => setTimeout(resolve, 50));
        } catch (err) {
            console.error(`Error optimizing ${file}:`, err);
        }
    }

    console.log(`\nOptimization Complete! Total disk space saved: ${Math.round(totalSaved / 1024 / 1024)} MB`);
    console.log('Now you can manually swap public/products and public/products_new');
}

optimize();
