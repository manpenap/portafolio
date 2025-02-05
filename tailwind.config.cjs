/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Define aquí tu paleta de colores personalizada
        primary: {
          dark: '#222831',
          light: '#D9DFC6',
        },
        background: {
          
          light: '#ffffff',
          dark: '#31363F',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
