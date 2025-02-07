## 🚀 Portafolio Web - Manuel Peña

### 📌 Descripción
Este es mi portafolio web desarrollado con [Astro](https://astro.build/), diseñado para presentar mis proyectos, habilidades y experiencia en desarrollo web. Incluye una sección sobre mí, proyectos destacados y un formulario de contacto.

---

## 🔧 Tecnologías Utilizadas
- **Frontend**: [Astro](https://astro.build/), HTML, CSS (TailwindCSS), JavaScript
- **Estilos**: Tailwind CSS
- **Optimización**: Open Graph Meta Tags, Twitter Cards, carga diferida de CSS
- **Accesibilidad & UX**: Diseño responsivo, modo oscuro, transiciones suaves
- **Seguridad**: Validaciones en formularios, protección contra XSS, medidas contra ataques de tabnabbing

---

## 📺 Estructura del Proyecto
```bash
📦 mi-portafolio
 ├📂 src
 ┃ ├📂 components
 ┃ ┃ ├📋 About.astro      # Sección "Sobre mí"
 ┃ ┃ ├📋 Contact.astro    # Formulario de contacto con Web3Forms
 ┃ ┃ ├📋 DarkModeToggle.astro # Botón de cambio de tema
 ┃ ┃ ├📋 Footer.astro     # Pie de página con redes sociales
 ┃ ┃ ├📋 Header.astro     # Barra de navegación
 ┃ ┃ ├📋 Hero.astro       # Sección de presentación
 ┃ ┃ ├📋 Projects.astro   # Sección de proyectos
 ┃ ├📂 layouts
 ┃ ┃ ├📋 PortafolioLayout.astro # Diseño principal
 ┃ ├📂 pages
 ┃ ┃ ├📋 index.astro      # Página de inicio
 ├📂 public
 ┃ └📋 assets             # Imágenes y otros archivos estáticos
 ├📂 styles
 ┃ └📋 global.css         # Estilos generales
 ├📋 package.json         # Dependencias del proyecto
 ├📋 astro.config.mjs     # Configuración de Astro
 ├📋 README.md            # Este archivo
```

---

## 🚀 Instalación y Uso
### 1⃣ Clonar el repositorio
```bash
git clone https://github.com/manpenap/mi-portafolio.git
cd mi-portafolio
```

### 2⃣ Instalar dependencias
```bash
npm install
```

### 3⃣ Ejecutar en modo desarrollo
```bash
npm run dev
```
El sitio estará disponible en `http://localhost:4321` (por defecto).

---

## 🌍 Despliegue
### 🔥 Vercel (Recomendado)
1. Instalar Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Ejecutar el despliegue:
   ```bash
   vercel
   ```

### 🌿 Opción Alternativa: GitHub Pages
Puedes exportar el sitio estático y alojarlo en GitHub Pages:
```bash
npm run build
```
Sube el contenido de `dist/` a GitHub Pages o cualquier otro hosting estático.

---

## 🔐 Seguridad Implementada
- ✅ **Protección contra XSS**: Se evita el uso de `innerHTML` y se sanitizan los datos antes de insertarlos en el DOM.
- ✅ **No exposición de claves API**: Se oculta la clave de Web3Forms usando variables de entorno.
- ✅ **Protección contra ataques de tabnabbing**: Se usa `rel="noopener noreferrer"` en enlaces externos.
- ✅ **Modo oscuro seguro**: Se usa `localStorage` de forma segura sin riesgo de manipulación maliciosa.
- ✅ **Optimización de carga**: Se cargan estilos de forma eficiente y se minimizan bloqueos de renderizado.

---

## 💌 Contacto
Si tienes alguna sugerencia o quieres colaborar, ¡contáctame!
- 📧 **Email**: [manpenap@gmail.com](mailto:manpenap@gmail.com)
- 💼 **LinkedIn**: [manuel-alejandro-pena](https://www.linkedin.com/in/manuel-alejandro-pena/)
- 🖥 **GitHub**: [manpenap](https://github.com/manpenap)

---