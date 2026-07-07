# Nazeem - Personal Portfolio

A high-fidelity, performance-focused personal portfolio built to demonstrate modern frontend architecture and advanced interaction design. 

## Technical Stack

- Framework: `React 19` / `Vite`
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Animation: `GSAP 3` (`ScrollTrigger`, Custom Physics)
- Scroll: `Lenis`

## Architecture & Features

- Physics-based Interactions: Hardware-accelerated 3D parallax tilt effects computed via GSAP `quickTo`.
- Advanced Easing: Complete eradication of linear transitions, utilizing custom `cubic-bezier`s for magnetic components.
- Scroll-linked Animations: Elements are deeply integrated into the scroll position using `ScrollTrigger`.
- Global Noise Filter: SVG `<feTurbulence>` filter applied globally to eliminate flat digital gradients and introduce analog texture.

## Local Development

```bash
# Install dependencies (legacy-peer-deps required due to React 19 strictness with GSAP/Lenis wrappers)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

Configured for zero-config deployment on Vercel. 
The `.npmrc` file enforces legacy peer dependency resolution to ensure compatibility between React 19 and older animation wrappers during CI/CD.
