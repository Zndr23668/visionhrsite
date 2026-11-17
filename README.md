# Visions Human Resource Services — website port

This repository contains the initial React/Vite rebuild of [visionshr.com](https://visionshr.com/).

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Routes implemented

- Home
- About Visions
- Founder profile — Janet Giannetta
- Contact
- Pricing
- News listing
- 2026 Form I-9 Changes for Employers
- Top 5 Pregnancy Accommodation Pitfalls Retailers Need to Avoid in 2026
- Compliance
- Handbooks
- Training
- Recruiting
- Investigations
- Retainer Program

## Included interactions

- Responsive desktop/mobile navigation with an animated services dropdown
- Animated route/page transitions
- Scroll-reveal section transitions
- Hover and focus feedback on cards and calls to action
- Testimonial carousel
- Contact form validation and consent checkbox
- Mobile navigation drawer
- Smooth back-to-top control
- Reduced-motion preference support

## Porting notes

This is a functional first-pass rebuild based on the publicly indexed page content and known routes. The source website did not allow a live visual/browser inspection during this pass, so the exact original spacing, photographs, page-specific decorative assets, animation timing and hidden interactions still need side-by-side verification against the live site. The logo is currently an in-repo vector interpretation, not an extracted original asset.

The contact form currently prepares an email via the visitor's default mail app. A production form endpoint (and any required privacy/consent configuration) must be connected before launch. The pricing page text currently reflects the public page's displayed sample package copy and should be confirmed by the client before publication.

## Deployment

A Vercel rewrite is included for React Router deep links. The GitHub Actions workflow runs the Vite production build on pushes and pull requests to `main`.
