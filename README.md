# martincornejodev — Personal Portfolio

Landing page personal de **Martin Cornejo**, Senior Mobile Developer.

Built with **Next.js 15** + **Tailwind CSS**. Desplegado en Vercel.

## 🚀 Deploy en Vercel (3 pasos)

### Opción A — Desde GitHub (recomendado)

1. Subí este proyecto a un repo de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio inicial"
   git remote add origin https://github.com/martincornejo92/martincornejodev.git
   git push -u origin main
   ```

2. Andá a [vercel.com](https://vercel.com) → **Add New Project** → importá el repo.

3. Vercel detecta Next.js automáticamente. Click **Deploy** ✅

### Opción B — Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🛠 Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## ✏️ Personalización rápida

Todo el contenido está en `app/page.js`:
- `experience` → tu historial laboral
- `projects` → tus proyectos
- `skills` → tu stack técnico
- Colores → `app/globals.css` (variables CSS)

