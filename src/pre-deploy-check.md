# ✅ Checklist Pre-Deployment

Revisa esta lista antes de hacer deployment a producción:

## 🔍 Verificaciones Técnicas

- [ ] `npm install` se ejecuta sin errores
- [ ] `npm run dev` funciona correctamente en local
- [ ] `npm run build` compila sin errores
- [ ] No hay errores de TypeScript
- [ ] No hay warnings críticos en la consola

## 🎨 Verificaciones de Diseño

- [ ] Color principal #588157 se ve correctamente en todo el sitio
- [ ] Tipografías cargan correctamente (Outfit, Nunito Sans, Playfair Display)
- [ ] Modo claro/oscuro funciona sin problemas
- [ ] Bordes redondeados (2rem-3rem) se ven correctamente
- [ ] Las imágenes cargan correctamente

## 🌐 Verificaciones de Contenido

- [ ] Todos los textos están en español e inglés
- [ ] El switch ES/EN funciona correctamente
- [ ] Los precios se muestran en USD y ARS correctamente
- [ ] La información de contacto es correcta

## 📱 Verificaciones Responsive

- [ ] El sitio se ve bien en mobile (320px - 480px)
- [ ] El sitio se ve bien en tablet (768px - 1024px)
- [ ] El sitio se ve bien en desktop (1280px+)
- [ ] El menú mobile funciona correctamente
- [ ] Los switches son accesibles en mobile

## 🔗 Verificaciones de Navegación

- [ ] Navegación entre home y reservas funciona
- [ ] Los links del navbar funcionan correctamente
- [ ] Los links del footer funcionan correctamente
- [ ] El scroll suave funciona
- [ ] El botón CTA lleva a reservas

## 📝 Verificaciones del Formulario

- [ ] Todos los campos del formulario son accesibles
- [ ] Los campos obligatorios tienen asterisco (*)
- [ ] El select de países funciona
- [ ] La validación de email funciona
- [ ] El mensaje de éxito se muestra correctamente
- [ ] El formulario se resetea después de enviar

## 🎭 Verificaciones de Animaciones

- [ ] Las animaciones de fade-in funcionan
- [ ] Las transiciones son suaves
- [ ] No hay lag o stuttering en las animaciones
- [ ] El badge "Disponible" en reservas está animado

## 🔧 Configuración de Vercel

- [ ] `vercel.json` está presente
- [ ] Redirects funcionan correctamente
- [ ] Las rutas hash (#reservations) funcionan

## 📊 SEO Básico

- [ ] El título del sitio es descriptivo
- [ ] La meta descripción está presente
- [ ] El favicon se muestra correctamente
- [ ] Las imágenes tienen alt text apropiado

## 🚀 Listo para Deploy

Una vez que todos los items estén marcados:

1. Haz commit de cualquier cambio pendiente
2. Ejecuta `npm run build` una última vez
3. Deploya a Vercel
4. Verifica el sitio en producción
5. Comparte la URL con el cliente

---

## 🆘 Si algo no funciona:

1. Revisa la consola del navegador
2. Revisa los logs de build en Vercel
3. Verifica que todas las dependencias estén instaladas
4. Compara con la versión local que funciona

---

**Fecha del último check:** _________

**Realizado por:** _________

**URL de deployment:** _________
