/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: '16px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
      '9xl': '96px',
    },
    extend: {
      colors: {
        primary: '#e8c71c',
        secondary: {
          100: '#7a7a7a',
          300: '#5f5f5f',
        },
      },
      fontFamily: {
        heading: ['URW Geometric', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
