const https = require('https');
const fs = require('fs');

const categories = [
  { name: 'PP Woven Fabric', query: 'polypropylene woven fabric textile industrial', id: 'pp-woven-fabric' },
  { name: 'Jute Bags', query: 'jute burlap bag eco friendly', id: 'jute-bags' },
  { name: 'PP Woven Bags', query: 'plastic woven storage bags industrial', id: 'pp-woven-bags' },
  { name: 'Jute Bales', query: 'jute fiber bale raw agricultural', id: 'jute-bales' }
];

const unsplashUrl = (query) => `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&order_by=relevant`;

const images = {};
let completed = 0;

categories.forEach(cat => {
  https.get(unsplashUrl(cat.query), { headers: { 'Accept-Version': 'v1' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const result = JSON.parse(data);
        if (result.results && result.results[0]) {
          const img = result.results[0];
          images[cat.id] = {
            name: cat.name,
            img: img.urls.regular || img.urls.small,
            hd: img.urls.full || img.urls.raw,
            alt: img.alt_description || cat.name,
            credit: img.user.name,
            url: img.links.html
          };
        }
      } catch (e) { console.error(`Error parsing ${cat.name}:`, e.message); }
      
      completed++;
      if (completed === categories.length) {
        fs.writeFileSync('unsplash_images.json', JSON.stringify(images, null, 2));
        console.log('✓ Fetched images:', Object.keys(images).length);
      }
    });
  }).on('error', e => console.error(`Fetch error for ${cat.name}:`, e.message));
});
