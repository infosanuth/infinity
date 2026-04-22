import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const localization = {
  signIn: { start: { title: 'Login to Infinity' } },
  signUp: { start: { title: 'Sign up to Infinity', actionLink: 'Login' } },
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishableKey} localization={localization}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
