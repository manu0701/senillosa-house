# 📁 Estructura del Proyecto - Senillosa Homes

```
senillosa-homes/
│
├── 📄 index.html                 # HTML principal (punto de entrada)
├── 📄 main.tsx                   # Punto de entrada de React
├── 📄 App.tsx                    # Componente raíz con routing
│
├── 📁 components/                # Componentes React
│   ├── 📄 Navbar.tsx            # Barra de navegación (sticky)
│   ├── 📄 Hero.tsx              # Sección hero (primera vista)
│   ├── 📄 Building.tsx          # Sección del edificio
│   ├── 📄 Amenities.tsx         # Sección de amenities
│   ├── 📄 Gallery.tsx           # Galería de imágenes
│   ├── 📄 Testimonials.tsx      # Testimonios de huéspedes
│   ├── 📄 CTASection.tsx        # Call-to-action
│   ├── 📄 Footer.tsx            # Pie de página
│   │
│   ├── 📁 ui/                   # Componentes UI de shadcn
│   │   ├── 📄 button.tsx
│   │   ├── 📄 input.tsx
│   │   ├── 📄 textarea.tsx
│   │   ├── 📄 select.tsx
│   │   ├── 📄 switch.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 label.tsx
│   │   └── ... (30+ componentes)
│   │
│   └── 📁 figma/
│       └── 📄 ImageWithFallback.tsx  # Componente de imagen protegido
│
├── 📁 contexts/                 # Contextos de React (estado global)
│   ├── 📄 LanguageContext.tsx   # Gestión de idioma (ES/EN)
│   ├── 📄 ThemeContext.tsx      # Gestión de tema (claro/oscuro)
│   └── 📄 CurrencyContext.tsx   # Gestión de moneda (USD/ARS)
│
├── 📁 pages/                    # Páginas de la aplicación
│   └── 📄 Reservations.tsx      # Página de reservas con formulario
│
├── 📁 styles/                   # Estilos globales
│   └── 📄 globals.css           # CSS global + Tailwind v4
│
├── 📁 public/                   # Archivos estáticos
│   └── 📄 favicon.svg           # Favicon del sitio
│
├── 📁 guidelines/               # Documentación interna
│   └── 📄 Guidelines.md         # Guías de estilo y desarrollo
│
├── 📄 package.json              # Dependencias y scripts npm
├── 📄 package-lock.json         # Lock de versiones (auto-generado)
│
├── 📄 tsconfig.json             # Configuración de TypeScript
├── 📄 tsconfig.node.json        # Config TS para archivos de build
│
├── 📄 vite.config.ts            # Configuración de Vite
├── 📄 postcss.config.js         # Configuración de PostCSS
│
├── 📄 vercel.json               # Configuración de Vercel
├── 📄 .gitignore                # Archivos ignorados por Git
├── 📄 .env.example              # Ejemplo de variables de entorno
│
├── 📄 README.md                 # Documentación principal
├── 📄 DEPLOYMENT.md             # Guía de deployment
├── 📄 COMANDOS-UTILES.md        # Comandos útiles
├── 📄 ESTRUCTURA-PROYECTO.md    # Este archivo
├── 📄 pre-deploy-check.md       # Checklist pre-deployment
│
├── 📄 deploy.sh                 # Script de deployment (bash)
└── 📄 Attributions.md           # Atribuciones de imágenes
```

---

## 🎯 Descripción de Carpetas Principales

### `/components`
Todos los componentes reutilizables de React.
- **Componentes de página:** Hero, Building, Amenities, etc.
- **Componentes UI:** Botones, inputs, cards, etc. (de shadcn)
- **Componentes especiales:** ImageWithFallback (protegido)

### `/contexts`
Gestión de estado global usando Context API.
- **LanguageContext:** Traducciones ES/EN
- **ThemeContext:** Modo claro/oscuro
- **CurrencyContext:** Conversión USD/ARS

### `/pages`
Páginas completas de la aplicación.
- **Reservations:** Formulario de contacto/reserva

### `/styles`
Estilos globales y configuración de Tailwind.
- **globals.css:** Incluye @import de Tailwind v4 y variables CSS

