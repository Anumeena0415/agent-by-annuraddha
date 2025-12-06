# Vlands Agent Landing (Polished Demo)

This is a polished landing page built with React + Vite + TailwindCSS + GSAP (ScrollTrigger).

## Quick start (local)
1. unzip and open folder in VS Code
2. run `npm install`
3. run `npm run dev`
4. open http://localhost:5173

## Form handling
The Application form in this demo posts to a Formspree demo endpoint. Replace the form endpoint in `src/pages/Application.jsx` with your own backend or Formspree ID.

## Deploy to Vercel
1. Push repository to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`, Output: `dist`
4. Add environment variables if you configure form endpoints or analytics

## Customize
- Replace placeholder images in `src/components/Hero.jsx`
- Add your brand fonts and logo
- For 3D model integrate Spline/Three.js in the Hero area

## Notes
- GSAP ScrollTrigger used; for production consider code-splitting and performance tuning.
