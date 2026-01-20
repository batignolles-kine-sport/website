import { Cloudinary } from '@cloudinary/url-gen';
import { fill, scale, crop, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { blur as blurEffect } from '@cloudinary/url-gen/actions/effect';

// Initialize Cloudinary instance
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
    console.warn('⚠️ VITE_CLOUDINARY_CLOUD_NAME is not defined in .env.local');
}

export const cld = new Cloudinary({
    cloud: {
        cloudName: cloudName || 'demo',
    },
});

/**
 * Options for creating a Cloudinary image
 */
export interface CloudinaryImageOptions {
    width?: number;
    height?: number;
    aspectRatio?: string;
    quality?: 'auto' | number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    gravity?: string;
    resizeMode?: 'fill' | 'scale' | 'crop' | 'thumb';
    blur?: boolean | number;
}

/**
 * Create a Cloudinary image with transformations
 * @param publicId - The public ID of the image in Cloudinary (e.g., 'blog/douleur-genou')
 * @param options - Transformation options
 * @returns Cloudinary image object
 */
export const getCloudinaryImage = (
    publicId: string,
    options: CloudinaryImageOptions = {}
) => {
    const {
        width = 1200,
        aspectRatio,
        quality = 'auto',
        format = 'auto',
        gravity,
        resizeMode = 'fill',
        blur
    } = options;

    const image = cld.image(publicId);

    // Select resize action
    let resizeAction;
    switch (resizeMode) {
        case 'scale': resizeAction = scale(); break;
        case 'crop': resizeAction = crop(); break;
        case 'thumb': resizeAction = thumbnail(); break;
        default: resizeAction = fill(); break;
    }

    // Apply resize transformation
    if (aspectRatio) {
        const [w, h] = aspectRatio.split(':').map(Number);
        resizeAction.width(width).aspectRatio(w / h);
    } else {
        resizeAction.width(width);
    }

    // Apply gravity if provided and using fill/crop/thumb
    if (gravity === 'auto' && resizeMode !== 'scale') {
        resizeAction.gravity(autoGravity());
    }

    image.resize(resizeAction);

    // Apply blur effect if requested
    if (blur) {
        const blurStrength = typeof blur === 'number' ? blur : 1000;
        image.effect(blurEffect(blurStrength));
    }

    // Apply quality optimization
    if (quality === 'auto') {
        image.quality(auto());
    } else {
        image.quality(quality);
    }

    // Apply format optimization
    if (format === 'auto') {
        image.format(autoFormat());
    }

    return image;
};

/**
 * Create a responsive Cloudinary image with default settings
 * Includes lazy loading, responsive srcset, and blur placeholder
 * @param publicId - The public ID of the image in Cloudinary
 * @param aspectRatio - Optional aspect ratio (e.g., '16:9')
 * @returns Cloudinary image object
 */
export const getResponsiveImage = (
    publicId: string,
    aspectRatio?: string
) => {
    return getCloudinaryImage(publicId, {
        width: 1600,
        aspectRatio,
        quality: 'auto',
        format: 'auto',
    });
};

/**
 * Convert a local image path to a Cloudinary public ID
 * @param path - Local image path (e.g., '/images/blog/douleur-genou.jpg')
 * @returns Cloudinary public ID (e.g., 'blog/douleur-genou')
 */
export const pathToPublicId = (path: string): string => {
    // Remove leading slash and /images/ prefix
    let publicId = path.replace(/^\//, '').replace(/^images\//, '');

    // Remove file extension
    publicId = publicId.replace(/\.(jpg|jpeg|png|webp)$/i, '');

    return publicId;
};

/**
 * Check if an image path is a local Cloudinary-managed image
 * @param path - Image path to check
 * @returns true if the image should be served via Cloudinary
 */
export const isCloudinaryImage = (path: string): boolean => {
    return path.startsWith('/images/') || path.startsWith('./images/');
};
