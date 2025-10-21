/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#22C55E',
        muted: '#E5E7EB',
        surface: '#FFFFFF',
        text: '#0F172A',
        warning: '#F59E0B'
      },
      borderRadius: {
        lg: '16px'
      }
    }
  },
  plugins: []
}
