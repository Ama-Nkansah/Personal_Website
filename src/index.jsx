import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyThemeProvider } from './components/theme-provider.jsx'; 
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </StrictMode>
)
