/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Define aquí tu paleta de colores personalizada
        primary: {
          light: '#4f46e5',
          DEFAULT: '#4338ca',
          dark: '#3730a3',
        },
        background: {
          light: '#ffffff',
          dark: '#1f2937',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
};
