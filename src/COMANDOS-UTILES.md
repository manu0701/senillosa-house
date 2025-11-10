# 📝 Comandos Útiles - Senillosa Homes

## 🚀 Comandos Básicos

### Desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará en: http://localhost:5173
```

### Producción
```bash
# Compilar para producción
npm run build

# Preview del build de producción
npm run preview
```

## 🔧 Vercel CLI

### Instalación
```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# O con yarn
yarn global add vercel

# O con pnpm
pnpm add -g vercel
```

### Login
```bash
# Iniciar sesión en Vercel
vercel login
```

### Deployment
```bash
# Deploy a preview (staging)
vercel

# Deploy a producción
vercel --prod

# Deploy con scope específico
vercel --prod --scope tu-equipo
```

### Gestión
```bash
# Ver logs del deployment
vercel logs

# Listar todos los deployments
vercel ls

# Ver información del proyecto
vercel inspect

# Remover un deployment
vercel remove [deployment-url]
```

## 🌿 Git (si usas GitHub)

### Primera configuración
```bash
# Inicializar repositorio
git init

# Configurar usuario
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Agregar remote
git remote add origin https://github.com/usuario/repo.git

# Primera subida
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Workflow diario
```bash
# Ver estado de archivos
git status

# Agregar archivos modificados
git add .

# Hacer commit
git commit -m "Descripción de cambios"

# Subir a GitHub
git push

# Bajar cambios
git pull
```

### Branches
```bash
# Crear nueva branch
git checkout -b nombre-feature

# Cambiar de branch
git checkout main

# Listar branches
git branch

# Mergear branch
git checkout main
git merge nombre-feature

# Eliminar branch
git branch -d nombre-feature
```

## 🔍 Debugging

### Ver logs en vivo
```bash
# Durante desarrollo
npm run dev
# Abre DevTools en el navegador (F12)
```

### Verificar build
```bash
# Build y ver errores
npm run build

# Si hay errores de tipo TypeScript
# Revisa los archivos que marca el error
```

### Limpiar cache
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install

# O en Windows (PowerShell)
Remove-Item -Recurse -Force node_modules
npm install

# Limpiar cache de npm
npm cache clean --force
```

## 📦 Package Management

### Ver versiones
```bash
# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version

# Ver dependencias desactualizadas
npm outdated
```

### Actualizar dependencias
```bash
# Actualizar todas las dependencias
npm update

# Actualizar una dependencia específica
npm update nombre-paquete

# Actualizar a última versión (cuidado!)
npm install nombre-paquete@latest
```

## 🌐 Dominio y DNS

### Después del deployment

Si tienes un dominio personalizado:

```bash
# En Vercel dashboard:
# Settings → Domains → Add Domain

# Configurar DNS (depende de tu proveedor):
# Tipo: A
# Host: @
# Valor: 76.76.19.19

# Tipo: CNAME
# Host: www
# Valor: cname.vercel-dns.com
```

## 🔐 Variables de Entorno

### En local (archivo .env)
```bash
# Crear archivo .env en la raíz
touch .env

# Agregar variables (prefijo VITE_ es obligatorio)
# VITE_API_URL=https://api.example.com
```

### En Vercel
```bash
# Via CLI
vercel env add VARIABLE_NAME production

# O en dashboard:
# Settings → Environment Variables → Add
```

## 📊 Performance

### Analizar tamaño del bundle
```bash
# Instalar herramienta
npm install -g source-map-explorer

# Build
npm run build

# Analizar
source-map-explorer dist/assets/*.js
```

## 🆘 Solución de Problemas

### "Command not found"
```bash
# Asegúrate de que Node.js esté instalado
node --version

# Reinstala npm si es necesario
npm install -g npm@latest
```

### "Port 5173 already in use"
```bash
# Matar proceso en el puerto
# Linux/Mac:
lsof -ti:5173 | xargs kill

# Windows (PowerShell como Admin):
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process
```

### Build tarda mucho
```bash
# Limpiar cache y rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

## 📱 Testing en dispositivos móviles

### Usar tu IP local
```bash
# El servidor dev mostrará tu IP, ejemplo:
# ➜  Local:   http://localhost:5173/
# ➜  Network: http://192.168.1.5:5173/

# Accede desde tu móvil usando la IP Network
```

### Ngrok (para testing externo)
```bash
# Instalar ngrok
npm install -g ngrok

# Ejecutar dev server
npm run dev

# En otra terminal, crear túnel
ngrok http 5173

# Compartir la URL generada
```

---

## 🎓 Recursos

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**💡 Tip:** Guarda este archivo en tus favoritos para referencia rápida.
