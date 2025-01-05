/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          color: '#000000',
        },
        dark: {
          background: '#1a202c',
          color: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
