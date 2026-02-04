module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fb',
          100: '#dff0f7',
          200: '#bfe7ef',
          300: '#9fdde7',
          400: '#5fbfcd',
          500: '#2196a7',
          600: '#1a7b87',
          700: '#135a5f',
          800: '#0c3a3a'
        },
        accent: {
          50: '#f6fbf5',
          100: '#e8f6e6',
          200: '#cbeec9',
          300: '#ade6ab',
          400: '#74da78',
          500: '#35c43b',
          600: '#2ca132',
          700: '#1f6f22'
        }
      }
    }
  },
  plugins: []
}