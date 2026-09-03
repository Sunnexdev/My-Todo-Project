const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootImageDir = path.join(__dirname, 'jerimic images');

async function processDirectory(directoryPath) {
  if (!fs.existsSync(directoryPath)) return;

  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      // Safely strip only the file extension
      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const webpPath = path.join(directoryPath, `${baseName}.webp`);

      try {
        // Convert to WebP first
        await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);

        console.log(`[CONVERTED SUCCESS]: ${entry.name} -> ${baseName}.webp`);

        // Safely delete original heavy file ONLY after WebP creation succeeds
        fs.unlinkSync(fullPath);
        console.log(`[REMOVED ORIGINAL]: ${entry.name}`);
      } catch (err) {
        console.error(`[ERROR PROCESSING] ${entry.name}:`, err);
      }
    }
  }
}

console.log('Processing and converting images safely...');
processDirectory(rootImageDir);
