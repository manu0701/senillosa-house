# ⚡ Inicio Rápido - Senillosa Homes

## 🎯 Para empezar en 3 minutos

### 1️⃣ Instalar
```bash
cd senillosa-homes
npm install
```

### 2️⃣ Ejecutar
```bash
npm run dev
```
Abre: http://localhost:5173

### 3️⃣ Deployar a Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

✅ ¡Listo! Tu sitio está en línea.

---

## 🔧 Comandos Esenciales

| Comando | Qué hace |
|---------|----------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia desarrollo local |
| `npm run build` | Compila para producción |
| `vercel --prod` | Deploya a Vercel |

---

## 📂 Archivos Importantes

```
📄 App.tsx                    → Lógica principal
📄 components/Navbar.tsx      → Menú superior
📄 pages/Reservations.tsx     → Formulario de contacto
📄 contexts/LanguageContext.tsx → Traducciones ES/EN
📄 styles/globals.css         → Colores y estilos
```

---

## 🎨 Cambios Comunes

### Cambiar textos
Edita: `/contexts/LanguageContext.tsx`
```typescript
es: {
  heroTitle: "Tu nuevo título aquí",
  // ...
}
```

### Cambiar colores
Edita: `/styles/globals.css`
```css
--color-primary: #588157; /* Tu color aquí */
```

### Agregar sección
1. Crea componente en `/components/MiSeccion.tsx`
2. Importa en `App.tsx`
3. Agrega `<MiSeccion />` en el return

---

## 🌐 URLs Importantes

- **Local:** http://localhost:5173
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Docs Vite:** https://vitejs.dev
- **Docs React:** https://react.dev

---

## 🆘 Problemas Comunes

### ❌ "npm: command not found"
**Solución:** Instala Node.js desde https://nodejs.org

### ❌ "Port 5173 already in use"
**Solución:** 
```bash
# Cierra el proceso o usa otro puerto
npm run dev -- --port 3000
```

### ❌ "Module not found"
**Solución:**
```bash
rm -rf node_modules
npm install
```

### ❌ Build falla en Vercel
**Solución:** 
1. Prueba `npm run build` localmente
2. Arregla errores que aparezcan
3. Commit y push nuevamente

---

## 📱 Ver en tu móvil

1. Ejecuta `npm run dev`
2. Busca la línea que dice `Network: http://192.168.x.x:5173`
3. Abre esa URL en tu móvil (debe estar en la misma WiFi)

---

## 🔐 Variables de Entorno (si las necesitas)

1. Crea archivo `.env` en la raíz
2. Agrega variables con prefijo `VITE_`:
   ```
   VITE_API_URL=https://api.example.com
   ```
3. Úsalas en el código:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```
4. En Vercel: Settings → Environment Variables

---

## 📊 Checklist de Deploy

- [ ] `npm install` funciona
- [ ] `npm run dev` funciona
- [ ] `npm run build` funciona sin errores
- [ ] Probaste en Chrome, Firefox, Safari
- [ ] Probaste en móvil
- [ ] Verificaste modo claro/oscuro
- [ ] Verificaste switch ES/EN
- [ ] El formulario funciona
- [ ] Todas las imágenes cargan

---

## 🎓 Documentación Completa

Para información detallada, consulta:

- 📖 **README.md** - Descripción general
- 🚀 **DEPLOYMENT.md** - Guía completa de deploy
- 📝 **COMANDOS-UTILES.md** - Todos los comandos
- 📁 **ESTRUCTURA-PROYECTO.md** - Estructura de archivos
- ✅ **pre-deploy-check.md** - Checklist completo

---

## 💡 Tips Pro

1. **Usa Git** - Guarda versiones de tu trabajo
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```

2. **Auto-deploy** - Conecta GitHub con Vercel para deploy automático

3. **Preview branches** - Cada branch en Git = preview URL en Vercel

4. **Dominio custom** - Añade tu dominio en Settings → Domains

---

## 📞 Soporte

- **Vercel Support:** https://vercel.com/support
- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev

---

**🎉 ¡Todo está listo para deployar! El código está optimizado y configurado para Vercel.**

Si tienes alguna duda, consulta los archivos de documentación listados arriba. 🚀
