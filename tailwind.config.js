export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4D2E',
        'primary-900': '#143d24',
        'primary-950': '#0B2216',
        secondary: '#F9F9F7',
        accent: '#4DB8A0',
        'accent-light': '#E8F5F1',
        surface: '#F8F9FC',
        'surface-muted': '#F2F7F5',
        'text-main': '#0f172a',
        'text-base': '#0f172a',
        'text-light': '#475569',
        'text-muted': '#64748b',
        'border-soft': '#e2e8f0',
        warning: '#F59E0B'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.95rem', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        pill: '9999px',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 8px 18px -10px rgba(15, 23, 42, 0.25)',
        elevated: '0 14px 30px -14px rgba(12, 77, 46, 0.45)',
        card: '0 20px 32px -12px rgba(15, 23, 42, 0.15)',
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
      }
    },
  },
  plugins: [],
};
