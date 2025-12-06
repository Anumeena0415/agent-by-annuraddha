/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vblue: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00c3ff',
          600: '#00a3d9',
          700: '#0082b3',
          800: '#00628c',
          900: '#004166',
          DEFAULT: '#00c3ff',
        },
        vdark: {
          50: '#e8eaed',
          100: '#c5c9d1',
          200: '#9fa6b3',
          300: '#798295',
          400: '#5c677f',
          500: '#3f4d69',
          600: '#374361',
          700: '#2d3856',
          800: '#232e4c',
          900: '#0a0f1a',
          950: '#050810',
          DEFAULT: '#0a0f1a',
        },
        accent: {
          cyan: '#00f5ff',
          purple: '#a855f7',
          pink: '#ec4899',
          gold: '#fbbf24',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
        'glow-gradient': 'linear-gradient(135deg, rgba(0,195,255,0.3) 0%, rgba(168,85,247,0.2) 100%)',
        'hero-pattern': 'radial-gradient(ellipse at 20% 20%, rgba(0,195,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(0,195,255,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(168,85,247,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(236,72,153,0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(0,245,255,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0,195,255,0.2) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-strong': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 30px rgba(0, 195, 255, 0.3)',
        'glow-strong': '0 0 60px rgba(0, 195, 255, 0.4)',
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 195, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 195, 255, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
