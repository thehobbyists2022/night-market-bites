/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#07090E',
          900: '#0B0F19',
          850: '#111726',
          800: '#161F33',
          700: '#25324D',
          600: '#3E4F73',
          mint: '#10B981',
          amber: '#F59E0B',
          crimson: '#F43F5E',
          cyan: '#06B6D4',
        },
        warm: {
          bg: '#FBF9F5',
          surface: '#FFFFFF',
          border: '#E8E3DA',
          muted: '#78716C',
          ink: '#1C1917',
          gold: '#D97706',
          accent: '#EA580C',
        },
        // Backwards-compatible aliases with upgraded vibrant tones
        paper: {
          bg: '#FBF9F5',
          card: '#FFFFFF',
          border: '#E8E3DA',
          soft: '#F4EFE6',
          ink: '#1C1917',
          muted: '#78716C',
          gold: '#EA580C',      // warm street food terracotta/amber
          persimmon: '#E11D48', // appetizing crimson
          olive: '#059669',
          wash: '#FAF6EF'
        }
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 20px rgba(28, 25, 23, 0.08)',
        'glow': '0 0 25px rgba(234, 88, 12, 0.25)',
        'amber-glow': '0 0 25px rgba(245, 158, 11, 0.3)',
        'crimson-glow': '0 0 25px rgba(225, 29, 72, 0.3)',
      },
      fontFamily: {
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Segoe UI"', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
