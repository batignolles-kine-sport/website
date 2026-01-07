#!/usr/bin/env node

/**
 * Cloudinary Image Migration Script
 * 
 * This script uploads all images from /public/images to Cloudinary
 * while preserving the folder structure as public IDs.
 * 
 * Usage: npm run migrate-images
 */

import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
import { readdir, stat } from 'fs/promises';
import { join, relative, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: join(__dirname, '../.env.local') });

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.VITE_CLOUDINARY_API_KEY,
    api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

interface UploadResult {
    success: boolean;
    publicId: string;
    localPath: string;
    error?: string;
}

/**
 * Recursively get all image files in a directory
 */
async function getImageFiles(dir: string): Promise<string[]> {
    const files: string[] = [];
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            const subFiles = await getImageFiles(fullPath);
            files.push(...subFiles);
        } else if (entry.isFile()) {
            const ext = parse(entry.name).ext.toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                files.push(fullPath);
            }
        }
    }

    return files;
}

/**
 * Convert local file path to Cloudinary public ID
 */
function getPublicId(localPath: string, baseDir: string): string {
    const relativePath = relative(baseDir, localPath);
    const parsed = parse(relativePath);

    // Remove extension and return path (e.g., 'blog/douleur-genou')
    return join(parsed.dir, parsed.name).replace(/\\/g, '/');
}

/**
 * Upload a single image to Cloudinary
 */
async function uploadImage(
    localPath: string,
    publicId: string
): Promise<UploadResult> {
    try {
        console.log(`📤 Uploading: ${publicId}...`);

        const result = await cloudinary.uploader.upload(localPath, {
            public_id: publicId,
            overwrite: false, // Don't overwrite if already exists
            resource_type: 'image',
            folder: '', // Public ID already includes folder structure
        });

        console.log(`✅ Success: ${publicId} (${result.bytes} bytes)`);

        return {
            success: true,
            publicId,
            localPath,
        };
    } catch (error: any) {
        // Check if error is due to existing image
        if (error.http_code === 400 && error.message?.includes('already exists')) {
            console.log(`⏭️  Skipped: ${publicId} (already exists)`);
            return {
                success: true,
                publicId,
                localPath,
            };
        }

        console.error(`❌ Failed: ${publicId} - ${error.message}`);
        return {
            success: false,
            publicId,
            localPath,
            error: error.message,
        };
    }
}

/**
 * Main migration function
 */
async function migrateImages() {
    console.log('🚀 Starting Cloudinary image migration...\n');

    // Verify Cloudinary configuration
    if (!process.env.VITE_CLOUDINARY_CLOUD_NAME) {
        console.error('❌ Error: VITE_CLOUDINARY_CLOUD_NAME not found in .env.local');
        process.exit(1);
    }

    const imagesDir = join(__dirname, '../public/images');

    console.log(`📁 Scanning directory: ${imagesDir}\n`);

    // Get all image files
    const imageFiles = await getImageFiles(imagesDir);

    console.log(`📊 Found ${imageFiles.length} images to upload\n`);

    if (imageFiles.length === 0) {
        console.log('✅ No images to upload. Exiting.');
        return;
    }

    // Upload images with progress tracking
    const results: UploadResult[] = [];
    let successCount = 0;
    let failCount = 0;
    let skipCount = 0;

    for (let i = 0; i < imageFiles.length; i++) {
        const localPath = imageFiles[i];
        const publicId = getPublicId(localPath, imagesDir);

        console.log(`\n[${i + 1}/${imageFiles.length}]`);

        const result = await uploadImage(localPath, publicId);
        results.push(result);

        if (result.success) {
            if (result.error) {
                skipCount++;
            } else {
                successCount++;
            }
        } else {
            failCount++;
        }

        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Migration Summary');
    console.log('='.repeat(60));
    console.log(`✅ Successfully uploaded: ${successCount}`);
    console.log(`⏭️  Skipped (already exists): ${skipCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(`📦 Total processed: ${imageFiles.length}`);
    console.log('='.repeat(60));

    // Print failed uploads if any
    if (failCount > 0) {
        console.log('\n❌ Failed uploads:');
        results
            .filter(r => !r.success)
            .forEach(r => {
                console.log(`  - ${r.publicId}: ${r.error}`);
            });
    }

    console.log('\n✨ Migration complete!\n');
}

// Run migration
migrateImages().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
});
