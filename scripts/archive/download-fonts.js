import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL from index.html (Inter + Playfair Display)
const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";

const OUTPUT_DIR = path.resolve(__dirname, '../public/fonts');
const CSS_OUTPUT = path.resolve(__dirname, '../src/styles/fonts.css');

// Ensure dirs
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
const stylesDir = path.dirname(CSS_OUTPUT);
if (!fs.existsSync(stylesDir)) fs.mkdirSync(stylesDir, { recursive: true });

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest);
            reject(err);
        });
    });
};

const fetchCSS = (url) => {
    return new Promise((resolve, reject) => {
        // User-Agent is crucial to get woff2
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const run = async () => {
    console.log('Fetching Google Fonts CSS...');
    const css = await fetchCSS(GOOGLE_FONTS_URL);

    let newCss = css;
    const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g;
    let match;
    const downloads = [];
    const processedUrls = new Set();
    const downloadMap = new Map();

    while ((match = urlRegex.exec(css)) !== null) {
        const url = match[1];
        if (processedUrls.has(url)) continue;
        processedUrls.add(url);

        const filename = path.basename(url);
        // Avoid collisions if same filename (rare for gstatic hashes but possible)
        const localFilename = filename;
        const localPath = path.join(OUTPUT_DIR, localFilename);

        const publicPath = `/fonts/${localFilename}`;

        console.log(`Downloading ${localFilename}...`);
        downloads.push(downloadFile(url, localPath));

        downloadMap.set(url, publicPath);
    }

    await Promise.all(downloads);

    // Replace all URLs in CSS
    downloadMap.forEach((localPath, url) => {
        // Escape regex special chars in url
        const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        newCss = newCss.replace(new RegExp(escapedUrl, 'g'), localPath);
    });

    fs.writeFileSync(CSS_OUTPUT, newCss);
    console.log(`Fonts downloaded to ${OUTPUT_DIR}`);
    console.log(`CSS saved to ${CSS_OUTPUT}`);
};

run().catch(console.error);
