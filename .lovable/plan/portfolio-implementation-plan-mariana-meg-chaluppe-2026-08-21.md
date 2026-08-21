# Portfolio Implementation Plan: Mariana (Meg) Chaluppe

Build a one-page scrolling portfolio for Mariana (Meg) Chaluppe using a Brutalist/Pop-art aesthetic (Lavanda #C578D3, Creme #F3E8DC, Black/White) with thick borders and drop shadows, following the visual layout from the provided image.

## User Review Required

> [!IMPORTANT]
> The user provided a large block of text containing instructions and a layout image. I will implement the requested visual style (thick borders, specific colors, floating elements) and the exact verbatim text they asked to place in the header.

## Proposed Changes

### Assets & Styling
- Create CDN assets for `image_0.png` and `image_1.png` (using the uploaded file).
- Configure Tailwind v4 with custom colors: `lavender: #C578D3` and `cream: #F3E8DC`.
- Implement global brutalist styles (thick black borders, `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`).

### Components & Routes
- **Header**: Sticky white bar with circular 'MC' logo, `@megchaluppe` handle, and navigation links.
- **Hero Section**: Brutalist cards for 'PORTFÓLIO' and 'MARIANA (MEG) CHALUPPE' with floating decorative icons (stars, thumb, notification).
- **About Section**: Creme text box with brutalist styling and geometric accents.
- **Specialties Section**: Four-card grid (Creme, Lavanda, White, Black) with Lucide icons (BarChart, Quill, Users/ThumbsUp, Megaphone).
- **Cases Section**: 3x2 grid of project cards with grayscale images and creme titles.
- **Contact Section**: Large creme card with social icons and a stylized email form.
- **Footer**: Black bar with lavender stars and legal text.

### Implementation Details
- Use `framer-motion` for scroll-reveal animations.
- Ensure full responsiveness (stacking cards on mobile).
- Update `src/routes/index.tsx` with the complete landing page.

## Technical Details
- **Styling**: Tailwind CSS v4, custom utility for brutalist shadows.
- **Icons**: `lucide-react`.
- **Animations**: `framer-motion` for reveal effects.
- **Routing**: TanStack Router (Index route).
- **Assets**: Lovable CDN for the reference image.
