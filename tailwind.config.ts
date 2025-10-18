import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF8A00', foreground: '#1B1C1E' },
        secondary: { DEFAULT: '#5C6BF6', foreground: '#FFFFFF' },
        background: { DEFAULT: '#F7F9FD', subtle: '#FFFFFF', vivid: '#FFEFD5' },
        accent: { gold: '#FDBA1D', emerald: '#34D399', ruby: '#F9739A' },
        neutral: {
          50: '#FFFFFF',
          100: '#F0F4F8',
          200: '#D7DFEA',
          400: '#8A94A6',
          600: '#4C5464',
          900: '#1F242E'
        }
      },
      boxShadow: {
        card: '0 12px 30px rgba(92, 107, 246, 0.12)',
        soft: '0 6px 18px rgba(27, 28, 30, 0.08)'
      },
      borderRadius: { xl: '1.5rem' }
    }
  },
  plugins: []
}
export default config
