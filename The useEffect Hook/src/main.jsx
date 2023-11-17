import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  Your components will re-render an extra time to find bugs caused by impure rendering.
  Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
  Your components will be checked for usage of deprecated APIs.
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
