/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Night-market neon palette (deliberately distinct from the Food Master series)
        night: {
          bg: '#0B1026',
          panel: '#121A38',
          card: '#161F42',
          border: '#253158',
          lantern: '#FFC24B',   // paper-lantern amber (primary)
          neonred: '#FF4D6D',   // stall sign red (accent)
          mint: '#3DDC97',      // vendor-tarp green (success)
          ink: '#F1F5FB',       // primary text
          muted: '#93A0BF'      // secondary text
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Noto Sans TC"', '"Noto Sans KR"', '"Noto Sans Thai"', '"Noto Sans TC"', 'sans-serif']
      }
    }
  },
  plugins: []
};
