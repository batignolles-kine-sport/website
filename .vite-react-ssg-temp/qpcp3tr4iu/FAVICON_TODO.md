# Favicon Generation Required

The following favicon files need to be generated from `/images/logo.svg`:

## Required Files:
- `favicon-16x16.png` - 16x16px PNG
- `favicon-32x32.png` - 32x32px PNG  
- `apple-touch-icon.png` - 180x180px PNG
- `images/og-image.jpg` - 1200x630px JPG (Open Graph image for social sharing)

## How to Generate:

### Option 1: Using online tool
1. Go to https://realfavicongenerator.net/
2. Upload `/public/images/logo.svg`
3. Download and extract to `/public/`

### Option 2: Using ImageMagick (if available)
```bash
# From logo.svg, generate favicons
convert -background none -resize 16x16 images/logo.svg favicon-16x16.png
convert -background none -resize 32x32 images/logo.svg favicon-32x32.png
convert -background none -resize 180x180 images/logo.svg apple-touch-icon.png
```

### Option 3: Manual creation
Use graphic design software (Figma, Photoshop, etc.) to export the logo at the required sizes.

## Temporary Workaround:
The site will continue to use `images/logo.svg` as fallback, but proper PNG favicons are strongly recommended for better browser compatibility and SEO.
