/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vblue: {
          DEFAULT: '#00d4ff',
          50: '#e6faff',
          100: '#ccf5ff',
          200: '#99ebff',
          300: '#66e1ff',
          400: '#33d7ff',
          500: '#00d4ff',
          600: '#00a9cc',
          700: '#007f99',
          800: '#005466',
          900: '#002a33',
        },
        vdark: {
          DEFAULT: '#0a0a0f',
          50: '#f5f5f6',
          100: '#e5e5e7',
          200: '#ccccd1',
          300: '#a3a3ab',
          400: '#71717b',
          500: '#505059',
          600: '#3f3f46',
          700: '#27272c',
          800: '#18181b',
          900: '#0a0a0f',
          950: '#050507',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
