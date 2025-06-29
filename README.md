# 🚀 Portafolio Personal - React + TypeScript + Tailwind CSS

Un portafolio personal moderno y profesional construido con React, TypeScript y Tailwind CSS, con soporte completo para Dark Mode y diseño responsivo.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 🌙 **Dark Mode**: Toggle automático entre modo claro y oscuro
- 📱 **Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento**: Construido con Vite para máxima velocidad
- 🔧 **TypeScript**: Código tipado y mantenible
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- ♿ **Accesible**: Cumple con estándares de accesibilidad web
- 📊 **Analytics Ready**: Preparado para Google Analytics

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación y toggle dark mode
│   ├── Hero.tsx        # Sección de presentación
│   ├── About.tsx       # Información personal y experiencia
│   ├── Skills.tsx      # Habilidades técnicas y blandas
│   ├── Projects.tsx    # Galería de proyectos
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── App.tsx             # Componente principal
├── App.css             # Estilos personalizados
├── index.css           # Estilos base
└── main.tsx            # Punto de entrada
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Personalización

### 1. Información Personal

Edita los siguientes archivos para personalizar tu información:

- **`src/components/Hero.tsx`**: Nombre, título y descripción principal
- **`src/components/About.tsx`**: Experiencia laboral, educación e información personal
- **`src/components/Skills.tsx`**: Habilidades técnicas y certificaciones
- **`src/components/Projects.tsx`**: Proyectos destacados
- **`src/components/Contact.tsx`**: Información de contacto

### 2. Colores y Temas

Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### 3. Imágenes y Assets

- Reemplaza el emoji en `Hero.tsx` con tu foto de perfil
- Agrega imágenes de proyectos en `Projects.tsx`
- Personaliza los iconos SVG según tus preferencias

### 4. Enlaces Sociales

Actualiza los enlaces en:
- `src/components/Hero.tsx` (enlaces sociales)
- `src/components/Contact.tsx` (enlaces de contacto)
- `src/components/Footer.tsx` (enlaces del footer)

## 📱 Secciones del Portafolio

### 🏠 Hero Section
- Presentación personal con avatar
- Título y descripción profesional
- Botones de llamada a la acción
- Enlaces a redes sociales

### 👤 About Section
- Información personal detallada
- Experiencia laboral cronológica
- Educación y certificaciones
- Pasiones e intereses

### 💻 Skills Section
- Habilidades técnicas organizadas por categorías
- Barras de progreso visuales
- Habilidades blandas
- Certificaciones destacadas
- Estadísticas profesionales

### 🚀 Projects Section
- Galería de proyectos con filtros
- Información detallada de cada proyecto
- Enlaces a demos y código
- Tecnologías utilizadas

### 📞 Contact Section
- Formulario de contacto funcional
- Información de contacto
- Horarios de disponibilidad
- Enlaces a redes sociales

### 🦶 Footer
- Información de copyright
- Enlaces rápidos
- Servicios ofrecidos
- Botón "Volver arriba"

## 🌙 Dark Mode

El portafolio incluye un sistema de Dark Mode completo:

- **Toggle Manual**: Botón en el header para cambiar entre modos
- **Preferencia del Sistema**: Detecta automáticamente la preferencia del usuario
- **Persistencia**: Guarda la preferencia en localStorage
- **Transiciones Suaves**: Cambios animados entre modos

## 📊 SEO y Performance

### Meta Tags
Agrega tus meta tags personalizados en `index.html`:

```html
<meta name="description" content="Tu descripción personal">
<meta name="keywords" content="desarrollo web, react, typescript">
<meta property="og:title" content="Fernando Perez - Desarrollador Full Stack">
<meta property="og:description" content="Tu descripción para redes sociales">
<meta property="og:image" content="URL de tu imagen de perfil">
```

### Analytics
Para agregar Google Analytics, incluye el script en `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID-DE-GA"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID-DE-GA');
</script>
```

## 🚀 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Deploy automático en cada push

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### GitHub Pages
1. Ejecuta `npm run build`
2. Sube el contenido de `dist` a la rama `gh-pages`
3. Configura GitHub Pages en tu repositorio

## 🔧 Configuración Avanzada

### Variables de Entorno
Crea un archivo `.env` para configuraciones:

```env
VITE_GA_ID=tu-id-de-google-analytics
VITE_CONTACT_EMAIL=tu-email@ejemplo.com
```

### Formulario de Contacto
Para hacer funcional el formulario de contacto, puedes usar:

- **EmailJS**: Para envío directo de emails
- **Netlify Forms**: Si usas Netlify
- **API Personal**: Backend propio para procesar formularios

### Animaciones
El proyecto incluye animaciones CSS personalizadas. Puedes agregar más en `src/App.css`:

```css
@keyframes tuAnimacion {
  from { /* estado inicial */ }
  to { /* estado final */ }
}

.tu-clase-animacion {
  animation: tuAnimacion 0.6s ease-out;
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Vite](https://vitejs.dev/) - Build tool
- [Heroicons](https://heroicons.com/) - Iconos SVG

## 📞 Contacto

- **Email**: fernando.javier97@hotmail.com
- **LinkedIn**: [Fernando Perez](https://linkedin.com/in/fernandopereztorres/)
- **GitHub**: [@liesexe](https://github.com/liesexe)
- **Portfolio**: [tu-portfolio.com](https://tu-portfolio.com)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
