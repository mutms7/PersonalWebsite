module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14122b',
        dusk: '#221c40',
        veil: '#2e2754',
        paper: '#f1ebdd',
        fade: '#9a93b8',
        thread: '#403868',
        glow: {
          cyan: '#67e8f9',
          emerald: '#6ee7b7',
          amber: '#fcd34d',
          rose: '#fda4af',
          blue: '#93c5fd'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        page: '76rem'
      }
    }
  },
  plugins: []
}
