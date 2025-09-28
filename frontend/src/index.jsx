import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/ThemeContext.jsx';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <StrictMode>
         <ThemeProvider>
         <App />
         </ThemeProvider>
      </StrictMode>
   </BrowserRouter>
   
)
