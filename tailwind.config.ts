import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#C0392B',
        'brand-secondary': '#2C3E50',
        'brand-accent': '#F39C12',
        'brand-light': '#FDFEFE',
        'brand-gray': '#7F8C8D',
        'brand-red': '#C0392B',
        'brand-dark': '#2C3E50',
        'brand-gold': '#F39C12',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-up': 'slideInUp 1s ease-out forwards',
        'slide-in-from-left': 'slideInFromLeft 0.5s ease-out forwards',
        'kenburns': 'kenburns 15s ease-out forwards',
        'modal-in': 'modalIn 0.3s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.1) translate(0, 0)' },
          '100%': { transform: 'scale(1.25) translate(2%, -2%)' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};

export default config;