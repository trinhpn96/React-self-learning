import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BeansCart from './BeansCart'
import Demo from './Demo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Demo /> */}
    {/* <hr /> */}
    <BeansCart />
    <hr />
    <App />

  </React.StrictMode>,
)
