import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <App />
      <Toaster position="bottom-right"/>
   </AuthProvider>
  </StrictMode>,
)
