import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Mark that JS is running before first paint. Scroll-reveal only hides content
// when this class is present, so the page still renders fully if JS never loads
// (failed bundle, headless renderer, reader mode, print).
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
