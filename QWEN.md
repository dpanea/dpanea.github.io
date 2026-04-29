# Daniel Panea Website - Project Context

## Project Overview

This is a personal portfolio website for Daniel Panea, an AI Architect specializing in Sovereign AI Engineering for European enterprises. The website showcases his services, case studies, and expertise in building privacy-first, on-premise AI systems.

The site is built as a static HTML/CSS/JS website with a modern, professional design focused on conversion and credibility. It features a dark-themed design system with glassmorphism effects, smooth animations, and responsive layout.

## Project Structure

```
/home/daniel/projects/danielpanea/danielpanea-website/
├── .gitignore
├── CNAME                    # Domain configuration for GitHub Pages
├── QWEN.md                  # This file
├── impressum.html           # Legal notice page
├── index.html               # Main landing page
├── privacy.html             # Privacy policy page
└── assets/
    ├── css/
    │   └── style.css        # Main stylesheet with design system
    ├── images/              # Website images and logos
    └── js/
        └── main.js          # JavaScript for interactive elements
```

## Key Features

- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Modern UI**: Glassmorphism effects, smooth animations, and Swiss design principles
- **Lead Generation**: Email capture form for "Sovereign AI Automation Blueprint"
- **Case Studies**: Showcasing AI implementation projects
- **Video Integration**: YouTube lightbox for keynote presentation
- **Legal Compliance**: Impressum and Privacy Policy pages for EU compliance
- **SEO Optimized**: Proper meta tags, schema markup, and social sharing

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design System**: Custom CSS variables-based system with dark theme
- **Hosting**: Static hosting (likely GitHub Pages/Vercel) - indicated by CNAME file
- **Fonts**: Google Fonts (Fraunces, Inter, JetBrains Mono)
- **Icons**: SVG icons for UI elements
- **Analytics**: ConvertKit for lead capture form

## Design System

The website uses a comprehensive CSS design system with:

- Dark color palette with blue/purple accent colors
- Responsive typography with fluid scaling
- Glassmorphism cards and UI elements
- Custom CSS variables for consistent styling
- Swiss design principles with clean, minimal aesthetic

## Key Pages

1. **index.html**: Main landing page with hero section, services, process, case studies, testimonials, and lead magnet
2. **impressum.html**: Legal notice required for EU business operations
3. **privacy.html**: Privacy policy with GDPR compliance information

## Interactive Elements

- Mobile navigation toggle
- Scroll-triggered animations
- Video lightbox for keynote presentation
- Lead capture form with ConvertKit integration
- Header state changes on scroll

## Development Conventions

- Semantic HTML structure
- Mobile-first responsive design
- Accessibility considerations (keyboard navigation, ARIA attributes)
- Performance optimization (minimal dependencies)
- Modern CSS features (grid, flexbox, custom properties)

## Building and Running

This is a static website that can be served directly from any web server or hosting platform:

1. **Local Development**: Serve the directory using a local HTTP server (e.g., `python -m http.server`, Live Server in VS Code)
2. **Production**: Deploy to any static hosting service (GitHub Pages, Vercel, Netlify, etc.)

## Domain Configuration

The CNAME file indicates the site is configured for the domain `danielpanea.com`, suggesting it's deployed to GitHub Pages or similar static hosting service.

## Special Considerations

- The site is designed for European market with GDPR compliance
- Focus on data sovereignty and privacy-first AI solutions
- Professional credibility emphasized through testimonials and credentials
- Conversion-focused with clear call-to-actions and lead magnet