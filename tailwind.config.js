export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A4D2E', // Deep Forest
          dark: '#102E1B', // Obsidian Green
        },
        surface: {
          DEFAULT: '#F8F9FA', // Off-White
          card: '#FFFFFF', // Pure White
        },
        text: {
          main: '#111111', // Carbon
          muted: '#666666', // Graphite
        },
        border: {
          subtle: 'rgba(26, 77, 46, 0.08)',
        },
        // Legacy/Utility mappings if needed ensuring we don't break everything instantly but guiding towards new system
        warning: '#D32F2F', // Red for errors/warnings
        rating: '#FFB400', // Star rating gold
        'brand-blue': '#3778c4', // Specific brand blue used in Layout
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.95rem', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        sm: '12px',
        lg: '24px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
        hover: '0 12px 24px rgba(26, 77, 46, 0.08)',
        card: '0 2px 8px rgba(0, 0, 0, 0.04)', // Alias for soft
      },
      maxWidth: {
        content: '1400px',
        'card-sm': '350px',
        card: '400px',
      },
      width: {
        'card-mobile': '85vw',
        'card-sm': '350px',
        card: '400px',
      },
      minHeight: {
        map: '420px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
