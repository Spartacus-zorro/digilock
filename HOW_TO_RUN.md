# 🚀 Cum să Rulezi Website-ul Local

Acest ghid îți arată pas cu pas cum să rulezi website-ul de portofoliu în VS Code.

## 📋 Cerințe Preliminare

Asigură-te că ai instalate:
- **Node.js** (versiunea 18 sau mai nouă) - [Download](https://nodejs.org/)
- **VS Code** - [Download](https://code.visualstudio.com/)
- **Git** (opțional) - [Download](https://git-scm.com/)

## 🔧 Instalare și Configurare

### Pasul 1: Deschide Proiectul în VS Code

1. Deschide VS Code
2. Click pe **File → Open Folder**
3. Selectează folderul `digilock`

### Pasul 2: Deschide Terminalul

În VS Code, deschide terminalul integrat:
- **Windows/Linux**: `Ctrl + `` (tasta backtick)
- **Mac**: `Cmd + `` (tasta backtick)

Sau click pe **Terminal → New Terminal** din meniu.

### Pasul 3: Instalează Dependențele

În terminal, rulează:

```bash
npm install
```

⏳ Acest proces va dura 30-60 secunde. Vei vedea o listă de pachete fiind instalate.

### Pasul 4: Pornește Serverul de Dezvoltare

După ce instalarea s-a terminat, rulează:

```bash
npm run dev
```

✅ Vei vedea un mesaj similar cu:

```
▲ Next.js 16.1.6 (Turbopack)
- Local:        http://localhost:3000
- Network:      http://192.168.1.x:3000

✓ Ready in 615ms
```

### Pasul 5: Vizualizează Website-ul

Deschide browser-ul și navighează la:
```
http://localhost:3000
```

🎉 **Gata!** Website-ul tău rulează acum local!

## 🎨 Personalizare Conținut

Toate textele și datele se editează într-un singur fișier:

### Editează `/data/data.ts`

```typescript
// Schimbă textul Hero
export const heroData = {
  title: "Titlul Tău Aici",
  subtitle: "Subtitlul Tău",
  description: "Descrierea ta...",
  // ...
};

// Modifică serviciile
export const servicesData = {
  services: [
    {
      title: "Serviciul 1",
      description: "Descriere...",
      icon: "🚀",
    },
    // Adaugă mai multe servicii
  ],
};

// Actualizează proiectele din portofoliu
export const portfolioData = {
  projects: [
    {
      title: "Proiect Nou",
      description: "Descriere proiect...",
      category: "Automatizare", // sau "Web Design" sau "Video Marketing"
      image: "https://...",
      tags: ["Tag1", "Tag2"],
    },
    // Adaugă mai multe proiecte
  ],
};
```

**💾 Salvează fișierul** - Website-ul se va actualiza automat în browser!

## 🛠️ Comenzi Utile

### Dezvoltare (cu Hot Reload)
```bash
npm run dev
```
Website-ul se actualizează automat când salvezi fișierele.

### Build pentru Producție
```bash
npm run build
```
Creează o versiune optimizată pentru deployment.

### Pornește Server de Producție
```bash
npm run build
npm start
```
Rulează versiunea optimizată local.

### Verificare Erori de Cod
```bash
npm run lint
```
Verifică codul pentru erori și inconsistențe.

## 📁 Structura Proiectului

```
digilock/
├── app/                    # Aplicația Next.js
│   ├── page.tsx           # Pagina principală
│   ├── layout.tsx         # Layout-ul site-ului
│   └── globals.css        # Stiluri globale
├── components/            # Componente React
│   ├── Hero.tsx          # Secțiunea Hero
│   ├── Services.tsx      # Servicii
│   ├── Portfolio.tsx     # Portofoliu (NOU!)
│   ├── VideoGallery.tsx  # Galerie video
│   ├── Contact.tsx       # Formular contact
│   └── Footer.tsx        # Footer
├── data/
│   └── data.ts           # ⭐ EDITEAZĂ AICI CONȚINUTUL
├── public/               # Fișiere statice
└── package.json          # Dependențe
```

## 🎯 Editare Rapidă

### Schimbă Culorile

Editează `app/globals.css`:

```css
:root {
  --purple-electric: #a855f7;  /* Schimbă culoarea mov */
  --blue-neon: #3b82f6;        /* Schimbă culoarea albastră */
  --pink-vibrant: #ec4899;     /* Schimbă culoarea roz */
}
```

### Modifică Meta Tags (SEO)

Editează `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Titlul Tău - SEO",
  description: "Descrierea pentru motoarele de căutare",
};
```

### Adaugă Imagini

1. Pune imaginile în folderul `public/`
2. Referențiază-le cu `/nume-imagine.jpg`

Exemplu în `data/data.ts`:
```typescript
image: "/images/proiect-nou.jpg"
```

## 🐛 Rezolvarea Problemelor

### Portul 3000 este deja folosit
```bash
# Windows
taskkill /F /IM node.exe

# Mac/Linux
killall node
```

Apoi rulează din nou `npm run dev`.

### Eroare "Cannot find module"
```bash
# Șterge node_modules și reinstalează
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload nu funcționează
- Salvează din nou fișierul
- Reîncarcă pagina din browser (F5)
- Oprește serverul (Ctrl+C) și pornește-l din nou

## 📦 Deployment

### Vercel (Recomandat)

1. Creează cont pe [vercel.com](https://vercel.com)
2. Conectează repository-ul GitHub
3. Click pe "Deploy"
4. ✅ Gata! Website-ul tău este live!

### Netlify

1. Creează cont pe [netlify.com](https://netlify.com)
2. Drag & drop folderul `.next` după build
3. ✅ Website-ul tău este live!

## 💡 Tips & Tricks

1. **Animații Smooth**: Toate animațiile folosesc Framer Motion - modifică `components/` pentru customizare
2. **Responsive Design**: Website-ul este optimizat pentru mobil automat
3. **Performance**: Next.js optimizează automat imaginile și codul
4. **SEO Friendly**: Toate meta tags sunt configurate în `layout.tsx`

## 🆘 Suport

Dacă întâmpini probleme:

1. **Verifică Consola** - Deschide Developer Tools în browser (F12)
2. **Citește Erorile** - VS Code Terminal va afișa erori detaliate
3. **Restart Server** - Oprește (Ctrl+C) și pornește din nou `npm run dev`

## 📚 Resurse Utile

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Docs](https://react.dev)

---

**Succes cu website-ul tău! 🚀**

Pentru întrebări sau asistență, deschide un issue pe GitHub.
