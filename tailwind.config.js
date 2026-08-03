/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Helvetica', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Helvetica', 'sans-serif'],
        mono: ['DM Mono', 'Plus Jakarta Sans', 'monospace'],
      },
      colors: {
        // Primary palette (approved)
        brand: {
          red: '#A91E2D',
          dark: '#1F2020',
        },
        // Secondary palette (approved)
        gray: {
          DEFAULT: '#4A4A4A',
          light: '#F0F0F0',
        },
        amber: '#F5A623',
        // Neutral ramp derived from #1F2020 and #4A4A4A
        ink: {
          50: '#FFFFFF',
          100: '#F0F0F0',
          200: '#D4D4D4',
          300: '#A8A8A8',
          400: '#7A7A7A',
          500: '#4A4A4A',
          600: '#3A3A3A',
          700: '#2A2A2A',
          800: '#1F2020',
          900: '#161717',
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
