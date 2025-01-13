/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          color: '#000000',
          primary: '#4A90E2', // Bright Blue for buttons and active items
          secondary: '#A2B9D6', // Soft Blue for muted items
          accent: '#F5A623', // Warm Yellow for highlights
          border: '#E0E0E0', // Light border color
          chatBackground: '#F7F8FA', // Chat bubble background
        },
        dark: {
          background: '#2D3748', // Dark background
          color: '#ffffff', // White text
          primary: '#63B3ED', // Soft Blue for interactive elements
          secondary: '#CBD5E0', // Soft Gray for secondary elements
          accent: '#F6AD55', // Warm accent color
          border: '#4A5568', // Darker border color
          chatBackground: '#4A5568', // Darker chat bubble background
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
        deep: '0 8px 12px rgba(0, 0, 0, 0.2)',
        button: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        18: '4.5rem', // Adjust spacing for better design layout
        100: '25rem', // Extra large space for wider screens
      },
    },
  },
  plugins: [],
};
