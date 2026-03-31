# Paletería IceCreamy 🍦

## ✅ Sitio Web Completamente Funcional

Sitio web estático profesional para una paletería, con diseño moderno, colorido y medidas de seguridad implementadas.

## 🔒 Medidas de Seguridad Implementadas

### Protección de Contenido:
- ✅ **No zoom**: Viewport configurado para prevenir zoom
- ✅ **No selección de texto**: `user-select: none` en todo el sitio (excepto formularios)
- ✅ **No clic derecho**: Deshabilitado completamente
- ✅ **No arrastrar imágenes**: Protección contra descarga de imágenes
- ✅ **No copiar/pegar**: Bloqueado fuera de campos de formulario

### Protección contra Inspección:
- ✅ **F12 bloqueado**: Tecla de DevTools deshabilitada
- ✅ **Ctrl+Shift+I bloqueado**: Inspector deshabilitado
- ✅ **Ctrl+Shift+J bloqueado**: Consola deshabilitada
- ✅ **Ctrl+Shift+C bloqueado**: Selector de elementos deshabilitado
- ✅ **Ctrl+U bloqueado**: Ver código fuente deshabilitado
- ✅ **Ctrl+S bloqueado**: Guardar página deshabilitado
- ✅ **Ctrl+P bloqueado**: Imprimir deshabilitado

### Protección Adicional:
- ✅ **Detección de DevTools**: Limpia la consola automáticamente
- ✅ **Mensaje de advertencia**: Alerta en consola sobre fraudes
- ✅ **Prevención de gestos táctiles**: Zoom bloqueado en móviles

## 📋 Información Completa del Sitio

### Datos de Contacto:
- **Dirección**: Av. Revolución 456, Col. Centro, Ciudad de México, CP 06000
- **Teléfono**: +52 (55) 1234-5678
- **Email**: hola@icecreamy.mx
- **Horario**: Lun-Dom: 10:00 AM - 9:00 PM

### Redes Sociales:
- Facebook: facebook.com/icecreamy
- Instagram: instagram.com/icecreamy
- TikTok: tiktok.com/@icecreamy
- WhatsApp: +52 (55) 1234-5678

## 🎨 Características del Diseño

- **Barra decorativa superior**: Gradiente colorido (Rosa → Amarillo → Turquesa)
- **Paleta de colores vibrante**: Rosa Fresa, Turquesa Menta, Amarillo Mango
- **Tipografías modernas**: Fredoka (títulos) y Quicksand (cuerpo)
- **Animaciones suaves**: Hover effects, floating elements, fade-in
- **100% Responsivo**: Menú móvil hamburguesa funcional
- **Footer completo**: Con toda la información de contacto y redes sociales

## 📁 Estructura de Archivos

```
Paleteria/
├── src/
│   ├── html/
│   │   ├── index.html          # Página principal
│   │   ├── nosotros.html       # Historia, Misión y Visión
│   │   ├── productos.html      # Catálogo de 9 sabores
│   │   └── servicios.html      # Servicios y contacto
│   │
│   ├── css/
│   │   └── main.css            # Estilos consolidados con seguridad
│   │
│   ├── js/
│   │   └── security.js         # Medidas de seguridad completas
│   │
│   └── img/                    # Carpeta para imágenes
│
├── .htaccess                   # Configuración Apache
├── package.json
└── README.md
```

## 🚀 Cómo Usar

### Abrir Directamente (Sin Servidor):
1. Navega a `src/html/`
2. Haz doble clic en `index.html`
3. ¡El sitio funciona completamente!

### Con Servidor Local (Opcional):
```bash
npm install
npm start
```
Luego visita `http://localhost:3000/html/index.html`

## 🎯 Páginas Incluidas

1. **Inicio** (`index.html`): 
   - Hero section con call-to-action
   - Productos destacados del mes
   - Sección de eventos

2. **Nosotros** (`nosotros.html`): 
   - Historia de la paletería
   - Misión y Visión
   - Valores de la empresa

3. **Sabores** (`productos.html`): 
   - Catálogo completo con 9 sabores
   - Filtros por categoría
   - Precios y descripciones

4. **Servicios** (`servicios.html`): 
   - Eventos privados
   - Venta al mayoreo
   - Formulario de contacto funcional

## 🔧 Personalización

### Cambiar Información de Contacto:
Edita el footer en cada archivo HTML (líneas del footer) con tu información real.

### Modificar Colores:
Edita `src/css/main.css` líneas 4-42 (variables CSS):
```css
:root {
    --color-primary: #FF3366;      /* Tu color principal */
    --color-secondary: #00C2CB;    /* Tu color secundario */
    --color-accent: #FFD700;       /* Tu color de acento */
}
```

### Agregar Imágenes Reales:
1. Guarda imágenes en `src/img/webp/`
2. Reemplaza los emojis en HTML con:
   ```html
   <img src="../img/webp/tu-imagen.webp" alt="Descripción">
   ```

## 🌐 Despliegue

Compatible con cualquier hosting estático:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Servidor Apache** (usa el `.htaccess` incluido)

## 💡 Tecnologías

- HTML5 (Semántico y accesible)
- CSS3 (Variables, Flexbox, Grid, Animaciones)
- JavaScript Vanilla (Seguridad y funcionalidad)
- Google Fonts (Fredoka & Quicksand)

## ⚠️ Nota Importante sobre Seguridad

Las medidas de seguridad implementadas son **disuasivas** para usuarios promedio. Usuarios técnicos avanzados aún pueden acceder al código fuente. Para protección real de contenido sensible, considera:
- Autenticación del lado del servidor
- Ofuscación de código JavaScript
- Protección de API endpoints
- DRM para contenido multimedia

---

**Desarrollado con 💖 para IceCreamy** 🍓🥭🍦

*Sitio 100% funcional, seguro y listo para producción*
