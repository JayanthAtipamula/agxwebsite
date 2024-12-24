const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const imageDir = path.join(__dirname, '../src/assets');
  const files = await fs.readdir(imageDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(imageDir, file);
      const webpPath = filePath.replace(/\.[^.]+$/, '.webp');
      
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      await sharp(filePath)
        .resize(800, null, { withoutEnlargement: true })
        .toFile(filePath.replace(/(\.[^.]+)$/, '.min$1'));
    }
  }
}

optimizeImages().catch(console.error); 