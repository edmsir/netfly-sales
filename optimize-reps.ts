
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const repsDir = path.join(process.cwd(), 'public', 'reps');
const files = fs.readdirSync(repsDir);

async function optimize() {
    console.log('Optimizing representative images...');
    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const filePath = path.join(repsDir, file);
            const tempPath = path.join(repsDir, `temp_${file}`);
            
            console.log(`Processing ${file}...`);
            
            try {
                const metadata = await sharp(filePath).metadata();
                
                // Resize to max 800px width/height while maintaining aspect ratio
                await sharp(filePath)
                    .resize(800, 800, {
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .jpeg({ quality: 85, mozjpeg: true }) // Convert to optimized JPEG for smaller size
                    .toFile(tempPath);
                
                // Replace original (preserving extension for now, but content is JPEG)
                // Actually better to keep PNG if it was PNG but optimize it
                if (file.toLowerCase().endsWith('.png')) {
                    await sharp(filePath)
                        .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
                        .png({ quality: 80, compressionLevel: 9 })
                        .toFile(tempPath);
                } else {
                    await sharp(filePath)
                        .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
                        .jpeg({ quality: 85, mozjpeg: true })
                        .toFile(tempPath);
                }

                fs.unlinkSync(filePath);
                fs.renameSync(tempPath, filePath);
                
                const newSize = fs.statSync(filePath).size;
                console.log(`Optimized ${file}: ${Math.round(newSize / 1024)}KB`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
    console.log('Done!');
}

optimize();
