# caffeine. Website

A modern, minimal website for caffeine. specialty coffee shop in Codru, Chisinau, Moldova. Built with Next.js, React, and Framer Motion.

## Design Concept

"The Snapshot" - An editorial, photo-forward aesthetic with restrained minimalism that showcases the unique space-themed interior, premium Sanremo equipment, and curated menu through striking photography and clean typography.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and transitions
- **Montserrat Font** - Google Fonts integration
- **CSS Modules** - Scoped styling

## Features

- **Split Hero Section**: Logo on left, striking hero image on right with smooth animations
- **Menu Grid**: Two-column layout displaying drinks and pastries with updated pricing
- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 768px, 1024px, and 1440px+
- **Smooth Animations**: Framer Motion animations for scroll-triggered reveals and entrance effects
- **Performance Optimized**: Next.js Image optimization, code splitting, and lazy loading
- **Accessibility**: WCAG 2.1 Level AA compliant, keyboard navigation, focus indicators

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
caffeine/
├── app/
│   ├── layout.tsx       # Root layout with Montserrat font
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section component
│   ├── Hero.module.css  # Hero styles
│   ├── Menu.tsx         # Menu grid component
│   ├── Menu.module.css  # Menu styles
│   ├── Footer.tsx       # Footer component
│   └── Footer.module.css # Footer styles
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Brand Elements

### Typography
- **Logo & Headings**: Montserrat Bold
- **Body Text**: Montserrat Regular/Medium

### Color Palette
- **Primary**: Dark Gray (#2C2C2C), Black (#000000), White (#FFFFFF)
- **Secondary**: Warm Wood (#8B7355), Brick Red (#A0522D), Light Gray (#F5F5F5)

## Menu Items

### Drinks
- ESPRESSO — 30 / 45 MDL
- AMERICANO — 30 / 45 MDL
- CAPPUCCINO — 35 / 55 MDL
- LATTE — 40 / 60 MDL
- MOCCACINO — 50 MDL
- FLAT WHITE — 50 MDL
- RAF COFFEE — 60 MDL
- CACAO — 35 MDL
- CEAI — 30 / 40 MDL
- CAPPUCCINO VEGAN — 60 / 80 MDL

### Tea
- BERGAMOT
- MANGO GREEN
- MINT

### Pastries
- CROISSANT
- TRIANGLE PIE

## Contact Information

- **Address**: Valea Apelor 19, Chisinau, MD-2011, Codru, Moldova
- **Phone**: 079777262
- **Google Maps**: [View Location](https://maps.app.goo.gl/UWw11uFpvCUTDPdp6)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Mobile (last 2 versions)

## Performance Targets

- Page Load Time: < 3 seconds (target: 1.5 seconds)
- Lighthouse Performance Score: > 90
- Mobile Usability Score: 100/100
- Accessibility Score: > 95

## License

© 2026 caffeine. All rights reserved.
