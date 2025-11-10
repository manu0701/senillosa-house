# 🚀 Guía Rápida de Deployment en Vercel

## Opción 1: Deployment Directo (Más Rápido)

### Paso 1: Preparar el proyecto
```bash
# Descargar/clonar el proyecto en tu computadora
cd senillosa-homes

# Instalar dependencias
npm install

# (Opcional) Probar localmente
npm run dev
```

### Paso 2: Subir a Vercel
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

✅ ¡Listo! Tu sitio estará en línea en segundos.

---

## Opción 2: Con GitHub (Recomendado para actualizaciones futuras)

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com](https://github.com) y crea un nuevo repositorio
2. NO agregues README, .gitignore ni licencia (ya los tienes)

### Paso 2: Subir el código
```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: Senillosa Homes"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### Paso 3: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New..." → "Project"
3. Selecciona "Import Git Repository"
4. Elige tu repositorio de GitHub
5. Configuración automática detectada ✅
6. Haz clic en "Deploy"

### Ventajas de usar GitHub:
- ✅ Cada `git push` auto-deploya
- ✅ Historial de versiones
- ✅ Previews automáticos de cada commit
- ✅ Rollback fácil a versiones anteriores

---

## Opción 3: Arrastrar y Soltar (Más Simple)

### Paso 1: Build local
```bash
npm install
npm run build
```

### Paso 2: Subir a Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Arrastra la carpeta `/dist` a Vercel
3. ¡Listo!

⚠️ **Nota:** Esta opción requiere rebuild y resubir manualmente cada vez que hagas cambios.

---

## ⚙️ Configuración de Vercel (si es necesario)

Si Vercel no detecta automáticamente la configuración, usa estos valores:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x o superior

---

## 🌐 Dominio Personalizado

### Después del deployment:

1. En el dashboard de Vercel, ve a tu proyecto
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado (ej: senillosahomes.com)
4. Sigue las instrucciones de Vercel para configurar los DNS

**Opciones de dominio:**
- Usar el dominio gratuito de Vercel: `tu-proyecto.vercel.app`
- Comprar dominio en Vercel
- Conectar dominio existente

---

## 🔍 Verificar que todo funcione

Después del deployment, verifica:

- ✅ Página principal carga correctamente
- ✅ Navegación a página de Reservas funciona
- ✅ Switch de idioma ES/EN funciona
- ✅ Switch de tema claro/oscuro funciona
- ✅ Formulario de contacto se puede enviar
- ✅ Responsive en móvil

---

## 🆘 Problemas Comunes

### "Module not found"
```bash
# Asegúrate de instalar las dependencias
npm install
```

### "Build failed"
```bash
# Verifica que el build funcione localmente
npm run build

# Si hay errores, corrígelos antes de deployar
```

### "Page not found en /reservations"
- Vercel usa el archivo `vercel.json` que ya está incluido
- Este archivo redirige todas las rutas a `index.html` para que el routing funcione

---

## 📊 Monitoreo y Analytics

Vercel incluye:
- 📈 Analytics automático
- 🚀 Performance metrics
- 🌍 Distribución geográfica de visitantes
- ⚡ Core Web Vitals

Accede desde el dashboard de tu proyecto.

---

## 🔄 Actualizar el Sitio

### Con GitHub:
```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de cambios"
git push
# Vercel auto-deploya 🎉
```

### Sin GitHub:
```bash
# Hacer cambios
npm run build
vercel --prod
```

---

## 💡 Tips Pro

1. **Previews automáticos:** Cada branch en GitHub genera un preview único
2. **Protección de branches:** Configura GitHub para requerir aprobaciones antes de merge a main
3. **Environment variables:** Si necesitas API keys, agrégalas en Settings → Environment Variables
4. **Custom headers:** Edita `vercel.json` para agregar headers de seguridad

---

¿Necesitas ayuda? Contacta al desarrollador o consulta la [documentación de Vercel](https://vercel.com/docs).
