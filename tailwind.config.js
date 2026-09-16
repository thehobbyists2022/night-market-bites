/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial food-magazine palette (replaces the neon night theme)
        paper: {
          bg: '#FAF7F2',
          card: '#FFFFFF',
          border: '#E8E1D5',
          soft: '#F2EDE4',
          ink: '#1C1917',
          muted: '#78716C',
          gold: '#B45309',      // turmeric/curry gold — primary accent
          persimmon: '#C2410C', // terracotta red — secondary accent
          olive: '#3F6212',     // success / veggie green
          wash: '#F3E8DC'       // tinted wash for panels
        }
      },
      fontFamily: {
        display: ['Georgia', 'ui-serif', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      letterSpacing: { wideish: '0.14em' }
    }
  },
  plugins: []
};
