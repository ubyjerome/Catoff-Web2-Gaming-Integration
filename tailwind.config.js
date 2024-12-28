require('dotenv').config()

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './core/screens/components/*.ts',
    './core/screens/ASSETS/*.ts',

    './core/screens/index/*.ts',
    './core/screens/index/components/*.ts',
    './core/screens/index/constants/*.ts',

    './core/screens/games/*.ts',
    './core/screens/games/components/*.ts',
    './core/screens/games/constants/*.ts',

    './core/public/javascript/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        primary: {
          DEFAULT: `${process.env.COLOR_PRIMARY}`,
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'], // Enable group-hover for textColor
  },
  plugins: [],
  darkMode: 'media'
}