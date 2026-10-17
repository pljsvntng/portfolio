/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        ash: 'var(--ash)',
        line: 'var(--line)',
        rust: '#B5511E',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        clamp1: 'clamp(2.5rem, 6vw, 5.5rem)',
      },
    },
  },
  plugins: [],
}
