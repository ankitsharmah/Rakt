import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './shared/Header.jsx'
import Nav from './shared/Nav.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'react-hot-toast'
export const BASE_URL="https://rakt-api.onrender.com"
// export const BASE_URL="http://localhost:9191"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
    <BrowserRouter >

    <Header />
    <Nav/>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
