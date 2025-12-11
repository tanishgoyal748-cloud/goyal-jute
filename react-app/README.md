Goyal PP Wovens — React App

Local dev:

```bash
cd react-app
npm install
npm run dev
```

Build & serve:

```bash
npm run build
npx serve dist -l 5174
```

Notes:
- The app uses Framer Motion for smooth animations, `react-tsparticles` for particle background, and a lightweight Lottie embed in the hero.
- Images use `srcset` and `loading="lazy"` for performance.

For automated deploys, connect this repo to Netlify or Vercel and point the publish directory to `react-app/dist`.
