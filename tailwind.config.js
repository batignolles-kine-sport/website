export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (referencing CSS variables)
        primary: {
          DEFAULT: 'var(--interactive-primary)',
          hover: 'var(--interactive-primary-hover)',
          active: 'var(--interactive-primary-active)',
          disabled: 'var(--interactive-primary-disabled)',
        },
        surface: {
          DEFAULT: 'var(--surface-base)',
          elevated: 'var(--surface-elevated)',
          subtle: 'var(--surface-subtle)',
          overlay: 'var(--surface-overlay)',
          inverse: 'var(--surface-inverse)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          inverse: 'var(--text-inverse)',
          disabled: 'var(--text-disabled)',
          // Pro hierarchy
          'pro-headline': 'var(--text-pro-headline)',
          'pro-subheadline': 'var(--text-pro-subheadline)',
          'pro-body': 'var(--text-pro-body)',
          'pro-caption': 'var(--text-pro-caption)',
        },
        interactive: {
          primary: 'var(--interactive-primary)',
          'primary-hover': 'var(--interactive-primary-hover)',
          secondary: 'var(--interactive-secondary)',
          'secondary-hover': 'var(--interactive-secondary-hover)',
          tertiary: 'var(--interactive-tertiary)',
          'tertiary-hover': 'var(--interactive-tertiary-hover)',
        },
        status: {
          success: 'var(--status-success)',
          'success-bg': 'var(--status-success-bg)',
          error: 'var(--status-error)',
          'error-bg': 'var(--status-error-bg)',
          warning: 'var(--status-warning)',
          'warning-bg': 'var(--status-warning-bg)',
          info: 'var(--status-info)',
          'info-bg': 'var(--status-info-bg)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          medium: 'var(--border-medium)',
          strong: 'var(--border-strong)',
          focus: 'var(--border-focus)',
        },
        // Legacy mappings (for backward compatibility)
        accent: {
          slate: '#64748b',
          teal: '#0d9488',
          'slate-dark': '#334155',
        },
        warning: '#D32F2F',
        rating: '#FFB400',
        'brand-blue': '#3778c4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        // Primitive scale (with tracking and leading)
        '2xs': ['0.625rem', {
          lineHeight: 'var(--primitive-leading-normal)',
          letterSpacing: 'var(--primitive-tracking-widest)',
        }],
        xs: ['var(--primitive-font-size-xs)', {
          lineHeight: 'var(--primitive-leading-normal)',
          letterSpacing: 'var(--primitive-tracking-wide)',
        }],
        sm: ['var(--primitive-font-size-sm)', {
          lineHeight: 'var(--primitive-leading-normal)',
          letterSpacing: 'var(--primitive-tracking-normal)',
        }],
        base: ['var(--primitive-font-size-base)', {
          lineHeight: 'var(--primitive-leading-normal)',
          letterSpacing: 'var(--primitive-tracking-normal)',
        }],
        lg: ['var(--primitive-font-size-lg)', {
          lineHeight: 'var(--primitive-leading-snug)',
          letterSpacing: 'var(--primitive-tracking-normal)',
        }],
        xl: ['var(--primitive-font-size-xl)', {
          lineHeight: 'var(--primitive-leading-snug)',
          letterSpacing: 'var(--primitive-tracking-tight)',
        }],
        '2xl': ['var(--primitive-font-size-2xl)', {
          lineHeight: 'var(--primitive-leading-tight)',
          letterSpacing: 'var(--primitive-tracking-tight)',
        }],
        '3xl': ['var(--primitive-font-size-3xl)', {
          lineHeight: 'var(--primitive-leading-tight)',
          letterSpacing: 'var(--primitive-tracking-tighter)',
        }],
        '4xl': ['var(--primitive-font-size-4xl)', {
          lineHeight: 'var(--primitive-leading-tight)',
          letterSpacing: 'var(--primitive-tracking-tighter)',
        }],
        '5xl': ['var(--primitive-font-size-5xl)', {
          lineHeight: 'var(--primitive-leading-tight)',
          letterSpacing: 'var(--primitive-tracking-tighter)',
        }],
        '6xl': ['var(--primitive-font-size-6xl)', {
          lineHeight: 'var(--primitive-leading-tight)',
          letterSpacing: 'var(--primitive-tracking-tighter)',
        }],
        // Fluid typography
        'fluid-sm': 'var(--fluid-text-sm)',
        'fluid-base': 'var(--fluid-text-base)',
        'fluid-lg': 'var(--fluid-text-lg)',
        'fluid-xl': 'var(--fluid-text-xl)',
        'fluid-2xl': 'var(--fluid-text-2xl)',
        'fluid-3xl': 'var(--fluid-text-3xl)',
        'fluid-4xl': 'var(--fluid-text-4xl)',
        'fluid-5xl': 'var(--fluid-text-5xl)',
      },
      spacing: {
        // 8px soft grid
        '1': 'var(--primitive-space-1)',   // 4px
        '2': 'var(--primitive-space-2)',   // 8px
        '3': 'var(--primitive-space-3)',   // 12px
        '4': 'var(--primitive-space-4)',   // 16px
        '5': 'var(--primitive-space-5)',   // 20px
        '6': 'var(--primitive-space-6)',   // 24px
        '8': 'var(--primitive-space-8)',   // 32px
        '10': 'var(--primitive-space-10)', // 40px
        '12': 'var(--primitive-space-12)', // 48px
        '16': 'var(--primitive-space-16)', // 64px
        '20': 'var(--primitive-space-20)', // 80px
        '24': 'var(--primitive-space-24)', // 96px
        '32': 'var(--primitive-space-32)', // 128px
        // Fluid spacing
        'fluid-sm': 'var(--fluid-space-sm)',
        'fluid-md': 'var(--fluid-space-md)',
        'fluid-lg': 'var(--fluid-space-lg)',
        'fluid-xl': 'var(--fluid-space-xl)',
      },
      borderRadius: {
        sm: 'var(--primitive-radius-sm)',   // 8px
        md: 'var(--primitive-radius-md)',   // 12px
        lg: 'var(--primitive-radius-lg)',   // 16px
        full: 'var(--primitive-radius-full)',
        pill: '9999px', // Legacy
      },
      boxShadow: {
        sm: 'var(--primitive-shadow-sm)',
        DEFAULT: 'var(--primitive-shadow-base)',
        md: 'var(--primitive-shadow-md)',
        lg: 'var(--primitive-shadow-lg)',
        xl: 'var(--primitive-shadow-xl)',
        // Component shadows
        soft: 'var(--primitive-shadow-sm)',     // Legacy
        hover: 'var(--primitive-shadow-lg)',    // Legacy
        card: 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
        'input-focus': 'var(--input-shadow-focus)',
        modal: 'var(--modal-shadow)',
      },
      maxWidth: {
        content: 'var(--section-max-width)',           // 1200px
        'content-text': 'var(--section-content-max-width)', // 800px
        modal: 'var(--modal-max-width)',               // 672px
        // Legacy
        'card-sm': '350px',
        card: '400px',
      },
      width: {
        'card-mobile': '85vw',
        'card-sm': '350px',
        card: '400px',
      },
      minHeight: {
        btn: 'var(--btn-min-height)',  // 48px (HIG touch target)
        map: '360px',
      },
      transitionDuration: {
        fast: 'var(--primitive-duration-fast)',     // 150ms
        DEFAULT: 'var(--primitive-duration-base)',  // 200ms
        slow: 'var(--primitive-duration-slow)',     // 300ms
        slower: 'var(--primitive-duration-slower)', // 500ms
      },
      transitionTimingFunction: {
        'ease-in': 'var(--primitive-ease-in)',
        'ease-out': 'var(--primitive-ease-out)',
        'ease-in-out': 'var(--primitive-ease-in-out)',
        spring: 'var(--primitive-ease-spring)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn var(--primitive-duration-slow) var(--primitive-ease-out) forwards',
        'slide-up': 'slideUp var(--primitive-duration-slow) var(--primitive-ease-spring) forwards',
        'scale-in': 'scaleIn var(--primitive-duration-base) var(--primitive-ease-out) forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient-primary': {
          'background-image': 'linear-gradient(to right, #404134, #73755c)', /* Olive → Sage */
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        // Component utilities
        '.btn-base': {
          'padding': 'var(--btn-padding-y) var(--btn-padding-x)',
          'border-radius': 'var(--btn-radius)',
          'font-size': 'var(--btn-font-size)',
          'font-weight': 'var(--btn-font-weight)',
          'min-height': 'var(--btn-min-height)',
          'transition': 'var(--btn-transition)',
        },
        '.card-base': {
          'padding': 'var(--card-padding)',
          'border-radius': 'var(--card-radius)',
          'background': 'var(--card-bg)',
          'border': 'var(--card-border)',
          'box-shadow': 'var(--card-shadow)',
          'transition': 'var(--card-transition)',
        },
        '.input-base': {
          'padding': 'var(--input-padding-y) var(--input-padding-x)',
          'border-radius': 'var(--input-radius)',
          'border': 'var(--input-border-width) solid var(--input-border-color)',
          'font-size': 'var(--input-font-size)',
          'background': 'var(--input-bg)',
          'transition': 'var(--input-transition)',
        },
      })
    }
  ],
};
