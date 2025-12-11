Goyal PP Wovens — Project

This workspace contains two versions of the site:

- Static original site: `index.html`, `styles.css`, `script.js` (located at project root)
- React + Vite app: `react-app/` — modern, animated rebuild using React, Framer Motion, tsParticles.

Quick start (React app):

```bash
cd react-app
npm install
npm run dev
```

Build production:

```bash
cd react-app
npm run build
# serve the dist (example using 'serve')
npx serve dist -l 5174
```

Run Lighthouse locally (requires Chrome/Chromium installed):

```bash
npx serve dist -l 5174
npx lighthouse http://localhost:5174 --chrome-flags="--headless --no-sandbox" --output html --output-path ./lighthouse-report.html
```

Deployment suggestions:
- Deploy `react-app/dist` to Netlify, Vercel or GitHub Pages. Use their static site deployment guides.

What's included:
- Hero: cinematic Lottie + tsParticles layer
- Staggered animated product grid (Framer Motion)
- Accessible keyboard-navigable Lightbox
- Responsive images with `srcset` and `loading="lazy"`
- Accessibility improvements (focus visible, ARIA attributes, focus trap)

If you want, I can:
- Run a Lighthouse audit here (the environment may block Chrome installs). Alternatively, you can run it locally using the commands above.
- Add CI/CD config for automatic deploys (Netlify/Vercel/GitHub Actions).
- Further polish animations or add custom Lottie animation (provide JSON or I'll pick a premium one).

Which of those should I do next? (CI, extra Lottie, Lighthouse locally, more animations, SEO/meta fixes)
