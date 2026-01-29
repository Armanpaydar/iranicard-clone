# Product Images Setup

## Image Directory Structure

Place product images in the following directory:
```
public/images/products/
```

## Required Images

You need to add the following product images:

1. `telegram-stars.png` - Telegram Stars product image
2. `telegram-premium.png` - Telegram Premium product image
3. `xbox.png` - Xbox Gift Card product image
4. `google-play.png` - Google Play Visa Card product image
5. `steam.png` - Steam Gift Card product image
6. `playstation.png` - PlayStation Gift Card product image
7. `apple-itunes.png` - Apple iTunes Gift Card product image
8. `ai-premium.png` - AI Premium Accounts product image

## Image Specifications

- **Format**: PNG (with transparency) or SVG
- **Recommended Size**: 200x200px to 400x400px
- **Background**: Transparent (PNG with alpha channel)
- **Aspect Ratio**: 1:1 (square) recommended
- **File Size**: Optimize images to keep file sizes small (< 100KB each)

## Using Placeholder Images

If you don't have product images yet, you can:

1. Use placeholder services like:
   - `https://via.placeholder.com/200x200/0284c7/ffffff?text=Product`
   - Or use a service like Unsplash, Pexels, etc.

2. Update the image paths in `data/products.ts` to use placeholder URLs

3. Or use the gradient backgrounds as the main visual (images are optional)

## Next.js Image Optimization

The images are automatically optimized by Next.js Image component:
- Automatic format conversion (WebP, AVIF)
- Responsive sizing
- Lazy loading
- Blur placeholder support (optional)

## Example Image Paths

If using external URLs, update `next.config.js`:

```javascript
images: {
  domains: ['your-image-host.com'],
  formats: ['image/avif', 'image/webp'],
}
```

Then update image paths in `data/products.ts` to use full URLs.