### `/public`
Archivos que se sirven directamente.
- No se procesan por Vite
- Se copian tal cual a `/dist`

---

## 🔄 Flujo de la Aplicación

```
index.html
    ↓ (carga)
main.tsx
    ↓ (renderiza)
App.tsx
    ↓ (provee contextos)
[ThemeProvider → LanguageProvider → CurrencyProvider]
    ↓ (routing simple por hash)
Home Page                    Reservations Page
    ↓                            ↓
Navbar                       Navbar
Hero                         Formulario
Building                     Imagen
Amenities                    Footer
Gallery
Testimonials
CTASection
Footer
```

---

## 🎨 Sistema de Estilos

### Jerarquía de Estilos
1. **globals.css** - Estilos base y variables CSS
2. **Tailwind v4** - Utility classes
3. **Componentes** - Estilos específicos inline o className
4. **Dark mode** - `.dark` class en `<html>`

### Variables CSS Principales
```css
--color-primary: #588157;        /* Verde oliva */
--color-background: #FFFFFF;     /* Blanco (light mode) */
--color-foreground: #0A0A0A;     /* Negro (light mode) */
/* ... más variables en globals.css */
```

---

## 📦 Dependencias Principales

### Producción
- `react` + `react-dom` - Framework UI
- `motion` - Animaciones (antes Framer Motion)
- `lucide-react` - Iconos
- `sonner` - Toast notifications
- `react-hook-form` - Gestión de formularios
- `clsx` + `tailwind-merge` - Utilidades CSS

### Desarrollo
- `vite` - Bundler y dev server
- `typescript` - Type safety
- `tailwindcss` - Framework CSS
- `@vitejs/plugin-react` - Plugin de Vite para React

---

## 🚀 Scripts Disponibles

```json
{
  "dev": "vite",                    // Servidor desarrollo
  "build": "tsc && vite build",     // Compilar producción
  "preview": "vite preview",        // Preview del build
  "lint": "eslint..."               // Verificar código
}
```

---

## 📊 Tamaño Estimado

```
Desarrollo (node_modules):  ~400MB
Build de producción (dist): ~500KB (optimizado y comprimido)
```

---

## 🔒 Archivos Protegidos (No Modificar)

- `/components/figma/ImageWithFallback.tsx`
- `/components/ui/*` (componentes shadcn, editar con cuidado)

---

## 📝 Archivos Generados Automáticamente

- `/node_modules/` - Dependencias (no subir a Git)
- `/dist/` - Build de producción (no subir a Git)
- `package-lock.json` - Lock de versiones (subir a Git)

---

## 🎓 Convenciones del Proyecto

### Nombres de Archivos
- **Componentes React:** PascalCase (ej: `Navbar.tsx`)
- **Utilidades:** camelCase (ej: `useTheme.tsx`)
- **Configuración:** lowercase (ej: `vite.config.ts`)

### Imports
```typescript
// Externos primero
import { useState } from "react";
import { Button } from "./components/ui/button";

// Internos después
import { useLanguage } from "../contexts/LanguageContext";
```

### Componentes
```typescript
// Siempre export default para páginas
export default function Reservations() { ... }

// Named export para componentes reutilizables
export function Navbar() { ... }
```

---

## 🔍 Dónde Encontrar Cosas

### "¿Dónde cambio los textos?"
→ `/contexts/LanguageContext.tsx`

### "¿Dónde cambio los colores?"
→ `/styles/globals.css` (variables CSS)

### "¿Dónde está el formulario?"
→ `/pages/Reservations.tsx`

### "¿Cómo agrego una nueva página?"
→ 1. Crear en `/pages/`
   2. Importar en `App.tsx`
   3. Agregar en routing

### "¿Dónde están las fuentes?"
→ Se cargan desde Google Fonts en `/index.html`

### "¿Dónde cambio el título del sitio?"
→ `/index.html` tag `<title>`

---

**📌 Tip:** Este archivo es tu mapa del proyecto. Consúltalo cuando necesites encontrar algo.
