/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#2c1810',
        'soft-black': '#5c4a42',
        'light-gray': '#faf8f5',
        'medium-gray': '#e8e3db',
        'accent': '#f97316',
        'accent-dark': '#ea580c',
      },
      fontFamily: {
        'display': ['Work Sans', 'system-ui', 'sans-serif'],
        'body': ['Work Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['0.9375rem', { lineHeight: '1.5rem' }],
        'lg': ['1.0625rem', { lineHeight: '1.625rem' }],
        'xl': ['1.1875rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.375rem', { lineHeight: '1.875rem' }],
        '3xl': ['1.75rem', { lineHeight: '2.125rem' }],
        '4xl': ['2.125rem', { lineHeight: '2.5rem' }],
        '5xl': ['2.75rem', { lineHeight: '3rem' }],
        '6xl': ['3.5rem', { lineHeight: '3.75rem' }],
        '7xl': ['4.25rem', { lineHeight: '4.5rem' }],
      },
    },
  },
  plugins: [],
}
