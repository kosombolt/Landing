/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color system for better dark/light mode support
        background: {
          light: '#ffffff',
          dark: '#0f0f23',
        },
        surface: {
          light: '#f8fafc',
          dark: '#1a1a2e',
        },
        border: {
          light: '#e2e8f0',
          dark: '#2d2d44',
        },
        text: {
          primary: {
            light: '#1e293b',
            dark: '#f1f5f9',
          },
          secondary: {
            light: '#64748b',
            dark: '#94a3b8',
          },
          muted: {
            light: '#94a3b8',
            dark: '#64748b',
          }
        }
      },
      animation: {
        'theme-transition': 'theme-transition 0.5s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float-smooth 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in-scale': 'fade-in-scale 0.5s ease-out',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'theme-transition': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        'glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(147, 51, 234, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        'float-smooth': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-10px) rotate(1deg)' 
          },
          '66%': { 
            transform: 'translateY(-5px) rotate(-1deg)' 
          },
        },
        'shimmer': {
          '0%': { 
            transform: 'translateX(-100%)' 
          },
          '100%': { 
            transform: 'translateX(100%)' 
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3) translateY(50px)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05) translateY(-10px)',
          },
          '70%': {
            transform: 'scale(0.9) translateY(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0px)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(147, 51, 234, 0.4)',
            transform: 'scale(1.02)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      scale: {
        '102': '1.02',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};