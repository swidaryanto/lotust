import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize React Grab for development
if (import.meta.env.DEV) {
  // Optional dev-only helper. Safe to ignore if not installed.
  // @ts-expect-error - optional dependency not present in production builds.
  import('react-grab')
    .then((module) => {
      module.init?.()
    })
    .catch(() => {
      // no-op when react-grab is not installed locally
    })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
