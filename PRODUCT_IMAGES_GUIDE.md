# Product Images Guide - 8 Products

This guide provides recommendations for finding matching images for the 8 products displayed on the main page.

## Current Products (First 8)

### 1. Telegram Stars (`telegram-stars.svg`)
- **Product**: استارز تلگرام / Telegram Stars
- **Current Image**: Custom SVG placeholder
- **Recommended Sources**:
  - Official Telegram branding assets
  - Simple icon: Star symbol with Telegram colors (blue/white)
  - Icon libraries: Font Awesome, Heroicons, or Simple Icons
  - Search: "Telegram Stars icon" or "Telegram currency icon"

### 2. Telegram Premium (`telegram-premium.svg`)
- **Product**: اشتراک تلگرام پرمیوم / Telegram Premium
- **Current Image**: Custom SVG placeholder
- **Recommended Sources**:
  - Official Telegram Premium logo/badge
  - Crown or premium badge icon with Telegram blue
  - Icon libraries: Simple Icons has Telegram logo
  - Search: "Telegram Premium badge" or "Telegram Premium logo"

### 3. Xbox Gift Card (`xbox.svg`)
- **Product**: گیفت کارت ایکس باکس / Xbox Gift Card
- **Current Image**: Custom SVG with Xbox X logo
- **Recommended Sources**:
  - Official Xbox logo (Microsoft brand guidelines)
  - Xbox gift card mockup images
  - Icon libraries: Simple Icons has Xbox logo
  - Search: "Xbox logo SVG" or "Xbox gift card icon"

### 4. Google Play Visa Card (`google-play.svg`)
- **Product**: ویزا کارت گوگل پلی / Google Play Visa Card
- **Current Image**: Custom SVG with Google Play triangle
- **Recommended Sources**:
  - Official Google Play logo
  - Credit card icon with Google Play branding
  - Icon libraries: Simple Icons has Google Play logo
  - Search: "Google Play logo SVG" or "Google Play card icon"

### 5. Steam Gift Card (`steam.svg`)
- **Product**: گیفت کارت استیم / Steam Gift Card
- **Current Image**: Custom SVG placeholder
- **Recommended Sources**:
  - Official Steam logo (Valve brand guidelines)
  - Steam gift card mockup
  - Icon libraries: Simple Icons has Steam logo
  - Search: "Steam logo SVG" or "Steam gift card icon"

### 6. PlayStation Gift Card (`playstation.svg`)
- **Product**: گیفت کارت پلی استیشن / PlayStation Gift Card
- **Current Image**: Custom SVG placeholder
- **Recommended Sources**:
  - Official PlayStation logo (Sony brand guidelines)
  - PlayStation gift card mockup
  - Icon libraries: Simple Icons has PlayStation logo
  - Search: "PlayStation logo SVG" or "PSN gift card icon"

### 7. Apple iTunes Gift Card (`apple-itunes.svg`)
- **Product**: گیفت کارت اپل آیتونز / Apple iTunes Gift Card
- **Current Image**: Custom SVG placeholder
- **Recommended Sources**:
  - Official Apple logo or iTunes logo
  - Apple gift card mockup
  - Icon libraries: Simple Icons has Apple logo
  - Search: "Apple iTunes logo SVG" or "Apple gift card icon"

### 8. AI Premium Accounts (`ai-premium.svg`)
- **Product**: اشتراک هوش مصنوعی / AI Premium Accounts
- **Current Image**: Custom SVG with robot/phone icon
- **Recommended Sources**:
  - AI/robot icon with premium badge
  - Brain or neural network icon
  - Icon libraries: Heroicons, Font Awesome (robot/brain icons)
  - Search: "AI premium icon" or "artificial intelligence logo"

## Recommended Image Sources

### Free Icon Libraries
1. **Simple Icons** (https://simpleicons.org/)
   - Brand logos: Telegram, Xbox, Google Play, Steam, PlayStation, Apple
   - SVG format, free to use
   - Consistent style

2. **Heroicons** (https://heroicons.com/)
   - General icons: stars, cards, premium badges
   - Clean, modern design
   - SVG format

3. **Font Awesome** (https://fontawesome.com/)
   - Extensive icon library
   - Some free icons available
   - SVG format

### Image Requirements
- **Format**: SVG (preferred) or PNG with transparency
- **Size**: 200x200px to 400x400px (square)
- **Style**: Clean, professional, consistent across all products
- **Background**: Transparent or matching product gradient
- **Colors**: Match brand colors or use neutral colors

### Quick Implementation Steps

1. **Download icons from Simple Icons**:
   ```bash
   # Visit https://simpleicons.org/ and download SVG logos
   # Save to: public/images/products/
   ```

2. **Customize if needed**:
   - Add background gradients matching product cards
   - Adjust colors to match brand guidelines
   - Ensure consistent sizing

3. **Update image paths** (if filenames change):
   - Check `data/products.ts` for correct paths
   - Ensure all 8 products have matching images

## Alternative: Use Placeholder Service

If you need temporary images while sourcing official ones:

```typescript
// In data/products.ts, you can use:
image: `https://via.placeholder.com/200x200/0284c7/ffffff?text=${encodeURIComponent(product.titleEn || product.title)}`
```

## Notes
- Always respect brand guidelines when using official logos
- Ensure images are optimized for web (SVG preferred)
- Maintain consistent visual style across all product images
- Test images on both light and dark backgrounds if applicable
