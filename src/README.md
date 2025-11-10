# Senillosa Homes

Sitio web para mostrar departamentos temporarios en alquiler en Caballito, Buenos Aires.

## 🌟 Características

- ✅ Diseño moderno con colores pasteles y verde oliva (#588157) como color principal
- ✅ Modo claro/oscuro funcional
- ✅ Multiidioma (Español/Inglés)
- ✅ Selector de moneda (ARS/USD)
- ✅ Formulario de contacto completo
- ✅ Galería de imágenes
- ✅ Sección de amenities
- ✅ Testimoniales
- ✅ Responsive design

## 🚀 Instalación Local

### Requisitos Previos

- Node.js 18+ instalado
- npm, yarn o pnpm

### Pasos

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

El sitio estará disponible en `http://localhost:5173`

4. **Compilar para producción**

```bash
npm run build
# o
yarn build
# o
pnpm build
```

Los archivos compilados estarán en la carpeta `/dist`

## 📦 Deployment en Vercel

### Opción 1: Desde la interfaz de Vercel (Recomendada)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta o inicia sesión
2. Haz clic en "Add New..." → "Project"
3. Conecta tu repositorio de GitHub/GitLab/Bitbucket o sube los archivos
4. Vercel detectará automáticamente que es un proyecto Vite
5. La configuración debería ser automática:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Haz clic en "Deploy"

### Opción 2: Desde la terminal con Vercel CLI

1. **Instalar Vercel CLI**

```bash
npm install -g vercel
```

2. **Iniciar sesión en Vercel**

```bash
vercel login
```

3. **Deployar**

```bash
# Desde la raíz del proyecto
vercel

# O directamente a producción
vercel --prod
```

4. **Seguir las instrucciones**
   - Set up and deploy: Y
   - Which scope: Tu cuenta
   - Link to existing project: N (si es la primera vez)
   - Project name: senillosa-homes (o el que prefieras)
   - In which directory: ./ (dejar por defecto)
   - Override settings: N (dejar por defecto)

### Opción 3: Desde un repositorio Git (Más conveniente para actualizaciones)

1. Sube tu código a GitHub, GitLab o Bitbucket
2. En Vercel, importa el repositorio
3. Cada vez que hagas `git push`, Vercel automáticamente re-deployará

## 🎨 Estructura del Proyecto

```
senillosa-homes/
├── components/           # Componentes React
│   ├── ui/              # Componentes UI de shadcn
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Building.tsx
│   ├── Amenities.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── contexts/            # Contextos de React
│   ├── LanguageContext.tsx
│   ├── ThemeContext.tsx
│   └── CurrencyContext.tsx
├── pages/               # Páginas
│   └── Reservations.tsx
├── styles/              # Estilos globales
│   └── globals.css
├── public/              # Archivos estáticos
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
└── index.html           # HTML principal
```

## 🎨 Paleta de Colores

- **Principal:** #588157 (Verde oliva)
- **Secundario:** Tonos pasteles suaves
- **Tipografía Headings:** Outfit
- **Tipografía Body:** Nunito Sans
- **Tipografía Destacados:** Playfair Display (serif)

## 🔧 Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React (iconos)
- shadcn/ui (componentes)

## 📝 Notas Importantes

- El proyecto usa Tailwind CSS v4 con el archivo `@import` en `styles/globals.css`
- El color principal (#588157) se define como `--color-primary` en CSS
- Las fuentes se cargan desde Google Fonts en el `index.html`
- La navegación usa hash routing (#reservations) para la página de reservas

## 🌐 Variables de Entorno

Este proyecto no requiere variables de entorno para funcionar. Todo es frontend.

## 📱 Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 🤝 Contribuir

Este es un proyecto privado para Senillosa Homes.

## 📄 Licencia

Todos los derechos reservados - Senillosa Homes 2025
