import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './shared/Header.jsx'
import Nav from './shared/Nav.jsx'
export const BASE_URL="https://rakt-api.onrender.com"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <Nav/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
