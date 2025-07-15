import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRD Color Scheme
        'bg-primary': '#F5ECEB',      // Soft page background
        'brand-primary': '#A26769',   // Headers, buttons
        'brand-accent': '#355C7D',    // Icons, quotes, buttons
        'text-primary': '#2F2F2F',    // Main text color
        
        // Additional semantic colors
        'brand-primary-hover': '#8B5A5C',
        'brand-accent-hover': '#2A4A63',
        'text-secondary': '#666666',
        'text-light': '#FFFFFF',
        
        // Additional utility colors
        background: '#F5ECEB',
        foreground: '#2F2F2F',
        card: '#FFFFFF',
        'card-foreground': '#2F2F2F',
        border: '#E5E5E5',
        input: '#F8F8F8',
        ring: '#A26769',
        primary: '#A26769',
        'primary-foreground': '#FFFFFF',
        secondary: '#355C7D',
        'secondary-foreground': '#FFFFFF',
        accent: '#355C7D',
        'accent-foreground': '#FFFFFF',
        destructive: '#DC2626',
        'destructive-foreground': '#FFFFFF',
        muted: '#F5F5F5',
        'muted-foreground': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;