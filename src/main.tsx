import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize React Grab for development
if (import.meta.env.DEV) {
  // Optional local helper. Use runtime import indirection so Vite doesn't try
  // to resolve "react-grab" when the package is not installed.
  const dynamicImport = new Function('s', 'return import(s)') as (s: string) => Promise<any>
  dynamicImport('react-grab')
    .then((module) => module.init?.())
    .catch(() => {
      // no-op when react-grab is not installed locally
    })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
