/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // NYT Cooking-style palette: white, near-black, grays, one paprika accent
        paper: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E6E4E1',
          soft: '#F7F6F3',
          ink: '#121212',
          muted: '#6F6B67',
          gold: '#C04A22',      // paprika red accent (buttons, active states, links)
          persimmon: '#C21E1E', // alerts / heart only
          olive: '#48621F',
          wash: '#F4F2EE'
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
