# 📦 Lista de Archivos para Descargar

## ✅ Archivos NECESARIOS para que funcione en Vercel

### 📁 Raíz del proyecto
```
✅ index.html
✅ main.tsx
✅ App.tsx
✅ package.json
✅ vite.config.ts
✅ tsconfig.json
✅ tsconfig.node.json
✅ postcss.config.js
✅ vercel.json
✅ .gitignore
✅ .env.example
```

### 📁 /components
```
✅ Navbar.tsx
✅ Hero.tsx
✅ Building.tsx
✅ Amenities.tsx
✅ Gallery.tsx
✅ Testimonials.tsx
✅ CTASection.tsx
✅ Footer.tsx
```

### 📁 /components/ui (shadcn - 30+ archivos)
```
✅ button.tsx
✅ input.tsx
✅ textarea.tsx
✅ label.tsx
✅ select.tsx
✅ switch.tsx
✅ card.tsx
✅ ... (todos los archivos .tsx en esta carpeta)
```

### 📁 /components/figma
```
✅ ImageWithFallback.tsx ⚠️ NO MODIFICAR
```

### 📁 /contexts
```
✅ LanguageContext.tsx
✅ ThemeContext.tsx
✅ CurrencyContext.tsx
```

### 📁 /pages
```
✅ Reservations.tsx
```

### 📁 /styles
```
✅ globals.css
```

### 📁 /public
```
✅ favicon.svg
```

### 📁 /guidelines (opcional pero útil)
```
📖 Guidelines.md
```

---

## 📚 Archivos de DOCUMENTACIÓN (opcionales pero muy útiles)

```
📖 README.md
📖 DEPLOYMENT.md
📖 INICIO-RAPIDO.md
📖 COMANDOS-UTILES.md
📖 ESTRUCTURA-PROYECTO.md
📖 LISTO-PARA-VERCEL.md
📖 LISTA-ARCHIVOS-DESCARGAR.md (este archivo)
📖 pre-deploy-check.md
📖 Attributions.md
```

---

## ❌ Archivos que NO debes descargar

```
❌ node_modules/ (se genera con npm install)
❌ dist/ (se genera con npm run build)
❌ package-lock.json (se genera con npm install)
❌ .vite/ (caché, se genera automáticamente)
❌ .vercel/ (se genera en deploy)
```

---

## 🔢 Resumen de Cantidades

| Categoría | Cantidad |
|-----------|----------|
| Archivos de configuración | ~10 |
| Componentes principales | 8 |
| Componentes UI (shadcn) | ~35 |
| Contextos | 3 |
| Páginas | 1 |
| Estilos | 1 |
| Assets | 1 |
| Documentación | ~10 |
| **TOTAL aprox.** | **~70 archivos** |

---

## 📂 Estructura de carpetas a crear

```
senillosa-homes/
│
├── 📁 components/
│   ├── 📁 ui/
│   └── 📁 figma/
│
├── 📁 contexts/
├── 📁 pages/
├── 📁 styles/
├── 📁 public/
└── 📁 guidelines/
```

---

## ⚡ Descarga Rápida

### Si usas Git:
```bash
# Todo se descarga automáticamente
git clone [tu-repo]
cd senillosa-homes
npm install
```

### Si descargas manualmente:
1. Descarga TODOS los archivos ✅ de arriba
2. Mantén la estructura de carpetas exacta
3. NO descargues los archivos ❌
4. Ejecuta `npm install` para generar node_modules

---

## 🎯 Verificación

Después de descargar, tu carpeta debería verse así:

```
senillosa-homes/
├── components/
│   ├── ui/              ← 35+ archivos
│   ├── figma/           ← 1 archivo
│   └── [8 componentes].tsx
├── contexts/            ← 3 archivos
├── pages/              ← 1 archivo
├── styles/             ← 1 archivo
├── public/             ← 1 archivo
├── index.html
├── main.tsx
├── App.tsx
├── package.json
└── [otros configs]
```

### Checklist:
- [ ] Todos los archivos .tsx están presentes
- [ ] Todas las carpetas existen
- [ ] package.json está en la raíz
- [ ] index.html está en la raíz
- [ ] La carpeta /components/ui tiene ~35 archivos
- [ ] NO hay carpeta node_modules (se creará después)
- [ ] NO hay carpeta dist (se creará al compilar)

---

## 🚀 Después de Descargar

```bash
# 1. Navegar a la carpeta
cd senillosa-homes

# 2. Instalar dependencias (esto crea node_modules)
npm install

# 3. Verificar que funciona
npm run dev

# 4. Compilar para producción
npm run build

# 5. Deploy a Vercel
vercel --prod
```

---

## 💡 Tips

1. **Mantén la estructura de carpetas** - Es crítico para las importaciones
2. **No modifies ImageWithFallback.tsx** - Es un componente protegido del sistema
3. **Los archivos UI son de shadcn** - Puedes modificarlos pero con cuidado
4. **La documentación es útil** - Descárgala para referencia futura

---

## 🆘 Si Falta Algún Archivo

Si al ejecutar `npm run dev` da error de "Module not found":

1. Verifica que el archivo exista en la ruta correcta
2. Verifica que el nombre sea exacto (case-sensitive)
3. Verifica que esté en la carpeta correcta
4. Compara con la estructura de arriba

---

## 📋 Método de Descarga Recomendado

**Opción A: ZIP Download**
1. Descarga todo como ZIP
2. Extrae en tu computadora
3. Verifica la estructura de carpetas
4. `npm install`

**Opción B: Git Clone** ⭐ RECOMENDADO
1. `git clone [repo-url]`
2. `cd senillosa-homes`
3. `npm install`
4. ¡Listo!

**Opción C: Vercel CLI**
1. Directo desde Figma Make
2. `vercel --prod`
3. Deploy sin descargar

---

## ✅ Archivo Creado

Este archivo te ayuda a verificar que tienes todo lo necesario antes de intentar deployar.

**Marca cada archivo mientras lo descargas para no olvidar ninguno! ✓**
