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
          default: '#17202a',
          dark: '#222831',
          light: '#D9DFC6',
        },
        background: {
          light: '#ffffff',
          'light-secondary': '#ebedef ',
          dark: '#31363F',
          'dark-secondary': '#17202A',
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
