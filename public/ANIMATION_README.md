# Infinity Logo Animation

Acest fișier conține o animație Lottie pentru un logo reprezentând semnul infinitului cu două butoane de play în interior.

## Fișier
- **Nume:** `timelapse_episode_1.json`
- **Locație:** `/public/timelapse_episode_1.json`
- **Format:** Lottie JSON (versiunea 5.7.4)

## Caracteristici Animație

### Design
- **Simbol infinit** desenat cu linii curbe smooth
- **Două butoane de play** (triunghiuri) poziționat în cele două bucle ale infinitului
- **Efect de glow** (strălucire) în fundal pentru un aspect premium

### Animații
1. **Intrare (0-30 frames)**
   - Fade in de la 0% la 100% opacitate
   - Scale de la 0% la 100%
   
2. **Loop principal (30-180 frames)**
   - Rotație completă 360° a simbolului infinit
   - Pulsare subtilă (scale 100% → 110% → 100%)
   - Schimbare de culori între violet (#6455f7), albastru (#3b82f6) și roz (#ec4899)
   - Butoanele de play pulsează cu scale 80% → 100% → 80%
   - Efectul de glow crește și scade opacitatea (30% → 50% → 30%)

3. **Durată totală:** 3 secunde (180 frames @ 60fps)
4. **Loop:** Animația se poate repeta continuu

## Cum să folosești animația

### 1. Cu Lottie Web (JavaScript)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>
<div id="logo-container"></div>

<script>
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('logo-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/timelapse_episode_1.json'
  });
</script>
```

### 2. Cu React (lottie-react)

```bash
npm install lottie-react
```

```jsx
import Lottie from 'lottie-react';
import animationData from './public/timelapse_episode_1.json';

function InfinityLogo() {
  return (
    <Lottie 
      animationData={animationData}
      loop={true}
      style={{ width: 800, height: 600 }}
    />
  );
}
```

### 3. Cu Next.js (în acest proiect)

```jsx
'use client';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Logo() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/timelapse_episode_1.json')
      .then(res => res.json())
      .then(data => setAnimationData(data));
  }, []);

  if (!animationData) return <div>Loading...</div>;

  return (
    <Lottie 
      animationData={animationData}
      loop={true}
      style={{ width: '100%', maxWidth: 800 }}
    />
  );
}
```

## Test și Preview

Pentru a vedea animația în acțiune:

1. Deschide fișierul `public/test-animation.html` într-un browser
2. Sau rulează un server local:
   ```bash
   cd public
   python3 -m http.server 8000
   ```
3. Accesează http://localhost:8000/test-animation.html

Pagina de test include controale pentru:
- ▶️ Play / Pause / Stop
- 🐢 Slow / ⚡ Normal / 🚀 Fast speed

## Personalizare

Pentru a modifica animația:

1. **Culori:** Caută proprietățile `"c"` (color) în JSON și ajustează valorile RGBA
2. **Viteză:** Schimbă `"fr": 60` (frame rate) pentru animație mai rapidă/lentă
3. **Durată:** Modifică `"op": 180` (out point) pentru durată diferită
4. **Scale/Poziție:** Ajustează valorile din proprietățile `"s"` (scale) și `"p"` (position)

## Informații Tehnice

- **Dimensiuni:** 800x600px
- **Frame rate:** 60 fps
- **Total frames:** 180 (3 secunde)
- **Format:** SVG renderer (recomandant)
- **Layers:**
  1. Infinity Symbol (simbol infinit cu stroke animat)
  2. Left Play Button (buton play stânga)
  3. Right Play Button (buton play dreapta)
  4. Glow Effect (efect de strălucire în fundal)

## Compatibilitate

- ✅ Toate browser-ele moderne (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ✅ React / Next.js
- ✅ Vue / Angular
- ✅ Vanilla JavaScript

## Licență

Acest fișier face parte din proiectul DigiLock Portfolio și este disponibil sub licența MIT.
